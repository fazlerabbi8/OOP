"use strict";
const user = {
    name: "Fazle Rabbi",
    email: "fazlerabbi@gmail.com",
    isActive: true,
    deactivate() {
        this.isActive = false;
        console.log(`${this.name} has been deactivate.`);
    },
};
user.deactivate();
console.log(user.isActive);
