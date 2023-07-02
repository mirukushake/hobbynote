import { Test, TestingModule } from '@nestjs/testing';
import { EmbroideryDesignController } from './embroidery-design.controller';
import { EmbroideryDesignService } from './embroidery-design.service';

describe('EmbroideryDesignController', () => {
  let controller: EmbroideryDesignController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmbroideryDesignController],
      providers: [EmbroideryDesignService],
    }).compile();

    controller = module.get<EmbroideryDesignController>(EmbroideryDesignController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
