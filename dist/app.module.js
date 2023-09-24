"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const posts_module_1 = require("./posts/posts.module");
const typeorm_1 = require("@nestjs/typeorm");
const vehicle_module_1 = require("./vehicle/vehicle.module");
const vehicle_entity_1 = require("./database/entity/vehicle.entity");
const rental_entity_1 = require("./database/entity/rental.entity");
const users_entity_1 = require("./database/entity/users.entity");
const valid_vehicle_types_entity_1 = require("./database/entity/valid_vehicle_types.entity");
const Valid_vehicle_use_types_entity_1 = require("./database/entity/Valid_vehicle_use_types.entity");
const valid_user_types_entity_1 = require("./database/entity/valid_user_types.entity");
const users_module_1 = require("./users/users.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: "localhost",
                port: 3306,
                username: "root",
                password: "Welcome123",
                database: "all_cars",
                entities: ['dist/**/*.entity{.ts,.js}'],
                synchronize: false
            }),
            typeorm_1.TypeOrmModule.forFeature([rental_entity_1.Rental, users_entity_1.Users, vehicle_entity_1.Vehicle, valid_vehicle_types_entity_1.ValidVehicleType, Valid_vehicle_use_types_entity_1.ValidVehicleUseType, valid_user_types_entity_1.UserType]),
            posts_module_1.PostsModule,
            vehicle_module_1.VehicleModule,
            users_module_1.UsersModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map