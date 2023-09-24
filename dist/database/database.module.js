"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const rental_entity_1 = require("./entity/rental.entity");
const users_entity_1 = require("./entity/users.entity");
const valid_user_types_entity_1 = require("./entity/valid_user_types.entity");
const valid_vehicle_types_entity_1 = require("./entity/valid_vehicle_types.entity");
const Valid_vehicle_use_types_entity_1 = require("./entity/Valid_vehicle_use_types.entity");
const vehicle_entity_1 = require("./entity/vehicle.entity");
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'Welcome123',
                database: 'all_cars',
                entities: [rental_entity_1.Rental, users_entity_1.Users, vehicle_entity_1.Vehicle, valid_vehicle_types_entity_1.ValidVehicleType, Valid_vehicle_use_types_entity_1.ValidVehicleUseType, valid_user_types_entity_1.UserType],
                synchronize: true,
            }),
        ],
    })
], DatabaseModule);
//# sourceMappingURL=database.module.js.map