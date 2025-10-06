// Copyright (c) 2025, BWH and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Booking", {
	refresh(frm) {
        
	},
    rate(frm){
        frm.trigger("update_total_amount");


    },

    update_total_amount(frm){
        let total_d = 0
        for(let item of frm.doc.item){
            total_d += item.distance;
        }
        
        const amount = frm.doc.rate * total_d;
        frm.set_value("total_amount",amount);

    }
});

frappe.ui.form.on('Ride Booking item', {
	refresh(frm) {
		// your code here

	},
    distance(frm, cdt, cdn){
        // console.log(cdt, cdn)
        // frappe.model.set_value(cdt,cdn,"source","Updated Source")
        frm.trigger("update_total_amount");
    },
    item_remove(frm){
        frm.trigger("update_total_amount");

    }
})