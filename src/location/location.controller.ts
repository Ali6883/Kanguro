import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards, Query } from '@nestjs/common';
import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Locations')
@ApiBearerAuth()
@Controller('locations')

export class LocationController {
  constructor(private readonly locationService: LocationService) {}
  @Get()
  findAll() {
    return this.locationService.findAll();
  }
  @Get('/search')
  async findNearest(
    @Query('lat') lat: number,
    @Query('lon') lon: number,
  ) {
    return this.locationService.findNearest(lat, lon);
  }
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.locationService.findOne(+id);
  }

  @Post()
  create(@Body() createLocationDto: CreateLocationDto) {
    return this.locationService.create(createLocationDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateLocationDto: UpdateLocationDto) {
    return this.locationService.update(+id, updateLocationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.locationService.remove(+id);
  }
}