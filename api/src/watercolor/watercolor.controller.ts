import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WatercolorService } from './watercolor.service';
import { CreateWatercolorDto } from './dto/create-watercolor.dto';
import { UpdateWatercolorDto } from './dto/update-watercolor.dto';

@Controller('watercolor')
export class WatercolorController {
  constructor(private readonly watercolorService: WatercolorService) {}

  @Post()
  create(@Body() createWatercolorDto: CreateWatercolorDto) {
    return this.watercolorService.create(createWatercolorDto);
  }

  @Get()
  findAll() {
    return this.watercolorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.watercolorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWatercolorDto: UpdateWatercolorDto) {
    return this.watercolorService.update(+id, updateWatercolorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.watercolorService.remove(+id);
  }
}
