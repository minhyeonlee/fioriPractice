sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("sync04.zfc0230.controller.View1", {
            onInit: function () {
                // Data Binding
                // let oData = {
                //     lastName: "Lee",
                //     stdNo: 20
                // };

                //let oModel = new sap.ui.model.json.JSONModel(); // JSON을 담을 공간 생성
                // oModel.setData( oData );
                // let oView = this.getView();
                // oView.setModel( oModel ); // View와 Model 연결
                // let oModel = new JSONModel();
                // oModel.setData( oData );
                // this.getView().setModel( oModel ); //View에 먼저 접근해서 Model을 설정

            },
            onDefault: function () {
                let oData = {
                    lastName: "Lee"
                };
                let oModel = new JSONModel( oData );
                this.getView().setModel( oModel );
            },
            onGet: function () {
                let oView = this.getView();
                let oModel = oView.getModel();
                let oData = oModel.getData();
                alert( oData.lastName );
            }
        });
    });
