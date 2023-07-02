import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmbroideryDesignService } from './embroidery-design.service';
import { CreateEmbroideryDesignDto } from './dto/create-embroidery-design.dto';
import { UpdateEmbroideryDesignDto } from './dto/update-embroidery-design.dto';

@Controller('embroidery-design')
export class EmbroideryDesignController {
  constructor(private readonly embroideryDesignService: EmbroideryDesignService) {}

  @Post()
  create(@Body() createEmbroideryDesignDto: CreateEmbroideryDesignDto) {
    return this.embroideryDesignService.create(createEmbroideryDesignDto);
  }

  @Get()
  findAll() {
    return this.embroideryDesignService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.embroideryDesignService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmbroideryDesignDto: UpdateEmbroideryDesignDto) {
    return this.embroideryDesignService.update(+id, updateEmbroideryDesignDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.embroideryDesignService.remove(+id);
  }
}
