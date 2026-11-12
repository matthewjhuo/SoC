export const chipverifyCourses = [
    {
        "courseId": "chipverify-masterclass",
        "courseName": "ChipVerify: SystemVerilog 課程精華 (97 單元全集)",
        "icon": "BookOpenCheck",
        "color": "var(--color-accent-teal)",
        "chapters": [
            {
                "id": "cv-sv-1",
                "num": 1,
                "title": "SystemVerilog Tutorial",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "What is SystemVerilog ?",
                        "content": "Hardware Description Languages (HDL) like Verilog and VHDL are used to describe hardware behavior so that it can be converted to digital blocks made up of combinational gates and sequential elements. In order to verify that the hardware description in HDL is correct, there is a need for a language with more features in OOP that will support complicated testing procedures and is often called a Hardware Verification Language.\n\nSystemVerilog is an extension of Verilog with many such verification features that allow engineers to verify the design using complex testbench structures and random stimuli in simulation.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Why is Verilog not preferred ?",
                        "content": "Back in the 1990's, Verilog was the primary language to verify functionality of designs that were small, not very complex and had less features. As design complexity increases, so does the requirement of better tools to design and verify it. SystemVerilog is far superior to Verilog because of its ability to perform constrained random stimuli, use OOP features in testbench construction, functional coverage, assertions among many others.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "What is verification ?",
                        "content": "Verification is the process of ensuring that a given hardware design works as expected. Chip design is a very extensive and time consuming process and costs millions to fabricate. Functional defects in the design if caught at an earlier stage in the design process will help save costs. If a bug is found later on in the design flow, then all of the design steps have to be repeated again which will use up more resources, money and time. If the entire design flow has to be repeated, then its called a respin of the chip.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "What about Vera, e, and other similar HVL ?",
                        "content": "They have been in use for some time. SystemVerilog can be considered an extension of Verilog (the most popular HDL), and it makes sense to verify a Verilog design in SystemVerilog. Also SystemVerilog supports OOP which makes verification of designs at a higher level of abstraction possible.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "How is it used in verification ?",
                        "content": "A hardware design mostly consists of several Verilog (.v) files with one top module, in which all other sub-modules are instantiated to achieve the desired behavior and functionality. An environment called testbench is required for the verification of a given verilog design and is usually written in SystemVerilog these days. The idea is to drive the design with different stimuli to observe its outputs and compare it with expected values to see if the design is behaving the way it should.\n\nIn order to do this, the top level design module is instantiated within the testbench environment, and design input/output ports are connected with the appropriate testbench component signals. The inputs to the design are driven with certain values for which we know how the design should operate. The outputs are analyzed and compared with the expected values to see if the design behavior is correct.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Example",
                        "content": "Consider a simple verilog design of a D-flip flop which is required to be verified. The functionality of DFF is that Q output pin gets latched to the value in D input pin at every positive clock edge, which makes it a positive edge-triggered flip-flop. Let us also assume that the flip-flop has an active-low reset pin and a clock.\n\nWe need to build a testbench for this design in order to drive some signal values to its input pins clk, reset, d and observe what the output looks like. By driving appropriate stimuli and checking results, we can be assured of its functional behavior. Synthesis tools can then convert this design into real hardware logics and gates.",
                        "code": "// File : d_ff.v\nmodule d_ff (clk, resetn, q, d);\n\n\tinput clk;\n\tinput resetn;\n\tinput d;\n\toutput q;\n\t\n\treg q;\n\t\n\talways @ (posedge clk) \n\t\tif (! resetn) \n\t\t\tq <= 0;\n\t\telse \n\t\t\tq <= d;\n\t\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "The file tb_top represents a simple testbench in which you have created an object of the design d_ff0 and connected it's ports with signals in the testbench. Then, you only need to assign or drive signals in the testbench and they will be passed on to the design.\n\nStart learning SystemVerilog using links on the left side",
                        "code": "// File : tb_top.sv\nmodule tb_top ();\n\n\treg clk;\n\treg resetn; \n\treg d;\n\twire q;\n\t\n\t// Instantiate the design\n\td_ff  d_ff0 (\t.clk (clk),\n\t\t       \t\t.resetn (resetn),\n\t\t       \t\t.d (d),\n\t\t       \t\t.q (q));\n\t\n\t// Create a clock\n\talways #10 clk <= ~clk;\n\t\n\tinitial begin\n\t\tresetn <= 0;\n\t\tclk <= 0;\n\t\td <= 0;\n\t\t\n\t\t#10 resetn <= 1;\n\t\t#5      d <= 1;\n\t\t#8      d <= 0;\n\t\t#2      d <= 1;\n\t\t#10     d <= 0;\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-2",
                "num": 2,
                "title": "SystemVerilog TestBench",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "We need to have an environment known as a testbench to run any kind of simulation on the design.\n\nClick here to refresh basic concepts of a simulation",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "What is the purpose of a testbench ?",
                        "content": "A testbench allows us to verify the functionality of a design through simulations. It is a container where the design is placed and driven with different input stimulus.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Components of a testbench",
                        "content": "The example shown in Introduction is not modular, scalable, flexible or even re-usable because of the way DUT is connected, and how signals are driven. Let's take a look at a simple testbench and try to understand about the various components that facilitate data transfer from and to the DUT.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "What is DUT ?",
                        "content": "DUT stands for Design Under Test and is the hardware design written in Verilog or VHDL. DUT is a term typically used in post validation of the silicon once the chip is fabricated. In pre validation, it is also called as Design Under Verification, DUV in short.\n\nClick here for a complete SystemVerilog testbench example !",
                        "code": "// All verification components are placed in this top testbench module\nmodule tb_top;\n\n\t// Declare variables that need to be connected to the design instance\n\t// These variables are assigned some values that in turn gets transferred to\n\t// the design as inputs because they are connected with the ports in the design\n\treg clk;        \n\twire en; \t\t\n\twire wr;\n\twire data;\n\n\t// Instantiate the design module and connect the variables declared above\n\t// with the ports in the design\n\tdesign myDsn ( .clk (clk),\n\t               .en  (en),\n\t               .wr  (wr),\n\t               . ...\n\t               .rdata);\n\t\n\t// Develop rest of the testbench and write stimulus that can be driven to the design\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "What is an interface ?",
                        "content": "If the design contained hundreds of port signals it would be cumbersome to connect, maintain and re-use those signals. Instead, we can place all the design input-output ports into a container which becomes an interface to the DUT. The design can then be driven with values through this interface.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "What is a driver ?",
                        "content": "The driver is the verification component that does the pin-wiggling of the DUT, through a task defined in the interface. When the driver has to drive some input values to the design, it simply has to call this pre-defined task in the interface, without actually knowing the timing relation between these signals. The timing information is defined within the task provided by the interface. This is the level of abstraction required to make testbenches more flexible and scalable. In the future, if the interface changed, then the new driver can call the same task and drive signals in a different way.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "How does the driver know what to drive ?",
                        "content": "The generator is a verification component that can create valid data transactions and send them to the driver. The driver can then simply drive the data provided to it by the generator through the interface. Data transactions are implemented as class objects shown by the blue squares in the image above. It is the job of the driver to get the data object and translate it into something the DUT can understand.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Why is a monitor required?",
                        "content": "Until now, how data is driven to the DUT was discussed. But that's only half way through, because our primary aim is to verify the design. The DUT processes input data and sends the result to the output pins. The monitor picks up the processed data, converts it into a data object and sends it to the scoreboard.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Why is an environment required ?",
                        "content": "It makes the verification more flexible and scalable because more components can be plugged into the same environment for a future project.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "What does the test do ?",
                        "content": "Exactly. The test will instantiate an object of the environment and configure it the way the test wants to. Remember that we will most probably have thousands of tests and it is not feasbile to make direct changes to the environment for each test. Instead we want certain knobs/parameters in the environment that can be tweaked for each test. That way, the test will have a higher control over stimulus generation and will be more effective.\n\nHere, we have talked about how a simple testbench looks like. In real projects, there'll be many such components plugged in to do various tasks at higher levels of abstraction. If we had to verify a simple digital counter with maximum 50 lines of RTL code, yea, this would suffice. But, when complexity increases, there will be a need to deal with more abstraction.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "What are abstraction levels ?",
                        "content": "In the Preface, you saw that we toggled the design using individual signals.",
                        "code": "#5  resetn <= 0;\n#20 resetn <= 1;",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click here for another complete SystemVerilog testbench example !",
                        "code": "module tb_top;\n\n\tbit resetn;\n\n\ttask apply_reset ();\n\t\t#5  resetn <= 0;\n\t\t#20 resetn <= 1;\n\tendtask\n\t\n\tinitial begin\n\t\tapply_reset();\t\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-3",
                "num": 3,
                "title": "SystemVerilog Data Types",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "SystemVerilog is an extension to Verilog and is also used as an HDL. Verilog has reg and wire data-types to describe hardware behavior. Since verification of hardware can become more complex and demanding, datatypes in Verilog are not sufficient to develop efficient testbenches and testcases. Hence SystemVerilog has extended Verilog by adding more C like data-types for better encapsulation and compactness.\n\nClick here to refresh Verilog Data Types\n\nThe image shown below is a comprehensive list of the major basic data types available in SystemVerilog.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Comments",
                        "content": "",
                        "code": "// This is a one-line comment\n\n/* This is a multiple line comment. \nSince this line is within the block comment symbols, it is a comment.\n*/   \n\n/* Another multiple line comment\n// A nested one-line comment inside a block comment is fine.\nBut a block comment cannot be nested in another block comment.\n*/",
                        "lang": "verilog"
                    },
                    {
                        "title": "Value System",
                        "content": "Following are the four states that a variable or net can hold",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Enhanced (') Literal",
                        "content": "Verilog allowed a vector to be easily left padded with 0, Z or X, but not for 1. This can be a limitation as shown in the example below when WIDTH parameter is scaled up.\n\nSystemVerilog allows the fill value to be specified without needing to indicate a binary, octal, or hexadecimal radix. Additionally, the fill value can now also be set to a logic 1.",
                        "code": "parameter   WIDTH = 8;\n\nreg [WIDTH-1:0]   m_var;\n\nm_var = 'h0;     // Fills all bits of m_var with 0\nm_var = 'hZ;     // Fills all bits of m_var with Z\nm_var = 'hX;     // Fills all bits of m_var with X\nm_var = 'h1;     // Only LSB is 1 making the value of m_var = 8'b0000_0001\n\nm_var = {WIDTH{1'b1}};   // Workaround - Use concatenation operator to club together as many 1s required",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "module tb;\n  reg [7:0]  m_var1;\n  reg [15:0] m_var2;\n  \n  initial begin\n    m_var1 = '1;\n    m_var2 = '1;\n    \n    $display(\"m_var1=0x%0h  m_var2=0x%0h\", m_var1, m_var2);\n    \n    // This does not work - Radix must be specified !\n    //m_var1 = 'F0;\n    //m_var2 = 'cafe;\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "xcelium> run\nm_var1=0xff  m_var2=0xffff\nxmsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Floating Point/Exponential Numbers",
                        "content": "",
                        "code": "module tb;\n  real  pi;        // Declared to be of type real\n  real  freq;\n  \n  initial begin\n    pi   = 3.14;    // Store floating point number\n    freq = 1e6; \t// Store exponential number\n    \n    $display (\"Value of pi = %f\", pi);\n    $display (\"Value of pi = %0.3f\", pi);\n    $display (\"Value of freq = %0d\", freq);\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "xcelium> run\nValue of pi = 3.140000\nValue of pi = 3.140\nValue of freq =     1000000\nxmsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Strings",
                        "content": "Click here to learn more about SystemVerilog Strings",
                        "code": "// Strings can be split into multiple lines [for visual appeal] by the using \"\" character\n// This does not split the string into multiple lines in the output\n// Result: New York is an awesome place.So energetic and vibrant.\n$display (\"New York is an awesome place.\nSo energetic and vibrant.\");\n\n// Strings can be split to be displayed in multiple lines using \"\n\"\n/* Result:\nNew York is an awesome place.\nSo energetic and vibrant.\n*/\n$display (\"New York is an awesome place.\n\nSo energetic and vibrant.\");\n\n// To store a string literal in an integral type, each character will require 8 bits\nbyte \t\tmyLetter \t= \"D\"; \t\t\t\t\nbit [7:0] \tmyNewLine \t= \"\n\";\n\n// \"Hello World\" has 11 characters and each character requires 8-bits\nbit [8*17:1] myMessage  = \"Hello World\";\nstring       myMessage2 = \"Hello World\";    // Uses \"string\" data type",
                        "lang": "verilog"
                    },
                    {
                        "title": "Structures",
                        "content": "A structure represents a collection of data-types that are stored together and be referenced via the structure variable.\n\nClick here to learn more about Structures",
                        "code": "// Create a structure to store \"int\" and \"real\" variables\n// A name is given to the structure and declared to be a data type so \n// that this name \"s_money\" can be used to create structure variables\ntypedef struct {\n\tint \tcoins;\n\treal \tdollars;\n} s_money;\n\n// Create a structure variable of type s_money\ns_money wallet;                             \n                                            \nwallet = '{5, 19.75};                       // Assign direct values to a structure variable\nwallet = '{coins:5, dollars:19.75};         // Assign values using member names\nwallet = '{default:0};                      // Assign all elements of structure to 0\nwallet = s_money'{int:1, dollars:2};        // Assign default values to all members of that type\n\n// Create a structure that can hold 3 variables and initialize them with 1\nstruct {\n\tint  A, B, C;\n} ABC = '{3{1}}; \t\t\t\t\t\t\t// A = B = C = 1\n\n// Assigning an array of structures\ns_money purse [1:0] = '{'{2, 4.25}, '{7,1.5}};",
                        "lang": "verilog"
                    },
                    {
                        "title": "Fixed Arrays",
                        "content": "An array is a variable to store different values in contiguous locations.",
                        "code": "module tb;\n  \t// The following two representations of fixed arrays are the same\n  \t// myFIFO and urFIFO have 8 locations where each location can hold an integer value\n  \t// [0] | [1] | [2] | [3] | [4] | [5] | [6] | [7]\n  \tint   myFIFO  [0:7];\n  \tint   urFIFO  [8];\n \n   \t// Multi-dimensional arrays\n  \t// [0][0] | [0][1] | [0][2]\n    // [1][0] | [1][1] | [1][2]\n  \tint   myArray  [2][3];\n \n  \tinitial begin\n      myFIFO[5] = 32'hface_cafe;     // Assign value to location 5 in 1D array\n      myArray [1][1] = 7;\t         // Assign to location 1,1 in 2D array\n      \n      // Iterate through each element in the array\n      foreach (myFIFO[i]) \n        $display (\"myFIFO[%0d] = 0x%0h\", i, myFIFO[i]);\n      \n      // Iterate through each element in the multidimensional array\n      foreach (myArray[i]) \n        foreach (myArray[i][j])\n          $display (\"myArray[%0d][%0d] = %0d\", i, j, myArray[i][j]);\n      \n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!\n\nClick here to learn more about SystemVerilog Arrays",
                        "code": "ncsim> run\nmyFIFO[0] = 0x0\nmyFIFO[1] = 0x0\nmyFIFO[2] = 0x0\nmyFIFO[3] = 0x0\nmyFIFO[4] = 0x0\nmyFIFO[5] = 0xfacecafe\nmyFIFO[6] = 0x0\nmyFIFO[7] = 0x0\nmyArray[0][0] = 0\nmyArray[0][1] = 0\nmyArray[0][2] = 0\nmyArray[1][0] = 0\nmyArray[1][1] = 7\nmyArray[1][2] = 0\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Void",
                        "content": "The void data-type represents non-existing data, and can be specified as the return type of functions and tasks to indicate no return value.",
                        "code": "function void display ();\n\t$display (\"Am not going to return any value\");\nendfunction\n\ntask void display ();\n\t#10 $display (\"Me neither\");\nendtask",
                        "lang": "verilog"
                    },
                    {
                        "title": "real to int Conversion",
                        "content": "Real numbers will be converted to integers by rounding the real number to the nearest integer instead of truncating it. If the fractional part is exactly 0.5, it will be rounded away from zero. Explicit conversion can be specified using casting or using system tasks. Directly assigning a real value to an integral type will also round instead of truncate.",
                        "code": "// Casting will perform rounding\n\tint'(2.0 * 3.0)\n\tshortint'({8'hab, 8'hef}) \n\t\n\t// Using system tasks will truncate\n\tinteger  \t$rtoi ( real_val )\n\treal \t\t$itor ( int_val)",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-4",
                "num": 4,
                "title": "SystemVerilog logic",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "The SystemVerilog standard specifies that signals in a design possess both a type and a data type. The type designates whether the signal is a net or a variable, while the data type defines the value system of that net or variable which are 0, 1, X and Z.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "4-state Data Types",
                        "content": "Types that can have unknown (X) and high-impedance (Z) value in addition to zero (0) and one (1) are called 4-state data types. In Verilog, all nets (eg. wire) and variables (eg. reg) use 4-state values. Note that reg can only be driven in procedural blocks like always and initial while wire can only be used in assign statements.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "logic",
                        "content": "SystemVerilog introduces a new 4-state data type called logic that can be driven in both procedural blocks and continuous assign statements. However, a signal with more than one driver needs to be declared a net-type such as wire so that SystemVerilog can resolve the final value based on strength.",
                        "code": "module tb;\n\tlogic [3:0]  my_data; \t\t// Declare a 4-bit logic type variable\n\tlogic        en; \t\t\t// Declare a 1-bit logic type variable\n\t\n\tinitial begin\n    \t$display (\"my_data=0x%0h en=%0b\", my_data, en);    \t// Default value of logic type is X\n\t\tmy_data = 4'hB; \t\t\t\t\t\t\t\t\t// logic datatype can be driven in initial/always blocks\n      \t$display (\"my_data=0x%0h en=%0b\", my_data, en); \t \n      \t#1;\n      \t$display (\"my_data=0x%0h en=%0b\", my_data, en);\n\tend\n  \n  \tassign en = my_data[0]; \t\t\t\t\t\t\t\t// logic datatype can also be driven via assign statements\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nmy_data=0xx en=x\nmy_data=0xb en=x\nmy_data=0xb en=1\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-5",
                "num": 5,
                "title": "SystemVerilog bit, byte and int",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "2-state Data Types",
                        "content": "The 2-state data types, such as bit and int, can only represent two values: 0 and 1. This simplification reduces memory usage during simulation, as each bit requires only one bit of storage instead of two bits needed for the 4-state types (which include 0, 1, X for unknown, and Z for high impedance). This leads to faster simulation performance due to lower memory overhead and reduced complexity in handling states.\n\nSuch 2-state types are suitable for modeling at more abstract levels than RTL, such as system level and transaction level. For instance, when modeling a network packet with a header that indicates the packet length, the length should be a numeric value rather than X or Z.\n\nWhen a 4-state value is converted to a 2-state value, unknown (X) or high-impedance (Z) bits shall be converted to zeros.",
                        "code": "module tb;\n  bit   [3:0] var_b;      // Declare a 4-bit variable of type \"bit\"  \n  logic [3:0] x_val;     // Declare a 4-bit variable of type \"logic\"\n  \n  initial begin    \n    x_val = 4'b01zx;\n    \n    // If a logic type or any 4-state variable assigns its value to a \"bit\" type \n    // variable, then X and Z get converted to zero\n    var_b = x_val;\n    $display (\"x_val=%b var_b = %b\", x_val, var_b);\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "xcelium> run\nx_val=01zx var_b = 0100\nxmsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "bit",
                        "content": "The bit type is a 2-state data type that can represent binary values, default being 0. The bit type is commonly used in testbenches and other verification code where the additional states (X and Z) are not needed. A range specification ([MSB:LSB]) should be provided to make it represent and store multiple bits.",
                        "code": "module tb;\n  bit       var_a;       // Declare a 1 bit variable of type \"bit\"\n  bit [3:0] var_b;       // Declare a 4 bit variable of type \"bit\"\n  \n  logic [3:0] x_val;     // Declare a 4 bit variable of type \"logic\"\n  \n  initial begin\n  \n    // Initial value of \"bit\" data type is 0\n    $display (\"Initial value var_a=%0b var_b=0x%0h\", var_a, var_b);\n    \n    // Assign new values and display the variable to see that it gets the new values\n    var_a = 1;\n    var_b = 4'hF;\n    $display (\"New values    var_a=%0b var_b=0x%0h\", var_a, var_b);\n    \n    // If a \"bit\" type variable is assigned with a value greater than it can hold\n    // the left most bits are truncated. In this case, var_b can hold only 4 bits\n    // and hence 'h481 gets truncated leaving var_b with only 'ha;\n    var_b = 16'h481a;\n    $display (\"Truncated value: var_b=0x%0h\", var_b);  \n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nInitial value var_a=0 var_b=0x0\nNew values    var_a=1 var_b=0xf\nTruncated value: var_b=0xa\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "byte",
                        "content": "The byte data type is defined as an 8-bit signed integer. It uses two's complement representation, enabling it to store both positive and negative values. The range for a byte is from -128 to 127. The byte data type is useful for applications where memory efficiency is important, such as in large arrays or when representing small integer values.",
                        "code": "module tb;\n   byte           m_var_s;      // By default signed, and can represent positive and negative numbers\n  \n  initial begin\n    \n    #10 m_var_s  = 0;           // assign 0\n    #20 m_var_s  = 2**7 - 1; \t// assign 127\n    #30 m_var_s  = 2**7;        // assign 128\n    #40 m_var_s  = 2**8 - 1;    // assign 255\n  end \n  \n  initial \n    $monitor(\"[%0t] m_var_s = 'd%0d  (0x%0h)\", $time, m_var_s, m_var_s);\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "xcelium> run\n[0] m_var_s = 'd0  (0x0)\n[30] m_var_s = 'd127  (0x7f)\n[60] m_var_s = 'd-128  (0x80)\n[100] m_var_s = 'd-1  (0xff)\nxmsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "shortint",
                        "content": "A shortint in SystemVerilog is a 2-state, 16-bit signed integer data type.",
                        "code": "module tb;\n   shortint            m_var_s;      // By default signed, and can represent positive and negative numbers\n  \n  initial begin\n    \n    #10 m_var_s  = 0;             // assign 0\n    #20 m_var_s  = 2**15 - 1;     // assign 127\n    #30 m_var_s  = 2**15;         // assign 128\n    #40 m_var_s  = 2**16 - 1;     // assign 256\n  end \n  \n  initial \n    $monitor(\"[%0t] m_var_s = 'd%0d  (0x%0h)\", $time, m_var_s, m_var_s);\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "xcelium> run\n[0] m_var_s = 'd0  (0x0)\n[30] m_var_s = 'd32767  (0x7fff)\n[60] m_var_s = 'd-32768  (0x8000)\n[100] m_var_s = 'd-1  (0xffff)\nxmsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "int",
                        "content": "A int in SystemVerilog is a 2-state, 32-bit signed integer data type.",
                        "code": "module tb;\n   int            m_var_s;      // By default signed, and can represent positive and negative numbers\n  \n  initial begin\n    \n    #10 m_var_s  = 0;             \n    #20 m_var_s  = 2**31 - 1;     \n    #30 m_var_s  = 2**31;         \n    #40 m_var_s  = 2**32 - 1;     \n  end \n  \n  initial \n    $monitor(\"[%0t] m_var_s = 'd%0d  (0x%0h)\", $time, m_var_s, m_var_s);\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "xcelium> run\n[0] m_var_s = 'd0  (0x0)\n[30] m_var_s = 'd2147483647  (0x7fffffff)\n[60] m_var_s = 'd-2147483648  (0x80000000)\n[100] m_var_s = 'd-1  (0xffffffff)\nxmsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "longint",
                        "content": "A longint in SystemVerilog is a 2-state, 64-bit signed integer data type.",
                        "code": "module tb;\n   longint            m_var_s;      // By default signed, and can represent positive and negative numbers\n  \n  initial begin\n    \n    #10 m_var_s  = 0;             \n    #20 m_var_s  = 2**63 - 1;     \n    #30 m_var_s  = 2**63;         \n    #40 m_var_s  = 2**64 - 1;     \n  end \n  \n  initial \n    $monitor(\"[%0t] m_var_s = 'd%0d  (0x%0h)\", $time, m_var_s, m_var_s);\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "xcelium> run\n[0] m_var_s = 'd0  (0x0)\n[30] m_var_s = 'd9223372036854775807  (0x7fffffffffffffff)\n[60] m_var_s = 'd-9223372036854775808  (0x8000000000000000)\n[100] m_var_s = 'd-1  (0xffffffffffffffff)\nxmsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Signed and Unsigned",
                        "content": "Signed data types can represent both positive and negative values, whereas unsigned data types can only represent non-negative values (zero and positive numbers). Signed data types use one bit (MSB) for the sign, which reduces the maximum positive value that can be represented compared to unsigned types of the same bit width. This means that while both signed and unsigned types may have the same number of bits, the unsigned type has a larger range of positive values.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Example",
                        "content": "The sign can be explicitly defined using the keywords signed and unsigned.",
                        "code": "module tb;\n  byte    \t\t\ts_byte;   // By default byte is signed\n  byte unsigned  \tu_byte;   // Byte is set to unsigned\n  \n  initial begin\n    $display (\"Size s_byte=%0d, u_byte=%0d\", $bits(s_byte), $bits(u_byte));\n    \n    // Assign the \"assumed\" maximum value to both variables\n    #1 s_byte = 'h7F;\n       u_byte = 'h7F;\n    \n    // Increment by 1, and see that s_byte rolled over to negative because\n    // byte is signed by default. u_byte keeps increasing because it is \n    // unsigned and can go upto 255\n    #1 s_byte += 1;\n       u_byte += 1;\n    \n    // Assign 255 (8'hFF) to u_byte -> this is the max value it can hold\n    #1 u_byte = 'hFF;\n    \n    // Add 1 and see that it rolls over to 0\n    #1 u_byte += 1;    \n  end\n  \n  initial begin\n    $monitor (\"[%0t ns] s_byte=%0d u_byte=%0d\", $time, s_byte, u_byte);\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!\n\nUnderstanding the difference between signed and unsigned data types is crucial for effective programming and hardware design. It allows developers to choose the right representation for their data needs while optimizing memory usage and ensuring data integrity.",
                        "code": "ncsim> run\nSize s_byte=8, u_byte=8\n[0 ns] s_byte=0 u_byte=0\n[1 ns] s_byte=127 u_byte=127\n[2 ns] s_byte=-128 u_byte=128\n[3 ns] s_byte=-128 u_byte=255\n[4 ns] s_byte=-128 u_byte=0\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Sign Cast",
                        "content": "They can be converted into one another by casting.\n\nOperations on unsigned integers can be faster in some cases since there’s no need to handle sign bits during arithmetic operations and can lead to more efficient code execution.",
                        "code": "module tb;\n   shortint            m_var_s;      // By default signed, and can represent positive and negative numbers\n   shortint unsigned   m_var_us;     // Explicitly set to 'unsigned' and represents only positive numbers   \n  \n  initial begin\n    m_var_us = 2**16 - 1;\n    m_var_s  = -1;\n    \n    // Convert an unsigned variable value to a signed variable value by casting    \n    $display(\"m_var_us=%0d m_var_us=%0d\", signed' (m_var_us), m_var_us);\n    $display(\"m_var_s=%0d  m_var_s=%0d\", unsigned' (m_var_s), m_var_s);\n  end \nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "xcelium> run\nm_var_us=-1 m_var_us=65535\nm_var_s=65535  m_var_s=-1\nxmsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-6",
                "num": 6,
                "title": "SystemVerilog Strings",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "What is a SystemVerilog string ?",
                        "content": "The string data-type is an ordered collection of characters. The length of a string variable is the number of characters in the collection which can have dynamic length and vary during the course of a simulation. A string variable does not represent a string in the same way as a string literal. No truncation occurs when using the string variable.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Syntax",
                        "content": "variable_name is a valid identifier and the optional initial_value can be a string literal, the value \"\" for an empty string, or a string data type expression. If an initial value is not specified at the time of declaration, then the variable defaults to \"\", an empty string literal.",
                        "code": "string  variable_name [= initial_value];",
                        "lang": "verilog"
                    },
                    {
                        "title": "SystemVerilog String Example",
                        "content": "",
                        "code": "module tb;\t\n  // Declare a string variable called \"dialog\" to store string literals\n  // Initialize the variable to \"Hello!\"\n  string   dialog = \"Hello!\";            \n\t\n  initial begin\n    // Display the string using %s string format\n    $display (\"%s\", dialog);\n    \n    // Iterate through the string variable to identify individual characters and print\n    foreach (dialog[i]) begin\n      $display (\"%s\", dialog[i]);\n    end\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nHello!\nH\ne\nl\nl\no\n!\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "How are strings represented in Verilog ?",
                        "content": "A single ASCII character requires 8-bits (1 byte) and to store a string we would need as many bytes as there are number of characters in the string.\n\nClick here to learn about Verilog Arrays",
                        "code": "reg  [16*8-1:0] \tmy_string;           // Can store 16 characters\n\t\n\tmy_string = \"How are you\";              // 5 zeros are padded from MSB, and 11 char are stored\n\tmy_string = \"How are you doing?\";       // 18 characters; my_string will get \"w are you doing?\"",
                        "lang": "verilog"
                    },
                    {
                        "title": "Example",
                        "content": "",
                        "code": "module tb;\n  string firstname = \"Joey\";\n  string lastname  = \"Tribbiani\";\n  \n  initial begin\n    // String Equality : Check if firstname equals or not equals lastname\n    if (firstname == lastname)\n      $display (\"firstname=%s is EQUAL to lastname=%s\", firstname, lastname);\n    \n    if (firstname != lastname)\n      $display (\"firstname=%s is NOT EQUAL to lastname=%s\", firstname, lastname);\n    \n    // String comparison : Check if length of firstname < length of lastname\n    if (firstname < lastname)\n      $display (\"firstname=%s is LESS THAN lastname=%s\", firstname, lastname);\n    \n    // String comparison : Check if length of firstname > length of lastname\n    if (firstname > lastname)\n      $display (\"firstname=%s is GREATER THAN lastname=%s\", firstname, lastname);\n    \n    // String concatenation : Join first and last names into a single string\n    $display (\"Full Name = %s\", {firstname, \" \", lastname});\n    \n    // String Replication\n    $display (\"%s\", {3{firstname}});\n    \n    // String Indexing : Get the ASCII character at index number 2 of both first and last names\n    $display (\"firstname[2]=%s lastname[2]=%s\", firstname[2], lastname[2]);\n    \n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nfirstname=Joey is NOT EQUAL to lastname=Tribbiani\nfirstname=Joey is LESS THAN lastname=Tribbiani\nFull Name = Joey Tribbiani\nJoeyJoeyJoey\nfirstname[2]=e lastname[2]=i\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Basic String Methods",
                        "content": "SystemVerilog also includes a number of special methods to work with strings, which use built-in method notation.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Example",
                        "content": "",
                        "code": "module tb;\n   string str = \"Hello World!\";\n   \n   initial begin\n   \t  string tmp;\n\n\t  // Print length of string \"str\"\n      $display (\"str.len() = %0d\", str.len());\n\n      // Assign to tmp variable and put char \"d\" at index 3\n      tmp = str;\n      tmp.putc (3,\"d\");\n      $display (\"str.putc(3, d) = %s\", tmp);\n\n      // Get the character at index 2\n      $display (\"str.getc(2) = %s (%0d)\", str.getc(2), str.getc(2));\n\n      // Convert all characters to lower case\n      $display (\"str.tolower() = %s\", str.tolower());\n\n      // Comparison\n      tmp = \"Hello World!\";\n      $display (\"[tmp,str are same] str.compare(tmp) = %0d\", str.compare(tmp));\n      tmp = \"How are you ?\";\n      $display (\"[tmp,str are diff] str.compare(tmp) = %0d\", str.compare(tmp));\n\n      // Ignore case comparison\n      tmp = \"hello world!\";\n      $display (\"[tmp is in lowercase] str.compare(tmp) = %0d\", str.compare(tmp));\n      tmp = \"Hello World!\";\n      $display (\"[tmp,str are same] str.compare(tmp) = %0d\", str.compare(tmp));\n\n      // Extract new string from i to j\n      $display (\"str.substr(4,8) = %s\", str.substr (4,8));\n\n   end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "str.len() = 12                               \nstr.putc(3, d) = Heldo World!\nstr.getc(2) = l (108)\nstr.tolower() = hello world!\n[tmp,str are same] str.compare(tmp) = 0\n[tmp,str are diff] str.compare(tmp) = -1\n[tmp is in lowercase] str.compare(tmp) = -1\n[tmp,str are same] str.compare(tmp) = 0\nstr.substr(4,8) = o Wor",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-7",
                "num": 7,
                "title": "SystemVerilog Enumeration",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "An enumerated type defines a set of named values. In the following example, light_* is an enumerated variable that can store one of the three possible values (0, 1, 2). By default, the first name in the enumerated list gets the value 0 and the following names get incremental values like  1 and 2.\n\nThe user can assign any integer value for any of the enumerated names. If any name does not have an assigned value, then it automatically takes the incremented value of the previous name.",
                        "code": "enum          {RED, YELLOW, GREEN}         light_1;         // int type; RED = 0, YELLOW = 1, GREEN = 2\n\tenum bit[1:0] {RED, YELLOW, GREEN}         light_2;         // bit type; RED = 0, YELLOW = 1, GREEN = 2",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Note that an enumeration name cannot start with a number !",
                        "code": "enum          {RED=3, YELLOW, GREEN}       light_3;         // RED = 3, YELLOW = 4, GREEN = 5\n\tenum          {RED = 4, YELLOW = 9, GREEN} light_4;         // RED = 4, YELLOW = 9, GREEN = 10 (automatically assigned)\n\tenum          {RED = 2, YELLOW, GREEN = 3} light_5;         // Error : YELLOW and GREEN are both assigned 3\n\t\n\tenum bit[0:0] {RED, YELLOW, GREEN} light_6;                 // Error: minimum 2 bits are required",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "enum {1WAY, 2TIMES, SIXPACK=6} e_formula; \t\t// Compilation error on 1WAY, 2TIMES\n\t\n\tenum {ONEWAY, TIMES2, SIXPACK=6} e_formula; \t// Correct way is to keep the first character non-numeric",
                        "lang": "verilog"
                    },
                    {
                        "title": "How to define a new enumerated data type ?",
                        "content": "A custom data-type can be created so that the same data-type may be used to declare other variables.",
                        "code": "module tb;\n\t// \"e_true_false\" is a new data-type with two valid values: TRUE and FALSE\n\ttypedef enum {TRUE, FALSE} e_true_false;       \n\t\n\tinitial begin\n\t\t// Declare a variable of type \"e_true_false\" that can store TRUE or FALSE\n\t\te_true_false  answer;                       \n\t\t\n\t\t// Assign TRUE/FALSE to the enumerated variable\n\t\tanswer = TRUE;\n\t\t\n\t\t// Display string value of the variable\n\t\t$display (\"answer = %s\", answer.name);\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nanswer = TRUE\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Why do we need enumeration ?",
                        "content": "To make the code more simple and readable.\n\nConsider the following example without enumeration.\n\nThe following code is more readable because of the enumerated names RED, YELLOW and GREEN.",
                        "code": "bit [1:0] light;\n\t\t\n\tlight = 2'b00; \t\t\t// Assume 00 stands for RED\n\t\n\t// After many lines of code we have to correlate what\n\t// 00 stands for - is it RED, YELLOW or GREEN ?\n\tif (light == 2'b00)  \t\n\t\t// Do something",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "typedef enum {RED, YELLOW, GREEN} e_light;\n\te_light \tlight;\n\t\n\tlight = RED; \t\t// Initialize light to RED\n\t\t\n\t// Even after many lines of code it's easier to understand\n\tif (light == RED) \n\t\t// Do something",
                        "lang": "verilog"
                    },
                    {
                        "title": "Example",
                        "content": "In the following example, we'll try out each of the different styles shown in the table above.",
                        "code": "module tb;\n  // name : The next number will be associated with name starting from 0\n  // GREEN = 0, YELLOW = 1, RED = 2, BLUE = 3\n  typedef enum {GREEN, YELLOW, RED, BLUE} color_set_1;\n  \n  // name = C : Associates the constant C to name\n  // MAGENTA = 2, VIOLET = 7, PURPLE = 8, PINK = 9\n  typedef enum {MAGENTA=2, VIOLET=7, PURPLE, PINK} color_set_2;\n  \n  // name[N] : Generates N named constants : name0, name1, ..., nameN-1\n  // BLACK0 = 0, BLACK1 = 1, BLACK2 = 2, BLACK3 = 3\n  typedef enum {BLACK[4]} color_set_3;\n  \n  // name[N] = C : First named constant gets value C and subsequent ones \n  // are associated to consecutive values\n  // RED0 = 5, RED1 = 6, RED2 = 7\n  typedef enum {RED[3] = 5} color_set_4;\n  \n  // name[N:M] : First named constant will be nameN and last named \n  // constant nameM, where N and M are integers\n  // YELLOW3 = 0, YELLOW4 = 1, YELLOW5 = 2\n  typedef enum {YELLOW[3:5]} color_set_5;\n \n  // name[N:M] = C : First named constant, nameN will get C and \n  // subsequent ones are associated to consecutive values until nameM\n  // WHITE3 = 4, WHITE4 = 5, WHITE5 = 6\n  typedef enum {WHITE[3:5] = 4} color_set_6;\n  \n  initial begin\n    // Create new variables for each enumeration style\n  \tcolor_set_1 color1;\n    color_set_2 color2;\n    color_set_3 color3;\n    color_set_4 color4;\n    color_set_5 color5;\n    color_set_6 color6;\n    \n    color1 = YELLOW; $display (\"color1 = %0d, name = %s\", color1, color1.name());\n    color2 = PURPLE; $display (\"color2 = %0d, name = %s\", color2, color2.name());\n    color3 = BLACK3; $display (\"color3 = %0d, name = %s\", color3, color3.name());\n    color4 = RED1;   $display (\"color4 = %0d, name = %s\", color4, color4.name());\n    color5 = YELLOW3;$display (\"color5 = %0d, name = %s\", color5, color5.name());\n    color6 = WHITE4; $display (\"color6 = %0d, name = %s\", color6, color6.name());\n    \n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\ncolor1 = 1, name = YELLOW\ncolor2 = 8, name = PURPLE\ncolor3 = 3, name = BLACK3\ncolor4 = 6, name = RED1\ncolor5 = 0, name = YELLOW3\ncolor6 = 5, name = WHITE4\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Enumerated-Type Methods",
                        "content": "SystemVerilog includes a set of specialized methods to enable iterating over the values of enumerated types.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Enumeration Methods Example",
                        "content": "",
                        "code": "// GREEN = 0, YELLOW = 1, RED = 2, BLUE = 3\ntypedef enum {GREEN, YELLOW, RED, BLUE} colors;\n\nmodule tb;\n\tinitial begin\n      colors color;\n      \n      // Assign current value of color to YELLOW\n      color = YELLOW;\n      \n      $display (\"color.first() = %0d\", color.first());  // First value is GREEN = 0\n      $display (\"color.last()  = %0d\", color.last());\t// Last value is BLUE = 3\n      $display (\"color.next()  = %0d\", color.next()); \t// Next value is RED = 2\n      $display (\"color.prev()  = %0d\", color.prev()); \t// Previous value is GREEN = 0\n      $display (\"color.num()   = %0d\", color.num()); \t// Total number of enum = 4\n      $display (\"color.name()  = %s\" , color.name()); \t// Name of the current enum\n    end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\ncolor.first() = 0\ncolor.last()  = 3\ncolor.next()  = 2\ncolor.prev()  = 0\ncolor.num()   = 4\ncolor.name()  = YELLOW\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Type Checking",
                        "content": "Enumerated types are strongly typed and hence a variable of type enum cannot be assigned an integer value that lie outside the enumeration set unless an explicit cast is used.\n\nSome simulators provide a compilation error for going against SystemVerilog strict typing rules, like Aldec Riviera Pr which may take a commandline argument to avoid these errors.",
                        "code": "typedef enum bit [1:0] {RED, YELLOW, GREEN} e_light;\n\nmodule tb;\n  e_light light;\n \n  initial begin\n  \tlight = GREEN;        \n  \t$display (\"light = %s\", light.name());\n  \n  \t// Invalid because of strict typing rules\n  \tlight = 0;               \n  \t$display (\"light = %s\", light.name());\n  \n  \t// OK when explicitly cast\n    light = e_light'(1);      \n  \t$display (\"light = %s\", light.name());\n \n  \t// OK. light is auto-cast to integer\n    if (light == RED | light == 2)\n    \t$display (\"light is now %s\", light.name());\n    \n  end    \nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Some other simulators simply provide a warning and allow simulation to run, like Cadence ncsim.",
                        "code": "ERROR VCP2694 \"Assignment to enum variable from expression of different type.\" \"testbench.sv\" 11  1\nFAILURE \"Compile failure 1 Errors 0 Warnings  Analysis time: 0[s].\"",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "light = 0;               \n  \t        |\nncvlog: *W,ENUMERR (testbench.sv,11|11): This assignment is a violation of SystemVerilog strong typing rules for enumeration datatypes.\nLoading snapshot worklib.tb:sv .................... Done\n\nncsim> run\nlight = GREEN\nlight = RED\nlight = YELLOW\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-8",
                "num": 8,
                "title": "SystemVerilog Structure",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "A structure can contain elements of different data types which can be referenced as a whole or individually by their names. This is quite different from arrays where the elements are of the same data-type.",
                        "code": "// Normal arrays -> a collection of variables of same data type\n\tint array [10];         // all elements are of int type\n\tbit [7:0] mem [256];    // all elements are of bit type\n\t\n\t// Structures -> a collection of variables of different data types\n\tstruct {\n\t\tbyte    val1;\n\t\tint     val2;\n\t\tstring  val3;\n\t} struct_name;",
                        "lang": "verilog"
                    },
                    {
                        "title": "Syntax",
                        "content": "",
                        "code": "struct { \n\t\t[list of variables]\n\t} struct_name;",
                        "lang": "verilog"
                    },
                    {
                        "title": "Unpacked Structures",
                        "content": "A structure is unpacked by default and can be defined using the struct keyword and a list of member declarations can be provided within the curly brackets followed by the name of the structure.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Structure Example",
                        "content": "",
                        "code": "module tb;  \n  \t// Create a structure called \"st_fruit\"\n\t// which to store the fruit's name, count and expiry date in days.\n  \t// Note: this structure declaration can also be placed outside the module\n\tstruct {\n  \t\tstring fruit;\n  \t\tint    count;\n  \t\tbyte \t expiry;  \n\t} st_fruit;\n  \n  initial begin\n    // st_fruit is a structure variable, so let's initialize it\n    st_fruit = '{\"apple\", 4, 15};\n    \n    // Display the structure variable\n    $display (\"st_fruit = %p\", st_fruit);\n    \n    // Change fruit to pineapple, and expiry to 7 \n    st_fruit.fruit = \"pineapple\";\n    st_fruit.expiry = 7;\n    $display (\"st_fruit = %p\", st_fruit);\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nst_fruit = '{fruit:\"apple\", count:4, expiry:'hf}\nst_fruit = '{fruit:\"pineapple\", count:4, expiry:'h7}\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "What is the need to typedef a structure ?",
                        "content": "Only one variable was created in the example above, but if there's a need to create multiple structure variables with the same constituents, it'll be better to create a user defined data type of the structure by typedef. Then st_fruit will become a data-type which can then be used to create variables of that type.",
                        "code": "module tb;  \n  \t// Create a structure called \"st_fruit\"\n\t// which to store the fruit's name, count and expiry date in days.\n  \t// Note: this structure declaration can also be placed outside the module\n\ttypedef struct {\n  \t\tstring fruit;\n  \t\tint    count;\n  \t\tbyte \t expiry;  \n\t} st_fruit;\n  \n  initial begin\n    // st_fruit is a data type, so we need to declare a variable of this data type\n    st_fruit fruit1 = '{\"apple\", 4, 15};\n    st_fruit fruit2;\n    \n    // Display the structure variable\n    $display (\"fruit1 = %p fruit2 = %p\", fruit1, fruit2);\n    \n    // Assign one structure variable to another and print\n    // Note that contents of this variable is copied into the other\n   \tfruit2 = fruit1;\n    $display (\"fruit1 = %p fruit2 = %p\", fruit1, fruit2);\n    \n    // Change fruit1 to see if fruit2 is affected\n    fruit1.fruit = \"orange\";\n    $display (\"fruit1 = %p fruit2 = %p\", fruit1, fruit2);\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nfruit1 = '{fruit:\"apple\", count:4, expiry:'hf} fruit2 = '{fruit:\"\", count:0, expiry:'h0}\nfruit1 = '{fruit:\"apple\", count:4, expiry:'hf} fruit2 = '{fruit:\"apple\", count:4, expiry:'hf}\nfruit1 = '{fruit:\"orange\", count:4, expiry:'hf} fruit2 = '{fruit:\"apple\", count:4, expiry:'hf}\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Packed Structures",
                        "content": "A packed structure is a mechanism for subdividing a vector into fields that can be accessed as members and are packed together in memory without gaps. The first member in the structure is the most significant and subsequent members follow in decreasing order of significance.\n\nA structure is declared packed using the packed keyword, which otherwise by default is unpacked.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Example",
                        "content": "",
                        "code": "// Create a \"packed\" structure data type which is similar to creating \n// bit [7:0]  ctrl_reg;\n// ctrl_reg [0]   represents en\n// ctrl_reg [3:1] represents cfg\n// ctrl_reg [7:4] represents mode\ntypedef struct packed {\n  bit [3:0] mode;\n  bit [2:0] cfg;\n  bit       en;\n} st_ctrl;\n\nmodule tb;\n  st_ctrl    ctrl_reg;\n  \n  initial begin \n    // Initialize packed structure variable\n    ctrl_reg = '{4'ha, 3'h5, 1};\n    $display (\"ctrl_reg = %p\", ctrl_reg);\n    \n    // Change packed structure member to something else\n    ctrl_reg.mode = 4'h3;\n    $display (\"ctrl_reg = %p\", ctrl_reg);\n   \n    // Assign a packed value to the structure variable\n    ctrl_reg = 8'hfa;\n    $display (\"ctrl_reg = %p\", ctrl_reg);\n  end  \nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nctrl_reg = '{mode:'ha, cfg:'h5, en:'h1}\nctrl_reg = '{mode:'h3, cfg:'h5, en:'h1}\nctrl_reg = '{mode:'hf, cfg:'h5, en:'h0}\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Array of Structures",
                        "content": "An array (fixed, dynamic or associative) of structure can be formed as shown in the example below.",
                        "code": "// Define the structure\ntypedef struct {\n  int data;\n  string name;\n} MyStruct;\n\nmodule array_examples;\n\n  // 1. Fixed Array\n  MyStruct fixed_array[5];\n\n  // 2. Dynamic Array\n  MyStruct dynamic_array[];\n\n  // 3. Associative Array\n  MyStruct associative_array[int];\n\n  initial begin\n    $display(\"--- Fixed Array Example ---\");\n    // Populate the fixed array\n    for (int i = 0; i < 5; i++) begin\n      fixed_array[i].data = i * 10;\n      fixed_array[i].name = $sformatf(\"Fixed_%0d\", i);\n      $display(\"fixed_array[%0d]: data=%0d, name=%s\", i, fixed_array[i].data, fixed_array[i].name);\n    end\n\n    $display(\"\n--- Dynamic Array Example ---\");\n    // Initialize and populate the dynamic array\n    dynamic_array = new[3]; // Allocate space for 3 elements\n\n    dynamic_array[0].data = 100;\n    dynamic_array[0].name = \"Dynamic_A\";\n\n    dynamic_array[1].data = 200;\n    dynamic_array[1].name = \"Dynamic_B\";\n\n    dynamic_array[2].data = 300;\n    dynamic_array[2].name = \"Dynamic_C\";\n\n\n    for (int i = 0; i < dynamic_array.size(); i++) begin\n      $display(\"dynamic_array[%0d]: data=%0d, name=%s\", i, dynamic_array[i].data, dynamic_array[i].name);\n    end\n\n    $display(\"\n--- Associative Array Example ---\");\n    // Populate the associative array using keys\n    associative_array[10] = '{101, \"Assoc_X\"};\n    associative_array[25] = '{202, \"Assoc_Y\"};\n\tassociative_array[5]  = '{303, \"Assoc_Z\"}; // Keys don't need to be in order\n\n\n    // Iterating through associative array (keys are returned in sorted order)\n    $display(\"Iterating through associative_array:\");\n    foreach (associative_array[key]) begin\n      $display(\"associative_array[%0d]: data=%0d, name=%s\", key, associative_array[key].data, associative_array[key].name);\n    end\n  end\n\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "xcelium> run\n--- Fixed Array Example ---\nfixed_array[0]: data=0, name=Fixed_0\nfixed_array[1]: data=10, name=Fixed_1\nfixed_array[2]: data=20, name=Fixed_2\nfixed_array[3]: data=30, name=Fixed_3\nfixed_array[4]: data=40, name=Fixed_4\n\n--- Dynamic Array Example ---\ndynamic_array[0]: data=100, name=Dynamic_A\ndynamic_array[1]: data=200, name=Dynamic_B\ndynamic_array[2]: data=300, name=Dynamic_C\n\n--- Associative Array Example ---\nIterating through associative_array:\nassociative_array[5]: data=303, name=Assoc_Z\nassociative_array[10]: data=101, name=Assoc_X\nassociative_array[25]: data=202, name=Assoc_Y\nxmsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-9",
                "num": 9,
                "title": "SystemVerilog typedef and alias",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Typedef",
                        "content": "In complex testbenches some variable declarations might have a longer data-type specification or require to be used in multiple places in the testbench.\n\nIn such cases we can use a typedef to give a user-defined name to an existing data type. The new data-type can then be used throughout the code and hence avoids the need to edit in multiple places if required.",
                        "code": "// Normal declaration may turn out to be quite long\n\tunsigned shortint  \t\t\tmy_data;\n\tenum {RED, YELLOW, GREEN} \te_light;\n\tbit [7:0]  \t\t\t\t\tmy_byte;\n\t\n\t// Declare an alias for this long definition\n\ttypedef unsigned shortint \t\t\tu_shorti;\n\ttypedef enum {RED, YELLOW, GREEN} \te_light;\n\ttypedef bit [7:0]  \t\t\t\t\tubyte;\n\n\t// Use these new data-types to create variables\n\tu_shorti    my_data;\n\te_light     light1;\n\tubyte       my_byte;",
                        "lang": "verilog"
                    },
                    {
                        "title": "Syntax",
                        "content": "",
                        "code": "typedef data_type type_name [range];",
                        "lang": "verilog"
                    },
                    {
                        "title": "Example",
                        "content": "",
                        "code": "module tb;\n  typedef shortint unsigned u_shorti;\n  typedef enum {RED, YELLOW, GREEN} e_light;\n  typedef bit [7:0] ubyte;\n \n  initial begin\n    u_shorti \tdata = 32'hface_cafe;\n    e_light \tlight = GREEN;\n    ubyte \t\tcnt = 8'hFF;\n    \n    $display (\"light=%s data=0x%0h cnt=%0d\", light.name(), data, cnt);\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nlight=GREEN data=0xcafe cnt=255\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Alias",
                        "content": "In SystemVerilog, an alias is a named reference to a variable, signal, or instance. It provides a way to refer to a variable using a different name. Aliases can be useful in many situations, including reducing code complexity, enhancing readability, and improving simulation performance. It is also used to model a bi-directional short-circuit and can be used inside modules, interfaces and generate blocks.\n\nHere's an example of how to create an alias in SystemVerilog:\n\nIn this example, the signal data is assigned the value 8'hFF using the alias mydata. The advantage of using an alias is that it allows you to refer to the same signal using different names, which can make the code more readable and easier to understand.",
                        "code": "logic [7:0] data;\nalias mydata = data; // alias \"mydata\" for signal \"data\"\n\ninitial begin\n  mydata = 8'hFF; // assign the value to \"data\" using the alias \"mydata\"\nend",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-10",
                "num": 10,
                "title": "SystemVerilog Packed Arrays",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "There are two types of arrays in SystemVerilog - packed and unpacked arrays.\n\nA packed array is used to refer to dimensions declared before the variable name.\n\nA packed array is guaranteed to be represented as a contiguous set of bits. They can be made of only the single bit data types like bit, logic, and other recursively packed arrays.",
                        "code": "bit [3:0] \tdata; \t\t\t// Packed array or vector\n\tlogic \t\tqueue [9:0]; \t// Unpacked array",
                        "lang": "verilog"
                    },
                    {
                        "title": "Single Dimensional Packed Arrays",
                        "content": "A one-dimensional packed array is also called as a vector.",
                        "code": "module tb;\n\tbit [7:0] \tm_data; \t// A vector or 1D packed array\n\t\n\tinitial begin\n\t\t// 1. Assign a value to the vector\n\t\tm_data = 8'hA2; \n\t\t\n\t\t// 2. Iterate through each bit of the vector and print value\n\t\tfor (int i = 0; i < $size(m_data); i++) begin\n\t\t\t$display (\"m_data[%0d] = %b\", i, m_data[i]);\n\t\tend\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nm_data[0] = 0\nm_data[1] = 1\nm_data[2] = 0\nm_data[3] = 0\nm_data[4] = 0\nm_data[5] = 1\nm_data[6] = 0\nm_data[7] = 1\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Multidimensional Packed Arrays",
                        "content": "A multidimensional packed array is still a set of contiguous bits but are also segmented into smaller groups.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Example #1",
                        "content": "The code shown below declares a 2D packed array that occupies 32-bits or 4 bytes and iterates through the segments and prints its value.",
                        "code": "module tb;\n  bit [3:0][7:0] \tm_data; \t// A MDA, 4 bytes\n\t\n\tinitial begin\n\t\t// 1. Assign a value to the MDA\n\t\tm_data = 32'hface_cafe;\n      \n      $display (\"m_data = 0x%0h\", m_data);\n\t\t\n\t\t// 2. Iterate through each segment of the MDA and print value\n      for (int i = 0; i < $size(m_data); i++) begin\n        $display (\"m_data[%0d] = %b (0x%0h)\", i, m_data[i], m_data[i]);\n\t\tend\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nm_data = 0xfacecafe\nm_data[0] = 11111110 (0xfe)\nm_data[1] = 11001010 (0xca)\nm_data[2] = 11001110 (0xce)\nm_data[3] = 11111010 (0xfa)\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Example #2",
                        "content": "Let us see a 3D packed array now.",
                        "code": "module tb;\n  bit [2:0][3:0][7:0] \tm_data; \t// An MDA, 12 bytes\n\t\n\tinitial begin\n\t\t// 1. Assign a value to the MDA\n      m_data[0] = 32'hface_cafe;\n      m_data[1] = 32'h1234_5678;\n      m_data[2] = 32'hc0de_fade;\n      \n      // m_data gets a packed value\n      $display (\"m_data = 0x%0h\", m_data);\n\t\t\n\t\t// 2. Iterate through each segment of the MDA and print value\n      foreach (m_data[i]) begin\n        $display (\"m_data[%0d] = 0x%0h\", i, m_data[i]);\n        foreach (m_data[i][j]) begin\n          $display (\"m_data[%0d][%0d] = 0x%0h\", i, j, m_data[i][j]);\n        end\n      end\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nm_data = 0xc0defade12345678facecafe\nm_data[2] = 0xc0defade\nm_data[2][3] = 0xc0\nm_data[2][2] = 0xde\nm_data[2][1] = 0xfa\nm_data[2][0] = 0xde\nm_data[1] = 0x12345678\nm_data[1][3] = 0x12\nm_data[1][2] = 0x34\nm_data[1][1] = 0x56\nm_data[1][0] = 0x78\nm_data[0] = 0xfacecafe\nm_data[0][3] = 0xfa\nm_data[0][2] = 0xce\nm_data[0][1] = 0xca\nm_data[0][0] = 0xfe\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-11",
                "num": 11,
                "title": "SystemVerilog Array Manipulation",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "There are many built-in methods in SystemVerilog to help in array searching and ordering.\n\nArray manipulation methods simply iterate through the array elements and each element is used to evaluate the expression specified by the with clause. The iterator argument specifies a local variable that can be used within the with expression to refer to the current element in the iteration. If an argument is not provided, item is the name used by default.\n\nSpecifying an iterator argument without the with clause is illegal.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Array Locator Methods",
                        "content": "The with clause and expression is mandatory for some of these methods and for some others its optional.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Mandatory 'with' clause",
                        "content": "These methods are used to filter out certain elements from an existing array based on a given expression. All such elements that satisfy the given expression is put into an array and returned. Hence the with clause is mandatory for the following methods.",
                        "code": "module tb;\n  int array[9] = '{4, 7, 2, 5, 7, 1, 6, 3, 1};\n  int res[$];\n  \n  initial begin\n    res = array.find(x) with (x > 3);\n    $display (\"find(x)         : %p\", res);\n    \n    res = array.find_index with (item == 4);\n    $display (\"find_index      : res[%0d] = 4\", res[0]);\n    \n    res = array.find_first with (item < 5 & item >= 3);\n    $display (\"find_first      : %p\", res);\n    \n    res = array.find_first_index(x) with (x > 5);\n    $display (\"find_first_index: %p\", res);\n    \n    res = array.find_last with (item <= 7 & item > 3);\n    $display (\"find_last       : %p\", res);\n    \n    res = array.find_last_index(x) with (x < 3);\n    $display (\"find_last_index : %p\", res);\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nfind(x)         : '{4, 7, 5, 7, 6}\nfind_index      : res[0] = 4\nfind_first      : '{4}\nfind_first_index: '{1}\nfind_last       : '{6}\nfind_last_index : '{8}\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Optional 'with' clause",
                        "content": "",
                        "code": "module tb;\n  int array[9] = '{4, 7, 2, 5, 7, 1, 6, 3, 1};\n  int res[$];\n  \n  initial begin   \n    res = array.min();\n    $display (\"min          : %p\", res);\n    \n    res = array.max();\n    $display (\"max          : %p\", res);\n    \n    res = array.unique();\n    $display (\"unique       : %p\", res);\n    \n    res = array.unique(x) with (x < 3);\n    $display (\"unique       : %p\", res);\n    \n    res = array.unique_index;\n    $display (\"unique_index : %p\", res);\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nmin          : '{1}\nmax          : '{7}\nunique       : '{4, 7, 2, 5, 1, 6, 3}\nunique       : '{4, 2}\nunique_index : '{0, 1, 2, 3, 5, 6, 7}\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Array Ordering Methods",
                        "content": "These methods operate and alter the array directly.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Example",
                        "content": "",
                        "code": "module tb;\n  int array[9] = '{4, 7, 2, 5, 7, 1, 6, 3, 1};\n  \n  initial begin   \n    array.reverse();\n    $display (\"reverse  : %p\", array);\n    \n    array.sort();\n    $display (\"sort     : %p\", array);\n    \n    array.rsort();\n    $display (\"rsort    : %p\", array);\n    \n    for (int i = 0; i < 5; i++) begin\n    \tarray.shuffle();\n      $display (\"shuffle Iter:%0d  = %p\", i, array);\n    end\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nreverse  : '{1, 3, 6, 1, 7, 5, 2, 7, 4}\nsort     : '{1, 1, 2, 3, 4, 5, 6, 7, 7}\nrsort    : '{7, 7, 6, 5, 4, 3, 2, 1, 1}\nshuffle Iter:0  = '{6, 7, 1, 7, 3, 2, 1, 4, 5}\nshuffle Iter:1  = '{5, 1, 3, 4, 2, 7, 1, 7, 6}\nshuffle Iter:2  = '{3, 1, 7, 4, 6, 7, 1, 2, 5}\nshuffle Iter:3  = '{6, 4, 7, 3, 1, 7, 5, 2, 1}\nshuffle Iter:4  = '{3, 6, 2, 5, 4, 7, 7, 1, 1}\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Using array ordering on classes",
                        "content": "",
                        "code": "class Register;\n  string name;\n  rand bit [3:0] rank;\n  rand bit [3:0] pages;\n  \n  function new (string name);\n    this.name = name;\n  endfunction\n  \n  function void print();\n    $display(\"name=%s rank=%0d pages=%0d\", name, rank, pages);\n  endfunction\n  \nendclass\n\nmodule tb;\n  Register rt[4];\n  string name_arr[4] = '{\"alexa\", \"siri\", \"google home\", \"cortana\"};\n  \n  initial begin\n    $display (\"\n-------- Initial Values --------\");\n    foreach (rt[i]) begin\n      rt[i] = new (name_arr[i]);\n      rt[i].randomize();\n      rt[i].print();\n    end\n    \n    $display (\"\n--------- Sort by name ------------\");\n    \n    rt.sort(x) with (x.name);\n    foreach (rt[i]) rt[i].print();\n    \n    $display (\"\n--------- Sort by rank, pages -----------\");\n    \n    rt.sort(x) with ( {x.rank, x.pages});\n    foreach (rt[i]) rt[i].print();\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\n\n-------- Initial Values --------\nname=alexa rank=12 pages=13\nname=siri rank=6 pages=12\nname=google home rank=12 pages=13\nname=cortana rank=7 pages=11\n\n--------- Sort by name ------------\nname=alexa rank=12 pages=13\nname=cortana rank=7 pages=11\nname=google home rank=12 pages=13\nname=siri rank=6 pages=12\n\n--------- Sort by rank, pages -----------\nname=siri rank=6 pages=12\nname=cortana rank=7 pages=11\nname=alexa rank=12 pages=13\nname=google home rank=12 pages=13\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Array Reduction Methods",
                        "content": "",
                        "code": "module tb;\n  int array[4] = '{1, 2, 3, 4};\n  int res[$];\n  \n  initial begin\n    $display (\"sum     = %0d\", array.sum());    \n    $display (\"product = %0d\", array.product());    \n    $display (\"and     = 0x%0h\", array.and());\n    $display (\"or      = 0x%0h\", array.or());    \n    $display (\"xor     = 0x%0h\", array.xor());   \n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nsum     = 10\nproduct = 24\nand     = 0x0\nor      = 0x7\nxor     = 0x4\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-12",
                "num": 12,
                "title": "SystemVerilog Unpacked Arrays",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "An unpacked array is used to refer to dimensions declared after the variable name.\n\nUnpacked arrays may be fixed-size arrays, dynamic arrays, associative arrays or queues.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Single Dimensional Unpacked Array",
                        "content": "",
                        "code": "module tb;\n\tbyte \tstack [8]; \t\t// depth = 8, 1 byte wide variable\n\t\n\tinitial begin\n\t\t// Assign random values to each slot of the stack\n\t\tforeach (stack[i]) begin\n\t\t\tstack[i] = $random;\n\t\t\t$display (\"Assign 0x%0h to index %0d\", stack[i], i);\n\t\tend\n\t\t\n\t\t// Print contents of the stack\n\t\t$display (\"stack = %p\", stack);\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "Assign 0x24 to index 0\nAssign 0x81 to index 1\nAssign 0x9 to index 2\nAssign 0x63 to index 3\nAssign 0xd to index 4\nAssign 0x8d to index 5\nAssign 0x65 to index 6\nAssign 0x12 to index 7\nstack = '{'h24, 'h81, 'h9, 'h63, 'hd, 'h8d, 'h65, 'h12}",
                        "lang": "verilog"
                    },
                    {
                        "title": "Multidimensional Unpacked Array",
                        "content": "",
                        "code": "module tb;\n  byte \tstack [2][4]; \t\t// 2 rows, 4 cols\n\t\n\tinitial begin\n\t\t// Assign random values to each slot of the stack\n\t\tforeach (stack[i])\n          foreach (stack[i][j]) begin\n            stack[i][j] = $random;\n            $display (\"stack[%0d][%0d] = 0x%0h\", i, j, stack[i][j]);\n\t\t\tend\n\t\t\n\t\t// Print contents of the stack\n\t\t$display (\"stack = %p\", stack);\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nstack[0][0] = 0x24\nstack[0][1] = 0x81\nstack[0][2] = 0x9\nstack[0][3] = 0x63\nstack[1][0] = 0xd\nstack[1][1] = 0x8d\nstack[1][2] = 0x65\nstack[1][3] = 0x12\nstack = '{'{'h24, 'h81, 'h9, 'h63}, '{'hd, 'h8d, 'h65, 'h12}}\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Packed + Unpacked Array",
                        "content": "The example shown below illustrates a multidimensional packed + unpacked array.",
                        "code": "module tb;\n  bit [3:0][7:0] \tstack [2][4]; \t\t// 2 rows, 4 cols\n\t\n\tinitial begin\n\t\t// Assign random values to each slot of the stack\n\t\tforeach (stack[i])\n          foreach (stack[i][j]) begin\n            stack[i][j] = $random;\n            $display (\"stack[%0d][%0d] = 0x%0h\", i, j, stack[i][j]);\n\t\t\tend\n\t\t\n\t\t// Print contents of the stack\n\t\t$display (\"stack = %p\", stack);\n\t\t\n\t\t// Print content of a given index\n        $display(\"stack[0][0][2] = 0x%0h\", stack[0][0][2]);\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!\n\nIn a multidimensional declaration, the dimensions declared before the name vary more faster than the dimensions following the name.",
                        "code": "ncsim> run\nstack[0][0] = 0x12153524\nstack[0][1] = 0xc0895e81\nstack[0][2] = 0x8484d609\nstack[0][3] = 0xb1f05663\nstack[1][0] = 0x6b97b0d\nstack[1][1] = 0x46df998d\nstack[1][2] = 0xb2c28465\nstack[1][3] = 0x89375212\nstack = '{'{'h12153524, 'hc0895e81, 'h8484d609, 'hb1f05663}, '{'h6b97b0d, 'h46df998d, 'hb2c28465, 'h89375212}}\nstack[0][0][2] = 0x15\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "bit \t[1:4] \t\tm_var \t[1:5]\t\t\t// 1:4 varies faster than 1:5 \nbit \t\t\t\tm_var2 \t[1:5] [1:3]  \t// 1:3 varies faster than 1:5\nbit \t[1:3] [1:7] m_var3; \t\t\t\t// 1:7 varies faster than 1:3\n\nbit \t[1:3] [1:2] m_var4 [1:7] [0:2] \t\t// 1:2 varies most rapidly, followed by 1:3, then 0:2 and then 1:7",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-13",
                "num": 13,
                "title": "SystemVerilog Arrays",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "SystemVerilog offers much flexibility in building complicated data structures through the different types of arrays.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Static Arrays",
                        "content": "A static array is one whose size is known before compilation time. In the example shown below, a static array of 8-bit wide is declared, assigned some value and iterated over to print its value.\n\nStatic arrays are further categorized into packed and unpacked arrays.",
                        "code": "module tb;\n\tbit [7:0] \tm_data; \t// A vector or 1D packed array\n\t\n\tinitial begin\n\t\t// 1. Assign a value to the vector\n\t\tm_data = 8'hA2; \n\t\t\n\t\t// 2. Iterate through each bit of the vector and print value\n\t\tfor (int i = 0; i < $size(m_data); i++) begin\n\t\t\t$display (\"m_data[%0d] = %b\", i, m_data[i]);\n\t\tend\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click here to learn more about SystemVerilog Packed Arrays !\n\nUnpacked arrays may be fixed-size arrays, dynamic arrays, associative arrays or queues.\n\nClick here to learn more about SystemVerilog Unpacked Arrays !",
                        "code": "bit [2:0][7:0] \tm_data; \t\t\t// Packed\n\tbit [15:0] \t\tm_mem [10:0]; \t\t// Unpacked",
                        "lang": "verilog"
                    },
                    {
                        "title": "Dynamic Arrays",
                        "content": "A dynamic array is one whose size is not known during compilation, but instead is defined and expanded as needed during runtime. A dynamic array is easily recognized by its empty square brackets [ ].\n\nClick here to learn more about SystemVerilog Dynamic Arrays !",
                        "code": "int \t\tm_mem []; \t// Dynamic array, size unknown but it holds integer values",
                        "lang": "verilog"
                    },
                    {
                        "title": "Associative Arrays",
                        "content": "An associative array is one where the content is stored with a certain key. This is easily recognized by the presence of a data type inside its square brackets [ ]. The key is represented inside the square brackets.\n\nClick here to learn about SystemVerilog Associative Arrays !",
                        "code": "int \t\tm_data [int]; \t\t\t// Key is of type int, and data is also of type int\n\tint \t\tm_name [string]; \t\t// Key is of type string, and data is of type int\n\t\n\tm_name [\"Rachel\"] = 30;\n\tm_name [\"Orange\"] = 2;\n\t\n\tm_data [32'h123] = 3333;",
                        "lang": "verilog"
                    },
                    {
                        "title": "Queues",
                        "content": "A queue is a data type where data can be either pushed into the queue or popped from the queue. It is easily recognized by the $ symbol inside square brackets [ ].\n\nClick here to learn more about SystemVerilog Queues !",
                        "code": "int \tm_queue [$]; \t\t// Unbound queue, no size\n\t\n\t\n\tm_queue.push_back(23); \t\t// Push into the queue\n\t\n\tint data = m_queue.pop_front(); // Pop from the queue",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-14",
                "num": 14,
                "title": "SystemVerilog Queue",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "A SystemVerilog queue is a First In First Out scheme which can have a variable size to store elements of the same data type.\n\nIt is similar to a one-dimensional unpacked array that grows and shrinks automatically. They can also be manipulated by indexing, concatenation and slicing operators. Queues can be passed to tasks/functions as ref or non-ref arguments.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Types of Queues",
                        "content": "A bounded queue has a specific size and can hold a limited number of entries. Shown below is a bounded queue of depth N and is full with N items and cannot accept more.\n\n\n\nAn unbounded queue can have an unlimited number of entries. Shown below is an unbounded queue which has 5 items and can accept more.",
                        "code": "[data_type]  [name_of_queue] [$:N];\n  \nint \tbounded_queue [$:10]; \t// Depth 10",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "[data_type]  [name_of_queue] [$];\n\nint \tunbounded_queue [$]; \t// Unlimited entries",
                        "lang": "verilog"
                    },
                    {
                        "title": "SystemVerilog Queue Usage",
                        "content": "A queue is distinguished by its specification of the size using $ operator.",
                        "code": "string       name_list [$];        // A queue of string elements\n\tbit [3:0]    data [$];             // A queue of 4-bit elements\n    \n\tlogic [7:0]  elements [$:127];     // A bounded queue of 8-bits with maximum size of 128 slots\n    \n\tint  q1 [$] =  { 1, 2, 3, 4, 5 };  // Integer queue, initialize elements\n\tint  q2 [$];                       // Integer queue, empty\t\n\tint  tmp;                          // Temporary variable to store values\n\t\n\ttmp = q1 [0];                      // Get first item of q1 (index 0) and store in tmp\n\ttmp = q1 [$];                      // Get last item of q1 (index 4) and store in tmp\n\tq2  = q1;                          // Copy all elements in q1 into q2\n\tq1  = {};                          // Empty the queue (delete all items)\n\t\n\tq2[2] = 15;                        // Replace element at index 2 with 15\n\tq2.insert (2, 15);                 // Inserts value 15 to index# 2\n\tq2 = { q2, 22 };                   // Append 22 to q2\n\tq2 = { 99, q2 };                   // Put 99 as the first element of q2\n\tq2 = q2 [1:$];                     // Delete first item\n\tq2 = q2 [0:$-1];                   // Delete last item\n\tq2 = q2 [1:$-1];                   // Delete first and last item",
                        "lang": "verilog"
                    },
                    {
                        "title": "SystemVerilog Queue Example",
                        "content": "",
                        "code": "module tb;\n  \t// Create a queue that can store \"string\" values\n  \tstring   fruits[$] =  { \"orange\", \"apple\", \"kiwi\" };\n  \n\tinitial begin\n   \t\t// Iterate and access each queue element\n  \t\tforeach (fruits[i]) \n    \t\t$display (\"fruits[%0d] = %s\", i, fruits[i]);\n  \n  \t\t// Display elements in a queue\n  \t\t$display (\"fruits = %p\", fruits);\n      \n      \t// Delete all elements in the queue\n      \tfruits = {};\n      \t$display (\"After deletion, fruits = %p\", fruits);\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nfruits[0] = orange\nfruits[1] = apple\nfruits[2] = kiwi\nfruits = '{\"orange\", \"apple\", \"kiwi\"}\nAfter deletion, fruits = '{}\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "What are queue slice expressions ?",
                        "content": "A slice expression selects a subset of the existing variable. Queue elements can be selected using slice expressions as shown in the example below.\n\nSome simulators provide different results, hence using queue methods is recommended.",
                        "code": "module tb;\n  \t// Create a queue that can store \"string\" values\n  string   fruits[$] =  { \"orange\", \"apple\", \"lemon\", \"kiwi\" };\n  \n\tinitial begin\n   \t\t// Select a subset of the queue\n      \t$display (\"citrus fruits = %p\", fruits[1:2]);\n      \n      \t// Get elements from index 1 to end of queue\n      \t$display (\"fruits = %p\", fruits[1:$]);\n      \n      \t// Add element to the end of queue\n      \tfruits[$+1] = \"pineapple\";\n      \t$display (\"fruits = %p\", fruits);\n      \n      \t// Delete first element\n        fruits = fruits[1:$];\n      \t$display (\"Remove orange, fruits = %p\", fruits);\n      \t\n\tend  \nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "Compiler version J-2014.12-SP1-1; Runtime version J-2014.12-SP1-1;  May 15 16:21 2018\ncitrus fruits = '{\"apple\", \"lemon\"} \nfruits = '{\"apple\", \"lemon\", \"kiwi\"} \nfruits = '{\"orange\", \"apple\", \"lemon\", \"kiwi\", \"pineapple\"} \nRemove orange, fruits = '{\"apple\", \"lemon\", \"kiwi\", \"pineapple\"} \n           V C S   S i m u l a t i o n   R e p o r t",
                        "lang": "verilog"
                    },
                    {
                        "title": "SystemVerilog Queue Methods",
                        "content": "SystemVerilog Queue methods are several built-in methods in addition to array operators to operate on the queue and are listed in the table below.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "SystemVerilog Queue Methods Example",
                        "content": "",
                        "code": "module tb;\n\tstring fruits[$] = {\"apple\", \"pear\", \"mango\", \"banana\"};\n  \n\tinitial begin\n\t\t// size() - Gets size of the given queue\n\t\t$display (\"Number of fruits=%0d   fruits=%p\", fruits.size(), fruits);\n    \n\t\t// insert() - Insert an element to the given index\n\t\tfruits.insert (1, \"peach\");\n\t\t$display (\"Insert peach, size=%0d fruits=%p\", fruits.size(), fruits);\n    \n\t\t// delete() - Delete element at given index\n\t\tfruits.delete (3);\n\t\t$display (\"Delete mango, size=%0d fruits=%p\", fruits.size(), fruits);\n    \n\t\t// pop_front() - Pop out element at the front\n\t\t$display (\"Pop %s,    size=%0d fruits=%p\", fruits.pop_front(), fruits.size(), fruits);\n    \n\t\t// push_front() - Push a new element to front of the queue\n\t\tfruits.push_front(\"apricot\");\n\t\t$display (\"Push apricot, size=%0d fruits=%p\", fruits.size(), fruits);\n    \n\t\t// pop_back() - Pop out element from the back\n\t\t$display (\"Pop %s,   size=%0d fruits=%p\", fruits.pop_back(), fruits.size(), fruits);\n    \n\t\t// push_back() - Push element to the back\n\t\tfruits.push_back(\"plum\");\n\t\t$display (\"Push plum,    size=%0d fruits=%p\", fruits.size(), fruits);\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nNumber of fruits=4   fruits='{\"apple\", \"pear\", \"mango\", \"banana\"}\nInsert peach, size=5 fruits='{\"apple\", \"peach\", \"pear\", \"mango\", \"banana\"}\nDelete mango, size=4 fruits='{\"apple\", \"peach\", \"pear\", \"banana\"}\nPop apple,    size=3 fruits='{\"peach\", \"pear\", \"banana\"}\nPush apricot, size=4 fruits='{\"apricot\", \"peach\", \"pear\", \"banana\"}\nPop banana,   size=3 fruits='{\"apricot\", \"peach\", \"pear\"}\nPush plum,    size=4 fruits='{\"apricot\", \"peach\", \"pear\", \"plum\"}\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "How to create a queue of classes in SystemVerilog ?",
                        "content": "",
                        "code": "// Define a class with a single string member called \"name\"\nclass Fruit;\n  string name;\n  \n  function new (string name=\"Unknown\");\n   \tthis.name = name;\n  endfunction  \nendclass\n\nmodule tb;\n  // Create a queue that can hold values of data type \"Fruit\"\n  Fruit list [$];\n  \n  initial begin\n    // Create a new class object and call it \"Apple\"\n    // and push into the queue\n    Fruit f = new (\"Apple\");\n    list.push_back (f);\n    \n    // Create another class object and call it \"Banana\" and \n    // push into the queue\n    f = new (\"Banana\");\n    list.push_back (f);\n    \n    // Iterate through queue and access each class object\n    foreach (list[i])\n      $display (\"list[%0d] = %s\", i, list[i].name);\n    \n    // Simply print the whole queue, note that class handles are printed\n    // and not class object contents\n    $display (\"list = %p\", list);\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nlist[0] = Apple\nlist[1] = Banana\nlist = '{$unit_0x4ccdf83b::Fruit@2_1, $unit_0x4ccdf83b::Fruit@4_1}\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "How to create a queue of dynamic arrays in SystemVerilog ?",
                        "content": "",
                        "code": "// Declare a dynamic array to store strings as a datatype\ntypedef string str_da [];\n\nmodule tb;\n  // This is a queue of dynamic arrays\n  str_da list [$];\n \n  initial begin\n    // Initialize separate dynamic arrays with some values\n    str_da marvel = '{\"Spiderman\", \"Hulk\", \"Captain America\", \"Iron Man\"};\n    str_da dcWorld = '{\"Batman\", \"Superman\" };\n    \n    // Push the previously created dynamic arrays to queue\n    list.push_back (marvel);\n    list.push_back (dcWorld);\n    \n    // Iterate through the queue and access dynamic array elements\n    foreach (list[i])\n      foreach (list[i][j])\n        $display (\"list[%0d][%0d] = %s\", i, j, list[i][j]);\n    \n    // Simply print the queue\n    $display (\"list = %p\", list);\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nlist[0][0] = Spiderman\nlist[0][1] = Hulk\nlist[0][2] = Captain America\nlist[0][3] = Iron Man\nlist[1][0] = Batman\nlist[1][1] = Superman\nlist = '{'{\"Spiderman\", \"Hulk\", \"Captain America\", \"Iron Man\"}, '{\"Batman\", \"Superman\"}}\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-15",
                "num": 15,
                "title": "SystemVerilog Dynamic Array",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "A dynamic array is an unpacked array whose size can be set or changed at run time, and hence is quite different from a static array where the size is pre-determined during declaration of the array. The default size of a dynamic array is zero until it is set by the new[] constructor.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Syntax",
                        "content": "A dynamic array dimensions are specified by the empty square brackets [ ].\n\nThe new[] function is used to allocate a size for the array and initialize its elements if required.",
                        "code": "[data_type] [identifier_name]  [];\n\n\tbit [7:0] \tstack []; \t\t// A dynamic array of 8-bit vector\n\tstring \t\tnames []; \t\t// A dynamic array that can contain strings",
                        "lang": "verilog"
                    },
                    {
                        "title": "Dynamic Array Example",
                        "content": "",
                        "code": "module tb;\n\t// Create a dynamic array that can hold elements of type int\n\tint \tarray []; \t\t\t\n\t\n\tinitial begin\n\t\t// Create a size for the dynamic array -> size here is 5\n\t\t// so that it can hold 5 values\n\t\tarray = new [5]; \t\t\t\n      \n\t\t// Initialize the array with five values\n\t\tarray = '{31, 67, 10, 4, 99};\n      \n\t\t// Loop through the array and print their values\n\t\tforeach (array[i]) \n\t\t\t$display (\"array[%0d] = %0d\", i, array[i]);\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\narray[0] = 31\narray[1] = 67\narray[2] = 10\narray[3] = 4\narray[4] = 99\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Dynamic Array Methods",
                        "content": "",
                        "code": "module tb;\n\t// Create a dynamic array that can hold elements of type string\n\tstring \tfruits []; \t\t\t\n\t\n\tinitial begin\n\t\t// Create a size for the dynamic array -> size here is 5\n\t\t// so that it can hold 5 values\n      \tfruits = new [3]; \t\t\t\n      \n\t\t// Initialize the array with five values\n      \tfruits = '{\"apple\", \"orange\", \"mango\"};\n      \n      \t// Print size of the dynamic array\n\t\t$display (\"fruits.size() = %0d\", fruits.size());\n      \n\t\t// Empty the dynamic array by deleting all items\n\t\tfruits.delete();\n\t\t$display (\"fruits.size() = %0d\", fruits.size());\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nfruits.size() = 3\nfruits.size() = 0\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "How to add new items to a dynamic array ?",
                        "content": "Many times we may need to add new elements to an existing dynamic array without losing its original contents. Since the new[] operator is used to allocate a particular size for the array, we also have to copy the old array contents into the new one after creation.",
                        "code": "int array [];\n\tarray = new [10];\n\t\n\t// This creates one more slot in the array, while keeping old contents\n\tarray = new [array.size() + 1] (array);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Copying dynamic array example",
                        "content": "",
                        "code": "module tb;\n\t// Create two dynamic arrays of type int\n\tint array [];\n\tint id [];\n  \n\tinitial begin\n\t\t// Allocate 5 memory locations to \"array\" and initialize with values\n\t\tarray = new [5];\n\t\tarray = '{1, 2, 3, 4, 5};\n      \n\t\t// Point \"id\" to \"array\"\n\t\tid = array;\n      \n\t\t// Display contents of \"id\"\n\t\t$display (\"id = %p\", id);\n      \n\t\t// Grow size by 1 and copy existing elements to the new dyn.Array \"id\"\n\t\tid = new [id.size() + 1] (id);\n      \n\t\t// Assign value 6 to the newly added location [index 5]\n\t\tid [id.size() - 1] = 6;\n      \n\t\t// Display contents of new \"id\"\n\t\t$display (\"New id = %p\", id);\n      \n\t\t// Display size of both arrays\n\t\t$display (\"array.size() = %0d, id.size() = %0d\", array.size(), id.size());\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "run -all;\nncsim> run\nid = '{1, 2, 3, 4, 5}\nNew id = '{1, 2, 3, 4, 5, 6}\narray.size() = 5, id.size() = 6\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-16",
                "num": 16,
                "title": "SystemVerilog Associative Array",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "When size of a collection is unknown or the data space is sparse, an associative array is a better option. Associative arrays do not have any storage allocated until it is used, and the index expression is not restricted to integral expressions, but can be of any type.\n\nAn associative array implements a look-up table of the elements of its declared type. The data type to be used as an index serves as the lookup key and imposes an ordering.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Syntax",
                        "content": "",
                        "code": "// Value     Array_Name          [ key ];\n\tdata_type    array_identifier    [ index_type ];",
                        "lang": "verilog"
                    },
                    {
                        "title": "Initialization Example",
                        "content": "",
                        "code": "module tb;\n  \t\n\tint   \tarray1 [int]; \t\t\t// An integer array with integer index\n\tint   \tarray2 [string]; \t\t// An integer array with string index\n\tstring  array3 [string]; \t\t// A string array with string index\n  \n  \tinitial begin\n      \t// Initialize each dynamic array with some values\n    \tarray1 = '{ 1 : 22,\n\t            \t6 : 34 };\n\t            \n\t\tarray2 = '{ \"Ross\" : 100,\n\t            \t\"Joey\" : 60 };\n\t            \n\t\tarray3 = '{ \"Apples\" : \"Oranges\",\n\t            \t\"Pears\" : \"44\" };\n      \n      \t// Print each array\n      $display (\"array1 = %p\", array1);\n      $display (\"array2 = %p\", array2);\n      $display (\"array3 = %p\", array3);\n    end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\narray1 = '{1:22, 6:34}\narray2 = '{\"Joey\":60, \"Ross\":100}\narray3 = '{\"Apples\":\"Oranges\", \"Pears\":\"44\"}\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Associative Array Methods",
                        "content": "Associative arrays in SystemVerilog can have non-consecutive or arbitrary index values.",
                        "code": "module tb;\n  int aa_array [int];\n  \n  initial begin\n    int idx;\n    \n    // Initialized indices in a mixed order, not 1,2,5,8\n    aa_array[5] = 20;\n    aa_array[8] = 10;\n    aa_array[1] = 50;\n    aa_array[2] = 100;\n    \n    // Finds the smallest index whose value is greater than the given index\n    // Current index is 0, the next smallest value out of 1,2,5,8 is 1\n    aa_array.next(idx);\n    $display(\"aa_array[%0d]=%0d\", idx, aa_array[idx]);\n    \n    // Current index is 1, the next smallest value out of 2,5,8 is 2\n    aa_array.next(idx);\n    $display(\"aa_array[%0d]=%0d\", idx, aa_array[idx]);\n    \n    // Finds the largest index whose value is smaller than the given index\n    // Current index is 5, the next largest value out of 1,2 is 2\n    idx = 5;\n    aa_array.prev(idx);\n    $display(\"aa_array[%0d]=%0d\", idx, aa_array[idx]);\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "xcelium> run\naa_array[1]=50\naa_array[2]=100\naa_array[2]=100\nxmsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Associative Array Methods Example",
                        "content": "",
                        "code": "module tb;\n    int      fruits_l0 [string];\n \n    initial begin\n      fruits_l0 = '{ \"apple\"  : 4, \n                     \"orange\" : 10,\n                     \"plum\"   : 9,\n                     \"guava\"  : 1 };\n       \n      \n      // size() : Print the number of items in the given dynamic array\n      $display (\"fruits_l0.size() = %0d\", fruits_l0.size());\n      \n      \n      // num() : Another function to print number of items in given array\n      $display (\"fruits_l0.num() = %0d\", fruits_l0.num());\n      \n      \n      // exists() : Check if a particular key exists in this dynamic array\n      if (fruits_l0.exists (\"orange\"))\n        $display (\"Found %0d orange !\", fruits_l0[\"orange\"]);\n      \n      if (!fruits_l0.exists (\"apricots\"))\n        $display (\"Sorry, season for apricots is over ...\");\n      \n      // Note: String indices are taken in alphabetical order\n      // Correct order: apple, guava, orange, plum\n      // first() : Get the first element in the array\n      begin\n      \tstring f;\n        // This function returns true if it succeeded and first key is stored\n        // in the provided string \"f\"\n        if (fruits_l0.first (f))\n          $display (\"fruits_l0.first [%s] = %0d\", f, fruits_l0[f]);\n      end\n      \n      // last() : Get the last element in the array\n      begin\n        string f;\n        if (fruits_l0.last (f))\n          $display (\"fruits_l0.last [%s] = %0d\", f, fruits_l0[f]);\n      end\n      \n      // prev() : Get the previous element in the array\n      begin\n        string f = \"orange\";\n        if (fruits_l0.prev (f))\n          $display (\"fruits_l0.prev [%s] = %0d\", f, fruits_l0[f]);\n      end\n      \n      // next() : Get the next item in the array\n      begin\n        string f = \"orange\";\n        if (fruits_l0.next (f))\n          $display (\"fruits_l0.next [%s] = %0d\", f, fruits_l0[f]);\n      end\n    end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nfruits_l0.size() = 4\nfruits_l0.num() = 4\nFound 10 orange !\nSorry, season for apricots is over ...\nfruits_l0.first [apple] = 4\nfruits_l0.last [plum] = 9\nfruits_l0.prev [guava] = 1\nfruits_l0.next [plum] = 9\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Dynamic array of Associative arrays",
                        "content": "",
                        "code": "module tb;\n  // Create an associative array with key of type string and value of type int\n  // for each index in a dynamic array\n  int fruits [] [string];\n  \n  initial begin\n    // Create a dynamic array with size 2\n    fruits = new [2];\n    \n    // Initialize the associative array inside each dynamic array index\n    fruits [0] = '{ \"apple\" : 1, \"grape\" : 2 };\n    fruits [1] = '{ \"melon\" : 3, \"cherry\" : 4 };\n    \n    // Iterate through each index of dynamic array\n    foreach (fruits[i])\n      // Iterate through each key of the current index in dynamic array\n      foreach (fruits[i][fruit])\n        $display (\"fruits[%0d][%s] = %0d\", i, fruit, fruits[i][fruit]);\n    \n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nfruits[0][apple] = 1\nfruits[0][grape] = 2\nfruits[1][cherry] = 4\nfruits[1][melon] = 3\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Dynamic array within each index of an Associative array",
                        "content": "",
                        "code": "// Create a new typedef that represents a dynamic array\ntypedef int int_da [];\n \nmodule tb;\n  // Create an associative array where key is a string \n  // and value is a dynamic array\n  int_da fruits [string];\n \n  initial begin\n    // For key \"apple\", create a dynamic array that can hold 2 items \n    fruits [\"apple\"] = new [2];\n    \n    // Initialize the dynamic array with some values\n    fruits [\"apple\"] = '{ 4, 5};\n \n    // Iterate through each key, where key represented by str1\n    foreach (fruits[str1]) \n      // Iterate through each item inside the current dynamic array ie.fruits[str1]\n      foreach (fruits[str1][i])\n        $display (\"fruits[%s][%0d] = %0d\", str1, i, fruits[str1][i]);\n \n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nfruits[apple][0] = 4\nfruits[apple][1] = 5\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-17",
                "num": 17,
                "title": "SystemVerilog Loops",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "What are loops ?",
                        "content": "A loop is a piece of code that keeps executing over and over. A conditional statement is typically included in a loop so that it can terminate once the condition becomes true. If the loop runs forever, then the simulation will hang indefinitely.\n\nDifferent types of looping constructs in SystemVerilog are given in the table below.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "forever",
                        "content": "This is an infinite loop, just like while (1). Note that your simulation will hang unless you include a time delay inside the forever block to advance simulation time.\n\nNote that simulation would have continued indefinitely if $finish was not called.",
                        "code": "module tb;\n  \n  // This initial block has a forever loop which will \"run forever\"\n  // Hence this block will never finish in simulation\n  initial begin\n    forever begin\n      #5 $display (\"Hello World !\");\n    end\n  end\n \n  // Because the other initial block will run forever, our simulation will hang!\n  // To avoid that, we will explicity terminate simulation after 50ns using $finish\n  initial \n    #50 $finish;    \nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nHello World !\nHello World !\nHello World !\nHello World !\nHello World !\nHello World !\nHello World !\nHello World !\nHello World !\nSimulation complete via $finish(1) at time 50 NS + 0",
                        "lang": "verilog"
                    },
                    {
                        "title": "repeat",
                        "content": "Used to repeat statements in a block a certain number of times. The example shown below will display the message 5 times and continues with rest of the code.",
                        "code": "module tb;\n  \n  \t// This initial block will execute a repeat statement that will run 5 times and exit\n\tinitial begin\n      \n        // Repeat everything within begin end 5 times and exit \"repeat\" block\n\t\trepeat(5) begin\n\t\t\t$display (\"Hello World !\");\n\t\tend\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nHello World !\nHello World !\nHello World !\nHello World !\nHello World !\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "while",
                        "content": "You already know this if you know verilog/C. It'll repeat the block as long as the condition is true. Counter is initially zero and increments until it reaches 10.",
                        "code": "module tb;\n bit clk;\n  \n  always #10 clk = ~clk;\n  initial begin\n  \tbit [3:0] counter;\n \n    $display (\"Counter = %0d\", counter);      // Counter = 0\n  \twhile (counter < 10) begin\n    \t@(posedge clk);\n    \tcounter++;\n        $display (\"Counter = %0d\", counter);      // Counter increments\n  \tend\n  \t$display (\"Counter = %0d\", counter);      // Counter = 10\n    $finish;\nend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "ncsim> run\nCounter = 0\nCounter = 1\nCounter = 2\nCounter = 3\nCounter = 4\nCounter = 5\nCounter = 6\nCounter = 7\nCounter = 8\nCounter = 9\nCounter = 10\nCounter = 10\nSimulation complete via $finish(1) at time 190 NS + 0",
                        "lang": "verilog"
                    },
                    {
                        "title": "for",
                        "content": "Similar to verilog/C, this allows you to mention starting value, condition and incremental expression all on the same line.",
                        "code": "module tb;\n bit clk;\n  \n  always #10 clk = ~clk;\n  initial begin\n  \tbit [3:0] counter;\n \n    $display (\"Counter = %0d\", counter);      // Counter = 0\n  \tfor (counter = 2; counter < 14; counter = counter + 2) begin\n    \t@(posedge clk);\n    \t$display (\"Counter = %0d\", counter);      // Counter increments\n  \tend\n    $display (\"Counter = %0d\", counter);      // Counter = 14\n    $finish;\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "ncsim> run\nCounter = 0\nCounter = 2\nCounter = 4\nCounter = 6\nCounter = 8\nCounter = 10\nCounter = 12\nCounter = 14\nSimulation complete via $finish(1) at time 110 NS + 0",
                        "lang": "verilog"
                    },
                    {
                        "title": "do while",
                        "content": "This executes the code first and then checks for the condition to see if the code should be executed again.",
                        "code": "module tb;\n bit clk;\n  \n  always #10 clk = ~clk;\n  initial begin\n  \tbit [3:0] counter;\n \n    $display (\"Counter = %0d\", counter);      // Counter = 0\n\t\tdo begin \n\t\t\t@ (posedge clk);\n\t\t\tcounter ++;\n          $display (\"Counter = %0d\", counter);      // Counter increments\n        end while (counter < 5);\n    $display (\"Counter = %0d\", counter);      // Counter = 14\n    $finish;\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "ncsim> run\nCounter = 0\nCounter = 1\nCounter = 2\nCounter = 3\nCounter = 4\nCounter = 5\nCounter = 5\nSimulation complete via $finish(1) at time 90 NS + 0",
                        "lang": "verilog"
                    },
                    {
                        "title": "foreach",
                        "content": "This is best suited to loop through array variables, because you don't have to find the array size, set up a variable to start from 0 until array_size-1 and increment it on every iteration.",
                        "code": "module tb_top;\n   bit [7:0] array [8];   // Create a fixed size array\n\n   initial begin\n   \n      // Assign a value to each location in the array\n      foreach (array [index]) begin\n         array[index] = index;\n      end\n      \n      // Iterate through each location and print the value of current location\n      foreach (array [index]) begin\n         $display (\"array[%0d] = 0x%0d\", index, array[index]);\n      end\n   end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "ncsim> run\narray[0] = 0x0\narray[1] = 0x1\narray[2] = 0x2\narray[3] = 0x3\narray[4] = 0x4\narray[5] = 0x5\narray[6] = 0x6\narray[7] = 0x7\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-18",
                "num": 18,
                "title": "SystemVerilog for loop",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "A for loop in SystemVerilog repeats a given set of statements multiple times until the given expression is not satisfied. Like all other procedural blocks, the for loop requires multiple statements within it to be enclosed by begin and end keywords.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Syntax",
                        "content": "For loop controls execution of its statements using a three step approach:",
                        "code": "for ( [initialization]; <condition>; [modifier])\n\t\t// Single statement\n\t\t\n\tfor ( [initialization]; <condition>; [modifier]) begin\n\t\t// Multiple statements\n\tend",
                        "lang": "verilog"
                    },
                    {
                        "title": "Example #1 - Array Iteration",
                        "content": "SystemVerilog extends Verilog by introducing the ++ increment and -- decrement operators, and can be used to either pre-increment or post-increment a variable like in C.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Design Example",
                        "content": "A priority encoder is a combinational logic circuit that encodes the position of the highest-priority active input into a binary code. Unlike a regular encoder that assumes only one input is active at a time, a priority encoder can handle multiple simultaneous active inputs and selects the one with the highest priority.\n\nClick to try this example in a simulator!",
                        "code": "module priority_encoder #(parameter WIDTH = 8) (\n    input  logic [WIDTH-1:0] req,\n    output logic [$clog2(WIDTH)-1:0] grant,\n    output logic valid\n);\n\n    always_comb begin\n        grant = '0;\n        valid = 1'b0;\n        \n        // Process from LOW to HIGH priority, so higher index overwrites lower\n        for (int i = 0; i < WIDTH; i++) begin\n            if (req[i]) begin\n                grant = i;\n                valid = 1'b1;\n            end\n        end\n    end\n\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Testbench Example",
                        "content": "In this example, we will iterate through a string array and print out its contents. The array array is initialized with 5 different names of fruits.\n\nThe for loop initialization declares a local variable called i that represents index of any element in the array. The conditional expression checks that i is less than size of the array. The modifier increments the value of i so that every iteration of the for loop operates on a different index.",
                        "code": "module tb;\n\tstring array [5] = '{\"apple\", \"orange\", \"pear\", \"blueberry\", \"lemon\"};\n\t\n\tinitial begin\n\t\tfor (int i = 0; i < $size(array); i++)\n\t\t\t$display (\"array[%0d] = %s\", i, array[i]);\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "ncsim> run\narray[0] = apple\narray[1] = orange\narray[2] = pear\narray[3] = blueberry\narray[4] = lemon\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Example #2 - Multiple Initializations",
                        "content": "There can be multiple initializations done in the first part of a for loop. In the code shown below, variables i and j are both initialized as soon as the for loop is entered. To keep the example interesting, the index of each string pointed to by j is replaced by 0.",
                        "code": "module tb;\n\tstring array [5] = '{\"apple\", \"orange\", \"pear\", \"blueberry\", \"lemon\"};\n\t\n\tinitial begin\n      for (int i = 0, j = 2; i < $size(array); i++) begin\n\t\t\tarray[i][j] = \"0\";\n        $display (\"array[%0d] = %s, %0dth index replaced by 0\", i, array[i], j);\n\t\tend\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "ncsim> run\narray[0] = ap0le, 2th index replaced by 0\narray[1] = or0nge, 2th index replaced by 0\narray[2] = pe0r, 2th index replaced by 0\narray[3] = bl0eberry, 2th index replaced by 0\narray[4] = le0on, 2th index replaced by 0\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Example #3 - Adding multiple modifiers",
                        "content": "In the code shown below, j is decremented after each iteration of the for loop along with incrementing i.",
                        "code": "module tb;\n\tstring array [5] = '{\"apple\", \"orange\", \"pear\", \"blueberry\", \"lemon\"};\n\t\n\tinitial begin\n      for (int i = 0, j = array[i].len() - 1; i <  $size(array); i++, j--) begin\n\t\t\tarray[i][j] = \"0\";\n        $display (\"array[%0d] = %s, %0dth index replaced by 0\", i, array[i], j);\n\t\tend\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "ncsim> run\narray[0] = appl0, 4th index replaced by 0\narray[1] = ora0ge, 3th index replaced by 0\narray[2] = pe0r, 2th index replaced by 0\narray[3] = b0ueberry, 1th index replaced by 0\narray[4] = 0emon, 0th index replaced by 0\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-19",
                "num": 19,
                "title": "SystemVerilog foreach loop",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "SystemVerilog arrays are data structures that allow storage of many values in a single variable. A foreach loop is only used to iterate over such arrays and is the easiest and simplest way to do so.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Syntax",
                        "content": "The foreach loop iterates through each index starting from 0. If there are multiple statements within the foreach loop, they have to be enclosed with begin and end keywords like all other procedural blocks.",
                        "code": "foreach(<variable>[<iterator>])\n\t\t// Single statement\n\t\t\n\tforeach(<variable>[<iterator>]) begin\n\t\t// Multiple statements\n\tend",
                        "lang": "verilog"
                    },
                    {
                        "title": "Example #1: Single dimensional Arrays",
                        "content": "",
                        "code": "module tb;\n\tint array[5] = '{1, 2, 3, 4, 5};\n\tint sum;\n\t\n\tinitial begin\n\t\t// Here, \"i\" is the iterator and can be named as anything you like\n\t\t// Iterate through each element from index 0 to end using a foreach\n\t\t// loop.\n\t\tforeach (array[i])\n\t\t\t$display (\"array[%0d] = %0d\", i, array[i]);\n\t\t\n\t\t// Multiple statements in foreach loop requires begin end\n\t\t// Here, we are calculating the sum of all numbers in the array\n\t\t// And because there are 2 statements within foreach there should\n\t\t// be a begin-end\n\t\tforeach (array[l_index]) begin\n\t\t\tsum += array[l_index];\n\t\t\t$display (\"array[%0d] = %0d, sum = %0d\", l_index, array[l_index], sum);\n\t\tend\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!\n\nNote that foreach is just a shorter version to the following for loop:",
                        "code": "ncsim> run\narray[0] = 1\narray[1] = 2\narray[2] = 3\narray[3] = 4\narray[4] = 5\narray[0] = 1, sum = 1\narray[1] = 2, sum = 3\narray[2] = 3, sum = 6\narray[3] = 4, sum = 10\narray[4] = 5, sum = 15\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "for (int i = 0; i < $size(array); i++) begin\n\t\t// Statements inside the for loop\n\tend",
                        "lang": "verilog"
                    },
                    {
                        "title": "Example #2: Multidimensional Arrays",
                        "content": "",
                        "code": "module tb;\n  int md_array [5][2] = '{'{1,2}, '{3,4}, '{5,6}, '{7,8}, '{9,10}};\n\t\n\tinitial begin\n      // First iterate through the first dimension using \"i\"\n      foreach (md_array[i])\n        // For each element in first dimension \"i\", iterate through the\n        // second dimension using \"j\"\n        foreach (md_array[i][j])\n          $display(\"md_array[%0d][%0d] = %0d\", i, j, md_array[i][j]);      \n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!\n\nClick here to learn more about other loops in SystemVerilog !",
                        "code": "ncsim> run\nmd_array[0][0] = 1\nmd_array[0][1] = 2\nmd_array[1][0] = 3\nmd_array[1][1] = 4\nmd_array[2][0] = 5\nmd_array[2][1] = 6\nmd_array[3][0] = 7\nmd_array[3][1] = 8\nmd_array[4][0] = 9\nmd_array[4][1] = 10\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-20",
                "num": 20,
                "title": "SystemVerilog repeat",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "A given set of statements can be executed N number of times with a repeat construct.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Syntax",
                        "content": "",
                        "code": "repeat (<number>) \n\t\t// Single Statement\n\n\trepeat (<number>) begin\n\t\t// Multiple Statements\n\tend",
                        "lang": "verilog"
                    },
                    {
                        "title": "Example #1",
                        "content": "",
                        "code": "module tb;\n\tinitial begin\n\t\trepeat (5) begin\n\t\t\t$display (\"Repeat this statement\");\n\t\tend\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "A repeat loop can also be implemented using a for loop but is more verbose. If the variable i is not required to be referenced inside the loop, a repeat loop would be more suitable.",
                        "code": "ncsim> run\nRepeat this statement\nRepeat this statement\nRepeat this statement\nRepeat this statement\nRepeat this statement\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "In the code shown below, we have a repeat loop to wait for a given number of clock cycles.",
                        "code": "for (int i = 0; i < number; i++) begin\n\t\t// Code\n\tend",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "In this example, the clock period is 20 ns, and the first posedge of clock happens at 10 ns. Next 3 posedge of clock happens at 30ns, 50ns and 70ns after which the initial block ends. So, this repeat loop successfully waits until 4 posedge of clocks are over.",
                        "code": "module tb;\n\tbit clk;\n\talways #10 clk = ~clk;\n\t\n\tinitial begin\n\t\tbit [2:0] num = $random;\n\t\t\n\t\t$display (\"[%0t] Repeat loop is going to start with num = %0d\", $time, num);\n\t\trepeat (num) @(posedge clk);\n\t\t$display (\"[%0t] Repeat loop has finished\", $time);\n\t\t$finish;\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "ncsim> run\n[0] Repeat loop is going to start with num = 4\n[70] Repeat loop has finished\nSimulation complete via $finish(1) at time 70 NS + 0",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-21",
                "num": 21,
                "title": "SystemVerilog while and do-while loop",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "Both while and do while are looping constructs that execute the given set of statements as long as the given condition is true.\n\nA while loop first checks if the condition is true and then executes the statements if it is true. If the condition turns out to be false, the loop ends right there.\n\nA do while loop first executes the statements once, and then checks for the condition to be true. If the condition is true, the set of statements are executed until the condition turns out to be false. If the condition is false, the loop ends right there.\n\nSo the difference between the two is that a do while loop executes the set of statements atleast once.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Syntax",
                        "content": "",
                        "code": "while (<condition>) begin\n\t\t// Multiple statements\n\tend\n\t\n\tdo begin\n\t\t// Multiple statements\n\tend while (<condition>);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Example #1 - while loop",
                        "content": "",
                        "code": "module tb;\n\tinitial begin\n\t\tint cnt = 0;\n\t\twhile (cnt < 5) begin\n\t\t\t$display(\"cnt = %0d\", cnt);\n\t\t\tcnt++;\n\t\tend\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\ncnt = 0\ncnt = 1\ncnt = 2\ncnt = 3\ncnt = 4\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Example #2",
                        "content": "",
                        "code": "module tb;\n\tinitial begin\n\t\tint cnt;\n\t\t\n\t\twhile (cnt != 0) begin\n\t\t\t$display (\"cnt = %0d\", cnt);\n\t\t\tcnt++;\n\t\tend\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Example #3 - do while loop",
                        "content": "",
                        "code": "module tb;\n\tinitial begin\n\t\tint cnt = 0;\n\t\tdo begin\n\t\t\t$display(\"cnt = %0d\", cnt);\n\t\t\tcnt++;\n\t\tend while (cnt < 5);\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\ncnt = 0\ncnt = 1\ncnt = 2\ncnt = 3\ncnt = 4\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Example #3 - do while loop",
                        "content": "",
                        "code": "module tb;\n\tinitial begin\n\t\tint cnt = 0;\n\t\tdo begin\n\t\t\t$display(\"cnt = %0d\", cnt);\n\t\t\tcnt++;\n\t\tend while (cnt == 0);\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\ncnt = 0\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-22",
                "num": 22,
                "title": "SystemVerilog 'break' and 'continue'",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "break",
                        "content": "",
                        "code": "module tb;\n  \tinitial begin\n      \n      // This for loop increments i from 0 to 9 and exit\n      for (int i = 0 ; i < 10; i++) begin\n        $display (\"Iteration [%0d]\", i);\n        \n        // Let's create a condition such that the \n        // for loop exits when i becomes 7\n        if (i == 7) \n          break;\n      end\n    end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nIteration [0]\nIteration [1]\nIteration [2]\nIteration [3]\nIteration [4]\nIteration [5]\nIteration [6]\nIteration [7]\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "continue",
                        "content": "",
                        "code": "module tb;\n  \tinitial begin\n      \n      // This for loop increments i from 0 to 9 and exit\n      for (int i = 0 ; i < 10; i++) begin \n        \n        // Let's create a condition such that the \n        // for loop \n        if (i == 7) \n          continue;\n        \n        $display (\"Iteration [%0d]\", i);\n      end\n    end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nIteration [0]\nIteration [1]\nIteration [2]\nIteration [3]\nIteration [4]\nIteration [5]\nIteration [6]\nIteration [8]\nIteration [9]\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-23",
                "num": 23,
                "title": "SystemVerilog 'unique' and 'priority' if-else",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "The conditional if else statement is used to make a decision about whether a statement is executed.\n\nClick here to refresh if else if in Verilog !\n\nSystemVerilog introduced the following if else constructs for violation checks.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "unique-if, unique0-if",
                        "content": "unique-if evaluates conditions in any order and does the following :\n\nUnlike unique-if, unique0-if does not report a violation if none of the conditions match",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "No else block for unique-if",
                        "content": "",
                        "code": "module tb;\n\tint x = 4;\n  \n  \tinitial begin\n      \t// This if else if construct is declared to be \"unique\"\n\t\t// Error is not reported here because there is a \"else\"\n      \t// clause in the end which will be triggered when none of\n      \t// the conditions match\n    \tunique if (x == 3) \n      \t\t$display (\"x is %0d\", x);\n    \telse if (x == 5)\n      \t\t$display (\"x is %0d\", x);\n      \telse\n      \t\t$display (\"x is neither 3 nor 5\");      \n      \n      \t// When none of the conditions become true and there\n      \t// is no \"else\" clause, then an error is reported\n    \tunique if (x == 3) \n      \t\t$display (\"x is %0d\", x);\n    \telse if (x == 5)\n      \t\t$display (\"x is %0d\", x);\n  \tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nx is neither 3 nor 5\nncsim: *W,NOCOND: Unique if violation:  Every if clause was false.\n            File: ./testbench.sv, line = 18, pos = 13\n           Scope: tb\n            Time: 0 FS + 1\n\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Multiple matches in unique-if",
                        "content": "",
                        "code": "module tb;\n\tint x = 4;\n  \n  \tinitial begin\n      \n      \t// This if else if construct is declared to be \"unique\"\n\t\t// When multiple if blocks match, then error is reported\n      \tunique if (x == 4) \n          $display (\"1. x is %0d\", x);\n      \telse if (x == 4)\n          $display (\"2. x is %0d\", x);\n      \telse\n          $display (\"x is not 4\");\n  \tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\n1. x is 4\nncsim: *W,MCONDE: Unique if violation:  Multiple true if clauses at {line=8:pos=15 and line=10:pos=13}.\n            File: ./testbench.sv, line = 8, pos = 15\n           Scope: tb\n            Time: 0 FS + 1\n\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "priority-if",
                        "content": "priority-if evaluates all conditions in sequential order and a violation is reported when:",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "No else clause in priority-if",
                        "content": "",
                        "code": "module tb;\n\tint x = 4;\n  \n  \tinitial begin\n      \t// This if else if construct is declared to be \"unique\"\n\t\t// Error is not reported here because there is a \"else\"\n      \t// clause in the end which will be triggered when none of\n      \t// the conditions match\n    \tpriority if (x == 3) \n      \t\t$display (\"x is %0d\", x);\n    \telse if (x == 5)\n      \t\t$display (\"x is %0d\", x);\n      \telse\n      \t\t$display (\"x is neither 3 nor 5\");      \n      \n      \t// When none of the conditions become true and there\n      \t// is no \"else\" clause, then an error is reported\n    \tpriority if (x == 3) \n      \t\t$display (\"x is %0d\", x);\n    \telse if (x == 5)\n      \t\t$display (\"x is %0d\", x);\n  \tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nx is neither 3 nor 5\nncsim: *W,NOCOND: Priority if violation:  Every if clause was false.\n            File: ./testbench.sv, line = 18, pos = 15\n           Scope: tb\n            Time: 0 FS + 1\n\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Exit after first match in priority-if",
                        "content": "",
                        "code": "module tb;\n\tint x = 4;\n  \n  \tinitial begin    \n      \t// Exits if-else block once the first match is found\n      \tpriority if (x == 4)\n      \t\t$display (\"x is %0d\", x);\n      else if (x != 5)\n      \t\t$display (\"x is %0d\", x);\n  \tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nx is 4\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-24",
                "num": 24,
                "title": "SystemVerilog 'unique' and 'priority' case",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "A SystemVerilog case statement checks whether an expression matches one of a number of expressions and branches appropriately. The behavior is the same as in Verilog.\n\nClick here to learn about Verilog case statements !",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "unique,unique0 case",
                        "content": "All case statements can be qualified by unique or unique0 keywords to perform violation checks like we saw in if-else-if construct.\n\nunique and unique0 ensure that there is no overlapping case items and hence can be evaluated in parallel. If there are overlapping case items, then a violation is reported.\n\n\n\nunique0 does not report a violation if no items match the expression",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "unique : No items match for given expression",
                        "content": "",
                        "code": "module tb;\n  bit [1:0] \tabc;\n  \n  initial begin\n    abc = 1;\n    \n    // None of the case items match the value in \"abc\"\n    // A violation is reported here\n    unique case (abc)\n      0 : $display (\"Found to be 0\");\n      2 : $display (\"Found to be 2\");\n    endcase\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nncsim: *W,NOCOND: Unique case violation:  Every case item expression was false.\n            File: ./testbench.sv, line = 9, pos = 14\n           Scope: tb\n            Time: 0 FS + 1\n\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "unique : More than one case item matches",
                        "content": "",
                        "code": "module tb;\n  bit [1:0] \tabc;\n  \n  initial begin\n    abc = 0;\n    \n    // Multiple case items match the value in \"abc\"\n    // A violation is reported here\n    unique case (abc)\n      0 : $display (\"Found to be 0\");\n      0 : $display (\"Again found to be 0\");\n      2 : $display (\"Found to be 2\");\n    endcase\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nFound to be 0\nncsim: *W,MCONDE: Unique case violation:  Multiple matching case item expressions at {line=10:pos=6 and line=11:pos=6}.\n            File: ./testbench.sv, line = 9, pos = 14\n           Scope: tb\n            Time: 0 FS + 1\n\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "priority case",
                        "content": "",
                        "code": "module tb;\n  bit [1:0] \tabc;\n  \n  initial begin\n    abc = 0;\n    \n    // First match is executed\n    priority case (abc)\n      0 : $display (\"Found to be 0\");\n      0 : $display (\"Again found to be 0\");\n      2 : $display (\"Found to be 2\");\n    endcase\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nFound to be 0\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-25",
                "num": 25,
                "title": "SystemVerilog always_comb, always_ff",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "Verilog’s general-purpose always block can model many hardware types, algorithmic behavior - like implicit state machines spanning multiple cycles, and are also used in testbenches for tasks such as clock generation and repeated verification processes.\n\nClick here to read more on Verilog always block !",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Why do we need a special always block ?",
                        "content": "Synthesis compilers cannot simply execute its statements - they must also determine whether the block represents combinational, latch, or sequential logic by analyzing its statements and event controls. Take a look at the example below where RTL coding styles go for a toss with combinational and sequential elements described within the same always block.\n\nThe syntax and semantics are correct and hence there are no compiler or run time errors in simulation.",
                        "code": "module my_design (\n    input  logic clk,\n    input  logic reset_n, // Active-low reset\n    input  logic d1, \n    input  logic d2,\n    output logic  q\n);\n\n    logic temp;\n\n    always @(posedge clk) begin\n      if (!reset_n)\n        q <= 0;\n      else begin\n        // Blocking assignment (combinational style) mixed inside sequential block\n        temp = d1 & d2;     \n        q <= temp | (q << 1);  \n    \n        // Incrementing q again creates ambiguity in synthesis\n        q = q + 1;    \n      end\n    end\n  \nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "However synthesis tools report errors and warnings.",
                        "code": "xcelium> run\nxmsim: *W,RNQUIE: Simulation is complete.\nxcelium> exit",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "SystemVerilog addresses this by adding hardware-specific procedural blocks, making intent explicit and enabling tools like simulators, synthesizers, and checkers to work more accurately and consistently.\n\nSystemVerilog introduces three specialized procedural blocks - always_comb, always_latch, and always_ff - to eliminate the ambiguity of Verilog’s general-purpose always block when modeling hardware.",
                        "code": "# Siemens Precision\n#-------------------\n# Info: [44522]: Root Module my_design: Pre-processing...\n# Error: [46778]: \"/home/runner/design.sv\", line 21: Blocking assignment on a non-blocking signal(q). Skipping compilation of this module. Continuing ...\n# Warning: [45383]: Module my_design: This module cannot be compiled because it contains non-RTL constructs.\n# Info: [44536]: No modules were compiled in this run of RTLC, please check the logs for blackboxes or non-rtl constructs in the design.\n# Info: [44513]: Overall running time for compilation: 1.0 secs.\n# Error: [46259]: Design compilation failed, unsupported or non-rtl constructs detected in the following modules :\n# Info: [40000]: my_design\n# Info: [40000]: Please check the log for details pertaining to unsupported or non-rtl construct(s)\n# Error: [685]: Unable to elaborate design work.my_design in verilog.\n\n# Vivado\n#--------\n[Synth 8-6157] synthesizing module 'my_design' \n[Synth 8-6090] variable 'q' is written by both blocking and non-blocking assignments, entire logic could be removed",
                        "lang": "verilog"
                    },
                    {
                        "title": "always_comb",
                        "content": "The always_comb procedural block is used to indicate the intent to model combinational logic and you don’t have to write a sensitivity list yourself. The tool figures it out automatically by looking at all the signals the block reads (except temporary variables used only inside the block or functions).\n\nIn Verilog, always @* only includes signals directly read in the block, not those accessed inside called functions. Therefore, all signals used within a function must be passed explicitly as inputs and declared as formal arguments. While not a synthesis restriction, this limitation means that any changes to a function’s signal usage require updates both in its definition and at every call site, adding extra coding and maintenance effort.",
                        "code": "module alu_4_bit (\n  input  logic  [3:0] a,\n  input  logic  [3:0] b,\n  input  logic  [1:0] op_code,\n  output logic  [3:0] result\n);\n\n  // This is a combinational always block\n  always_comb begin\n    case (op_code)\n      2'b00: begin\n        result = a + b;  // Addition\n      end\n      2'b01: begin\n        result = a - b;  // Subtraction\n      end\n      2'b10: begin\n        result = a & b;  // Bitwise AND\n      end\n      2'b11: begin\n        result = a | b;  // Bitwise OR\n      end\n    endcase\n  end\n\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "SystemVerilog’s always_comb removes the @* limitation by making the block sensitive to signals used both directly and within called functions.",
                        "code": "function logic func_and;\n  input logic a, b;\n  begin\n    func_and = a & b;  // depends on both a and b\n  end\nendfunction\n\nlogic x, y, z;\n\nalways @* begin  // @* may miss x and y\n  z = func_and(x, y);  \nend",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Moreover, variables on the left-hand side cannot be driven by any other procedural block. This rule prevents shared variable usage that would break the intended combinational behavior.",
                        "code": "always_comb begin      // infers x and y\n  z = func_and(x, y);\nend",
                        "lang": "verilog"
                    },
                    {
                        "title": "always_latch",
                        "content": "The always_latch procedural block is used when the intent is to model latch-based logic. It follows the same basic rules as always_comb, including how the sensitivity list is inferred. Just like with always_comb, variables assigned inside an always_latch block cannot be driven by any other procedural block. In addition, always_latch executes once at time zero to make sure the latch outputs are consistent with the inputs at the very start of simulation.\n\nWhat sets always_latch apart from always_comb is that software tools recognize the intent to model storage elements (latches) rather than pure combinational logic. This allows tools to apply different checks. For example, in latch-based logic, it is acceptable for outputs not to be assigned in every possible condition. If the same code were written with always_comb, a missing else branch would generate a warning or error, because combinational logic requires all outputs to be defined for every input condition.",
                        "code": "module data_selector_with_latch (\n    input  wire a_in,\n    input  wire b_in,\n    input  wire sel,\n    input  wire enable,\n    output reg  data_out\n);\n\n    // This is the combinational part of the logic, a 2-to-1 mux\n    wire mux_out;\n    assign mux_out = sel ? a_in : b_in;\n\n    // This is the sequential part (the latch) that will hold the value\n    always_latch begin\n        if (enable) begin\n            data_out = mux_out;\n        end      \n    end\n\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "always_ff",
                        "content": "The always_ff procedural block is used to model synthesizable sequential logic, such as flip-flops. Unlike always_comb or always_latch, it requires an explicit sensitivity list. This lets the designer specify synchronous or asynchronous set/reset behavior, depending on what signals are included. By clearly stating that the block models sequential logic, always_ff removes the need for tools to guess the designer’s intent and allows them to check whether the code is valid for sequential logic.\n\nTo ensure consistency with synthesis, always_ff enforces stricter rules. Every signal in the sensitivity list must use posedge or negedge, and event controls are only allowed at the start of the block. These restrictions prevent mismatches between simulation and synthesis results. As with always_comb and always_latch, software tools may perform optional semantic checks and issue warnings if the block’s contents do not follow proper sequential logic practices.",
                        "code": "module sync_counter_3bit (\n    input  wire clk,\n    input  wire reset_n, // Active-low reset\n    output reg  [2:0] count\n);\n\n    // This is the sequential always block, triggered on a clock edge\n    always_ff @(posedge clk or negedge reset_n) begin\n        if (!reset_n) begin\n            // Asynchronous reset: sets the count to 0 when reset_n is low\n            count <= 3'b000;\n        end else begin\n            // On the positive edge of the clock, increment the count\n            count <= count + 1'b1;\n        end\n    end\n\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-26",
                "num": 26,
                "title": "SystemVerilog Class",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "A class is the foundation of Object-Oriented Programming (OOP) in SystemVerilog. Instead of scattering related signals and the functions that act on them across your testbench, a class lets you group them into a single, reusable unit. This article walks through class basics — declaring a class, building a constructor, and creating objects — using a simple packet example you'll recognize from real verification environments.\n\n8 min read | Intermediate Level",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "What Is a Class?",
                        "content": "class is a user-defined data type — an OOP construct — used to encapsulate properties (data) and methods (tasks/functions) that operate on that data. Think of a class as a blueprint: it describes what an object looks like and what it can do, but it isn't usable on its own until you create an actual object from it.\n\nAs the diagram shows, myPacket is the blueprint. Every time you call new(), SystemVerilog allocates a fresh, independent object — pkt0 and pkt1 each get their own copy of header, encode, mode, data, and stop. The method display(), however, is defined once and shared by every object.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Syntax",
                        "content": "Basic Form:\n\nParameters:\n\nVariations:",
                        "code": "class class_name;\n  // property declarations\n  // method declarations (functions/tasks)\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Here's a complete class example:",
                        "code": "class myClass;\n  int data;\n  function new(int data = 0);\n    this.data = data;\n  endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "A few key things to note in the example above:\n\nA class declaration by itself does not create any storage or consume any memory. Memory is only allocated when you call new() to construct an object.\n\nAlmost every reusable testbench component — transactions, drivers, monitors, scoreboards — is written as a SystemVerilog class. The UVM library itself is essentially a large set of base classes (uvm_component, uvm_sequence_item, and so on) that verification engineers extend to build their own environments.",
                        "code": "class myPacket;\n\tbit [2:0]  header;\n\tbit        encode;\n\tbit [2:0]  mode;\n\tbit [7:0]  data;\n\tbit        stop;\n\n\tfunction new (bit [2:0] header = 3'h1, bit [2:0] mode = 5);\n\t\tthis.header = header;\n\t\tthis.encode = 0;\n\t\tthis.mode   = mode;\n\t\tthis.stop   = 1;\n\tendfunction\n\n\tfunction display ();\n\t\t$display (\"Header = 0x%0h, Encode = %0b, Mode = 0x%0h, Stop = %0b\",\n\t\t           this.header, this.encode, this.mode, this.stop);\n\tendfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "How Do I Access Properties and Methods?",
                        "content": "To use a class, you create an object of it, which acts as a handle to its properties and methods. Object handles are declared just like any other variable, but they don't point to real storage until new() is called.",
                        "code": "module tb_top;\n\tmyPacket pkt0, pkt1;\n\n\tinitial begin\n\t\tpkt0 = new (3'h2, 3'h3);\n\t\tpkt0.display ();\n\n\t\tpkt1 = new ();\n\t\tpkt1.display ();\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Notice that pkt0 and pkt1 hold completely independent data. Changing pkt0.header later has no effect on pkt1.header — each call to new() creates a distinct copy of the class's properties.\n\nQ: If you declare myPacket pkt0; but never call pkt0 = new();, what happens when you try pkt0.display();?\n\npkt0 holds the default value null until it is constructed. Calling a method on a null handle causes a runtime error (commonly reported as a null object access / segmentation fault by the simulator), because there's no actual object in memory to operate on.",
                        "code": "Header = 0x2, Encode = 0, Mode = 0x3, Stop = 1\nHeader = 0x1, Encode = 0, Mode = 0x5, Stop = 1",
                        "lang": "verilog"
                    },
                    {
                        "title": "How Do I Create an Array of Class Objects?",
                        "content": "An array of class objects can be created in a way similar to how you create an array of any other data type, such as int. Each element of the array is its own object handle and must be constructed individually.\n\nSince each myPacket object had no arguments passed to its constructor new(), default values are applied for every element.",
                        "code": "module tb_top;\n\tmyPacket pkt0 [3];\n\n\tinitial begin\n    \tfor(int i = 0; i < $size (pkt0); i++) begin\n   \t   \t\tpkt0[i] = new ();\n       \t\tpkt0[i].display ();\n   \t\tend\n   \tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Declaring myPacket pkt0 [3]; only reserves three handles — it does not allocate three objects. Forgetting to call new() inside the loop is a common mistake that leaves every handle pointing to null.",
                        "code": "Header = 0x1, Encode = 0, Mode = 0x5, Stop = 1\nHeader = 0x1, Encode = 0, Mode = 0x5, Stop = 1\nHeader = 0x1, Encode = 0, Mode = 0x5, Stop = 1",
                        "lang": "verilog"
                    },
                    {
                        "title": "Common Mistakes",
                        "content": "Mistake #1: Forgetting to call new()\n\nWrong:\n\nRight:",
                        "code": "myPacket pkt0;\npkt0.display ();",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Why? Declaring a handle only creates a reference variable; it does not build the object. You must explicitly call the constructor before using any property or method.\n\nMistake #2: Mixing up the order of positional constructor arguments\n\nWrong: Calling new(3'h3, 3'h2) when you meant header = 3'h2 and mode = 3'h3. Right: Pass arguments in the same order they're declared in function new(), or check the constructor signature before calling it.\n\nWhy? SystemVerilog matches positional arguments by order, not by name. Swapping two arguments of the same type compiles fine but silently assigns the wrong value to each property.\n\nMistake #3: Confusing constructor arguments with class properties of the same name\n\nWrong: Writing header = header; inside function new(bit [2:0] header) and expecting it to assign the class property. Right: Use this.header = header; to explicitly target the class property.\n\nWhy? Inside the constructor, the local argument header shadows the class property of the same name. The this keyword resolves the ambiguity.",
                        "code": "myPacket pkt0;\npkt0 = new ();\npkt0.display ();",
                        "lang": "verilog"
                    },
                    {
                        "title": "Practice Exercise",
                        "content": "Write a new class called myConfig with two properties: addr_width (an 8-bit value) and data_width (an 8-bit value). Give the constructor default values of 8 for addr_width and 32 for data_width. Add a display() method that prints both values. Then, in a module, create two objects: one using the defaults, and one that overrides both values to 16 and 64.\n\nFollow the same pattern used in myPacket: declare the properties, write function new() with default argument values, use this to assign them, and write display() using $display.\n\nJust like pkt0 and pkt1 earlier in this article, cfg0 and cfg1 are independent objects of the same class — each holds its own copy of addr_width and data_width.",
                        "code": "class myConfig;\n    bit [7:0] addr_width;\n    bit [7:0] data_width;\n\n    function new (bit [7:0] addr_width = 8, bit [7:0] data_width = 32);\n        this.addr_width = addr_width;\n        this.data_width = data_width;\n    endfunction\n\n    function display ();\n        $display (\"addr_width = %0d, data_width = %0d\", addr_width, data_width);\n    endfunction\nendclass\n\nmodule tb_top;\n    myConfig cfg0, cfg1;\n\n    initial begin\n        cfg0 = new ();\n        cfg0.display ();\n\n        cfg1 = new (16, 64);\n        cfg1.display ();\n    end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Summary",
                        "content": "In this tutorial, you learned:",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-27",
                "num": 27,
                "title": "SystemVerilog Class Handle",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "A class variable such as pkt is only a name by which an object is known — it can hold the handle to an object of a class, but until it's assigned something, it is always null. This article looks closely at the difference between a handle and the object it points to, what happens when two handles point to the same object, and how to build arrays of objects using fixed, dynamic, and associative arrays.\n\n7 min read | Intermediate Level",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "What Is a Class Handle?",
                        "content": "When you declare a variable of a class type, SystemVerilog does not create an object — it only creates a handle, a reference that can later point to an object. Until that handle is assigned the result of a new() call, it points to nothing, and its value is null.",
                        "code": "// Create a new class with a single member called\n// count that stores integer values\nclass Packet;\n\tint count;\nendclass\n\nmodule tb;\n  \t// Create a \"handle\" for the class Packet that can point to an\n  \t// object of the class type Packet\n  \t// Note: This \"handle\" now points to NULL\n\tPacket pkt;\n  \n  \tinitial begin\n      if (pkt == null)\n        $display (\"Packet handle 'pkt' is null\");\n  \n      // Display the class member using the \"handle\"\n      // Expect a run-time error because pkt is not an object\n      // yet, and is still pointing to NULL. So pkt is not\n      // aware that it should hold a member\n      $display (\"count = %0d\", pkt.count);\n  \tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!\n\nAccessing a property or method through a handle that is still null is one of the most common simulation errors in SystemVerilog — reported as a null pointer dereference (or \"null object access\"). The fix is always the same: make sure new() has been called before the handle is used.\n\nnull is a keyword, not a string. Comparing a handle to the literal text \"null\" is a type mismatch and will not compile — always compare with pkt == null.",
                        "code": "ncsim> run\nPacket handle 'pkt' is null\ncount = ncsim: *E,TRNULLID: NULL pointer dereference.\n          File: ./testbench.sv, line = 18, pos = 33\n         Scope: tb\n          Time: 0 FS + 0\n\n./testbench.sv:18       $display (\"count = %0d\", pkt.count);\nncsim> exit",
                        "lang": "verilog"
                    },
                    {
                        "title": "What Is a Class Object?",
                        "content": "An instance of a class is created only when its new() function is invoked. To reference that object again later, you assign its handle to a variable of the matching class type.",
                        "code": "// Create a new class with a single member called\n// count that stores integer values\nclass Packet;\n\tint count;\nendclass\n\nmodule tb;\n  \t// Create a \"handle\" for the class Packet that can point to an\n  \t// object of the class type Packet\n  \t// Note: This \"handle\" now points to NULL\n\tPacket pkt;\n  \n  \tinitial begin\n      if (pkt == null)\n        $display (\"Packet handle 'pkt' is null\");\n  \n      // Call the new() function of this class\n      pkt = new();\n  \n      if (pkt == null)\n        $display (\"What's wrong, pkt is still null ?\");\n      else\n        $display (\"Packet handle 'pkt' is now pointing to an object, and not NULL\");\n  \n      // Display the class member using the \"handle\"\n      $display (\"count = %0d\", pkt.count);\n  \tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!\n\nNotice that count prints as 0 even though it was never explicitly assigned. SystemVerilog initializes integer-type class properties to their default value (0 for int) at the moment the object is constructed, the same way module-level variables default to a known value.\n\nQ: Why does the first $display in this example succeed, while the equivalent line in the previous example caused a null pointer dereference?\n\nThe first $display in both examples only checks pkt == null, which is comparing the handle itself — that's always safe, even on a null handle. The error only happens when you try to access a member through the handle, like pkt.count, before new() has been called. In this second example, pkt = new() runs first, so by the time pkt.count is accessed, the object already exists.",
                        "code": "ncsim> run\nPacket handle 'pkt' is null\nPacket handle 'pkt' is now pointing to an object, and not NULL\ncount = 0\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "What Happens When Two Handles Point to the Same Object?",
                        "content": "If you assign one handle to another, the second handle does not get its own copy of the object — it simply starts pointing to the same memory as the first.",
                        "code": "// Create a new class with a single member called\n// count that stores integer values\nclass Packet;\n\tint count;\nendclass\n\nmodule tb;\n  \t// Create two \"handles\" for the class Packet\n  \t// Note: These \"handles\" now point to NULL\n\tPacket pkt, pkt2;\n  \n  \tinitial begin\n\n  \n      // Call the new() function of this class and\n      // assign the member some value\n      pkt = new();\n      pkt.count = 16'habcd;\n  \n      // Display the class member using the \"pkt\" handle\n      $display (\"[pkt] count = 0x%0h\", pkt.count);\n  \n      // Make pkt2 handle to point to pkt and print member variable\n      pkt2 = pkt;\n      $display (\"[pkt2] count = 0x%0h\", pkt2.count);\n  \tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!\n\nNow pkt and pkt2 both point to the same instance of Packet. This is because pkt2 = pkt did not create a new object — it only copied the handle, so both names now refer to the same memory. If you changed pkt2.count after this point, reading pkt.count would show the new value too, since there's only one object behind both names.\n\nThis handle-copy behavior is exactly why SystemVerilog provides a separate copy() convention (often hand-written, or via the built-in shallow-copy method) when you actually want a second, independent object with the same property values rather than two names for the same one.",
                        "code": "ncsim> run\n[pkt] count = 0xabcd\n[pkt2] count = 0xabcd\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Arrays of Class Objects",
                        "content": "Just like a single class variable, each element of an array of class objects is its own handle, and starts out as null until it's individually constructed with new().",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Fixed Array",
                        "content": "A fixed-size array, also known as a static array, is declared with a specific size at compile time. In this example, fixed_array can hold exactly 5 Packet objects, and that size is locked in when the code compiles.",
                        "code": "Packet fixed_array [5]; // Declares a fixed array of 5 Packet objects",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "// Define the Packet class\nclass Packet;\n    int count;\n    // Constructor to initialize count\n    function new(int c = 0);\n        count = c;\n    endfunction\nendclass\n\nmodule tb;\n\n    // Declare a fixed array of Packet objects\n    Packet fixed_array[5];\n\n    initial begin\n        $display(\"--- Fixed Array Example ---\");\n\n        // Initialize each element of the fixed array\n        for (int i = 0; i < 5; i++) begin\n            fixed_array[i] = new(i * 10); // Create a new Packet object and assign it\n        end\n\n        // Access and display data from the fixed array\n        for (int i = 0; i < 5; i++) begin\n            $display(\"fixed_array[%0d].count = %0d\", i, fixed_array[i].count);\n        end\n\n        // Example of accessing a null element if not initialized (would cause an error if dereferenced)\n        // assert(fixed_array[0] != null); // Check if initialized\n    end\n\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "xcelium> run\n--- Fixed Array Example ---\nfixed_array[0].count = 0\nfixed_array[1].count = 10\nfixed_array[2].count = 20\nfixed_array[3].count = 30\nfixed_array[4].count = 40\nxmsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Dynamic Array",
                        "content": "A dynamic array is declared without a specific size and can grow or shrink at runtime. You allocate it using the new[size] syntax.\n\nHere, dynamic_array starts out empty. The call to new[10] allocates space for 10 handles, each of which still needs its own new() call before it points to an actual Packet object.",
                        "code": "Packet   dynamic_array[];       // Declares a dynamic array of Packet objects\ndynamic_array = new[10];        // Initializes the array with a size of 10",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "module tb;\n\n    initial begin\n        // Declare a dynamic array of Packet objects\n        Packet dynamic_array[];\n\n        $display(\"--- Dynamic Array Example ---\");\n\n        // Initialize the dynamic array with a specific size\n        dynamic_array = new[3]; // Creates space for 3 Packet references\n\n        // Initialize each element of the dynamic array\n        for (int i = 0; i < dynamic_array.size(); i++) begin\n            dynamic_array[i] = new(i + 1); // Create new Packet objects\n        end\n\n        // Access and display data\n        foreach (dynamic_array[i]) begin\n            $display(\"dynamic_array[%0d].count = %0d\", i, dynamic_array[i].count);\n        end\n    end\n\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "xcelium> run\n\n--- Dynamic Array Example ---\ndynamic_array[0].count = 1\ndynamic_array[1].count = 2\ndynamic_array[2].count = 3\nxmsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Associative Array",
                        "content": "An associative array uses a key, rather than a numerical index, to access elements. The key can be an integer, a string, or another data type, and the array only stores elements that have been explicitly added.\n\nHere, assoc_array could use integers (like 100) or strings (like \"header\") as keys. This is useful when the range of indices isn't known up front, or when you want to associate an object with a meaningful label instead of a plain number.",
                        "code": "Packet assoc_array[*];           // Declares an associative array of Packet objects\nassoc_array[100] = new;          // Adds a Packet object with key 100\nassoc_array[\"header\"] = new;     // Adds a Packet object with key \"header\"",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "module tb;\n\n    // Declare an associative array where the key is a string and the value is a Packet object\n    Packet assoc_array[string];\n\n    initial begin\n        $display(\"--- Associative Array Example ---\");\n\n        // Assign Packet objects to the associative array using string keys\n        assoc_array[\"packet_A\"] = new(50);\n        assoc_array[\"packet_B\"] = new(75);\n        assoc_array[\"packet_C\"] = new(100);\n\n        // Access and display data using keys\n        $display(\"assoc_array[\\\"packet_A\\\"].count = %0d\", assoc_array[\"packet_A\"].count);\n        $display(\"assoc_array[\\\"packet_C\\\"].count = %0d\", assoc_array[\"packet_C\"].count);\n\n        // Iterate through the associative array (order is not guaranteed unless specified)\n      foreach (assoc_array[k]) begin\n            $display(\"Key: %s, Count: %0d\", k, assoc_array[k].count);\n        end\n\n        // Check if a key exists\n        if (assoc_array.exists(\"packet_B\")) begin\n            $display(\"Packet_B exists in the associative array.\");\n        end\n    end\n\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!\n\nScoreboards and transaction trackers in verification environments frequently use associative arrays of class objects, keyed by a transaction ID or address, so a monitor can look up the matching expected transaction the moment a response arrives — without scanning through a fixed-size or dynamic array every time.",
                        "code": "xcelium> run\n\n--- Associative Array Example ---\nassoc_array[\"packet_A\"].count = 50\nassoc_array[\"packet_C\"].count = 100\nKey: packet_A, Count: 50\nKey: packet_B, Count: 75\nKey: packet_C, Count: 100\nPacket_B exists in the associative array.\nxmsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Common Mistakes",
                        "content": "Mistake #1: Accessing a member through a handle before calling new()\n\nWrong:\n\nRight:",
                        "code": "Packet pkt;\n$display (\"count = %0d\", pkt.count);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Why? A handle on its own is null. Reading a property through a null handle causes a null pointer dereference, since there's no object in memory for count to belong to.\n\nMistake #2: Assuming pkt2 = pkt creates a second, independent object\n\nWrong: Changing pkt2.count and expecting pkt.count to stay the same. Right: Treat pkt and pkt2 as two names for the same object after a plain handle assignment — a change through either one is visible through both.\n\nWhy? pkt2 = pkt only copies the handle, not the object it points to. To get a second, independent object, you need a separate call to new().\n\nMistake #3: Declaring a fixed or dynamic array of objects and skipping the per-element new() call\n\nWrong:",
                        "code": "Packet pkt;\npkt = new ();\n$display (\"count = %0d\", pkt.count);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Right:",
                        "code": "Packet fixed_array [5];\nfixed_array[0].count = 10;",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Why? Declaring Packet fixed_array [5] only reserves five handles, all initialized to null. Each element still needs its own new() call before it becomes a usable object.",
                        "code": "Packet fixed_array [5];\nfixed_array[0] = new ();\nfixed_array[0].count = 10;",
                        "lang": "verilog"
                    },
                    {
                        "title": "Practice Exercise",
                        "content": "Using the Packet class from this article, write a small testbench that creates one object pkt with count = 5. Then create a second handle pkt_alias that points to the same object as pkt, and a third handle pkt_copy that points to a brand new, independent object also constructed with count = 5. Change pkt.count to 99, then display count through all three handles to confirm which ones changed.\n\npkt_alias should be created with a plain handle assignment (pkt_alias = pkt;), while pkt_copy needs its own call to new() with the same starting value.\n\npkt_alias.count also shows 99, since pkt_alias and pkt point to the same object. pkt_copy.count still shows 5, since it was built with its own new() call and is a completely separate object.",
                        "code": "class Packet;\n    int count;\n    function new (int c = 0);\n        count = c;\n    endfunction\nendclass\n\nmodule tb;\n    Packet pkt, pkt_alias, pkt_copy;\n\n    initial begin\n        pkt = new (5);\n        pkt_alias = pkt;        // Same object as pkt\n        pkt_copy  = new (5);    // A separate, independent object\n\n        pkt.count = 99;\n\n        $display (\"pkt.count       = %0d\", pkt.count);\n        $display (\"pkt_alias.count = %0d\", pkt_alias.count);\n        $display (\"pkt_copy.count  = %0d\", pkt_copy.count);\n    end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Summary",
                        "content": "In this tutorial, you learned:",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-28",
                "num": 28,
                "title": "SystemVerilog Class Constructor",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "A constructor is simply a method to create a new object of a particular class data-type.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Constructors",
                        "content": "C/C++ requires complex memory allocation techniques and improper de-allocation could lead to memory leaks and other behavioral issues. SystemVerilog, although not a programming language, is capable of simple construction of objects and automatic garbage collection.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "When class constructor is explicity defined",
                        "content": "In the example above, variable declaration creates an object of class Packet and will automatically call the new() function within the class. The new() function is called a class constructor and is a way to initialize the class variables with some value. Note that it does not have a return type and is non-blocking.",
                        "code": "// Define a class called \"Packet\" with a 32-bit variable to store address\n// Initialize \"addr\" to 32'hfade_cafe in the new function, also called constructor\nclass Packet;\n  bit [31:0] addr;\n \n  function new ();\n    addr = 32'hfade_cafe;\n  endfunction\nendclass\n \nmodule tb;\n  \n  // Create a class handle called \"pkt\" and instantiate the class object\n  initial begin\n    // The class's constructor new() fn is called when the object is instantiated\n    Packet pkt = new;   \n    \n    // Display the class variable - Because constructor was called during \n    // instantiation, this variable is expected to have 32'hfade_cafe;\n    $display (\"addr=0x%0h\", pkt.addr);\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\naddr=0xfadecafe\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "When class constructor is implicitly called",
                        "content": "If the class does not have a new() function explicitly coded, an implicit new method will be automatically provided. In this case, addr is initialized to zero since it is of type bit for which the default value is zero.",
                        "code": "// Define a simple class with a variable called \"addr\"\n// Note that the new() function is not defined here\nclass Packet;\n\tbit [31:0] addr;\nendclass\n\nmodule tb;\n  \n  \t// When the class object is instantiated, then the constructor is\n  \t// implicitly defined by the tool and called\n\tinitial begin\n\t\tPacket pkt = new;   \n\t\t$display (\"addr=0x%0h\", pkt.addr);\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\naddr=0x0\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Behavior of inherited classes",
                        "content": "The new method of the derived class will first call its parent class constructor using super.new(). Once the base class constructor has completed, each property defined in the derived class will be initialized to a default value after which rest of the code within the new method will be executed.\n\nIn the above example, when a subClass object is created, it will first call the new() function of the subClass. From there it branches off to the new() method of the baseClass when invoked by super keyword. data will be initialized next and the control comes back to the subClass. The new method will be done after id is initialized to 4.",
                        "code": "// Define a simple class and initialize the class member \"data\" in new() function\nclass baseClass;\n  bit [15:0] data;\n \n  function new ();\n    data = 16'hface;\n  endfunction\nendclass\n \n// Define a child class extended from the above class with more members\n// The constructor new() function accepts a value as argument, and by default is 2\nclass subClass extends baseClass;\n  bit [3:0] id;\n  bit [2:0] mode = 3;\n \n  function new (int val = 2);\n    // The new() function in child class calls the new function in\n    // the base class using the \"super\" keyword\n    super.new ();\n    \n    // Assign the value obtained through the argument to the class member\n    id = val;\n  endfunction\nendclass\n \nmodule tb;\n  initial begin\n    // Create two handles for the child class\n    subClass  sc1, sc2;\n    \n    // Instantiate the child class and display member variable values\n    sc1 = new ();\n    $display (\"data=0x%0h id=%0d mode=%0d\", sc1.data, sc1.id, sc1.mode);\n    \n    // Pass a value as argument to the new function in this case and print\n    sc2 = new (4);\n    $display (\"data=0x%0h id=%0d mode=%0d\", sc2.data, sc2.id, sc2.mode);\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\ndata=0xface id=2 mode=3\ndata=0xface id=4 mode=3\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "When the new function is declared as static or virtual",
                        "content": "A constructor can be declared as local or protected, but not as static or virtual. We'll see more on this in a later session.",
                        "code": "class ABC;\n  string fruit;\n  \n  // Note that the constructor is defined as \"virtual\" which is not allowed\n  // in SystemVerilog. Class constructor cannot be \"static\" either\n  virtual function new ();\n    fruit = \"Apple\";\n  endfunction\n  \nendclass\n\n// Instantiate the class object and print its contents\nmodule tb;\n  \tinitial begin\n      ABC abc = new();\n      $display (\"fruit = %s\", abc.fruit);\n    end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "virtual function new ();\n                     |\nncvlog: *E,BADQAL (testbench.sv,6|21): Lifetime or qualifier(s) 'virtual' not allowed before function new declaration.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Typed constructors",
                        "content": "The difference here is that you can call the new() function of a subclass but assign it to the handle of a base class in a single statement. This is done by referencing the new() function of the subclass using scope operator :: as shown below.\n\nVariable c of base class C now references a newly constructed object of type D. This achieves the same effect as the code given below.",
                        "code": "class C; \nendclass\n\nclass D extends C;\nendclass\n\nmodule tb;\n   initial begin\n      C c = D::new;\n   end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "module tb;\n\tinitial begin\n\t\tD d = new;\n\t\tC c = d;\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-29",
                "num": 29,
                "title": "SystemVerilog Inheritance",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "Inheritance is a concept in OOP that allows us to extend a class to create another class and have access to all the properties and methods of the original parent class from the handle of a new class object. The idea behind this scheme is to allow developers add in new properties and methods into the new class while still maintaining access to the original class members. This allows us to make modifications without touching the base class at all.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Example",
                        "content": "ExtPacket is extended and hence is a child class of Packet. Being a child class, it inherits properties and methods from its parent. If there exists a function with the same name in both the parent and child class, then its invocation will depend on the type of the object handle used to call that function. In the example below, both Packet and ExtPacket have a function called display(). When this function is called by a child class handle, the child class display() function will be executed. If this function is called by a parent class handle, then the parent class display() function will be executed.",
                        "code": "class Packet;\n   int addr;\n\n   function new (int addr);\n      this.addr = addr;\n   endfunction\n\n\tfunction display ();\n\t\t$display (\"[Base] addr=0x%0h\", addr);\n\tendfunction\nendclass\n\n// A subclass called 'ExtPacket' is derived from the base class 'Packet' using\n// 'extends' keyword which makes 'EthPacket' a child of the parent class 'Packet'\n// The child class inherits all variables and methods from the parent class\nclass ExtPacket extends Packet;\n\n\t// This is a new variable only available in child class\n\tint data; \t\t\n\n   function new (int addr, data);\n      super.new (addr); \t// Calls 'new' method of parent class\n      this.data = data;\n   endfunction\n\n\tfunction display ();\n\t\t$display (\"[Child] addr=0x%0h data=0x%0h\", addr, data);\n\tendfunction\nendclass\n\nmodule tb;\n\tPacket      bc; \t// bc stands for BaseClass\n\tExtPacket   sc; \t// sc stands for SubClass\n\t\n\tinitial begin\n\t\tbc = new (32'hface_cafe);\n\t\tbc.display ();\n\t\n        sc = new (32'hfeed_feed, 32'h1234_5678);\t\n\t\tsc.display ();\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "It becomes a little more tricky when you try to assign a child class instance to a base class handle or vice versa. This is covered in more details under Polymorphism",
                        "code": "ncsim> run\n[Base] addr=0xfacecafe\n[Child] addr=0xfeedfeed data=0x12345678\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-30",
                "num": 30,
                "title": "SystemVerilog Polymorphism",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "Polymorphism allows the use of a variable of the base class type to hold subclass objects and to reference the methods of those subclasses directly from the superclass variable. It also allows a child class method to have a different definition than its parent class if the parent class method is virtual in nature.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Parent and Child Assignment",
                        "content": "A class handle is just a container to hold either parent or child class objects. It is important to understand how parent class handles holding child objects and vice-versa behave in SystemVerilog.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Assign Child Class to Base Class",
                        "content": "Taking the same example from Inheritance, we'll assign a sub/child class instance sc to a base class handle bc.",
                        "code": "module tb;\n\tPacket      bc; \t// bc stands for BaseClass\n\tExtPacket   sc; \t// sc stands for SubClass\n\n\tinitial begin\n\t\tsc = new (32'hfeed_feed, 32'h1234_5678);\n\t\t\n\t\t// Assign sub-class to base-class handle\n\t\tbc = sc;\n      \n\t\tbc.display ();\n\t\tsc.display ();\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Even though bc points to the child class instance, when display() function is called from bc it still invoked the display() function within the base class. This is because the function was called based on the type of the handle instead of the type of object the handle is pointing to. Now let's try to reference a subclass member via a base class handle for which you'll get a compilation error.",
                        "code": "ncsim> run\n[Base] addr=0xfeedfeed\n[Child] addr=0xfeedfeed data=0x12345678\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "module tb;\n\tPacket      bc; \t// bc stands for BaseClass\n\tExtPacket   sc; \t// sc stands for SubClass\n\n\tinitial begin\n\t\tsc = new (32'hfeed_feed, 32'h1234_5678);\n\t\tbc = sc;\n      \n        // Print variable in sub-class that is pointed to by \n        // base class handle\n\t\t$display (\"data=0x%0h\", bc.data);\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "$display (\"data=0x%0h\", bc.data);\n                                    |\nncvlog: *E,NOTCLM (inheritance.sv,49|36): data is not a class item.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Assign Base Class to Child Class",
                        "content": "It is illegal to directly assign a variable of a superclass type to a variable of one of its subclass types and hence you'll get a compilation error.",
                        "code": "module\n\tinitial begin\n\t\tbc = new (32'hface_cafe);\n      \n        // Assign base class object to sub-class handle\n\t\tsc = bc;\n      \n\t\tbc.display ();\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "However, $cast can be used to assign a superclass handle to a variable of a subclass type provided the superclass handle refers to an object that is assignment compatible with the subclass variable.",
                        "code": "sc = bc;\n            |\nncvlog: *E,TYCMPAT (inheritance.sv,56|12): assignment operator type check failed (expecting datatype compatible with 'class $unit::ExtPacket' but found 'class $unit::Packet' instead).",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Although the code will compile well, it will have a run-time simulation error because of the failure of $cast. This is because bc is not pointing to an object that is compatible with sc.",
                        "code": "module\n\tinitial begin\n\t\tbc = new (32'hface_cafe);\n      \n        // Dynamic cast base class object to sub-class type\n\t\t$cast (sc, bc);\n      \n\t\tbc.display ();\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Let's make bc point to another subclass called sc2 and try the same thing. In this case, bc simply acts like a carrier.",
                        "code": "ncsim> run\n      $cast (sc, bc);\n          |\nncsim: *E,BCLCST (./inheritance.sv,57|10): Invalid cast: a value with the class datatype '$unit_0x06d772f8::Packet' cannot be assigned to a class variable with the datatype '$unit_0x06d772f8::ExtPacket'.\n[Base] addr=0xfacecafe\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "initial begin\n      ExtPacket sc2;\n      bc = new (32'hface_cafe);\n      sc = new (32'hfeed_feed, 32'h1234_5678);\n      bc = sc;\n      \n      // Dynamic cast sub class object in base class handle to sub-class type\n      $cast (sc2, bc);\n      \n      sc2.display ();\n      $display (\"data=0x%0h\", sc2.data);\n   end",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "ncsim> run\n[Child] addr=0xfeedfeed data=0x12345678\ndata=0x12345678\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Virtual Methods",
                        "content": "A method in the parent class can be declared as virtual which will enable all child classes to override the method with a different definition, but the prototype containing return type and arguments shall remain the same.\n\nClick here to learn more on Virtual Methods",
                        "code": "class Base;\n\trand bit [7:0] addr;\n\trand bit [7:0] data;\n\t\n\t// Parent class has a method called 'display' declared as virtual\n\tvirtual function void display(string tag=\"Thread1\");\n\t\t$display (\"[Base] %s: addr=0x%0h data=0x%0h\", tag, addr, data);\n\tendfunction\nendclass\n\nclass Child extends Base;\n\trand bit en;\n\t\n\t// Child class redefines the method to also print 'en' variable\n\tfunction void display(string tag=\"Thread1\");\n\t\t$display (\"[Child] %s: addr=0x%0h data=0x%0h en=%0d\", tag, addr, data, en);\n\tendfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Rules to follow",
                        "content": "",
                        "code": "base \tb = new;\n  \tchild \tc = new;\n  \n  \tb = c; \t// Allowed\n  \tc = b; \t// Compilation Error",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "base \tb = new;\n  \tchild \tc = new;\n  \n  \tif (! $cast(c, b))\n  \t\t$error(\"Cast failed !\");\n  \n  \tassert($cast(c, b)) else\n  \t\t$error(\"Cast failed !\");",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-31",
                "num": 31,
                "title": "SystemVerilog Virtual Methods",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "In Inheritance, we saw that methods invoked by a base class handle which points to a child class instance would eventually end up executing the base class method instead of the one in child class. If that function in the base class was declared as virtual, only then the child class method will be executed.\n\nWe'll use the same classes from previous session and do a comparison with and without virtual function.",
                        "code": "bc = sc;            // Base class handle is pointed to a sub class\n\t\n\tbc.display ();      // This calls the display() in base class and \n\t                    // not the sub class as we might think",
                        "lang": "verilog"
                    },
                    {
                        "title": "Without virtual keyword",
                        "content": "",
                        "code": "// Without declaring display() as virtual\nclass Packet;\n   int addr;\n\n   function new (int addr);\n      this.addr = addr;\n   endfunction\n\n   // This is a normal function definition which \n   // starts with the keyword \"function\"\n   function void display ();\n\t\t$display (\"[Base] addr=0x%0h\", addr);\n   endfunction\nendclass\n\nmodule tb;\n   Packet bc;\n   ExtPacket sc;\n\n\tinitial begin\n        sc = new (32'hfeed_feed, 32'h1234_5678);\t\n\n        bc = sc; \n\t\tbc.display ();\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Note that the base class display() function gets executed.",
                        "code": "ncsim> run\n[Base] addr=0xfeedfeed\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "With virtual keyword",
                        "content": "",
                        "code": "class Packet;\n   int addr;\n\n   function new (int addr);\n      this.addr = addr;\n   endfunction\n\n   // Here the function is declared as \"virtual\"\n   // so that a different definition can be given\n   // in any child class\n   virtual function void display ();\n\t\t$display (\"[Base] addr=0x%0h\", addr);\n\tendfunction\nendclass\n\nmodule tb;\n   Packet bc;\n   ExtPacket sc;\n\n\tinitial begin\n        sc = new (32'hfeed_feed, 32'h1234_5678);\t\n\n        bc = sc; \n\t\tbc.display ();\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Note that the child class display() function gets executed when the base class function is made virtual.\n\nThe key takeaway is that you should always declare your base class methods as virtual so that already existing base class handles will now refer the function override in the child class.",
                        "code": "ncsim> run\n[Child] addr=0xfeedfeed data=0x12345678\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-32",
                "num": 32,
                "title": "SystemVerilog super Keyword",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "The super keyword is used from within a sub-class to refer to properties and methods of the base class. It is mandatory to use the super keyword to access properties and methods if they have been overridden by the sub-class.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Example",
                        "content": "The super keyword can only be used within a class scope that derives from a base class. The code shown below will have compilation errors because extPacket is not a child of Packet. Note that new method is implicitly defined for every class definition, and hence we do not need a new defintion in the base class Packet.",
                        "code": "class Packet;\n\tint addr;\n\tfunction display ();\n\t\t$display (\"[Base] addr=0x%0h\", addr);\n\tendfunction\nendclass\n\nclass extPacket;                       // \"extends\" keyword missing -> not a child class\n\tfunction new ();\n\t\tsuper.new ();\n\tendfunction\nendclass\n\nmodule tb;\n\tPacket p;\n  \textPacket ep;\n  \n  \tinitial begin\n      ep = new();\n      p = new();\n      p.display();\n    end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Now let us see the output when extPacket is a derivative of class Packet.",
                        "code": "super.new ();\n        |\nncvlog: *E,CLSSPX (testbench.sv,12|8): 'super' can only be used within a class scope that derives from a base class.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "You can see from the simulation result below that there were no compilation errors.",
                        "code": "class extPacket extends Packet;                       // extPacket is a child class of Packet\n\tfunction new ();\n\t\tsuper.new ();\n\tendfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "ncsim> run\n[Base] addr=0x0\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Accessing base class methods",
                        "content": "In the example shown below, display method of the base class is called from the display method of the child class using super keyword.",
                        "code": "class Packet;\n  int addr;\n  \n  function display ();\n    $display (\"[Base] addr=0x%0h\", addr);\n  endfunction\nendclass\n \nclass extPacket extends Packet;\n  function display();\n    super.display();                          // Call base class display method\n    $display (\"[Child] addr=0x%0h\", addr);\n  endfunction\n  \n  function new ();\n    super.new ();\n  endfunction\nendclass\n \nmodule tb;\n \tPacket p;\n  \textPacket ep;\n  \n  \tinitial begin\n      ep = new();\n      p = new();\n      ep.display();\n    end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "ncsim> run\n[Base] addr=0x0\n[Child] addr=0x0\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-33",
                "num": 33,
                "title": "SystemVerilog 'this' keyword",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "The this keyword is used to refer to class properties, parameters and methods of the current instance. It can only be used within non-static methods, constraints and covergroups. this is basically a pre-defined object handle that refers to the object that was used to invoke the method in which this is used.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Example",
                        "content": "A very common way of using this is within the initialization block.\n\nUnless there is ambiguity in assignment, use of this keyword is not generally needed for specifying access to class members in methods.",
                        "code": "class Packet;\n\tbit [31:0] addr;\n\t\n\tfunction new (bit [31:0] addr);\n//\t\taddr = addr;          //  Which addr should get assigned ?\n\n\t\tthis.addr = addr;     //  addr variable in Packet class should be \n\t\t                      //  assigned with local variable addr in new()\n\tendfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-34",
                "num": 34,
                "title": "SystemVerilog Parameterized Classes",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Why do we need parameterization for classes ?",
                        "content": "At times it would be much easier to write a generic class which can be instantiated in multiple ways to achieve different array sizes or data types. This avoids the need to re-write code for specific features like size or type and instead allow a single specification to be used for different objects. This is achieved by extending the SystemVerilog parameter mechanism to classes.\n\nParameters are like constants that are local to the specified class. Classes are allowed to have default value for each parameter that can be overridden during class instantiation.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Syntax",
                        "content": "",
                        "code": "// Declare parameterized class\n\tclass <name_of_class> #(<parameters>);\n\tclass Trans #(addr = 32);\n\t\n\t// Override class parameter\n\t<name_of_class>  #(<parameters>) <name_of_inst>;\n\tTrans #(.addr(16)) obj;",
                        "lang": "verilog"
                    },
                    {
                        "title": "Parameterized Classes",
                        "content": "Given below is a parameterized class which has size as the parameter that can be changed during instantiation.",
                        "code": "// A class is parameterized by #() \n// Here, we define a parameter called \"size\" and gives it \n// a default value of 8. The \"size\" parameter is used to\n// define the size of the \"out\" variable\nclass something #(int size = 8);\n\tbit [size-1:0] out;\nendclass\n\nmodule tb;\n  \n  // Override default value of 8 with the given values in #()\n  something  #(16) sth1;                 // pass 16 as \"size\" to this class object\n  something  #(.size (8)) sth2;          // pass 8 as \"size\" to this class object\n  typedef something #(4) td_nibble;      // create an alias for a class with \"size\" = 4 as \"nibble\"\n  td_nibble nibble;\n  \n  initial begin\n    // 1. Instantiate class objects\n    sth1 = new;\n    sth2 = new;\n  \tnibble = new;  \n    \n    // 2. Print size of \"out\" variable. $bits() system task will return\n    // the number of bits in a given variable\n    $display (\"sth1.out   = %0d bits\", $bits(sth1.out));\n    $display (\"sth2.out   = %0d bits\", $bits(sth2.out));\n    $display (\"nibble.out = %0d bits\", $bits(nibble.out));\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nsth1.out   = 16 bits\nsth2.out   = 8 bits\nnibble.out = 4 bits\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Pass datatype as a parameter",
                        "content": "Data-type is parameterized in this case and can be overridden during instantiation. In the previous case, we defined parameters to have a specific value.\n\nNote that any type can be supplied as a parameter, including user-defined type such as class or struct.",
                        "code": "// \"T\" is a parameter that is set to have a default value of \"int\"\n// Hence \"items\" will be \"int\" by default \nclass stack #(type T = int);\n  T item;             \n\t\n  function T add_a (T a); \t\n    return item + a;\n  endfunction\nendclass\n\nmodule tb;\n\tstack \t\t\t \tst; \t// st.item is by default of int type\n\tstack #(bit[3:0]) \tbs; \t// bs.item will become a 4-bit vector\n\tstack #(real) \t\trs; \t// rs.item will become a real number\n  \n  \tinitial begin\n      st = new;\n      bs = new;\n      rs = new;\n      \n      // Assign different values, and add 10 to these values\n      // Then print the result - Note the different values printed\n      // that are affected by change in data type\n      st.item = -456;\n      $display (\"st.item = %0d\", st.add_a (10));\n      \n      bs.item = 8'hA1;\n      $display (\"bs.item = %0d\", bs.add_a (10));\n      \n      rs.item = 3.14;\n      $display (\"rs.item = %0.2f\", rs.add_a (10));\n    end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nst.item = -446\nbs.item = 11\nrs.item = 13.14\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-35",
                "num": 35,
                "title": "SystemVerilog Static Variables & Functions",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "Each class instance would normally have a copy of each of its internal variables.\n\nEach of the class objects p1, p2, p3 will have addr and data variables within it.",
                        "code": "class Packet;\n\tbit [15:0] \taddr;\n\tbit [7:0] \tdata;\n\t\n\tfunction new (bit [15:0] ad, bit [7:0] d);\n\t\taddr = ad;\n\t\tdata = d;\n\t\t$display (\"addr=0x%0h data=0x%0h\", addr, data);\n\tendfunction\nendclass\n\nmodule tb;\n\tinitial begin\n\t\tPacket \tp1, p2, p3;\n\t\tp1 = new (16'hdead, 8'h12);\n\t\tp2 = new (16'hface, 8'hab);\n\t\tp3 = new (16'hcafe, 8'hfc);\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "ncsim> run\naddr=0xdead data=0x12\naddr=0xface data=0xab\naddr=0xcafe data=0xfc\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Static Variables",
                        "content": "When a variable inside a class is declared as static, that variable will be the only copy in all class instances. To demonstrate an example we'll compare a static counter vs a non-static counter. The static counter is declared with static keyword and named as static_ctr while the normal counter variable is named as ctr. Both counters will be incremented within the new() function so that they are updated everytime an object is created.\n\nYou'll see that the static counter is shared between all class objects p1, p2 and p3 and hence will increment to 3 when three packets are created. On the other hand, the normal counter variable ctr is not declared as static and hence every class object will have its own copy. This is the reason why ctr is still 1 after all three objects are created.",
                        "code": "class Packet;\n\tbit [15:0] \taddr;\n\tbit [7:0] \tdata;\n\tstatic int \tstatic_ctr = 0;\n\t\t   int \tctr = 0;\n\t\n\tfunction new (bit [15:0] ad, bit [7:0] d);\n\t\taddr = ad;\n\t\tdata = d;\n\t\tstatic_ctr++;\n\t\tctr++;\n\t\t$display (\"static_ctr=%0d ctr=%0d addr=0x%0h data=0x%0h\", static_ctr, ctr, addr, data);\n\tendfunction\nendclass\n\nmodule tb;\n\tinitial begin\n\t\tPacket \tp1, p2, p3;\n\t\tp1 = new (16'hdead, 8'h12);\n\t\tp2 = new (16'hface, 8'hab);\n\t\tp3 = new (16'hcafe, 8'hfc);\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Declaring a variable as static can be very useful in cases where you want to know the total number of packets generated until a particular time.",
                        "code": "ncsim> run\nstatic_ctr=1 ctr=1 addr=0xdead data=0x12\nstatic_ctr=2 ctr=1 addr=0xface data=0xab\nstatic_ctr=3 ctr=1 addr=0xcafe data=0xfc\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Static functions",
                        "content": "A static method follows all class scoping and access rules, but the only difference being that it can be called outside the class even with no class instantiation. A static method has no access to non-static members but it can directly access static class properties or call static methods of the same class. Also static methods cannot be virtual. Static function calls using class names need to be made through the scope operator ::.",
                        "code": "class Packet;\n\tstatic int ctr=0;\n\n   function new ();\n      ctr++;\n   endfunction\n\t\n\tstatic function get_pkt_ctr ();\n\t\t$display (\"ctr=%0d\", ctr);\n\tendfunction\n\nendclass\n\nmodule tb;\n\tPacket pkt [6];\n\tinitial begin\n\t\tfor (int i = 0; i < $size(pkt); i++) begin\n\t\t\tpkt[i] = new;\n\t\tend\n\t\tPacket::get_pkt_ctr(); \t// Static call using :: operator\n\t\tpkt[5].get_pkt_ctr(); \t// Normal call using instance\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Let's add in a non-static member called mode and try to call that from our static function.",
                        "code": "ncsim> run\nctr=6\nctr=6\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "It's not allowed and will result in a compilation error.",
                        "code": "class Packet;\n\tstatic int ctr=0;\n   bit [1:0] mode;\n\n   function new ();\n      ctr++;\n   endfunction\n\t\n\tstatic function get_pkt_ctr ();\n\t\t$display (\"ctr=%0d mode=%0d\", ctr, mode);\n\tendfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "$display (\"ctr=%0d mode=%0d\", ctr, mode);\n                                                      |\nncvlog: *E,CLSNSU (static-function.sv,10|40): A static class method cannot access non static class members.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-36",
                "num": 36,
                "title": "SystemVerilog Copying Objects",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "When you assign one class handle to another in SystemVerilog, you are not creating a new object — both handles point to the same memory. To get a truly independent copy, you need to understand the two copy strategies available: shallow copy and deep copy. Choosing the wrong one is a common source of hard-to-find bugs in verification environments.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Background: Handles vs Objects",
                        "content": "A SystemVerilog class variable is a handle — a reference (pointer) to an object stored in memory. When you write p2 = p1, you are copying the handle, not the object. Both p1 and p2 now point to the same object. Modifying one modifies the other.\n\nTo create a new, separate object, you must use the new keyword — either with shallow copy syntax or a custom deep copy function.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Shallow Copy",
                        "content": "Shallow copy creates a new object and copies all the direct members of the source object into it. You trigger it by passing an existing object handle to the new constructor:\n\nThis works correctly for primitive members like int, bit, and string — those values are copied by value into the new object. However, if the class contains a nested object (a member that is itself a class handle), shallow copy only copies the handle to that inner object, not the inner object itself.\n\nThis means both p1 and p2 will share the same nested object in memory. Changing the nested object through p1 will affect p2 too.\n\nShallow copy duplicates the top-level object but shares any nested objects between the original and the copy.",
                        "code": "Packet p1, p2;\n\np1 = new(32'hface_cafe, 32'h1234_5678, 26);  // Create p1\np2 = new p1;                                  // Shallow copy p1 into p2",
                        "lang": "verilog"
                    },
                    {
                        "title": "Shallow Copy Example",
                        "content": "The Packet class below has two primitive members (addr, data) and one nested object (hdr of type Header).",
                        "code": "// Nested class — represents a packet header\nclass Header;\n    int id;\n\n    function new(int id);\n        this.id = id;\n    endfunction\nendclass\n\n// Top-level class with a nested Header object\nclass Packet;\n    int    addr;\n    int    data;\n    Header hdr;    // This is a handle to a Header object, not the object itself\n\n    function new(int addr, int data, int id);\n        hdr = new(id);       // Create a Header object and store its handle\n        this.addr = addr;\n        this.data = data;\n    endfunction\n\n    function void display(string name);\n        $display(\"[%s] addr=0x%0h  data=0x%0h  id=%0d\", name, addr, data, hdr.id);\n    endfunction\nendclass\n\nmodule tb;\n    Packet p1, p2;\n\n    initial begin\n        p1 = new(32'hface_cafe, 32'h1234_5678, 26);\n        p1.display(\"p1\");\n\n        // Shallow copy: p2 gets its own addr and data, but shares p1's Header object\n        p2 = new p1;\n        p2.display(\"p2\");\n\n        // Modify p1's primitive members AND its nested hdr.id\n        p1.addr    = 32'habcd_ef12;\n        p1.data    = 32'h5a5a_5a5a;\n        p1.hdr.id  = 17;        // This modifies the SHARED Header object\n\n        p1.display(\"p1\");\n\n        // p2.addr and p2.data are unaffected (they were copied by value)\n        // but p2.hdr.id HAS changed — p2 shares the same Header object as p1\n        p2.display(\"p2\");\n    end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Output",
                        "content": "Look closely at the final line: p2.addr and p2.data kept their original values — those primitives were copied by value. But p2.hdr.id changed to 17, even though we only modified p1.hdr.id. This is because p2.hdr and p1.hdr point to the same Header object in memory.\n\nQ: After a shallow copy, if you call p2.hdr = new(99) (creating a brand-new Header for p2), would that affect p1.hdr.id?\n\nNo. p2.hdr = new(99) creates a new Header object and points p2.hdr at it. p1.hdr still points to the original Header with its original id. The two handles are now fully independent. The problem occurs only when you modify fields of the shared object rather than replacing the handle itself.",
                        "code": "[p1] addr=0xfacecafe  data=0x12345678  id=26\n[p2] addr=0xfacecafe  data=0x12345678  id=26\n\n[p1] addr=0xabcdef12  data=0x5a5a5a5a  id=17\n[p2] addr=0xfacecafe  data=0x12345678  id=17",
                        "lang": "verilog"
                    },
                    {
                        "title": "Deep Copy",
                        "content": "A deep copy creates a fully independent duplicate — including all nested objects. SystemVerilog has no built-in deep copy mechanism, so you implement it yourself as a custom copy() function inside the class.\n\nThe key difference from shallow copy: instead of just copying the nested handle, you copy the values inside the nested object, field by field.",
                        "code": "class Packet;\n    int    addr;\n    int    data;\n    Header hdr;\n\n    function new(int addr, int data, int id);\n        hdr = new(id);\n        this.addr = addr;\n        this.data = data;\n    endfunction\n\n    // Deep copy: copy primitive fields AND nested object fields individually\n    function void copy(Packet p);\n        this.addr   = p.addr;\n        this.data   = p.data;\n        this.hdr.id = p.hdr.id;   // Copy the value, not the handle\n    endfunction\n\n    function void display(string name);\n        $display(\"[%s] addr=0x%0h  data=0x%0h  id=%0d\", name, addr, data, hdr.id);\n    endfunction\nendclass\n\nmodule tb;\n    Packet p1, p2;\n\n    initial begin\n        p1 = new(32'hface_cafe, 32'h1234_5678, 26);\n        p1.display(\"p1\");\n\n        // Deep copy: p2 must already exist before calling copy()\n        p2 = new(1, 2, 3);    // Create p2 with placeholder values\n        p2.copy(p1);           // Deep copy p1's contents into p2\n        p2.display(\"p2\");\n\n        // Modify p1 including the nested hdr.id\n        p1.addr   = 32'habcd_ef12;\n        p1.data   = 32'h5a5a_5a5a;\n        p1.hdr.id = 17;\n        p1.display(\"p1\");\n\n        // p2 is now fully independent — none of its fields change\n        p2.display(\"p2\");\n    end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Output",
                        "content": "This time p2.hdr.id stays at 26 after p1.hdr.id is updated to 17. The two Header objects are independent — copy() transferred the value of id rather than the handle to the same object.\n\nBefore calling copy(), p2 must be a valid object (constructed with new). The copy() function writes into the existing p2.hdr object — if p2.hdr is null, it will cause a null pointer error at runtime.",
                        "code": "[p1] addr=0xfacecafe  data=0x12345678  id=26\n[p2] addr=0xfacecafe  data=0x12345678  id=26\n\n[p1] addr=0xabcdef12  data=0x5a5a5a5a  id=17\n[p2] addr=0xfacecafe  data=0x12345678  id=26",
                        "lang": "verilog"
                    },
                    {
                        "title": "Common Mistakes",
                        "content": "Mistake 1: Expecting shallow copy to fully isolate nested objects.\n\nWriting p2 = new p1 and then modifying p1.hdr.id will also change p2.hdr.id, because both handles point to the same Header object. Use a deep copy function when nested objects must be independent.\n\nMistake 2: Calling copy() before constructing the destination object.\n\nThe copy() function writes into an existing object's nested members. If you write p2.copy(p1) without first creating p2 (and its internal hdr), you will get a null handle dereference error at runtime. Always construct the destination first: p2 = new(...); p2.copy(p1);\n\nMistake 3: Using handle assignment instead of copy.\n\nWriting p2 = p1 does not create a new object — it makes p2 an alias for the same object. Any change through either handle modifies the single underlying object.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Real-World Context",
                        "content": "In verification environments, transactions are often generated by a sequencer and passed to multiple components (scoreboard, coverage collector, driver). Each component needs its own independent copy of the transaction so that modifications in one component do not corrupt the data seen by others. Deep copy functions are standard practice in UVM transaction classes for exactly this reason.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Practice Exercise",
                        "content": "Extend the example so that Header itself contains a nested object — a SubHeader class with a field priority_level. Update the copy() function in Packet to perform a complete deep copy of all three levels.\n\nYour copy() function needs to reach two levels deep: this.hdr.sub.priority_level = p.hdr.sub.priority_level. Alternatively, add a copy() method to Header as well and call it from Packet.copy().",
                        "code": "class SubHeader;\n    int priority_level;\n    function new(int p); this.priority_level = p; endfunction\nendclass\n\nclass Header;\n    int       id;\n    SubHeader sub;\n\n    function new(int id, int pri);\n        this.id = id;\n        sub = new(pri);\n    endfunction\n\n    // Copy all fields including the nested SubHeader\n    function void copy(Header h);\n        this.id                 = h.id;\n        this.sub.priority_level = h.sub.priority_level;\n    endfunction\nendclass\n\nclass Packet;\n    int    addr;\n    int    data;\n    Header hdr;\n\n    function new(int addr, int data, int id, int pri);\n        hdr = new(id, pri);\n        this.addr = addr;\n        this.data = data;\n    endfunction\n\n    function void copy(Packet p);\n        this.addr = p.addr;\n        this.data = p.data;\n        this.hdr.copy(p.hdr);   // Delegate nested copy to Header's copy()\n    endfunction\n\n    function void display(string name);\n        $display(\"[%s] addr=0x%0h  data=0x%0h  id=%0d  pri=%0d\",\n                 name, addr, data, hdr.id, hdr.sub.priority_level);\n    endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Summary",
                        "content": "In this tutorial, you learned:",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-37",
                "num": 37,
                "title": "SystemVerilog Cast Dynamic",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "When values need to be assigned between two different data type variables, ordinary assignment might not be valid and instead a system task called $cast should be used.\n\n$cast can be called as either a task or a function, the difference being that when used as a function, it returns a 1 if the cast is legal. It becomes useful in handling invalid assignments.\n\nClick here for an example !",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Syntax",
                        "content": "Here, targ_var is the target variable and source_exp is the source expression that should be evaluated and assigned to the target variable.",
                        "code": "function int $cast (targ_var, source_exp);\n\t\n\ttask $cast (targ_var, source_exp);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Calling as a task/function",
                        "content": "When $cast is called as a task, it will attempt to assign the source expression to the target variable and if it's invalid, a runtime error will occur and the target variable will remain unchanged.\n\nWhen $cast is called as a function, it will attempt to assign the source expression to the target variable and return 1 if it succeeds. It does not make the assignment if it fails and returns 0. Note that in this case there will be no runtime error, and the simulation will proceed with the unchanged value of the destination variable.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Using $cast",
                        "content": "Let's take an enumerated variable and assign an integer value to it using $cast.\n\nThe source expression (10 + 5 + 10) was first evaluated to 25 and then assigned to the enumerated variable myCent.",
                        "code": "typedef enum { PENNY=1, FIVECENTS=5, DIME=10, QUARTER=25, DOLLAR=100 } Cents;\n\t\nmodule tb;\n\tCents \tmyCent;\n\t\t\n\tinitial begin\n\t\t$cast (myCent, 10 + 5 + 10);\n\t\t$display (\"Money=%s\", myCent.name());\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nMoney=QUARTER\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Without $cast",
                        "content": "Now, let's see what happens if $cast is not used and a simple assignment is made as shown below.\n\nSome simulators allow the simulation to run but gives a compilation warning because of data-type mismatch. But some others give a compilation error. The value being assigned is an integer while the target data type is an enumerated variable.\n\nThis is the output from Aldec Riviera Pro",
                        "code": "initial begin\n\t\tmyCent = 10 + 5 + 10;\n\t\t...\n\tend",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "This is the output from Cadence ncsim",
                        "code": "ERROR VCP2694 \"Assignment to enum variable from expression of different type.\" \"testbench.sv\" 7  1\nFAILURE \"Compile failure 1 Errors 0 Warnings  Analysis time: 0[s].\"",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "myCent = 10 + 5 + 10;\n\t\t                |\nncelab: *W,ENUMERR (./testbench.sv,7|18): This assignment is a violation of SystemVerilog strong typing rules for enumeration datatypes.\n\nncsim> run\nMoney=QUARTER\nncsim: *W,RNQUIE: Simulation is complete.\nncsim> exit",
                        "lang": "verilog"
                    },
                    {
                        "title": "Casting invalid values",
                        "content": "Now, let's assign a value that does not fall inside the enumerated range and see what happens.\n\nNote that $cast was called as a task (returned value is ignored), and hence it results in a runtime error when the cast failed.",
                        "code": "initial begin\n\t\t$cast (myCent, 75);\n\t\t...\n\tend",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\n\t\t$cast (myCent, 75);\n\t\t    |\nncsim: *E,INVCST (./testbench.sv,7|6): Invalid cast: the source expression can not be cast to the type of the destination variable.\nMoney=\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "$cast as a function",
                        "content": "Let's do the same out of range example with $cast called as a function.\n\nNote that the simulation completed without any runtime errors, and the target variable was left unchanged.",
                        "code": "initial begin\n\t\tif ($cast (myCent, 75))\n\t\t\t$display (\"Cast passed\");\n\t\telse\n\t\t\t$display (\"Cast failed\");\n\t\t...\n\tend",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!\n\nCasting is also done on class objects to allow a base class handle pointing to a child object be assigned to another child variable as discussed in Polymorphism.",
                        "code": "ncsim> run\nCast failed\nMoney=\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-38",
                "num": 38,
                "title": "SystemVerilog Cast Static",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "Static cast is a SystemVerilog feature that allows converting an expression from one data type to another at compile time.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Syntax",
                        "content": "",
                        "code": "'(value or variable or expression)",
                        "lang": "verilog"
                    },
                    {
                        "title": "Properties",
                        "content": "Here are some of the properties of static cast in SystemVerilog:",
                        "code": "module tb;\n  \n  \tinitial begin      \n      $display(\"data=%0d\", int'(\"Hello World\"));\n \tend\n  endmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "xcelium> run\n\tdata=1869769828\n\txmsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "module tb;\n  \n  \tinitial begin\n      $display(\"data=%0.3f\", int'(3.4 + 2 * 1.5));\n \tend\n  endmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "xcelium> run\n\tdata=6.000\n\txmsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "module tb;\n  \tint \tdata;\n  \n  \tinitial begin\n  \t\tdata = int'(3.145);\n  \t\t$display(\"data=%0.3f\", data);\n \tend\n  endmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "xcelium> run\n\tdata=3.000\n\txmsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-39",
                "num": 39,
                "title": "SystemVerilog Abstract Class",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "SystemVerilog prohibits a class declared as virtual to be directly instantiated and is called an abstract class.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Syntax",
                        "content": "However, this class can be extended to form other sub-classes which can then be instantiated. This is useful to enforce testcase developers to always extend a base class to form another class for their needs. So base classes are usually declared asvirtual although it is not mandatory.",
                        "code": "virtual class <class_name>\n\t// class definition\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Normal Class Example",
                        "content": "",
                        "code": "class BaseClass;\n\tint data;\n\t\n\tfunction new();\n\t\tdata = 32'hc0de_c0de;\n\tendfunction\nendclass\n\nmodule tb;\n\tBaseClass base;\n\tinitial begin\n\t\tbase = new();\n\t\t$display (\"data=0x%0h\", base.data);\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "ncsim> run\ndata=0xc0dec0de\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Abstract Class Example",
                        "content": "Let us declare the class BaseClass as virtual to make it an abstract class and see what happens.\n\nA compilation error is reported by the simulator as shown below since abstract classes are not allowed to be instantiated.",
                        "code": "virtual class BaseClass;\n\tint data;\n\t\n\tfunction new();\n\t\tdata = 32'hc0de_c0de;\n\tendfunction\nendclass\n\nmodule tb;\n\tBaseClass base;\n\tinitial begin\n\t\tbase = new();\n\t\t$display (\"data=0x%0h\", base.data);\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "base = new();\n\t\t   |\nncvlog: *E,CNIABC (testbench.sv,12|5): An abstract (virtual) class cannot be instantiated.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Extending Abstract Classes",
                        "content": "Abstract classes can be extended just like any other SystemVerilog class using the extends keyword like shown below.\n\nIt can be seen from the simulation output below that it is perfectly valid to extend abstract classes to form other classes that can be instantiated using new() method.",
                        "code": "virtual class BaseClass;\n\tint data;\n\t\n\tfunction new();\n\t\tdata = 32'hc0de_c0de;\n\tendfunction\nendclass\n\nclass ChildClass extends BaseClass;\n\tfunction new();\n\t\tdata = 32'hfade_fade;\n\tendfunction\nendclass\n\nmodule tb;\n\tChildClass child;\n\tinitial begin\n\t\tchild = new();\n\t\t$display (\"data=0x%0h\", child.data);\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\ndata=0xfadefade\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Pure Virtual Methods",
                        "content": "A virtual method inside an abstract class can be declared with the keyword pure and is called a pure virtual method. Such methods only require a prototype to be specified within the abstract class and the implementation is left to defined within the sub-classes.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Pure Method Example",
                        "content": "The pure virtual method prototype and its implementation should have the same arguments and return type.",
                        "code": "virtual class BaseClass;\n\tint data;\n\t\n\tpure virtual function int getData();\nendclass\n\nclass ChildClass extends BaseClass;\n\tvirtual function int getData();\n\t\tdata = 32'hcafe_cafe;\n\t\treturn data;\n\tendfunction\nendclass\n\nmodule tb;\n\tChildClass child;\n\tinitial begin\n\t\tchild = new();\n\t\t$display (\"data = 0x%0h\", child.getData());\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\ndata = 0xcafecafe\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-40",
                "num": 40,
                "title": "SystemVerilog Typedef Class",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "Sometimes the compiler errors out because of a class variable being used before the declaration of the class itself. For example, if two classes need a handle to each other, the classic puzzle of whether chicken or egg came first pops up. This is because the compiler processes the first class where it finds a reference to the second class being that which hasn't been declared yet.",
                        "code": "class ABC;\n\tDEF \tdef; \t// Error: DEF has not been declared yet\nendclass\n\nclass DEF;\n\tABC \tabc;\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Compilation Error",
                        "content": "In such cases you have to provide a forward declaration for the second class using typedef keyword. When the compiler see a typedef class, it will know that a definition for the class will be found later in the same file.",
                        "code": "file: typdef-class.sv\n   DEF def;\n     |\nncvlog: *E,NOIPRT (typedef-class.sv,2|5): Unrecognized declaration 'DEF' could be an unsupported keyword, a spelling mistake or missing instance port list '()' [SystemVerilog].",
                        "lang": "verilog"
                    },
                    {
                        "title": "Usage",
                        "content": "By using a typedef DEF is declared to be of type class which is later proved to be the same. It is not necessary to specify that DEF is of type class in the typedef statement.",
                        "code": "typedef class DEF;  // Inform compiler that DEF might be \n                    // used before actual class definition\n\nclass ABC;\n\tDEF \tdef;      // Okay: Compiler knows that DEF \n\t                // declaration will come later\nendclass\n\nclass DEF;\n\tABC \tabc;\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "typedef DEF; \t\t// Legal\n\nclass ABC;\n\tDEF def;\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Using typedef with parameterized classes",
                        "content": "A typedef can also be used on classes with a parameterized port list as shown below.",
                        "code": "typedef XYZ;\n\nmodule top;\n\tXYZ #(8'h3f, real)              xyz0;   // positional parameter override\n\tXYZ #(.ADDR(8'h60), .T(real))   xyz1;  \t// named parameter override\nendmodule\n\nclass XYZ #(parameter ADDR = 8'h00, type T = int);\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-41",
                "num": 41,
                "title": "SystemVerilog Const",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "To manage the mutability of class properties, SystemVerilog provides the const keyword, allowing properties to be made read-only. Due to the dynamic nature of class objects, this const declaration manifests in two distinct forms: global constant class properties and instance constant class properties.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Global Constant Class Properties",
                        "content": "A global constant class property is a read-only data member of a class that is assigned its value as part of its declaration. Similar to other const variables in SystemVerilog, its value cannot be changed anywhere else after this initial declaration. These constants are typically calculated after elaboration.\n\nA common practice is to declare global constants as static, which means all objects of that class will share the exact same constant value.",
                        "code": "class Jumbo_Packet;\n  // max_size is a global constant, same for all Jumbo_Packet instances\n  const int max_size = 5 * 10; \n\n  byte payload [];\n\n  function new(int size);\n    // payload size is limited by the global constant max_size\n    payload = new[ size > max_size ? max_size : size ];\n  endfunction\nendclass\n\nmodule tb;\n  Jumbo_Packet \tm_pkt;\n  \n  initial begin\n    m_pkt = new(100);\n    \n    $display(\"size=%d\", m_pkt.payload.size());\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "xcelium> run\nsize=         50\nxmsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Instance Constant Class Properties",
                        "content": "In contrast, an instance constant class property does not include an initial value in its declaration. Instead, it uses only the const qualifier. The critical characteristic of an instance constant is that it can be assigned a value once at run time, and this assignment must occur within the corresponding class constructor (new() method).\n\nUnlike global constants, instance constants cannot be declared static because doing so would prevent their assignment within the constructor, which is their sole point of initialization.",
                        "code": "class Big_Packet;\n  // size is an instance constant, determined at object creation\n  const int size; \n\n  byte payload [];\n\n  function new();\n    // The instance constant 'size' is assigned its value once in the constructor\n    size = $urandom % 10; \n    payload = new[ size ];\n  endfunction\nendclass\n\nmodule tb;\n  Big_Packet \tm_pkt;\n  \n  initial begin\n    m_pkt = new();    \n    \n    $display(\"size=%d\", m_pkt.payload.size());\n    \n    // This will result in a compilation error\n    // xmvlog: *E,CLSCON (testbench.sv,23|13): Instance constant class properties cannot be assigned outside of a constructor.\n    // m_pkt.size = 50;\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "xcelium> run\nsize=          4\nxmsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Difference between global and instance",
                        "content": "The fundamental difference between global and instance constant class properties lies in their initialization timing and flexibility:",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-42",
                "num": 42,
                "title": "SystemVerilog Randomization",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Why do we need randomness in the environment ?",
                        "content": "Directed tests take a long time to develop because you have to think about all possible scenarios to verify different features. There is a high possibility that you would miss some kind of corner cases. So we want to be able to generate random values that fall within a valid range and apply these random values to the signals we are interested in.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Why cannot we have any random value ?",
                        "content": "Simply running randomized tests do not make much sense because there will be many invalid cases. The way we create randomized tests with valid configurations is by the use of constraints. Such a verification style is commonly called Constrained Random Verification (CRV).",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "How is randomization done in SystemVerilog ?",
                        "content": "To enable randomization on a variable, you have to declare variables as either rand or randc. The difference between the two is that randc is cyclic in nature, and hence after randomization, the same value will be picked again only after all other values have been applied. If randomization succeeds, randomize() will return 1, else 0.\n\nWe can ensure that randomization has succeeded by using assert() function. This is will avoid running simulations junk values that we may not figure until we look closer.",
                        "code": "class myPacket;\n\n\t// Declare two variables for randomization\n\t// mode is of type rand and hence any random value between 0 and 3 can be picked each time\n\t// key is of type randc and hence random values between 0 and 7 can be picked and \n\t// values will be repeated only after all other values have been already taken\n\trand   bit [1:0]    mode;\n\trandc  bit [2:0]    key;\n\t\n\t// These statements are called constraints that help us to limit\n\t// the randomness within specified ranges\n\t// mode is constrained to have a value less than 3 (excluding)\n\t// key is constrained to have a value between 2 and 7 (excluding)\n\tconstraint c_mode1 { mode < 3; }\n\tconstraint c_key1  { key > 2;\n                         key < 7; }\n                         \n    // This is just a function to display current values of these variables\n    function display ();\n       $display (\"Mode : 0x%0h Key : 0x%0h\", mode, key);\n    endfunction\nendclass\n\nmodule tb_top;\n\n\t// Create a class object handle\n\tmyPacket pkt;\n\t\n\tinitial begin\n\t\n\t\t// Instantiate the object, and allocate memory to this variable\n\t\tpkt = new ();\n\t\t\n\t\t// Let's just randomize the class object 15 times and display all the\n\t\t// values randomization yielded each time\n\t\tfor (int i = 0; i < 15; i++) begin\n\t\t\n\t\t\t// By using assert(), we are ensuring that randomization is successful.\n\t\t\tassert (pkt.randomize ());\n\t\t\tpkt.display ();\n\t\tend\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Notice that randomization of Mode has resulted in repetitive values, while for Key, the values are cyclic in nature (3,4,5,6 is a complete set).\n\nClick to try this example in a simulator!",
                        "code": "Mode : 0x0 Key : 0x3\nMode : 0x0 Key : 0x5\nMode : 0x0 Key : 0x4\nMode : 0x0 Key : 0x6\nMode : 0x2 Key : 0x4\nMode : 0x1 Key : 0x6\nMode : 0x2 Key : 0x5\nMode : 0x0 Key : 0x3\nMode : 0x1 Key : 0x3\nMode : 0x2 Key : 0x6\nMode : 0x0 Key : 0x4\nMode : 0x0 Key : 0x5\nMode : 0x0 Key : 0x5\nMode : 0x1 Key : 0x6\nMode : 0x0 Key : 0x3",
                        "lang": "verilog"
                    },
                    {
                        "title": "What are the different constraint styles ?",
                        "content": "You can write constraints in a variety of ways. Constraints should not contradict each other, else randomization will fail at run-time.\n\nIn the next section, we'll look into more examples using SystemVerilog constraints.",
                        "code": "class myPacket;\n\trand   bit [7:0] mode;\n\trandc  bit [7:0] key;\n\tint  low, high;\n\t\n\tconstraint c_simple {  mode > 2; \n\t                       key == 3; }\n\t                       \n// This won't work, because it contradicts c_simple - Run-time error\n//\tconstraint c_key    {  key < 2; }\n\n// This won't work either, because of wrong syntax - you can't specify it this way\n//  constraint c_signs  {  0 < key < 4; }\n\n    constraint c_range  { key inside {[low:high]};\n    \t\t\t\t\tmode inside {[21:50]}; \n    \t\t\t\t\tmode inside {23, 24, 51}; }\n\n// Choose any value other than 2,3,4,5\t\t\t\t\t \n    constraint c_invert { !(key inside {[2:5]}); }\n    \n// Choose 10 or 22 ; with equal probability even if 10 and 20 appeared multiple times\n    constraint c_weight { mode inside {10, 10, 10, 22, 22};\n    \n// 4 has 50/130 chance, 43 has 10/130 chance, any value between 45:90 has 70/130 chance\n    constraint c_key_dist  { key  dist {4:=50, 43:=10, [45:90]:=70 };\n\n// 4 has 10/100 chance, 43 has 30/100 chance, any value between 45:47 has 20/100 chance\n    constraint c_mode_dist { mode dist {4:/10, 43:/30, [45:47]:/60 };\n    \n    function void pre_randomize ();\n       this.low = 1;\n       this.high = 2;\n    endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-43",
                "num": 43,
                "title": "SystemVerilog Random",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "Variables are declared random using the rand or randc keyword. They can be used on normal variables, arrays, dynamic arrays or queues.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "rand",
                        "content": "Let's take a simple class with a 3-bit variable called data that is randomized 10 times. The function randomize() is invoked as part of the class object to randomize all the rand type variables within that class object.",
                        "code": "class Packet;\n\trand int   \t\tcount;\n\trand byte  \t\tmaster [$];\n\trand bit [7:0]  data [];\n\t\n\t...\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Note that 0x2 and 0x1 are repeated multiple times.",
                        "code": "class Packet;\n\trand bit [2:0] data;\nendclass\n\nmodule tb;\n\tinitial begin\n\t\tPacket pkt = new ();\n\t\tfor (int i = 0 ; i < 10; i++) begin\n\t\t\tpkt.randomize ();\n\t\t\t$display (\"itr=%0d data=0x%0h\", i, pkt.data);\n\t\tend\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Variables declared as rand are standard random variables and their values are uniformly distributed over their range. For example, the variable data from the code snippet above is a 3-bit unsigned integer with a range from 0 -> 7. If this variable is randomized without any constraints, then any value in this range will be assigned to the variable with equal probability. On successive randomization attempts the variable could end up having the same value, but the probability is 1/8.",
                        "code": "run -all;\n# KERNEL: itr=0 data=0x7\n# KERNEL: itr=1 data=0x2\n# KERNEL: itr=2 data=0x2\n# KERNEL: itr=3 data=0x1\n# KERNEL: itr=4 data=0x2\n# KERNEL: itr=5 data=0x4\n# KERNEL: itr=6 data=0x0\n# KERNEL: itr=7 data=0x1\n# KERNEL: itr=8 data=0x5\n# KERNEL: itr=9 data=0x0\n# KERNEL: Simulation has finished. There are no more test vectors to simulate.",
                        "lang": "verilog"
                    },
                    {
                        "title": "randc",
                        "content": "Variables declared as randc are random-cyclic and hence cycle through all the values within their range before repeating any particular value. For example, the variable data from the code snippet above has a range from 0 -> 3. If this variable is randomized without any constraints, then any value in this range will be assigned to the variable, but for successive randomization the same value will repeat only after all the values have been assigned atleast once. randc variables are solved before other random variables.\n\nWe'll use the same example from above with a minor change - make data a randc variable.",
                        "code": "class Packet;\n\trandc int\t \t\tcount;\n\trandc byte \t \t\tmaster [$];\n\trandc bit [1:0] \tdata [];\n\t\n\t...\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Note that all the values in the range 0 -> 3'h7 is exhausted before a value is repeated.",
                        "code": "class Packet;\n\trandc bit [2:0] data;\nendclass\n\nmodule tb;\n\tinitial begin\n\t\tPacket pkt = new ();\n\t\tfor (int i = 0 ; i < 10; i++) begin\n\t\t\tpkt.randomize ();\n\t\t\t$display (\"itr=%0d data=0x%0h\", i, pkt.data);\n\t\tend\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "run -all;\n# KERNEL: itr=0 data=0x6\n# KERNEL: itr=1 data=0x3\n# KERNEL: itr=2 data=0x4\n# KERNEL: itr=3 data=0x7\n# KERNEL: itr=4 data=0x0\n# KERNEL: itr=5 data=0x1\n# KERNEL: itr=6 data=0x5\n# KERNEL: itr=7 data=0x2\n# KERNEL: itr=8 data=0x5              // Start of a new sequence\n# KERNEL: itr=9 data=0x0\n# KERNEL: Simulation has finished. There are no more test vectors to simulate.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-44",
                "num": 44,
                "title": "SystemVerilog pre_randomize & post_randomize",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "Variables that are declared as rand or randc inside a class are randomized using the built-in randomize() method. The method returns 1 if randomization was successful, and 0 if it failed. It can fail due to a variety of reasons like conflicting constraints, solver could not come up with a value that meets all constraints and such. Class objects are not randomized automatically, and hence we should always call the randomize() method to do randomization.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Syntax",
                        "content": "Let's look at a simple example to see how randomize() can be called.",
                        "code": "virtual function int randomize ();",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "class Beverage;\n  rand bit [7:0]\tbeer_id;\n  \n  constraint c_beer_id { beer_id >= 10;\n                        beer_id <= 50; };\n  \nendclass\n\nmodule tb;\n   Beverage b;\n    \n    initial begin\n      b = new ();\n      $display (\"Initial beerId = %0d\", b.beer_id);\n      if (b.randomize ()) \n      \t$display (\"Randomization successful !\");\n      $display (\"After randomization beerId = %0d\", b.beer_id);\n    end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "There are a couple of callback functions that are automatically called by randomize() before and after computing random values.",
                        "code": "run -all;\n# KERNEL: Initial beerId = 0\n# KERNEL: Randomization successful !\n# KERNEL: After randomization beerId = 25\n# KERNEL: Simulation has finished. There are no more test vectors to simulate.",
                        "lang": "verilog"
                    },
                    {
                        "title": "pre_randomize()",
                        "content": "This function is defined within the same class whose object will be randomized and called before randomization().\n\nWe'll add a pre_randomize() function to the example discussed earlier using the same testbench.",
                        "code": "function void pre_randomize();",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "class Beverage;\n  rand bit [7:0]\tbeer_id;\n  \n  constraint c_beer_id { beer_id >= 10;\n                        beer_id <= 50; };\n                        \n  function void pre_randomize ();\n  \t$display (\"This will be called just before randomization\");\n  endfunction\n  \nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "run -all;\n# KERNEL: Initial beerId = 0\n# KERNEL: This will be called just before randomization\n# KERNEL: Randomization successful !\n# KERNEL: After randomization beerId = 25\n# KERNEL: Simulation has finished. There are no more test vectors to simulate.",
                        "lang": "verilog"
                    },
                    {
                        "title": "post_randomize()",
                        "content": "This function is also defined within the same class whose object will be randomized and called after randomization().\n\nWe'll add a post_randomize() function to the example discussed earlier.",
                        "code": "function void post_randomize();",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "class Beverage;\n  rand bit [7:0]\tbeer_id;\n  \n  constraint c_beer_id { beer_id >= 10;\n                        beer_id <= 50; };\n                        \n  function void pre_randomize ();\n  \t$display (\"This will be called just before randomization\");\n  endfunction\n  \n  function void post_randomize ();\n  \t$display (\"This will be called just after randomization\");\n  endfunction\n  \nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "run -all;\n# KERNEL: Initial beerId = 0\n# KERNEL: This will be called just before randomization\n# KERNEL: This will be called just after randomization\n# KERNEL: Randomization successful !\n# KERNEL: After randomization beerId = 25\n# KERNEL: Simulation has finished. There are no more test vectors to simulate.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Override",
                        "content": "What we did before is to override existing empty pre_randomize() and post_randomize() methods with our own definition. This is a neat way to change randomization characteristics of an object. If the class is a derived class and no user-defined implementation of the two methods exist, then both methods will automatically call its super function.\n\nNote that pre_randomize() and post_randomize() are not virtual, but behave as virtual methods. In case you try to manually make them virtual, you'll probably hit a compiler error as shown next.",
                        "code": "class Beverage;\n  rand bit [7:0]\tbeer_id;\n  \n  virtual function void pre_randomize ();\n  \t$display (\"This will be called just before randomization\");\n  endfunction\n  \nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Also note the following points:",
                        "code": "virtual function void pre_randomize ();\n                                    |\nncvlog: *E,CLSMNV (testbench.sv,7|36): The pre_randomize() method cannot be declared virtual.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-45",
                "num": 45,
                "title": "SystemVerilog Disable Randomization",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "Randomization of variables in a class can be disabled using rand_mode method call.\n\nThis is very similar to the constraint_mode() method used to Disable Constraints. So a disabled random variable is treated the same as if they had not been declared rand or randc.\n\nrand_mode can be called both as a function and task. Current state of the variable will be returned if it is called as a function.",
                        "code": "// Disables randomization of variable [variable_name] inside [class_object] class\n\t[class_object].[variable_name].rand_mode (0);   \n\t\n\t// Enables randomization of variable [variable_name] inside [class_object] class\n\t[class_object].[variable_name].rand_mode (1);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Example",
                        "content": "Let's first try without rand_mode to compare with the one that disables constraints.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Without using rand_mode()",
                        "content": "By default, variables declared as rand and randc are enabled as visible in the example shown below.",
                        "code": "// Create a class that contains random variables\nclass Fruits;\n  rand bit [3:0] var1;\n  rand bit [1:0] var2;\nendclass\n\nmodule tb;\n  initial begin\n  \t// Instantiate an object of the class\n    Fruits f = new(); \n    \n    // Print values of those variables before randomization\n    $display (\"Before randomization var1=%0d var2=%0d\", f.var1, f.var2);\n    \n    // rand_mode() is called as a function which returns the state of the given variable\n    // If it is enabled, then print a statement\n    if (f.var1.rand_mode())\n    \tif (f.var2.rand_mode())\n      \t\t$display (\"Randomization of all variables enabled\");\n    \n    // Randomize the class object which in turn randomizes all internal variables\n    // declared using rand/randc keywords\n    f.randomize();\n    \n    // Print the value of these variables after randomization\n    $display (\"After randomization var1=%0d var2=%0d\", f.var1, f.var2);\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nBefore randomization var1=0 var2=0\nRandomization of all variables enabled\nAfter randomization var1=15 var2=3\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "After using rand_mode()",
                        "content": "Next, we'll disable var1 and see how it affects randomization of that variable.",
                        "code": "// Create a class that contains random variables\nclass Fruits;\n  rand bit [3:0] var1;\n  rand bit [1:0] var2;\nendclass\n\nmodule tb;\n  initial begin\n    Fruits f = new(); \n    $display (\"Before randomization var1=%0d var2=%0d\", f.var1, f.var2);\n    \n    // Turn off randomization for var1\n    f.var1.rand_mode (0);\n    \n    // Print if var1 has randomization enabled/disabled\n    if (f.var1.rand_mode())\n      $display (\"Randomization of var1 enabled\");\n    else\n      $display (\"Randomization of var1 disabled\");\n    \n    f.randomize();\n    \n    $display (\"After randomization var1=%0d var2=%0d\", f.var1, f.var2);\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!\n\nNext, we'll skip mentioning a variable name while invoking rand_mode().",
                        "code": "ncsim> run\nBefore randomization var1=0 var2=0\nRandomization of var1 disabled\nAfter randomization var1=0 var2=3\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "// Create a class that contains random variables\nclass Fruits;\n  rand bit [3:0] var1;\n  rand bit [1:0] var2;\nendclass\n\nmodule tb;\n\n  initial begin\n    Fruits f = new(); \n    $display (\"Before randomization var1=%0d var2=%0d\", f.var1, f.var2);\n    \n    // Turns off randomization for all variables\n    f.rand_mode (0);    \n    \n    if (! f.var1.rand_mode())\n      if (! f.var2.rand_mode())\n        $display (\"Randomization of all variables disabled\");\n    \n    f.randomize();\n    \n    $display (\"After randomization var1=%0d var2=%0d\", f.var1, f.var2);\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nBefore randomization var1=0 var2=0\nRandomization of all variables disabled\nAfter randomization var1=0 var2=0\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-46",
                "num": 46,
                "title": "SystemVerilog randcase",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "Sometimes we come across scenarios where we want the solver to randomly pick one out of the many statements. The keyword randcase introduces a case statement that randomly selects one of its branches. The case item expressions are positive integer values that represent the weights associated with each item. Probability of selecting an item is derived by the division of that item's weight divided by the sum of all weights.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Syntax",
                        "content": "",
                        "code": "randcase\n\titem \t: \tstatement;\n\t...\nendcase",
                        "lang": "verilog"
                    },
                    {
                        "title": "Example",
                        "content": "The sum of all weights is 9, and hence the probability of taking the first branch is 1/9 or 11.11%, the probability of taking the second branch is 5/9 or 55.56% and the probability of taking the last branch is 3/9 or 33.33%.\n\nNote that 5 appeared maximum number of times, while 1 appeared least number of times and 3 somewhere in between.",
                        "code": "module tb;\n\tinitial begin\n      for (int i = 0; i < 10; i++)\n      \trandcase\n        \t1 \t: \t$display (\"Wt 1\");\n      \t\t5 \t: \t$display (\"Wt 5\");\n      \t\t3 \t: \t$display (\"Wt 3\");\n      \tendcase\n    end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "If a branch specifies a zero weight, then that branch is not taken.",
                        "code": "ncsim> run\nWt 5\nWt 5\nWt 3\nWt 5\nWt 1\nWt 3\nWt 5\nWt 3\nWt 3\nWt 5\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "module tb;\n\tinitial begin\n      for (int i = 0; i < 10; i++)\n      \trandcase\n        \t0 \t: \t$display (\"Wt 0\");\n      \t\t5 \t: \t$display (\"Wt 5\");\n      \t\t3 \t: \t$display (\"Wt 3\");\n      \tendcase\n    end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "If all randcase_items specify zero weights, even though it doesn't make any sense to do so, then no branch will be taken and might result in a run-time warning.",
                        "code": "ncsim> run\nWt 5\nWt 5\nWt 3\nWt 5\nWt 5\nWt 3\nWt 5\nWt 3\nWt 3\nWt 5\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "module tb;\n\tinitial begin\n      for (int i = 0; i < 10; i++)\n      \trandcase\n        \t0 \t: \t$display (\"Wt 0.1\");\n      \t\t0 \t: \t$display (\"Wt 0.2\");\n      \t\t0 \t: \t$display (\"Wt 0.3\");\n      \tendcase\n    end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Each call to randcase retrieves one random number in the range of 0 to the sum of the weights. The weights are then selected in declaration order: small random numbers correspond to the first (top) weight statements.",
                        "code": "ncsim> run\nncsim: *W,RANDNOB: The sum of the weight expressions in the randcase statement is 0.\nNo randcase branch was taken.\n            File: ./testbench.sv, line = 4, pos = 14\n           Scope: tb.unmblk1\n            Time: 0 FS + 0\n\nncsim: *W,RANDNOB: The sum of the weight expressions in the randcase statement is 0.\nNo randcase branch was taken.\n            File: ./testbench.sv, line = 4, pos = 14\n           Scope: tb.unmblk1\n            Time: 0 FS + 0\n\nncsim: *W,RANDNOB: The sum of the weight expressions in the randcase statement is 0.\nNo randcase branch was taken.\n            File: ./testbench.sv, line = 4, pos = 14\n           Scope: tb.unmblk1\n            Time: 0 FS + 0\n            \n            ...",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-47",
                "num": 47,
                "title": "SystemVerilog Array Randomization in Class",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "SystemVerilog randomization also works on array data structures like static arrays, dynamic arrays and queues within classes. The variable has to be declared with type rand or randc to enable randomization of the variable.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Static Arrays",
                        "content": "Randomization of static arrays are straight-forward and can be done similar to any other type of SystemVerilog variable.",
                        "code": "class Packet;\n  rand bit [3:0] \ts_array [7]; \t// Declare a static array with \"rand\"\nendclass\n\nmodule tb;\n  Packet pkt;\n  \n  // Create a new packet, randomize it and display contents\n  initial begin\n    pkt = new();\n    pkt.randomize();\n    $display(\"queue = %p\", pkt.s_array);\n  end \nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nqueue = '{'hf, 'hf, 'h2, 'h9, 'he, 'h4, 'ha}\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Dynamic Arrays",
                        "content": "Dynamic arrays are arrays where the size is not pre-determined during array declaration. These arrays can have variable size as new members can be added to the array at any time.\n\nConsider the example below where we declare a dynamic array as indicated by the empty square brackets [] of type rand. A constraint is defined to limit the size of the dynamic array to be somewhere in between 5 and 8. Another constraint is defined to assign each element in the array with the value of its index.\n\nRandomization yields an empty array if the size is not constrainted -> applicable for dynamic arrays and queues\n\nNote that the array size was randomized to 9 (from constraint c_array), and the element at each index has a value of the index itself (from constraint c_val.",
                        "code": "class Packet;\n  rand bit [3:0] \td_array []; \t// Declare a dynamic array with \"rand\"\n  \n  // Constrain size of dynamic array between 5 and 10  \n  constraint c_array { d_array.size() > 5; d_array.size() < 10; }\n  \n  // Constrain value at each index to be equal to the index itself\n  constraint c_val   { foreach (d_array[i]) \n    \t\t\t\t\td_array[i] == i; \n                     }\n    \n  // Utility function to display dynamic array contents\n  function void display();\n    foreach (d_array[i]) \n      $display (\"d_array[%0d] = 0x%0h\", i, d_array[i]);\n  endfunction\nendclass\n\nmodule tb;\n  Packet pkt;\n  \n  // Create a new packet, randomize it and display contents\n  initial begin\n    pkt = new();\n    pkt.randomize();\n    pkt.display();\n  end \nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nd_array[0] = 0x0\nd_array[1] = 0x1\nd_array[2] = 0x2\nd_array[3] = 0x3\nd_array[4] = 0x4\nd_array[5] = 0x5\nd_array[6] = 0x6\nd_array[7] = 0x7\nd_array[8] = 0x8\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Queue randomization",
                        "content": "",
                        "code": "class Packet;\n  rand bit [3:0] \tqueue [$]; \t// Declare a queue with \"rand\"\n  \n  // Constrain size of queue between 5 and 10  \n  constraint c_array { queue.size() == 4; }\nendclass\n\nmodule tb;\n  Packet pkt;\n  \n  // Create a new packet, randomize it and display contents\n  initial begin\n    pkt = new();\n    pkt.randomize();\n    \n    // Tip : Use %p to display arrays\n    $display(\"queue = %p\", pkt.queue);\n  end \nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nqueue = '{'hf, 'hf, 'h2, 'h9}\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-48",
                "num": 48,
                "title": "SystemVerilog Constraints",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "When verifying a digital design, one of the core challenges is generating meaningful stimulus — inputs that exercise the design the way it will be used in the real world. Feeding in completely arbitrary, unconstrained random values might technically \"randomize\" your test, but it often results in a flood of illegal or uninteresting scenarios while missing the interesting corner cases that matter. SystemVerilog constraints solve exactly this problem: they let you define the boundaries of legal behavior and let the simulator's built-in solver figure out what values to generate within those boundaries.\n\nThis article covers what constraints are, why they exist, how they fit into the broader verification flow, and how to write your first constraint blocks — stepping beyond the absolute basics into patterns you'll actually use on real projects.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Direct Tests vs Randomized Tests",
                        "content": "Before diving into constraints themselves, it helps to understand the two broad strategies for writing verification tests.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "What are direct tests ?",
                        "content": "A direct test is fully hand-crafted. You explicitly set every signal to every value, in the exact sequence you want. For a simple UART transmitter, a direct test might look like:\n\nDirect tests are fast to write for well-understood scenarios and are great for checking a specific known bug. However, they do not scale. A moderately complex design might have hundreds of valid configurations. Writing a direct test for every combination is impractical, and it's very easy to miss something.",
                        "code": "// Direct test: manually drive a specific transaction\n\tpkt.addr = 8'h10;\n\tpkt.data = 8'hAB;\n\tpkt.cmd  = WRITE;",
                        "lang": "verilog"
                    },
                    {
                        "title": "What are randomized tests ?",
                        "content": "A randomized test relies on the simulator to generate values automatically. The test is run repeatedly with different seeds, so each run exercises a different slice of the design's behavior:\n\nThe key insight is that randomized tests, over many runs, will naturally exercise corner cases that a human engineer simply wouldn't think to write explicitly. This is why constrained-random verification is the dominant methodology in modern chip verification flows, including industry frameworks like UVM (Universal Verification Methodology).\n\nThe catch is the word constrained. Purely unconstrained randomization is noisy — you'll spend most of your simulation budget on invalid or uninteresting inputs. Constraints are how you guide the randomizer to stay in bounds.",
                        "code": "// Randomized test: let the solver pick the values\nassert(pkt.randomize());",
                        "lang": "verilog"
                    },
                    {
                        "title": "What is a Constraint ?",
                        "content": "A constraint is a declaration that narrows the space of valid random values for one or more variables. You define constraints inside a class, alongside the variables they govern. The SystemVerilog simulator includes a constraint solver — an engine that reads all active constraints and picks values that satisfy all of them simultaneously before assigning them to your variables.\n\nThe simplest form looks like this:\n\nA few things to notice here:",
                        "code": "class Packet;\n    rand bit [7:0] addr;\n    rand bit [7:0] data;\n\n    constraint addr_range { addr inside {[8'h00 : 8'h7F]}; }\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "The rand and randc Keywords",
                        "content": "SystemVerilog provides two modifiers for random variables:",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "rand -  Uniform Random",
                        "content": "Variables declared with rand are assigned uniformly random values within the constraint space on each call to randomize(). Each call is independent — you might get the same value twice in a row.",
                        "code": "rand bit [3:0] opcode;   // any value 0–15, independently each time",
                        "lang": "verilog"
                    },
                    {
                        "title": "randc — Random Cyclic",
                        "content": "Variables declared with randc cycle through all possible values before repeating any. Think of it like drawing cards from a shuffled deck without replacement — you won't see a repeat until every value has been generated once.\n\nrandc is particularly useful when you want guaranteed coverage of all values, not just statistically likely coverage. It's a subtle but important distinction when verifying things like register address spaces where every address must be hit.",
                        "code": "randc bit [3:0] opcode;  // cycles through 0–15 before repeating",
                        "lang": "verilog"
                    },
                    {
                        "title": "Writing a Constraint Block",
                        "content": "A constraint block has the following structure:\n\nMultiple expressions can live inside a single block, and they are treated as a logical AND — all must be satisfied:",
                        "code": "constraint <name> { <expression>; }",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "You can also write multiple separate constraint blocks. Keeping constraints logically separated makes them easier to enable, disable, and override in subclasses — which becomes important as your testbench grows.",
                        "code": "class BusTransaction;\n    rand bit [7:0]  addr;\n    rand bit [31:0] data;\n    rand bit [1:0]  burst_len;\n\n    // addr must be 4-byte aligned\n    constraint align_addr { addr[1:0] == 2'b00; }\n\n    // burst_len between 1 and 4\n    constraint valid_burst { burst_len >= 1; burst_len <= 4; }\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Calling randomize()",
                        "content": "Constraints only come into play when you call the randomize() method on a class object. This method invokes the solver, generates new values, and returns 1 (success) or 0 (failure — meaning no valid combination existed).\n\nAlways check the return value. A failing randomize() is a silent killer in testbenches — if you ignore the return value, your variables will hold stale data from the previous call and you'll have no idea.\n\nIf the solver cannot find any values that satisfy all constraints simultaneously, randomize() returns 0. This typically means your constraints are over-specified or contradictory. For example:",
                        "code": "Packet pkt = new();\n\n// Correct: assert will trigger a fatal if randomize fails\nassert(pkt.randomize()) else $fatal(1, \"Randomization failed!\");",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "The solver would fail immediately on this.",
                        "code": "constraint impossible { addr > 8'hFF; }  // addr is 8-bit, can never exceed 0xFF",
                        "lang": "verilog"
                    },
                    {
                        "title": "Constraint Expressions: A Quick Tour",
                        "content": "Here are the most common types of expressions you'll use within constraints:",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Relational Constraints",
                        "content": "",
                        "code": "constraint c1 { data < 32'h1000; }\nconstraint c2 { addr >= 8'h10; addr <= 8'hF0; }",
                        "lang": "verilog"
                    },
                    {
                        "title": "The inside Operator",
                        "content": "Restricts a variable to a set or range of values:\n\nYou can also negate it with !:",
                        "code": "constraint c3 { opcode inside {READ, WRITE, IDLE}; }\nconstraint c4 { size inside {[4:64]}; }",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "constraint c5 { !(opcode inside {RESERVED_1, RESERVED_2}); }",
                        "lang": "verilog"
                    },
                    {
                        "title": "Weighted Distributions with dist",
                        "content": "The dist operator controls the probability weighting of different values. This is useful when you want a biased distribution — for example, you want read transactions 70% of the time:\n\nUse := to assign equal weight to each listed item individually, or :/ to split a weight across a range:",
                        "code": "constraint cmd_dist {\n    cmd dist { READ := 70, WRITE := 30 };\n}",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "// Each value in 0–7 gets weight 10; value 8 gets weight 50 (by itself)\nconstraint priority_dist {\n    priority dist { [0:7] :/ 10, 8 := 50 };\n}",
                        "lang": "verilog"
                    },
                    {
                        "title": "Implication Constraints",
                        "content": "Sometimes a constraint only applies when another condition is met. The -> implication operator handles this:\n\nThis reads: \"if cmd is READ, then data must be 0. If cmd is WRITE, the constraint on data doesn't apply.\"",
                        "code": "constraint read_no_data {\n    (cmd == READ) -> (data == 0);\n}",
                        "lang": "verilog"
                    },
                    {
                        "title": "Enabling and Disabling Constraints",
                        "content": "Every named constraint block can be turned on or off at runtime using constraint_mode():\n\nThis is extremely useful when the same transaction class is reused across many test scenarios. You can write all possible constraints in the class and selectively activate them per test, rather than creating separate subclasses for every variation.",
                        "code": "pkt.addr_range.constraint_mode(0);  // disable\npkt.addr_range.constraint_mode(1);  // re-enable",
                        "lang": "verilog"
                    },
                    {
                        "title": "Inline Constraints with randomize() with",
                        "content": "Sometimes you want to add a one-off constraint for a single randomize() call without modifying the class. Use the with syntax:\n\nThe inline constraint is applied on top of all existing class constraints for that one call only. It's a clean way to specialize behavior in a specific test scenario without polluting the base class.",
                        "code": "assert(pkt.randomize() with { addr == 8'hFF; });",
                        "lang": "verilog"
                    },
                    {
                        "title": "Summary",
                        "content": "The subsequent articles in this series dive deeper into each of these features: constraint inheritance, solve...before ordering hints, foreach constraints for arrays, soft constraints, and more.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-49",
                "num": 49,
                "title": "SystemVerilog Constraint Blocks",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "Once you understand that constraints narrow down the space of legal random values, the natural next question is: where do constraints actually live, and how are they structured? The answer is constraint blocks — named, scoped declarations that sit inside (or alongside) a class and tell the solver what rules to follow.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Constraint Blocks are Class Members",
                        "content": "A constraint block is a first-class member of a SystemVerilog class — just like a variable, function, or task. It has a name, it belongs to a class, and it participates in inheritance. This is not just a cosmetic detail; understanding that constraints are members explains a lot of their behavior:\n\nThe constraint solver treats every active constraint block in a class as a single logical AND of all their expressions. There is no priority or ordering among blocks by default. If you have five constraint blocks, the solver must find values that satisfy all five simultaneously.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Syntax",
                        "content": "Each expression inside the braces is a condition the solver must satisfy. Multiple expressions within a single block are implicitly ANDed together. The block is terminated with a closing }, not with begin/end — constraint blocks use curly braces because they are declarative, not procedural.\n\nA few things to notice about the syntax:\n\nIt is not necessary to have a single constraint for every variable nor is it required to restrict a constraint block to have conditions pertaining only to a single variable.\n\nHowever you cannot have conflicting constraints spread out in multiple blocks, unless they are turned off using constraint_mode() method which we will see in Disable Constraints.",
                        "code": "constraint  <name_of_constraint> {  \t<expression 1>;\n\t\t\t\t\t\t\t\t\t\t\t\t// ...\n\t                                    \t\t<expression N>; \n\t\t\t\t\t\t\t\t\t\t\t}",
                        "lang": "verilog"
                    },
                    {
                        "title": "Simple Constraint Block",
                        "content": "Before getting into the details, here's the simplest possible constraint block to anchor the concept:\n\nThe constraint c_mode restricts mode to the range (2, 6], meaning values 3, 4, 5, and 6 are valid. The 4-bit variable can naturally hold 0–15, so without the constraint, 12 of those values would be legal. With it, only 4 are.\n\nRunning this in a testbench:",
                        "code": "// Let's declare a new class called \"Packet\"\" with a single variable that \n// can be randomized. We want this variable to have values between 2 and 6.\n// when randomized. This is achieved by a constraint called \"c_mode\" (you\n// can name it anything else).\nclass Packet;\n    rand bit [3:0] mode;\n\n    constraint c_mode {\n        mode > 2;\n        mode <= 6;\n    }\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "module tb;\n    Packet pkt = new();\n\n    initial begin\n        for (int i = 0; i < 5; i++) begin\n            assert(pkt.randomize()) else $fatal(1, \"Randomization failed\");\n            $display(\"mode = %0d\", pkt.mode);\n        end\n    end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!\n\nEvery value is within the legal range. Notice also the assert wrapping randomize() — this is important. If the solver cannot satisfy the constraints, randomize() returns 0 instead of 1. Wrapping it in an assertion catches that failure immediately rather than silently continuing with stale variable values.",
                        "code": "mode = 6\nmode = 6\nmode = 5\nmode = 4\nmode = 5",
                        "lang": "verilog"
                    },
                    {
                        "title": "Multiple Constraint Blocks",
                        "content": "There are some restraints on these blocks because of their declarative nature. Note that constraint blocks are enclosed within curly braces { } instead of the begin end keywords of procedural statements.\n\nKeeping constraints separated this way has real practical benefits:",
                        "code": "class BusTransaction;\n    rand bit [31:0] addr;\n    rand bit [7:0]  data;\n    rand bit [2:0]  burst_len;\n    rand bit        read_write;  // 0 = read, 1 = write\n\n    // Address must be 4-byte aligned\n    constraint c_addr_align {\n        addr[1:0] == 2'b00;\n    }\n\n    // Address must be within a valid MMIO window\n    constraint c_addr_range {\n        addr >= 32'hF000_0000;\n        addr <= 32'hFACE_FACE;\n    }\n\n    // Burst length is 1 to 4 beats\n    constraint c_burst {\n        burst_len >= 1;\n        burst_len <= 4;\n    }\n\n    // Read transactions carry no write data\n    constraint c_read_data {\n        (read_write == 0) -> (data == 8'h0);\n    }\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "How the Solver Handles Multiple Blocks",
                        "content": "All active constraint blocks in a class are solved simultaneously. The solver does not process them in order or give any one block higher priority than another. This means:",
                        "code": "constraint c_high { addr >= 32'hFACE_FFFF; }  // addr must be above facefffh\n\t\tconstraint c_low  { addr <= 32'hF000_0000; }  // addr must be below f0000000h\n\t\t// These two can never both be true at once → randomize() fails",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "constraint c_range  { addr >= 32'hF000_0000; addr <= 32'hFACE_FACE; }\n\t\tconstraint c_tighter { addr <= 32'hF400_0000; }\n\t\t// Valid: the solver picks from [F000_0000, F400_0000], which is a subset of the first range",
                        "lang": "verilog"
                    },
                    {
                        "title": "External Constraint Blocks",
                        "content": "So far, all constraints have been defined inside the class body. SystemVerilog also allows you to define constraint blocks outside the class, after the class declaration ends. These are called external constraints.\n\nThe mechanism is analogous to how functions can be declared with a prototype inside a class but defined externally using the scope resolution operator ::.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Why Use External Constraints ?",
                        "content": "In large verification environments, you often want to keep the class declaration compact and push the actual constraint logic into a separate file or a separate section of the code. This is particularly common in UVM-based testbenches, where a base sequence class might declare constraint prototypes, and different test environments fill in the actual expressions.\n\nExternal constraints also let you modify the constraint logic without editing the class body itself — useful when the class is owned by a shared library you don't want to touch.\n\nThere are two forms of external constraint declaration.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Implicit External Constraint",
                        "content": "It is declared as an empty (no extern keyword) constraint inside the class:\n\nAn implicit prototype without a matching external definition is not a compile error, but most simulators will issue a warning, and the constraint simply has no effect if not defined later.",
                        "code": "class ABC;\n    rand bit [3:0] mode;\n    constraint c_implicit;  // No \"extern\" keyword — implicit prototype\nendclass\n\n// External definition using :: operator\nconstraint ABC::c_implicit { mode > 2; }",
                        "lang": "verilog"
                    },
                    {
                        "title": "Explicit External Constraint",
                        "content": "It is declared with the extern keyword inside the class:\n\nWith extern, failing to provide the external definition is a compile error. The extern keyword is essentially a promise to the compiler that the definition will exist somewhere — it's a stricter form that catches missing definitions early.",
                        "code": "class ABC;\n    rand bit [3:0] mode;\n    extern constraint c_explicit;  // \"extern\" keyword — explicit prototype\nendclass\n\n// External definition — required if \"extern\" was used\nconstraint ABC::c_explicit { mode <= 6; }",
                        "lang": "verilog"
                    },
                    {
                        "title": "External Constraint Example",
                        "content": "External constraints can be mentioned in either implicit or explicit form. It is an error if an explicit constraint is used and no corresponding constraint block is provided outside the class body. But there will be no error for an implicit constraint, but the simulator may issue a warning.",
                        "code": "// Let's declare a new class called \"ABC\" with a single variable that \n// can be randomized. We want this variable to have values between 2 and 6.\n// when randomized. This is achieved by a constraint called \"c_mode\" (you\n// can name it anything else).\nclass ABC;\n    rand bit [3:0] mode;\n\n    constraint c_implicit;              // Implicit: won't error if body is missing\n    extern constraint c_explicit;       // Explicit: will error if body is missing\nendclass\n\n// This is an external constraint because it is outside \n// the class-endclass body of the class. The constraint \n// is reference using ::\nconstraint ABC::c_implicit { mode > 2; }\nconstraint ABC::c_explicit { mode <= 6; }\n\nmodule tb;\n\tABC abc;\n\t\n\tinitial begin\n      \t// Create a new object with this handle\n\t\tabc = new();\n\t\t\n      \t// In a for loop, lets randomize this class handle\n      \t// 5 times and see how the value of mode changes\n        // A class can be randomized by calling its \"randomize()\"\n\t\tfor (int i = 0; i < 5; i++) begin\n\t\t\tabc.randomize();\n          $display (\"mode = 0x%0h\", abc.mode);\n\t\tend\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!\n\nBoth constraints apply simultaneously — mode is always greater than 2 and at most 6, regardless of whether the blocks were defined inside or outside the class.\n\nThe following are not allowed:",
                        "code": "mode = 0x3\nmode = 0x5\nmode = 0x6\nmode = 0x4\nmode = 0x6",
                        "lang": "verilog"
                    },
                    {
                        "title": "Constraint Blocks and Inheritance",
                        "content": "Because constraints are class members, they participate in SystemVerilog's inheritance model. A subclass inherits all constraint blocks from its parent, and can:\n\nIn RestrictedTransaction, the parent's c_addr is replaced entirely. This is a powerful pattern for building test-specific transaction types without duplicating code — define the general structure in the base class and specialize it in subclasses.",
                        "code": "class BaseTransaction;\n    rand bit [7:0] addr;\n\n    constraint c_addr { addr inside {[8'h00 : 8'hFF]}; }  // full range\nendclass\n\nclass RestrictedTransaction extends BaseTransaction;\n    // Override: only allow the lower quarter of the address space\n    constraint c_addr { addr inside {[8'h00 : 8'h3F]}; }\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Common Beginner Mistakes",
                        "content": "Mistake #1: Duplicate constraint names in the same class.\n\nTwo constraint blocks with the same name in the same class body is a compile error. If you want to group related expressions, put them all in one block or use different names.\n\nMistake #2: Assuming constraint order matters\n\nThe solver treats all active blocks as one simultaneous system of equations. Writing block A before block B in the source does not mean A is solved first. If you need ordering hints (e.g., solve one variable before using its value to constrain another), that is handled by the solve...before construct, which is a separate topic.\n\nMistake #3: Ignoring the randomize() return value\n\nA solver failure caused by conflicting constraints returns 0 silently. If you don't check the return value, your test will continue with whatever values the variables last held — which could be zero, or leftover values from a previous call — and you'll spend hours debugging a test that was never exercising what you thought it was.\n\nMistake #4: Leaving constraint blocks empty unintentionally\n\nAn empty constraint block is valid but has no effect. If you declare one as a placeholder and forget to fill it in, the solver won't warn you — it just quietly does nothing for that block.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Summary",
                        "content": "You have learnt that:",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-50",
                "num": 50,
                "title": "SystemVerilog Inline Constraints",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "Consider that a class already has well written constraints and there is a need to randomize the class variables with a set of different constraints decided by the user. By using the with construct, users can declare in-line constraints at the point where the randomize() method is called. These additional constraints will be considered along with the object's original constraints by the solver.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Example",
                        "content": "Notice that inline constraint has been applied here and hence the randomized id is 10.",
                        "code": "class Item;\n  rand bit [7:0] id;\n  \n  constraint c_id { id < 25; }\n  \nendclass\n\nmodule tb;\n  \n  initial begin\n    Item itm = new ();\n    itm.randomize() with { id == 10; }; \t\t// In-line constraint using with construct\n    $display (\"Item Id = %0d\", itm.id);\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "If the original constraint c_id is fixed to 25 as follows and we provide a conflicting in-line value, then the randomization will fail.",
                        "code": "run -all;\n# KERNEL: Item Id = 10\n# KERNEL: Simulation has finished. There are no more test vectors to simulate.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "class Item;\n  rand bit [7:0] id;\n  \n  constraint c_id { id == 25; }\nendclass\n\nmodule tb;\n  initial begin\n    Item itm = new ();\n    if (! itm.randomize() with { id < 10; })\n    \t$display (\"Randomization failed\");\n    $display (\"Item Id = %0d\", itm.id);\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "For the next case, we'll see what happens when the original constraint is fixed and the in-line value also tries to fix the variable to another value.",
                        "code": "ncsim> run\n    if (! itm.randomize() with { id < 10; })\n                      |\nncsim: *W,SVRNDF (./testbench.sv,10|22): The randomize method call failed.\nObserved simulation time : 0 FS + 0\nncsim: *W,RNDOCS: These constraints contribute to the set of conflicting constraints:\n\n  constraint c_id { id == 25; }; (./testbench.sv,4)\n    if (! itm.randomize() with { id < 10; }) (./testbench.sv,10)\nncsim: *W,RNDOCS: These variables contribute to the set of conflicting constraints:\n\nrand variables:\n       id [./testbench.sv, 2]\n\nRandomization failed\nItem Id = 0\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "...\n\tif (! itm.randomize() with { id == 10; })\n\t...",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "The takeaway here is that constraints provided should not conflict with each other and in-line method of providing constraints does not override but instead is also considered along with the original by the solver.",
                        "code": "ncsim> run\n    if (! itm.randomize() with { id == 10; })\n                      |\nncsim: *W,SVRNDF (./testbench.sv,10|22): The randomize method call failed.\nObserved simulation time : 0 FS + 0\nncsim: *W,RNDOCS: These constraints contribute to the set of conflicting constraints:\n\n  constraint c_id { id == 25; }; (./testbench.sv,4)\n    if (! itm.randomize() with { id == 10; }) (./testbench.sv,10)\nncsim: *W,RNDOCS: These variables contribute to the set of conflicting constraints:\n\nrand variables:\n       id [./testbench.sv, 2]\n\nRandomization failed\nItem Id = 0\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-51",
                "num": 51,
                "title": "SystemVerilog Constraint 'inside'",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "The inside keyword in SystemVerilog allows to check if a given value lies within the range specified using the inside phrase. This can also be used inside if and other conditional statements in addition to being used as a constraint.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Syntax",
                        "content": "For example,",
                        "code": "<variable> inside {<values or range>}\n\t\n\t// Inverted \"inside\"\n\t!(<variable> inside {<values or range>})",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "m_var inside {4, 7, 9} \t\t// Check if m_var is either 4,7 or 9\n\tm_var inside {[10:100]} \t// Check if m_var is between 10 and 100 inclusive",
                        "lang": "verilog"
                    },
                    {
                        "title": "When used in conditional statements",
                        "content": "In the following example, inside operator is used both in an if else statement and a ternary operator. flag gets the value 1 if the randomized value of m_data lies within 4 to 9, including 4 and 9. If not, flag gets 0.\n\nSimilarly, if else block uses the same operator and prints a display message.",
                        "code": "module tb;\n\tbit [3:0] \tm_data;\n\tbit \t\tflag;\n\t\n\tinitial begin\n\t\tfor (int i = 0; i < 10; i++) begin\n\t\t\tm_data = $random;\n\t\t\t\n\t\t\t// Used in a ternary operator\n\t\t\tflag = m_data inside {[4:9]} ? 1 : 0;\n\t\t\t\n\t\t\t// Used with \"if-else\" operators\n\t\t\tif (m_data inside {[4:9]})\n\t\t\t\t$display (\"m_data=%0d INSIDE [4:9], flag=%0d\", m_data, flag);\n\t\t\telse \n\t\t\t\t$display (\"m_data=%0d outside [4:9], flag=%0d\", m_data, flag);\n\t\t\t\n\t\t\t\n\t\tend\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nm_data=4 INSIDE [4:9], flag=1\nm_data=1 outside [4:9], flag=0\nm_data=9 INSIDE [4:9], flag=1\nm_data=3 outside [4:9], flag=0\nm_data=13 outside [4:9], flag=0\nm_data=13 outside [4:9], flag=0\nm_data=5 INSIDE [4:9], flag=1\nm_data=2 outside [4:9], flag=0\nm_data=1 outside [4:9], flag=0\nm_data=13 outside [4:9], flag=0\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Used in constraints",
                        "content": "The inside operator is quite useful in constraints and makes code shorter and more readable.\n\nSee that all values of m_var lies inside the given range.",
                        "code": "class ABC;\n\trand bit [3:0] \tm_var;\n\t\n\t// Constrain m_var to be either 3,4,5,6 or 7\n\tconstraint c_var { m_var inside {[3:7]}; }\nendclass\n\nmodule tb;\n\tinitial begin\n\t\tABC abc = new();\n\t\trepeat (5) begin\n\t\t\tabc.randomize();\n\t\t\t$display(\"abc.m_var = %0d\", abc.m_var);\n\t\tend\n\t\t\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nabc.m_var = 7\nabc.m_var = 6\nabc.m_var = 6\nabc.m_var = 3\nabc.m_var = 4\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Inverted inside",
                        "content": "The opposite of what the inside operator does can be achieved by placing a not symbol ! before it. This is applicable for both constraints and conditional statements. The following example is the same as we saw before except that its constraint has been tweaked to reflect an inverted inside statement.\n\nSee that all values of m_var lies inside the given range.",
                        "code": "class ABC;\n\trand bit [3:0] \tm_var;\n\t\n\t// Inverted inside: Constrain m_var to be outside 3 to 7\n\tconstraint c_var { !(m_var inside {[3:7]}); }\nendclass\n\nmodule tb;\n\tinitial begin\n\t\tABC abc = new();\n\t\trepeat (5) begin\n\t\t\tabc.randomize();\n\t\t\t$display(\"abc.m_var = %0d\", abc.m_var);\n\t\tend\n\t\t\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nabc.m_var = 1\nabc.m_var = 12\nabc.m_var = 0\nabc.m_var = 14\nabc.m_var = 10\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Practical Example",
                        "content": "Say we have a memory located between the address range 0x4000 and 0x5FFF, which is partitioned into two. The first part is used to store instructions and the second part to store data. Say we want to randomize the address for data such that the address falls within the data part of memory, we can easily use the inside operator.",
                        "code": "class Data;\n\trand bit [15:0] \tm_addr;\n\t\n\tconstraint c_addr \t{ m_addr inside {[16'h4000:16'h4fff]}; }\nendclass\n\nmodule tb;\n\tinitial begin\n\t\tData data = new();\n\t\trepeat (5) begin\n\t\t\tdata.randomize();\n\t\t\t$display (\"addr = 0x%0h\", data.m_addr);\n\t\tend\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "ncsim> run\naddr = 0x48ef\naddr = 0x463f\naddr = 0x4612\naddr = 0x4249\naddr = 0x4cee\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-52",
                "num": 52,
                "title": "SystemVerilog Constraint Examples",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "Now let's take a look at some of the common ways of writing constraint expressions inside a constraint block.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Simple expressions",
                        "content": "Note that there can be only one relational operator < <= > >= in an expression.\n\nYou cannot make assignments inside a constraint block as it only contains expressions. Instead you have to use an equivalence operator == as shown for the constraint named my_min in the example above where min will get a value of 16 and all other variables will be randomized. This is one way of fixing a particular value to a variable even if the solver attempts to randomize it.",
                        "code": "class MyClass;\n\t\trand bit [7:0] min, typ, max;\n\t\t\n\t\t// Valid expression\n\t\tconstraint my_range { 0 < min;\n\t\t                      typ < max;\n\t\t                      typ > min; \n\t\t                      max < 128; }\n\t\t                      \n\t\t// Use of multiple operators in a single expression is not allowed\n\t\tconstraint my_error { 0 < min < typ < max < 128; }\n\t\t\n\t\t// This will set min to 16 and randomize all others\n\t\tconstraint my_min {  min == 16; }\n\t\t\n\t\t// This will set max to a random value greater than or equal to 64\n\t\tconstraint my_max {  max >= 64; }\n\tendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "You can also use a little more complex expression like the one shown above where min represents a variable to store Fahrenheit and low is a variable within the class object temp that holds temperature in Celsius.",
                        "code": "constraint my_min { min == temp.low * 9/5 + 32; }",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Note that fixed variable is fixed to the value 5 while other variables have been randomized with values that meet all constraints.",
                        "code": "class myClass;\n      rand bit [3:0] min, typ, max;\n      rand bit [3:0] fixed;\n      \n      constraint my_range { 3 < min;\n                            typ < max;\n                            typ > min;\n                            max < 14; }\n      \n      constraint c_fixed { fixed == 5; }\n      \n      function string display ();\n        return $sformatf (\"min=%0d typ=%0d max=%0d fixed=%d\", min, typ, max, fixed);\n      endfunction\n      \n\tendclass\n\t\n    module tb;\n       initial begin\n          for (int i = 0; i < 10; i++) begin\n             myClass cls = new ();\n             cls.randomize();\n             $display (\"itr=%0d %s\", i, cls.display());\n          end\n       end\n    endmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "run -all;\n# KERNEL: itr=0 min=7 typ=9 max=12 fixed= 5\n# KERNEL: itr=1 min=4 typ=9 max=12 fixed= 5\n# KERNEL: itr=2 min=7 typ=10 max=13 fixed= 5\n# KERNEL: itr=3 min=4 typ=6 max=11 fixed= 5\n# KERNEL: itr=4 min=8 typ=12 max=13 fixed= 5\n# KERNEL: itr=5 min=5 typ=6 max=13 fixed= 5\n# KERNEL: itr=6 min=6 typ=9 max=13 fixed= 5\n# KERNEL: itr=7 min=10 typ=12 max=13 fixed= 5\n# KERNEL: itr=8 min=5 typ=11 max=13 fixed= 5\n# KERNEL: itr=9 min=6 typ=9 max=11 fixed= 5\n# KERNEL: Simulation has finished. There are no more test vectors to simulate.\nexit",
                        "lang": "verilog"
                    },
                    {
                        "title": "inside operator",
                        "content": "You can specify a lower and an upper limit as an alternative to the expression shown below using an inside operator.\n\nNote that an inside construct includes both lower and upper limits. SystemVerilog gathers all the values and chooses between the values with equal probability unless there are other constraints on the variable.",
                        "code": "constraint my_range { typ > 32;\n\t                      typ < 256; }\n\t                      \n\t// typ >= 32 and typ <= 256 \n\tconstraint new_range { typ inside {[32:256]}; } \n\t\n\t// Choose from the following values\n\tconstraint spec_range { type inside {32, 64, 128}; }",
                        "lang": "verilog"
                    },
                    {
                        "title": "Inverted inside operator",
                        "content": "If you want any value outside a specific range, an inverted constraint can be written as follows. This will produce a random value from 0 to 31 since typ is an 8-bit variable and the upper limit already covers the maximum value it can hold.\n\nNote that repeated randomization gave all values except the ones that fall within the range 3 through 6.",
                        "code": "rand bit [2:0] typ;\n\tconstraint inv_range { ! (typ inside {[3:6]}); }",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "run -all;\n# KERNEL: itr=0 typ=7\n# KERNEL: itr=1 typ=0\n# KERNEL: itr=2 typ=7\n# KERNEL: itr=3 typ=0\n# KERNEL: itr=4 typ=0\n# KERNEL: itr=5 typ=0\n# KERNEL: itr=6 typ=7\n# KERNEL: itr=7 typ=1\n# KERNEL: itr=8 typ=1\n# KERNEL: itr=9 typ=7\n# KERNEL: Simulation has finished. There are no more test vectors to simulate.\nexit",
                        "lang": "verilog"
                    },
                    {
                        "title": "Weighted distributions",
                        "content": "The dist operator allows you to create weighted distributions so that some values are chosen more often than others. The := operator specifies that the weight is the same for every specified value in the range while the :/ operator specifies that the weight is to be equally divided between all the values.\n\nIn dist1, the weight of 0 is 20, 6 is 40, and 7 is 10 while 1 through 5 is 50, for a total of 320. Hence the probability of choosing 0 is 20/320 and the probability of choosing a value between 1 and 5 is 50/320. Let's look at a simple example.",
                        "code": "rand bit [2:0] typ;\n\tconstraint dist1 \t{  typ dist { 0:=20, [1:5]:=50, 6:=40, 7:=10}; }",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "In the log shown below, note that 1 through 5 has appeared more than 0, 6 or 7 because they have a higher weight and are chosen more often.",
                        "code": "class myClass;\n\t\trand bit [2:0] typ;\n\t\tconstraint dist1 \t{  typ dist { 0:=20, [1:5]:=50, 6:=40, 7:=10}; }\n\tendclass\n\t\n\tmodule tb;\n\t\tinitial begin\n\t\t\tfor (int i = 0; i < 10; i++) begin\n\t\t\t\tmyClass cls = new ();\n\t\t\t\tcls.randomize();\n\t\t\t\t$display (\"itr=%0d typ=%0d\", i, cls.typ);\n\t\t\tend\n\t\tend\n\tendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "run -all;\n# KERNEL: itr=0 typ=5\n# KERNEL: itr=1 typ=1\n# KERNEL: itr=2 typ=6\n# KERNEL: itr=3 typ=3\n# KERNEL: itr=4 typ=2\n# KERNEL: itr=5 typ=3\n# KERNEL: itr=6 typ=0\n# KERNEL: itr=7 typ=5\n# KERNEL: itr=8 typ=1\n# KERNEL: itr=9 typ=4\n# KERNEL: Simulation has finished. There are no more test vectors to simulate.\nexit",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "In dist2, the weight of 0 is 20, 6 is 10 and 7 is 20 while 1 through 5 share a total weight of 50, thus have 10 each. Hence the probability of choosing 0 is 20/100, and the probability of choosing a value between 1 and 5 is 10/100. Let's look at a simple example.",
                        "code": "rand bit [2:0] typ;\n\tconstraint dist2  \t{  typ dist { 0:/20, [1:5]:/50, 6:/10, 7:/20}; }",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "In the log shown below, note that 6 has appeared more than the others because it has the highest weight.",
                        "code": "class myClass;\n\t\trand bit [2:0] typ;\n\t\tconstraint dist2 \t{  typ dist { 0:/20, [1:5]:/50, 6:/40, 7:/10}; }\n\tendclass\n\t\n\tmodule tb;\n\t\tinitial begin\n\t\t\tfor (int i = 0; i < 10; i++) begin\n\t\t\t\tmyClass cls = new ();\n\t\t\t\tcls.randomize();\n\t\t\t\t$display (\"itr=%0d typ=%0d\", i, cls.typ);\n\t\t\tend\n\t\tend\n\tendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "run -all;\n# KERNEL: itr=0 typ=5\n# KERNEL: itr=1 typ=6\n# KERNEL: itr=2 typ=4\n# KERNEL: itr=3 typ=6\n# KERNEL: itr=4 typ=6\n# KERNEL: itr=5 typ=4\n# KERNEL: itr=6 typ=2\n# KERNEL: itr=7 typ=3\n# KERNEL: itr=8 typ=4\n# KERNEL: itr=9 typ=6\n# KERNEL: Simulation has finished. There are no more test vectors to simulate.\nexit",
                        "lang": "verilog"
                    },
                    {
                        "title": "Bidirectional constraints",
                        "content": "Constraint blocks are not executed from top to bottom like procedural code, but are all active at the same time. Let's see this with another example.\n\nNote that constraints c1 and c2 limits the values to 10 and 11.",
                        "code": "class myClass;\n\t\trand bit [3:0] val;\n\t\tconstraint  c1 { val > 3;\n\t\t                 val < 12; }\n\t\t                 \n\t\tconstraint  c2  {val >= 10; }\n\tendclass\n\t\n\tmodule tb;\n\t\tinitial begin\n\t\t\tfor (int i = 0; i < 10; i++) begin\n\t\t\t\tmyClass cls = new ();\n\t\t\t\tcls.randomize();\n\t\t\t\t$display (\"itr=%0d typ=%0d\", i, cls.val);\n\t\t\tend\n\t\tend\n\tendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "run -all;\n# KERNEL: itr=0 typ=11\n# KERNEL: itr=1 typ=11\n# KERNEL: itr=2 typ=11\n# KERNEL: itr=3 typ=10\n# KERNEL: itr=4 typ=11\n# KERNEL: itr=5 typ=10\n# KERNEL: itr=6 typ=10\n# KERNEL: itr=7 typ=10\n# KERNEL: itr=8 typ=10\n# KERNEL: itr=9 typ=10\n# KERNEL: Simulation has finished. There are no more test vectors to simulate.\nexit",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-53",
                "num": 53,
                "title": "SystemVerilog Implication Constraint",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "SystemVerilog gives us two constructs to declare conditional relations - implication and if else.\n\nThe following code snippet shows both styles\n\nNote that mode need not be 2 for all values of len greater than 10. However, the constraint says that len should be greater than 10 if mode is 2.",
                        "code": "// Implication operator \"->\" tells that len should be \n// greater than 10 when mode is equal to 2\nconstraint c_mode {  mode == 2 -> len > 10; }\n\n// Same thing can be achieved with \"if-else\" construct\nconstraint c_mode { if (mode == 2) \n\t\t\t\t\t\tlen > 10; \n\t\t\t\t  }",
                        "lang": "verilog"
                    },
                    {
                        "title": "Example",
                        "content": "The simulation results show that mode need not have a value of 2 when len is greater than 10.",
                        "code": "class ABC;\n  rand bit [2:0] mode;\n  rand bit [3:0] len;\n  \n  constraint c_mode { mode == 2 -> len > 10; }\nendclass\n\nmodule tb;\n  initial begin\n    ABC abc = new;\n    for(int i = 0; i < 10; i++) begin\n      abc.randomize();\n      $display (\"mode=%0d len=%0d\", abc.mode, abc.len);\n    end\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nmode=1 len=11\nmode=6 len=3\nmode=3 len=9\nmode=7 len=11\nmode=3 len=15\nmode=2 len=12\nmode=3 len=6\nmode=2 len=12\nmode=4 len=9\nmode=7 len=13\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Implication Operator",
                        "content": "An implication operator -> can be used in a constraint expression to show conditional relationship between two variables.\n\nIf the expression on the LHS of -> operator is true, then the constraint expression on the RHS will be satisfied. If the LHS is not true, then RHS constraint expression is not considered.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Example",
                        "content": "Note that mod_en is 1 whenever the LHS expression for mode is inside 4'h5 and 4'hB. However, mod_en can be randomized to any value if the LHS evaluates to false.",
                        "code": "class ABC;\n  rand bit [3:0] mode;\n  rand bit \t\t mod_en;\n  \n  // If 5 <= mode <= 11, mod_en should be 1\n  constraint c_mode {\tmode inside {[4'h5:4'hB]} -> mod_en == 1; }\n    \t\t\t\nendclass\n\nmodule tb;\n  initial begin\n    ABC abc = new;\n    for (int i = 0; i < 10; i++) begin\n    \tabc.randomize();\n      $display (\"mode=0x%0h mod_en=0x%0h\", abc.mode, abc.mod_en);\n    end\n  end\n  \nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nmode=0xf mod_en=0x1\nmode=0x9 mod_en=0x1\nmode=0x3 mod_en=0x1\nmode=0xe mod_en=0x1\nmode=0x1 mod_en=0x1\nmode=0x0 mod_en=0x0\nmode=0x1 mod_en=0x0\nmode=0xe mod_en=0x0\nmode=0x5 mod_en=0x1\nmode=0x0 mod_en=0x0\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "if-else Constraint",
                        "content": "The if-else constraint provides an option to specify the else part of a conditional expression. If the conditional expression is true, then all of the constraints specified in the the first constraint set shall be satisfied. Otherwise, all of the constraints in the optional else part will be satisfied.\n\nNested if-else blocks are allowed and multiple constraint statements require them to be enclosed in curly braces { }. This is similar to the begin-end used in a procedural block like initial and always. However, constraints are classified as declarative code and hence require curly braces instead.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Example",
                        "content": "In the code shown below, the first if block checks whether mode is inside 5 and 11. If this condition is true, then mod_en should be constrained to 1 and if it is false, then the else part is executed. There is another if-else block within the else part which checks if mode is 1 and tries to satisfy the constraints mentioned in the appropriate parts.",
                        "code": "class ABC;\n  rand bit [3:0] mode;\n  rand bit \t\t mod_en;\n  \n  constraint c_mode {\t\n    \t\t\t\t\t// If 5 <= mode <= 11, then constrain mod_en to 1\n    \t\t\t\t\t// This part only has 1 statement and hence do not\n    \t\t\t\t\t// require curly braces {}\n    \t\t\t\t\tif (mode inside {[4'h5:4'hB]}) \n  \t\t\t\t\t\t\tmod_en == 1;\n    \n    \t\t\t\t\t// If the above condition is false, then do the following\n   \t\t\t\t\t\telse {\n                          // If mode is constrained to be 1, then mod_en should be 1\n                          if ( mode == 4'h1) {\n      \t\t\t\t\t\t\tmod_en == 1;\n                            // If mode is any other value than 1 and not within\n                            // 5:11, then mod_en should be constrained to 0\n    \t\t\t\t\t\t} else {\n      \t\t\t\t\t\t\tmod_en == 0;\n    \t\t\t\t\t\t}\n  \t\t\t\t\t\t}\n                    }\n    \t\t\t\nendclass\n\nmodule tb;\n  initial begin\n    ABC abc = new;\n    for (int i = 0; i < 10; i++) begin\n    \tabc.randomize();\n      $display (\"mode=0x%0h mod_en=0x%0h\", abc.mode, abc.mod_en);\n    end\n  end\n  \nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nmode=0xb mod_en=0x1\nmode=0x1 mod_en=0x1\nmode=0x6 mod_en=0x1\nmode=0x7 mod_en=0x1\nmode=0x2 mod_en=0x0\nmode=0x2 mod_en=0x0\nmode=0x2 mod_en=0x0\nmode=0x9 mod_en=0x1\nmode=0x7 mod_en=0x1\nmode=0x8 mod_en=0x1\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-54",
                "num": 54,
                "title": "SystemVerilog solve before",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "The SystemVerilog constraint solver by default tries to give a uniform distribution of random values. Hence the probability of any legal value of being a solution to a given constraint is the same.\n\nBut the use of solve - before can change the distribution of probability such that certain corner cases can be forced to be chosen more often than others. We'll see the effect of solve - before by comparing an example with and without the use of this construct.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Random Distribution Example",
                        "content": "For example, consider the example below where a 3-bit random variable b can have 8 legal values ( 23 combinations). The probability of b getting a value 0 is the same as that of all other possible values.\n\nNote that even though there are repeated values in the simulation output shown below, it only means that a previous randomization had no effect on the current iteration.  Hence the randomizer is free to pick any of the 8 values regardless of what the previous value was.",
                        "code": "class ABC;\n\trand bit [2:0]  b;\nendclass\n\nmodule tb;\n\tinitial begin\n\t\tABC abc = new;\n\t\tfor (int i = 0; i < 10; i++) begin\n\t\t\tabc.randomize();\n\t\t\t$display (\"b=%0d\", abc.b);\n\t\tend\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "However, the probability that any of the 8 legal values becoming a solution is the same for all values.",
                        "code": "ncsim> run\nb=7\nb=7\nb=2\nb=1\nb=6\nb=4\nb=2\nb=4\nb=0\nb=1\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Without solve - before",
                        "content": "Consider the following example shown below where two random variables are declared. The constraint ensures that b gets 0x3 whenever a is 1.\n\nNote that a and b are determined together and not one after the other.",
                        "code": "class ABC;\n  rand  bit\t\t\ta;\n  rand  bit [1:0] \tb;\n  \n  constraint c_ab { a -> b == 3'h3; }\nendclass\n\nmodule tb;\n  initial begin\n    ABC abc = new;\n    for (int i = 0; i < 8; i++) begin\n      abc.randomize();\n      $display (\"a=%0d b=%0d\", abc.a, abc.b);\n    end\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!\n\nWhen a is 0, b can take any of the 4 values. So there are 4 combinations here. Next when a is 1, b can take only 1 value and so there is only 1 combination possible.\n\nHence there are 5 possible combinations and if the constraint solver has to allot each an equal probability, the probability to pick any of the combination is 1/5.",
                        "code": "ncsim> run\na=0 b=0\na=0 b=1\na=0 b=0\na=0 b=1\na=0 b=2\na=1 b=3\na=0 b=3\na=0 b=3\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "With solve - before",
                        "content": "SystemVerilog allows a mechanism to order variables so that a can be chosen independently of b. This is done using solve keyword.\n\nCompare this output with the previous one to see the difference. Here, a is solved first and based on what it gets b is solved next.",
                        "code": "class ABC;\n  rand  bit\t\t\ta;\n  rand  bit [1:0] \tb;\n  \n  constraint c_ab { a -> b == 3'h3; \n  \t\t\t\t\n  \t\t\t\t  // Tells the solver that \"a\" has\n  \t\t\t\t  // to be solved before attempting \"b\"\n  \t\t\t\t  // Hence value of \"a\" determines value \n  \t\t\t\t  // of \"b\" here\n                  \tsolve a before b;\n                  }\nendclass\n\nmodule tb;\n  initial begin\n    ABC abc = new;\n    for (int i = 0; i < 8; i++) begin\n      abc.randomize();\n      $display (\"a=%0d b=%0d\", abc.a, abc.b);\n    end\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!\n\nBecause a is solved first, the probability of choosing either 0 or 1 is 50%. Next, the probability of choosing a value for b depends on the value chosen for a.\n\nNote that the probability of b is almost 0% before and after using solve - before, it has become a little more than 50%.",
                        "code": "ncsim> run\na=1 b=3\na=1 b=3\na=0 b=1\na=0 b=0\na=0 b=0\na=0 b=1\na=1 b=3\na=0 b=2\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Restrictions",
                        "content": "There are a few restrictions in the use of solve before which are listed down below.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-55",
                "num": 55,
                "title": "SystemVerilog foreach Constraint",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "SystemVerilog provides the support to use foreach loop inside a constraint so that arrays can be constrained.\n\nThe foreach construct iterates over the elements of an array and its argument is an identifier that represents a single entity in the array.\n\nClick here to refresh loops in SystemVerilog !",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Example",
                        "content": "The code shown below declares a static array called array with size 5. This array can hold 5 elements where each element can be accessed using an index from 0 to 4.\n\nThe constraint uses foreach loop to iterate over all the elements and assign the value of each element to that of its index.\n\nThe output given below shows that each element of the array was assigned to a value equal to that of its index.",
                        "code": "class ABC;\n  rand bit[3:0] array [5];\n  \n  // This constraint will iterate through each of the 5 elements\n  // in an array and set each element to the value of its\n  // particular index\n  constraint c_array { foreach (array[i]) {\n    \t\t\t\t\tarray[i] == i;\n  \t\t\t\t\t\t}\n                     }\nendclass\n\nmodule tb;\n  \n  initial begin\n    ABC abc = new;\n    abc.randomize();\n    $display (\"array = %p\", abc.array);\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\narray = '{'h0, 'h1, 'h2, 'h3, 'h4}\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Dynamic Arrays/Queues",
                        "content": "Dynamic arrays and queues do not have a size at the time of declaration and hence the foreach loop cannot be directly used. Therefore, the array's size has to be either assigned directly or constrained as part of the set of constraints.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Example",
                        "content": "",
                        "code": "class ABC;\n  rand bit[3:0] darray []; \t\t// Dynamic array -> size unknown\n  rand bit[3:0] queue [$]; \t\t// Queue -> size unknown\n  \n  // Assign size for the queue if not already known\n  constraint c_qsize  { queue.size() == 5; }\n  \n  // Constrain each element of both the arrays\n  constraint c_array  { foreach (darray[i])    \t\t\t\t\t  \n    \t\t\t\t\t  darray[i] == i;    \t\t\t\t\t\n                        foreach (queue[i]) \n                          queue[i] == i + 1;\n                      } \n                      \n    // Size of an array can be assigned using a constraint like\n    // we have done for the queue, but let's assign the size before\n    // calling randomization\n    function new ();\n\t\tdarray = new[5]; \t// Assign size of dynamic array\n\tendfunction\nendclass\n\nmodule tb;\n  \n  initial begin\n    ABC abc = new;\n    abc.randomize();\n    $display (\"array = %p\nqueue = %p\", abc.darray, abc.queue);\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\narray = '{'h0, 'h1, 'h2, 'h3, 'h4}\nqueue = '{'h1, 'h2, 'h3, 'h4, 'h5}\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Multidimensional Arrays",
                        "content": "SystemVerilog constraints are powerful enough to be applied on multidimensional arrays as well. In the following example we have a multidimensional static array with a packed structure.\n\nHere we attempt to assign the pattern 0xF0F0F to each element of the multidimensional array.",
                        "code": "class ABC;\n  rand bit[4:0][3:0] md_array [2][5]; \t// Multidimansional Arrays\n  \n  constraint c_md_array { \n    foreach (md_array[i]) {\n    \tforeach (md_array[i][j]) {\n          foreach (md_array[i][j][k]) {\n            if (k %2 == 0) \n              md_array[i][j][k] == 'hF;\n            else\n              md_array[i][j][k] == 0;\n        }\n      }\n    }\n  }\n  \n  \nendclass\n\nmodule tb;\n  \n  initial begin\n    ABC abc = new;\n    abc.randomize();\n    $display (\"md_array = %p\", abc.md_array);\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nmd_array = '{'{'hf0f0f, 'hf0f0f, 'hf0f0f, 'hf0f0f, 'hf0f0f}, '{'hf0f0f, 'hf0f0f, 'hf0f0f, 'hf0f0f, 'hf0f0f}}\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Multidimensional Dynamic Arrays",
                        "content": "Constraining a multi-dimensional dynamic array is a little more tricky and may not be supported by all simulators. In the example shown below, the size of X or Y elements of the 2D array md_array is not known.",
                        "code": "class ABC;\n  rand bit[3:0] md_array [][]; \t// Multidimansional Arrays with unknown size\n  \n  constraint c_md_array { \n     // First assign the size of the first dimension of md_array\n     md_array.size() == 2; \n    \n     // Then for each sub-array in the first dimension do the following:\n     foreach (md_array[i]) {\n                           \n        // Randomize size of the sub-array to a value within the range\n        md_array[i].size() inside {[1:5]};\n                           \n        // Iterate over the second dimension \n        foreach (md_array[i][j]) {\n                             \n           // Assign constraints for values to the second dimension\n           md_array[i][j] inside {[1:10]};\n         }\n      }\n   }\n\nendclass\n\nmodule tb;\n  \n  initial begin\n    ABC abc = new;\n    abc.randomize();\n    $display (\"md_array = %p\", abc.md_array);\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nmd_array = '{'{'h9, 'h6, 'h7, 'h9, 'h1}, '{'h5, 'h9, 'h4, 'h2}}\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Array Reduction Iterative Constraint",
                        "content": "This is another pretty useful construct and technique supported in SystemVerilog.\n\nArray reduction methods can produce a single value from an unpacked array of integral values. This can be used within a constraint to allow the expression to be considered during randomization.\n\nFor example, consider that an array of N elements have to be randomized such that the sum of all elements equal some value. An array reduction operator can be used with the with clause such that it iterates over each element of the array and include it in the constraint solver.",
                        "code": "class ABC;\n  rand bit[3:0] array [5];\n  \n  // Intrepreted as int'(array[0]) + int'(array[1]) + .. + int'(array[4]) == 20;\n  constraint c_sum { array.sum() with (int'(item)) == 20; }\n  \nendclass\n\nmodule tb;\n  initial begin\n    ABC abc = new;\n    abc.randomize();\n    $display (\"array = %p\", abc.array);\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\narray = '{'h4, 'h2, 'h2, 'h4, 'h8}\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-56",
                "num": 56,
                "title": "SystemVerilog Static Constraints",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "Just like static variables in a class, constraints can be declared as static. A static constraint is shared across all the class instances.\n\nConstraints are affected by the static keyword only if they are turned on and off using constraint_mode() method. When a non-static constraint is turned off using this method, the constraint is turned off in that particular instance of the class which calls the method. But, when a static constraint is turned off and on using this method, the constraint is turned off and on in all the instances of the class.\n\nA constraint block can be declared as static by including the static keyword in its definition.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Syntax",
                        "content": "Next, we'll compare non-static constraints with static constraints and see how they differ.",
                        "code": "class [class_name];\n\t...\n\t\n\tstatic constraint [constraint_name] [definition]\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Non-static Constraints",
                        "content": "Constraints are by default non-static and hence a separate copy exists for each class instance. In the example shown below, we have a class called ABC that has two normal constraints. The first one constrains a to a value greater than 5 and the second one constrains it to a value less than 12.\n\nSee that both constraints are active in both the class instances obj1 and obj2. Both objects successfully constrain the variable a to a value in between 5 and 12.",
                        "code": "class ABC;\n  rand bit [3:0]  a;\n \n  // Both are non-static constraints \n  constraint c1 { a > 5; }\n  constraint c2 { a < 12; }\nendclass\n\nmodule tb;\n  initial begin\n    ABC obj1 = new;\n    ABC obj2 = new;\n    for (int i = 0; i < 5; i++) begin\n      obj1.randomize();\n      obj2.randomize();\n      $display (\"obj1.a = %0d, obj2.a = %0d\", obj1.a, obj2.a);\n    end\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nobj1.a = 9, obj2.a = 6\nobj1.a = 7, obj2.a = 11\nobj1.a = 6, obj2.a = 6\nobj1.a = 9, obj2.a = 11\nobj1.a = 6, obj2.a = 9\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Static Constraints",
                        "content": "Let us turn off a non-static constraint and compare it with the results when a static constraint is turned off.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Turn off non-static constraint",
                        "content": "In this case, we'll set the second constraint called c2 as static.\n\nWhen the non-static constraint c1 was turned off using constraint_mode(), obj1 produced values outside the range specified by c1 constraint and matches our expectation.",
                        "code": "class ABC;\n  rand bit [3:0]  a;\n  \n  // \"c1\" is non-static, but \"c2\" is static\n  constraint c1 { a > 5; }\n  static constraint c2 { a < 12; }\nendclass\n\nmodule tb;\n  initial begin\n    ABC obj1 = new;\n    ABC obj2 = new;\n    \n    // Turn off non-static constraint\n    obj1.c1.constraint_mode(0);\n    \n    for (int i = 0; i < 5; i++) begin\n      obj1.randomize();\n      obj2.randomize();\n      $display (\"obj1.a = %0d, obj2.a = %0d\", obj1.a, obj2.a);\n    end\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nobj1.a = 3, obj2.a = 6\nobj1.a = 7, obj2.a = 11\nobj1.a = 6, obj2.a = 6\nobj1.a = 9, obj2.a = 11\nobj1.a = 6, obj2.a = 9\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Turn off static constraint",
                        "content": "In this case, the static constraint called c2 will be turned off. We expect both the object instances obj1 and obj2 to be affected by this.\n\nNote that both objects of the same class have the constraint c2 turned off as expected. Both variables have values of a outside the constraint range.",
                        "code": "class ABC;\n  rand bit [3:0]  a;\n  \n  // \"c1\" is non-static, but \"c2\" is static\n  constraint c1 { a > 5; }\n  static constraint c2 { a < 12; }\nendclass\n\nmodule tb;\n  initial begin\n    ABC obj1 = new;\n    ABC obj2 = new;\n    \n    // Turn non-static constraint\n    obj1.c2.constraint_mode(0);\n    \n    for (int i = 0; i < 5; i++) begin\n      obj1.randomize();\n      obj2.randomize();\n      $display (\"obj1.a = %0d, obj2.a = %0d\", obj1.a, obj2.a);\n    end\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nobj1.a = 15, obj2.a = 12\nobj1.a = 9, obj2.a = 15\nobj1.a = 14, obj2.a = 6\nobj1.a = 11, obj2.a = 11\nobj1.a = 12, obj2.a = 11\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-57",
                "num": 57,
                "title": "SystemVerilog Soft Constraints",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "The normal constraints are called hard constraints because it is mandatory for the solver to always satisfy them. If the solver fails to find a solution, then the randomization will fail.\n\nHowever, a constraint declared as soft gives the solver some flexibility that the constraint need not be satisfied if there are other contradicting constraints - either hard or a soft constraint with higher priority.\n\nSoft constraints are used to specify default values and distributions for random variables.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Example",
                        "content": "Shown in the example below is a soft constraint that tells the solver to produce values within 4 and 12 for the variable called data.\n\nAs expected, values of the randomized variable lies within 4 and 12.",
                        "code": "class ABC;\n  rand bit [3:0] data;\n  \n  // This constraint is defined as \"soft\" \n  constraint c_data { soft data >= 4;\n                     data <= 12; }\nendclass\n\nmodule tb;\n  ABC abc;\n  \n  initial begin\n    abc = new;\n    for (int i = 0; i < 5; i++) begin\n      abc.randomize();\n      $display (\"abc = 0x%0h\", abc.data);\n    end\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Let's see how a contradicting inline constraint is handled in this case.",
                        "code": "ncsim> run\nabc = 0x4\nabc = 0x8\nabc = 0x4\nabc = 0x7\nabc = 0x7\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "See that the contradicting inline constraint allowed the solver to constrain value of the variable to 2.\n\nRemember that it is contradicting because the original constraint c_data is supposed to constrain it within 4 and 12, but the inline constraint asks the variable to be set to 2, which is outside the original range.",
                        "code": "module tb;\n  ABC abc;\n  \n  initial begin\n    abc = new;\n    for (int i = 0; i < 5; i++) begin\n      abc.randomize() with { data == 2; };\n      $display (\"abc = 0x%0h\", abc.data);\n    end\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nabc = 0x2\nabc = 0x2\nabc = 0x2\nabc = 0x2\nabc = 0x2\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "How is it different from hard constraints ?",
                        "content": "Let us take the class ABC and turn it into a hard constraint by removing the soft keyword and apply a contradicting inline constraint.\n\nThe solver fails in this case because of the contradicting constraint and hence assigns the variable data to 0.",
                        "code": "class ABC;\n  rand bit [3:0] data;\n\n  constraint c_data { data >= 4;\n                     data <= 12; }\nendclass\n\nmodule tb;\n  ABC abc;\n  \n  initial begin\n    abc = new;\n    for (int i = 0; i < 1; i++) begin\n      abc.randomize() with { data == 2; };\n      $display (\"abc = 0x%0h\", abc.data);\n    end\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\n      abc.randomize() with { data == 2; };\n                  |\nncsim: *W,SVRNDF (./testbench.sv,14|18): The randomize method call failed. The unique id of the failed randomize call is 4.\nObserved simulation time : 0 FS + 0\nncsim: *W,RNDOCS: These constraints contribute to the set of conflicting constraints:\n\n  constraint c_data { data >= 4; (./testbench.sv,4)\n      abc.randomize() with { data == 2; }; (./testbench.sv,14)\nncsim: *W,RNDOCS: These variables contribute to the set of conflicting constraints:\n\nrand variables:\n       data [./testbench.sv, 2]\n\nabc = 0x0\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-58",
                "num": 58,
                "title": "SystemVerilog Disable Constraints",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "All constraints are by default enabled and will be considered by the SystemVerilog constraint solver during randomization. A disabled constraint is not considered during randomization.\n\nConstraints can be enabled or disabled by constraint_mode().",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Syntax",
                        "content": "constraint_mode() can be called both as a task and as a function.\n\nWhen called as a task, the method does not return anything. The task is supplied with an input argument to either turn on or off the given constraint. When called as a function, the method returns the current state of the given constraint.\n\nconstraint_mode() is a built-in method and cannot be overriden !",
                        "code": "// Called as a task\nclass_obj.const_name.constraint_mode(0); \t\t\t// Turn off the constraint\nclass_obj.const_name.constraint_mode(1); \t\t\t// Turn on the constraint\n\t\n// Called as a function\nstatus = class_obj.const_name.constraint_mode(); \t// status is an int variable to hold return value",
                        "lang": "verilog"
                    },
                    {
                        "title": "Method",
                        "content": "The following table shows what each value of the argument input indicates when constraint_mode is called as a task.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Example",
                        "content": "In the following example, we'll see what effect constraint_mode() has on its constraints.",
                        "code": "class Fruits;\n  rand bit[3:0]  num; \t\t\t\t// Declare a 4-bit variable that can be randomized\n  \n  constraint c_num { num > 4;  \t\t// Constraint is by default enabled, and applied\n                    num < 9; }; \t// during randomization giving num a value between 4 and 9\nendclass\n\nmodule tb;\n  initial begin\n    Fruits f = new ();\n    \n\t// 1. Print value of num before randomization\n    $display (\"Before randomization num = %0d\", f.num); \t\n    \n    // 2. Call \"constraint_mode\" as a function, the return type gives status of constraint\n    if (f.c_num.constraint_mode ())\n      $display (\"Constraint c_num is enabled\");\n    else\n      $display (\"Constraint c_num is disabled\");\n      \n    // 3. Randomize the class object\n    f.randomize ();\n    \n    // 4. Display value of num after randomization\n    $display (\"After randomization num = %0d\", f.num);    \n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!\n\nNow, let's try disabling the constraint using constraint_mode() before attempting to randomize the variable.",
                        "code": "ncsim> run\nBefore randomization num = 0\nConstraint c_num is active\nAfter randomization num = 8\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "module tb;\n  initial begin\n    Fruits f = new ();\n    $display (\"Before randomization num = %0d\", f.num); \t\n    \n    // Disable constraint \n    f.c_num.constraint_mode(0);\n    \n    if (f.c_num.constraint_mode ())\n      $display (\"Constraint c_num is enabled\");\n    else\n      $display (\"Constraint c_num is disabled\");\n      \n    // Randomize the variable and display\n    f.randomize ();\n    $display (\"After randomization num = %0d\", f.num);    \n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!\n\nNote that turning off the constraint made the solver choose any value that the variable supported, instead of confining the values to the range specified in the constraint.\n\nIf constraint_mode() method is called on a constraint that does not exist, it will result in a compiler error.",
                        "code": "ncsim> run\nBefore randomization num = 0\nConstraint c_num is disabled\nAfter randomization num = 15\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "module tb;\n\t\tinitial begin\n\t\t\tFruits f = new();\n\t\t\tf.c_does_not_exist.constraint_mode(1);\n\t\tend\n\tendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "f.c_does_not_exist.constraint_mode (1);\n                     |\nncvlog: *E,NOTCLM (testbench.sv,11|21): c_does_not_exist is not a class item.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-59",
                "num": 59,
                "title": "Bus Protocol Constraints",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "Digital blocks typically communicate with each other using bus protocols, a few examples of which includes AMBA AXI, WishBone, OCP, etc. Bus masters that send out data adhering to a certain protocol provide control signals that tell the slave when the packet is valid, and whether it is a read or write, and how many bytes of data is sent. The master also sends out an address followed by the data to be stored at that address.\n\nLet's see a quick example where the testbench acts as the master and constrains the bus packet class object with valid data.",
                        "code": "// Burst [ 0 -> 1 byte, 1 -> 2 bytes, 2 -> 3 bytes, 3 -> 4 bytes]\n// Length -> max 8 transactions per burst\n// Protocol expects to send only first addr, and slave should calculate all\n// other addresses from burst and length properties\n\nclass BusTransaction;\n  rand int \t\t\tm_addr;\n  rand bit [31:0]\tm_data; \t\n  rand bit [1:0] \tm_burst; \t// Size of a single transaction in bytes (4 bytes max)\n  rand bit [2:0] \tm_length; \t// Total number of transactions\n  \n  constraint c_addr { m_addr % 4 == 0; } // Always aligned to 4-byte boundary\n  \n  function void display(int idx = 0);\n    $display (\"------ Transaction %0d------\", idx);\n    $display (\" Addr \t= 0x%0h\", m_addr);\n    $display (\" Data \t= 0x%0h\", m_data);\n    $display (\" Burst \t= %0d bytes/xfr\", m_burst + 1);\n    $display (\" Length  = %0d\", m_length + 1);\n  endfunction\nendclass\n\nmodule tb;\n  int \t\t\t\tslave_start;\n  int  \t\t\t\tslave_end;\n  BusTransaction\tbt;\n  \n  // Assume we are targeting a slave with addr range 0x200 to 0x800\n  initial begin\n  \tslave_start = 32'h200;\n    slave_end \t= 32'h800;\n    bt = new;\n    \n    bt.randomize() with { m_addr >= slave_start; \n                          m_addr < slave_end;\n                         (m_burst + 1) * (m_length + 1) + m_addr < slave_end;\n                        };\n    bt.display();\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\n------ Transaction 0------\n Addr \t= 0x6e0\n Data \t= 0xbbe5ea58\n Burst \t= 4 bytes/xfr\n Length  = 5\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-60",
                "num": 60,
                "title": "Memory Partitioning Example",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "Consider the following practical examples typically encountered during actual projects.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Memory block randomization",
                        "content": "Assume we have a 2KB SRAM in the design intended to store some data. Let's say that we need to find a block of addresses within the 2KB RAM space that can be used for some particular purpose.\n\nIn the example above, we have assumed the RAM to start from 0x0 and end at 0x7FF. The constraint example aims to allocate a block of memory space between this range with a size that is randomly chosen from 64 or 128 or 512 bytes. The start address of the block is randomized to be 0x714 and hence the end addr is 0x753.",
                        "code": "class MemoryBlock;\n  \n  bit [31:0] \t\tm_ram_start; \t\t\t// Start address of RAM\n  bit [31:0] \t\tm_ram_end; \t\t\t\t// End address of RAM\n  \n  rand bit [31:0] \tm_start_addr; \t\t\t// Pointer to start address of block\n  rand bit [31:0]   m_end_addr; \t\t\t// Pointer to last addr of block\n  rand int \t\t\tm_block_size; \t\t\t// Block size in KB\n  \n  constraint c_addr { m_start_addr >= m_ram_start; \t// Block addr should be more than RAM start \n                      m_start_addr < m_ram_end; \t// Block addr should be less than RAM end \n                      m_start_addr % 4 == 0;  \t\t// Block addr should be aligned to 4-byte boundary\n                      m_end_addr == m_start_addr + m_block_size - 1; };\n   \n  constraint c_blk_size { m_block_size inside {64, 128, 512 }; }; \t// Block's size should be either 64/128/512 bytes\n  \n  function void display();\n    $display (\"------ Memory Block --------\");\n    $display (\"RAM StartAddr   = 0x%0h\", m_ram_start);\n    $display (\"RAM EndAddr     = 0x%0h\", m_ram_end);\n\t$display (\"Block StartAddr = 0x%0h\", m_start_addr);\n    $display (\"Block EndAddr   = 0x%0h\", m_end_addr);\n    $display (\"Block Size      = %0d bytes\", m_block_size);\n  endfunction\nendclass\n\nmodule tb;\n  initial begin\n    MemoryBlock mb = new;\n    mb.m_ram_start = 32'h0;\n    mb.m_ram_end   = 32'h7FF; \t\t// 2KB RAM\n    mb.randomize();\n    mb.display();\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\n------ Memory Block --------\nRAM StartAddr   = 0x0\nRAM EndAddr     = 0x7ff\nBlock StartAddr = 0x714\nBlock EndAddr   = 0x753\nBlock Size      = 64 bytes\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Equal partitions of memory",
                        "content": "In this example, we'll try to partition the 2KB SRAM into N partitions with each parititon having equal size.",
                        "code": "class MemoryBlock;\n  \n  bit [31:0] \t\tm_ram_start; \t\t\t// Start address of RAM\n  bit [31:0] \t\tm_ram_end; \t\t\t\t// End address of RAM\n  \n  rand int\t\t\tm_num_part; \t\t\t// Number of partitions  \n  rand bit [31:0] \tm_part_start []; \t\t// Partition start array\n  rand int \t\t\tm_part_size; \t\t \t// Size of each partition\n  rand int\t\t\tm_tmp;\n    \n  // Constrain number of partitions RAM has to be divided into\n  constraint c_parts { m_num_part > 4; m_num_part < 10; }\n  \n  // Constraint size of each partition\n  constraint c_size { m_part_size == (m_ram_end - m_ram_start)/m_num_part; }\n  \n  // Constrain start addr of each partition\n  constraint c_part { m_part_start.size() == m_num_part;\n                      foreach (m_part_start[i]) {\n                        if (i) \n                          m_part_start[i] == m_part_start[i-1] + m_part_size;\n                        else\n                          m_part_start[i] == m_ram_start;\n                      }\n                    }                      \n  \n  function void display();\n    $display (\"------ Memory Block --------\");\n    $display (\"RAM StartAddr   = 0x%0h\", m_ram_start);\n    $display (\"RAM EndAddr     = 0x%0h\", m_ram_end);\n    $display (\"# Partitions = %0d\", m_num_part);\n    $display (\"Partition Size = %0d bytes\", m_part_size);\n    $display (\"------ Partitions --------\");\n    foreach (m_part_start[i]) \n      $display (\"Partition %0d start = 0x%0h\", i, m_part_start[i]);\n  endfunction\nendclass\n\nmodule tb;\n  initial begin\n    MemoryBlock mb = new;\n    mb.m_ram_start = 32'h0;\n    mb.m_ram_end   = 32'h7FF; \t\t// 2KB RAM\n    mb.randomize();\n    mb.display();\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\n------ Memory Block --------\nRAM StartAddr   = 0x0\nRAM EndAddr     = 0x7ff\n# Partitions = 9\nPartition Size = 227 bytes\n------ Partitions --------\nPartition 0 start = 0x0\nPartition 1 start = 0xe3\nPartition 2 start = 0x1c6\nPartition 3 start = 0x2a9\nPartition 4 start = 0x38c\nPartition 5 start = 0x46f\nPartition 6 start = 0x552\nPartition 7 start = 0x635\nPartition 8 start = 0x718\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Variable memory partitions",
                        "content": "",
                        "code": "class MemoryBlock;\n  \n  bit [31:0] \t\tm_ram_start; \t\t\t// Start address of RAM\n  bit [31:0] \t\tm_ram_end; \t\t\t\t// End address of RAM\n  \n  rand int\t\t\tm_num_part; \t\t\t// Number of partitions  \n  rand bit [31:0] \tm_part_start []; \t\t// Partition start array\n  rand int \t\t\tm_part_size [];\t\t \t// Size of each partition\n  rand int\t\t\tm_tmp;\n    \n  // Constrain number of partitions RAM has to be divided into\n  constraint c_parts { m_num_part > 4; m_num_part < 10; }\n  \n  // Constraint size of each partition\n  constraint c_size { m_part_size.size() == m_num_part;\n                     m_part_size.sum() == m_ram_end - m_ram_start + 1; \n                     foreach (m_part_size[i]) \n                       m_part_size[i] inside {16, 32, 64, 128, 512, 1024};\n                    }\n  \n  // Constrain start addr of each partition\n  constraint c_part { m_part_start.size() == m_num_part;\n                      foreach (m_part_start[i]) {\n                        if (i) \n                          m_part_start[i] == m_part_start[i-1] + m_part_size[i-1];\n                        else\n                          m_part_start[i] == m_ram_start;\n                      }\n                    }                      \n  \n  function void display();\n    $display (\"------ Memory Block --------\");\n    $display (\"RAM StartAddr   = 0x%0h\", m_ram_start);\n    $display (\"RAM EndAddr     = 0x%0h\", m_ram_end);\n    $display (\"# Partitions = %0d\", m_num_part);\n    $display (\"------ Partitions --------\");\n    foreach (m_part_start[i]) \n      $display (\"Partition %0d start = 0x%0h, size = %0d bytes\", i, m_part_start[i], m_part_size[i]);\n  endfunction\nendclass\n\nmodule tb;\n  initial begin\n    MemoryBlock mb = new;\n    mb.m_ram_start = 32'h0;\n    mb.m_ram_end   = 32'h7FF; \t\t// 2KB RAM\n    mb.randomize();\n    mb.display();\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\n------ Memory Block --------\nRAM StartAddr   = 0x0\nRAM EndAddr     = 0x7ff\n# Partitions = 7\n------ Partitions --------\nPartition 0 start = 0x0, size = 512 bytes\nPartition 1 start = 0x200, size = 128 bytes\nPartition 2 start = 0x280, size = 64 bytes\nPartition 3 start = 0x2c0, size = 1024 bytes\nPartition 4 start = 0x6c0, size = 128 bytes\nPartition 5 start = 0x740, size = 128 bytes\nPartition 6 start = 0x7c0, size = 64 bytes\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Variable memory partitions with space in between",
                        "content": "",
                        "code": "class MemoryBlock;\n  \n  bit [31:0] \t\tm_ram_start; \t\t\t// Start address of RAM\n  bit [31:0] \t\tm_ram_end; \t\t\t\t// End address of RAM\n  \n  rand int\t\t\tm_num_part; \t\t\t// Number of partitions  \n  rand bit [31:0] \tm_part_start []; \t\t// Partition start array\n  rand int \t\t\tm_part_size [];\t\t \t// Size of each partition\n  rand int \t\t\tm_space[]; \t \t\t\t// Space between each partition\n  rand int\t\t\tm_tmp;\n    \n  // Constrain number of partitions RAM has to be divided into\n  constraint c_parts { m_num_part > 4; m_num_part < 10; }\n  \n  // Constraint size of each partition\n  constraint c_size { m_part_size.size() == m_num_part;\n                     m_space.size() == m_num_part - 1;\n                     m_space.sum() + m_part_size.sum() == m_ram_end - m_ram_start + 1;\n                     foreach (m_part_size[i]) {\n                       m_part_size[i] inside {16, 32, 64, 128, 512, 1024};\n                       if (i < m_space.size())\n                       \t m_space[i] inside {0, 16, 32, 64, 128, 512, 1024};\n                     }\n                    }\n  \n  // Constrain start addr of each partition\n  constraint c_part { m_part_start.size() == m_num_part;\n                      foreach (m_part_start[i]) {\n                        if (i) \n                          m_part_start[i] == m_part_start[i-1] + m_part_size[i-1] +  m_space[i-1];\n                        else\n                          m_part_start[i] == m_ram_start;\n                      }\n                    }                      \n  \n  function void display();\n    $display (\"------ Memory Block --------\");\n    $display (\"RAM StartAddr   = 0x%0h\", m_ram_start);\n    $display (\"RAM EndAddr     = 0x%0h\", m_ram_end);\n    $display (\"# Partitions = %0d\", m_num_part);\n    $display (\"------ Partitions --------\");\n    foreach (m_part_start[i]) \n      $display (\"Partition %0d start = 0x%0h, size = %0d bytes, space = %0d bytes\", i, m_part_start[i], m_part_size[i], m_space[i]);\n  endfunction\nendclass\n\nmodule tb;\n  initial begin\n    MemoryBlock mb = new;\n    mb.m_ram_start = 32'h0;\n    mb.m_ram_end   = 32'h7FF; \t\t// 2KB RAM\n    mb.randomize();\n    mb.display();\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\n------ Memory Block --------\nRAM StartAddr   = 0x0\nRAM EndAddr     = 0x7ff\n# Partitions = 5\n------ Partitions --------\nPartition 0 start = 0x0, size = 128 bytes, space = 64 bytes\nPartition 1 start = 0xc0, size = 32 bytes, space = 128 bytes\nPartition 2 start = 0x160, size = 32 bytes, space = 0 bytes\nPartition 3 start = 0x180, size = 1024 bytes, space = 512 bytes\nPartition 4 start = 0x780, size = 128 bytes, space = 0 bytes\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Partition for Programs and Data",
                        "content": "In this example, memory is partitioned into regions for program, data and empty spaces. A dynamic array is used to store the size for each program, data and empty space. Using SystemVerilog constraints, the total size of all regions is matched with the total RAM space.\n\nThe code shown below randomizes the total number of programs, data, and space regions. This number also influences the size of each program, data and space so that the sum of all programs, data and empty spaces should be equal to the total RAM space.",
                        "code": "typedef struct {\n  int start_addr;\n  int end_addr;\n} e_range;\n\nclass Space;\n  rand int num_pgm;  \t\t// Total number of programs required\n  rand int num_data; \t\t// Total number of data blocks required\n  rand int num_space; \t\t// Total number of empty spaces required\n \n  rand int max_pgm_size; \t// Maximum program size\n  rand int max_data_size; \t// Maximum data size\n  \n  rand int num_max_pgm; \t// Maximum number of programs\n  \n  rand int pgm_size[]; \t\t// Size of each program region\n  rand int data_size[]; \t// Size of each data region\n  rand int space_size[]; \t// Size of each empty space region\n  \n  int total_ram; \t\t\t// Total RAM space\n  \n  // Constrain maximum individual program region size to be 512 bytes\n  // data region size to be 128 bytes and maximum number of programs in\n  // this memory region to be 100\n  constraint c_num_size { \tmax_pgm_size \t== 512; \n                            max_data_size \t== 128;\n                         \tnum_max_pgm \t== 100;\n                         }\n  \n  // Constrain total number of programs, data and space regions\n  constraint c_num { \tnum_pgm inside {[1:num_max_pgm]}; \n                    \tnum_data inside {[1:50]};\n                    \tnum_space inside {[1:50]};\n                   }\n  \n  // Constrain the array for program, data and space to equal the number\n  // decided by the above constraints. \n  constraint c_size { \tpgm_size.size() \t== num_pgm;\n                    \tdata_size.size() \t== num_data;\n                     \tspace_size.size() \t== num_space;\n                   }\n  \n  // Size of each program/data/space is stored into indices of the corresponding \n  // arrays. So, total size of RAM should be the sum of all programs + data + space\n  constraint c_ram { foreach (pgm_size[i]) { \n//    \t\t\t\t\tpgm_size[i] inside {4, 8, 32, 64, 128, 512};\n    \t\t\t\t\tpgm_size[i] dist {[128:512]:/75, [32:64]:/20, [4:8]:/10};\n    \t\t\t\t\tpgm_size[i] % 4 == 0;\n  \t\t\t\t\t}\n    \t\t\t\tforeach (data_size[i]) { \n                    \tdata_size[i] inside {64, 128, 512, 1024};\n  \t\t\t\t\t}\n                      foreach (space_size[i]) { \n                        space_size[i] inside {4, 8, 32, 64, 128, 512, 1024};\n  \t\t\t\t\t}\n                      total_ram == pgm_size.sum() + data_size.sum() + space_size.sum();\n                   }\n  \n  \t// Function to display the partitioning\n\tfunction void display();\n\t\t$display(\"#pgms=%0d #data=%0d, #space=%0d\", num_pgm, num_data, num_space);\n\t\t$display(\"#pgms.size=%0d #data.size=%0d, #space.size=%0d total=%0d\", pgm_size.sum(), data_size.sum(), space_size.sum(), total_ram);\n\t\tforeach(pgm_size[i]) \n        \t$display(\"pgm#%0d size=%0d bytes\", i, pgm_size[i]);\n\t\tforeach(data_size[i]) \n            $display(\"data#%0d size=%0d bytes\", i, data_size[i]);\n\t\tforeach(space_size[i]) \n        \t$display(\"space#%0d size=%0d bytes\", i, space_size[i]);\n    endfunction\nendclass\n\nmodule tb;\n  initial begin\n    Space sp = new();\n    sp.total_ram = 6 * 1024; \t// Assuem total 6KB memory space\n    assert(sp.randomize());\n    sp.display();\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\n#pgms=37 #data=18, #space=47\n#pgms.size=3792 #data.size=1216, #space.size=1136 total=6144\npgm#0 size=4 bytes\npgm#1 size=200 bytes\npgm#2 size=384 bytes\npgm#3 size=4 bytes\npgm#4 size=60 bytes\npgm#5 size=44 bytes\npgm#6 size=4 bytes\npgm#7 size=4 bytes\npgm#8 size=396 bytes\npgm#9 size=164 bytes\npgm#10 size=40 bytes\npgm#11 size=188 bytes\npgm#12 size=148 bytes\npgm#13 size=152 bytes\npgm#14 size=4 bytes\npgm#15 size=48 bytes\npgm#16 size=4 bytes\npgm#17 size=32 bytes\npgm#18 size=36 bytes\npgm#19 size=180 bytes\npgm#20 size=8 bytes\npgm#21 size=4 bytes\npgm#22 size=144 bytes\npgm#23 size=48 bytes\npgm#24 size=448 bytes\npgm#25 size=4 bytes\npgm#26 size=148 bytes\npgm#27 size=4 bytes\npgm#28 size=4 bytes\npgm#29 size=4 bytes\npgm#30 size=4 bytes\npgm#31 size=4 bytes\npgm#32 size=32 bytes\npgm#33 size=4 bytes\npgm#34 size=356 bytes\npgm#35 size=476 bytes\npgm#36 size=4 bytes\ndata#0 size=64 bytes\ndata#1 size=64 bytes\ndata#2 size=64 bytes\ndata#3 size=64 bytes\ndata#4 size=64 bytes\ndata#5 size=64 bytes\ndata#6 size=64 bytes\ndata#7 size=64 bytes\ndata#8 size=64 bytes\ndata#9 size=128 bytes\ndata#10 size=64 bytes\ndata#11 size=64 bytes\ndata#12 size=64 bytes\ndata#13 size=64 bytes\ndata#14 size=64 bytes\ndata#15 size=64 bytes\ndata#16 size=64 bytes\ndata#17 size=64 bytes\nspace#0 size=4 bytes\nspace#1 size=4 bytes\nspace#2 size=4 bytes\nspace#3 size=4 bytes\nspace#4 size=4 bytes\nspace#5 size=4 bytes\nspace#6 size=4 bytes\nspace#7 size=4 bytes\nspace#8 size=128 bytes\nspace#9 size=8 bytes\nspace#10 size=4 bytes\nspace#11 size=4 bytes\nspace#12 size=4 bytes\nspace#13 size=4 bytes\nspace#14 size=32 bytes\nspace#15 size=64 bytes\nspace#16 size=512 bytes\nspace#17 size=4 bytes\nspace#18 size=32 bytes\nspace#19 size=4 bytes\nspace#20 size=4 bytes\nspace#21 size=128 bytes\nspace#22 size=4 bytes\nspace#23 size=4 bytes\nspace#24 size=4 bytes\nspace#25 size=4 bytes\nspace#26 size=8 bytes\nspace#27 size=4 bytes\nspace#28 size=4 bytes\nspace#29 size=4 bytes\nspace#30 size=4 bytes\nspace#31 size=8 bytes\nspace#32 size=4 bytes\nspace#33 size=4 bytes\nspace#34 size=4 bytes\nspace#35 size=4 bytes\nspace#36 size=64 bytes\nspace#37 size=4 bytes\nspace#38 size=4 bytes\nspace#39 size=4 bytes\nspace#40 size=4 bytes\nspace#41 size=8 bytes\nspace#42 size=4 bytes\nspace#43 size=4 bytes\nspace#44 size=4 bytes\nspace#45 size=4 bytes\nspace#46 size=4 bytes\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-61",
                "num": 61,
                "title": "SystemVerilog Covergroup and Coverpoint",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "SystemVerilog covergroup is a user-defined type that encapsulates the specification of a coverage model. They can be defined once and instantiated multiple times at different places via the new function.\n\ncovergroup can be defined in either a package, module, program, interface, or class and usually encapsulates the following information:",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "covergroup",
                        "content": "",
                        "code": "module tb;\n  \n  // Declare some variables that can be \"sampled\" in the covergroup\n  bit [1:0] mode;\n  bit [2:0] cfg;\n  \n  // Declare a clock to act as an event that can be used to sample\n  // coverage points within the covergroup\n  bit clk;\n  always #20 clk = ~clk;\n  \n  // \"cg\" is a covergroup that is sampled at every posedge clk\n  covergroup cg @ (posedge clk);\n    coverpoint mode;\n  endgroup\n  \n  // Create an instance of the covergroup\n  cg  cg_inst;\n  \n  initial begin\n    // Instantiate the covergroup object similar to a class object\n    cg_inst= new();\n    \n    // Stimulus : Simply assign random values to the coverage variables\n    // so that different values can be sampled by the covergroup object\n    for (int i = 0; i < 5; i++) begin\n      @(negedge clk);\n      mode = $random;\n      cfg  = $random;\n      $display (\"[%0t] mode=0x%0h cfg=0x%0h\", $time, mode, cfg);\n    end\n  end\n  \n  // At the end of 500ns, terminate test and print collected coverage\n  initial begin\n    #500 $display (\"Coverage = %0.2f %%\", cg_inst.get_inst_coverage());\n    $finish;\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\n[40] mode=0x0 cfg=0x1\n[80] mode=0x1 cfg=0x3\n[120] mode=0x1 cfg=0x5\n[160] mode=0x1 cfg=0x2\n[200] mode=0x1 cfg=0x5\nCoverage = 50.00 %\nSimulation complete via $finish(1) at time 500 NS + 0",
                        "lang": "verilog"
                    },
                    {
                        "title": "coverpoint",
                        "content": "A covergroup can contain one or more coverage points. A coverpoint specifies an integral expression that is required to be covered. Evaluation of the coverpoint expression happens when the covergroup is sampled. The SystemVerilog coverage point can be optionally labeled with a colon :.\n\nThe example shown below randomizes the two variables mode and cfg multiple times and is assigned a value on every negative edge of the clock. The covergroup is specified to be sampled at every occurence of a positive edge of the clock. So the two variables are randomized 5 times at the negative edge of the clock and sampled at the positive edge of the clock.\n\nmode can have values from 0 to 3 and cfg can have values from 0 to 7. The question of coverage is this: How much of the total values each variable can have has actually happened ?",
                        "code": "module tb;\n  \n  bit [1:0] mode;\n  bit [2:0] cfg;\n  \n  bit clk;\n  always #20 clk = ~clk;\n  \n  // \"cg\" is a covergroup that is sampled at every posedge clk\n  // This covergroup has two coverage points, one to cover \"mode\"\n  // and the other to cover \"cfg\". Mode can take any value from\n  // 0 -> 3 and cfg can take any value from 0 -> 7\n  covergroup cg @ (posedge clk);\n    \n    // Coverpoints can optionally have a name before a colon \":\"\n    cp_mode    : coverpoint mode;\n    cp_cfg_10  : coverpoint cfg[1:0];\n    cp_cfg_lsb : coverpoint cfg[0];\n    cp_sum     : coverpoint (mode + cfg);\n  endgroup\n  \n  cg  cg_inst;\n  \n  initial begin\n    cg_inst= new();\n \n    for (int i = 0; i < 5; i++) begin\n      @(negedge clk);\n      mode = $random;\n      cfg  = $random;\n      $display (\"[%0t] mode=0x%0h cfg=0x%0h\", $time, mode, cfg);\n    end\n  end\n  \n  initial begin\n    #500 $display (\"Coverage = %0.2f %%\", cg_inst.get_inst_coverage());\n    $finish;\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\n[40] mode=0x0 cfg=0x1\n[80] mode=0x1 cfg=0x3\n[120] mode=0x1 cfg=0x5\n[160] mode=0x1 cfg=0x2\n[200] mode=0x1 cfg=0x5\nCoverage = 78.12 %\nSimulation complete via $finish(1) at time 500 NS + 0",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-62",
                "num": 62,
                "title": "SystemVerilog Functional Coverage",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "What is functional coverage ?",
                        "content": "Functional coverage is a measure of what functionalities/features of the design have been exercised by the tests. This can be useful in constrained random verification (CRV) to know what features have been covered by a set of tests in a regression.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "What are its limitations ?",
                        "content": "This is only as good as the code written for it. Say you have 10 features mentioned in the design document, and you somehow overlooked/missed or were not aware of 3 features, you'll write functional coverage code for only 7 of them. And if all the 7 have been hit in the tests, you might come to the conclusion that all the features are covered. So, you need to make sure that all the required information from the design specification is included in the functional coverage block.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "How is functional coverage done in SystemVerilog ?",
                        "content": "The idea is to sample interesting variables in the testbench and analyze if they have reached certain set of values.",
                        "code": "module test;\n\tbit [3:0] mode;\n\tbit [1:0] key;\n\t\n\t// Other testbench code\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "How to write covergroups ?",
                        "content": "Note:",
                        "code": "class myTrns;\n\trand bit [3:0] \tmode;\n\trand bit [1:0] \tkey;\n\n   function display ();\n      $display (\"[%0tns] mode = 0x%0h, key = 0x%0h\", $time, mode, key);\n   endfunction\n\t\n\tcovergroup CovGrp;\n\t\tcoverpoint mode {\n\t\t\tbins featureA \t= {0};\n\t\t\tbins featureB \t= {[1:3]};\n\t\t\tbins common [] \t= {4:$};\n\t\t\tbins reserve\t= default;\n\t\t}\n\t\tcoverpoint key;\n\tendgroup\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Why are coverage metrics missing in simulations ?",
                        "content": "You have to enable the tool vendor specific command-line switch to dump coverage details. Then open a coverage viewer tool like Cadence ICCR/IMC and open the coverage dump file.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "How to specify when to sample ?",
                        "content": "There are two ways to trigger coverage collection in a covergroup.",
                        "code": "class myCov;\n\tcovergroup CovGrp;\n\t \t...\n\tendgroup\n\t\n\tfunction new ();\n\t\tCovGrp = new; \t        // Create an instance of the covergroup\n\tendfunction\nendclass\n\nmodule tb_top;\n\tmyCov myCov0 = new ();   \t// Create an instance of the class\n\t\n\tinitial begin\n\t\tmyCov0.CovGrp.sample ();\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "covergroup CovGrp @ (posedge clk); \t// Sample coverpoints at posedge clk\ncovergroup CovGrp @ (eventA); \t\t\t// eventA can be triggered with ->eventA;",
                        "lang": "verilog"
                    },
                    {
                        "title": "What are the ways for conditional coverage ?",
                        "content": "Yes, you have two ways to conditionally enable coverage.",
                        "code": "covergroup CovGrp;\n\tcoverpoint mode iff (!_if.reset) {\n\t    // bins for mode\n\t}\nendgroup",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "CovGrp cg = new;\n\ninitial begin\n\t#1 _if.reset = 0;\n\tcg.stop ();\n\t#10 _if.reset = 1;\n\tcg.start();\nend",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-63",
                "num": 63,
                "title": "SystemVerilog Coverpoint Bins",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "The bins construct allows the creation of a separate bin for each value in the given range of possible values of a coverage point variable.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Usage",
                        "content": "",
                        "code": "coverpoint mode {\n\t\t// Manually create a separate bin for each value\n\t\tbins zero = {0};\n\t\tbins one  = {1};\n\t\t\n\t\t// Allow SystemVerilog to automatically create separate bins for each value\n\t\t// Values from 0 to maximum possible value is split into separate bins\n\t\tbins range[] = {[0:$]};\n\t\t\n\t\t// Create automatic bins for both the given ranges\n\t\tbins c[] = { [2:3], [5:7]};\n\t\t\n\t\t// Use fixed number of automatic bins. Entire range is broken up into 4 bins\n\t\tbins range[4] = {[0:$]};\n\t\t\n\t\t// If the number of bins cannot be equally divided for the given range, then \n\t\t// the last bin will include remaining items; Here there are 13 values to be\n\t\t// distributed into 4 bins which yields:\n\t\t// [1,2,3] [4,5,6] [7,8,9] [10, 1, 3, 6]\n\t\tbins range[4] = {[1:10], 1, 3, 6};\n\t\t\n\t\t// A single bin to store all other values that don't belong to any other bin\n\t\tbins others = default;\n\t}",
                        "lang": "verilog"
                    },
                    {
                        "title": "Examples",
                        "content": "",
                        "code": "module tb;\n  bit [2:0] mode;\n  \n  // This covergroup does not get sample automatically because\n  // the sample event is missing in declaration\n  covergroup cg;\n    coverpoint mode {\n    \tbins one = {1};\n    \tbins five = {5};\n    }\n  endgroup\n  \n  // Stimulus : Simply randomize mode to have different values and\n  // manually sample each time\n  initial begin\n    cg cg_inst = new();\n    for (int i = 0; i < 5; i++) begin\n\t  #10 mode = $random;\n      $display (\"[%0t] mode = 0x%0h\", $time, mode);\n      cg_inst.sample();\n    end\n    $display (\"Coverage = %0.2f %%\", cg_inst.get_inst_coverage());\n  end\n \nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\n[10] mode = 0x4\n[20] mode = 0x1\n[30] mode = 0x1\n[40] mode = 0x3\n[50] mode = 0x5\nCoverage = 100.00 %\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Automatic Bins",
                        "content": "4 out of the total possible 8 values have been sampled and hence coverage is 50%.",
                        "code": "covergroup cg;\n    coverpoint mode {\n      \n      // Declares a separate bin for each values -> Here there will 8 bins\n      bins range[] = {[0:$]};\n    }\n  endgroup",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\n[10] mode = 0x4\n[20] mode = 0x1\n[30] mode = 0x1\n[40] mode = 0x3\n[50] mode = 0x5\nCoverage = 50.00 %\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Fixed Number of automatic bins",
                        "content": "mode never got a value of 6 or 7 and hence bin3 does not get hit. But all the other bins are hit and hence coverage is 75%.",
                        "code": "covergroup cg;\n    coverpoint mode {\n      \n      // Declares 4 bins for the total range of 8 values\n      // So bin0->[0:1] bin1->[2:3] bin2->[4:5] bin3->[6:7]\n      bins range[4] = {[0:$]};\n    }\n  endgroup",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\n[10] mode = 0x4\n[20] mode = 0x1\n[30] mode = 0x1\n[40] mode = 0x3\n[50] mode = 0x5\nCoverage = 75.00 %\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Split fixed number of bins between a given range",
                        "content": "Only 2/3 of the bins were hit and hence coverage is at 66.67%. To be specific, bin1 and bin2 were hit because mode was sampled to have 1 and [3,4] respectively.",
                        "code": "covergroup cg;\n    coverpoint mode {\n      \n      // Defines 3 bins \n      // Two bins for values from 1:4, and one bin for value 7\n      // bin1->[1,2] bin2->[3,4], bin3->7\n      bins range[3] = {[1:4], 7};\n    }\n  endgroup",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\n[10] mode = 0x4\n[20] mode = 0x1\n[30] mode = 0x1\n[40] mode = 0x3\n[50] mode = 0x5\nCoverage = 66.67 %\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-64",
                "num": 64,
                "title": "SystemVerilog Cross Coverage",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "Functional coverage aims to measure the completeness of verification by tracking scenarios defined in a test plan and ensuring all valid and invalid design conditions are exercised. It is fully specified by the user and allows for the coverage of variables, expressions, and the cross coverage between them. Each coverpoint is associated with a set of bins, which can be explicitly defined by the user or automatically generated by the tool, to track sampled values or value transitions.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "What is cross coverage ?",
                        "content": "Cross coverage extends functional coverage by observing the interaction or combination of states between two or more coverage points or variables. Instead of just covering individual values, it captures whether specific combinations of these values have occurred. This is crucial for verifying complex interactions and corner cases.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "How is it defined ?",
                        "content": "The cross construct is used to define cross coverage. When a variable is included in a cross statement, SystemVerilog implicitly creates a coverpoint for that variable. Expressions, however, cannot be directly used in a cross; they must first be explicitly defined as coverpoints. All coverpoints participating in a cross must belong to the same covergroup.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Syntax",
                        "content": "",
                        "code": "[cross_identifier: ] cross <cp_item1>, <cp_item2>, cp_itemN [iff <condition>];",
                        "lang": "verilog"
                    },
                    {
                        "title": "Cross Coverage Example",
                        "content": "Imagine a system where different masters can initiate transactions with different slaves. While individual coverpoints are useful for checking single variables, they don't capture the interactions between different parts of the design. For instance, we might want to know if master_0 ever communicated with slave_1. This is where cross coverage comes into play, specified using the cross construct within a covergroup.\n\nThe cross declaration can be optionally labeled with a cross_identifier. This label serves as the name of the cross coverage item and creates a hierarchical scope for any bins defined within that cross. If the label is omitted, the tool will typically generate a name for reporting purposes, but this generated name cannot be used within the language for referencing.\n\nFor instance, ms_cross in the example above is such a label. The ms_cross declaration automatically creates cross product bins for all combinations of the master_id_cp and slave_id_cp bins. If both coverpoints have 4 bins, their cross will result in 16 cross product bins (e.g., <master0, slave0>, <master0, slave1>, ..., <master3, slave3>), each counting a specific master-slave interaction.",
                        "code": "covergroup master_slave_interaction @(posedge clk);\n  master_id_cp: coverpoint master_id {\n    bins master0 = {0};\n    bins master1 = {1};\n    bins master2 = {2};\n    bins master3 = {3};\n  }\n  slave_id_cp: coverpoint slave_id {\n    bins slave0 = {0};\n    bins slave1 = {1};\n    bins slave2 = {2};\n    bins slave3 = {3};\n  }\n\n  ms_cross: cross master_id_cp, slave_id_cp; // Cross coverage declaration\nendgroup",
                        "lang": "verilog"
                    },
                    {
                        "title": "Defining User-Defined Cross Coverage Bins",
                        "content": "For more specific or complex interaction scenarios, SystemVerilog allows users to define custom cross coverage bins using the binsof operator and logical expressions. This enables grouping of multiple cross products under a single named bin.\n\nLet's say we are particularly interested in:\n\nHere, master0_slave1 specifically targets the interaction where master_id is 0 and slave_id is 1. any_master_slave3 captures any interaction involving slave_id 3, regardless of the master. This powerful feature allows verification engineers to focus coverage efforts on specific, functionally important interactions.",
                        "code": "covergroup master_slave_interaction_refined @(posedge clk);\n  master_id_cp: coverpoint master_id {\n    bins master0 = {0};\n    bins master1 = {1};\n    bins master2 = {2};\n    bins master3 = {3};\n  }\n  slave_id_cp: coverpoint slave_id {\n    bins slave0 = {0};\n    bins slave1 = {1};\n    bins slave2 = {2};\n    bins slave3 = {3};\n  }\n\n  ms_cross: cross master_id_cp, slave_id_cp {\n    bins master0_slave1    = binsof(master_id_cp.master0) && binsof(slave_id_cp.slave1);\n    bins any_master_slave3 = binsof(master_id_cp) intersect binsof(slave_id_cp.slave3);\n    // 'intersect' is equivalent to '&&' for binsof expressions\n  }\nendgroup",
                        "lang": "verilog"
                    },
                    {
                        "title": "Specifying Illegal and Ignore Cross Products",
                        "content": "Not all cross product combinations are valid or relevant for verification. SystemVerilog provides illegal_bins and ignore_bins to handle these cases.\n\nillegal_bins have precedence over ignore_bins, and if a combination falls into both, illegal_bins will trigger an error !\n\nIn this enhanced example, if master_id 0 attempts to access slave_id 0, an error will be reported. The combination of master_id 3 and slave_id 2 will simply not contribute to the overall coverage percentage.",
                        "code": "covergroup master_slave_interaction_with_exceptions @(posedge clk);\n  ... \n\n  ms_cross: cross master_id_cp, slave_id_cp {\n    bins master0_slave1 = binsof(master_id_cp.master0) && binsof(slave_id_cp.slave1);\n    bins any_master_slave3 = binsof(master_id_cp) intersect binsof(slave_id_cp.slave3);\n    illegal_bins bad_master_slave_config = binsof(master_id_cp.master0) && binsof(slave_id_cp.slave0); // Master 0 should not talk to Slave 0\n    ignore_bins unused_master_slave_combo = binsof(master_id_cp.master3) && binsof(slave_id_cp.slave2); // Valid, but not critical to cover\n  }\nendgroup",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-65",
                "num": 65,
                "title": "SystemVerilog Concurrent Assertions",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "Concurrent assertions describe behavior that spans over simulation time and are evaluated only at the occurence of a clock tick.\n\nSystemVerilog concurrent assertion statements can be specified in a module, interface or program block running concurrently with other statements. Following are the properties of a concurrent assertion:",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Example #1",
                        "content": "Two signals a and b are declared and driven at positive edges of a clock with some random value to illustrate how a concurrent assertion works. The assertion is written by the assert statement on an immediate property which defines a relation between the signals at a clocking event.\n\nIn this example, both signals a and b are expected to be high at the positive edge of clock for the entire simulation. The assertion is expected to fail for all instances where either a or b is found to be zero.\n\nThe assertion is executed on every positive edge of clk and evaluates the expression using values of variables in the preponed region, which is a delta cycle before given edge of clock. So, if a changes from 0 to 1 on the same edge as clock goes from 0 to 1, the value of a taken for assertion will be zero because it was zero just before the clock edge.\n\nIt can be seen that assertion fails for all cases where either a or b is found zero because the expression given within the assert statement is expected to be true for the entire duration of simulation.",
                        "code": "module tb;\n      bit a, b;\n      bit clk;\n\n      always #10 clk = ~clk;\n\n      initial begin\n          for (int i = 0; i < 10; i++) begin\n              @(posedge clk);\n              a <= $random;\n              b <= $random;\n              $display(\"[%0t] a=%0b b=%0b\", $time, a, b);\n          end\n          #10 $finish;\n      end\n      \n    // This assertion runs for entire duration of simulation\n    // Ensure that both signals are high at posedge clk\n    assert property (@(posedge clk) a & b);   \n\n  endmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "Compiler version P-2019.06-1; Runtime version P-2019.06-1;  Dec 11 14:46 2019\n[10] a=0 b=0\ntestbench.sv\", 24: tb.unnamed$$_4: started at 10ns failed at 10ns\n\tOffending '(a & b)'\n[30] a=0 b=1\n\"testbench.sv\", 24: tb.unnamed$$_4: started at 30ns failed at 30ns\n\tOffending '(a & b)'\n[50] a=1 b=1\n[70] a=1 b=1\n[90] a=1 b=0\n\"testbench.sv\", 24: tb.unnamed$$_4: started at 90ns failed at 90ns\n\tOffending '(a & b)'\n[110] a=1 b=1\n[130] a=0 b=1\n\"testbench.sv\", 24: tb.unnamed$$_4: started at 130ns failed at 130ns\n\tOffending '(a & b)'\n[150] a=1 b=0\n\"testbench.sv\", 24: tb.unnamed$$_4: started at 150ns failed at 150ns\n\tOffending '(a & b)'\n[170] a=1 b=0\n\"testbench.sv\", 24: tb.unnamed$$_4: started at 170ns failed at 170ns\n\tOffending '(a & b)'\n[190] a=1 b=0\n\"testbench.sv\", 24: tb.unnamed$$_4: started at 190ns failed at 190ns\n\tOffending '(a & b)'\n$finish called from file \"testbench.sv\", line 14.\n$finish at simulation time                  200",
                        "lang": "verilog"
                    },
                    {
                        "title": "Example #2",
                        "content": "The expression defined as a property for the assert statement is modified from the above example to an OR condition.",
                        "code": "module tb;\n      bit a, b;\n      bit clk;\n\n      always #10 clk = ~clk;\n\n      initial begin\n          for (int i = 0; i < 10; i++) begin\n              @(posedge clk);\n              a <= $random;\n              b <= $random;\n              $display(\"[%0t] a=%0b b=%0b\", $time, a, b);\n          end\n          #10 $finish;\n      end\n      \n    // This assertion runs for entire duration of simulation\n    // Ensure that atleast 1 of the two signals is high on every clk\n    assert property (@(posedge clk) a | b);   \n\n  endmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "Compiler version P-2019.06-1; Runtime version P-2019.06-1;  Dec 11 15:13 2019\n[10] a=0 b=0\ntestbench.sv\", 24: tb.unnamed$$_4: started at 10ns failed at 10ns\n\tOffending '(a | b)'\n[30] a=0 b=1\n[50] a=1 b=1\n[70] a=1 b=1\n[90] a=1 b=0\n[110] a=1 b=1\n[130] a=0 b=1\n[150] a=1 b=0\n[170] a=1 b=0\n[190] a=1 b=0\n$finish called from file \"testbench.sv\", line 14.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Example #3",
                        "content": "The expression defined as a property for the assert statement is modified from the above example to an XNOR condition after negation of a.",
                        "code": "module tb;\n      bit a, b;\n      bit clk;\n\n      always #10 clk = ~clk;\n\n      initial begin\n          for (int i = 0; i < 10; i++) begin\n              @(posedge clk);\n              a <= $random;\n              b <= $random;\n              $display(\"[%0t] a=%0b b=%0b\", $time, a, b);\n          end\n          #10 $finish;\n      end\n      \n    // This assertion runs for entire duration of simulation\n    // Ensure that atleast 1 of the two signals is high on every clk\n    assert property (@(posedge clk) !(!a ^ b));   \n\n  endmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "Compiler version P-2019.06-1; Runtime version P-2019.06-1;  Dec 11 15:26 2019\n[10] a=0 b=0\n\"testbench.sv\", 24: tb.unnamed$$_4: started at 10ns failed at 10ns\n\tOffending '(!((!a) ^ b))'\n[30] a=0 b=1\n[50] a=1 b=1\n\"testbench.sv\", 24: tb.unnamed$$_4: started at 50ns failed at 50ns\n\tOffending '(!((!a) ^ b))'\n[70] a=1 b=1\n\"testbench.sv\", 24: tb.unnamed$$_4: started at 70ns failed at 70ns\n\tOffending '(!((!a) ^ b))'\n[90] a=1 b=0\n[110] a=1 b=1\n\"testbench.sv\", 24: tb.unnamed$$_4: started at 110ns failed at 110ns\n\tOffending '(!((!a) ^ b))'\n[130] a=0 b=1\n[150] a=1 b=0\n[170] a=1 b=0\n[190] a=1 b=0\n$finish called from file \"testbench.sv\", line 14.\n$finish at simulation time                  200",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-66",
                "num": 66,
                "title": "SystemVerilog Immediate Assertions",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "Immediate assertions are executed based on simulation event semantics and are required to be specified in a procedural block. It is treated the same way as the expression in a if statement during simulation.\n\nThe immediate assertion will pass if the expression holds true at the time when the statement is executed, and will fail if the expression evaluates to be false (X, Z or 0). These assertions are intended for use in simulation and is not suitable for formal verification. It can be used in both RTL code and testbench to flag errors in simulations.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Syntax",
                        "content": "",
                        "code": "// Simple assert statement\t\nassert(<expression>);\n\n// Assert statement with statements to be executed for pass/fail conditions\nassert(<expression>) begin\n\t// If condition is true, execute these statements\nend else begin\n\t// If condition is false, execute these statements\nend\n\n// Optionally give name for the assertion\n[assert_name] : assert(<expression>);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Immediate Assertion in Design",
                        "content": "Here is an example where the design has an immediate assertion to check that a push request to the FIFO does not come at a time when the FIFO is already full. If the expression within the assert statement evaluates to true, the first begin end block will be executed and if the expression evaluates to false, the else part will be evaluated. This is much like the if construct, with the difference that it is not required for the user to place display statement to flag the error.\n\nWithout such immediate assertions, one would need to duplicate the logic leading to that particular point using concurrent assertions that can take extra effort and resources.",
                        "code": "module my_des (my_if _if);\n  \n  always @ (posedge _if.clk) begin\n    if (_if.push) begin\n    \t// Immediate assertion and ensures that\n    \t// fifo is not full when push is 1\n    \ta_push: assert (!_if.full) begin\n      \t\t$display(\"[PASS] push when fifo not full\");\n    \tend else begin\n      \t\t$display(\"[FAIL] push when fifo full !\");\n    \tend\n  \tend\n    \n    if (_if.pop) begin\n    \t// Immediate assertion to ensure that fifo is not \n    \t// empty when pop is 1\n    \ta_pop: assert (!_if.empty) begin\n      \t\t$display (\"[PASS] pop when fifo not empty\");\n    \tend else begin\n      \t\t$display (\"[FAIL] pop when fifo empty !\");\n    \tend\n    end\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "See that the time and line of assertion failure is displayed as *E.",
                        "code": "interface my_if(input bit clk);\n  logic pop;\n  logic push;\n  logic empty;\n  logic full;\nendinterface\n\nmodule tb;\n  bit clk;\n  always #10 clk <= ~clk;\n  \n  my_if _if (clk);  \n  my_des u0 (.*);\n  \n  initial begin\n    for (int i = 0; i < 5; i++) begin\n      _if.push  <= $random;\n      _if.pop   <= $random;\n      _if.empty <= $random;\n      _if.full  <= $random;\n      $strobe(\"[%0t] push=%0b full=%0b pop=%0b empty=%0b\",\n              $time, _if.push, _if.full, _if.pop, _if.empty);\n      @(posedge clk);\n    end\n    #10 $finish;\n  end             \nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\n[0] push=0 full=1 pop=1 empty=1\nncsim: *E,ASRTST (./design.sv,13): (time 10 NS) Assertion tb.u0.a_pop has failed \n[FAIL] pop when fifo empty !\n[10] push=1 full=0 pop=1 empty=1\n[PASS] push when fifo not full\nncsim: *E,ASRTST (./design.sv,13): (time 30 NS) Assertion tb.u0.a_pop has failed \n[FAIL] pop when fifo empty !\n[30] push=1 full=1 pop=1 empty=0\nncsim: *E,ASRTST (./design.sv,5): (time 50 NS) Assertion tb.u0.a_push has failed \n[FAIL] push when fifo full !\n[PASS] pop when fifo not empty\n[50] push=1 full=0 pop=0 empty=1\n[PASS] push when fifo not full\n[70] push=1 full=1 pop=0 empty=1\nncsim: *E,ASRTST (./design.sv,5): (time 90 NS) Assertion tb.u0.a_push has failed \n[FAIL] push when fifo full !\nSimulation complete via $finish(1) at time 100 NS + 0\n./testbench.sv:25     #10 $finish;\nncsim> exit",
                        "lang": "verilog"
                    },
                    {
                        "title": "Immediate Assertion in Testbench",
                        "content": "Assume a class called Packet is created and randomized. However this example has a constraint error and randomization will fail. But, the failure will be displayed as a warning message and if the user is not careful enough the test may display incorrect behavior and may even appear to pass.",
                        "code": "class Packet;\n  rand bit [7:0] addr;\n  \n  constraint c_addr { addr > 5; addr < 3; }\nendclass\n\nmodule tb;\n  initial begin\n    Packet m_pkt = new();\n    \n    m_pkt.randomize();\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Instead an immediate assertion can be placed on the randomization method call to ensure that the return value is always 1, indicating the randomization is successful. If the assertion fails, it prompts the user to first look at the failure thereby reducing debug efforts.",
                        "code": "ncsim> run\n    m_pkt.randomize();\n                  |\nncsim: *W,SVRNDF (./testbench.sv,11|18): The randomize method call failed. The unique id of the failed randomize call is 0.\nObserved simulation time : 0 FS + 0\nncsim: *W,RNDOCS: These constraints contribute to the set of conflicting constraints:\n\n  constraint c_addr { addr > 5; addr < 3; } (./testbench.sv,4)\nncsim: *W,RNDOCS: These variables contribute to the set of conflicting constraints:\n\nrand variables:\n       addr [./testbench.sv, 2]\n\nncsim: *W,RNQUIE: Simulation is complete.\nncsim> exit",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Simulator assigns a generated name for the assertion if the user has not specified one.",
                        "code": "class Packet;\n  rand bit [7:0] addr;\n  \n  constraint c_addr { addr > 5; addr < 3; }\nendclass\n\nmodule tb;\n  initial begin\n    Packet m_pkt = new();\n    \n    assert(m_pkt.randomize());\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "In a similar way, assert can be used with any expression that evaluates to true or false within a procedural block.",
                        "code": "ncsim> run\n    assert(m_pkt.randomize());\n                         |\nncsim: *W,SVRNDF (./testbench.sv,11|25): The randomize method call failed. The unique id of the failed randomize call is 0.\nObserved simulation time : 0 FS + 0\nncsim: *W,RNDOCS: These constraints contribute to the set of conflicting constraints:\n\n  constraint c_addr { addr > 5; addr < 3; } (./testbench.sv,4)\nncsim: *W,RNDOCS: These variables contribute to the set of conflicting constraints:\n\nrand variables:\n       addr [./testbench.sv, 2]\n\nncsim: *E,ASRTST (./testbench.sv,11): (time 0 FS) Assertion tb.unmblk1.__assert_1 has failed \nncsim: *W,RNQUIE: Simulation is complete.\nncsim> exit",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-67",
                "num": 67,
                "title": "SystemVerilog Assertions",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "The behavior of a system can be written as an assertion that should be true at all times. Hence assertions are used to validate the behavior of a system defined as properties, and can also be used in functional coverage.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "What are properties of a design ?",
                        "content": "If a property of the design that is being checked for by an assertion does not behave in the expected way, the assertion fails. For example, assume the design requests for grant and expects to receive an ack within the next four cycles. But if the design gets an ack on the fifth cycle, the property that an ack should be returned within 4 clocks is violated and the assertion fails.\n\nIf a property of the design that is being checked for by an assertion is forbidden from happening, the assertion fails. For example, assume a small processor decodes instructions read from memory, encounters an unknown instruction and results in a fatal error. If such a scenario is never expected from the design, the property of the design that only valid instructions can be read from memory is violated and the assertion fails.\n\nAs evident from the two examples above, properties of a given design is checked for by writing SystemVerilog assertions.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Why do we need assertions ?",
                        "content": "An assertion is nothing but a more concise representation of a functional checker. The functionality represented by an assertion can also be written as a SystemVerilog task or checker that involves more line of code. Some disadvantages of doing so are listed below:\n\nSystemVerilog Assertions is a declarative language used to specify temporal conditions, and is very concise and easier to maintain.",
                        "code": "// A property written in Verilog/SystemVerilog\nalways @ (posedge clk) begin\n\tif (!(a && b))\n\t\t$display (\"Assertion failed\");\nend",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "// The property above written in SystemVerilog Assertions syntax\nassert property(@(posedge clk) a && b);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Types of Assertion Statements",
                        "content": "An assertion statement can be of the following types:",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Sequence",
                        "content": "A sequence of multiple logical events typically form the functionality of any design. These events may span across multiple clocks or exist for just a single clock cycle. To keep things simple, smaller events can be depicted using simple assertions which can then be used to build more complex behavior patterns.",
                        "code": "// Sequence syntax\nsequence <name_of_sequence>\n  <test expression>\nendsequence\n\n// Assert the sequence\nassert property (<name_of_sequence>);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Property",
                        "content": "These events can be represented as a sequence and a number of sequences can be combined to create more complex sequences or properties.\n\nIt is necessary to include a clocking event inside a sequence or property in order to assert it.\n\nThere are two kinds of assertions - Immediate and Concurrent.",
                        "code": "// Property syntax\nproperty <name_of_property>\n  <test expression> or\n  <sequence expressions>\nendproperty\n\n// Assert the property\nassert property (<name_of_property>);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Immediate Assertion",
                        "content": "Immediate assertions are executed like a statement in a procedural block and follow simulation event semantics. These are used to verify an immediate property during simulation.\n\nClick here to learn more on Immediate Assertions",
                        "code": "always @ (<some_event>) begin\n\t\t...\n\t\t// This is an immediate assertion executed only\n\t\t// at this point in the execution flow\n\t\t$assert(!fifo_empty);      // Assert that fifo is not empty at this point\n\t\t...\n\tend",
                        "lang": "verilog"
                    },
                    {
                        "title": "Concurrent Assertions",
                        "content": "Concurrent assertions are based on clock semantics and use sampled values of their expressions. Circuit behavior is described using SystemVerilog properties that gets evaluated everytime on the given clock and a failure in simulation indicates that the described functional behavior got violated.\n\nClick here to learn more on Concurrent Assertions",
                        "code": "// Define a property to specify that an ack should be \n// returned for every grant within 1:4 clocks\nproperty p_ack;\n\t@(posedge clk) gnt ##[1:4] ack;\nendproperty\n\nassert property(p_ack);    // Assert the given property is true always",
                        "lang": "verilog"
                    },
                    {
                        "title": "Steps to create assertions",
                        "content": "Following are the steps to create assertions:",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Example",
                        "content": "The first sequence s_ab validates that b is high the next clock when a is high, and the second sequence s_cd validates that d is high 2 clocks after c is found high. The property asserts that the second sequence is on the next cycle after the first sequence.\n\nNote that there are some violations for the property that is asserted using assert statement.",
                        "code": "module tb;\n  bit a, b, c, d;\n  bit clk;\n  \n  always #10 clk = ~clk;\n\n  // This is just a stimulus to trigger assertions\n  initial begin\n    for (int i = 0; i < 20; i++) begin\n      {a, b, c, d} = $random;\n      $display(\"%0t a=%0d b=%0d c=%0d d=%0d\", $time, a, b, c, d);\n      @(posedge clk);\n    end\n    #10 $finish;\n  end\n\n  // Step 2. Create sequence (optional), else add\n  // boolean expr directly inside a property  \n  sequence s_ab;\n    // Step 1. Create a boolean expression\n    a ##1 b;\n  endsequence\n\n  // Step 2. Create sequence (optional)       \n  sequence s_cd;\n    // Step 1. Create a boolean expression\n    c ##2 d;\n  endsequence\n\n  // Step 3. Create property\n  property p_expr;\n    @(posedge clk) s_ab ##1 s_cd;\n  endproperty\n\n  // Step 4. Assert property\n  assert property (p_expr);\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "Compiler version P-2019.06-1; Runtime version P-2019.06-1;  Jan  8 05:02 2020\nWarning : License for product VCSRuntime_Net(725) will expire within 10 days, on: 17-jan-2020.\n\nIf you would like to temporarily disable this message, set \n the VCS_LIC_EXPIRE_WARNING environment variable to the number of days\nbefore expiration that you want this message to start (the minimum is 0).\n0 a=0 b=1 c=0 d=0\n10 a=0 b=0 c=0 d=1\n\"testbench.sv\", 28: tb.unnamed$$_3: started at 10ns failed at 10ns\n\tOffending 'a'\n30 a=1 b=0 c=0 d=1\n\"testbench.sv\", 28: tb.unnamed$$_3: started at 30ns failed at 30ns\n\tOffending 'a'\n50 a=0 b=0 c=1 d=1\n70 a=1 b=1 c=0 d=1\n\"testbench.sv\", 28: tb.unnamed$$_3: started at 70ns failed at 70ns\n\tOffending 'a'\n\"testbench.sv\", 28: tb.unnamed$$_3: started at 50ns failed at 70ns\n\tOffending 'b'\n90 a=1 b=1 c=0 d=1\n110 a=0 b=1 c=0 d=1\n130 a=0 b=0 c=1 d=0\n\"testbench.sv\", 28: tb.unnamed$$_3: started at 130ns failed at 130ns\n\tOffending 'a'\n\"testbench.sv\", 28: tb.unnamed$$_3: started at 90ns failed at 130ns\n\tOffending 'c'\n150 a=0 b=0 c=0 d=1\n\"testbench.sv\", 28: tb.unnamed$$_3: started at 150ns failed at 150ns\n\tOffending 'a'\n170 a=1 b=1 c=0 d=1\n\"testbench.sv\", 28: tb.unnamed$$_3: started at 170ns failed at 170ns\n\tOffending 'a'\n190 a=0 b=1 c=1 d=0\n210 a=1 b=1 c=0 d=1\n\"testbench.sv\", 28: tb.unnamed$$_3: started at 210ns failed at 210ns\n\tOffending 'a'\n230 a=1 b=1 c=0 d=1\n\"testbench.sv\", 28: tb.unnamed$$_3: started at 190ns failed at 230ns\n\tOffending 'c'\n250 a=1 b=1 c=0 d=0\n270 a=1 b=0 c=0 d=1\n\"testbench.sv\", 28: tb.unnamed$$_3: started at 230ns failed at 270ns\n\tOffending 'c'\n290 a=0 b=1 c=1 d=0\n\"testbench.sv\", 28: tb.unnamed$$_3: started at 270ns failed at 290ns\n\tOffending 'b'\n\"testbench.sv\", 28: tb.unnamed$$_3: started at 250ns failed at 290ns\n\tOffending 'c'\n310 a=0 b=1 c=0 d=1\n\"testbench.sv\", 28: tb.unnamed$$_3: started at 310ns failed at 310ns\n\tOffending 'a'\n330 a=1 b=0 c=1 d=0\n\"testbench.sv\", 28: tb.unnamed$$_3: started at 330ns failed at 330ns\n\tOffending 'a'\n\"testbench.sv\", 28: tb.unnamed$$_3: started at 290ns failed at 330ns\n\tOffending 'c'\n350 a=0 b=1 c=0 d=1\n370 a=0 b=1 c=1 d=1\n\"testbench.sv\", 28: tb.unnamed$$_3: started at 370ns failed at 370ns\n\tOffending 'a'\n\"testbench.sv\", 28: tb.unnamed$$_3: started at 390ns failed at 390ns\n\tOffending 'a'\n$finish called from file \"testbench.sv\", line 13.\n$finish at simulation time                  400\n           V C S   S i m u l a t i o n   R e p o r t",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-68",
                "num": 68,
                "title": "SystemVerilog $rose, $fell, $stable",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "A sequence is a simple building block in SystemVerilog assertions that can represent certain expressions to aid in creating more complex properties.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Simple Sequence",
                        "content": "",
                        "code": "module tb;\n  \tbit a;\n  \tbit clk;\n  \n\t// This sequence states that a should be high on every posedge clk\n  \tsequence s_a;\n      @(posedge clk) a;\n    endsequence\n  \n  \t// When the above sequence is asserted, the assertion fails if 'a'\n  \t// is found to be not high on any posedge clk\n  \tassert property(s_a);\n\n      \n\talways #10 clk = ~clk;\n      \n\tinitial begin\n      for (int i = 0; i < 10; i++) begin        \n        a = $random;\n        @(posedge clk);\n        \n        // Assertion is evaluated in the preponed region and \n        // use $display to see the value of 'a' in that region\n        $display(\"[%0t] a=%0d\", $time, a);\n      end\n      #20 $finish;\n    end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "Compiler version P-2019.06-1; Runtime version P-2019.06-1;  Jan 14 06:32 2020\n[10] a=0\n\"testbench.sv\", 12: tb.unnamed$$_0: started at 10ns failed at 10ns\n\tOffending 'a'\n[30] a=1\n[50] a=1\n[70] a=1\n[90] a=1\n[110] a=1\n[130] a=1\n[150] a=0\n\"testbench.sv\", 12: tb.unnamed$$_0: started at 150ns failed at 150ns\n\tOffending 'a'\n[170] a=1\n[190] a=1\n$finish called from file \"testbench.sv\", line 27.\n$finish at simulation time                  210\n           V C S   S i m u l a t i o n   R e p o r t \nTime: 210 ns",
                        "lang": "verilog"
                    },
                    {
                        "title": "$rose",
                        "content": "The system task $rose is used to detect a positive edge of the given signal. In this case $rose of a indicates that a posedge of a is expected to be seen on every posedge of clk. Because SystemVerilog assertions evaluate in the preponed region, it can only detect value of the given signal in the preponed region. When value of the signal is 0 in the first edge and then 1 on the next edge, a positive edge is assumed to have happened. So, this requires 2 clocks to be identified.\n\nSee that a positive edge was detected and the assertion passed at 30ns in the image shown below. This is because value of a is 0 at 10ns and 1 at 30ns upon which the assertion completes and is proven to be successful.\n\nThe behavior is visible in the simulation log where assertion failed at all times other than 30ns and 170ns.",
                        "code": "module tb;\n  \tbit a;\n  \tbit clk;\n  \n\t// This sequence states that 'a' should rise on every posedge clk\n  \tsequence s_a;\n      @(posedge clk) $rose(a);\n    endsequence\n  \n  \t// When the above sequence is asserted, the assertion fails if \n  \t// posedge 'a' is not found on every posedge clk\n  \tassert property(s_a);\n\n      \n\t// Rest of the testbench stimulus\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "Compiler version P-2019.06-1; Runtime version P-2019.06-1;  Jan 14 06:58 2020\n[10] a=0\n\"testbench.sv\", 12: tb.unnamed$$_0: started at 10ns failed at 10ns\n\tOffending '$rose(a)'\n[30] a=1\n[50] a=1\n\"testbench.sv\", 12: tb.unnamed$$_0: started at 50ns failed at 50ns\n\tOffending '$rose(a)'\n[70] a=1\n\"testbench.sv\", 12: tb.unnamed$$_0: started at 70ns failed at 70ns\n\tOffending '$rose(a)'\n[90] a=1\n\"testbench.sv\", 12: tb.unnamed$$_0: started at 90ns failed at 90ns\n\tOffending '$rose(a)'\n[110] a=1\n\"testbench.sv\", 12: tb.unnamed$$_0: started at 110ns failed at 110ns\n\tOffending '$rose(a)'\n[130] a=1\n\"testbench.sv\", 12: tb.unnamed$$_0: started at 130ns failed at 130ns\n\tOffending '$rose(a)'\n[150] a=0\n\"testbench.sv\", 12: tb.unnamed$$_0: started at 150ns failed at 150ns\n\tOffending '$rose(a)'\n[170] a=1\n[190] a=1\n\"testbench.sv\", 12: tb.unnamed$$_0: started at 190ns failed at 190ns\n\tOffending '$rose(a)'\n$finish called from file \"testbench.sv\", line 27.\n$finish at simulation time                  210\n           V C S   S i m u l a t i o n   R e p o r t \nTime: 210 ns",
                        "lang": "verilog"
                    },
                    {
                        "title": "$fell",
                        "content": "The system task $fell is used to detect negative edge of the given signal. In this case $fell of a indicates that a negedge of a is expected to be seen on every posedge of clk. Because SystemVerilog assertions evaluate in the preponed region, it can only detect value of the given signal in the preponed region. When value of the signal is 1 on the first edge and then 0 on the next edge, a negative edge is assumed to have happened. So, this requires 2 clocks to be identified.\n\nSee that a negative edge was detected and the assertion passed at 1500ns in the image shown below. This is because value of a is 1 at 130ns and 0 at 150ns upon which the assertion completes and is proven to be successful.",
                        "code": "module tb;\n  \tbit a;\n  \tbit clk;\n  \n\t// This sequence states that 'a' should fall on every posedge clk\n  \tsequence s_a;\n      @(posedge clk) $fell(a);\n    endsequence\n  \n  \t// When the above sequence is asserted, the assertion fails if \n  \t// negedge 'a' is not found on every posedge clk\n  \tassert property(s_a);\n\n      \n\t// Rest of the testbench stimulus\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "Compiler version P-2019.06-1; Runtime version P-2019.06-1;  Jan 14 07:09 2020\n[10] a=0\n\"testbench.sv\", 12: tb.unnamed$$_0: started at 10ns failed at 10ns\n\tOffending '$fell(a)'\n[30] a=1\n\"testbench.sv\", 12: tb.unnamed$$_0: started at 30ns failed at 30ns\n\tOffending '$fell(a)'\n[50] a=1\n\"testbench.sv\", 12: tb.unnamed$$_0: started at 50ns failed at 50ns\n\tOffending '$fell(a)'\n[70] a=1\n\"testbench.sv\", 12: tb.unnamed$$_0: started at 70ns failed at 70ns\n\tOffending '$fell(a)'\n[90] a=1\n\"testbench.sv\", 12: tb.unnamed$$_0: started at 90ns failed at 90ns\n\tOffending '$fell(a)'\n[110] a=1\n\"testbench.sv\", 12: tb.unnamed$$_0: started at 110ns failed at 110ns\n\tOffending '$fell(a)'\n[130] a=1\n\"testbench.sv\", 12: tb.unnamed$$_0: started at 130ns failed at 130ns\n\tOffending '$fell(a)'\n[150] a=0\n[170] a=1\n\"testbench.sv\", 12: tb.unnamed$$_0: started at 170ns failed at 170ns\n\tOffending '$fell(a)'\n[190] a=1\n\"testbench.sv\", 12: tb.unnamed$$_0: started at 190ns failed at 190ns\n\tOffending '$fell(a)'\n$finish called from file \"testbench.sv\", line 27.\n$finish at simulation time                  210\n           V C S   S i m u l a t i o n   R e p o r t \nTime: 210 ns",
                        "lang": "verilog"
                    },
                    {
                        "title": "$stable",
                        "content": "",
                        "code": "module tb;\n  \tbit a;\n  \tbit clk;\n  \n\t// This sequence states that 'a' should be stable on every clock\n\t// and should not have posedge/negedge at any posedge clk\n  \tsequence s_a;\n      @(posedge clk) $stable(a);\n    endsequence\n  \n  \t// When the above sequence is asserted, the assertion fails if \n  \t// 'a' toggles at any posedge clk\n  \tassert property(s_a);\n\n      \n\t// Rest of the testbench stimulus\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "Compiler version P-2019.06-1; Runtime version P-2019.06-1;  Jan 14 07:12 2020\n[10] a=0\n[30] a=1\n\"testbench.sv\", 12: tb.unnamed$$_0: started at 30ns failed at 30ns\n\tOffending '$stable(a)'\n[50] a=1\n[70] a=1\n[90] a=1\n[110] a=1\n[130] a=1\n[150] a=0\n\"testbench.sv\", 12: tb.unnamed$$_0: started at 150ns failed at 150ns\n\tOffending '$stable(a)'\n[170] a=1\n\"testbench.sv\", 12: tb.unnamed$$_0: started at 170ns failed at 170ns\n\tOffending '$stable(a)'\n[190] a=1\n$finish called from file \"testbench.sv\", line 27.\n$finish at simulation time                  210\n           V C S   S i m u l a t i o n   R e p o r t \nTime: 210 ns",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-69",
                "num": 69,
                "title": "SystemVerilog Assertions with time delay",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "Until now in previous articles, simple boolean expressions were checked on every clock edge. But sequential checks take several clock cycles to complete and the time delay is specified by ## sign.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "## Operator",
                        "content": "If a is not high on any given clock cycle, the sequence starts and fails on the same cycle. However, if a is high on any clock, the assertion starts and succeeds if b is high 2 clocks later. It fails if b is low 2 clocks later.",
                        "code": "module tb;\n  bit a, b;\n  bit clk;\n  \n  // This is a sequence that says 'b' should be high 2 clocks after\n  // 'a' is found high. The sequence is checked on every positive\n  // edge of the clock which ultimately ends up having multiple \n  // assertions running in parallel since they all span for more\n  // than a single clock cycle.\n  sequence s_ab;\n    @(posedge clk) a ##2 b;\n  endsequence\n  \n  // Print a display statement if the assertion passed\n  assert property(s_ab) \n  \t$display (\"[%0t] Assertion passed !\", $time);\n  \n  always #10 clk = ~clk;\n  \n  initial begin\n    for (int i = 0; i < 10; i++) begin\n      @(posedge clk);\n      a <= $random;\n      b <= $random;                    \n      \n      $display(\"[%0t] a=%b b=%b\", $time, a, b);\n    end\n    \n    #20 $finish;\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "Compiler version P-2019.06-1; Runtime version P-2019.06-1;  Jan 16 06:49 2020\n[10] a=0 b=0\n\"testbench.sv\", 14: tb.unnamed$$_0: started at 10ns failed at 10ns\n\tOffending 'a'\n[30] a=0 b=1\n\"testbench.sv\", 14: tb.unnamed$$_0: started at 30ns failed at 30ns\n\tOffending 'a'\n[50] a=1 b=1\n[70] a=1 b=1\n[90] a=1 b=0\n\"testbench.sv\", 14: tb.unnamed$$_0: started at 50ns failed at 90ns\n\tOffending 'b'\n[110] a=1 b=1\n[110] Assertion passed !\n[130] a=0 b=1\n\"testbench.sv\", 14: tb.unnamed$$_0: started at 130ns failed at 130ns\n\tOffending 'a'\n[130] Assertion passed !\n[150] a=1 b=0\n\"testbench.sv\", 14: tb.unnamed$$_0: started at 110ns failed at 150ns\n\tOffending 'b'\n[170] a=1 b=0\n[190] a=1 b=0\n\"testbench.sv\", 14: tb.unnamed$$_0: started at 150ns failed at 190ns\n\tOffending 'b'\n$finish called from file \"testbench.sv\", line 27.\n$finish at simulation time                  210\n           V C S   S i m u l a t i o n   R e p o r t \nTime: 210 ns",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-70",
                "num": 70,
                "title": "SystemVerilog Interface",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "What is an Interface ?",
                        "content": "An Interface is a way to encapsulate signals into a block. All related signals are grouped together to form an interface block so that the same interface can be re-used for other projects. Also it becomes easier to connect with the DUT and other verification components.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Example",
                        "content": "APB bus protocol signals are put together in the given interface. Note that signals are declared within interface and endinterface.",
                        "code": "interface apb_if (input pclk);\n\tlogic [31:0]    paddr;\n\tlogic [31:0]    pwdata;\n\tlogic [31:0]    prdata;\n\tlogic           penable;\n\tlogic           pwrite;\n\tlogic           psel;\nendinterface",
                        "lang": "verilog"
                    },
                    {
                        "title": "Why are signals declared logic ?",
                        "content": "logic is a new data type that lets you drive signals of this type via assign statements and in a procedural block. Remember that in verilog, you could drive a reg only in procedural block and a wire only in assign statement. But this is only one reason.\n\nSignals connected to the DUT should support 4-states so that X/Z values can be caught. If these signals were bit then the X/Z would have shown up as 0, and you would have missed that DUT had a X/Z value.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "How to define port directions ?",
                        "content": "Interface signals can be used within various verification components as well as the DUT, and hence modport is used to define signal directions. Different modport definitions can be passed to different components that allows us to define different input-output directions for each component.\n\nClick here to read more on SystemVerilog modports !",
                        "code": "interface myBus (input clk);\n  logic [7:0]  data;\n  logic      enable;\n \n  // From TestBench perspective, 'data' is input and 'write' is output\n  modport TB  (input data, clk, output enable);  \n \n  // From DUT perspective, 'data' is output and 'enable' is input\n  modport DUT (output data, input enable, clk); \nendinterface",
                        "lang": "verilog"
                    },
                    {
                        "title": "How to connect an interface with DUT ?",
                        "content": "An interface object should be created in the top testbench module where DUT is instantiated, and passed to DUT. It is essential to ensure that the correct modport is assigned to DUT.",
                        "code": "module dut (myBus busIf);\n  always @ (posedge busIf.clk) \n    if (busIf.enable)\n      busIf.data <= busIf.data+1;\n    else \n      busIf.data <= 0;\nendmodule \n \n \n// Filename : tb_top.sv\nmodule tb_top;\n  bit clk;\n \n  // Create a clock\n  always #10 clk = ~clk;\n \n  // Create an interface object\n  myBus busIf (clk);\n \n  // Instantiate the DUT; pass modport DUT of busIf\n  dut dut0 (busIf.DUT);\n \n  // Testbench code : let's wiggle enable\n  initial begin\n    busIf.enable  <= 0;\n    #10 busIf.enable <= 1;\n    #40 busIf.enable <= 0;\n    #20 busIf.enable <= 1;\n    #100 $finish;\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "What are the advantages ?",
                        "content": "Interfaces can contain tasks, functions, parameters, variables, functional coverage, and assertions. This enables us to monitor and record the transactions via the interface within this block. It also becomes easier to connect to design regardless of the number of ports it has since that information is encapsulated in an interface.",
                        "code": "//Before interface\ndut dut0  (.data (data),\n           .enable (enable),\n           //  all other signals\n           );\n\n// With interface - higher level of abstraction possible\ndut dut0  (busIf.DUT);",
                        "lang": "verilog"
                    },
                    {
                        "title": "How to parameterize an interface ?",
                        "content": "The same way you would do for a module.",
                        "code": "interface myBus #(parameter D_WIDTH=31) (input clk);\n\tlogic [D_WIDTH-1:0] data;\n\tlogic               enable;\nendinterface",
                        "lang": "verilog"
                    },
                    {
                        "title": "What are clocking blocks ?",
                        "content": "Signals that are specified inside a clocking block will be sampled/driven with respect to that clock. There can be mulitple clocking blocks in an interface. Note that this is for testbench related signals. You want to control when the TB drives and samples signals from DUT. Solves some part of the race condition, but not entirely. You can also parameterize the skew values.\n\nIn the above example, we have specified that by default, input should be sampled 3ns before posedge of clk, and output should be driven 2ns after posedge of clk.\n\nClick here to read more on clocking blocks !",
                        "code": "interface my_int (input bit clk);\n\t// Rest of interface code\n\t\n\tclocking cb_clk @(posedge clk);\n\t\tdefault input #3ns output #2ns;\n\t\tinput enable;\n\t\toutput data;\n\tendclocking\nendinterface",
                        "lang": "verilog"
                    },
                    {
                        "title": "How to use a clocking block ?",
                        "content": "As you can see, you don't have to wait for the posedge of clk, before you assign 1 to enable. This way, you are assured that enable will be driven 2ns after the next posedge clk.",
                        "code": "// To wait for posedge of clock\n@busIf.cb_clk;\n\n// To use clocking block signals\nbusIf.cb_clk.enable = 1;",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-71",
                "num": 71,
                "title": "SystemVerilog Interface Intro",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "A SystemVerilog interface allows us to group a number of signals together and represent them as a single port. All these signals can be declared and maintained at a single place and be easily maintained. Signals within an interface are accessed by the interface instance handle.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Syntax",
                        "content": "Interface blocks are defined and described within interface and endinterface keywords. It can be instantiated like a module with or without ports.\n\nInterfaces can also have functions, tasks, variables, and parameters making it more like a class template. It also has the ability to define policies of directional information for different module ports via the modport construct along with testbench synchronization capabilities with clocking blocks. It can also have assertions, coverage recording and other protocol checking elements. Last but not the least, it can also contain initial and always procedures and continuous assign statements.\n\nA module cannot be instantiated in an interface ! But an interface can be instantiated within a module.\n\nSystemVerilog is now popular as a HDL and let's see two cases where an interface is used with the same design in both Verilog and SystemVerilog. To keep things simple in this introductory example, we'll just create a simple interface.",
                        "code": "interface [name] ([port_list]);\n\t[list_of_signals]\nendinterface",
                        "lang": "verilog"
                    },
                    {
                        "title": "Interface with a Verilog Design",
                        "content": "Let us see how an interface can be used in the testbench and connected to a standard Verilog design with a portlist. The code shown below is a design of an up-down counter in Verilog. This module accepts a parameter to decide the width of the counter. It also accepts an input load value load that is loaded into the counter only when load_en is 1.\n\nThe counter starts counting down when the input down is 1 and otherwise it counts upwards. The rollover output indicates when the counter either transitions from a max_value to 0 or a 0 to max_value.\n\nAn interface called cnt_if is declared below with a parameterizable value as the width of the counter signal. This task also has a task init() to assign values",
                        "code": "module counter_ud \n  #(parameter WIDTH = 4)\n  ( \n  input \t\t\t\t\tclk,\n  input \t\t\t\t\trstn,\n  input wire [WIDTH-1:0]\tload,\n  input \t\t\t\t\tload_en,\n  input \t\t\t\t\tdown,\n  output \t\t\t\t\trollover,\n  output reg [WIDTH-1:0]\tcount \n);\n  \n  always @ (posedge clk or negedge rstn) begin\n    if (!rstn)\n   \t\tcount <= 0;\n    else \n      if (load_en)\n        count <= load;\n      else begin\n      \tif (down)\n        \tcount <= count - 1;\n      \telse\n        \tcount <= count + 1;\n      end\n  end\n  \n  assign rollover = &count;\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "interface cnt_if #(parameter WIDTH = 4) (input bit clk);\n  logic \t\t\trstn;\n  logic \t\t\tload_en;\n  logic [WIDTH-1:0] load;\n  logic [WIDTH-1:0] count;\n  logic \t\t\tdown;\n  logic \t\t\trollover;\nendinterface\n\nmodule tb;\n  reg clk;\n  \n  // TB Clock Generator used to provide the design\n  // with a clock -> here half_period = 10ns => 50 MHz\n  always #10 clk = ~clk;\n  \n  cnt_if \t  cnt_if0 (clk);\n  counter_ud  c0 ( \t.clk \t\t(cnt_if0.clk),\n                  \t.rstn \t\t(cnt_if0.rstn),\n                  \t.load \t\t(cnt_if0.load),\n                  \t.load_en \t(cnt_if0.load_en),\n                  \t.down \t\t(cnt_if0.down),\n                  \t.rollover \t(cnt_if0.rollover),\n                  \t.count \t\t(cnt_if0.count));\n  \n  initial begin\n    bit load_en, down;\n    bit [3:0] load;\n    \n    $monitor(\"[%0t] down=%0b load_en=%0b load=0x%0h count=0x%0h rollover=%0b\", \n    \t$time, cnt_if0.down, cnt_if0.load_en, cnt_if0.load, cnt_if0.count, cnt_if0.rollover);\n        \n    // Initialize testbench variables\n    clk <= 0;\n    cnt_if0.rstn <= 0;\n    cnt_if0.load_en <= 0;\n    cnt_if0.load <= 0;\n    cnt_if0.down <= 0;\n    \n    // Drive design out of reset after 5 clocks\n    repeat (5) @(posedge clk);\n    cnt_if0.rstn <= 1;\n    \n    // Drive stimulus -> repeat 5 times\n    for (int i = 0; i < 5; i++) begin\n      \n      // Drive inputs after some random delay \n      int delay = $urandom_range (1,30);\n      #(delay);\n      \n      // Randomize input values to be driven\n      std::randomize(load, load_en, down);\n     \n      // Assign tb values to interface signals\n      cnt_if0.load <= load;\n      cnt_if0.load_en <= load_en;\n      cnt_if0.down <= down;\n    end\n    \n    // Wait for 5 clocks and finish simulation\n    repeat(5) @ (posedge clk);\n    $finish;\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\n[0] down=0 load_en=0 load=0x0 count=0x0 rollover=0\n[96] down=1 load_en=1 load=0x1 count=0x0 rollover=0\n[102] down=0 load_en=0 load=0x9 count=0x0 rollover=0\n[108] down=1 load_en=1 load=0x1 count=0x0 rollover=0\n[110] down=1 load_en=1 load=0x1 count=0x1 rollover=0\n[114] down=1 load_en=0 load=0xc count=0x1 rollover=0\n[120] down=1 load_en=0 load=0x7 count=0x1 rollover=0\n[130] down=1 load_en=0 load=0x7 count=0x0 rollover=0\n[150] down=1 load_en=0 load=0x7 count=0xf rollover=1\n[170] down=1 load_en=0 load=0x7 count=0xe rollover=0\n[190] down=1 load_en=0 load=0x7 count=0xd rollover=0\nSimulation complete via $finish(1) at time 210 NS + 0",
                        "lang": "verilog"
                    },
                    {
                        "title": "Interface with a SystemVerilog design",
                        "content": "Let us now see how an interface can be used in the testbench and be connected to a SystemVerilog design module. SystemVerilog allows a module to accept an interface as the portlist instead of individual signals. In the design example shown below, we have substituted the portlist of counter_ud with an interface handle which is used to define design functionality.\n\nThe design instance is passed an interface handle called cnt_if and is used to drive inputs to the design from the testbench. The same interface handle can be used to monitor outputs from the design if required.",
                        "code": "`timescale 1ns/1ns\n\n// This module accepts an interface object as the port list\nmodule counter_ud  #(parameter WIDTH = 4) (cnt_if _if);\n  always @ (posedge _if.clk or negedge _if.rstn) begin\n    if (!_if.rstn)\n   \t\t_if.count <= 0;\n    else \n      if (_if.load_en)\n        _if.count <= _if.load;\n      else begin\n        if (_if.down)\n        \t_if.count <= _if.count - 1;\n      \telse\n        \t_if.count <= _if.count + 1;\n      end\n  end\n  \n  assign _if.rollover = &_if.count;\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "// Interface definition is the same as before\n\nmodule tb;\n  reg clk;\n  \n  // TB Clock Generator used to provide the design\n  // with a clock -> here half_period = 10ns => 50 MHz\n  always #10 clk = ~clk;\n  \n  cnt_if \t  cnt_if0 (clk);\n  \n  // Note that here we just have to pass the interface handle\n  // to the design instead of connecting each individual signal\n  counter_ud  c0 (cnt_if0);\n  \n  // Stimulus remains the same as before",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\n[0] down=0 load_en=0 load=0x0 count=0x0 rollover=0\n[96] down=1 load_en=1 load=0x1 count=0x0 rollover=0\n[102] down=0 load_en=0 load=0x9 count=0x0 rollover=0\n[108] down=1 load_en=1 load=0x1 count=0x0 rollover=0\n[110] down=1 load_en=1 load=0x1 count=0x1 rollover=0\n[114] down=1 load_en=0 load=0xc count=0x1 rollover=0\n[120] down=1 load_en=0 load=0x7 count=0x1 rollover=0\n[130] down=1 load_en=0 load=0x7 count=0x0 rollover=0\n[150] down=1 load_en=0 load=0x7 count=0xf rollover=1\n[170] down=1 load_en=0 load=0x7 count=0xe rollover=0\n[190] down=1 load_en=0 load=0x7 count=0xd rollover=0\nSimulation complete via $finish(1) at time 210 NS + 0",
                        "lang": "verilog"
                    },
                    {
                        "title": "What makes it different from Verilog ?",
                        "content": "Verilog connects between different modules through its module ports. For large designs, this method of connection can become more time consuming and repetitious. Some of these ports may include signals related to bus protocols like AXI/AHB, clock and reset pins, signals to and from RAM/memory and to other peripheral devices.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Using Verilog Ports",
                        "content": "This is the traditional way of port connection in Verilog.\n\nLet us consider a scenario where there are twelve slaves in the design shown above. If there is a change made at the d_slave module ports, then the change has to be reflected in all the twelve slave instance connections in d_top as well.",
                        "code": "module d_slave ( input  clk,\n                            reset,\n                            enable,\n                            // Many more input signals\n                      output gnt,\n                             irq,\n                             // Many more output signals);\n    // Some design functionality\n    endmodule\n                             \n\tmodule d_top ( [top_level_ports] );\n\t    reg [`NUM_SLAVES-1:0] clk;                  // Assume `NUM_SLAVES is a macro set to 2\n\t    reg [`NUM_SLAVES-1:0] tb_reset;\n\t    // Other declarations\n\t    \n\t\td_slave slave_0  (  .clk   (d_clk[0]),      // These connections have to be \n\t\t                  \t.reset (d_reset[0]) \t// repeated for all other slave instances\n\t\t                  \t\t...\n\t\t                  \t.gnt (d_gnt[0]),\n\t\t                  \t... );\n\t\t                  \t\n\t\td_slave slave_1  ( ... );\n\t\td_slave slave_2  ( ... );\n\tendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Disadvantages",
                        "content": "Some cons of using Verilog port method for connection are :",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Using SystemVerilog Interface",
                        "content": "Note that the module d_top simply uses the interface to connect with the slave instances instead of repetitively declaring connection to each signal of the slave block as shown before.\n\nNow, if there is a change to one of the signals in the slave interface, it is automatically applied to all the instances. In SystemVerilog, the module portlist can also have a port with an interface type instead of the usual input, output and inout.",
                        "code": "interface slave_if (input logic clk, reset);\n\treg clk;\n\treg reset;\n\treg enable;\n\t\n\treg gnt;\n\t// Declarations for other signals follow\nendinterface\n\nmodule d_slave (slave_if s_if);\n\n\t// Design functionality\n\talways (s_if.enable & s_if.gnt) begin \t// interface signals are accessed by the handle \"s_if\"\n\t\t// Some behavior\n\tend\nendmodule\n\nmodule d_top (input clk, reset);\n\t// Create an instance of the slave interface\n\tslave_if \tslave_if_inst ( .clk (clk),\n\t                            .reset (reset));\n\t\n\td_slave \tslave_0 (.s_if (slave_if_inst));\n\td_slave \tslave_1 (.s_if (slave_if_inst));\n\td_slave \tslave_2 (.s_if (slave_if_inst));\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Interface Array",
                        "content": "In the example below an interface named myInterface with an empty port list is created and instantiated within the top level testbench module. It is also fine to omit the parenthesis for an empty port list and instead truncate the statement with a semicolon\n\nA single interface called if0 can be instantiated and signals within this interface should be accessed by referencing this handle. This can then be used to drive and sample signals going to the DUT.\n\nWe can also have an array of interfaces. Here this array is referred by the name wb_if which has 4 instances of the interface.",
                        "code": "// interface myInterface;\n\t\n\tinterface myInterface ();\n\t\treg \t\tgnt;\n\t\treg \t\tack;\n\t\treg [7:0]\tirq;\n\t\t\n\t\t... \n\tendinterface\n\t\n\tmodule tb;\n\t\t// Single interface handle\n\t\tmyInterface \tif0 ();   \n\t\t\n\t\t// An array of interfaces\n\t\tmyInterface \twb_if [3:0] ();\n\t\t\n\t\t// Rest of the testbench\n\tendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "When an interface is referenced as a port, the variables and nets in it are assumed to have ref and inout access respectively. If same identifiers are used as interface instance name and port name in the design, then implicit port connections can also be used.",
                        "code": "module myDesign ( myInterface dut_if, \n\t                  input logic clk);\n\t                  \n\t\talways @(posedge clk)\n\t\t\tif (dut_if.ack)\n\t\t\t\tdut_if.gnt <= 1;\n\t\t\t\t\n\tendmodule\n\n\tmodule tb;\n\t\treg clk;\n\t\n\t\t// Single interface handle connection\n\t\tmyInterface  if0;\n\t\tmyDesign \t top (if0, clk);\n\t\t\n\t\t// Or connect by name\n\t\t// myDesign  top (.dut_if(if0), .clk(clk)); \n\t\t\n\t\t// Multiple design instances connected to the appropriate\n\t\t// interface handle\n\t\tmyDesign \tmd0 (wb_if[0], clk);\n\t\tmyDesign \tmd1 (wb_if[1], clk);\n\t\tmyDesign \tmd2 (wb_if[2], clk);\n\t\tmyDesign \tmd3 (wb_if[3], clk);\n\t\t\n\tendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Note ! An error will occur if an interface without ports is defined without parentheses ().",
                        "code": "module tb;\n\t\treg clk;\n\t\t\n\t\tmyInterface \tdut_if();\n\t\t\n\t\t// Can use implicit port connection when all port signals have same name\n\t\tmyDesign \t\ttop (.*);\n\t\t\n\tendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "// Declare an interface without ports                  \ninterface mif;\n  logic m_a;                  \nendinterface\n\nmodule tb;\n  mif   m_if;      // ERROR !\n  mif   m_if();    // Okay                  \nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "mif \tm_if;\n      \t   |\nxmvlog: *E,NOIPRT (testbench.sv,12|10): Unrecognized declaration 'm_if' could be an unsupported keyword, a spelling mistake or missing instance port list '()' [SystemVerilog].",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-72",
                "num": 72,
                "title": "SystemVerilog Interface Bundles",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "Introduction covered the need for an interface, how to instantiate and connect the interface with a design. There are two ways in which the design can be written:\n\nObviously, the generic method works best when interface definitions are updated to newer versions with a different name, and needs to support older designs that use it.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Example using a named bundle",
                        "content": "In this case, the design references the actual interface name for access to its signals. The example below shows that both design modules myDesign and yourDesign declares a port in the port list called if0 of type myInterface to access signals.",
                        "code": "module myDesign  (  myInterface  if0, \n\t                    input logic  clk);\n\t\talways @ (posedge clk)\n\t\t\tif (if0.ack)\n\t\t\t\tif0.gnt <= 1;\n\t\t\t\t\n\t\t...\n\tendmodule\n\t\n\tmodule yourDesign (  myInterface \tif0,\n\t\t\t\t\t\t input logic \tclk);\n\t\t...\n\t\t\n\tendmodule\n\t\n\tmodule tb;\n\t\tlogic clk = 0;\n\t\t\n\t\tmyInterface \t_if;\n\t\t\n\t\tmyDesign \tmd0 \t(_if, clk);\n\t\tyourDesign\tyd0 \t(_if, clk);\n\t\t\n\tendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Example using a generic bundle",
                        "content": "In this case, the design uses the interface keyword as a placeholder for the actual interface type. The example below shows that both the design modules myDesign and yourDesign uses the placeholder handle to reference signals. The actual interface is then passed during design module instantiation. This generic interface reference can only be declared using ANSI style of port declaration syntax and is illegal otherwise.",
                        "code": "module myDesign  ( interface  a, \n\t                   input logic  clk);\n\t                   \n\t\talways @ (posedge clk)\n\t\t\tif (if0.ack)\n\t\t\t\tif0.gnt <= 1;\n\t\t\t\t\n\t\t...\n\tendmodule\n\t\n\tmodule yourDesign (  interface \t\tb,\n\t\t\t\t\t\t input logic \tclk);\n\t\t...\n\t\t\n\tendmodule\n\t\n\tmodule tb;\n\t\tlogic clk = 0;\n\t\t\n\t\tmyInterface  _if;\n\t\t\n\t\tmyDesign \tmd0 ( .*, .a(_if));   // use partial implicit port connections\n\t\tyourDesign\tyd0 ( .*, .b(_if));\n\t\t\n\tendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-73",
                "num": 73,
                "title": "SystemVerilog Clocking Blocks Part 1",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Why Do We Need Clocking Blocks?",
                        "content": "Imagine you are writing a testbench to verify a simple design. You drive an input signal and then want to read back an output. The problem is: when exactly do you sample it? In simulation, a clock edge and your testbench code can both execute in the same time step. If your testbench reads a signal at the exact same moment the design is updating it, you can get unpredictable — or just plain wrong — values. This is called a race condition.\n\nA clocking block solves this by acting as a timing contract between your testbench and the design. It tells the simulator: \"read these signals a little before the clock edge, and drive them a little after the clock edge.\" This way your testbench never races with the design logic. It also lets you think in terms of transactions and cycles, rather than worrying about nanosecond-level timing every time you write a stimulus.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "What Is a Clocking Block?",
                        "content": "A clocking block is a named group of signals that all share the same clock. It is declared using the clocking and endclocking keywords. Once declared, any signal inside the block will be sampled (read) or driven (written) relative to that clock edge, automatically applying the timing rules you set.\n\nA few important rules to know upfront:",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Direction Convention — A Common Source of Confusion",
                        "content": "Before looking at syntax, let's make the direction rule very clear. Suppose your design has a grant output and a request input:\n\nThink of the clocking block as sitting inside the testbench, looking at the design. What comes toward you is an input; what you send out is an output.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Basic Syntax",
                        "content": "Here is the simplest possible clocking block — one clock, two signals, no custom skew:\n\nThat's it. When the simulator hits a positive edge of clk, gnt will be sampled and req can be driven according to the default timing rules.",
                        "code": "clocking cb @(posedge clk);\n  input  gnt;   // testbench reads this (design drives it)\n  output req;   // testbench drives this (design reads it)\nendclocking",
                        "lang": "verilog"
                    },
                    {
                        "title": "Adding Default Skew",
                        "content": "You can tell the clocking block how far before the clock edge to sample inputs, and how far after to drive outputs. This offset is called a skew.\n\nYou can also override the skew for individual signals. In the example below, req gets its own output skew of negedge, meaning it will be driven at the negative edge of the clock instead of using the default:",
                        "code": "clocking cb @(posedge clk);\n  default input #1step output #2ns;\n  input  gnt;\n  output req;\nendclocking",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "clocking ck1 @(posedge clk);\n  default input #1step output #2ns;\n  input  gnt;\n  output negedge req;\nendclocking",
                        "lang": "verilog"
                    },
                    {
                        "title": "Full Syntax Reference",
                        "content": "The default keyword before clocking marks this as the default clocking block for the scope — useful when you have multiple clocking blocks and want one to be used by default for cycle-delay operators.",
                        "code": "[default] clocking [block_name] @ [clock_event]\n  default input #[skew] output #[skew];\n  input  [signal_list];\n  output [signal_list];\nendclocking",
                        "lang": "verilog"
                    },
                    {
                        "title": "Signal Aliasing",
                        "content": "You can also bring in a signal from elsewhere in the design hierarchy by giving it a local name inside the clocking block:\n\nHere ready = top.dut.ready creates an alias — inside this clocking block, you refer to top.dut.ready simply as ready. This is handy for signals that are buried deep in the hierarchy.",
                        "code": "clocking ck1 @(posedge clk);\n  input data, valid, ready = top.dut.ready;\nendclocking",
                        "lang": "verilog"
                    },
                    {
                        "title": "Declaring a Clocking Block Inside an Interface",
                        "content": "The most practical place to put a clocking block is inside a SystemVerilog interface. This way the timing rules travel with the signals — you connect the interface to your testbench once and everything is taken care of.\n\nHere is a minimal but complete example. The design is a simple request-grant block: it asserts gnt one clock after it sees req.",
                        "code": "// Design under test\nmodule des (input logic clk, req, output logic gnt);\n  always @(posedge clk)\n    gnt <= req;\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "// Interface with a clocking block\ninterface req_gnt_if (input logic clk);\n  logic req;\n  logic gnt;\n\n  clocking cb @(posedge clk);\n    default input #1step output #1ns;\n    input  gnt;   // testbench reads: comes from design\n    output req;   // testbench drives: goes into design\n  endclocking\nendinterface",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Notice how the testbench drives and samples signals using vif.cb.req and vif.cb.gnt — always going through the clocking block. This ensures the timing rules are applied every time.\n\nAlso note that @(vif.cb) is how you wait for the clocking block's clock event — it is cleaner than writing @(posedge clk) directly and keeps your testbench independent of the clock definition.",
                        "code": "// Testbench\nmodule tb;\n  logic clk;\n\n  // Generate a 10ns clock (posedge at 0, 10, 20 ...)\n  initial clk = 0;\n  always #5 clk = ~clk;\n\n  // Instantiate the interface and the design\n  req_gnt_if vif (.clk(clk));\n  des dut (.clk(clk), .req(vif.req), .gnt(vif.gnt));\n\n  initial begin\n    // Drive req through the clocking block\n    vif.cb.req <= 0;\n\n    @(vif.cb);          // wait for one clock edge\n    vif.cb.req <= 1;    // assert request\n\n    @(vif.cb);          // wait one more clock\n    $display(\"gnt = %b\", vif.cb.gnt);  // read grant\n\n    @(vif.cb);\n    vif.cb.req <= 0;\n\n    #20 $finish;\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Default Skew Behaviour When Not Specified",
                        "content": "If you declare a clocking block without any skew at all, the simulator applies these defaults:",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Self-Check Question",
                        "content": "A design has a 20 ns clock period. Your interface declares output #3ns req in the clocking block. If the positive clock edge occurs at simulation time 100 ns, at what simulation time will req be driven after your testbench executes vif.cb.req <= 1? (Answer: 103 ns)",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-74",
                "num": 74,
                "title": "SystemVerilog Clocking Blocks Part 2",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Recap: What Is a Skew?",
                        "content": "In Part 1 we saw that a clocking block lets you group signals under a clock and apply timing rules to them. Those timing rules are called skews. This article goes deep on how input and output skews work, what #1step and #0 actually mean in simulation, and how to read the waveforms that result.\n\nHere is the key intuition before we look at any code:\n\nThink of it like a daily 9:00 am team meeting. An input skew of 2 ns is like taking notes on what is happening at 8:58 am — just before the meeting. An output skew of 5 ns is like sending your decisions 5 minutes after the meeting starts. The clock edge is the meeting; the skew controls when you observe or act.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Skew Syntax",
                        "content": "Skews can be specified as a default for all signals in the block, or per-signal to override the default. They can also be specified in time units (like #2ns, #1ps) or as bare numbers that follow the active timescale:\n\nFor the bare #2 on gnt: if the active timescale is 1ns/1ps, then #2 means 2 ns. If it were 1ps/1ps, it would mean 2 ps.\n\nAlways check your timescale when using bare numbers !",
                        "code": "clocking cb @(posedge clk);\n  input  #1ps  req;     // sample 1 ps before posedge clk\n  output #2    gnt;     // drive 2 time-units after posedge clk (follows timescale)\n  input  #1 output #3 sig;  // inout: sample 1 unit before, drive 3 units after\nendclocking",
                        "lang": "verilog"
                    },
                    {
                        "title": "The Special Case: #1step",
                        "content": "#1step is the most commonly used input skew, and it is worth understanding precisely. Instead of specifying a time offset, it tells the simulator to sample the signal in the Preponed region of the current time step. This region runs before any active logic evaluates at that time — which means you are guaranteed to read the value the signal had at the end of the previous time step, before any new changes take effect.\n\nIn practical terms: #1step gives you the last stable, settled value of the signal just before the clock edge fires. It is the safest choice for inputs because it completely sidesteps race conditions.",
                        "code": "clocking cb @(posedge clk);\n  input #1step req;   // sample req in the Preponed region — always safe\nendclocking",
                        "lang": "verilog"
                    },
                    {
                        "title": "The Special Case: Output with #0 or No Skew",
                        "content": "Outputs declared with #0 or with no skew at all are driven in the Re-NBA region of the same time step as the clock edge. The Re-NBA region runs after all non-blocking assignments in the design have settled. This ensures your testbench output does not interfere with what the design is computing on the same edge. It is not simply \"zero nanoseconds\" — it is a deliberate scheduling position that keeps testbench and design updates separated.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "A Complete Example",
                        "content": "Let's build a working example step by step. The design is a simple request-grant module: it asserts gnt as soon as it sees req high.\n\nThe interface bundles the signals and the clocking block together. Here we give gnt an input skew of 1 ns (sample it 1 ns before the positive edge) and req an output skew of 5 ns (drive it 5 ns after the positive edge):",
                        "code": "module des (input logic req, clk, output logic gnt);\n  always @(posedge clk)\n    gnt <= req ? 1 : 0;\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "The testbench drives req through the clocking block and then reads back gnt:",
                        "code": "interface req_gnt_if (input logic clk);\n  logic gnt;\n  logic req;\n\n  clocking cb @(posedge clk);\n    input  #1ns gnt;   // sample gnt 1ns before posedge\n    output #5ns req;   // drive  req 5ns after  posedge\n  endclocking\nendinterface",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "From a waveform viewer you would see that every time the testbench assigns vif.cb.req, the actual change on the wire appears 5 ns after the positive clock edge — not at the edge itself. This is the output skew at work.",
                        "code": "module tb;\n  logic clk;\n\n  initial clk = 0;\n  always #10 clk = ~clk;   // 20ns period, posedge at 0, 20, 40 ...\n\n  req_gnt_if vif (.clk(clk));\n  des dut (.clk(clk), .req(vif.req), .gnt(vif.gnt));\n\n  initial begin\n    vif.cb.req <= 0;\n\n    // Toggle req several times at random intervals\n    repeat (5) begin\n      repeat ($urandom_range(1,3)) @(vif.cb);\n      vif.cb.req <= ~vif.cb.req;\n    end\n\n    #40 $finish;\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Output Skew in Detail",
                        "content": "To make output skew very visible, here is an interface with three clocking blocks that all share the same clock but each has a different output skew:\n\nThe testbench iterates through three rounds, using a different clocking block each time to assert req:",
                        "code": "interface _if (input logic clk);\n  logic req;\n\n  clocking cb_0 @(posedge clk);\n    output #0ns req;    // driven in Re-NBA region (same edge)\n  endclocking\n\n  clocking cb_1 @(posedge clk);\n    output #2ns req;    // driven 2ns after posedge\n  endclocking\n\n  clocking cb_2 @(posedge clk);\n    output #5ns req;    // driven 5ns after posedge\n  endclocking\nendinterface",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Note on the direct assignment: The line vif.req <= 0 bypasses the clocking block intentionally — it is used here only to reset the signal between test rounds, not as part of the timed stimulus. In a real testbench you would always drive stimulus through the clocking block; direct assignments skip the skew and should only be used for housekeeping tasks like initialization or reset.\n\nIn a waveform viewer, all three rounds will show req going high at different offsets from the clock edge: immediately (Re-NBA region), 2 ns later, and 5 ns later. The clock edge itself is the same in all three cases — only the output skew differs.",
                        "code": "module tb;\n  logic clk;\n\n  initial clk = 0;\n  always #10 clk = ~clk;\n\n  _if vif (.clk(clk));\n\n  initial begin\n    for (int i = 0; i < 3; i++) begin\n      repeat (2) @(vif.cb_0);   // wait 2 posedges\n\n      case (i)\n        0: vif.cb_0.req <= 1;   // driven at Re-NBA of posedge\n        1: vif.cb_1.req <= 1;   // driven 2ns after posedge\n        2: vif.cb_2.req <= 1;   // driven 5ns after posedge\n      endcase\n\n      repeat (2) @(vif.cb_0);\n      vif.req <= 0;             // direct reset between rounds (no clocking block skew intended here)\n    end\n    #20 $finish;\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Input Skew in Detail",
                        "content": "Input skew controls when the clocking block takes a snapshot of a signal. To demonstrate this clearly, we use a design that drives a random 4-bit value every 1 ns — so the signal is changing quickly and different sampling times will capture different values:\n\nThe interface has four clocking blocks, each sampling gnt at a different point relative to the positive clock edge:",
                        "code": "module des (output logic [3:0] gnt);\n  always #1 gnt <= $random;\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "The testbench launches four parallel threads. Each thread waits for its own clocking block's edge and then prints the sampled value:",
                        "code": "interface _if (input logic clk);\n  logic [3:0] gnt;\n\n  clocking cb_0 @(posedge clk);\n    input #0     gnt;      // sample at posedge, in Observed region\n  endclocking\n\n  clocking cb_1 @(posedge clk);\n    input #1step gnt;      // sample in Preponed region (just before posedge)\n  endclocking\n\n  clocking cb_2 @(posedge clk);\n    input #1ns   gnt;      // sample 1ns before posedge\n  endclocking\n\n  clocking cb_3 @(posedge clk);\n    input #2ns   gnt;      // sample 2ns before posedge\n  endclocking\nendinterface",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Example output (exact values depend on the simulation seed):",
                        "code": "module tb;\n  logic clk;\n\n  initial clk = 0;\n  always #5 clk = ~clk;   // 10ns period\n\n  _if    vif (.clk(clk));\n  des    dut (.gnt(vif.gnt));\n\n  initial begin\n    fork\n      begin @(vif.cb_0); $display(\"cb_0 (#0    ): gnt = 0x%0h\", vif.cb_0.gnt); end\n      begin @(vif.cb_1); $display(\"cb_1 (#1step): gnt = 0x%0h\", vif.cb_1.gnt); end\n      begin @(vif.cb_2); $display(\"cb_2 (#1ns  ): gnt = 0x%0h\", vif.cb_2.gnt); end\n      begin @(vif.cb_3); $display(\"cb_3 (#2ns  ): gnt = 0x%0h\", vif.cb_3.gnt); end\n    join\n    #10 $finish;\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Why are the values different? The design is changing gnt every 1 ns. If the positive clock edge is at time 10 ns, then:\n\nThis illustrates exactly why #1step is preferred for testbench inputs: it is designed to give you the last clean, settled value rather than a potentially mid-update snapshot.",
                        "code": "cb_3 (#2ns  ): gnt = 0x9\ncb_2 (#1ns  ): gnt = 0x3\ncb_1 (#1step): gnt = 0x3\ncb_0 (#0    ): gnt = 0xd",
                        "lang": "verilog"
                    },
                    {
                        "title": "Self-Check Questions",
                        "content": "Q1: Your clocking block declares input #3ns gnt and the clock period is 20 ns with a posedge at 100 ns. At what simulation time is gnt sampled? (Answer: 97 ns)\n\nQ2: You have two clocking blocks, both on posedge clk. One has input #1step gnt and the other has input #0 gnt. The design is updating gnt on that same positive edge. Which clocking block is safer to use for reading gnt, and why? (Answer: #1step — it reads in the Preponed region before any active events fire at that edge, so it cannot see a partially-updated value. #0 reads in the Observed region, after active events, which may already reflect the new design value.)",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-75",
                "num": 75,
                "title": "SystemVerilog Modport",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "Modport lists with directions are defined in an interface to impose certain restrictions on interface access within a module. The keyword modport indicates that the directions are declared as if inside the module.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Syntax",
                        "content": "Shown below is the definition of an interface myInterface which has a few signals and two modport declarations. The modport dut0 essentially states that the signals ack and sel are inputs and gnt and irq0 are outputs to whatever module uses this particular modport.\n\nSimilarly, another modport called dut1 is declared which states that gnt and irq0 are inputs and the other two are outputs for any module that uses modport dut1.",
                        "code": "modport  [identifier]  (\n\t\tinput  [port_list],\n\t\toutput [port_list]\n\t);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "interface \tmyInterface;\n\tlogic \tack;\n\tlogic \tgnt;\n\tlogic \tsel;\n\tlogic \tirq0;\n\n\t// ack and sel are inputs to the dut0, while gnt and irq0 are outputs\n\tmodport  dut0 (\n\t\tinput \tack, sel,\n\t\toutput \tgnt, irq0\n\t);\n\t\n\t// ack and sel are outputs from dut1, while gnt and irq0 are inputs\n\tmodport  dut1 (\n\t\tinput \tgnt, irq0,\n\t\toutput \tack, sel\n\t);\nendinterface",
                        "lang": "verilog"
                    },
                    {
                        "title": "Example of named port bundle",
                        "content": "In this style, the design will take the required correct modport definition from the interface object as mentioned in its port list. The testbench only needs to provide the whole interface object to the design.",
                        "code": "module dut0  ( myinterface.dut0  _if);\n\t\t...\n\tendmodule\n\t\n\tmodule dut1  ( myInterface.dut1 _if);\n\t\t...\n\tendmodule\n\t\n\tmodule tb;\n\t\tmyInterface \t_if;\n\t\tdut0  \td0 \t( .* );\n\t\tdut1 \td1 \t( .* );\n\tendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Example of connecting port bundle",
                        "content": "In this style, the design simply accepts whatever directional information is given to it. Hence testbench is responsible to provide the correct modport values to the design.",
                        "code": "module dut0  ( myinterface  _if);\n\t\t...\n\tendmodule\n\t\n\tmodule dut1  ( myInterface _if);\n\t\t...\n\tendmodule\n\t\n\tmodule tb;\n\t\tmyInterface \t_if;\n\t\tdut0  \td0 \t( ._if (_if.dut0));\n\t\tdut1 \td1 \t( ._if (_if.dut1));\n\tendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "What is the need for a modport ?",
                        "content": "Nets declared within a simple interface is inout by default and hence any module connected to the same net, can either drive values or take values from it. In simple words, there are no restrictions on direction of value propagation. You could end up with an X on the net because both the testbench and the design are driving two different values to the same interface net. Special care should be taken by the testbench writer to ensure that such a situation does not happen. This can be inherently avoided by the use of modports.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Example of connecting to generic interface",
                        "content": "A module can also have a generic interface as the portlist. The generic handle can accept any modport passed to it from the hierarchy above.",
                        "code": "module dut0  ( interface  _if);\n\t\t...\n\tendmodule\n\t\n\tmodule dut1  ( interface _if);\n\t\t...\n\tendmodule\n\t\n\tmodule tb;\n\t\tmyInterface \t_if;\n\t\tdut0  \td0 \t( ._if (_if.dut0));\n\t\tdut1 \td1 \t( ._if (_if.dut1));\n\tendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Design Example",
                        "content": "Lets consider two modules master and slave connected by a very simple bus structure. Assume that the bus is capable of sending an address and data which the slave is expected to capture and update the information in its internal registers. So the master always has to initiate the transfer and the slave is capable of indicating to the master whether it is ready to accept the data by its sready signal.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Interface",
                        "content": "Shown below is an interface definition that is shared between the master and slave modules.",
                        "code": "interface ms_if (input clk);\n  logic sready;      // Indicates if slave is ready to accept data\n  logic rstn;        // Active low reset\n  logic [1:0] addr;  // Address \n  logic [7:0] data;  // Data\n  \n  modport slave ( input addr, data, rstn, clk,\n                 output sready);\n  \n  modport master ( output addr, data,\n                  input  clk, sready, rstn);\nendinterface",
                        "lang": "verilog"
                    },
                    {
                        "title": "Design",
                        "content": "Assume that the master simply iterates the address from 0 to 3 and sends data equal to the address multiplied by 4. The master should only send when the slave is ready to accept and is indicated by the sready signal.\n\nAssume that the slave accepts data for every addr and assigns them to internal registers. When the address wraps from 3 to 0, the slave requires 1 additional clock to become ready.",
                        "code": "// This module accepts an interface with modport \"master\"\n// Master sends transactions in a pipelined format\n// CLK    1   2   3   4   5   6\n// ADDR   A0  A1  A2  A3  A0  A1\n// DATA       D0  D1  D2  D3  D4\nmodule master ( ms_if.master mif);\n  always @ (posedge mif.clk) begin\n  \n  \t// If reset is applied, set addr and data to default values\n    if (! mif.rstn) begin\n      mif.addr <= 0;\n      mif.data <= 0;\n      \n    // Else increment addr, and assign data accordingly if slave is ready\n    end else begin\n    // Send new addr and data only if slave is ready\n      if (mif.sready) begin\n      \tmif.addr <= mif.addr + 1;\n      \tmif.data <= (mif.addr * 4);\n      \t\n     // Else maintain current addr and data\n      end else begin\n        mif.addr <= mif.addr;\n        mif.data <= mif.data;\n      end\n    end\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "The two design modules are tied together at a top level.",
                        "code": "module slave (ms_if.slave sif);\n  reg [7:0] reg_a;\n  reg [7:0]\treg_b;\n  reg \t\treg_c;\n  reg [3:0] reg_d;\n  \n  reg\t\tdly;\n  reg [3:0] addr_dly;\n\n\n  always @ (posedge sif.clk) begin\n    if (! sif.rstn) begin\n      addr_dly <= 0;\n    end else begin\n      addr_dly <= sif.addr;\n    end\n  end\n  \n  always @ (posedge sif.clk) begin\n    if (! sif.rstn) begin\n      \treg_a <= 0;\n    \treg_b <= 0;\n    \treg_c <= 0;\n    \treg_d <= 0;\n  \tend else begin\n      case (addr_dly)\n        0 : reg_a <= sif.data;\n        1 : reg_b <= sif.data;\n        2 : reg_c <= sif.data;\n        3 : reg_d <= sif.data;\n      endcase\n    end\n  end\n  \n  assign sif.sready = ~(sif.addr[1] & sif.addr[0]) | ~dly;\n  \n  always @ (posedge sif.clk) begin\n    if (! sif.rstn) \n      dly <= 1;\n    else \n      dly <= sif.sready;\n  end\n \nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "module d_top (ms_if tif);\n\t// Pass the \"master\" modport to master\n  \tmaster \tm0 (tif.master);\n  \t\n  \t// Pass the \"slave\" modport to slave\n  \tslave \ts0 (tif.slave);\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Testbench",
                        "content": "The testbench will pass the interface handle to the design, which will then assign master and slave modports to its sub-modules.\n\nRemember that the master initiates bus transactions and the slave captures data and stores it in its internal registers reg_* for the corresponding address.\n\nClick to try this example in a simulator!",
                        "code": "module tb;\n  reg clk;\n  always #10 clk = ~clk;\n  \n  ms_if \tif0 (clk);\n  d_top \td0  (if0);  \n  \n  // Let the stimulus run for 20 clocks and stop\n  initial begin\n    clk <= 0;\n    if0.rstn <= 0;\n    repeat (5) @ (posedge clk);\n    if0.rstn <= 1;\n    \n    repeat (20) @ (posedge clk);\n    $finish;\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-76",
                "num": 76,
                "title": "SystemVerilog fork join",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "SystemVerilog provides support for parallel or concurrent threads through fork join construct. Multiple procedural blocks can be spawned off at the same time using fork and join. There are variations to fork join that allow the main thread to continue executing rest of the statements based on when child threads finish.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Syntax",
                        "content": "",
                        "code": "fork\n\t\t// Thread 1\n\t\t// Thread 2\n\t\t// ...\n\t\t// Thread 3\n\tjoin",
                        "lang": "verilog"
                    },
                    {
                        "title": "fork join example",
                        "content": "In the example shown below, three threads are forked using fork join. The main thread stays suspended until all the threads spawned by the fork is completed. Any block of code within begin and end are considered as a separate thread, and in this case it is Thread2.\n\nThe main thread forks all three threads at time 0ns. Thread2 is a block of procedural code and finishes only when it executes all the statements inside begin and end. Thread2 takes 15 ns to finish, and because it started at 0ns, it finishes at 15ns and is the first thread to finish. Thread1 takes the most simulation time to finish and does so at 30ns, while Thread3 finishes earlier at 20ns.",
                        "code": "module tb;\n\tinitial begin\n      $display (\"[%0t] Main Thread: Fork join going to start\", $time);\n\t\tfork\n\t\t\t// Thread 1 \n\t\t\t#30 $display (\"[%0t] Thread1 finished\", $time);\n\t\t\t\n\t\t\t// Thread 2\n          \tbegin\n              \t#5 $display (\"[%0t] Thread2 ...\", $time);\n\t\t\t\t#10 $display (\"[%0t] Thread2 finished\", $time);\n            end\n            \n            // Thread 3\n\t\t\t#20 $display (\"[%0t] Thread3 finished\", $time);\n\t\tjoin\n      $display (\"[%0t] Main Thread: Fork join has finished\", $time);\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\n[0] Main Thread: Fork join going to start\n[5] Thread2 ...\n[15] Thread2 finished\n[20] Thread3 finished\n[30] Thread1 finished\n[30] Main Thread: Fork join has finished\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Nested fork join",
                        "content": "fork join can be nested in other fork join also.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Example #1",
                        "content": "",
                        "code": "module tb;\n\tinitial begin\n      $display (\"[%0t] Main Thread: Fork join going to start\", $time);\n\t\tfork\n\t\t\tfork\n              print (20, \"Thread1_0\");\n              print (30, \"Thread1_1\");\n            join\n          print (10, \"Thread2\");              \n\t\tjoin\n      $display (\"[%0t] Main Thread: Fork join has finished\", $time);\n\tend\n  \n  // Note that this task has to be automatic\n  task automatic print (int _time, string t_name);\n    #(_time) $display (\"[%0t] %s\", $time, t_name);\n  endtask\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\n[0] Main Thread: Fork join going to start\n[10] Thread2\n[20] Thread1_0\n[30] Thread1_1\n[30] Main Thread: Fork join has finished\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Example #2",
                        "content": "See that the main thread stays suspended until all the nested forks are over by 110ns.",
                        "code": "module tb;\n\tinitial begin\n      $display (\"[%0t] Main Thread: Fork join going to start\", $time);\n\t\tfork\n\t\t\tfork // Thread 1\n              #50 $display (\"[%0t] Thread1_0 ...\", $time);\n              #70 $display (\"[%0t] Thread1_1 ...\", $time);\n              begin\n                #10 $display (\"[%0t] Thread1_2 ...\", $time);\n                #100 $display (\"[%0t] Thread1_2 finished\", $time);\n              end\n            join\n\t\t\t\n\t\t\t// Thread 2\n          \tbegin\n              \t#5 $display (\"[%0t] Thread2 ...\", $time);\n\t\t\t\t#10 $display (\"[%0t] Thread2 finished\", $time);\n            end\n            \n            // Thread 3\n\t\t\t#20 $display (\"[%0t] Thread3 finished\", $time);\n\t\tjoin\n      $display (\"[%0t] Main Thread: Fork join has finished\", $time);\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\n[0] Main Thread: Fork join going to start\n[5] Thread2 ...\n[10] Thread1_2 ...\n[15] Thread2 finished\n[20] Thread3 finished\n[50] Thread1_0 ...\n[70] Thread1_1 ...\n[110] Thread1_2 finished\n[110] Main Thread: Fork join has finished\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-77",
                "num": 77,
                "title": "SystemVerilog Threads",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "What are SystemVerilog threads or processes ?",
                        "content": "A thread or process is any piece of code that gets executed as a separate entity. In verilog, each of the initial and always blocks are spawned off as separate threads that start to run in parallel from zero time. A fork join block also creates different threads that run in parallel.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "What are different fork - join styles ?",
                        "content": "We have three different styles of fork join in SystemVerilog.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Where is this used in the testbench ?",
                        "content": "Components in a verification environment may require the ability to run multiple tasks concurrently. For example, one process may wait for something to happen while another process continues to perform some other task. They are all spawned off as separate threads via fork ... join. For example, a checker can spawn different tasks in parallel to capture and validate data originating from different parts of the testbench.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "What is the limitation of a Verilog fork join ?",
                        "content": "Code after a fork ... join is executed only when all the threads spawned off inside the fork-join has finished. So, the checker will have to wait until all the threads spawned in the fork-join to finish, before it can proceed.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "fork join Example",
                        "content": "SystemVerilog fork join waits until all forked processes are complete.",
                        "code": "module tb_top;\n   initial begin\n   \n   \t  #1 $display (\"[%0t ns] Start fork ...\", $time);\n   \t  \n   \t  // Main Process: Fork these processes in parallel and wait untill all \n   \t  // of them finish\n      fork\n      \t // Thread1 : Print this statement after 5ns from start of fork\n         #5 $display (\"[%0t ns] Thread1: Orange is named after orange\", $time);\n         \n         // Thread2 : Print these two statements after the given delay from start of fork\n         begin                                              \t\n            #2 $display (\"[%0t ns] Thread2: Apple keeps the doctor away\", $time);      \n            #4 $display (\"[%0t ns] Thread2: But not anymore\", $time);      \n         end \t\t\t\t\t\t\t\t\t\t\t\t\t\n         \n         // Thread3 : Print this statement after 10ns from start of fork\n         #10 $display (\"[%0t ns] Thread3: Banana is a good fruit\", $time);  \n      join\n      \n      // Main Process: Continue with rest of statements once fork-join is over\n      $display (\"[%0t ns] After Fork-Join\", $time);\n   end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!\n\nClick here to learn about more on fork join !",
                        "code": "ncsim> run\n[1 ns] Start fork ...\n[3 ns] Thread2: Apple keeps the doctor away\n[6 ns] Thread1: Orange is named after orange\n[7 ns] Thread2: But not anymore\n[11 ns] Thread3: Banana is a good fruit\n[11 ns] After Fork-Join\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "fork join_any Example",
                        "content": "SystemVerilog fork join_any waits until any one of the forked processes is complete.",
                        "code": "module tb_top;\n   initial begin\n   \n   \t  #1 $display (\"[%0t ns] Start fork ...\", $time);\n   \t  \n   \t  // Main Process: Fork these processes in parallel and wait until \n      // any one of them finish\n      fork\n      \t // Thread1 : Print this statement after 5ns from start of fork\n         #5 $display (\"[%0t ns] Thread1: Orange is named after orange\", $time);\n         \n         // Thread2 : Print these two statements after the given delay from start of fork\n         begin                                              \t\n            #2 $display (\"[%0t ns] Thread2: Apple keeps the doctor away\", $time);      \n            #4 $display (\"[%0t ns] Thread2: But not anymore\", $time);      \n         end \t\t\t\t\t\t\t\t\t\t\t\t\t\n         \n         // Thread3 : Print this statement after 10ns from start of fork\n         #10 $display (\"[%0t ns] Thread3: Banana is a good fruit\", $time);  \n      join_any\n      \n      // Main Process: Continue with rest of statements once fork-join is exited\n      $display (\"[%0t ns] After Fork-Join\", $time);\n   end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!\n\nClick here to learn about more on fork join_any !",
                        "code": "ncsim> run\n[1 ns] Start fork ...\n[3 ns] Thread2: Apple keeps the doctor away\n[6 ns] Thread1: Orange is named after orange\n[6 ns] After Fork-Join\n[7 ns] Thread2: But not anymore\n[11 ns] Thread3: Banana is a good fruit\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "fork join_none Example",
                        "content": "SystemVerilog fork join_none does not wait and immediately exits the block allowing forked processes to run in background. The main thread resumes execution of statements that follow after the fork join_none block.",
                        "code": "module tb_top;\n   initial begin\n   \n   \t  #1 $display (\"[%0t ns] Start fork ...\", $time);\n   \t  \n   \t  // Main Process: Fork these processes in parallel and exits immediately\n      fork\n      \t // Thread1 : Print this statement after 5ns from start of fork\n         #5 $display (\"[%0t ns] Thread1: Orange is named after orange\", $time);\n         \n         // Thread2 : Print these two statements after the given delay from start of fork\n         begin                                              \t\n            #2 $display (\"[%0t ns] Thread2: Apple keeps the doctor away\", $time);      \n            #4 $display (\"[%0t ns] Thread2: But not anymore\", $time);      \n         end \t\t\t\t\t\t\t\t\t\t\t\t\t\n         \n         // Thread3 : Print this statement after 10ns from start of fork\n         #10 $display (\"[%0t ns] Thread3: Banana is a good fruit\", $time);  \n      join_none\n      \n      // Main Process: Continue with rest of statements once fork-join is exited\n      $display (\"[%0t ns] After Fork-Join\", $time);\n   end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click here to learn about more on fork join_none !",
                        "code": "ncsim> run\n[1 ns] Start fork ...\n[1 ns] After Fork-Join\n[3 ns] Thread2: Apple keeps the doctor away\n[6 ns] Thread1: Orange is named after orange\n[7 ns] Thread2: But not anymore\n[11 ns] Thread3: Banana is a good fruit\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-78",
                "num": 78,
                "title": "SystemVerilog forever loop",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "A forever loop runs forever, or for infinite time.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Syntax",
                        "content": "A forever loop is similar to the code shown below in Verilog. Both run for infinite simulation time, and is important to have a delay element inside them.\n\nAn always or forever block without a delay element will hang in simulation !",
                        "code": "forever\n\t\t// Single statement\n\t\t\n\tforever begin\n\t\t// Multiple statements\n\tend",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "In SystemVerilog, an always block cannot be placed inside classes and other SystemVerilog procedural blocks. Instead we can use a forever loop to achieve the same effect.\n\nThe pseudo code shown below mimics the functionality of a monitor in testbench that is once started and allowed to run as long as there is activity on the bus it monitors.",
                        "code": "always \n\t\t// Single statement\n\t\t\n\talways begin\n\t\t// Multiple statements\n\tend",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "class Monitor;\n\tvirtual task run();\n\t\tforever begin\n\t\t\t@(posedge vif.clk);\n\t\t\tif (vif.write & vif.sel)\n\t\t\t\t// Capture write data\n\t\t\tif (!vif.write & vif.sel)\n\t\t\t\t// Capture read data\n\t\tend\n\tendtask\nendclass\n\nmodule tb;\n\tMonitor mon;\n\t\n\t// Start the monitor task and allow it to continue as \n\t// long as there is activity on the bus\n\tinitial begin\n\t\tfork\n\t\t\tmon.run();\n\t\tjoin_none\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-79",
                "num": 79,
                "title": "SystemVerilog fork join_none",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "There is a third type of fork join in SystemVerilog which is fork and join_none.\n\nA fork and join_none will allow the main thread to resume execution of further statements that lie after the fork regardless of whether the forked threads finish. If five threads are launched, the main thread will resume execution immediately while all the five threads remain running in the background.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Syntax",
                        "content": "",
                        "code": "fork\n\t\t// Thread 1\n\t\t// Thread 2\n\t\t// ...\n\t\t// Thread N\n\tjoin_none",
                        "lang": "verilog"
                    },
                    {
                        "title": "fork join_none Example",
                        "content": "",
                        "code": "module tb;\n\tinitial begin\n      $display (\"[%0t] Main Thread: Fork join going to start\", $time);\n\t\tfork\n          print (20, \"Thread1_0\");\n          print (30, \"Thread1_1\");\n          print (10, \"Thread2\");              \n\t\tjoin_none\n      $display (\"[%0t] Main Thread: Fork join has finished\", $time);\n\tend\n  \n  // Note that we need automatic task\n  task automatic print (int _time, string t_name);\n    #(_time) $display (\"[%0t] %s\", $time, t_name);\n  endtask\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\n[0] Main Thread: Fork join going to start\n[0] Main Thread: Fork join has finished\n[10] Thread2\n[20] Thread1_0\n[30] Thread1_1\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Nested fork join_none",
                        "content": "",
                        "code": "module tb;\n\tinitial begin\n      $display (\"[%0t] Main Thread: Fork join going to start\", $time);\n\t\tfork\n          begin\n\t\t\tfork\n              print (20, \"Thread1_0\");\n              print (30, \"Thread1_1\");\n            join_none\n            $display(\"[%0t] Nested fork has finished\", $time);\n          end\n          print (10, \"Thread2\");              \n        join_none\n      $display (\"[%0t] Main Thread: Fork join has finished\", $time);\n\tend\n  \n  // Note that we need automatic task\n  task automatic print (int _time, string t_name);\n    #(_time) $display (\"[%0t] %s\", $time, t_name);\n  endtask\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\n[0] Main Thread: Fork join going to start\n[0] Main Thread: Fork join has finished\n[0] Nested fork has finished\n[10] Thread2\n[20] Thread1_0\n[30] Thread1_1\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Why do we need automatic task ?",
                        "content": "Without automatic keyword, the same display task with different string tags will produce the same display message. This is because multiple threads call the same task and share the same variable in tool simulation memory. In order for different threads to initiate different copies of the same task, automatic keyword has to be used.",
                        "code": "module tb;\n  initial begin\n      $display (\"[%0t] Main Thread: Fork join going to start\", $time);\n    fork\n          print (20, \"Thread1_0\");\n          print (30, \"Thread1_1\");\n          print (10, \"Thread2\");              \n    join_none\n      $display (\"[%0t] Main Thread: Fork join has finished\", $time);\n  end\n \n  // Note that this is not an automatic task, its static\n  task print (int _time, string t_name);\n    #(_time) $display (\"[%0t] %s\", $time, t_name);\n  endtask\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\n[0] Main Thread: Fork join going to start\n[0] Main Thread: Fork join has finished\n[10] Thread2\n[20] Thread2\n[30] Thread2\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-80",
                "num": 80,
                "title": "SystemVerilog fork join_any",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "In a simple SystemVerilog fork join, the main thread waits until all the child threads have finished execution. This means the fork will hang the simulation if any of the child threads run forever and never complete. SystemVerilog also provides a variation to the original with a fork and join_any.\n\nA fork and join_any will allow the main thread to resume execution of further statements that lie after the fork, if any one of the child threads complete. If five threads are launched, the main thread will resume execution only when any one of the five threads finish execution. Once the main thread resumes operation, the remaining four threads that were launched will continue to run in the background.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Syntax",
                        "content": "",
                        "code": "fork\n\t\t// Thread 1\n\t\t// Thread 2\n\t\t// ...\n\t\t// Thread N\n\tjoin_any",
                        "lang": "verilog"
                    },
                    {
                        "title": "fork join_any Example",
                        "content": "",
                        "code": "module tb;\n\tinitial begin\n      $display (\"[%0t] Main Thread: Fork join going to start\", $time);\n\t\tfork\n          print (20, \"Thread1_0\");\n          print (30, \"Thread1_1\");\n          print (10, \"Thread2\");              \n        join_any\n      $display (\"[%0t] Main Thread: Fork join has finished\", $time);\n\tend\n  \n  // Note that this task needs to be automatic\n  task automatic print (int _time, string t_name);\n    #(_time) $display (\"[%0t] %s\", $time, t_name);\n  endtask\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\n[0] Main Thread: Fork join going to start\n[10] Thread2\n[10] Main Thread: Fork join has finished\n[20] Thread1_0\n[30] Thread1_1\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Nested fork join_any",
                        "content": "",
                        "code": "module tb;\n\tinitial begin\n      $display (\"[%0t] Main Thread: Fork join going to start\", $time);\n\t\tfork\n\t\t\tfork\n              print (20, \"Thread1_0\");\n              print (30, \"Thread1_1\");\n            join_any\n          print (10, \"Thread2\");              \n        join_any\n      $display (\"[%0t] Main Thread: Fork join has finished\", $time);\n\tend\n  \n  // Note that this task has to be automatic\n  task automatic print (int _time, string t_name);\n    #(_time) $display (\"[%0t] %s\", $time, t_name);\n  endtask\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\n[0] Main Thread: Fork join going to start\n[10] Thread2\n[10] Main Thread: Fork join has finished\n[20] Thread1_0\n[30] Thread1_1\nncsim: *W,RNQUIE: Simulation is complete.\nncsim> exit",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-81",
                "num": 81,
                "title": "SystemVerilog disable fork join",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "In the previous article, different ways to launch parallel threads was discussed. Now we'll see how to disable forked off threads.\n\nAll active threads that have been kicked off from a fork join block can be killed by calling disable fork.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Why disable a fork ?",
                        "content": "The following things happen at the start of simulation for the given example:\n\nThread2 and Thread3 are still running even though the main thread has come out of fork join_any block.",
                        "code": "module tb_top;\n   \n\tinitial begin\n\t\t// Fork off 3 sub-threads in parallel and the currently executing main thread\n\t\t// will finish when any of the 3 sub-threads have finished.\n\t\tfork\n          \n\t\t\t// Thread1 : Will finish first at time 40ns\n\t\t\t#40 $display (\"[%0t ns] Show #40 $display statement\", $time);    \n          \n\t\t\t// Thread2 : Will finish at time 70ns\n\t\t\tbegin\n\t\t\t\t#20 $display (\"[%0t ns] Show #20 $display statement\", $time);\n\t\t\t\t#50 $display (\"[%0t ns] Show #50 $display statement\", $time);\n\t\t\tend\n         \n\t\t\t// Thread3 : Will finish at time 60ns\n\t\t\t#60 $display (\"[%0t ns] TIMEOUT\", $time);\n\t\tjoin_any\n      \n\t\t// Display as soon as the fork is done\n\t\t$display (\"[%0tns] Fork join is done\", $time);      \n   end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\n[20 ns] Show #20 $display statement\n[40 ns] Show #40 $display statement\n[40ns] Fork join is done\n[60 ns] TIMEOUT\n[70 ns] Show #50 $display statement\nncsim: *W,RNQUIE: Simulation is complete.\nncsim> exit",
                        "lang": "verilog"
                    },
                    {
                        "title": "What happens when fork is disabled ?",
                        "content": "The same example is taken from above, and disable fork is added towards the end.\n\nNote that Thread2 and Thread3 got killed because of disable fork",
                        "code": "module tb_top;\n   \n\tinitial begin\n   \t\t// Fork off 3 sub-threads in parallel and the currently executing main thread\n      \t// will finish when any of the 3 sub-threads have finished.\n\t\tfork\n          \n         // Thread1 : Will finish first at time 40ns\n         #40 $display (\"[%0t ns] Show #40 $display statement\", $time);    \n          \n         // Thread2 : Will finish at time 70ns\n         begin\n            #20 $display (\"[%0t ns] Show #20 $display statement\", $time);\n            #50 $display (\"[%0t ns] Show #50 $display statement\", $time);\n         end\n         \n         // Thread3 : Will finish at time 60ns\n          #60 $display (\"[%0t ns] TIMEOUT\", $time);\n      join_any\n      \n      // Display as soon as the fork is done\n      $display (\"[%0tns] Fork join is done, let's disable fork\", $time);      \n      \n      disable fork;\n   end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\n[20 ns] Show #20 $display statement\n[40 ns] Show #40 $display statement\n[40ns] Fork join is done, let's disable fork\nncsim: *W,RNQUIE: Simulation is complete.\nncsim> exit",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-82",
                "num": 82,
                "title": "SystemVerilog wait fork",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "wait fork allows the main process to wait until all forked processes are over. This is useful in cases where the main process has to spawn multiple threads, and perform some function before waiting for all threads to finish.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Example",
                        "content": "We'll use the same example seen in the previous article where 3 threads are kicked off in parallel and the main process waits for one of them to finish. After the main thread resumes, let's wait until all forked processes are done.",
                        "code": "module tb_top;\n   \n\tinitial begin\n\t\t// Fork off 3 sub-threads in parallel and the currently executing main thread\n\t\t// will finish when any of the 3 sub-threads have finished.\n\t\tfork\n          \n\t\t\t// Thread1 : Will finish first at time 40ns\n\t\t\t#40 $display (\"[%0t ns] Show #40 $display statement\", $time);    \n          \n\t\t\t// Thread2 : Will finish at time 70ns\n\t\t\tbegin\n\t\t\t\t#20 $display (\"[%0t ns] Show #20 $display statement\", $time);\n\t\t\t\t#50 $display (\"[%0t ns] Show #50 $display statement\", $time);\n\t\t\tend\n         \n\t\t\t// Thread3 : Will finish at time 60ns\n\t\t\t#60 $display (\"[%0t ns] TIMEOUT\", $time);\n\t\tjoin_any\n      \n\t\t// Display as soon as the fork is done\n      \t$display (\"[%0t ns] Fork join is done, wait fork to end\", $time);      \n      \n      \t// Wait until all forked processes are over and display \n      \twait fork;\n      \t$display (\"[%0t ns] Fork join is over\", $time);\n   end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\n[20 ns] Show #20 $display statement\n[40 ns] Show #40 $display statement\n[40 ns] Fork join is done, wait fork to end\n[60 ns] TIMEOUT\n[70 ns] Show #50 $display statement\n[70 ns] Fork join is over\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Does wait fork wait until all processes are over ?",
                        "content": "To see how it behaves in this case, let's fork two more processes and wait for the fork to finish.",
                        "code": "module tb_top;\n   \n\tinitial begin\n\t\t// Fork off 3 sub-threads in parallel and the currently executing main thread\n\t\t// will finish when any of the 3 sub-threads have finished.\n\t\tfork\n          \n\t\t\t// Thread1 : Will finish first at time 40ns\n\t\t\t#40 $display (\"[%0t ns] Show #40 $display statement\", $time);    \n          \n\t\t\t// Thread2 : Will finish at time 70ns\n\t\t\tbegin\n\t\t\t\t#20 $display (\"[%0t ns] Show #20 $display statement\", $time);\n              \t\n\t\t\t\t#50 $display (\"[%0t ns] Show #50 $display statement\", $time);\n\t\t\tend\n         \n\t\t\t// Thread3 : Will finish at time 60ns\n\t\t\t#60 $display (\"[%0t ns] TIMEOUT\", $time);\n\t\tjoin_any\n\n      \t// Display as soon as the fork is done\n      \t$display (\"[%0t ns] Fork join is done, wait fork to end\", $time);\n      \n      \t// Fork two more processes\n      \tfork\n          #10 $display (\"[%0t ns] Wait for 10\", $time);\n          #20 $display (\"[%0t ns] Wait for 20\", $time);\n        join_any\n      \n      \t// Wait until ALL forked processes are over\n      \twait fork;\n        $display (\"[%0t ns] Fork join is over\", $time);\n   end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\n[20 ns] Show #20 $display statement\n[40 ns] Show #40 $display statement\n[40 ns] Fork join is done, wait fork to end\n[50 ns] Wait for 10\n[60 ns] TIMEOUT\n[60 ns] Wait for 20\n[70 ns] Show #50 $display statement\n[70 ns] Fork join is over\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-83",
                "num": 83,
                "title": "SystemVerilog Interprocess Communication",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "Components in a testbench often need to communicate with each other to exchange data and check output values of the design. A few mechanisms that allow components or threads to affect the control flow of data are shown in the table below.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "What are Events ?",
                        "content": "An event is a way to synchronize two or more different processes. One process waits for the event to happen while another process triggers the event. When the event is triggered, the process waiting for the event will resume execution.",
                        "code": "event \teventA;  \t// Creates an event called \"eventA\"",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "->eventA; \t\t// Any process that has access to \"eventA\" can trigger the event",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "@eventA; \t\t\t\t\t\t// Use \"@\" operator to wait for an event\n\twait (eventA.triggered);\t\t// Or use the wait statement with \"eventA.triggered\"",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "module tb_top;\n\tevent eventA; \t\t// Declare an event handle called  \"eventA\"\n\t\n\tinitial begin \t\t\n\t\tfork \n\t\t\twaitForTrigger (eventA);    // Task waits for eventA to happen\n\t\t\t#5 ->eventA;                // Triggers eventA\n\t\tjoin\n\tend\n\t\n\t// The event is passed as an argument to this task. It simply waits for the event \n\t// to be triggered\n\ttask waitForTrigger (event eventA);\n\t\t$display (\"[%0t] Waiting for EventA to be triggered\", $time);\n\t\twait (eventA.triggered);\n\t\t$display (\"[%0t] EventA has triggered\", $time);\n\tendtask\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click here to read more about a SystemVerilog event !",
                        "code": "[0] Waiting for EventA to be triggered\n[5] EventA has triggered\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "What's a semaphore ?",
                        "content": "Let's say you wanted to rent a room in the library for a few hours. The admin desk will give you a key to use the room for the time you have requested access. After you are done with your work, you will return the key to the admin, which will then be given to someone else who wants to use the same room. This way two people will not be allowed to use the room at the same time. The key is a semaphore in this context.\n\nA semaphore is used to control access to a resource and is known as a mutex (mutually exclusive) because only one entity can have the semaphore at a time.",
                        "code": "module tb_top;\n   semaphore key; \t\t\t\t// Create a semaphore handle called \"key\"\n\n   initial begin \n      key = new (1); \t\t\t// Create only a single key; multiple keys are also possible\n      fork\n         personA (); \t\t\t// personA tries to get the room and puts it back after work\n         personB (); \t\t\t// personB also tries to get the room and puts it back after work\n         #25 personA (); \t\t// personA tries to get the room a second time\n      join_none\n   end\n\n   task getRoom (bit [1:0] id);\n      $display (\"[%0t] Trying to get a room for id[%0d] ...\", $time, id);\n      key.get (1);\n      $display (\"[%0t] Room Key retrieved for id[%0d]\", $time, id);\n   endtask\n\n   task putRoom (bit [1:0] id);\n      $display (\"[%0t] Leaving room id[%0d] ...\", $time, id);\n      key.put (1);\n      $display (\"[%0t] Room Key put back id[%0d]\", $time, id);\n   endtask\n\n   // This person tries to get the room immediately and puts \n   // it back 20 time units later\n   task personA (); \t\t\t\n      getRoom (1);\n      #20 putRoom (1);\n   endtask\n  \n  // This person tries to get the room after 5 time units and puts it back after\n  // 10 time units\n   task personB ();\n      #5  getRoom (2);\n      #10 putRoom (2);\n   endtask\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Note the following about semaphores.\n\nClick here to read more about a SystemVerilog semaphore !",
                        "code": "[0] Trying to get a room for id[1] ...\n[0] Room Key retrieved for id[1]\n[5] Trying to get a room for id[2] ...\n[20] Leaving room id[1] ...\n[20] Room Key put back id[1]\n[20] Room Key retrieved for id[2]\n[25] Trying to get a room for id[1] ...\n[30] Leaving room id[2] ...\n[30] Room Key put back id[2]\n[30] Room Key retrieved for id[1]\n[50] Leaving room id[1] ...\n[50] Room Key put back id[1]",
                        "lang": "verilog"
                    },
                    {
                        "title": "What's a mailbox ?",
                        "content": "A mailbox is like a dedicated channel established to send data between two components.\n\nFor example, a mailbox can be created and the handles be passed to a data generator and a driver. The generator can push the data object into the mailbox and the driver will be able to retrieve the packet and drive the signals onto the bus.",
                        "code": "// Data packet in this environment\nclass transaction;\n   rand bit [7:0] data;\n\n   function display ();\n      $display (\"[%0t] Data = 0x%0h\", $time, data);\n   endfunction\nendclass\n\n// Generator class - Generate a transaction object and put into mailbox\nclass generator;\n   mailbox mbx;\n\n   function new (mailbox mbx);\n      this.mbx = mbx;\n   endfunction\n\n   task genData ();\n      transaction trns = new ();\n      trns.randomize ();\n      trns.display ();\n      $display (\"[%0t] [Generator] Going to put data packet into mailbox\", $time);\n      mbx.put (trns);\n      $display (\"[%0t] [Generator] Data put into mailbox\", $time);\n   endtask\nendclass\n\n// Driver class - Get the transaction object from Generator\nclass driver;\n   mailbox mbx;\n   \n   function new (mailbox mbx);\n      this.mbx = mbx;\n   endfunction\n\n   task drvData ();\n      transaction drvTrns = new ();\n      $display (\"[%0t] [Driver] Waiting for available data\", $time);\n      mbx.get (drvTrns);\n      $display (\"[%0t] [Driver] Data received from Mailbox\", $time);\n      drvTrns.display ();\n   endtask\nendclass\n\n// Top Level environment that will connect Gen and Drv with a mailbox\nmodule tb_top;\n   mailbox   mbx;\n   generator Gen;\n   driver    Drv;\n\n   initial begin\n      mbx = new ();\n      Gen = new (mbx);\n      Drv = new (mbx);\n\n      fork \n         #10 Gen.genData ();\n         Drv.drvData ();\n      join_none\n   end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click here to read more about a SystemVerilog mailbox !",
                        "code": "[0] [Driver] Waiting for available data\n[10] Data = 0x9d\n[10] [Generator] Put data packet into mailbox\n[10] [Generator] Data put into mailbox\n[10] [Driver] Data received from Mailbox\n[10] Data = 0x9d\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-84",
                "num": 84,
                "title": "SystemVerilog Event",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "An event is a static object handle to synchronize between two or more concurrently active processes. One process will trigger the event, and another process waits for the event.",
                        "code": "event  over;                     // a new event is created called over\n\tevent  over_again = over;        // over_again becomes an alias to over\n\tevent  empty = null;             // event variable with no synchronization object",
                        "lang": "verilog"
                    },
                    {
                        "title": "Example",
                        "content": "",
                        "code": "module tb;\n  \n  // Create an event variable that processes can use to trigger and wait\n  event event_a;\n  \n  // Thread1: Triggers the event using \"->\" operator\n  initial begin\n    #20 ->event_a;\n    $display (\"[%0t] Thread1: triggered event_a\", $time);\n  end\n  \n  // Thread2: Waits for the event using \"@\" operator\n  initial begin\n    $display (\"[%0t] Thread2: waiting for trigger \", $time);\n    @(event_a);\n    $display (\"[%0t] Thread2: received event_a trigger \", $time);\n  end\n  \n  // Thread3: Waits for the event using \".triggered\"\n  initial begin\n    $display (\"[%0t] Thread3: waiting for trigger \", $time);\n    wait(event_a.triggered);\n    $display (\"[%0t] Thread3: received event_a trigger\", $time);\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\n[0] Thread2: waiting for trigger \n[0] Thread3: waiting for trigger \n[20] Thread1: triggered event_a\n[20] Thread2: received event_a trigger \n[20] Thread3: received event_a trigger\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "What is the difference between @ and .triggered ?",
                        "content": "An event's triggered state persists throughout the time step, until simulation advances. Hence if both wait for the event and trigger of the event happens at the same time there will be a race condition and the triggered property helps to avoid that.\n\nA process that waits on the triggered state always unblocks, regardless of the order of wait and trigger.\n\nNote that Thread2 never received a trigger, because of the race condition between @ and -> operations.",
                        "code": "module tb;\n  \n  // Create an event variable that processes can use to trigger and wait\n  event event_a;\n  \n  // Thread1: Triggers the event using \"->\" operator at 20ns\n  initial begin\n    #20 ->event_a;\n    $display (\"[%0t] Thread1: triggered event_a\", $time);\n  end\n  \n  // Thread2: Starts waiting for the event using \"@\" operator at 20ns\n  initial begin\n    $display (\"[%0t] Thread2: waiting for trigger \", $time);\n    #20 @(event_a);\n    $display (\"[%0t] Thread2: received event_a trigger \", $time);\n  end\n  \n  // Thread3: Starts waiting for the event using \".triggered\" at 20ns\n  initial begin\n    $display (\"[%0t] Thread3: waiting for trigger \", $time);\n    #20 wait(event_a.triggered);\n    $display (\"[%0t] Thread3: received event_a trigger\", $time);\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\n[0] Thread2: waiting for trigger \n[0] Thread3: waiting for trigger \n[20] Thread1: triggered event_a\n[20] Thread3: received event_a trigger\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "wait_order",
                        "content": "Waits for events to be triggered in the given order, and issues an error if any event executes out of order.",
                        "code": "module tb;\n  // Declare three events that can be triggered separately\n  event a, b, c;\n  \n  // This block triggers each event one by one\n  initial begin\n    #10 -> a;\n    #10 -> b;\n    #10 -> c;\n  end\n  \n  // This block waits until each event is triggered in the given order\n  initial begin\n    \n    wait_order (a,b,c) \n    \t$display (\"Events were executed in the correct order\");\n    else \n      \t$display (\"Events were NOT executed in the correct order !\");\t\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "Compiler version J-2014.12-SP1-1; Runtime version J-2014.12-SP1-1;\nEvents were executed in the correct order\n           V C S   S i m u l a t i o n   R e p o r t",
                        "lang": "verilog"
                    },
                    {
                        "title": "Merging Events",
                        "content": "When one event variable is assigned to another, all processes waiting for the first event to trigger will wait until the second variable is triggered.",
                        "code": "module tb;\n  \n  // Create event variables\n  event event_a, event_b;\n  \n  initial begin\n    fork\n      // Thread1: waits for event_a to be triggered\n      begin\n        wait(event_a.triggered);\n        $display (\"[%0t] Thread1: Wait for event_a is over\", $time);\n      end\n  \t  // Thread2: waits for event_b to be triggered    \n      begin\n        wait(event_b.triggered);\n        $display (\"[%0t] Thread2: Wait for event_b is over\", $time);\n      end\n      \n      // Thread3: triggers event_a at 20ns\n      #20 ->event_a;\n      \n      // Thread4: triggers event_b at 30ns\n      #30 ->event_b;\n      \n      // Thread5: Assigns event_b to event_a at 10ns\n      begin\n        // Comment code below and try again to see Thread2 finish later\n        #10 event_b = event_a;\n      end\n    join\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\n[20] Thread1: Wait for event_a is over\n[20] Thread2: Wait for event_b is over\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-85",
                "num": 85,
                "title": "SystemVerilog Semaphore",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "Semaphore is just like a bucket with a fixed number of keys. Processes that use a semaphore must first get a key from the bucket before they can continue to execute. Other proceses must wait until keys are available in the bucket for them to use. In a sense, they are best used for mutual exclusion, access control to shared resources and basic synchronization.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Syntax",
                        "content": "Note that semaphore is a built-in class and hence it should be used just like any other class object. It has a few methods with which we can allocate the number of keys for that semaphore object, get and put keys into the bucket.",
                        "code": "semaphore \t[identifier_name];",
                        "lang": "verilog"
                    },
                    {
                        "title": "Example",
                        "content": "",
                        "code": "module tb_top;\n   semaphore key;\n \n   initial begin \n      key = new (1);\n      fork\n         personA ();\n         personB ();\n         #25 personA ();\n      join_none\n   end\n \n   task getRoom (bit [1:0] id);\n      $display (\"[%0t] Trying to get a room for id[%0d] ...\", $time, id);\n      key.get (1);\n      $display (\"[%0t] Room Key retrieved for id[%0d]\", $time, id);\n   endtask\n \n   task putRoom (bit [1:0] id);\n      $display (\"[%0t] Leaving room id[%0d] ...\", $time, id);\n      key.put (1);\n      $display (\"[%0t] Room Key put back id[%0d]\", $time, id);\n   endtask\n \n   task personA ();\n      getRoom (1);\n      #20 putRoom (1);\n   endtask\n \n   task personB ();\n      #5  getRoom (2);\n      #10 putRoom (2);\n   endtask\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "[0] Trying to get a room for id[1] ...\n[0] Room Key retrieved for id[1]\n[5] Trying to get a room for id[2] ...\n[20] Leaving room id[1] ...\n[20] Room Key put back id[1]\n[20] Room Key retrieved for id[2]\n[25] Trying to get a room for id[1] ...\n[30] Leaving room id[2] ...\n[30] Room Key put back id[2]\n[30] Room Key retrieved for id[1]\n[50] Leaving room id[1] ...\n[50] Room Key put back id[1]",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-86",
                "num": 86,
                "title": "SystemVerilog Mailbox",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "A SystemVerilog mailbox is a way to allow different processes to exchange data between each other. It is similar to a real postbox where letters can be put into the box and a person can retrieve those letters later on.\n\nSystemVerilog mailboxes are created as having either a bounded or unbounded queue size. A bounded mailbox can only store a limited amount of data, and if a process attempts to store more messages into a full mailbox, it will be suspended until there's enough room in the mailbox. However, an unbounded mailbox has unlimited size.\n\nThere are two types:",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "SystemVerilog Mailbox vs Queue",
                        "content": "Although a SystemVerilog mailbox essentially behaves like a queue, it is quite different from the queue data type. A simple queue can only push and pop items from either the front or the back. However, a mailbox is a built-in class that uses semaphores to have atomic control over the push and pop from the queue. Moreover, you cannot access a given index within the mailbox queue, but only retrieve items in FIFO order.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Where is a mailbox used ?",
                        "content": "A SystemVerilog mailbox is typically used when there are multiple threads running in parallel and want to share data for which a certain level of determinism is required.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Generic Mailbox Example",
                        "content": "Two processes are concurrently active in the example shown below, where one initial block puts data into the mailbox and another initial block gets data from the mailbox.\n\nNote that there is a race between the two threads where the first thread can push into the mailbox and the second thread can pop from the mailbox on the same delta cycle. Hence the value displayed using num() is valid only until the next get or put is executed on the mailbox and may depend on the start and finish times of the other methods.",
                        "code": "module tb;\n\t// Create a new mailbox that can hold utmost 2 items\n  \tmailbox \tmbx = new(2);\n  \n  \t// Block1: This block keeps putting items into the mailbox\n  \t// The rate of items being put into the mailbox is 1 every ns\n  \tinitial begin\n\t\tfor (int i=0; i < 5; i++) begin\n        \t#1 mbx.put (i);\n        \t$display (\"[%0t] Thread0: Put item #%0d, size=%0d\", $time, i, mbx.num());\n      \tend\n    end\n  \n  \t// Block2: This block keeps getting items from the mailbox\n  \t// The rate of items received from the mailbox is 2 every ns\n\tinitial begin\n\t\tforever begin\n\t\t\tint idx;\n\t\t\t#2 mbx.get (idx);\n          \t$display (\"[%0t] Thread1: Got item #%0d, size=%0d\", $time, idx, mbx.num());\n\t\tend\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\n[1] Thread0: Put item #0, size=1\n[2] Thread1:   Got item #0, size=0\n[2] Thread0: Put item #1, size=1\n[3] Thread0: Put item #2, size=2\n[4] Thread1:   Got item #1, size=1\n[4] Thread0: Put item #3, size=2\n[6] Thread1:   Got item #2, size=2\n[6] Thread0: Put item #4, size=2\n[8] Thread1:   Got item #3, size=1\n[10] Thread1:   Got item #4, size=0\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Parameterized mailboxes",
                        "content": "By default, a SystemVerilog mailbox is typeless and hence can send and receive objects of mixed data-types. Although this is a good feature, it can result in type mismatches during simulation time and result in errors. To constrain the mailbox to accept and send objects of a fixed data-type, it can be parameterized to that particular data-type.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Example",
                        "content": "In the example shown below, we first create an alias for mailboxes that can send and receive strings using the typedef construct. Although this step is optional, it is a good practice to avoid type mismatches between different components from coding errors. Consider that comp1 sends a few strings to comp2 via this mailbox. Naturally both classes need to have a mailbox handle which needs to be connected together and this is best done at the top level or the module where these two classes are instantiated.",
                        "code": "// Create alias for parameterized \"string\" type mailbox\ntypedef mailbox #(string) s_mbox;\n\n// Define a component to send messages\nclass comp1;\n \n  \t// Create a mailbox handle to put items\n  \ts_mbox \tnames; \t\n  \n\t// Define a task to put items into the mailbox\n\ttask send ();\n\t\tfor (int i = 0; i < 3; i++) begin\n\t\t\tstring s = $sformatf (\"name_%0d\", i);\n          #1 $display (\"[%0t] Comp1: Put %s\", $time, s);\n\t\t\tnames.put(s);      \n\t\tend\n\tendtask\nendclass\n\n// Define a second component to receive messages\nclass comp2;\n  \n\t// Create a mailbox handle to receive items\n\ts_mbox \tlist;\n  \n  \n  \t// Create a loop that continuously gets an item from\n  \t// the mailbox\n\ttask receive ();\n\t\tforever begin\n\t\t\tstring s;\n\t\t\tlist.get(s);\n          \t$display (\"[%0t]    Comp2: Got %s\", $time, s);\n\t\tend\n\tendtask\nendclass\n\n// Connect both mailbox handles at a higher level\nmodule tb;\n  \t// Declare a global mailbox and create both components\n  \ts_mbox \tm_mbx    = new();\n  \tcomp1 \tm_comp1  = new();\n  \tcomp2 \tm_comp2  = new();\n  \n  \tinitial begin\n      // Assign both mailbox handles in components with the \n      // global mailbox\n      m_comp1.names = m_mbx;\n      m_comp2.list = m_mbx;\n      \n      // Start both components, where comp1 keeps sending\n      // and comp2 keeps receiving\n      fork\n      \tm_comp1.send();\n        m_comp2.receive();\n      join\n    end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\n[1] Comp1: Put name_0\n[1]    Comp2: Got name_0\n[2] Comp1: Put name_1\n[2]    Comp2: Got name_1\n[3] Comp1: Put name_2\n[3]    Comp2: Got name_2\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Matching different type mailboxes",
                        "content": "Let's see what would have happened if the SystemVerilog mailboxes were parameterized to different data-types. Consider comp1 to have string type and comp2 to have a byte type mailbox.\n\nThis would result in a compile time error, and allow us to revisit the testbench code to correct the type mismatch.",
                        "code": "class comp2;\n\tmailbox #(byte) \tlist;\n\t\n\t...\nendclass\n\nmodule tb;\n\ts_mbox \tm_mbx;\n\t...\n\t\n\tinitial begin\n\t\tm_comp1.names = m_mbx;\n\t\tm_comp2.list  = m_mbx;\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "m_comp2.list = m_mbx;\n                         |\nncvlog: *E,TYCMPAT (testbench.sv,34|25): assignment operator type check failed (expecting datatype compatible with 'mailbox' but found '$unit::s_mbox (mailbox)' instead).",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-87",
                "num": 87,
                "title": "SystemVerilog Program Block",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "A module is the fundamental construct used for building designs. Each module can contain hierarchies of other modules, nets, variables and other procedural blocks to describe any hardware functionality. The testbench on the other hand is a complete environment to verify the design and hence an emphasis is placed on the way it is modeled to make it more re-usable and effective. It must be properly initialized and synchronized avoiding race conditions between the design and the testbench.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "What is the need for a program block ?",
                        "content": "SystemVerilog program block was introduced for the following reasons.\n\nThe reactive region is one of the last few phases before simulation time advances, and by then all design element statements would have been executed and testbench will see the updated value. It is important to have this demarcation between the execution of design and testbench statements because it will give a more deterministic output between simulators.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Syntax",
                        "content": "",
                        "code": "program [name] [port_list];\n\t...\nendprogram",
                        "lang": "verilog"
                    },
                    {
                        "title": "Examples",
                        "content": "A program block can be nested within modules and interfaces and hence multiple programs within the same module can share variables local to that scope. In the example below, mode is a local variable within tb and can be accessed by both programs p1 and p2.",
                        "code": "program test1 (input clk, reset);\n\t\tinitial ...\n\tendprogram\n\t\n\tprogram test2 (interface wb_if);\n\t\tinitial ...\n\tendprogram\n\t\n\tprogram test3;\n\t\tinitial ...\n\tendprogram",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "module tb;\n\tbit [3:0] mode;\n\t\n\tprogram p1;\n\t\t...\n\tendprogram\n\t\n\tprogram p2;\n\t\t...\n\tendprogram\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-88",
                "num": 88,
                "title": "SystemVerilog Command Line Arguments",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "Every now and then you come across the need to avoid testbench recompilation, and instead be able to accept values from the command line just like any scripting language like bash or perl would do. In SystemVerilog, this information is provided  to the simulation as an optional argument always starting with the + character. These arguments passed in from the command line are accessible in SV code via the following system functions called as plusargs.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Syntax",
                        "content": "",
                        "code": "$test$plusargs (user_string)\n\t\n\t$value$plusargs (user_string, variable)",
                        "lang": "verilog"
                    },
                    {
                        "title": "$test$plusargs",
                        "content": "The function $test$plusargs is typically used when a value for the argument is not required. It searches the list of plusargs for a user specified string. A variable can also be used to specify the string, and any null character will be ignored. If the prefix of one of the supplied plusargs matches all characters in the provided string, the function will return a non-zero integer, and otherwise zero.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Example",
                        "content": "When the code shown above is compiled and simulated with a run-time argument +STANDBY, where STANDBY is the string plusarg provided to the simulation tool, we get an output like shown below. Notice that the plusarg is case-sensitive, and matches both \"S\" and \"STAND\" even though the string provided is \"STANDBY\".",
                        "code": "module tb;\n  initial begin\n    if ($test$plusargs (\"STANDBY\"))\n      $display (\"STANDBY argument is found ...\");\n    \n    if ($test$plusargs (\"Standby\"))\n      $display (\"Standby argument is also found ...\");\n    \n    if ($test$plusargs (\"STAND\"))\n      $display (\"STAND substring is found ...\");\n    \n    if ($test$plusargs (\"S\"))\n      $display (\"Some string starting with S found ...\");\n    \n    if ($test$plusargs (\"T\"))\n      $display (\"Some string containing T found ...\");\n    \n    if ($test$plusargs (\"STAND_AT_EASE\"))\n      $display (\"Can't stand any longer ...\");\n    \n    if ($test$plusargs (\"SUNSHADE\"))\n      $display (\"It's too hot today ...\");\n    \n    if ($test$plusargs (\"WINTER\"))\n      $display (\"No match.. \");\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "ncsim> run\nSTANDBY argument is found ...\nSTAND substring is found ...\nSome string starting with S found ...\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "$value$plusargs",
                        "content": "The $value$plusargs system function also searches the list of plusargs like $test$plusargs, but it has the capability to get a value for a specified user string. If the prefix of one of the supplied plusargs matches all characters in the given user string, the function will return a non-zero value and store the resulting value in the variable provided. If the user string is not found, then the function returns a non-zero value and the variable will not be modified.\n\nThe user_string shall be of the form \"plusarg_string format_string\" where format strings are the same as $display tasks. These format identifiers are used to convert the value provided via command line to the given format and store in a variable.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Example",
                        "content": "For different input arguments, we'll get different outputs. Also note that there should not be any space between the user string, = and the value in the command-line expression.\n\n\"Joey\" can be passed with or without double-quotes.",
                        "code": "// Note FS : Format Specifier\n\nmodule tb;\n  initial begin\n  \tstring  \tvar1, var2;\n    bit [31:0] \tdata;\n\n    if ($value$plusargs (\"STRING=%s\", var1))\n      $display (\"STRING with FS has a value %s\", var1);\n    \n    if ($value$plusargs (\"NUMBER=%0d\", data))\n      $display (\"NUMBER with %%0d has a value %0d\", data);\n    \n    if ($value$plusargs (\"NUMBER=%0h\", data))\n      $display (\"NUMBER with %%0h has a value %0d\", data);\n    \n    if ($value$plusargs (\"NUMBER=%s\", data))\n      $display (\"NUMBER with %%s has a value %0d\", data);\n    \n    if ($value$plusargs (\"STRING=\", var1))\n      $display (\"STRING without FS has a value %s\", var1);\n    \n    if ($value$plusargs (\"+STRING=%s\", var1))\n      $display (\"STRING with + char has a value %s\", var1);\n\n`ifdef RUNTIME_ERR    \n    if ($value$plusargs (\"STRING=%0d\", var2))\n      $display (\"STRING with %%0d has a value %s\", var2);\n`endif\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "The value 100 is converted according to different format specifiers and stored in the given variable.",
                        "code": "ncsim> run\nSTRING with FS has a value Joey\nSTRING without FS has a value Joey\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "The = symbol is missing, and hence failed to be recognized.",
                        "code": "ncsim> run\nNUMBER with %0d has a value 100\nNUMBER with %0h has a value 256\nNUMBER with %s has a value 3223600\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "The argument value is an empty string, and hence shows up as empty.",
                        "code": "ncsim> run\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "The simulator looks at the first + character to understand that what comes next until the = as the user string.",
                        "code": "ncsim> run\nSTRING with FS has a value \nSTRING without FS has a value\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Even a number is parsed as a string by default.",
                        "code": "ncsim> run\nSTRING with + char has a value Joey\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "If the user string matches, but the format specifier is wrong for the kind of data that is being passed in as an argument, you'll get a runtime error. For the above example, use +define+RUNTIME_ERR as a compile time argument and +STRING=Joey.",
                        "code": "ncsim> run\nSTRING with FS has a value 1234\nSTRING without FS has a value 1234\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "ncsim> run\nSTRING with FS has a value Joey\nSTRING without FS has a value Joey\n    if ($value$plusargs (\"STRING=%0d\", var2))\n                      |\nncsim: *E,SYSFMT (./testbench.sv,27|22): $value$plusargs --  value found 'Joey' for plusarg 'STRING=' does not match specified format.\nSTRING with %0d has a value \nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-89",
                "num": 89,
                "title": "SystemVerilog file operations",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "System Verilog allows us to read and write into files in the disk.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "How to open and close a file ?",
                        "content": "A file can be opened for either read or write using the $fopen() system task. This task will return a 32-bit integer handle called a file descriptor. This handle should be used to read and write into that file until it is closed. The file descriptor can be closed with the $fclose() system task. No further reads or writes to the file descriptor is allowed once it is closed.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Example",
                        "content": "In the code shown below, we will declare a int variable called fd to hold the file descriptor. fd is initially zero, and gets a valid value from $fopen() and can be checked to see if the file opened successfully. The file is finally closed when $fclose() is executed.\n\nIt is important to close all open files before end of simulation to completely write contents into the file",
                        "code": "module tb;\n  initial begin\n  \t// 1. Declare an integer variable to hold the file descriptor\n  \tint fd; \t\t\n  \t\n  \t// 2. Open a file called \"note.txt\" in the current folder with a \"read\" permission\n  \t// If the file does not exist, then fd will be zero\n    fd = $fopen (\"./note.txt\", \"r\"); \t\n    if (fd)  $display(\"File was opened successfully : %0d\", fd);\n    else     $display(\"File was NOT opened successfully : %0d\", fd);\n    \n    // 2. Open a file called \"note.txt\" in the current folder with a \"write\" permission\n    //    \"fd\" now points to the same file, but in write mode\n    fd = $fopen (\"./note.txt\", \"w\"); \t\n    if (fd)  $display(\"File was opened successfully : %0d\", fd);\n    else     $display(\"File was NOT opened successfully : %0d\", fd);\n    \n    // 3. Close the file descriptor\n    $fclose(fd);\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nOpen failed on file \"./note.txt\". No such file or directory\nFile was NOT opened successfully : 0\nFile was opened successfully : -2147483645\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "How to open in read and append modes ?",
                        "content": "By default a file is opened in the write w mode. The file can also be opened in other modes by providing the correct mode type. The following table shows all the different modes a file can be opened in.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Example",
                        "content": "In the following code, we will see how to use the different file access modes as described in the table above.\n\nAs you can see from the log shown below, all three variables have a different value and each one points to the same file, but with different access permissions.",
                        "code": "module tb;\n  initial begin\n  \tint fd_w, fd_r, fd_a, fd_wp, fd_rp, fd_ap; \n        \n    fd_w = $fopen (\"./todo.txt\", \"w\"); \t// Open a new file in write mode and store file descriptor in fd_w\n    fd_r = $fopen (\"./todo.txt\", \"r\"); \t// Open in read mode\n    fd_a = $fopen (\"./todo.txt\", \"a\"); \t// Open in append mode\n  \n    \n    if (fd_w)     $display(\"File was opened successfully : %0d\", fd_w);\n    else      \t  $display(\"File was NOT opened successfully : %0d\", fd_w);\n    \n    if (fd_r)     $display(\"File was opened successfully : %0d\", fd_r);\n    else      \t  $display(\"File was NOT opened successfully : %0d\", fd_r);\n    \n    if (fd_a)     $display(\"File was opened successfully : %0d\", fd_a);\n    else      \t  $display(\"File was NOT opened successfully : %0d\", fd_a);\n    \n    // Close the file descriptor\n    $fclose(fd_w);\n    $fclose(fd_r);\n    $fclose(fd_a);\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nncsim: *W,VFOPTW: File ./todo.txt being opened by Initial stmt (file: ./testbench.sv, line: 2 in worklib.tb [module]) has been opened earlier.\nFile was opened successfully : -2147483645\nFile was opened successfully : -2147483644\nFile was opened successfully : -2147483643\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "How to read and write to a file ?",
                        "content": "Files should be opened in the write w mode, or append a mode. System tasks like $fdisplay() and $fwrite() can be used to write a formatted string into the file. The first argument of these tasks is the file descriptor handle and the second will be the data to be stored.\n\nTo read a file, it has to be opened in either read r mode or read-write r+ mode. $fgets() is a system task that will read a single line from the file. If this task is called 10 times, then it will read 10 lines.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Example",
                        "content": "The code shown below demonstrates how to open a file and write contents into it using $fdisplay(). The file is then opened in read mode and contents are read back using $fgets() into a local variable. This is then printed out using the standard display task $display()",
                        "code": "module tb;\n  int \t fd; \t\t\t// Variable for file descriptor handle\n  string line; \t\t\t// String value read from the file\n  \n  initial begin\n    \n    // 1. Lets first open a new file and write some contents into it\n    fd = $fopen (\"trial\", \"w\");\n    \n    // Write each index in the for loop to the file using $fdisplay\n    // File handle should be the first argument\n    for (int i = 0; i < 5; i++) begin\n      $fdisplay (fd, \"Iteration = %0d\", i);\n    end\n    \n    // Close this file handle\n    $fclose(fd);\n    \n    \n    // 2. Let us now read back the data we wrote in the previous step\n    fd = $fopen (\"trial\", \"r\");\n    \n    // Use $fgets to read a single line into variable \"line\"\n    $fgets(line, fd);\n    $display (\"Line read : %s\", line);\n    \n    // Get the next line and display\n    $fgets(line, fd);\n    $display (\"Line read : %s\", line);\n    \n    // Close this file handle\n    $fclose(fd);\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nLine read : Iteration = 0\n\nLine read : Iteration = 1\n\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "How to read until end of file ?",
                        "content": "In the previous example, we used $fgets() system task twice to read two lines from the file. SystemVerilog has another task called $feof() that returns true when end of the file has reached. This can be used in a loop as follows to read the entire contents of a file.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Example",
                        "content": "",
                        "code": "module tb;\n  int \t fd; \t\t\t// Variable for file descriptor handle\n  string line; \t\t\t// String value read from the file\n  \n  initial begin\n    // 1. Lets first open a new file and write some contents into it\n    fd = $fopen (\"trial\", \"w\");\n    for (int i = 0; i < 5; i++) begin\n      $fdisplay (fd, \"Iteration = %0d\", i);\n    end\n    $fclose(fd);\n    \n    \n    // 2. Let us now read back the data we wrote in the previous step\n    fd = $fopen (\"trial\", \"r\");\n    \n    while (!$feof(fd)) begin\n      $fgets(line, fd);\n      $display (\"Line: %s\", line);\n    end\n    \n    // Close this file handle\n    $fclose(fd);\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nLine: Iteration = 0\n\nLine: Iteration = 1\n\nLine: Iteration = 2\n\nLine: Iteration = 3\n\nLine: Iteration = 4\n\nLine: \nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "How to parse a line for values ?",
                        "content": "SystemVerilog has another system task called $fscanf() that allows us to scan and get certain values.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Example",
                        "content": "",
                        "code": "module tb;\n  int \t fd; \t\t\t// Variable for file descriptor handle\n  int \t idx;\n  string str;\n  \n  initial begin\n    // 1. Lets first open a new file and write some contents into it\n    fd = $fopen (\"trial\", \"w\");\n    for (int i = 0; i < 5; i++) \n      $fdisplay (fd, \"Iteration = %0d\", i);\n    $fclose(fd);\n    \n    \n    // 2. Let us now read back the data we wrote in the previous step\n    fd = $fopen (\"trial\", \"r\");\n    \n    // fscanf returns the number of matches\n    while ($fscanf (fd, \"%s = %0d\", str, idx) == 2) begin\n      $display (\"Line: %s = %0d\", str, idx);\n    end\n    \n    // Close this file handle\n    $fclose(fd);\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nLine: Iteration = 0\nLine: Iteration = 1\nLine: Iteration = 2\nLine: Iteration = 3\nLine: Iteration = 4\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "What are multichannel file descriptors ?",
                        "content": "The mcd is a 32-bit packed array value in which a single bit is set indicating which file is opened. The LSB of an mcd always refers to the standard output. Output is directed to two or more files opened with multichannel descriptors by bitwise OR-ing together their mcds, and writing to the resultant value.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-90",
                "num": 90,
                "title": "SystemVerilog Scope Resolution Operator",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "The scope resolution operator :: is used to refer an identifier within the scope of a class.\n\nLeft hand side of the scope resolution operator :: should be a class type name, package name, covergroup type name, coverpoint or cross name, typedef name. The right hand side of the operator should be an identifier like a variable or method name.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Why is scope resolution operator required ?",
                        "content": "Classes and other scopes can have same identifier names and may create a namespace collision if referred to without specifying the scope. The scope resolution operator :: uniquely identifies a member or parameter of a given class.\n\nThey are also used to access static variables and methods, parameters and local parameters of a class from outside the class. It also allows access to public and protected members of a base class from within the child class.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "1. Defining extern function",
                        "content": "",
                        "code": "class ABC;\n\tint \tdata;\n\t\n\textern virtual function void display();\nendclass\n\n// Definition of an external function using scope\n// resolution operator\nfunction void ABC::display();\n\t$display(\"data = 0x%0h\", data);\nendfunction\n\nmodule tb;\n\tinitial begin\t\n\t\tABC abc = new();\n\t\tabc.data = 32'hface_cafe;\n\t\tabc.display();\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "ncsim> run\ndata = 0xfacecafe\nncsim: *W,RNQUIE: Simulation is complete.\nncsim> exit",
                        "lang": "verilog"
                    },
                    {
                        "title": "2. Accessing static methods and functions",
                        "content": "",
                        "code": "class ABC;\n\tstatic int \tdata;\n\t\n\tstatic function void display();\n\t\t$display(\"data = 0x%0h\", data);\n\tendfunction\nendclass\n\nmodule tb;\n\tinitial begin\n      \tABC a1, a2;\n      \t\n      \t// Assign to static variable before creating \n      \t// class objects, and display using class_type and\n      \t// scope resolution operator\n\t\tABC::data = 32'hface_cafe;\n\t\tABC::display();\n      \n      \ta1 = new();\n      \ta2 = new();\n      \t$display (\"a1.data=0x%0h a2.data=0x%0h\", a1.data, a2.data);\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "ncsim> run\ndata = 0xfacecafe\na1.data=0xfacecafe a2.data=0xfacecafe\nncsim: *W,RNQUIE: Simulation is complete.\nncsim> exit",
                        "lang": "verilog"
                    },
                    {
                        "title": "3. Using package",
                        "content": "",
                        "code": "package my_pkg;\n\ttypedef enum bit {FALSE, TRUE} e_bool;\nendpackage\n\nmodule tb;\n  bit val;\n  \n  initial begin\n  \t// Refer to types that have been declared\n  \t// in a package. Note that package has to \n  \t// be included in compilation but not \n  \t// necessarily \"imported\"\n    val = my_pkg::TRUE;\n    $display(\"val = 0x%0h\", val);\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "ncsim> run\nval = 0x1\nncsim: *W,RNQUIE: Simulation is complete.\nncsim> exit",
                        "lang": "verilog"
                    },
                    {
                        "title": "4. Avoid namespace collision",
                        "content": "",
                        "code": "package my_pkg;\n\ttypedef enum bit {FALSE, TRUE} e_bool;\nendpackage\n\nimport my_pkg::*;\n\nmodule tb;\n  typedef enum bit {TRUE, FALSE} e_bool;\n  \n  initial begin\n    e_bool val;\n    \n    // Be explicit and say that TRUE from my_pkg\n    // should be assigned to val\n    val = my_pkg::TRUE;\n    $display(\"val = 0x%0h\", val);\n    \n    // TRUE from current scope will be assigned to\n    // val\n    val = TRUE;\n    $display(\"val = 0x%0h\", val);\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "ncsim> run\nval = 0x1\nval = 0x0\nncsim: *W,RNQUIE: Simulation is complete.\nncsim> exit",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-91",
                "num": 91,
                "title": "SystemVerilog 'extern'",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "Class definitions can become very long with a lot of lines between class and endclass. This makes it difficult to understand what all functions and variables exist within the class because each function and task occupy quite a lot of lines.\n\nUsing extern qualifier in method declaration indicates that the implementation is done outside the body of this class.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Example",
                        "content": "",
                        "code": "class ABC;\n  \n  // Let this function be declared here and defined later\n  // by \"extern\" qualifier\n  extern function void display();\n    \nendclass\n    \n// Outside the class body, we have the implementation of the\n// function declared as \"extern\"\nfunction void ABC::display();\n  \n   $display (\"Hello world\");\n  \nendfunction\n\nmodule tb;\n  \n  // Lets simply create a class object and call the display method\n  initial begin\n    ABC abc = new();\n    abc.display();\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nHello world\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-92",
                "num": 92,
                "title": "SystemVerilog local vs protected",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "In SystemVerilog, the local and protected access qualifiers are used to control the visibility and accessibility of class properties (data) and methods (functions and tasks), primarily for achieving encapsulation.\n\nThe main difference between the two is that local members are NOT visible to subclasses while protected members ARE visible to subclasses and can be inherited by them.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Access qualifier - local",
                        "content": "A member declared as local is available only to the methods of the same class, and are not accessible by child classes. However, nonlocal methods that access local members can be inherited and overridden by child class.\n\nIn the following example, we will declare two variables - one public and another local. We expect to see an error when a local member of the class is accessed from somewhere outside the class. This is because the keyword local is used to keep members local and visible only within the same class.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "When accessed from outside the class",
                        "content": "As expected, the compiler gives out a compilation error pointing to the line where a local member is accessed from outside the class.",
                        "code": "class ABC;\n  // By default, all variables are public and for this example,\n  // let's create two variables - one public and the other \"local\"\n  byte  \t  public_var;   \n  local byte local_var; \t\n  \n  // This function simply prints these variable contents\n  function void display();\n    $display (\"public_var=0x%0h, local_var=0x%0h\", public_var, local_var); \n  endfunction\nendclass\n\nmodule tb;\n  initial begin\n    \n    // Create a new class object, and call display method\n    ABC abc = new();\n    abc.display();\n    \n    // Public variables can be accessed via the class handle\n    $display (\"public_var = 0x%0h\", abc.public_var);\n    \n    // However, local variables cannot be accessed from outside\n    $display (\"local_var = 0x%0h\", abc.local_var);\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!\n\nIn the above example, we can remove the line that causes a compilation error and see that we get a good output. The only other function that accesses the local member is the display() function.",
                        "code": "$display (\"local_var = 0x%0h\", abc.local_var);\n                                               |\nncvlog: *E,CLSNLO (testbench.sv,24|47): Access to local member 'local_var' in class 'ABC' is not allowed here.\nirun: *E,VLGERR: An error occurred during parsing.  Review the log file for errors with the code *E and fix those identified problems to proceed.  Exiting with code (status 1).",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "module tb;\n  initial begin\n    \n    ABC abc = new();\n    \n    // This should be able to print local members of class ABC\n    // because display() is a member of ABC also\n    abc.display();\n    \n    // Public variables can always be accessed via the class handle\n    $display (\"public_var = 0x%0h\", abc.public_var);\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\npublic_var=0x0, local_var=0x0\npublic_var = 0x0\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "When accessed by child classes",
                        "content": "In this example, let us try to access the local member from within a child class. We expect to see an error here also because local is not visible to child classes either.\n\nAs expected, child classes cannot access the local members of their parent class.",
                        "code": "// Define a base class and let the variable be \"local\" to this class\nclass ABC;\n  local byte local_var; \t\nendclass\n\n// Define another class that extends ABC and have a function that tries\n// to access the local variable in ABC\nclass DEF extends ABC;  \n  function show();\n    $display (\"local_var = 0x%0h\", local_var);\n  endfunction\nendclass\n\nmodule tb;\n  initial begin\n    \n    // Create a new object of the child class, and call the show method\n    // This will give a compile time error because child classes cannot access\n    // base class \"local\" variables and methods\n    DEF def = new();\n    def.show();\n\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "$display (\"local_var = 0x%0h\", local_var);\n                                           |\nncvlog: *E,CLSNLO (testbench.sv,10|43): Access to local member 'local_var' in class 'ABC' is not allowed here.\nirun: *E,VLGERR: An error occurred during parsing.  Review the log file for errors with the code *E and fix those identified problems to proceed.  Exiting with code (status 1).",
                        "lang": "verilog"
                    },
                    {
                        "title": "Access qualifier - protected",
                        "content": "The protected access qualifier provides a middle ground for data hiding, more restrictive than public but less so than local. A class property or method identified as protected has specific accessibility rules:",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "When accessed from outside the class",
                        "content": "As expected, protected variables cannot be directly accessed from outside the class using the class object handle, and any attempt to do so will result in a compilation error.",
                        "code": "class ABC;\n  // By default, all variables are public and for this example,\n  // let's create two variables - one public and the other \"protected\"\n  byte  \t   \t\tpublic_var;   \n  protected byte \tprotected_var; \t\n  \n  // This function simply prints these variable contents\n  function void display();\n    $display (\"public_var=0x%0h, protected_var=0x%0h\", public_var, protected_var); \n  endfunction\n  \nendclass\n\nmodule tb;\n  initial begin\n    \n    // Create a new class object, and call display method\n    ABC abc = new();\n    abc.display();\n    \n    // Public variables can be accessed via the class handle\n    $display (\"public_var = 0x%0h\", abc.public_var);\n    \n    // However, protected variables cannot be accessed from outside\n    $display (\"protected_var = 0x%0h\", abc.protected_var);\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "$display (\"protected_var = 0x%0h\", abc.protected_var);\n                                                       |\nxmvlog: *E,CLSNPO (testbench.sv,29|55): Access to protected member 'protected_var' in class 'ABC' is not allowed here.",
                        "lang": "verilog"
                    },
                    {
                        "title": "When accessed by child classes",
                        "content": "Child classes should be able to access protected members.\n\nSee that protected class members can be accessed by child classes, unlike local members.",
                        "code": "// Define a base class and let the variable be \"protected\" to this class\nclass ABC;\n  protected byte protected_var; \t\nendclass\n\n// Define another class that extends ABC and have a function that tries\n// to access the protected variable in ABC\nclass DEF extends ABC;  \n  function show();\n    $display (\"protected_var = 0x%0h\", protected_var);\n  endfunction\nendclass\n\nmodule tb;\n  initial begin\n    \n    // Create a new object of the child class, and call the show method\n    // This will give a compile time error because child classes cannot access\n    // base class \"protected\" variables and methods\n    DEF def = new();\n    def.show();\n\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "xcelium> run\nprotected_var = 0x0\nxmsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-93",
                "num": 93,
                "title": "SystemVerilog Functions",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "SystemVerilog functions have the same characteristics as the ones in Verilog.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Functions",
                        "content": "The primary purpose of a function is to return a value that can be used in an expression and cannot consume simulation time.\n\nClick here to refresh functions in Verilog !",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "ANSI-C style declaration",
                        "content": "",
                        "code": "module tb;\n\t\n  \t// There are two ways to call the function:\n  \tinitial begin\n      // 1. Call function and assign value to a variable, and then use variable\n      int s = sum(3, 4);\n      $display (\"sum(3,4) = %0d\", s);\n      \n      // 2. Call function and directly use value returned\n      $display (\"sum(5,9) = %0d\", sum(5,9));\n      \n      $display (\"mul(3,1) = %0d\", mul(3,1));\n    end\n  \n  \t// This function returns value of type \"byte\", and accepts two \n  \t// arguments \"x\" and \"y\". A return variable of the same name as\n  \t// function is implicitly declared and hence \"sum\" can be directly\n  \t// assigned without having to declare a separate return variable\n\tfunction byte sum (int x, int y);\n\t\tsum = x + y;\n\tendfunction\n  \n  \t// Instead of assigning to \"mul\", the computed value can be returned\n  \t// using \"return\" keyword\n  \tfunction byte mul (int x, y);\n      \treturn x * y;\n  \tendfunction\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nsum(3,4) = 7\nsum(5,9) = 14\nmul(3,1) = 3\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Using declarations and directions",
                        "content": "Although ANSI-C style declaration was later introduced in Verilog, the old style declaration of port directions are still valid. SystemVerilog functions can have arguments declared as input and output ports as shown in the example below.",
                        "code": "module tb;\n\tinitial begin\n      \tint res, s;\n      \ts = sum(5,9);\n    \t$display (\"s = %0d\", sum(5,9));\n      \t$display (\"sum(5,9) = %0d\", sum(5,9));\n      \t$display (\"mul(3,1) = %0d\", mul(3,1,res));\n      \t$display (\"res = %0d\", res);\n    end\n  \n\t// Function has an 8-bit return value and accepts two inputs\n  \t// and provides the result through its output port and return val\n  \tfunction bit [7:0] sum;\n      \tinput int x, y;\n      \toutput sum;\n\t\tsum = x + y;\n\tendfunction\n  \n  \t// Same as above but ports are given inline\n  \tfunction byte mul (input int x, y, output int res);\n    \tres = x*y + 1;\n    \treturn x * y;\n  \tendfunction\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\ns = 14\nsum(5,9) = 14\nmul(3,1) = 3\nres = 4\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "How to pass arguments by value ?",
                        "content": "Pass by value is the default mechanism to pass arguments to subroutines. Each argument is copied into the subroutine area and any changes made to this local variable in the subroutine area is not visible outside the subroutine.\n\nNote from the log shown below that the value of a within the initial block did not get changed even though the local variable defined inside the function was assigned a different value.",
                        "code": "module tb;\n  \n  initial begin\n    int a, res;\n    \n    // 1. Lets pick a random value from 1 to 10 and assign to \"a\"\n    a = $urandom_range(1, 10);\n    \n    $display (\"Before calling fn: a=%0d res=%0d\", a, res);\n    \n    // Function is called with \"pass by value\" which is the default mode\n    res = fn(a);\n    \n    // Even if value of a is changed inside the function, it is not reflected here\n    $display (\"After calling fn: a=%0d res=%0d\", a, res);\n  end\n  \n  // This function accepts arguments in \"pass by value\" mode\n  // and hence copies whatever arguments it gets into this local \n  // variable called \"a\". \n  function int fn(int a);\n    \n    // Any change to this local variable is not\n  \t// reflected in the main variable declared above within the \n  \t// initial block\n    a = a + 5;\n\n    // Return some computed value\n    return a * 10;\n  endfunction\n  \nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nBefore calling fn: a=2 res=0\nAfter calling fn: a=2 res=70\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "How to pass arguments by reference ?",
                        "content": "Arguments that are passed by reference are not copied into the subroutine area, instead a reference to the original argument is passed to the subroutine. The argument declaration is preceded by the ref keyword. Any changes made to the variable inside the subroutine will be reflected in the original variable outside the subroutine.\n\nIts illegal to use argument passing by reference for subroutines with a lifetime of static",
                        "code": "// Use \"ref\" to make this function accept arguments by reference\n  // Also make the function automatic\n  function automatic int fn(ref int a);\n    \n    // Any change to this local variable will be \n  \t// reflected in the main variable declared within the\n  \t// initial block\n    a = a + 5;\n\n    // Return some computed value\n    return a * 10;\n  endfunction",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nBefore calling fn: a=2 res=0\nAfter calling fn: a=7 res=70\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-94",
                "num": 94,
                "title": "SystemVerilog Package",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "Verilog has significant limitations regarding global declarations, especially functions and user-defined types.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "SystemVerilog Package",
                        "content": "A SystemVerilog package offers a way to store and share data, methods, properties, and parameters that can be reused across multiple modules, interfaces, or programs. Packages have explicitly defined scopes that exist at the same level as top-level modules, allowing all parameters and enumerations to be referenced within this scope.\n\nA package is a separate namespace and is not embedded inside a Verilog module. By placing definitions and declarations between package and endpackage, you can prevent clutter in the global namespace.\n\nNote ! Package cannot contain hierarchical references except those created within the package or imported.",
                        "code": "package <package_name>;\n  // Typedef declarations\n  // Function/Task definitions\n  // ...\nendpackage",
                        "lang": "verilog"
                    },
                    {
                        "title": "Package Example",
                        "content": "",
                        "code": "package my_pkg;\n\n    // Create typedef declarations that can be reused in multiple modules\n\ttypedef enum bit [1:0] { RED, YELLOW, GREEN, RSVD } e_signal;\n\n\ttypedef struct { bit [3:0]   signal_id;\n                     bit         active;\n                     bit [1:0]   timeout;\n                   } e_sig_param;\n\n    // Create function and task defintions that can be reused\n    // Note that it will be a 'static' method if the keyword 'automatic' is not used\n\tfunction int calc_parity ();\n      $display (\"Called from somewhere\");\n   \tendfunction\n    \nendpackage",
                        "lang": "verilog"
                    },
                    {
                        "title": "Package Import",
                        "content": "A SystemVerilog package can be imported into the current scope using the keyword import followed by the scope resolution operator ::, enabling the use of their items.",
                        "code": "import <package_name>::*; // Imports all items\nimport <package_name>::<item_name>; // Imports specific item",
                        "lang": "verilog"
                    },
                    {
                        "title": "Wildcard Import",
                        "content": "When package items are imported using a wildcard, only the items that are actually utilized in the module or interface are imported. Any definitions and declarations in the package that are not referenced remain unimported. So, an import essentially means that it is made visible.",
                        "code": "// Import the package defined above to use e_signal\nimport my_pkg::*;\n\nclass myClass;\n\te_signal \tm_signal;\nendclass\n\nmodule tb;\n\tmyClass cls;\n\n\tinitial begin\n\t\tcls          = new();\n\t\tcls.m_signal = GREEN;\n\t\t$display (\"m_signal = %s\", cls.m_signal.name());\n\t\tcalc_parity();\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Note that the package had to be imported for the compiler to recognize where GREEN is defined. Had the package not been imported, then you'll get compiler errors like shown below.",
                        "code": "ncsim> run\nm_signal = GREEN\nCalled from somewhere\nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "e_signal \tm_signal;\n\t       |\nncvlog: *E,NOIPRT (testbench.sv,15|8): Unrecognized declaration 'e_signal' could be an unsupported keyword, a spelling mistake or missing instance port list '()' [SystemVerilog].\n\t\tcls.m_signal = GREEN;\n\t\t                 |\nncvlog: *E,UNDIDN (testbench.sv,23|19): 'GREEN': undeclared identifier [12.5(IEEE)].",
                        "lang": "verilog"
                    },
                    {
                        "title": "Import Specific Items",
                        "content": "Instead of importing all the definitions inside a package, you can also import them individually if you know exactly what is used in your piece of code. But, it is seen as an overhead especially when more members are accessed from the package.\n\nOmission of either one of the three import statements will result in a compiler error simply because it does not know where they are defined unless its imported.",
                        "code": "import my_pkg::GREEN;\nimport my_pkg::e_signal;\nimport my_pkg::common;",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Note that when importing specific items, all enumerated labels will have to be individually imported.",
                        "code": "// Although e_signal is made visible, enumerated labels will not be made visible\nimport my_pkg::e_signal;\n\n// Import each enumerated label instead, if you are not importing using wildcard ::*\nimport my_pkg::RED;\nimport my_pkg::GREEN;\nimport my_pkg::YELLOW;\n// etc",
                        "lang": "verilog"
                    },
                    {
                        "title": "Search Order",
                        "content": "Local definitions and declarations within a module or interface have priority over any wildcard import. Similarly, an import that explicitly names specific items from a package will also take precedence over a wildcard import. A wildcard import essentially extends the search rules to include the package when resolving an identifier. Software tools will first look for local declarations (following Verilog's search rules within a module), then in any packages imported with a wildcard, and finally in SystemVerilog’s $unit declaration space.\n\nConsider the example below where the same definitions exist, one at the top level and the other via an imported package.\n\nNote that even though my_pkg was imported, e_rd_wr variable opc2 got the value of READ as 1, which implies that the enum value inside the package is not considered.",
                        "code": "package my_pkg;\n\ttypedef enum bit { READ, WRITE } e_rd_wr;\nendpackage\t\n\nimport my_pkg::*;\n\nmodule tb;\n  typedef enum bit { WRITE, READ } e_wr_rd;\n\n\tinitial begin\n        e_wr_rd  \topc1 = READ;\n        e_rd_wr  \topc2 = READ;\n      $display (\"READ1 = %0d READ2 = %0d \", opc1, opc2);\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "In order for the simulator to apply value from the package, the package name should be explicitly mentioned using the :: operator as shown below.",
                        "code": "ncsim> run\nREAD1 = 1 READ2 = 1 \nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "module tb;\t\n\tinitial begin\n        e_wr_rd  \topc1 = READ;\n        e_rd_wr  \topc2 = my_pkg::READ;\n      $display (\"READ1 = %0d READ2 = %0d \", opc1, opc2);\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "ncsim> run\nREAD1 = 1 READ2 = 0 \nncsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Nested Package Reference",
                        "content": "Packages can also be imported into another package.\n\nNote in the log below that each package got compiled into its own namespace, and variables in local scope has precedence over imported scope. For example, display function in package Y used variables in Y instead of X.",
                        "code": "// Define a new package called X\npackage X;\n  byte    lb     = 8'h10;\n  int     word   = 32'hcafe_face;\n  string  name = \"X\";\n\n  function void display();\n    $display(\"pkg=%s lb=0x%0h word=0x%0h\", name, lb, word);\n  endfunction \nendpackage\n\n// Define a new package called Y, use variable value inside X within Y\npackage Y;\n  import X::*;\n\n  byte    lb   = 8'h10 + X::lb;\n  string  name = \"Y\";\n\n  function void display();\n    $display(\"pkg=%s lb=0x%0h word=0x%0h\", name, lb, word);\n  endfunction \nendpackage\n\n// Define a new package called Z, use variable value inside Y within Z\npackage Z;\n  import Y::*;  \n\n  byte    lb   = 8'h10 + Y::lb;\n  string  name = \"Z\";\n  \n  function void display();\n    // Note that 'word' exists in package X and not in Y, but X\n    // is not directly imported here in Z, so the statement below \n    // will result in a compilation error\n    //$display(\"pkg=%s lb=0x%0h word=0x%0h\", name, lb, word);  // ERROR !\n    \n    $display(\"pkg=%s lb=0x%0h\", name, lb);\n  endfunction \nendpackage\n\nmodule tb;\n  // import only Z package\n  import Z::*;\n  \n  initial begin\n    X::display();   // Direct reference X package\n    Y::display();   // Direct reference Y package\n    display();      // Taken from Z package because of import\n  end \nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "Top level design units:\n\t\tX\n\t\tY\n\t\tZ\n\t\ttb\nLoading snapshot worklib.tb:sv .................... Done\n...\nxcelium> run\npkg=X lb=0x10 word=0xcafeface\npkg=Y lb=0x20 word=0xcafeface\npkg=Z lb=0x30\nxmsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Design Notes",
                        "content": "The synthesizable constructs that a package can include are:\n\nLet's define a package to store enumerated values that represent functions of an ALU block.\n\nNow, a wildcard import is done to access all declarations inside the package, within the module.",
                        "code": "// Define the package for ALU instructions\npackage alu_pkg;\n\ntypedef enum logic [2:0] {\n    ADD = 3'b000,\n    SUB = 3'b001,\n    AND = 3'b010,\n    OR  = 3'b011,\n    XOR = 3'b100\n} alu_op_t;\n\nendpackage",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "In the following example, an import is not specifically called but a direct reference to declaration inside the package is made using the scope resolution operator ::.",
                        "code": "// Import everything inside the package containing ALU operations\nimport alu_pkg::*;\n\nmodule alu (\n    input logic [2:0]   opcode,  // ALU operation code\n    input logic [31:0]  a,       // First operand\n    input logic [31:0]  b,       // Second operand\n    output logic [31:0] result   // Result of the operation\n);\n\nalways_comb begin\n    // Enumerations defined in 'alu_pkg' can be directly used here\n    // because they have been imported\n    case (opcode)\n        ADD: result = a + b;   // Perform addition\n        SUB: result = a - b;   // Perform subtraction\n        AND: result = a & b;   // Perform bitwise AND\n        OR:  result = a | b;   // Perform bitwise OR\n        XOR: result = a ^ b;   // Perform bitwise XOR\n        default: result = 32'b0; // Default case (optional)\n    endcase\nend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "When a module calls a task or function defined in a package, synthesis will replicate the functionality as if the task or function were defined directly within the module. For tasks and functions in a package to be synthesizable, they must be declared as automatic and cannot include static variables.\n\nSynthesis does not support variable declarations within packages. In simulation, a variable in a package is shared across all modules that import it, allowing one module to write to the variable and another module to access the updated value. This form of inter-module communication, which bypasses module ports, is not synthesizable.",
                        "code": "// Note that package import is not done here\n\nmodule alu (\n    input logic [2:0]   opcode,  // ALU operation code\n    input logic [31:0]  a,       // First operand\n    input logic [31:0]  b,       // Second operand\n    output logic [31:0] result   // Result of the operation\n);\n\nalways_comb begin\n    // Enumerations defined in 'alu_pkg' is directly referenced using ::\n    case (opcode)\n        alu_pkg::ADD  : result = a + b;   // Perform addition\n        alu_pkg::SUB  : result = a - b;   // Perform subtraction\n        alu_pkg::AND  : result = a & b;   // Perform bitwise AND\n        alu_pkg::OR   : result = a | b;   // Perform bitwise OR\n        alu_pkg::XOR  : result = a ^ b;   // Perform bitwise XOR\n        default       : result = 32'b0;   // Default case (optional)\n    endcase\nend",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-95",
                "num": 95,
                "title": "SystemVerilog DPI",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "SystemVerilog DPI (Direct Programming Interface) is a feature that allows users to interface between SystemVerilog and foreign programming languages such as C, C++, and SystemC.\n\nDPI enables users to integrate their SystemVerilog designs with external components written in other languages, creating a more powerful and flexible design environment. It also provides an easy and efficient way to connect existing code, usually written in C/C++ without the knowledge and the overhead of PLI/VPI.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Import Declarations",
                        "content": "The methods implemented in foreign languages can be called in SystemVerilog and needs to be declared first using import declarations. Imported subroutines can have zero or more input, output or inout arguments and can return a void or some result.",
                        "code": "import \"DPI-C\" function void init(); \t\t\t\nimport \"DPI-C\" function int sum(int a, b);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Export Declarations",
                        "content": "Methods implemented in SystemVerilog can be called in other foreign languages and need to be specified in an export declaration.",
                        "code": "export \"DPI-C\" function int randomize(int range_a, range_b);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Example",
                        "content": "",
                        "code": "module tb_top;\n\t\n\t// Import the function called \"system_init\" implemented in C code\n\timport \"DPI-C\" function void system_init();\n\n\tinitial begin\n\t\t$display (\"[%0t] Call C method\", $time);\n\t\tsystem_init();\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "#include \"stdio.h\"\n#include \"stdlib.h\"\n  \nextern \"C\" void system_init() {\n\tprintf(\"Start system initialization ...\n\");\n}",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-96",
                "num": 96,
                "title": "SystemVerilog Callback",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "What is a callback ?",
                        "content": "A callback lets you give a function to someone else’s program. When that program reaches a certain point or condition, it \"calls back\" your function and runs it, without needing to know exactly what your function does. It’s a way for different parts of a system to work together more flexibly, without being tightly connected or dependent on each other.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "What is a Systemverilog callback ?",
                        "content": "In Systemverilog, a class method is written to call placeholder methods. When needed, the user can extend the class and implement these placeholder methods. Here, the placeholder methods are the callback methods, and the calls to these methods act as callback hooks.\n\nThe major benefit of callbacks is decoupling of components. A verification environment, can register callbacks that can be executed during the simulation without modifying the original design.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Steps to create a callback",
                        "content": "1. Callback Class: The callback functionality is usually implemented in a class where certain methods are defined. These methods can be overridden or extended by other classes.\n\n2. Registration of Callbacks: To use callbacks, the class containing the method must register the callback object with the system. This allows the system to store a reference to the method that will be called later.",
                        "code": "class MyCallback;\n\n  virtual function void callback_function();\n    // Default implementation (optional)\n  endfunction\n\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "3. Implementation of Callbacks: The functionality that has to be executed when invoking the callback has to be implemented in a child class.",
                        "code": "class MyTest;\n  MyCallback cb;\n\n  // 2. Registration of callback\n  function void register_callback(MyCallback callback);\n    cb = callback;\n  endfunction\n\n  function void execute();\n    if (cb != null) begin\n      cb.callback_function();\n    end\n  endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "4. Invoking the Callback: When an event or condition occurs in the simulation, the callback is invoked by calling the registered methods. The invoking class doesn’t know the details of what the callback will do, allowing for flexible behavior.",
                        "code": "// 3. Callback implementation\nclass UserCallback extends MyCallback;\n\n  function void callback_function();\n    $display(\"User-defined callback called!\");\n  endfunction\n\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "module tb;\n\n  initial begin\n    MyTest        test;\n    UserCallback  user_cb;\n\n    test    = new;\n    user_cb = new;\n\n    // Register user-defined callback\n    test.register_callback(user_cb);\n\n    // 4. Execute which will invoke the callback\n    test.execute();\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "xcelium> run\nUser-defined callback called!\nxmsim: *W,RNQUIE: Simulation is complete.\nxcelium> exit",
                        "lang": "verilog"
                    },
                    {
                        "title": "How is it different from regular methods ?",
                        "content": "Callbacks are designed to be dynamically registered and invoked during runtime. This means you can change the behavior of your system without modifying the original code. However, regular functions or tasks are typically called directly from the code where they are defined, and their behavior is fixed unless you rewrite them.\n\nA callback is usually registered by one part of the code and then called by another part. The calling part doesn’t need to know what the callback will do—it just calls whatever was registered. But, a regular function or task is explicitly called by its name at a specific point in the code.\n\nCallbacks promote loose coupling between components. The module that invokes the callback only needs to know that a callback exists; it doesn’t need to know the details of the implementation. But regular functions or tasks are tightly coupled. The calling code has direct knowledge of the function or task it’s invoking.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "How regular methods can be used like a callback ?",
                        "content": "Empty tasks can be positioned at key points within the code, allowing new code to be added to those spots later on.\n\nFor example, pre_err_callback and post_err_callback are two empty methods defined in base test which are then overridden in a child class to implement some functionality to executed before and after error injection. So, these two methods were just placeholders in the base code to allow it to be enhanced or modified to some extent without touching the base class.",
                        "code": "class MyTest;\n ...\n\n  virtual task body();\n     // some statements\n     pre_err_callback();\n     err_inj_seq();\n     post_err_callback();\n     // more statements\n  endtask\n\n  virtual task pre_err_callback();\n    // Empty callback\n  endtask\n\n  virtual task post_err_callback();\n    // Empty callback\n  endtask\nendclass\n\nclass MyTestExt extends MyTest;\n\n  virtual task pre_err_callback();\n    // Implement things to be done before error injection\n  endtask\n\n  virtual task post_err_callback();\n    // Implement things to be done after error injection\n  endtask \nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-sv-97",
                "num": 97,
                "title": "SystemVerilog `define Macro",
                "desc": "A comprehensive SystemVerilog tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "In Verilog, a `define macro is a powerful feature that allows for global text substitution in your code. It is a compiler directive that enables developers to define reusable code snippets or constants that can be easily referenced throughout the design.\n\nRead more on Verilog `define Macros !",
                        "code": "`define  WIDTH       16        // Define macro WIDTH, substitute 16 \n`define  EN_ADDR               // Define macro EN_ADDR, substitute nothing\n\nwire   [`WIDTH-1:0]   addr;    // Declares a 16-bit wire\n\n`ifdef EN_ADDR                 // Instantiate an adder if EN_ADDR macro is defined\n  genvar i;\n  generate \n    // Code to instantiate an adder\n  endgenerate\n`endif",
                        "lang": "verilog"
                    },
                    {
                        "title": "`define without default arguments",
                        "content": "When using formal arguments in a macro, enclose the list of argument names in parentheses directly after the macro name. Each argument name should be a simple identifier, separated by commas and optional whitespace. White space is allowed between the text macro name and the left parenthesis in the macro usage.",
                        "code": "`define   ADD(name, a, b)    $display(\"%s a=%0d b=%0d sum=%0d\", name, a, b, a + b);\n\nmodule tb;\n  \n  bit [3:0]   a;\n  bit [3:0]   b;\n  \n  initial begin\n    std::randomize(a, b);    \n    \n    // The macro below will be replaced by the display statement\n    // Remember ! `define is not a function, it is text substitution\n    // before compilation\n    `ADD(\"\", a, b)\n        \n    // ERROR ! Hierarchical name component lookup failed for 'ADDR' at 'tb'\n    // First argument in the display statement requires it to be a string\n    // `ADD(ADDR, a, b)\n    \n    // Text substitute a with 3 and b with 4\n    `ADD(\"ADDER\", 3, 4)\n    \n    // Notice the extra space in the first argument\n    `ADD(\" INST \", 3, 4)\n    \n    // ERROR ! Macro is missing trailing arguments that have no default values\n    // 'b' does not have a default argument and none is passed during macro call\n    //`ADD(3, )\n    \n    // ERROR ! Macro is missing trailing arguments that have no default values (1 instead of 3)\n    // `ADD(5)\n    \n    // ERROR ! Too many actual macro arguments (4 instead of 3)\n    //`ADD(\"STH\", 4, 5, 6)    \n    \n    // Whitespace between `ADD and (\n    `ADD (\"SPACE\", 1, 1)\n  end  \nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "xcelium> run\n  a=6 b=7 sum=13\nADDER a=3 b=4 sum=7\n INST  a=3 b=4 sum=7\nSPACE a=1 b=1 sum=2\nxmsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "`define with default arguments",
                        "content": "If fewer actual arguments are provided than the number of formal arguments, and all remaining formal arguments have default values, those defaults will be used in place of the missing arguments.",
                        "code": "`define   ADD(name=\"INST\", a=5, b)    $display(\"%s a=%0d b=%0d sum=%0d\", name, a, b, a + b);\n\nmodule tb;  \n  initial begin            \n    // Text substitute a with 3 and b with 4\n    `ADD(\"ADDER\", 3, 4)    \n    \n    // 'b' does not have a default argument and none is passed during macro call\n    `ADD( , 3, 1)\n    \n    // First argument\n    `ADD(, , 5)\n    \n    // Whitespace between `ADD and (\n    `ADD (\"SPACE\", 1, 2)\n  end  \nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "SystemVerilog enhances Verilog’s `define text substitution macro by permitting the inclusion of certain special characters in the macro text.\n\nIn Verilog, quotation marks (\") can be used in a define macro, but the text within the quotation marks is treated as a literal string.",
                        "code": "xcelium> run\nADDER a=3 b=4 sum=7\nINST a=3 b=1 sum=4\nINST a=5 b=5 sum=10\nSPACE a=1 b=2 sum=3\nxmsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Note that addr and data within the string did not get replaced.",
                        "code": "`define show_txn(addr, data) \n   $display(\"addr=0x%0h data=0x%0h\", addr, data);\n\nmodule tb;\n  initial begin\n    `show_txn(8'hf0, 8'h1d)\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "xcelium> run\naddr=0xf0 data=0x1d\nxmsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "SystemVerilog `define",
                        "content": "In SystemVerilog, you can enable argument substitution within a macro text string by placing a grave accent ( ` ) before the quotation marks that define the string.\n\nNow, addr and data within the string are also replaced.",
                        "code": "// Note (`) before (\")\n`define show_txn(addr, data) \n$display(`\"addr=0x%0h data=0x%0h`\", addr, data);\n\nmodule tb;\n  initial begin\n    `show_txn(8'hf0, 8'h1d)\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Quotation marks embedded within a string should be escaped with , and extending the previous example to replace something within quotations inside a string, a grave accent should precede both  and \".",
                        "code": "xcelium> run\n8'hf0=0xf0 8'h1d=0x1d\nxmsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Note that data itself is within quotes because of the preceding escape character .",
                        "code": "`define show_txn(addr, data) \n$display(\"addr=0x%0h \"data\"=0x%0h\", addr, data);\n\nmodule tb;\n  initial begin\n    `show_txn(8'hf0, 8'h1d)\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Lets look at how to substitute addr and data like we did in the previous example, by adding a grave accent ` before the quotes as well as the escape character.",
                        "code": "xcelium> run\naddr=0xf0 \"data\"=0x1d\nxmsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Note that both addr and data have been replaced.",
                        "code": "`define show_txn(addr, data) \n$display(`\"addr=0x%0h ``\"data``\"=0x%0h`\", addr, data);\n\nmodule tb;\n  initial begin\n    `show_txn(8'hf0, 8'h1d)\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "xcelium> run\n8'hf0=0xf0 \"8'h1d\"=0x1d\nxmsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Concatenate Macros",
                        "content": "Verilog does not allow the construction of an identifier by concatenating two or more text macros togther because there will always be a white space in the constructed identifier name.\n\nIn SystemVerilog, a double accent grave `` is used to concatenate two text macros.",
                        "code": "`define MODULE \ttb\n`define SIGNAL \ta\n\n`define CONCAT(mod, sig)     assign ``mod.``sig = 1;\n\nmodule tb;\n  \n  wire a;\n  \n  `CONCAT(`MODULE, `SIGNAL)\n    \n  initial begin\n    $strobe(\"a=0x%0h\", a);\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Keywords can be used as arguments in a macro definition.",
                        "code": "xcelium> run\na=0x1\nxmsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "// Both arguments to the text macro are real Verilog keywords\n`define   PATH(module, wire)       ``module.``wire",
                        "lang": "verilog"
                    },
                    {
                        "title": "Quiz",
                        "content": "No quiz questions available for this article.",
                        "code": null,
                        "lang": "verilog"
                    }
                ]
            }
        ]
    }
];
