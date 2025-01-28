import { body, param, ValidationChain } from "express-validator";

export class UserValidator {
  public static validateUser(crudMethod: string) {
    switch (crudMethod) {
      case "create":
        return [
          body("userEmail").exists().trim().isEmail(),

          body("name").exists().trim().isLength({ min: 4 }),

          body("phone").exists().isLength({ min: 10, max: 11 }).isNumeric(),

          body("isPremium").optional().isBoolean(),
        ];
        break;
      default:
        return [];
        break;
    }
  }
}

export class ReserveValidator {
  public static validateReserve(crudMethod: string) {
    switch (crudMethod) {
      case "create":
        return [
          body("userEmail").exists().trim().isEmail(),

          body("address").exists().trim().isLength({min:10}),
        ];
        break;
      default:
        return [];
        break;
    }
  }
}
