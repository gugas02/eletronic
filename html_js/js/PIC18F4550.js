function PIC18F4550(graph,parent,fillColor,fontColor,strokeColor)
{		
	var v1 = graph.insertVertex(parent, null, 'PIC18F4550', 150, 40, 200, 265,
		'verticalLabelPosition=top;verticalAlign=bottom;shadow=1;fillColor=' + fillColor);
	v1.setConnectable(false);

	var v11 = graph.insertVertex(v1, null, 'RA0/AN0', 0, 0, 14, 10,
		'shape=line;align=left;verticalAlign=middle;fontSize=8;routingCenterX=-0.5;'+
		'spacingLeft=12;fontColor=' + fontColor + ';strokeColor=' + strokeColor);
	v11.geometry.relative = true;
	v11.geometry.offset = new mxPoint(-v11.geometry.width, 2);
	var label11 = graph.insertVertex(v11, null, '2', 0.5, 0.1, 0, 0, null, true);
	label11.setConnectable(false);

	var v12 = v11.clone();
	v12.value = 'RA1/AN1';
	v12.geometry.offset = new mxPoint(-v11.geometry.width, 14);
	var label12 = graph.insertVertex(v12, null, '3', 0.5, 0.1, 0, 0, null, true);
	label12.setConnectable(false);
	v1.insert(v12);
	
	var v13 = v11.clone();
	v13.value = 'RA2/AN2/VREF-/CVREF';
	v13.geometry.offset = new mxPoint(-v11.geometry.width, 26);
	var label13 = graph.insertVertex(v13, null, '4', 0.5, 0.1, 0, 0, null, true);
	label13.setConnectable(false);
	v1.insert(v13);

	var v14 = v11.clone();
	v14.value = 'RA3/AN3/VREF+';
	v14.geometry.offset = new mxPoint(-v11.geometry.width, 38);
	var label14 = graph.insertVertex(v14, null, '5', 0.5, 0.1, 0, 0, null, true);
	label14.setConnectable(false);
	v1.insert(v14);

	var v15 = v11.clone();
	v15.value = 'RA4/T0CKI/C1OUT/RCV';
	v15.geometry.offset = new mxPoint(-v11.geometry.width, 50);
	var label15 = graph.insertVertex(v15, null, '6', 0.5, 0.1, 0, 0, null, true);
	label15.setConnectable(false);
	v1.insert(v15);

	var v16 = v11.clone();
	v16.value = 'RA5/AN4//SS/LVDIN/C2OUT';
	v16.geometry.offset = new mxPoint(-v11.geometry.width, 62);
	var label16 = graph.insertVertex(v16, null, '7', 0.5, 0.1, 0, 0, null, true);
	label16.setConnectable(false);
	v1.insert(v16);

	var v17 = v11.clone();
	v17.value = 'RA6/OSC2/CLKO+';
	v17.geometry.offset = new mxPoint(-v11.geometry.width, 74);
	var label17 = graph.insertVertex(v17, null, '14', 0.5, 0.1, 0, 0, null, true);
	label17.setConnectable(false);
	v1.insert(v17);

	var v18 = v11.clone();
	v18.value = 'OSC1/CLKI';
	v18.geometry.offset = new mxPoint(-v11.geometry.width, 86);
	var label18 = graph.insertVertex(v18, null, '13', 0.5, 0.1, 0, 0, null, true);
	label18.setConnectable(false);
	v1.insert(v18);

	var v19 = v11.clone();
	v19.value = 'RB0/AN12/INT0/FLT0/SDI/SDA';
	v19.geometry.offset = new mxPoint(-v11.geometry.width, 110);
	var label19 = graph.insertVertex(v19, null, '33', 0.5, 0.1, 0, 0, null, true);
	label19.setConnectable(false);
	v1.insert(v19);

	var v20 = v11.clone();
	v20.value = 'RB1/AN10/INT1/SCK/SCL';
	v20.geometry.offset = new mxPoint(-v11.geometry.width, 122);
	var label20 = graph.insertVertex(v20, null, '34', 0.5, 0.1, 0, 0, null, true);
	label20.setConnectable(false);
	v1.insert(v20);

	var v21 = v11.clone();
	v21.value = 'RB2/AN8/INT2/VMO';
	v21.geometry.offset = new mxPoint(-v11.geometry.width, 134);
	var label21 = graph.insertVertex(v21, null, '35', 0.5, 0.1, 0, 0, null, true);
	label21.setConnectable(false);
	v1.insert(v21);

	var v22 = v11.clone();
	v22.value = 'RB3/AN9/CCP2/VPO';
	v22.geometry.offset = new mxPoint(-v11.geometry.width, 146);
	var label22 = graph.insertVertex(v22, null, '36', 0.5, 0.1, 0, 0, null, true);
	label22.setConnectable(false);
	v1.insert(v22);

	var v23 = v11.clone();
	v23.value = 'RB4/AN11/KBI0/CSSPP';
	v23.geometry.offset = new mxPoint(-v11.geometry.width, 158);
	var label23 = graph.insertVertex(v23, null, '37', 0.5, 0.1, 0, 0, null, true);
	label23.setConnectable(false);
	v1.insert(v23);

	var v24 = v11.clone();
	v24.value = 'RB5/KBI1/PGM';
	v24.geometry.offset = new mxPoint(-v11.geometry.width, 170);
	var label24 = graph.insertVertex(v24, null, '38', 0.5, 0.1, 0, 0, null, true);
	label24.setConnectable(false);
	v1.insert(v24);

	var v25 = v11.clone();
	v25.value = 'RB6/KBI2/PGC';
	v25.geometry.offset = new mxPoint(-v11.geometry.width, 182);
	var label25 = graph.insertVertex(v25, null, '39', 0.5, 0.1, 0, 0, null, true);
	label25.setConnectable(false);
	v1.insert(v25);

	var v26 = v11.clone();
	v26.value = 'RB7/KBI3/PGD';
	v26.geometry.offset = new mxPoint(-v11.geometry.width, 194);
	var label26 = graph.insertVertex(v26, null, '40', 0.5, 0.1, 0, 0, null, true);
	label26.setConnectable(false);
	v1.insert(v26);

	var v27 = v11.clone();
	v27.value = 'VUSB';
	v27.geometry.offset = new mxPoint(-v11.geometry.width, 254);
	var label27 = graph.insertVertex(v27, null, '18', 0.5, 0.1, 0, 0, null, true);
	label27.setConnectable(false);
	v1.insert(v27);

	var v28 = v11.clone();
	v28.value = 'RC0/T1OSO/T1CKL';
	v28.geometry.x = 1;
	v28.style =	'shape=line;align=right;verticalAlign=middle;fontSize=8;routingCenterX=0.5;'+
		'spacingRight=12;fontColor=' + fontColor + ';strokeColor=' + strokeColor;
	v28.geometry.offset = new mxPoint(0, 2);
	var label28 = graph.insertVertex(v28, null, '15', 0.5, 0.1, 0, 0, null, true);
	label28.setConnectable(false);
	v1.insert(v28);

	var v29 = v28.clone();
	v29.value = 'RC1/T1ODI/CCP2//UOE';
	v29.geometry.offset = new mxPoint(0, 14);
	var label29 = graph.insertVertex(v29, null, '16', 0.5, 0.1, 0, 0, null, true);
	label29.setConnectable(false);
	v1.insert(v29);

	var v30 = v28.clone();
	v30.value = 'RC2/CCP1/P1A';
	v30.geometry.offset = new mxPoint(0, 26);
	var label30 = graph.insertVertex(v30, null, '17', 0.5, 0.1, 0, 0, null, true);
	label30.setConnectable(false);
	v1.insert(v30);

	var v31 = v28.clone();
	v31.value = 'RC4/D-/VM';
	v31.geometry.offset = new mxPoint(0, 38);
	var label31 = graph.insertVertex(v31, null, '23', 0.5, 0.1, 0, 0, null, true);
	label31.setConnectable(false);
	v1.insert(v31);

	var v32 = v28.clone();
	v32.value = 'RC5/D+/VP';
	v32.geometry.offset = new mxPoint(0, 50);
	var label32 = graph.insertVertex(v32, null, '24', 0.5, 0.1, 0, 0, null, true);
	label32.setConnectable(false);
	v1.insert(v32);

	var v32 = v28.clone();
	v32.value = 'RC6/TX/CK';
	v32.geometry.offset = new mxPoint(0, 62);
	var label32 = graph.insertVertex(v32, null, '25', 0.5, 0.1, 0, 0, null, true);
	label32.setConnectable(false);
	v1.insert(v32);

	var v33 = v28.clone();
	v33.value = 'RC7/RX/DT/SDO';
	v33.geometry.offset = new mxPoint(0, 74);
	var label33 = graph.insertVertex(v33, null, '26', 0.5, 0.1, 0, 0, null, true);
	label33.setConnectable(false);
	v1.insert(v33);

	var v34 = v28.clone();
	v34.value = 'RD0/SPP0';
	v34.geometry.offset = new mxPoint(0, 110);
	var label34 = graph.insertVertex(v34, null, '19', 0.5, 0.1, 0, 0, null, true);
	label34.setConnectable(false);
	v1.insert(v34);

	var v35 = v28.clone();
	v35.value = 'RD1/SPP1';
	v35.geometry.offset = new mxPoint(0, 122);
	var label35 = graph.insertVertex(v35, null, '20', 0.5, 0.1, 0, 0, null, true);
	label35.setConnectable(false);
	v1.insert(v35);

	var v36 = v28.clone();
	v36.value = 'RD2/SPP2';
	v36.geometry.offset = new mxPoint(0, 134);
	var label36 = graph.insertVertex(v36, null, '21', 0.5, 0.1, 0, 0, null, true);
	label36.setConnectable(false);
	v1.insert(v36);

	var v37 = v28.clone();
	v37.value = 'RD3/SPP3';
	v37.geometry.offset = new mxPoint(0, 146);
	var label37 = graph.insertVertex(v37, null, '22', 0.5, 0.1, 0, 0, null, true);
	label37.setConnectable(false);
	v1.insert(v37);

	var v38 = v28.clone();
	v38.value = 'RD4/SPP4';
	v38.geometry.offset = new mxPoint(0, 158);
	var label38 = graph.insertVertex(v38, null, '27', 0.5, 0.1, 0, 0, null, true);
	label38.setConnectable(false);
	v1.insert(v38);

	var v39 = v28.clone();
	v39.value = 'RD5/SPP5/P1B';
	v39.geometry.offset = new mxPoint(0, 170);
	var label39 = graph.insertVertex(v39, null, '28', 0.5, 0.1, 0, 0, null, true);
	label39.setConnectable(false);
	v1.insert(v39);

	var v40 = v28.clone();
	v40.value = 'RD6/SPP6/P1C';
	v40.geometry.offset = new mxPoint(0, 182);
	var label40 = graph.insertVertex(v40, null, '29', 0.5, 0.1, 0, 0, null, true);
	label40.setConnectable(false);
	v1.insert(v40);

	var v41 = v28.clone();
	v41.value = 'RD7/SPP7/P1D';
	v41.geometry.offset = new mxPoint(0, 194);
	var label41 = graph.insertVertex(v41, null, '30', 0.5, 0.1, 0, 0, null, true);
	label41.setConnectable(false);
	v1.insert(v41);

	var v42 = v28.clone();
	v42.value = 'RE0/AN5/CK1SPP';
	v42.geometry.offset = new mxPoint(0, 218);
	var label42 = graph.insertVertex(v42, null, '8', 0.5, 0.1, 0, 0, null, true);
	label42.setConnectable(false);
	v1.insert(v42);

	var v43 = v28.clone();
	v43.value = 'RE1/AN6/CK2SPP';
	v43.geometry.offset = new mxPoint(0, 230);
	var label43 = graph.insertVertex(v43, null, '9', 0.5, 0.1, 0, 0, null, true);
	label43.setConnectable(false);
	v1.insert(v43);

	var v44 = v28.clone();
	v44.value = 'RE2/AN7/OESPP';
	v44.geometry.offset = new mxPoint(0, 242);
	var label44 = graph.insertVertex(v44, null, '10', 0.5, 0.1, 0, 0, null, true);
	label44.setConnectable(false);
	v1.insert(v44);

	var v45 = v28.clone();
	v45.value = 'RE3//MCLR/VPP';
	v45.geometry.offset = new mxPoint(0, 254);
	var label45 = graph.insertVertex(v45, null, '1', 0.5, 0.1, 0, 0, null, true);
	label45.setConnectable(false);
	v1.insert(v45);
}