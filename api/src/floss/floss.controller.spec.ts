import { Test, TestingModule } from '@nestjs/testing';
import { FlossController } from './floss.controller';
import { FlossService } from './floss.service';

describe('FlossController', () => {
  let controller: FlossController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FlossController],
      providers: [FlossService],
    }).compile();

    controller = module.get<FlossController>(FlossController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
