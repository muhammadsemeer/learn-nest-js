import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/createNinjaDto';

@Controller('ninjas')
export class NinjasController {
  @Get()
  getNinjas(@Query('name') name: string) {
    return [
      {
        name,
      },
    ];
  }

  @Get(':id')
  getNinja(@Param('id') id: string) {
    return {
      id,
      name: 'Ninja 1',
    };
  }

  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return createNinjaDto;
  }

  @Put(':id')
  updateNinja(@Param('id') id: string, @Body() createNinjaDto: CreateNinjaDto) {
    return {
      id,
      ...createNinjaDto,
    };
  }

  @Delete(':id')
  deleteNinja(@Param('id') id: string) {
    return {
      id,
      message: 'Ninja deleted',
    };
  }
}
