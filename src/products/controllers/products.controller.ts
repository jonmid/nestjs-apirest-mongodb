import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

// import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';
import { ProductsService } from './../services/products.service';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  @ApiOperation({ summary: 'List of products' })
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    // return {
    //   message: `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    // };
    return this.productsService.findAll();
  }

  @Get('filter')
  getProductFilter() {
    return `yo soy un filter`;
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('productId') productId: string) {
    return this.productsService.findOne(productId);
  }

  // @Post()
  // create(@Body() payload: CreateProductDto) {
  //   // return {
  //   //   message: 'accion de crear',
  //   //   payload,
  //   // };
  //   return this.productsService.create(payload);
  // }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() payload: UpdateProductDto) {
  //   return this.productsService.update(+id, payload);
  // }

  // @Delete(':id')
  // delete(@Param('id') id: string) {
  //   return this.productsService.remove(+id);
  // }
}
