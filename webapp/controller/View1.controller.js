sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.gokul.demo.controller.View1", {
		onInit: function() {
			this.getOwnerComponent().getRouter().getRoute("RouteApp").attachPatternMatched(this._onObjectMatched, this);
		},
		_onObjectMatched: function(oEvent) {
			var oModel = this.getView().getModel("mMainModel");
			var oData = oModel.getProperty("/FinalPage");

			oData = {
				Items: [],
				output:""
			};

			oModel.setProperty("/FinalPage", oData);

		},
		onAdd: function() {
			var oModel = this.getView().getModel("mMainModel");
			var oData = oModel.getProperty("/FinalPage/Items");
			oData.push({
				value: ""
			});
			oModel.setProperty("/FinalPage/Items", oData);
		},
		onBubbleSort: function() {
			var oModel = this.getView().getModel("mMainModel");
			var oData = oModel.getProperty("/FinalPage/Items");
			var ItemsNum = [];
			oData.forEach(function(item){
				ItemsNum.push(item.value);
			});
			var sortedItems=this.bubbleSort(ItemsNum);
			var output="";
			sortedItems.forEach(function(item){
				if(output===""){
					output = output+item;
				}else{
					output = output+','+item;
				}
			});
			oModel.setProperty("/FinalPage/output",output);
			
			
		},
		bubbleSort: function(arr) {
			var n = arr.length;
			var swapped;

			do {
				swapped = false;
				for (var i = 1; i < n; i++) {
					if (arr[i - 1] > arr[i]) {
						// Swap arr[i - 1] and arr[i]
						var temp = arr[i - 1];
						arr[i - 1] = arr[i];
						arr[i] = temp;
						swapped = true;
					}
				}
				// Reduce the range of comparison by 1 after each pass
				n--;
			} while (swapped);

			return arr;

		}
	});
});