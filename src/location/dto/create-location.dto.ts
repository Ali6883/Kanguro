import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateLocationDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  address: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ example: 40.785091, description: 'The latitude of the location' })
  latitude: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ example: -73.968285, description: 'The longitude of the location' })
  longitude: number;

  created_at?: string;

  updated_at?: string; 
}