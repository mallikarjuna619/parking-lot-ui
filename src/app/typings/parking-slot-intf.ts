import { Vehicle } from "./vehicle";

export interface ParkingSlotData{
    id: number;
    allocated: boolean;
    vehicle: Vehicle;
    vehicleInTime: string;
    vehicleOutTime: string;
}