import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PigmentsService } from './pigments.service';
import { CreatePigmentDto } from './dto/create-pigment.dto';
import { UpdatePigmentDto } from './dto/update-pigment.dto';

@Controller('pigments')
export class PigmentsController {
  constructor(private readonly pigmentsService: PigmentsService) {}

  @Post()
  create(@Body() createPigmentDto: CreatePigmentDto) {
    return this.pigmentsService.create(createPigmentDto);
  }

  @Get()
  findAll() {
    return this.pigmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pigmentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePigmentDto: UpdatePigmentDto) {
    return this.pigmentsService.update(+id, updatePigmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pigmentsService.remove(+id);
  }
}
