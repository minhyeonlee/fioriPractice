sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("sync04.zfc0240.controller.View1", {
            // onInit: function () {
                // let oData = {
                //     lastName: "Lee"
                // };

                // let oModel = new JSONModel();
                // oModel.setData( oData );
                // let oView = this.getView();
                // oView.setModel( oModel );

            //     let oData = {
            //         classList:[
            //             { class: "400001", cName: "SYNC 1" },
            //             { class: "400004", cName: "SYNC 4" }
            //         ],
            //         stdList: [
            //             {stdNo: "24040001", sName: "Kang"},
            //             {stdNo: "24040002", sName: "Lee"}
            //         ]
            //     };
            //     let oModel = new JSONModel( oData );
            //     this.getView().setModel( oModel );
            // }
            // onSetModel: function (){
            //     let oData = {
            //         emp: {lastName: "Seo"}
            //     };
            //     let oModel = new JSONModel( oData );
            //     this.getView().setModel( oModel, "2nd" );
            // }

            onInit: function () {
                let oData = {
                    classList: [
                        { class: "400001", cName: "SYNC 1" },
                        { class: "400004", cName: "SYNC 4" }
                    ],
                    stdList: [
                        { stdNo: "24040001", sName: "Kang" },
                        { stdNo: "24040002", sName: "Shim" }
                    ]
                };
                let oModel = new JSONModel( oData );
                this.getView().setModel( oModel );
            },
            onSearch: function () {
                let oCombo = this.getView().byId("comboClass");
                let selectedKey = oCombo.getSelectedKey();
                alert( selectedKey );
            },
            onSelectChange: function ( oEvent ) {
								//alert(oEvent); //-> {objects}{Object}
								alert( oEvent.getSource().getSelectedKey() ); //->Key 값
            }
        });
    });
