import { Role } from "./Role";

export function hasRole(roles: Role[], role: Role) {
    return roles.includes(role);
}
