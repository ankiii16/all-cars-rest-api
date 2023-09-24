"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
const typeorm_1 = require("typeorm");
const rental_entity_1 = require("./rental.entity");
const users_entity_1 = require("./users.entity");
const valid_vehicle_types_entity_1 = require("./valid_vehicle_types.entity");
let Vehicle = class Vehicle {
};
exports.Vehicle = Vehicle;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Vehicle.prototype, "car_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.Users, (user) => user.vehicles),
    __metadata("design:type", users_entity_1.Users)
], Vehicle.prototype, "owner_user_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Vehicle.prototype, "vehicle_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Vehicle.prototype, "vehicle_description", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Vehicle.prototype, "vehicle_price_weekly", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => valid_vehicle_types_entity_1.ValidVehicleType, (vehicle_type) => vehicle_type.vehicles),
    __metadata("design:type", String)
], Vehicle.prototype, "vehicle_type", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => valid_vehicle_types_entity_1.ValidVehicleType, (vehicle_use_type) => vehicle_use_type.vehicles),
    __metadata("design:type", String)
], Vehicle.prototype, "vehicle_use_type", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => rental_entity_1.Rental, (rental) => rental.car_id),
    __metadata("design:type", Array)
], Vehicle.prototype, "rental_history", void 0);
exports.Vehicle = Vehicle = __decorate([
    (0, typeorm_1.Entity)()
], Vehicle);
//# sourceMappingURL=vehicle.entity.js.map