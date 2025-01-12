import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from './entities/location.entity';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { ApiResponse } from 'src/common/dto/api-response.dto';
import { ResponseCode, ResponseMessage } from 'src/constants/response.constants';
import * as haversine from 'haversine';

@Injectable()
export class LocationService {
  private readonly logger = new Logger(LocationService.name);

  constructor(
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,
    
  ) {}

  async findAll(): Promise<ApiResponse<Location[]>> {
    try {
      const locations = await this.locationRepository.find();
      return {
        code: ResponseCode.SUCCESS,
        message: ResponseMessage.SUCCESS,
        data: locations,
      };
    } catch (error) {
      return {
        code: ResponseCode.ERROR,
        message: ResponseMessage.ERROR,
        data: [],
      };
    }
  }
  async findNearest(lat: number, lon: number, limit: number = 10) {
    try {
      const earthRadius = 6371; // Earth radius in kilometers
  
      const locations = await this.locationRepository
        .createQueryBuilder('location')
        .addSelect(
          `(
            ${earthRadius} * acos(
              cos(radians(:lat)) * cos(radians(location.latitude)) *
              cos(radians(location.longitude) - radians(:lon)) +
              sin(radians(:lat)) * sin(radians(location.latitude))
            )
          )`,
          'distance',
        )
        .setParameters({ lat, lon })
        .orderBy('distance', 'ASC')
        .limit(limit)
        .getMany(); 
  
      // Return the full location data along with the distance      
      return {
        code: ResponseCode.SUCCESS,
        message: ResponseMessage.SUCCESS,
        data: locations.map((loc) => ({
          id: loc.id,
          name: loc.name,
          latitude: loc.latitude,
          longitude: loc.longitude,
          address: loc.address, 
          created_at: loc.created_at, 
          updated_at: loc.updated_at, 
          distance: loc['distance'],  
        })),
      };
      ;
    } catch (error) {
      throw new HttpException(
        'An error occurred while processing the request.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  
  async findOne(id: number): Promise<ApiResponse<Location>> {
    try {
      const location = await this.locationRepository.findOneBy({ id });
      if (!location) {
        return {
          code: ResponseCode.NOT_FOUND,
          message: ResponseMessage.NOT_FOUND,
          data: null,
        };
      }
      return {
        code: ResponseCode.SUCCESS,
        message: ResponseMessage.SUCCESS,
        data: location,
      };
    } catch (error) {
      return {
        code: ResponseCode.ERROR,
        message: ResponseMessage.ERROR,
        data: null,
      };
    }
  }

  async create(createLocationDto: CreateLocationDto): Promise<ApiResponse<Location>> {
    try {
      const location = this.locationRepository.create(createLocationDto);
      const savedLocation = await this.locationRepository.save(location);
      return {
        code: ResponseCode.SUCCESS,
        message:ResponseMessage.CREATEDSUCCESSFULLY,
        data: savedLocation,
      };
    } catch (error) {
      return {
        code: ResponseCode.ERROR,
        message: ResponseMessage.ERROR,
        data: null,
      };
    }
  }

  async update(id: number, updateLocationDto: UpdateLocationDto): Promise<ApiResponse<Location>> {
    try {
      await this.locationRepository.update(id, updateLocationDto);
      const updatedLocation = await this.findOne(id); // Fetch the updated location
      return updatedLocation;
      
    } catch (error) {
      return {
        code: ResponseCode.ERROR,
        message: ResponseMessage.ERROR,
        data: null,
      };
    }
  }

  async remove(id: number): Promise<ApiResponse<void>> {
    try {
      await this.locationRepository.delete(id);
      return {
        code: ResponseCode.SUCCESS,
        message:ResponseMessage.DELETEDSUCCESSFULLY,
        data: undefined,
      };
    } catch (error) {
      return {
        code: ResponseCode.ERROR,
        message: ResponseMessage.ERROR,
        data: undefined,
      };
    }
  }
}