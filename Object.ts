type User = {
    name: string;
    email: string;
    isActive: boolean;
    deactivate(): void;
}

const user: User = {
    name:"Fazle Rabbi",
    email: "fazlerabbi@gmail.com",
    isActive: true,
    deactivate() {
        this.isActive = false;
        console.log(`${this.name} has been deactivate.`);
    },
};

user.deactivate();
console.log(user.isActive);