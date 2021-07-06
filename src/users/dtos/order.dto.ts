import { IsMongoId, IsNotEmpty, IsDate, IsArray } from 'class-validator';
import { OmitType, PartialType } from '@nestjs/swagger';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsMongoId()
  readonly customer: string;

  @IsDate()
  @IsNotEmpty()
  readonly date: Date;

  @IsArray()
  @IsNotEmpty()
  readonly products: string[];
}

/**
 * OmitType: permite ignorar o omitir que products cuando se
 * actualice una ORDEN no valide para que lo deje actualizar.
 */
export class UpdateOrderDto extends PartialType(
  OmitType(CreateOrderDto, ['products']),
) {}
