import { Test, TestingModule } from '@nestjs/testing';
import { PencilsController } from './pencils.controller';
import { PencilsService } from './pencils.service';

describe('PencilsController', () => {
  let controller: PencilsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PencilsController],
      providers: [PencilsService],
    }).compile();

    controller = module.get<PencilsController>(PencilsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
