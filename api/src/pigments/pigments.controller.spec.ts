import { Test, TestingModule } from '@nestjs/testing';
import { PigmentsController } from './pigments.controller';
import { PigmentsService } from './pigments.service';

describe('PigmentsController', () => {
  let controller: PigmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PigmentsController],
      providers: [PigmentsService],
    }).compile();

    controller = module.get<PigmentsController>(PigmentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
