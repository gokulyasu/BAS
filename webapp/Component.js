/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "expensetracker/model/models",
    "sap/ui/model/json/JSONModel"
],
    function (UIComponent, Device, models, JSONModel) {
        "use strict";

        return UIComponent.extend("expensetracker.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");



                var oModel = new JSONModel();
                this.setModel(oModel);

                this.setModel(oModel, "mMainModel");
                var menuData = {
                    "expenseCategories": [
                      {
                        "category": "Housing",
                        "items": [
                          { "name": "Rent or Mortgage Payments" },
                          { "name": "Property Taxes" },
                          { "name": "Home Insurance" },
                          { "name": "Utilities (Electricity, Water, Gas)" },
                          { "name": "Home Maintenance and Repairs" }
                        ]
                      },
                      {
                        "category": "Transportation",
                        "items": [
                          { "name": "Fuel/Gasoline" },
                          { "name": "Public Transportation (Bus, Train, Subway)" },
                          { "name": "Car Payments" },
                          { "name": "Car Insurance" },
                          { "name": "Maintenance and Repairs" },
                          { "name": "Parking Fees" }
                        ]
                      },
                      {
                        "category": "Food & Groceries",
                        "items": [
                          { "name": "Groceries" },
                          { "name": "Dining Out" },
                          { "name": "Snacks and Beverages" },
                          { "name": "Meal Delivery Services" }
                        ]
                      },
                      {
                        "category": "Personal Care",
                        "items": [
                          { "name": "Personal Grooming (Haircuts, Salons)" },
                          { "name": "Toiletries and Cosmetics" },
                          { "name": "Health and Wellness Products" }
                        ]
                      },
                      {
                        "category": "Entertainment",
                        "items": [
                          { "name": "Movies, Concerts, and Events" },
                          { "name": "Subscriptions (Netflix, Spotify, etc.)" },
                          { "name": "Hobbies and Activities" },
                          { "name": "Books, Games, and Apps" }
                        ]
                      },
                      {
                        "category": "Health & Fitness",
                        "items": [
                          { "name": "Gym Memberships" },
                          { "name": "Sports Equipment" },
                          { "name": "Medical Expenses (Doctor Visits, Medications)" },
                          { "name": "Health Insurance" }
                        ]
                      },
                      {
                        "category": "Education",
                        "items": [
                          { "name": "Tuition Fees" },
                          { "name": "Books and Supplies" },
                          { "name": "Online Courses and Subscriptions" }
                        ]
                      },
                      {
                        "category": "Debt Payments",
                        "items": [
                          { "name": "Credit Card Payments" },
                          { "name": "Loan Repayments (Personal, Auto, Student)" },
                          { "name": "Interest Charges" }
                        ]
                      },
                      {
                        "category": "Savings & Investments",
                        "items": [
                          { "name": "Emergency Fund Contributions" },
                          { "name": "Retirement Savings" },
                          { "name": "Stock Market Investments" },
                          { "name": "Savings Account Deposits" }
                        ]
                      },
                      {
                        "category": "Family & Children",
                        "items": [
                          { "name": "Childcare (Daycare, Babysitters)" },
                          { "name": "School Fees" },
                          { "name": "Children's Activities and Sports" },
                          { "name": "Clothing and Toys" }
                        ]
                      },
                      {
                        "category": "Gifts & Donations",
                        "items": [
                          { "name": "Gifts for Family and Friends" },
                          { "name": "Charitable Donations" },
                          { "name": "Special Occasions (Weddings, Birthdays)" }
                        ]
                      },
                      {
                        "category": "Insurance",
                        "items": [
                          { "name": "Life Insurance" },
                          { "name": "Health Insurance (if separate from employer)" },
                          { "name": "Homeowner’s/Renter’s Insurance" },
                          { "name": "Auto Insurance" }
                        ]
                      },
                      {
                        "category": "Travel",
                        "items": [
                          { "name": "Flights and Accommodations" },
                          { "name": "Car Rentals" },
                          { "name": "Travel Insurance" },
                          { "name": "Vacation Activities and Tours" }
                        ]
                      },
                      {
                        "category": "Miscellaneous",
                        "items": [
                          { "name": "Unplanned Expenses" },
                          { "name": "Pet Care (Food, Vet Bills, Grooming)" },
                          { "name": "Bank Fees and Charges" }
                        ]
                      },
                      {
                        "category": "Taxes",
                        "items": [
                          { "name": "Income Taxes" },
                          { "name": "Property Taxes (if not included in housing)" },
                          { "name": "Other Taxes (Sales Tax, Vehicle Registration)" }
                        ]
                      }
                    ]
                  }
                  ;
                var oData = {Menu: menuData};
                this.getModel("mMainModel").setData(oData);
            }
        });
    }
);