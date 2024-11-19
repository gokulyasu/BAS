sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        "use strict";
        return Controller.extend("expensetracker.controller.App", {
            onInit: function () {


                // Commit 
                this.getOwnerComponent()
                    .getRouter()
                    .getRoute("RouteApp")
                    .attachPatternMatched(this.onRouteMatched, this);
            },
            onRouteMatched() {

                var oModel = this.getView().getModel("mMainModel");
                var menuData = {
                    "expenseCategories": [
                        {
                            "id": "housing",
                            "category": "Housing",
                            "icon": "sap-icon://home",
                            "items": [
                                { "name": "Rent or Mortgage Payments", "key": "rent" },
                                { "name": "Property Taxes", "key": "property-taxes" },
                                { "name": "Home Insurance", "key": "home-insurance" },
                                { "name": "Utilities (Electricity, Water, Gas)", "key": "utilities" },
                                { "name": "Home Maintenance and Repairs", "key": "home-maintenance" }
                            ]
                        },
                        {
                            "id": "transportation",
                            "category": "Transportation",
                            "icon": "sap-icon://taxi",
                            "items": [
                                { "name": "Fuel/Gasoline", "key": "fuel" },
                                { "name": "Public Transportation (Bus, Train, Subway)", "key": "public-transportation" },
                                { "name": "Car Payments", "key": "car-payments" },
                                { "name": "Car Insurance", "key": "car-insurance" },
                                { "name": "Maintenance and Repairs", "key": "maintenance-repairs" },
                                { "name": "Parking Fees", "key": "parking-fees" }
                            ]
                        },
                        {
                            "id": "food-groceries",
                            "category": "Food & Groceries",
                            "icon": "sap-icon://cart",
                            "items": [
                                { "name": "Groceries", "key": "groceries" },
                                { "name": "Dining Out", "key": "dining-out" },
                                { "name": "Snacks and Beverages", "key": "snacks-beverages" },
                                { "name": "Meal Delivery Services", "key": "meal-delivery" }
                            ]
                        },
                        {
                            "id": "personal-care",
                            "category": "Personal Care",
                            "icon": "sap-icon://heart",
                            "items": [
                                { "name": "Personal Grooming (Haircuts, Salons)", "key": "personal-grooming" },
                                { "name": "Toiletries and Cosmetics", "key": "toiletries-cosmetics" },
                                { "name": "Health and Wellness Products", "key": "health-wellness" }
                            ]
                        },
                        {
                            "id": "entertainment",
                            "category": "Entertainment",
                            "icon": "sap-icon://video",
                            "items": [
                                { "name": "Movies, Concerts, and Events", "key": "movies-concerts-events" },
                                { "name": "Subscriptions (Netflix, Spotify, etc.)", "key": "subscriptions" },
                                { "name": "Hobbies and Activities", "key": "hobbies-activities" },
                                { "name": "Books, Games, and Apps", "key": "books-games-apps" }
                            ]
                        },
                        {
                            "id": "health-fitness",
                            "category": "Health & Fitness",
                            "icon": "sap-icon://nutrition-activity",
                            "items": [
                                { "name": "Gym Memberships", "key": "gym-memberships" },
                                { "name": "Sports Equipment", "key": "sports-equipment" },
                                { "name": "Medical Expenses (Doctor Visits, Medications)", "key": "medical-expenses" },
                                { "name": "Health Insurance", "key": "health-insurance" }
                            ]
                        },
                        {
                            "id": "education",
                            "category": "Education",
                            "icon": "sap-icon://education",
                            "items": [
                                { "name": "Tuition Fees", "key": "tuition-fees" },
                                { "name": "Books and Supplies", "key": "books-supplies" },
                                { "name": "Online Courses and Subscriptions", "key": "online-courses" }
                            ]
                        },
                        {
                            "id": "debt-payments",
                            "category": "Debt Payments",
                            "icon": "sap-icon://money-bills",
                            "items": [
                                { "name": "Credit Card Payments", "key": "credit-card-payments" },
                                { "name": "Loan Repayments (Personal, Auto, Student)", "key": "loan-repayments" },
                                { "name": "Interest Charges", "key": "interest-charges" }
                            ]
                        },
                        {
                            "id": "savings-investments",
                            "category": "Savings & Investments",
                            "icon": "sap-icon://wallet",
                            "items": [
                                { "name": "Emergency Fund Contributions", "key": "emergency-fund" },
                                { "name": "Retirement Savings", "key": "retirement-savings" },
                                { "name": "Stock Market Investments", "key": "stock-market-investments" },
                                { "name": "Savings Account Deposits", "key": "savings-deposits" }
                            ]
                        },
                        {
                            "id": "family-children",
                            "category": "Family & Children",
                            "icon": "sap-icon://family-care",
                            "items": [
                                { "name": "Childcare (Daycare, Babysitters)", "key": "childcare" },
                                { "name": "School Fees", "key": "school-fees" },
                                { "name": "Children's Activities and Sports", "key": "activities-sports" },
                                { "name": "Clothing and Toys", "key": "clothing-toys" }
                            ]
                        },
                        {
                            "id": "gifts-donations",
                            "category": "Gifts & Donations",
                            "icon": "sap-icon://basket",
                            "items": [
                                { "name": "Gifts for Family and Friends", "key": "gifts" },
                                { "name": "Charitable Donations", "key": "donations" },
                                { "name": "Special Occasions (Weddings, Birthdays)", "key": "occasions" }
                            ]
                        },
                        {
                            "id": "insurance",
                            "category": "Insurance",
                            "icon": "sap-icon://insurance-life",
                            "items": [
                                { "name": "Life Insurance", "key": "life-insurance" },
                                { "name": "Health Insurance (if separate from employer)", "key": "health-insurance" },
                                { "name": "Homeowner’s/Renter’s Insurance", "key": "homeowner-renters-insurance" },
                                { "name": "Auto Insurance", "key": "auto-insurance" }
                            ]
                        },
                        {
                            "id": "travel",
                            "category": "Travel",
                            "icon": "sap-icon://travel-expense",
                            "items": [
                                { "name": "Flights and Accommodations", "key": "flights-accommodations" },
                                { "name": "Car Rentals", "key": "car-rentals" },
                                { "name": "Travel Insurance", "key": "travel-insurance" },
                                { "name": "Vacation Activities and Tours", "key": "vacation-activities" }
                            ]
                        },
                        {
                            "id": "miscellaneous",
                            "category": "Miscellaneous",
                            "icon": "sap-icon://question-mark",
                            "items": [
                                { "name": "Unplanned Expenses", "key": "unplanned-expenses" },
                                { "name": "Pet Care (Food, Vet Bills, Grooming)", "key": "pet-care" },
                                { "name": "Bank Fees and Charges", "key": "bank-fees" }
                            ]
                        },
                        {
                            "id": "taxes",
                            "category": "Taxes",
                            "icon": "sap-icon://sales-order-item",
                            "items": [
                                { "name": "Income Taxes", "key": "income-taxes" },
                                { "name": "Property Taxes (if not included in housing)", "key": "property-taxes" },
                                { "name": "Other Taxes (Sales Tax, Vehicle Registration)", "key": "other-taxes" }
                            ]
                        }
                    ]
                }

                    ;
                var state = { activeCat: "" }
                oModel.setProperty("/Menu", menuData);
                oModel.setProperty("/State", state);
                oModel.setProperty("/DropDowns", { CatItems: [] });
            },
            onCollapseExpandPress(oEvent) {

                var oModel = this.getView().getModel("mMainModel");
                const oSideNavigation = this.byId("sideNavigation"),
                    bExpanded = oSideNavigation.getExpanded();

                oSideNavigation.setExpanded(!bExpanded);



                var selKey = oEvent.getSource().getParent().getSelectedKey();
                var menuData = oModel.getProperty("/Menu/expenseCategories");

                var dropData = menuData.filter(function (item) {
                    if (item.id === selKey) {
                        return item.items;
                    }
                });
                var ddItems = dropData[0] ? dropData[0].items : null;
                if (ddItems) {
                    oModel.setProperty("/DropDowns/CatItems", ddItems);
                }
            },
            handleChange(oEvent) {
 
                var oValidatedComboBox = oEvent.getSource(),
                    sSelectedKey = oValidatedComboBox.getSelectedKey(),
                    sValue = oValidatedComboBox.getValue();

                if (!sSelectedKey && sValue) {
                    oValidatedComboBox.setValueState("Error");
                    // oValidatedComboBox.setValueStateText("Please enter a valid country!");
                } else {
                    oValidatedComboBox.setValueState("None");
                }
            }
        });
    });
