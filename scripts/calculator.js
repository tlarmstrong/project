$(document).ready(function() {
	$("#calc_show_shipper").click(function() {
		calc_show(1);
	});

	$("#calc_show_broker").click(function() {
		calc_show(2);
	});

	$("#calc_show_carrier").click(function() {
		calc_show(3);
	});
});

function calc_show(section) {
	prepend_calc_html(section);

	calc_listeners();
	
	$("#calc_nav").accordion({ active: (section - 1) });
	
	$("#calc_bg_fade").fadeIn(500);
	$("#calc_lightbox").delay(250).fadeIn(500);
	
	setTimeout(function() {$("#calc_nav_" + section + "_0").click();}, 750);
}

function calc_close() {
	$("#calc_lightbox").fadeOut(500);
	$("#calc_bg_fade").delay(300).fadeOut(300);
	setTimeout(function() {$("#calc_bg_fade").remove();}, 1100);
}

function clear_calcs() {
	$("div.calc_features select").val(0);
	$("div.calc_features input").val("");
}

function calc_listeners() {
	$("img#calc_close_button").click(function() {
		calc_close();
	});
	
	$("#calc_clear").click(function() {
		clear_calcs();
	});
	
	$("#calc_back").click(function() {
		var current = $("#calc_nav h3.calc_selected_nav").attr("id").substring(9);
		var section = current.substring(0,1);
		var sub_section = current.substring(2);
		//var max_sub_section = $("#calc_nav div.calc_nav_content:nth-child(" + (section * 2) + ") h3").length - 1;
		
		if (sub_section == 0) {
			//$("#calc_nav_" + section + "_" + max_sub_section).click();
		}
		else {
			$("#calc_nav_" + section + "_" + (parseInt(sub_section) - 1)).click();
		}
	});
	
	$("#calc_next").click(function() {
		var current = $("#calc_nav h3.calc_selected_nav").attr("id").substring(9);
		var section = current.substring(0,1);
		var sub_section = current.substring(2);
		var max_sub_section = $("#calc_nav div.calc_nav_content:nth-child(" + (section * 2) + ") h3").length - 1;
		
		if (sub_section == max_sub_section) {
			$("img#calc_close_button").click();
		}
		else {
			$("#calc_nav_" + section + "_" + (parseInt(sub_section) + 1)).click();
		}
	});
	
	$("div.calc_nav_content > h3").click(function() {
		$("div.calc_nav_content > h3").removeClass("calc_selected_nav");
		$(this).addClass("calc_selected_nav");
	
		var this_id = ($(this).attr("id").substring(9));
		var section = this_id.substring(0,1);
		var sub_section = this_id.substring(2);
		var max_sub_section = $("#calc_nav div.calc_nav_content:nth-child(" + (section * 2) + ") h3").length - 1;

		if (sub_section == 0) {
			//put back button disabled image
			$("#calc_back").attr("src","images/calculator/calc_back_button_disabled.png");
			
			//make sure next button has active image
			$("#calc_next").attr("src","images/calculator/calc_next_button.png");
		}
		else if (sub_section == max_sub_section) {
			//make sure back button has active image
			$("#calc_back").attr("src","images/calculator/calc_back_button.png");

			//put next button disabled image
			$("#calc_next").attr("src","images/calculator/calc_next_button_disabled.png");
		}
		else {
			//put active button source images in for both	
			$("#calc_back").attr("src","images/calculator/calc_back_button.png");
			$("#calc_next").attr("src","images/calculator/calc_next_button.png");
		}

		$("div.calc_features").hide();
		$("div#calc_feat_" + this_id).show();
	});
	
	//technically an event listener, so called from here
	calculations();
}

function prepend_calc_html(section) {
	var calc_html = ' \
<div id="calc_bg_fade"> \
    <div id="calc_lightbox"> \
        <img id="calc_close_button" src="images/calculator/calc_x.png" /> \
     \
        <div id="calc_frame"> \
            <div id="calc_header_bar"> \
            	<h1>Auto Load Logic Savings Calculators</h1> \
                <img src="images/calculator/calc_calc_icon.png" /> \
            </div> \
             \
            <div id="calc_content"> \
            	<!--SHIPPER SECTION--> \
                <div class="calc_features" id="calc_feat_1_0"> \
                	<h2 class="calc_shipper_color calc_intro_header">Shipper Introduction</h2> \
                     \
                    <p>Auto Load Logic offers Shippers real savings in three important areas of your business.</p> \
					<p>1. Automated Contracting<br /> \
					2. Automated Inspections &amp; Bills of Lading<br /> \
					3. Real-Time GPS Tracking</p> \
                    <p>How much can <strong>you</strong> save?</p> \
					<p>Please click "Next" to get started.</p> \
                </div> \
                <div class="calc_features" id="calc_feat_1_1"> \
                	<h2 class="calc_shipper_color">1. Automated Contracting</h2> \
                     \
                    <p>a) System Based on VIN numbers avoids Errors</p> \
                    <p>b) All authority documents are available on <strong>ALL</strong> Platform</p> \
                    <p>c) All Terms &amp; Conditions available on <strong>ALL</strong> Platform</p> \
                    <p>d) e-Signature for all contract requirements</p> \
                    <p>e) Paperless contracting with document downloads available</p> \
					<p class="calc_spacer"></p> \
                	<p>If these features saved you <select class="calc_1_var_1"> \
						<option value="0">Select</option> \
                    	<option value="15">15</option> \
                        <option value="30">30</option> \
                        <option value="45">45</option> \
                        <option value="60">60</option> \
                       </select> minutes per vehicle</p> \
                    <p>at <select class="calc_1_var_2"> \
						<option value="0">Select</option> \
                    	<option value="10">$10</option> \
                        <option value="12">$12</option> \
                        <option value="14">$14</option> \
                        <option value="16">$16</option> \
                        <option value="18">$18</option> \
                        <option value="20">$20</option> \
                        </select> per hour</p> \
                    <p>Your savings would be <input type="text" readonly class="calc_final_calc_1" /> <strong>per vehicle!</strong></p> \
                </div> \
                 \
                <div class="calc_features" id="calc_feat_1_2"> \
                	<h2 class="calc_shipper_color">2. Automated Inspections &amp Bills of Lading</h2> \
                     \
                    <p>a) Trip begins with VIN scan</p> \
                    <p>b) Photo inspection of all vehicles</p> \
                    <p>c) Automated Bill of Lading</p> \
                    <p>d) e-Signature at start of trip</p> \
                    <p>e) e-Signature on delivery</p> \
					<p class="calc_spacer"></p> \
                	<p>How much do you think dealing with a dispute about vehicle condition or trip documentation costs you on average? <select class="calc_1_var_1"> \
						<option value="0">Select</option> \
                    	<option value="50">$50</option> \
                        <option value="100">$100</option> \
                        <option value="150">$150</option> \
                        <option value="200">$200</option> \
                       </select> per incident</p> \
                    <p>If you could avoid <select class="calc_1_var_2"> \
						<option value="0">Select</option> \
                    	<option value="25">25%</option> \
                        <option value="30">30%</option> \
                        <option value="35">35%</option> \
                        <option value="40">40%</option> \
                        <option value="45">45%</option> \
                        <option value="50">50%</option> \
                        </select> of disputes, that could save you <input type="text" readonly class="calc_final_calc_1" /> per incident.</p> \
                    <p>If you have to deal with disputes on only 5% of your loads, that&rsquo;s a meaningful savings potential. If the number is 10%, or even more, that&rsquo;s real money!</p> \
                </div> \
                 \
                <div class="calc_features" id="calc_feat_1_3"> \
                	<h2 class="calc_shipper_color">3. Real-Time GPS Tracking</h2> \
                     \
                    <p>a) Reduce calls to/from Brokers</p> \
                    <p>b) Reduce calls to/from Carriers</p> \
                    <p>c) Reduce calls to/from Customers</p> \
					<p class="calc_spacer"></p> \
                	<p>How many minutes of phone time do you think you or your staff spend per vehicle per day talking with (or trying to reach!) Brokers, Carriers and Customers just updating location and schedule?</p> \
                    <p>What do you think that costs you?</p> \
                    <p> <select class="calc_1_var_1"> \
						<option value="0">Select</option> \
                    	<option value="15">15</option> \
                        <option value="30">30</option> \
                        <option value="45">45</option> \
                        <option value="60">60</option> \
                       </select> minutes at <select class="calc_1_var_2"> \
						<option value="0">Select</option> \
                    	<option value="10">$10</option> \
                        <option value="12">$12</option> \
                        <option value="14">$14</option> \
                        <option value="16">$16</option> \
                        <option value="18">$18</option> \
                        <option value="20">$20</option> \
                        </select> per hour = <input type="text" readonly class="calc_final_calc_1" /> cost per vehicle per day.</p> \
                    <p>If you could save <select class="calc_2_var_1"> \
						<option value="0">Select</option> \
                    	<option value="40">40%</option> \
                        <option value="45">45%</option> \
                        <option value="50">50%</option> \
                        <option value="55">55%</option> \
                        <option value="60">60%</option> \
                        </select> the savings per vehicle per day would be <input type="text" readonly class="calc_final_calc_2" /> \
                    </p> \
                </div> \
                <!-- END SHIPPER SECTION --> \
                 \
                <!-- BROKER SECTION --> \
                <div class="calc_features" id="calc_feat_2_0"> \
                	<h2 class="calc_broker_color calc_intro_header">Broker Introduction</h2> \
                     \
                    <p>Auto Load Logic offers Brokers real savings opportunities in five important areas.</p> \
					<p>1. Automated Dispatching<br /> \
					2. Carrier Location<br /> \
					3. Automated Contracting<br /> \
					4. Automated Inspections &amp; Bills of Lading<br /> \
					5. Real-Time GPS Tracking</p> \
                    <p>How much can <strong>you</strong> save?</p> \
                    <p>Please click "Next" to get started.</p> \
                </div> \
                <div class="calc_features" id="calc_feat_2_1"> \
                	<h2 class="calc_broker_color">1. Automated Dispatching</h2> \
                     \
                    <p>a) Ability to pre-qualify carriers to allow automatic after-hours dispatching</p> \
                    <p>b) This allows loads to be booked and vehicles dispatched even when your office is closed</p> \
					<p class="calc_spacer"></p> \
                	<p>If this allowed you to book just one more load per week what would that be worth to you? <select class="calc_1_var_1"> \
						<option value="0">Select</option> \
                    	<option value="75">$75</option> \
                        <option value="100">$100</option> \
                        <option value="125">$125</option> \
                        <option value="150">$150</option> \
                        </select></p> \
                    <p>What if it were two loads, or three? The savings multiply! <select class="calc_1_var_2"> \
						<option value="0">Select</option> \
                    	<option value="1">1</option> \
                        <option value="2">2</option> \
                        <option value="3">3</option> \
                        </select> <input type="text" readonly class="calc_final_calc_1" /> \
                    </p> \
                </div> \
                 \
                <div class="calc_features" id="calc_feat_2_2"> \
                	<h2 class="calc_broker_color">2. Carrier Locating</h2> \
                     \
                    <p>a) Ability to locate carriers in the area or on the way toward the vehicle you need moved</p> \
                    <p>b) Ability to determine in advance if they have room for your load</p> \
					<p class="calc_spacer"></p> \
                	<p>How many hours of phone calls per week could you save?  Think about it</p> \
                    <p>How much money would that save?</p> \
                    <p> <select class="calc_1_var_1"> \
						<option value="0">Select</option> \
                    	<option value="1">1</option> \
                        <option value="2">2</option> \
                        <option value="3">3</option> \
                        <option value="4">4</option> \
                    	<option value="5">5</option> \
                        <option value="6">6</option> \
                        <option value="7">7</option> \
                        <option value="8">8</option> \
                        <option value="9">9</option> \
                        <option value="10">10</option> \
                       </select> hours at <select class="calc_1_var_2"> \
						<option value="0">Select</option> \
                    	<option value="10">$10</option> \
                        <option value="12">$12</option> \
                        <option value="14">$14</option> \
                    	<option value="16">$16</option> \
                    	<option value="18">$18</option> \
                        <option value="20">$20</option> \
                        </select> per hour would generate <input type="text" readonly class="calc_final_calc_1" /> of reduced operating costs per week. \
                    </p> \
                </div> \
 \
                <div class="calc_features" id="calc_feat_2_3"> \
                	<h2 class="calc_broker_color">3. Automated Contracting</h2> \
                     \
                    <p>a) System Based on VIN numbers avoids Errors</p> \
                    <p>b) All authority documents are available on <strong>ALL</strong> Platform</p> \
                    <p>c) All Terms &amp; Conditions available on <strong>ALL</strong> Platform</p> \
                    <p>d) e-Signature for all contract requirements</p> \
                    <p>e) Paperless contracting with document downloads available</p> \
					<p class="calc_spacer"></p> \
                	<p>If these features saved you <select class="calc_1_var_1"> \
						<option value="0">Select</option> \
                    	<option value="15">15</option> \
                        <option value="30">30</option> \
                        <option value="45">45</option> \
                        <option value="60">60</option> \
                       </select> minutes per vehicle</p> \
                    <p>at <select class="calc_1_var_2"> \
						<option value="0">Select</option> \
                    	<option value="10">$10</option> \
                        <option value="12">$12</option> \
                        <option value="14">$14</option> \
                        <option value="16">$16</option> \
                        <option value="18">$18</option> \
                        <option value="20">$20</option> \
                        </select> per hour</p> \
                    <p>Your savings would be <input type="text" readonly class="calc_final_calc_1" /> <strong>per vehicle!</strong></p> \
                </div> \
                 \
                <div class="calc_features" id="calc_feat_2_4"> \
                	<h2 class="calc_broker_color">4. Automated Inspections &amp Bills of Lading</h2> \
                     \
                    <p>a) Trip begins with VIN scan</p> \
                    <p>b) Photo inspection of all vehicles</p> \
                    <p>c) Automated Bill of Lading</p> \
                    <p>d) e-Signature at start of trip</p> \
                    <p>e) e-Signature on delivery</p> \
					<p class="calc_spacer"></p> \
                	<p>How much do you think dealing with a dispute about vehicle condition or trip documentation costs you on average? <select class="calc_1_var_1"> \
						<option value="0">Select</option> \
                    	<option value="50">$50</option> \
                        <option value="100">$100</option> \
                        <option value="150">$150</option> \
                        <option value="200">$200</option> \
                       </select> per incident</p> \
                    <p>If you could avoid <select class="calc_1_var_2"> \
						<option value="0">Select</option> \
                    	<option value="25">25%</option> \
                        <option value="30">30%</option> \
                        <option value="35">35%</option> \
                        <option value="40">40%</option> \
                        <option value="45">45%</option> \
                        <option value="50">50%</option> \
                        </select> of disputes, that could save you <input type="text" readonly class="calc_final_calc_1" /> per incident.</p> \
                    <p>If you have to deal with disputes on only 5% of your loads, that&rsquo;s a meaningful savings potential. If the number is 10%, or even more, that&rsquo;s real money!</p> \
                </div> \
                 \
                <div class="calc_features" id="calc_feat_2_5"> \
                	<h2 class="calc_broker_color">5. Real-Time GPS Tracking</h2> \
                     \
                    <p>a) Reduce calls to/from Shippers</p> \
                    <p>b) Reduce calls to/from Carriers</p> \
                    <p>c) Reduce calls to/from Customers</p> \
					<p class="calc_spacer"></p> \
                	<p>How many minutes of phone time do you think you or your staff spend per vehicle per day talking with (or trying to reach!) Shippers, Carriers and Customers just updating location and schedule?</p> \
                    <p>What do you think that costs you?</p> \
                    <p> <select class="calc_1_var_1"> \
						<option value="0">Select</option> \
                    	<option value="15">15</option> \
                        <option value="30">30</option> \
                        <option value="45">45</option> \
                        <option value="60">60</option> \
                       </select> minutes at <select class="calc_1_var_2"> \
						<option value="0">Select</option> \
                    	<option value="10">$10</option> \
                        <option value="12">$12</option> \
                        <option value="14">$14</option> \
                        <option value="16">$16</option> \
                        <option value="18">$18</option> \
                        <option value="20">$20</option> \
                        </select> per hour = <input type="text" readonly class="calc_final_calc_1" /> cost per vehicle per day.</p> \
                    <p>If you could save <select class="calc_2_var_1"> \
						<option value="0">Select</option> \
                    	<option value="40">40%</option> \
                        <option value="45">45%</option> \
                        <option value="50">50%</option> \
                        <option value="55">55%</option> \
                        <option value="60">60%</option> \
                        </select> the savings per vehicle per day would be <input type="text" readonly class="calc_final_calc_2" /> \
                    </p> \
                </div> \
                <!-- END BROKER SECTION --> \
                 \
                <!-- START CARRIER SECTION --> \
                <div class="calc_features" id="calc_feat_3_0"> \
                	<h2 class="calc_carrier_color calc_intro_header">Carrier Introduction</h2> \
                     \
                    <p>Auto Load Logic offers Carriers real savings opportunities in six important areas.</p> \
					<p>1. Automated Dispatching<br /> \
					2. Carrier Location<br /> \
					3. Revolutionary Loading Technology<br /> \
					4. Automated Contracting<br /> \
					5. Automated Inspections &amp; Bills of Lading<br /> \
					6. Real-Time GPS Tracking</p> \
                    <p>How much can <strong>you</strong> save?</p> \
                    <p>Please click "Next" to get started.</p> \
                </div> \
                <div class="calc_features" id="calc_feat_3_1"> \
                	<h2 class="calc_carrier_color">1. Automated Dispatching</h2> \
                     \
                    <p>a) Ability to be pre-qualified by brokers/shippers to allow automated after-hours dispatching</p> \
					<p class="calc_spacer"></p> \
                    <p>How often do you waste time and fuel because shippers and brokers are closed when you need to fill your truck?</p> \
                    <p>What would it be worth to you to be able to book a load at midnight or roll on a week-end instead of being empty and burning fuel at idle?</p> \
                    <p>What would this feature be worth to you if it allowed you to move one more vehicle per truck per week? Could it be $200? Maybe more?</p> \
                    <p>What would it be worth to you to be able to get home for the week-end rather than idling empty far from your family?</p> \
                    <p>Use your own numbers!</p> \
                </div> \
                 \
                <div class="calc_features" id="calc_feat_3_2"> \
                	<h2 class="calc_carrier_color">2. Allow your trucks to be located by customers</h2> \
                     \
                    <p>a) Ability to allow brokers/shippers to see where your trucks are in relation to vehicles they need moved</p> \
					<p class="calc_spacer"></p> \
                    <p>Would it be valuable to you to allow potential customers to see that you are near a load they need moved?</p> \
                    <p>What would this feature be worth to you if it allowed you to move one more vehicle per truck per week? Could this add another $100 in profit? Maybe more?</p> \
                    <p>Use your own numbers!</p> \
                </div> \
 \
                <div class="calc_features" id="calc_feat_3_3"> \
                	<h2 class="calc_carrier_color">3. Revolutionary Loading Technology</h2> \
                     \
                    <p>a) Select the most profitable mix of vehicles from a specified list of available loads</p> \
                    <p>b) Patent-pending recommended load configuration produced in seconds</p> \
					<p class="calc_spacer"></p> \
                	<p>How much would it be worth to you if your driver could be on the road sooner, saving you both driver down-time and the cost of fuel now wasted idling?</p> \
                    <p>If you saved <select class="calc_1_var_1"> \
						<option value="0">Select</option> \
                        <option value="1">1</option> \
                        <option value="1.5">1.5</option> \
                        <option value="2">2</option> \
                        <option value="2.5">2.5</option> \
                        <option value="3">3</option> \
                       </select> hour(s) at <select class="calc_1_var_2"> \
						<option value="0">Select</option> \
                    	<option value="15">$15</option> \
                        <option value="20">$20</option> \
                        <option value="25">$25</option> \
                        <option value="30">$30</option> \
                        </select> per hour of reduced driver down time = <input type="text" readonly class="calc_final_calc_1" /></p> \
                    <p>Plus <select class="calc_2_var_1"> \
						<option value="0">Select</option> \
                        <option value="1">1</option> \
                        <option value="1.5">1.5</option> \
                        <option value="2">2</option> \
                        <option value="2.5">2.5</option> \
                        <option value="3">3</option> \
                       </select> hour(s) at <select class="calc_2_var_2"> \
						<option value="0">Select</option> \
                    	<option value="3">$3.00</option> \
                        <option value="3.25">$3.25</option> \
                        <option value="3.50">$3.50</option> \
                    	<option value="3.75">$3.75</option> \
                        <option value="4">$4.00</option> \
                        <option value="4.25">$4.25</option> \
                    	<option value="4.50">$4.50</option> \
                        <option value="4.75">$4.75</option> \
                        <option value="5">$5.00</option> \
                        </select> per hour in fuel burn time = <input type="text" readonly class="calc_final_calc_2" /></p> \
                    <p>The potential savings could be <input type="text" readonly class="calc_final_calc_3" /></p> \
                </div> \
 \
                <div class="calc_features" id="calc_feat_3_4"> \
                	<h2 class="calc_carrier_color">4. Automated Contracting</h2> \
                     \
                    <p>a) System Based on VIN numbers avoids Errors</p> \
                    <p>b) All authority documents are available on <strong>ALL</strong> Platform</p> \
                    <p>c) All Terms &amp; Conditions available on <strong>ALL</strong> Platform</p> \
                    <p>d) e-Signature for all contract requirements</p> \
                    <p>e) Paperless contracting with document downloads available</p> \
					<p class="calc_spacer"></p> \
                	<p>If these features saved you <select class="calc_1_var_1"> \
						<option value="0">Select</option> \
                    	<option value="15">15</option> \
                        <option value="30">30</option> \
                        <option value="45">45</option> \
                        <option value="60">60</option> \
                       </select> minutes per vehicle</p> \
                    <p>at <select class="calc_1_var_2"> \
						<option value="0">Select</option> \
                    	<option value="10">$10</option> \
                        <option value="12">$12</option> \
                        <option value="14">$14</option> \
                        <option value="16">$16</option> \
                        <option value="18">$18</option> \
                        <option value="20">$20</option> \
                        </select> per hour</p> \
                    <p>Your savings would be <input type="text" readonly class="calc_final_calc_1" /> <strong>per vehicle!</strong></p> \
                </div> \
                 \
                <div class="calc_features" id="calc_feat_3_5"> \
                	<h2 class="calc_carrier_color">5. Automated Inspections &amp Bills of Lading</h2> \
                     \
                    <p>a) Trip begins with VIN scan</p> \
                    <p>b) Photo inspection of all vehicles</p> \
                    <p>c) Automated Bill of Lading</p> \
                    <p>d) e-Signature at start of trip</p> \
                    <p>e) e-Signature on delivery</p> \
					<p class="calc_spacer"></p> \
                	<p>How much do you think dealing with a dispute about vehicle condition or trip documentation costs you on average? <select class="calc_1_var_1"> \
						<option value="0">Select</option> \
                    	<option value="50">$50</option> \
                        <option value="100">$100</option> \
                        <option value="150">$150</option> \
                        <option value="200">$200</option> \
                       </select> per incident</p> \
                    <p>If you could avoid <select class="calc_1_var_2"> \
						<option value="0">Select</option> \
                    	<option value="25">25%</option> \
                        <option value="30">30%</option> \
                        <option value="35">35%</option> \
                        <option value="40">40%</option> \
                        <option value="45">45%</option> \
                        <option value="50">50%</option> \
                        </select> of disputes, that could save you <input type="text" readonly class="calc_final_calc_1" /> per incident.</p> \
                    <p>If you have to deal with disputes on only 5% of your loads, that&rsquo;s a meaningful savings potential. If the number is 10%, or even more, that&rsquo;s real money!</p> \
                </div> \
                 \
                <div class="calc_features" id="calc_feat_3_6"> \
                	<h2 class="calc_carrier_color">6. Real-Time GPS Tracking</h2> \
                     \
                    <p>a) Reduce calls to/from Shippers</p> \
                    <p>a) Reduce calls to/from Brokers</p> \
                    <p>c) Reduce calls to/from Customers</p> \
					<p class="calc_spacer"></p> \
                    <p>How much dispatcher time could be saved? How much driver time could be saved? How many minutes of phone time do you spend per vehicle per day with Shippers, Brokers and Customers just updating location and schedule?</p> \
                    <p>What do you think that costs you?</p> \
                    <p> <select class="calc_1_var_1"> \
						<option value="0">Select</option> \
                    	<option value="15">15</option> \
                        <option value="30">30</option> \
                        <option value="45">45</option> \
                        <option value="60">60</option> \
                       </select> minutes at <select class="calc_1_var_2"> \
						<option value="0">Select</option> \
                    	<option value="10">$10</option> \
                        <option value="12">$12</option> \
                        <option value="14">$14</option> \
                        <option value="16">$16</option> \
                        <option value="18">$18</option> \
                        <option value="20">$20</option> \
                        </select> per hour = <input type="text" readonly class="calc_final_calc_1" /> cost per vehicle per day.</p> \
                    <p>If you could save <select class="calc_2_var_1"> \
						<option value="0">Select</option> \
                    	<option value="40">40%</option> \
                        <option value="45">45%</option> \
                        <option value="50">50%</option> \
                        <option value="55">55%</option> \
                        <option value="60">60%</option> \
                        </select> the savings per vehicle per day would be <input type="text" readonly class="calc_final_calc_2" /> \
                    </p> \
                    <p>Now, that&rsquo;s if you are a dispatcher or in the office working with your drivers. What would it be worth to the driver to avoid the endless phone calls when there&rsquo;s no one in the office? Ask him!</p> \
                    <p>And if you&rsquo;re a driver with no dispatcher? And it&rsquo;s all on you? What do you think?</p> \
                </div> \
                <!-- END CARRIER SECTION --> \
                 \
            </div> \
             \
            <div id="calc_nav"> \
            	<div class="calc_nav_header calc_nav_header_first calc_shipper_color"> \
                	<h2>Shipper Calculators <img class="calc_right_arrow" src="images/calculator/calc_right_green_arrow.png" /><img class="calc_down_arrow" src="images/calculator/calc_down_green_arrow.png" /></h2> \
                </div> \
            	<div id="calc_shipper_nav" class="calc_nav_content"> \
                	<h3 id="calc_nav_1_0">Introduction</h3> \
                	<h3 id="calc_nav_1_1">Automated Contracting</h3> \
                    <h3 id="calc_nav_1_2">Automated Insepctions<br />&amp; Bills of Lading</h3> \
                    <h3 id="calc_nav_1_3">Real-Time GPS Tracking</h3> \
                </div> \
                 \
                <div class="calc_nav_header calc_broker_color"> \
                	<h2>Broker Calculators <img class="calc_right_arrow" src="images/calculator/calc_right_orange_arrow.png" /><img class="calc_down_arrow" src="images/calculator/calc_down_orange_arrow.png" /></h2> \
                </div> \
                <div id="calc_broker_nav" class="calc_nav_content"> \
                	<h3 id="calc_nav_2_0">Introduction</h3> \
                	<h3 id="calc_nav_2_1">Automated Dispatching</h3> \
                    <h3 id="calc_nav_2_2">Carrier Locating</h3> \
                    <h3 id="calc_nav_2_3">Automated Contracting</h3> \
                    <h3 id="calc_nav_2_4">Automated Insepctions<br />&amp; Bills of Lading</h3> \
                    <h3 id="calc_nav_2_5">Real-Time GPS Tracking</h3> \
                </div> \
                 \
                <div class="calc_nav_header calc_nav_header_last calc_carrier_color"> \
                	<h2>Carrier Calculators <img class="calc_right_arrow" src="images/calculator/calc_right_blue_arrow.png" /><img class="calc_down_arrow" src="images/calculator/calc_down_blue_arrow.png" /></h2> \
                </div> \
                <div id="calc_carrier_nav" class="calc_nav_content"> \
                	<h3 id="calc_nav_3_0">Introduction</h3> \
                	<h3 id="calc_nav_3_1">Automated Dispatching</h3> \
                    <h3 id="calc_nav_3_2">Allow Your Trucks to Be Located By Customers</h3> \
                    <h3 id="calc_nav_3_3">Revolutionary Loading Technology</h3> \
                    <h3 id="calc_nav_3_4">Automated Contracting</h3> \
                    <h3 id="calc_nav_3_5">Automated Insepctions<br />&amp; Bills of Lading</h3> \
                    <h3 id="calc_nav_3_6">Real-Time GPS Tracking</h3> \
                </div> \
            </div> \
             \
            <img id="calc_bottom_sep" src="images/calculator/calc_bottom_sep.png" /> \
             \
            <div id="calc_bottom"> \
            	<img id="calc_back" style="height:30px" src="images/calculator/calc_back_button_disabled.png" /> <img id="calc_clear" style="height:30px" src="images/calculator/calc_clear_button.png" /> <img id="calc_next" style="height:30px" src="images/calculator/calc_next_button.png" /> \
            </div> \
        </div> \
    </div> \
</div>';

	$("body").prepend(calc_html);
}

function calculations() {	
	/* calculations */
	$("#calc_content select").change(function() {
		var section = $(this).parents("div.calc_features").attr("id");
		var selected = $(this).attr("class");
		
		var variable_array = new Array();
		var quit = false;
		var calc_num = $(this).attr("class").substr(5,1);
		var final_display = $("#" + section + " input.calc_final_calc_" + calc_num);
		
		//move through each select element in the section
		$("#" + section + " select[class^=calc_" + calc_num + "_var_]").each(function() {
			//if it has been populated by the user then put it into the array for later calculation
			if ($(this).val() != 0) {
				variable_array.push($(this).val());
			}
			//if it is in default state, stop the loop through select elements and set quit flag to true
			else {
				quit = true;
				$(final_display).val("");
				
				switch (section) {
					//this will clear the final calculation box if ANY value on the page is at default
					case "calc_feat_1_3":
						$("#" + section + " input.calc_final_calc_2").val("");
						break;
						
					//this will clear the final calculation box if ANY value on the page is at default
					case "calc_feat_2_5":
						$("#" + section + " input.calc_final_calc_2").val("");
						break;

					//this will clear the final calculation box if ANY value on the page is at default
					case "calc_feat_3_3":
						$("#" + section + " input.calc_final_calc_3").val("");
						break;

					//this will clear the final calculation box if ANY value on the page is at default
					case "calc_feat_3_6":
						$("#" + section + " input.calc_final_calc_2").val("");
						break;

					default:
						break;
				}
				
				return false;	
			}
		});
		
		//if no select elements were still at default, apply appropriate calculation (all custom and distinct)
		if (quit == false) {
			switch (section) {
				
				// SHIPPER SECTION
				
				case "calc_feat_1_1":
					//minutes * cost
					var calculation = (variable_array[0] / 60) * variable_array[1];
					$(final_display).val("$" + parseFloat(calculation).toFixed(2));
					break;
					
				case "calc_feat_1_2":
					var calculation;
					
					switch (calc_num) {
						case "1":
							//dollars * percentage
							calculation = (variable_array[0] * (variable_array[1] / 100));
							$(final_display).val("$" + parseFloat(calculation).toFixed(2));
							break;
							
						case "2":
							//calculation?
							break;
						
						default:
							break;
					}
					break;
					
				case "calc_feat_1_3":
					var calculation;
					
					switch (calc_num) {
						case "1":
							//minutes * cost
							calculation = (variable_array[0] / 60) * variable_array[1];
							$(final_display).val("$" + parseFloat(calculation).toFixed(2));
							
							if ($("#" + section + " select.calc_2_var_1").val() != 0) {
								var calc_cost = calculation;
								calculation = ($("#" + section + " select.calc_2_var_1").val() / 100) * calc_cost;
								$("#" + section + " input.calc_final_calc_2").val("$" + parseFloat(calculation).toFixed(2));
							}
							break;
							
						case "2":
							var calc_cost = ($("#" + section + " select.calc_1_var_1").val() / 60) * $("#" + section + " select.calc_1_var_2").val();
							
							if (calc_cost != 0) {
								//percentage * previously calculated cost
								calculation = ((variable_array[0] / 100) * calc_cost);
								$(final_display).val("$" + parseFloat(calculation).toFixed(2));
							}
							break;
						
						default:
							break;
					}
					break;
					
				// END SHIPPER SECTION
				
				// BROKER SECTION
				
				case "calc_feat_2_1":
					var calculation;
					
					switch (calc_num) {
						case "1":
							//minutes * cost
							calculation = variable_array[0] * variable_array[1];
							$(final_display).val("$" + parseFloat(calculation).toFixed(2));
							break;
						
						default:
							break;
					}
					break;
					
				case "calc_feat_2_2":
					var calculation;
					
					switch (calc_num) {
						case "1":
							//minutes * cost
							calculation = variable_array[0] * variable_array[1];
							$(final_display).val("$" + parseFloat(calculation).toFixed(2));
							break;
						
						default:
							break;
					}
					break;
					
				case "calc_feat_2_3":
					//minutes * cost
					var calculation = (variable_array[0] / 60) * variable_array[1];
					$(final_display).val("$" + parseFloat(calculation).toFixed(2));
					break;
							
				case "calc_feat_2_4":
					var calculation;
					
					switch (calc_num) {
						case "1":
							//dollars * percentage
							calculation = (variable_array[0] * (variable_array[1] / 100));
							$(final_display).val("$" + parseFloat(calculation).toFixed(2));
							break;
							
						case "2":
							//calculation?
							break;
						
						default:
							break;
					}
					break;
				
				case "calc_feat_2_5":
					var calculation;
					
					switch (calc_num) {
						case "1":
							//minutes * cost
							calculation = (variable_array[0] / 60) * variable_array[1];
							$(final_display).val("$" + parseFloat(calculation).toFixed(2));
							
							if ($("#" + section + " select.calc_2_var_1").val() != 0) {
								var calc_cost = calculation;
								calculation = ($("#" + section + " select.calc_2_var_1").val() / 100) * calc_cost;
								$("#" + section + " input.calc_final_calc_2").val("$" + parseFloat(calculation).toFixed(2));
							}
							break;
							
						case "2":
							var calc_cost = ($("#" + section + " select.calc_1_var_1").val() / 60) * $("#" + section + " select.calc_1_var_2").val();
							
							if (calc_cost != 0) {
								//percentage * previously calculated cost
								calculation = ((variable_array[0] / 100) * calc_cost);
								$(final_display).val("$" + parseFloat(calculation).toFixed(2));
							}
							break;
						
						default:
							break;
					}
					break;
					
			// END BROKER SECTION

			// START CARRIER SECTION

				case "calc_feat_3_3":
					var calculation;
					
					switch (calc_num) {
						case "1":
							//hours * cost
							calculation = variable_array[0] * variable_array[1];
							$(final_display).val("$" + parseFloat(calculation).toFixed(2));
							
							if ($("#" + section + " select.calc_2_var_1").val() != 0 && $("#" + section + " select.calc_2_var_2").val() != 0) {
								var final_result = ($("#" + section + " select.calc_2_var_1").val() * $("#" + section + " select.calc_2_var_2").val()) + calculation;
								$("#" + section + " input.calc_final_calc_3").val("$" + parseFloat(final_result).toFixed(2));
							}
							break;
							
						case "2":
							//hours * cost
							calculation = variable_array[0] * variable_array[1];
							$(final_display).val("$" + parseFloat(calculation).toFixed(2));

							if ($("#" + section + " select.calc_1_var_1").val() != 0 && $("#" + section + " select.calc_1_var_2").val() != 0) {
								var final_result = ($("#" + section + " select.calc_1_var_1").val() * $("#" + section + " select.calc_1_var_2").val()) + calculation;
								$("#" + section + " input.calc_final_calc_3").val("$" + parseFloat(final_result).toFixed(2));
							}
							break;
						
						default:
							break;
					}
					break;

				case "calc_feat_3_4":
					var calculation;
					
					switch (calc_num) {
						case "1":
							//minutes * cost
							calculation = (variable_array[0] / 60) * variable_array[1];
							$(final_display).val("$" + parseFloat(calculation).toFixed(2));
							break;
							
						default:
							break;
					}
					break;

				case "calc_feat_3_5":
					var calculation;
					
					switch (calc_num) {
						case "1":
							//dollars * percentage
							calculation = (variable_array[0] * (variable_array[1] / 100));
							$(final_display).val("$" + parseFloat(calculation).toFixed(2));
							break;
							
						case "2":
							//calculation?
							break;
						
						default:
							break;
					}
					break;
				
				case "calc_feat_3_6":
					var calculation;
					
					switch (calc_num) {
						case "1":
							//minutes * cost
							calculation = (variable_array[0] / 60) * variable_array[1];
							$(final_display).val("$" + parseFloat(calculation).toFixed(2));
							
							if ($("#" + section + " select.calc_2_var_1").val() != 0) {
								var calc_cost = calculation;
								calculation = ($("#" + section + " select.calc_2_var_1").val() / 100) * calc_cost;
								$("#" + section + " input.calc_final_calc_2").val("$" + parseFloat(calculation).toFixed(2));
							}
							break;
							
						case "2":
							var calc_cost = ($("#" + section + " select.calc_1_var_1").val() / 60) * $("#" + section + " select.calc_1_var_2").val();
							
							if (calc_cost != 0) {
								//percentage * previously calculated cost
								calculation = ((variable_array[0] / 100) * calc_cost);
								$(final_display).val("$" + parseFloat(calculation).toFixed(2));
							}
							break;
						
						default:
							break;
					}
					break;

			// END CARRIER SECTION
					
				default:
					break;
			}
		}
	});
}