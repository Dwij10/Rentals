// Copyright (c) 2025, BWH and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Order", {
	refresh(frm) {

        if (frm.doc.status === "New"){
            frm.add_custom_button("Accept",()=>{
            // status => Accepted
             frm.set_value("status","Accepted");
            // save the form
            frm.save();}, "Actions")

            frm.add_custom_button("Reject",()=>{
            // status => Accepted
             frm.set_value("status","Rejected");
            // save the form
            frm.save();
        
        }, "Actions")
        }
        

	},
});
