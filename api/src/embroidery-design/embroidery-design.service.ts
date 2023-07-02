import { Injectable } from '@nestjs/common';
import { CreateEmbroideryDesignDto } from './dto/create-embroidery-design.dto';
import { UpdateEmbroideryDesignDto } from './dto/update-embroidery-design.dto';

@Injectable()
export class EmbroideryDesignService {
  create(createEmbroideryDesignDto: CreateEmbroideryDesignDto) {
    return 'This action adds a new embroideryDesign';
  }

  findAll() {
    return `This action returns all embroideryDesign`;
  }

  findOne(id: number) {
    return `This action returns a #${id} embroideryDesign`;
  }

  update(id: number, updateEmbroideryDesignDto: UpdateEmbroideryDesignDto) {
    return `This action updates a #${id} embroideryDesign`;
  }

  remove(id: number) {
    return `This action removes a #${id} embroideryDesign`;
  }
}
