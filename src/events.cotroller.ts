import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common'

@Controller('/events')
export class EventsController {
  @Get()
  findAll() {
    return [
      {
        id: 1,
        name: 'First Event',
      },
      {
        id: 2,
        name: 'First Event',
      },
      {
        id: 3,
        name: 'First Event',
      },
      {
        id: 4,
        name: 'First Event',
      },
      {
        id: 5,
        name: 'First Event',
      },
    ]
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return id
  }

  @Post()
  create(@Body() input) {
    return input
  }

  @Patch(':id')
  update(@Param('id') id, @Body() input) {
    return input
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id) {}
}
