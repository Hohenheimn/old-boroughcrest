export type customer = {
    name: { first: string; middle: string; last: string };
    coOwner: { first: string; middle: string; last: string };
    companyName: string;
    contactName: string;
    contactNumber: string;
    email: string;
    idNumber: number;
    class: string;
    citizenship: string;
    tinNo: string;
    registeredAddress: string;
    mailingAddress: string;
};
export type listCustomer = {
    detail: {
        name: { first: string; middle: string; last: string };
        coOwner: { first: string; middle: string; last: string };
        companyName: string;
        contactName: string;
        contactNumber: string;
        email: string;
        idNumber: number;
        class: string;
    };
};

export type property = {
    unitCode: string;
    owner: string;
    floor: string;
    area: string;
    class: string;
    type: string;
};

export type listproperty = {
    detail: {
        unitCode: string;
        owner: string;
        floor: string;
        area: string;
        class: string;
        type: string;
    };
};

export type adminReview = {
    id: number;
    client: string;
    property: string;
    tower: string;
    type: string;
    requestTime: string;
    dateTime: string;
};
export type adminReviewList = {
    detail: adminReview;
    setApprove: Function;
    setDisapprove: Function;
};

export type propertyData = {
    idNumber: string;
    unitCode: string;
    project: string;
    address: string;
    developer: string;
    tower: string;
    floor: string;
    area: string;
    class: string;
    type: string;
    acceptance: string;
    turnover: string;
    cutOff: string;
    dueDate: string;
    createdAt: string;
    updatedAt: string;
    createdBy: string;
    updatedBy: string;
};
export type propertyDataList = {
    propertyData: propertyData;
};
