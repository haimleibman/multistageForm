import { personal, address, contactability } from "../sharedModels/fields.model";
import { atom, selector } from "recoil";
import { sections } from "../sharedModels/sections.model";

export const Store = {
    [personal.firstName]: atom({
        key: personal.firstName,
        default: ''
    }),

    [personal.lastName]: atom({
        key: personal.lastName,
        default: ''
    }),

    [personal.title]: atom({
        key: personal.title,
        default: ''
    }),

    [address.country]: atom({
        key: address.country,
        default: ''
    }),

    [address.city]: atom({
        key: address.city,
        default: ''
    }),

    [address.street]: atom({
        key: address.street,
        default: ''
    }),

    [contactability.email]: atom({
        key: contactability.email,
        default: ''
    }),

    [contactability.phone]: atom({
        key: contactability.phone,
        default: ''
    }),

    [contactability.optin]: atom({
        key: contactability.optin,
        default: ''
    }),

    [sections.personal]: selector({
        key: sections.personal,
        get: ({get}) => {
            const firstName = get(Store[personal.firstName]);
            const lastName = get(Store[personal.lastName]);

            return firstName && lastName;
        }
    }),

    [sections.address]: selector({
        key: sections.address,
        get: ({get}) => {
            const firstName = get(Store[personal.firstName]);
            const lastName = get(Store[personal.lastName]);

            return firstName && lastName;
        }
    }),

    [sections.contactability]: selector({
        key: sections.contactability,
        get: ({get}) => {
            const firstName = get(Store[personal.firstName]);
            const lastName = get(Store[personal.lastName]);

            return firstName && lastName;
        }
    })
}