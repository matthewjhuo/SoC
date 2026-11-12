export const cvUvmCourses = [
    {
        "courseId": "chipverify-uvm-masterclass",
        "courseName": "ChipVerify: UVM 課程精華 (67 單元全集)",
        "icon": "Layers",
        "color": "var(--color-accent-purple)",
        "chapters": [
            {
                "id": "cv-uvm-1",
                "num": 1,
                "title": "UVM Tutorial",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "What is UVM?",
                        "content": "UVM (Universal Verification Methodology) is the industry-standard framework for verifying digital designs and systems-on-chip (SoCs) in the semiconductor industry. Built on top of SystemVerilog (IEEE 1800), UVM provides a comprehensive class library and methodology that enables engineers to create modular, reusable, and scalable verification environments.\n\nKey Characteristics:\n\nThink of UVM as... A comprehensive construction framework for verification. Just as modern buildings use standardized architectural patterns (foundations, floors, walls), UVM provides standardized verification patterns (agents, sequences, scoreboards) that proven to work across thousands of projects.\n\nUVM has become ubiquitous in chip verification. Companies like Intel, NVIDIA, Qualcomm, ARM, and AMD use UVM to verify CPUs, GPUs, SoCs, and networking chips. A modern high-end GPU verification environment might contain 200,000+ lines of UVM code, with 50+ reusable agents for protocols like PCIe, AXI, DDR, and proprietary interfaces. Without UVM's standardization, each company would build custom frameworks—wasting engineering effort and preventing IP reuse across the industry.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "OVM (Open Verification Methodology) - 2008",
                        "content": "OVM was introduced in 2008 as an open-source verification methodology based on SystemVerilog. Developed by Mentor Graphics and Cadence, it provided the foundational concepts that later evolved into UVM:",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "UVM (Universal Verification Methodology) - 2011",
                        "content": "UVM was introduced in 2011 as OVM's successor, addressing its limitations and becoming an Accellera (now IEEE) standard. UVM 1.0 was released in 2011, with subsequent revisions adding features and fixing issues.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Why OVM Was Replaced by UVM",
                        "content": "UVM addressed four critical weaknesses in OVM:\n\nOVM Problem: Lacked a formal standard, causing vendor-specific implementations to diverge UVM Solution: IEEE 1800.2 standard ensures all EDA tools implement UVM identically\n\nOVM Problem: Primarily designed for TLM, limiting RTL verification scenarios UVM Solution: Supports both TLM and RTL, plus mixed-signal and analog verification extensions\n\nOVM Problem: Components not always modular; tight coupling between testbench and DUT UVM Solution: Clear separation between verification components and DUT; agents are self-contained modules\n\nOVM Problem: Changes to methodology broke existing testbenches UVM Solution: Backward compatibility emphasis; deprecation warnings instead of abrupt changes\n\nMigration Path: OVM users could migrate to UVM relatively painlessly since UVM retained OVM's core architecture. Most projects transitioned in 2011-2013, and OVM is now obsolete. If you encounter OVM code today, convert it to UVM—all modern tools support UVM, not OVM.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "What Does UVM Contain?",
                        "content": "UVM provides a comprehensive set of features for professional verification. Here's what's included:",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "1. Testbench Components",
                        "content": "UVM provides base classes that verification engineers extend to create custom components:\n\nThe diagram shows how verification engineers extend UVM base classes (prefixed with uvm_*) to create custom components. These base classes already contain the infrastructure for communication, synchronization, and reporting—you focus on protocol-specific logic.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "2. Transactions",
                        "content": "Transactions model communication between the DUT and testbench. Instead of manipulating individual signals, you work with high-level transaction objects:\n\nTransactions abstract protocol details, making testbenches more readable and maintainable than RTL signal-level code.",
                        "code": "// Example: PCIe transaction\nclass pcie_transaction extends uvm_sequence_item;\n  rand bit [63:0] address;       // 64-bit address\n  rand bit [31:0] data[];        // Payload (dynamic array)\n  rand pcie_type_e trans_type;   // Read/Write/Message\n\n  `uvm_object_utils_begin(pcie_transaction)\n    `uvm_field_int(address, UVM_ALL_ON)\n    `uvm_field_array_int(data, UVM_ALL_ON)\n    `uvm_field_enum(pcie_type_e, trans_type, UVM_ALL_ON)\n  `uvm_object_utils_end\n\n  // UVM provides automatic print, copy, compare for this transaction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "3. Phases",
                        "content": "Phases control the order of testbench construction and execution. UVM defines standard phases that all components traverse:\n\nPhase Benefits: Phases eliminate race conditions and ensure deterministic testbench behavior. All scoreboards are built before drivers start sending stimulus. All monitoring completes before checking begins. This synchronization happens automatically—no manual coordination needed.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "4. Messaging and Reporting",
                        "content": "UVM's reporting infrastructure provides severity-based messages with automatic file/line tracking:\n\nMessages can be filtered by severity, component, or ID—useful for debugging specific areas without overwhelming log files.",
                        "code": "// UVM reporting macros\n`uvm_info(\"MONITOR\", $sformatf(\"Received transaction: %s\", txn.convert2string()), UVM_MEDIUM)\n`uvm_warning(\"DRIVER\", \"Bus timeout detected - retrying transaction\")\n`uvm_error(\"SCOREBOARD\", $sformatf(\"Mismatch: expected=0x%0h, actual=0x%0h\", exp, act))\n`uvm_fatal(\"CONFIG\", \"Interface handle is null - cannot continue\")",
                        "lang": "verilog"
                    },
                    {
                        "title": "5. Configuration Database (config_db)",
                        "content": "The configuration database passes settings and objects between components without tight coupling:\n\nThis centralized configuration mechanism replaces global variables and hardcoded settings, improving testbench flexibility.",
                        "code": "// Test sets interface handle\nuvm_config_db#(virtual apb_if)::set(null, \"uvm_test_top.*\", \"vif\", apb_vif);\n\n// Agent retrieves interface handle\nif (!uvm_config_db#(virtual apb_if)::get(this, \"\", \"vif\", m_vif))\n  `uvm_fatal(get_type_name(), \"Interface not found in config_db\")",
                        "lang": "verilog"
                    },
                    {
                        "title": "6. Functional Coverage",
                        "content": "UVM integrates with SystemVerilog's functional coverage features, tracking which scenarios have been tested:\n\nCoverage data reveals verification holes—addresses or scenarios never exercised by stimulus.",
                        "code": "covergroup pcie_cg;\n  address_cp: coverpoint txn.address {\n    bins low  = {[0:32'hFFFF]};\n    bins mid  = {[32'h10000:32'hFFFFFFF]};\n    bins high = {[32'h10000000:64'hFFFFFFFF]};\n  }\n  type_cp: coverpoint txn.trans_type;\n  cross address_cp, type_cp;  // Ensure all address ranges tested with all types\nendgroup",
                        "lang": "verilog"
                    },
                    {
                        "title": "7. Register Abstraction Layer (RAL)",
                        "content": "The register model simplifies DUT register access and verification:\n\nRAL automatically handles bus protocols, address mapping, and mirror values—dramatically reducing register verification effort.\n\nA modern SoC might contain 100+ IP blocks, each with dozens of configuration registers. Without UVM's register model, verification teams would write thousands of lines of bus protocol code to access each register. With UVM RAL, the register model is auto-generated from RTL or specifications, providing instant read/write APIs, automatic reset checking, and mirror synchronization. This is why UVM register models are mandatory in professional verification—they save months of engineering effort per project.",
                        "code": "// Write register using high-level API\nreg_model.control_reg.write(status, 32'hDEADBEEF);\n\n// Read and compare\nreg_model.status_reg.read(status, rdata);\nif (rdata != 32'h12345678)\n  `uvm_error(\"REG_CHECK\", \"Status register mismatch\")\n\n// Built-in register tests (reset values, access policies, reserved bits)\nreg_model.default_map.do_test_all(this);",
                        "lang": "verilog"
                    },
                    {
                        "title": "UVM Resources and Standards",
                        "content": "UVM undergoes periodic revisions adding features and deprecating outdated practices. The official UVM reference manual (IEEE 1800.2) can be obtained from the Accellera UVM page.\n\nUVM Versions:\n\nLearning Tip: The UVM reference manual is comprehensive but dense (500+ pages). Use it as a reference, not a tutorial. Start with practical examples and tutorials (like this course), then consult the manual for detailed class descriptions and advanced features.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Prerequisites for Learning UVM",
                        "content": "Before diving into UVM, ensure you have these foundational skills:",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "1. SystemVerilog Language Proficiency",
                        "content": "Required Knowledge:\n\nClick here to refresh SystemVerilog concepts!\n\nWhy It Matters: UVM is written entirely in SystemVerilog and heavily uses OOP. Without solid SystemVerilog knowledge, UVM code will be incomprehensible.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "2. Simulation Tool Familiarity",
                        "content": "You should know how to use at least one major simulator:\n\nTypical workflow: compile testbench, run simulation with +UVM_TESTNAME=my_test, analyze waveforms and logs.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "3. Verification Methodology Understanding",
                        "content": "Basic verification concepts you should know:\n\nProfessional verification teams typically train new engineers with this timeline:",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Common Beginner Mistakes",
                        "content": "Mistake #1: Trying to Learn UVM Without SystemVerilog OOP\n\nWrong Approach: Jump directly into UVM tutorials without understanding classes, inheritance, or virtual methods Right Approach: Master SystemVerilog OOP first (at least 2-3 weeks of practice), then start UVM\n\nWhy? UVM is built entirely on SystemVerilog OOP. Concepts like super.build_phase(), uvm_driver#(T) parameterization, and factory overrides are incomprehensible without OOP knowledge. Skipping prerequisites leads to frustration and superficial understanding.\n\nMistake #2: Reading the UVM Reference Manual First\n\nWrong Approach: Start by reading the 500-page UVM 1800.2 reference manual cover-to-cover Right Approach: Start with practical tutorials and examples, use the manual as a reference when needed\n\nWhy? The UVM spec is a technical reference, not a learning resource. It describes every class method in detail but doesn't explain why or when to use them. Learn by doing—build testbenches following tutorials, then consult the spec for specific questions.\n\nMistake #3: Trying to Understand All of UVM at Once\n\nWrong Approach: Attempt to learn phases, sequences, TLM, factory, config_db, and RAL simultaneously Right Approach: Learn incrementally: basic structure → driver/monitor → sequences → config_db → advanced topics\n\nWhy? UVM is vast. Professionals use only 20% of UVM's features for 80% of their work. Master the fundamentals first (components, phases, basic sequences). Add complexity gradually as projects demand it. Register models, callbacks, and advanced sequences come later.\n\nMistake #4: Not Running Code While Learning\n\nWrong Approach: Read UVM tutorials passively without typing/running code Right Approach: Type every example yourself, run simulations, modify code, break things intentionally\n\nWhy? UVM has subtle behaviors that only become clear through experimentation. What happens if you don't call super.build_phase()? What if config_db::get() fails? You learn these lessons by making mistakes in controlled practice environments, not by reading.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Practice Exercise",
                        "content": "Before starting UVM development, verify you have the necessary prerequisites. Answer these questions honestly:\n\nIf you answered \"no\" or \"unsure\" to more than 2 questions, spend 1-2 weeks reviewing SystemVerilog fundamentals before proceeding with UVM. Focus especially on OOP concepts (classes, inheritance, polymorphism, virtual methods).\n\nIf you're ready for UVM (all questions answered \"yes\"):\n\nIf you need SystemVerilog review (answered \"no\" to 3+ questions):\n\nQuestion 1: Class with inheritance and virtual methods\n\nQuestion 2: Shallow vs Deep Copy\n\nQuestion 3: rand vs randc\n\nQuestion 4: Interface with clocking block",
                        "code": "class animal;\n    virtual function void make_sound();\n      $display(\"Generic animal sound\");\n    endfunction\n  endclass\n\n  class dog extends animal;\n    virtual function void make_sound();\n      $display(\"Woof!\");  // Override parent's method\n    endfunction\n  endclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Question 5: Compile and run",
                        "code": "interface apb_if(input clk);\n    logic [31:0] paddr, pwdata, prdata;\n    logic pwrite, penable;\n\n    clocking cb @(posedge clk);\n      output paddr, pwdata, pwrite, penable;\n      input prdata;\n    endclocking\n\n    modport master (clocking cb);\n  endinterface",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Assessment: If these concepts are clear, you're ready for UVM. If not, review SystemVerilog OOP chapters before proceeding.",
                        "code": "# VCS example\n  vcs -sverilog -ntb_opts uvm testbench.sv\n  ./simv +UVM_TESTNAME=base_test",
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
                "id": "cv-uvm-2",
                "num": 2,
                "title": "UVM Introduction",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "12 min read |  Intermediate Level",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "What is UVM?",
                        "content": "SystemVerilog is a language with its own constructs, syntax, and features, but UVM (Universal Verification Methodology) is a framework built on top of SystemVerilog. Think of SystemVerilog as the programming language and UVM as a comprehensive library of classes that provide the building blocks for professional verification testbenches.\n\nPrerequisite: UVM requires solid SystemVerilog knowledge, especially object-oriented programming (classes, inheritance, polymorphism). If you need a refresher, check out the SystemVerilog tutorial series.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Why Do We Need UVM?",
                        "content": "Before UVM, every verification team had their own way of building testbenches—different coding styles, different component structures, different communication mechanisms. This created several problems:\n\nUVM solves these problems by providing a standardized methodology:\n\nUVM is the industry-standard verification methodology for complex SoC (System-on-Chip) designs. It's used extensively in CPU verification (pipeline control, cache coherency), GPU verification (shader cores, memory subsystems), networking chips (packet processing, protocol engines), and high-performance computing accelerators. Major semiconductor companies have standardized on UVM for all ASIC and FPGA verification projects.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "How Does UVM Help?",
                        "content": "Every verification testbench needs certain fundamental components regardless of the design being verified. UVM provides base classes for these standard components:\n\nUVM also distinguishes between two types of entities in a verification environment:\n\nKey Insight: Components process objects. For example, a driver (component) receives transaction objects from a sequencer, then drives those transactions onto the DUT interface.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "UVM Class Hierarchy",
                        "content": "UVM provides a carefully designed class hierarchy where all verification components inherit from base classes that provide common functionality. This hierarchy has two main branches:",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "The Two Branches",
                        "content": "All static testbench components inherit from uvm_component:\n\nAll data that flows through the testbench inherits from uvm_transaction:\n\nuvm_object is the root class for both branches, providing common operations like print, copy, compare, and pack/unpack.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "1. UVM Objects",
                        "content": "The base class uvm_object provides essential operations that every data structure needs:\n\nConfiguration classes (settings for testbench components) are typically derived from uvm_object. For example, you might create a uart_config object to specify baud rate, parity, and stop bits for a UART agent.\n\nRead more about UVM Object.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "2. UVM Sequences",
                        "content": "UVM introduces the concept of sequences—reusable containers for stimulus patterns. Instead of hardcoding stimulus in your driver, you write sequences that can be:\n\nAll user-defined stimulus classes extend from uvm_sequence. Read more about UVM Sequence.",
                        "code": "// Example: Building complex stimulus from simple sequences\nclass test_sequence extends uvm_sequence #(my_transaction);\n  // Create individual sequences\n  read_sequence  read_seq;\n  write_sequence write_seq;\n\n  virtual task body();\n    // Compose complex patterns: W->R->R->W\n    write_seq.start(m_sequencer);\n    read_seq.start(m_sequencer);\n    read_seq.start(m_sequencer);\n    write_seq.start(m_sequencer);\n  endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "3. UVM Sequence Items",
                        "content": "Data objects representing individual transactions are called sequence items. These extend from uvm_sequence_item and define the fields needed for your protocol.\n\nIn large-scale SoC verification, sequences are used to model software behavior. For example, a \"boot sequence\" might configure registers, initialize memory controllers, and load firmware—all composed from smaller reusable sequences. A \"stress sequence\" might randomly interleave cache flushes, DMA transfers, and interrupt handling to uncover corner-case bugs in the memory subsystem.",
                        "code": "// Example: APB transaction\nclass apb_transaction extends uvm_sequence_item;\n  rand bit [31:0] addr;      // Address to access\n  rand bit [31:0] data;      // Data to write/read\n  rand bit        write;     // 1=write, 0=read\n\n  // UVM automation macro for print/copy/compare\n  `uvm_object_utils_begin(apb_transaction)\n    `uvm_field_int(addr,  UVM_ALL_ON)\n    `uvm_field_int(data,  UVM_ALL_ON)\n    `uvm_field_int(write, UVM_ALL_ON)\n  `uvm_object_utils_end\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "4. UVM Components",
                        "content": "All major testbench components derive from uvm_component base classes. The table below shows the purpose of each standard component:\n\nRead more about UVM Component.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "5. UVM Phases",
                        "content": "UVM provides a phasing mechanism that synchronizes all components through well-defined stages of simulation:\n\nWhy Phases Matter: Phases ensure that components are built before they're connected, connected before they run, and all finish together. This prevents race conditions and ensures deterministic testbench behavior.\n\nEvery component goes through these phases automatically. UVM calls specific methods (e.g., build_phase(), connect_phase()) on each component at the appropriate time. Read more about UVM Phases.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "6. TLM (Transaction-Level Modeling)",
                        "content": "UVM adopts TLM from SystemC, providing a high-level way to communicate between components using transactions instead of signals:\n\nTLM eliminates the need for explicit channels and connections—components simply declare ports/exports, and UVM connects them automatically during the connect phase. Read more about UVM TLM.",
                        "code": "// Example: Monitor broadcasts transactions to scoreboard and coverage\nclass my_monitor extends uvm_monitor;\n  // Analysis port for broadcasting\n  uvm_analysis_port #(apb_transaction) ap;\n\n  virtual task run_phase(uvm_phase phase);\n    apb_transaction tx;\n    forever begin\n      // Observe interface and reconstruct transaction\n      tx = observe_interface();\n\n      // Broadcast to all connected subscribers\n      ap.write(tx);  // Scoreboard, coverage, etc. all receive this\n    end\n  endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "7. UVM Register Layer",
                        "content": "Many designs include control and status registers (CSRs) that software configures. Verifying register access—reads, writes, reset values, field access policies—is tedious and error-prone when done manually.\n\nUVM's register model provides classes to:\n\nThis is especially valuable for IP reuse in different SoCs—the register model can be reused without modification. Read more about UVM Register Layer.\n\nModern SoCs contain thousands of configuration registers across multiple IP blocks. The UVM register model allows verification teams to automatically generate register tests (reset checks, reserved bit checks, interrupt status verification) and maintain register state synchronization between the testbench and DUT. This is critical for pre-silicon validation where register programming sequences mirror actual firmware behavior.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Common Beginner Mistakes",
                        "content": "Mistake #1: Confusing Components and Objects\n\nWrong: Extending a transaction class from uvm_component Right: Transactions extend from uvm_sequence_item (or uvm_object)\n\nWhy? Components are static testbench infrastructure (drivers, monitors). Objects are dynamic data (transactions, configurations). Mixing these causes compilation errors and violates UVM's architectural principles.\n\n\n\nMistake #2: Not Using Macros for Automation\n\nWrong: Manually writing print(), copy(), compare() methods for every class Right: Use `uvm_component_utils() and `uvm_object_utils() macros with field automation\n\nWhy? UVM's field macros automatically implement common operations (print, copy, compare, pack). Writing these manually is error-prone and defeats UVM's automation benefits.\n\n\n\nMistake #3: Trying to Learn UVM Without SystemVerilog OOP\n\nUVM heavily relies on classes, inheritance, polymorphism, and virtual methods. Attempting to learn UVM without solid SystemVerilog OOP knowledge leads to confusion. Prerequisite: Master SystemVerilog classes before diving into UVM.\n\n\n\nMistake #4: Building Components in run_phase()\n\nWrong: Instantiating components in run_phase() Right: Build components in build_phase(), connect in connect_phase()\n\nWhy? Phases have specific purposes. Building components during the run phase breaks UVM's synchronization mechanism and can cause null pointer errors.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Summary",
                        "content": "In this tutorial, you learned:",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Practice Exercise",
                        "content": "For each item below, determine if it should extend from uvm_component or uvm_object (or its subclasses like uvm_sequence_item). Explain your reasoning.\n\nAsk yourself: \"Does this entity exist throughout simulation (component), or does it appear and disappear dynamically (object)?\"\n\nComponents are testbench infrastructure (drivers, monitors, scoreboards). Objects are data that flows through the testbench (transactions, configurations, sequences).\n\nKey Takeaway: If it's testbench infrastructure (driver, monitor, agent, env, scoreboard), it's a component. If it's data (transaction, configuration, sequence), it's an object.",
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
                "id": "cv-uvm-3",
                "num": 3,
                "title": "UVM Installation",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "UVM is not a separate tool you install like a simulator — it's a SystemVerilog class library that your simulator compiles alongside your testbench code. So \"installing UVM\" really means getting a copy of the UVM source files (or using the one already bundled with your simulator) and pointing your compile command at it.\n\nThis article walks through both routes: using the UVM library that ships with your simulator, and downloading the official Accellera reference implementation yourself when you need a specific version or want to run on EDA Playground.\n\n5 min read | Beginner Level",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "UVM Is a Library, Not an Application",
                        "content": "Most commercial simulators — Synopsys VCS, Siemens (formerly Mentor) Questa, and Cadence Xcelium — ship with a built-in copy of UVM, so in many cases there's nothing to download at all. You just tell the simulator which UVM version to use, and it compiles uvm_pkg.sv from its own installation directory.\n\nYou only need to manually download UVM when:\n\nThe current standard release is UVM 2020.3.1, the IEEE 1800.2 reference implementation maintained by Accellera. Older versions like UVM 1.2 still work and are widely seen in legacy codebases, but new projects should generally start with the current 1800.2 release unless your simulator or company standard says otherwise.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Where to Download UVM",
                        "content": "The official source is the Accellera Systems Initiative downloads page. There are two ways to get the same code:",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Option 1: Accellera Tarball",
                        "content": "Go to accellera.org/downloads/standards/uvm and download the UVM v2020.3.1 Library Code for IEEE 1800.2. This is a .tar.gz archive, the same format UVM has always shipped in.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Option 2: Accellera's Official GitHub Repository",
                        "content": "Accellera also publishes the same releases on GitHub at github.com/accellera-official/uvm-core. If you're comfortable with git, this is convenient for pulling a specific tagged release or staying current with bug-fix patches between releases.\n\nIf your company or coursework still targets UVM 1.2, Accellera keeps every past release available under \"Previous Releases\" on the same downloads page — you don't need to hunt for an old mirror.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Installing UVM on Linux",
                        "content": "Once you have the archive, the process is the same regardless of which UVM version you picked.\n\nStep 1: Transfer the file\n\nCopy the downloaded .tar.gz file into your Linux workarea using scp, WinSCP, or any file transfer tool you normally use.\n\nStep 2: Extract it\n\nFrom a terminal in your workarea, run:\n\nThis creates a folder containing the UVM source — the exact folder name depends on the release you downloaded (for example, UVM-1800.2-2020.3.1).\n\nStep 3: Point your simulator at it\n\nYour simulator needs the path to UVM's source directory so it can find uvm_pkg.sv and uvm_macros.svh. Most simulators accept an include-directory switch for this, for example -incdir [path to UVM folder]/src.\n\nRather than retyping the full path every time, it's common to set an environment variable, usually called $UVM_HOME, that points to your extracted UVM folder.\n\nStep 4: Find your shell",
                        "code": "$> tar -xvf UVM-1800.2-2020.3.1.tar.gz",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "This tells you whether you're running bash, tcsh, or something else, since the syntax for setting an environment variable differs between shells.\n\nStep 5: Set the environment variable",
                        "code": "$> echo $0",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Now you can compile with -incdir $UVM_HOME/src instead of typing out the full path each time. Check your specific simulator's documentation for the exact compile-time switches it expects, since the flag name (-incdir, +incdir+, etc.) varies between tools.\n\nAdding $UVM_HOME to your shell's startup file (like .bashrc) makes it persist across terminal sessions. If you only set it with export in a single terminal, it disappears once you close that terminal.",
                        "code": "# For tcsh\n$> setenv UVM_HOME [path_to_your_workarea]/UVM-1800.2-2020.3.1\n\n# For bash\n$> export UVM_HOME=[path_to_your_workarea]/UVM-1800.2-2020.3.1",
                        "lang": "verilog"
                    },
                    {
                        "title": "Easier Ways to Practice UVM",
                        "content": "If your goal is just to learn UVM and run small examples — not set up a production verification flow — downloading and configuring the library yourself is more setup than you need. Three lower-friction options:",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "1. EDA Playground (Recommended for Beginners)",
                        "content": "EDA Playground is a free, browser-based simulation environment. Pick a simulator from the Tools & Simulators menu, then select UVM/OVM from the methodology dropdown — no download, no environment variables, no local installation. This is the fastest way to try the code examples throughout this tutorial.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "2. Simulator with UVM Already Bundled",
                        "content": "If your university or company already has a license for VCS, Questa, or Xcelium, check the installation directory first. There's a very good chance UVM is already sitting in a subfolder like $VCS_HOME/etc/uvm or similar, and you can skip the Accellera download entirely.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "3. Open-Source Simulators",
                        "content": "Open-source tools like Verilator have been adding SystemVerilog class support, though UVM compatibility varies by tool and version. If you're exploring this route, check the simulator's current documentation for UVM support status before committing to it for coursework or a project.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Common Beginner Mistakes",
                        "content": "Mistake #1: Assuming UVM Needs a Traditional Installer\n\nThere's no install.sh or setup wizard. UVM is just SystemVerilog source files that get compiled into your testbench like any other package. If you're searching for an \"installer,\" you're looking for the wrong thing — you need the source tarball and a compile-time include path.\n\nMistake #2: Forgetting to Persist $UVM_HOME\n\nWrong: Setting $UVM_HOME with export in one terminal, then opening a new terminal later and wondering why the variable is gone. Right: Add the export or setenv line to your shell's startup file (.bashrc, .cshrc, etc.) so it's set automatically every time you open a terminal.\n\nWhy? Environment variables set in a terminal session only exist for that session unless they're written into a startup file that runs automatically.\n\nMistake #3: Mixing UVM Versions Across a Project\n\nIf one engineer compiles against UVM 1.2 and another against UVM 2020.3.1 in the same project, you can hit subtle compatibility issues — some APIs were deprecated or changed behavior between major releases. Agree on one UVM version per project and make sure everyone's $UVM_HOME points to the same release.\n\nLarge verification teams often pin their entire project to one specific UVM release for the life of the project, even after a newer version comes out. Re-validating an entire regression suite against a new UVM release takes real engineering time, so teams upgrade deliberately rather than automatically.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Practice Exercise",
                        "content": "Open EDA Playground, create a new playground, select a simulator that supports UVM (such as Aldec Riviera-PRO, which doesn't require account validation), and select UVM from the methodology dropdown. Paste in a one-line test that just prints a message using `uvm_info and run it.\n\nYou'll need a minimal module that includes uvm_macros.svh and imports uvm_pkg::* before you can call `uvm_info.\n\nIf this prints a UVM_INFO line in the results pane, your UVM setup is working correctly.",
                        "code": "`include \"uvm_macros.svh\"\nimport uvm_pkg::*;\n\nmodule test;\n  initial begin\n    `uvm_info(\"TEST\", \"UVM environment is working!\", UVM_LOW)\n  end\nendmodule",
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
                "id": "cv-uvm-4",
                "num": 4,
                "title": "Hello UVM !",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "You've seen the UVM class hierarchy and you have UVM installed. Now let's actually run something. The goal here is small on purpose: build the smallest possible UVM testbench that prints \"Hello UVM!\" to the simulation log, so you can see how a uvm_test and a uvm_env fit together — with no DUT, no interface, and no configuration database involved yet. Those pieces matter a lot once you're actually verifying a design, but they're not needed just to get UVM's class hierarchy and phasing running for the first time, so we'll leave them for the chapter where you build your first real testbench.\n\nWe'll keep this testbench to two components:\n\n5 min read | Beginner Level",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Testbench Setup",
                        "content": "The whole testbench is just the environment instantiated inside the test, with the test started from a top-level module. There's no design under test here at all — this is purely about seeing UVM's class structure and phases run.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Test",
                        "content": "The test is an object of uvm_test and owns the environment. In a real testbench, the test is also where you'd choose which sequence runs and where you'd pull in configuration — useful later on, since it lets you swap test scenarios without touching the rest of the testbench. Here, its only job is to construct the environment. Let's walk through the class piece by piece.\n\nThis defines a class called base_test that inherits all the properties and methods of uvm_test. Next, we register the component with the UVM factory using the macro `uvm_component_utils, since a test is a kind of uvm_component.",
                        "code": "class base_test extends uvm_test;",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Now we declare a handle to the environment:",
                        "code": "`uvm_component_utils (base_test)",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "The constructor new() takes the standard name, parent arguments every uvm_component needs:",
                        "code": "my_env   m_top_env;",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "The build_phase constructs the environment. Note that we call the parent class's build_phase first using super, before doing our own work.\n\nThe line using type_id is the preferred way to construct UVM objects. It routes the object creation through the factory, which means the type can be substituted later — for example, swapping in an extended environment for a different test — without editing this code. You could call new() directly instead, but that bypasses the factory and gives up that flexibility, so it isn't recommended.",
                        "code": "function new (string name, uvm_component parent = null);\n   super.new (name, parent);\nendfunction : new",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Real testbenches almost always need to pass information — like a virtual interface handle — from outside UVM into the test using uvm_config_db. That mechanism is covered in its own chapter once you have an actual interface and DUT to connect.\n\nYou can also print the testbench's component hierarchy after the build and connect phases finish, which is a handy sanity check that everything got constructed where you expect:",
                        "code": "virtual function void build_phase (uvm_phase phase);\n    super.build_phase (phase);\n\n    m_top_env  = my_env::type_id::create (\"m_top_env\", this);\n endfunction : build_phase",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "virtual function void end_of_elaboration_phase (uvm_phase phase);\n\t\tuvm_top.print_topology ();\n\tendfunction",
                        "lang": "verilog"
                    },
                    {
                        "title": "Environment",
                        "content": "The environment's only job here is to print \"Hello UVM!\" during the run phase.\n\n`uvm_info is the macro almost every testbench uses for informational messages. It wraps the underlying uvm_report_info function, automatically stamping in the file name and line number, and — importantly — it skips the message-formatting work entirely if the verbosity level would filter the message out anyway. That's why `uvm_info/`uvm_warning/`uvm_error/`uvm_fatal are the preferred way to report, rather than calling uvm_report_info and friends directly.\n\nUVM_LOW is the verbosity level of this message, not a delay or a severity. Every component has a verbosity threshold (UVM_MEDIUM by default), and a message only prints if its level is at or below that threshold. UVM_LOW messages print under almost any threshold, which is why it's a safe default for a message you always want to see.",
                        "code": "class my_env extends uvm_env ;\n\t`uvm_component_utils (my_env)\n  \n\tfunction new (string name, uvm_component parent);\n\t\tsuper.new (name, parent);\n\tendfunction : new\n  \n\tfunction void build_phase (uvm_phase phase);\n\t\tsuper.build_phase (phase);\n\tendfunction : build_phase\n  \n\ttask run_phase (uvm_phase phase);\n\t\t`uvm_info (get_name(), $sformatf (\"Hello UVM ! Simulation has started.\"), UVM_LOW)\n\tendtask : run_phase\nendclass : my_env",
                        "lang": "verilog"
                    },
                    {
                        "title": "Top-Level Module",
                        "content": "Everything above this point is pure UVM class code — it doesn't run by itself. Something has to actually kick off the simulation and start UVM's phasing, and that's the job of a small top-level module. The global run_test() task does this: it looks up the test you name, constructs it, and drives it through every UVM phase from build_phase to run_phase and beyond.\n\nThat's the entire simulation environment: one module, one line that matters (run_test(\"base_test\")), and the two classes you just wrote.\n\nPassing the test name directly to run_test() works fine for a single fixed test like this. Once you have a library of tests, the more common approach is to leave the argument blank — run_test(); — and select the test from the simulator command line instead, using +UVM_TESTNAME=base_test. That way you don't need to recompile to switch tests.",
                        "code": "module tb_top;\n\n  import uvm_pkg::*;\n  `include \"uvm_macros.svh\"\n\n  initial begin\n    run_test (\"base_test\");\n  end\n\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "This log is adapted from a real simulation run of the original two-message version of this testbench, trimmed down to match the single `uvm_info call shown above. The exact line number in ./tb/my_pkg.sv(28) will differ in your own file depending on where the call actually lands — what matters is the message text, the [m_top_env] tag identifying which component logged it, and the UVM_INFO severity.\n\nTwo things worth noticing in this log: the testbench topology printout confirms m_top_env was built correctly under uvm_test_top, and the report summary at the bottom shows 3 UVM_INFO messages with zero warnings, errors, or fatals — the simplest possible \"clean run.\" Two of those three messages ([RNTST] and [UVMTOP]) are printed automatically by UVM itself; only the third, tagged [m_top_env], is the message you actually wrote.\n\nThe version banner above (CDNS-UVM-1.1d) reflects whichever UVM version and simulator produced this particular log. Your own output will show your simulator's name and the UVM version you've got configured — the structure of the topology table and report summary will look the same either way.",
                        "code": "----------------------------------------------------------------\nCDNS-UVM-1.1d (14.10-s004)\n(C) 2007-2013 Mentor Graphics Corporation\n(C) 2007-2013 Cadence Design Systems, Inc.\n(C) 2006-2013 Synopsys, Inc.\n(C) 2011-2013 Cypress Semiconductor Corp.\n----------------------------------------------------------------\nUVM_INFO @ 0: reporter [RNTST] Running test base_test...\nUVM_INFO @ 0: reporter [UVMTOP] UVM testbench topology:\n------------------------------------\nName          Type       Size  Value\n------------------------------------\nuvm_test_top  base_test  -     @2601\n  m_top_env   my_env     -     @201\n------------------------------------\n\nUVM_INFO ./tb/my_pkg.sv(28) @ 0: uvm_test_top.m_top_env [m_top_env] Hello UVM ! Simulation has started.\n\n--- UVM Report catcher Summary ---\n\n\nNumber of demoted UVM_FATAL reports  :    0\nNumber of demoted UVM_ERROR reports  :    0\nNumber of demoted UVM_WARNING reports:    0\nNumber of caught UVM_FATAL reports   :    0\nNumber of caught UVM_ERROR reports   :    0\nNumber of caught UVM_WARNING reports :    0\n\n--- UVM Report Summary ---\n\n** Report counts by severity\nUVM_INFO :    3\nUVM_WARNING :    0\nUVM_ERROR :    0\nUVM_FATAL :    0\n** Report counts by id\n[RNTST]     1\n[UVMTOP]     1\n[m_top_env]     1\nSimulation complete via $finish(1) at time 0 FS + 179",
                        "lang": "verilog"
                    },
                    {
                        "title": "Common Beginner Mistakes",
                        "content": "Mistake #1: Forgetting to call super.build_phase(phase)\n\nWrong: function void build_phase(uvm_phase phase); m_top_env = ... Right: super.build_phase(phase); m_top_env = ...\n\nWhy? Skipping the parent class's build_phase call can silently break configuration inheritance that the base class sets up, even though your own code might appear to run fine.\n\nMistake #2: Using new() Instead of the Factory\n\nCalling m_top_env = new(\"m_top_env\", this) works, but it bypasses the UVM factory entirely. If you later want to substitute a derived environment for a specific test, factory-based creation through type_id::create() lets you do that without editing this file; a plain new() call doesn't.\n\nMistake #3: Forgetting the Test Name in run_test()\n\nIf you call run_test(); with no argument and don't pass +UVM_TESTNAME on the simulator command line either, UVM has no test to run and the simulation will end immediately or report an error, depending on your simulator. While building your first example, it's simplest to just hardcode the name as shown above.\n\nThe test-plus-environment split you just built is the skeleton of every UVM testbench, no matter how complex. Production testbenches add agents, scoreboards, and coverage collectors inside the environment, and multiple test classes that each configure a different sequence — but the core relationship between a thin test class, a heavier environment class, and a one-line top module stays the same.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Practice Exercise",
                        "content": "Modify my_env's run_phase so the message prints your own name instead of the generic \"Hello UVM!\" text. Then, in base_test's build_phase, change the instance name passed to create() from \"m_top_env\" to something else, and re-run. Watch how the tag in front of your message in the log changes to match.\n\nget_name() returns whatever instance name the component was created with. The tag UVM prints before your message — like [m_top_env] — comes directly from that name, not from the class name my_env.",
                        "code": "// In my_env:\ntask run_phase (uvm_phase phase);\n   `uvm_info (get_name(), $sformatf (\"Hello from your_name_here ! UVM is running.\"), UVM_LOW)\nendtask : run_phase",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "After this change, the log tag becomes [my_renamed_env] instead of [m_top_env], even though the class is still called my_env. This is worth internalizing early: the name UVM shows you in messages and in the topology printout is the instance name you chose, not the class type.",
                        "code": "// In base_test's build_phase:\nm_top_env = my_env::type_id::create (\"my_renamed_env\", this);",
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
                "id": "cv-uvm-5",
                "num": 5,
                "title": "UVM Class Library",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "Base class for all hierarchical testbench components. Provides phasing, hierarchy traversal, factory integration, and configuration.\n\nPulls sequence items from a sequencer and drives them onto the DUT interface through a virtual interface.",
                        "code": "class my_comp extends uvm_component;\n  `uvm_component_utils(my_comp)\n\n  function new(string name, uvm_component parent);\n    super.new(name, parent);\n  endfunction\n\n  function void build_phase(uvm_phase phase);\n    super.build_phase(phase);\n    // Create children here\n  endfunction\n\n  function void connect_phase(uvm_phase phase);\n    // Connect TLM ports here\n  endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Passively observes DUT signals and broadcasts collected transactions via an analysis port. Must never drive signals.",
                        "code": "class my_driver extends uvm_driver #(my_txn);\n  virtual my_if vif;\n\n  `uvm_component_utils(my_driver)\n\n  function new(string name, uvm_component parent);\n    super.new(name, parent);\n  endfunction\n\n  function void build_phase(uvm_phase phase);\n    super.build_phase(phase);\n    if (!uvm_config_db#(virtual my_if)::get(this, \"\", \"vif\", vif))\n      `uvm_fatal(\"NOVIF\", \"Virtual interface not set\")\n  endfunction\n\n  task run_phase(uvm_phase phase);\n    forever begin\n      seq_item_port.get_next_item(req);\n      // Drive req onto vif\n      @(posedge vif.clk);\n      vif.addr <= req.addr;\n      vif.data <= req.data;\n      seq_item_port.item_done();\n    end\n  endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Groups a driver, sequencer, and monitor into a reusable protocol agent. Can operate in active or passive mode.",
                        "code": "class my_monitor extends uvm_monitor;\n  virtual my_if vif;\n  uvm_analysis_port #(my_txn) ap;\n\n  `uvm_component_utils(my_monitor)\n\n  function new(string name, uvm_component parent);\n    super.new(name, parent);\n  endfunction\n\n  function void build_phase(uvm_phase phase);\n    super.build_phase(phase);\n    ap = new(\"ap\", this);\n    if (!uvm_config_db#(virtual my_if)::get(this, \"\", \"vif\", vif))\n      `uvm_fatal(\"NOVIF\", \"Virtual interface not set\")\n  endfunction\n\n  task run_phase(uvm_phase phase);\n    forever begin\n      my_txn txn = my_txn::type_id::create(\"txn\");\n      // Sample signals from vif and populate txn\n      @(posedge vif.clk);\n      txn.addr = vif.addr;\n      txn.data = vif.data;\n      ap.write(txn);\n    end\n  endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Top-level verification environment container. Instantiates agents, scoreboards, coverage collectors, and sub-environments.",
                        "code": "class my_agent extends uvm_agent;\n  my_driver    drv;\n  my_monitor   mon;\n  uvm_sequencer #(my_txn) seqr;\n\n  `uvm_component_utils(my_agent)\n\n  function new(string name, uvm_component parent);\n    super.new(name, parent);\n  endfunction\n\n  function void build_phase(uvm_phase phase);\n    super.build_phase(phase);\n    mon = my_monitor::type_id::create(\"mon\", this);\n    if (get_is_active() == UVM_ACTIVE) begin\n      drv  = my_driver::type_id::create(\"drv\", this);\n      seqr = uvm_sequencer#(my_txn)::type_id::create(\"seqr\", this);\n    end\n  endfunction\n\n  function void connect_phase(uvm_phase phase);\n    if (get_is_active() == UVM_ACTIVE)\n      drv.seq_item_port.connect(seqr.seq_item_export);\n  endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Top of the testbench hierarchy. Creates the environment, sets configuration, and launches test sequences.",
                        "code": "class my_env extends uvm_env;\n  my_agent      agent;\n  my_scoreboard sb;\n\n  `uvm_component_utils(my_env)\n\n  function new(string name, uvm_component parent);\n    super.new(name, parent);\n  endfunction\n\n  function void build_phase(uvm_phase phase);\n    super.build_phase(phase);\n    agent = my_agent::type_id::create(\"agent\", this);\n    sb    = my_scoreboard::type_id::create(\"sb\", this);\n  endfunction\n\n  function void connect_phase(uvm_phase phase);\n    agent.mon.ap.connect(sb.analysis_export);\n  endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Arbitrates between multiple sequences and routes items to the connected driver via a TLM export.",
                        "code": "class base_test extends uvm_test;\n  my_env env;\n\n  `uvm_component_utils(base_test)\n\n  function new(string name, uvm_component parent);\n    super.new(name, parent);\n  endfunction\n\n  function void build_phase(uvm_phase phase);\n    super.build_phase(phase);\n    env = my_env::type_id::create(\"env\", this);\n  endfunction\n\n  task run_phase(uvm_phase phase);\n    my_sequence seq = my_sequence::type_id::create(\"seq\");\n    phase.raise_objection(this);\n    seq.start(env.agent.seqr);\n    phase.drop_objection(this);\n  endtask\n\n  function void end_of_elaboration_phase(uvm_phase phase);\n    uvm_top.print_topology();\n  endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Checks DUT correctness by comparing actual outputs against expected values. Receives data via analysis ports from monitors.",
                        "code": "// Typically use the built-in parameterized sequencer:\nuvm_sequencer #(my_txn) seqr;\n\n// In agent build_phase:\nseqr = uvm_sequencer#(my_txn)::type_id::create(\"seqr\", this);\n\n// In agent connect_phase:\ndrv.seq_item_port.connect(seqr.seq_item_export);\n\n// To change arbitration:\nseqr.set_arbitration(SEQ_ARB_STRICT_FIFO);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "A sequencer that does not connect to a driver. Routes virtual sequences to multiple sub-sequencers in a multi-agent environment.",
                        "code": "class my_scoreboard extends uvm_scoreboard;\n  uvm_analysis_imp #(my_txn, my_scoreboard) analysis_export;\n  int pass_count, fail_count;\n\n  `uvm_component_utils(my_scoreboard)\n\n  function new(string name, uvm_component parent);\n    super.new(name, parent);\n  endfunction\n\n  function void build_phase(uvm_phase phase);\n    super.build_phase(phase);\n    analysis_export = new(\"analysis_export\", this);\n  endfunction\n\n  function void write(my_txn txn);\n    // Compare txn against expected\n    if (txn.data == expected_data)\n      pass_count++;\n    else begin\n      `uvm_error(\"SB\", $sformatf(\"Mismatch: got %0h, exp %0h\", txn.data, expected_data))\n      fail_count++;\n    end\n  endfunction\n\n  function void report_phase(uvm_phase phase);\n    `uvm_info(\"SB\", $sformatf(\"Pass=%0d Fail=%0d\", pass_count, fail_count), UVM_LOW)\n  endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Type-safe static database for passing configuration objects and virtual interfaces across the component hierarchy.",
                        "code": "class my_virtual_sequencer extends uvm_sequencer;\n  my_sequencer_a seqr_a;\n  my_sequencer_b seqr_b;\n\n  `uvm_component_utils(my_virtual_sequencer)\n\n  function new(string name, uvm_component parent);\n    super.new(name, parent);\n  endfunction\nendclass\n\n// Virtual sequence:\nclass my_virtual_seq extends uvm_sequence;\n  `uvm_object_utils(my_virtual_seq)\n  `uvm_declare_p_sequencer(my_virtual_sequencer)\n\n  task body();\n    my_seq_a seq_a = my_seq_a::type_id::create(\"seq_a\");\n    my_seq_b seq_b = my_seq_b::type_id::create(\"seq_b\");\n    fork\n      seq_a.start(p_sequencer.seqr_a);\n      seq_b.start(p_sequencer.seqr_b);\n    join\n  endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Lower-level resource database that uvm_config_db is built upon. Stores configuration by scope and type. Prefer uvm_config_db for most use cases.",
                        "code": "// In top-level testbench (typically initial block):\ninitial begin\n  uvm_config_db#(virtual my_if)::set(null, \"*\", \"vif\", dut_if);\n  run_test();\nend\n\n// In test build_phase:\nuvm_config_db#(int)::set(this, \"env.agent*\", \"is_active\", UVM_ACTIVE);\n\n// In component build_phase:\nif (!uvm_config_db#(virtual my_if)::get(this, \"\", \"vif\", vif))\n  `uvm_fatal(\"CFG\", \"Virtual interface not found in config_db\")",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Central singleton that manages type registration and overrides. Enables creating objects by type without hardcoding class names.",
                        "code": "// uvm_resource_db is lower-level than uvm_config_db\n// Prefer uvm_config_db for configuration in most cases.\n\n// Direct resource_db usage:\nuvm_resource_db#(int)::set(\"*\", \"timeout\", 1000, null);\n\nint timeout;\nif (uvm_resource_db#(int)::read_by_name(\n      \"*\", \"timeout\", timeout))\n  `uvm_info(\"CFG\", $sformatf(\"timeout=%0d\", timeout), UVM_LOW)\n\n// Dump all resources for debug:\nuvm_resource_db#(int)::dump();\n\n// Key difference from uvm_config_db:\n// - config_db uses component hierarchy for scoping\n// - resource_db uses arbitrary string scopes\n// - config_db calls resource_db internally",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Base class for all UVM data and transaction objects. Provides core utilities for copying, comparing, printing, and packing.",
                        "code": "// Register with factory (in class definition):\nclass my_driver extends uvm_driver #(my_txn);\n  `uvm_component_utils(my_driver)\n  ...\nendclass\n\n// Create via factory (not new):\nmy_driver drv = my_driver::type_id::create(\"drv\", this);\n\n// Global type override (e.g., in test):\nfunction void build_phase(uvm_phase phase);\n  super.build_phase(phase);\n  // Replace all my_driver with my_better_driver\n  my_driver::type_id::set_type_override(my_better_driver::get_type());\n  // Or override at specific path only:\n  factory.set_inst_override_by_type(\n    my_driver::get_type(),\n    my_better_driver::get_type(),\n    \"env.agent.drv\"\n  );\nendfunction\n\n// Print all overrides (useful for debug):\ninitial begin\n  factory.print();\nend",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Extends uvm_object with timing and recording support. Base class for uvm_sequence_item. Adds begin/end time, transaction recording, and event triggers.",
                        "code": "class my_txn extends uvm_object;\n  rand bit [7:0] addr;\n  rand bit [31:0] data;\n\n  `uvm_object_utils_begin(my_txn)\n    `uvm_field_int(addr, UVM_ALL_ON)\n    `uvm_field_int(data, UVM_ALL_ON)\n  `uvm_object_utils_end\n\n  function new(string name = \"my_txn\");\n    super.new(name);\n  endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Represents a single phase in the UVM execution lifecycle. Phases run in a defined order: build → connect → run → extract → check → report.",
                        "code": "class my_txn extends uvm_sequence_item;\n  // uvm_sequence_item extends uvm_transaction\n  // Transaction timing is handled automatically:\n  //   accept_tr() → begin_tr() → end_tr()\n  //\n  // In a driver:\n  task run_phase(uvm_phase phase);\n    forever begin\n      seq_item_port.get_next_item(req);\n      req.begin_tr(this);       // mark start\n      drive_item(req);\n      req.end_tr(this);         // mark end\n      seq_item_port.item_done();\n    end\n  endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Mechanism to coordinate phase completion. A phase ends only when all raised objections are dropped. Critical for run-time phases.",
                        "code": "// UVM Phase Order:\n// ─── Build-time (functions, top-down) ───\n//   build_phase\n//   connect_phase\n//   end_of_elaboration_phase\n//   start_of_simulation_phase\n//\n// ─── Run-time (tasks, parallel) ───\n//   run_phase  ←  main phase, needs objections\n//     (or sub-phases: reset, configure, main, shutdown)\n//\n// ─── Clean-up (functions, bottom-up) ───\n//   extract_phase\n//   check_phase\n//   report_phase\n//   final_phase\n\ntask run_phase(uvm_phase phase);\n  phase.raise_objection(this, \"Starting test\");\n  // ... stimulus ...\n  phase.drop_objection(this, \"Test complete\");\nendtask",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Top-level container for a register model. Groups registers, memories, and address maps to mirror DUT register space.",
                        "code": "task run_phase(uvm_phase phase);\n  // MUST raise before any delay\n  phase.raise_objection(this, \"Starting stimulus\");\n\n  // Optional: set drain time for in-flight transactions\n  uvm_objection obj = phase.get_objection();\n  obj.set_drain_time(this, 100ns);\n\n  // Run stimulus\n  repeat (100) begin\n    my_txn txn = my_txn::type_id::create(\"txn\");\n    start_item(txn);\n    assert(txn.randomize());\n    finish_item(txn);\n  end\n\n  phase.drop_objection(this, \"Stimulus complete\");\n  // Phase waits 100ns drain time, then ends\nendtask",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Models a single hardware register containing one or more fields. Supports front-door (bus) and back-door (HDL path) access.",
                        "code": "class my_reg_block extends uvm_reg_block;\n  rand my_ctrl_reg   ctrl;\n  rand my_status_reg status;\n\n  `uvm_object_utils(my_reg_block)\n\n  function new(string name = \"my_reg_block\");\n    super.new(name, UVM_NO_COVERAGE);\n  endfunction\n\n  virtual function void build();\n    ctrl = my_ctrl_reg::type_id::create(\"ctrl\");\n    ctrl.configure(this, null, \"\");\n    ctrl.build();\n\n    status = my_status_reg::type_id::create(\"status\");\n    status.configure(this, null, \"\");\n    status.build();\n\n    default_map = create_map(\"default_map\", 0, 4, UVM_LITTLE_ENDIAN);\n    default_map.add_reg(ctrl,   32'h0000, \"RW\");\n    default_map.add_reg(status, 32'h0004, \"RO\");\n\n    lock_model();\n  endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Models a single field within a register. Defines bit width, position, access policy, and reset value.",
                        "code": "class my_ctrl_reg extends uvm_reg;\n  rand uvm_reg_field enable;\n  rand uvm_reg_field mode;\n\n  `uvm_object_utils(my_ctrl_reg)\n\n  function new(string name = \"my_ctrl_reg\");\n    super.new(name, 32, UVM_NO_COVERAGE);\n  endfunction\n\n  virtual function void build();\n    enable = uvm_reg_field::type_id::create(\"enable\");\n    enable.configure(this, 1, 0, \"RW\", 0, 1'h0, 1, 1, 1);\n\n    mode = uvm_reg_field::type_id::create(\"mode\");\n    mode.configure(this, 2, 1, \"RW\", 0, 2'h0, 1, 1, 1);\n  endfunction\nendclass\n\n// Usage in a sequence:\nmy_ctrl_reg ctrl = reg_block.ctrl;\nuvm_status_e status;\nctrl.write(status, 32'h0000_0005);   // front-door write\nctrl.read(status, rdata);              // front-door read\nctrl.mirror(status, UVM_CHECK);        // read + compare",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Defines the address space for a register block. Maps registers to offsets and connects to a bus agent via an adapter.",
                        "code": "// Fields are created inside a register's build() method:\nfunction void build();\n  // configure(parent, size, lsb_pos, access, volatile,\n  //           reset, has_reset, is_rand, individually_accessible)\n\n  status = uvm_reg_field::type_id::create(\"status\");\n  status.configure(this, 4, 0, \"RO\", 1, 4'h0, 1, 0, 0);\n\n  control = uvm_reg_field::type_id::create(\"control\");\n  control.configure(this, 4, 4, \"RW\", 0, 4'h0, 1, 1, 0);\n\n  reserved = uvm_reg_field::type_id::create(\"reserved\");\n  reserved.configure(this, 24, 8, \"RO\", 0, 24'h0, 1, 0, 0);\nendfunction\n\n// Access policies: RO, RW, RC, RS, WRC, WRS, WC, WS,\n//   WSRC, WCRS, W1C, W1S, W1T, W0C, W0S, W0T, W1SRC,\n//   W1CRS, W0SRC, W0CRS, WO, WOC, WOS, W1, WO1",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Converts between abstract register operations (uvm_reg_bus_op) and protocol-specific bus transactions. One adapter per bus protocol.",
                        "code": "// Inside reg_block build():\nvirtual function void build();\n  // ... create registers ...\n\n  default_map = create_map(\"default_map\",\n    .base_addr(0),\n    .n_bytes(4),\n    .endian(UVM_LITTLE_ENDIAN)\n  );\n\n  default_map.add_reg(ctrl,   'h0000, \"RW\");\n  default_map.add_reg(status, 'h0004, \"RO\");\n  default_map.add_reg(data,   'h0008, \"RW\");\n\n  lock_model();\nendfunction\n\n// Connect to bus agent in env:\nreg_block.default_map.set_sequencer(agent.seqr, adapter);\nreg_block.default_map.set_auto_predict(1);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Observes bus transactions via an analysis port and updates the register model mirror automatically. More accurate than auto-predict.",
                        "code": "class my_reg_adapter extends uvm_reg_adapter;\n  `uvm_object_utils(my_reg_adapter)\n\n  function new(string name = \"my_reg_adapter\");\n    super.new(name);\n    supports_byte_enable = 0;\n    provides_responses   = 0;\n  endfunction\n\n  virtual function uvm_sequence_item reg2bus(\n    const ref uvm_reg_bus_op rw\n  );\n    my_txn txn = my_txn::type_id::create(\"txn\");\n    txn.addr  = rw.addr;\n    txn.data  = rw.data;\n    txn.wr_en = (rw.kind == UVM_WRITE);\n    return txn;\n  endfunction\n\n  virtual function void bus2reg(\n    uvm_sequence_item bus_item,\n    ref uvm_reg_bus_op rw\n  );\n    my_txn txn;\n    if (!$cast(txn, bus_item)) begin\n      `uvm_fatal(\"CAST\", \"Failed to cast bus_item\")\n      return;\n    end\n    rw.data   = txn.data;\n    rw.status = UVM_IS_OK;\n  endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Models a memory region in the DUT register space. Supports front-door and back-door read/write with configurable size and access.",
                        "code": "class my_env extends uvm_env;\n  my_reg_block          reg_block;\n  my_agent              agent;\n  my_reg_adapter        adapter;\n  uvm_reg_predictor #(my_txn) predictor;\n\n  function void build_phase(uvm_phase phase);\n    super.build_phase(phase);\n    reg_block = my_reg_block::type_id::create(\"reg_block\");\n    reg_block.build();\n    reg_block.lock_model();\n\n    agent     = my_agent::type_id::create(\"agent\", this);\n    adapter   = my_reg_adapter::type_id::create(\"adapter\");\n    predictor = uvm_reg_predictor#(my_txn)::type_id::create(\"predictor\", this);\n  endfunction\n\n  function void connect_phase(uvm_phase phase);\n    reg_block.default_map.set_sequencer(agent.seqr, adapter);\n    predictor.map     = reg_block.default_map;\n    predictor.adapter = adapter;\n    agent.mon.ap.connect(predictor.bus_in);\n  endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Singleton that collects all UVM messages (info, warning, error, fatal). Tracks counts and controls simulation exit on max errors.",
                        "code": "class my_mem extends uvm_mem;\n  `uvm_object_utils(my_mem)\n\n  function new(string name = \"my_mem\");\n    super.new(name, 256, 32, \"RW\");  // 256 entries x 32 bits\n  endfunction\nendclass\n\n// In reg_block build():\nmem = my_mem::type_id::create(\"mem\");\nmem.configure(this, \"\");\ndefault_map.add_mem(mem, 'h1000, \"RW\");\n\n// In a test sequence:\nuvm_status_e status;\nreg_block.mem.write(status, .offset(0), .value(32'hDEAD_BEEF));\nreg_block.mem.read(status, .offset(0), .value(rdata));",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Intercepts UVM messages before they are processed. Can modify, demote, promote, or suppress messages.",
                        "code": "// Check message counts in report_phase:\nfunction void report_phase(uvm_phase phase);\n  uvm_report_server srv = uvm_report_server::get_server();\n\n  int err_count = srv.get_severity_count(UVM_ERROR);\n  int fat_count = srv.get_severity_count(UVM_FATAL);\n\n  if (err_count == 0 && fat_count == 0)\n    `uvm_info(\"TEST\", \"*** TEST PASSED ***\", UVM_NONE)\n  else\n    `uvm_info(\"TEST\", $sformatf(\"*** TEST FAILED *** (%0d errors)\", err_count), UVM_NONE)\nendfunction\n\n// Set max errors before quit (in test build_phase):\nuvm_report_server srv = uvm_report_server::get_server();\nsrv.set_max_quit_count(10);  // quit after 10 errors",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Base class for transaction objects passed between sequences, sequencers, and drivers. Contains randomizable stimulus fields.",
                        "code": "// Demote a known benign error to warning:\nclass demote_catcher extends uvm_report_catcher;\n  `uvm_object_utils(demote_catcher)\n\n  function new(string name = \"demote_catcher\");\n    super.new(name);\n  endfunction\n\n  function action_e catch();\n    if (get_severity() == UVM_ERROR &&\n        get_id() == \"EXPECTED_ERR\") begin\n      set_severity(UVM_WARNING);\n      return THROW;  // pass modified message through\n    end\n    return THROW;    // pass all others unchanged\n  endfunction\nendclass\n\n// Register in test:\ndemote_catcher catcher = new(\"catcher\");\nuvm_report_catcher::add(null, catcher);  // null = global",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Generates ordered stimulus by creating, randomizing, and sending sequence items to a sequencer/driver pair.",
                        "code": "class my_txn extends uvm_sequence_item;\n  rand bit [7:0]  addr;\n  rand bit [31:0] data;\n  rand bit        wr_en;\n\n  constraint valid_c {\n    addr inside {[8'h00:8'hFF]};\n  }\n\n  `uvm_object_utils_begin(my_txn)\n    `uvm_field_int(addr,  UVM_ALL_ON)\n    `uvm_field_int(data,  UVM_ALL_ON)\n    `uvm_field_int(wr_en, UVM_ALL_ON)\n  `uvm_object_utils_end\n\n  function new(string name = \"my_txn\");\n    super.new(name);\n  endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "A sequence that randomly selects and executes sequences from a registered pool. Useful for constrained-random regression testing.",
                        "code": "class my_sequence extends uvm_sequence #(my_txn);\n  `uvm_object_utils(my_sequence)\n\n  function new(string name = \"my_sequence\");\n    super.new(name);\n  endfunction\n\n  task body();\n    repeat (10) begin\n      my_txn txn = my_txn::type_id::create(\"txn\");\n      start_item(txn);\n      assert(txn.randomize());\n      finish_item(txn);\n    end\n  endtask\nendclass\n\n// Usage in test:\n// my_sequence seq = my_sequence::type_id::create(\"seq\");\n// seq.start(env.agent.seqr);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "A synchronization primitive for inter-component communication. Can be triggered and waited on, with optional data payload.",
                        "code": "class my_seq_lib extends uvm_sequence_library #(my_txn);\n  `uvm_object_utils(my_seq_lib)\n  `uvm_sequence_library_utils(my_seq_lib)\n\n  function new(string name = \"my_seq_lib\");\n    super.new(name);\n    init_sequence_library();\n  endfunction\nendclass\n\n// Register sequences into the library:\ninitial begin\n  my_seq_lib::add_typewide_sequence(my_seq_a::get_type());\n  my_seq_lib::add_typewide_sequence(my_seq_b::get_type());\nend\n\n// Usage in test:\nmy_seq_lib seq_lib = my_seq_lib::type_id::create(\"seq_lib\");\nseq_lib.selection_mode = UVM_SEQ_LIB_RANDC;\nseq_lib.min_random_count = 5;\nseq_lib.max_random_count = 10;\nseq_lib.start(env.agent.seqr);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Global associative array of named uvm_events. Allows components to share events by name without hierarchy references.",
                        "code": "class my_env extends uvm_env;\n  uvm_event reset_done;\n\n  function void build_phase(uvm_phase phase);\n    super.build_phase(phase);\n    reset_done = new(\"reset_done\");\n  endfunction\nendclass\n\n// In reset sequence:\ntask body();\n  // ... drive reset ...\n  @(posedge vif.clk);\n  vif.rst_n <= 1;\n  p_sequencer.reset_done.trigger();  // signal others\nendtask\n\n// In another component:\ntask run_phase(uvm_phase phase);\n  env.reset_done.wait_trigger();  // blocks until reset\n  `uvm_info(\"MON\", \"Reset complete, starting\", UVM_MEDIUM)\n  // ... start monitoring ...\nendtask",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "A synchronization barrier that blocks all waiters until a specified number of processes arrive. Useful for multi-agent synchronization.",
                        "code": "// Any component can get/create shared events by name:\n// In driver:\ntask run_phase(uvm_phase phase);\n  uvm_event_pool pool = uvm_event_pool::get_global_pool();\n  uvm_event pkt_sent = pool.get(\"packet_sent\");\n\n  forever begin\n    seq_item_port.get_next_item(req);\n    drive(req);\n    pkt_sent.trigger();  // signal packet was sent\n    seq_item_port.item_done();\n  end\nendtask\n\n// In scoreboard:\ntask run_phase(uvm_phase phase);\n  uvm_event_pool pool = uvm_event_pool::get_global_pool();\n  uvm_event pkt_sent = pool.get(\"packet_sent\");\n\n  forever begin\n    pkt_sent.wait_trigger();\n    // process the sent packet\n    pkt_sent.reset();\n  end\nendtask",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "One-to-many broadcast port. A single write() call delivers the transaction to all connected subscribers simultaneously.",
                        "code": "class my_env extends uvm_env;\n  uvm_barrier sync_barrier;\n\n  function void build_phase(uvm_phase phase);\n    super.build_phase(phase);\n    sync_barrier = new(\"sync_barrier\");\n    sync_barrier.set_threshold(3);  // wait for 3 agents\n  endfunction\nendclass\n\n// In each agent's driver:\ntask run_phase(uvm_phase phase);\n  // Initialize...\n  env.sync_barrier.wait_for();  // blocks until 3 drivers ready\n  // All 3 proceed together\n  forever begin\n    // ... drive stimulus ...\n  end\nendtask",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Convenience base class that has a built-in analysis_export. Just override the write() method to receive transactions.",
                        "code": "// Declare in monitor:\nuvm_analysis_port #(my_txn) ap;\n\n// Create in build_phase:\nap = new(\"ap\", this);\n\n// Broadcast in run_phase:\nap.write(txn);\n\n// Connect in env:\nmonitor.ap.connect(scoreboard.analysis_export);\nmonitor.ap.connect(coverage.analysis_export);\n// One write() reaches both scoreboard and coverage",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Implementation port that receives transactions from an analysis port. The parent component must implement a write() function.",
                        "code": "class my_coverage extends uvm_subscriber #(my_txn);\n  my_txn txn;\n\n  covergroup cg;\n    addr_cp: coverpoint txn.addr {\n      bins low  = {[0:127]};\n      bins high = {[128:255]};\n    }\n  endgroup\n\n  `uvm_component_utils(my_coverage)\n\n  function new(string name, uvm_component parent);\n    super.new(name, parent);\n    cg = new();\n  endfunction\n\n  function void write(my_txn t);\n    txn = t;\n    cg.sample();\n  endfunction\nendclass\n\n// Connect in env:\nmonitor.ap.connect(coverage.analysis_export);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "A FIFO buffer component with put and get TLM exports. Decouples producers from consumers with configurable depth.",
                        "code": "class my_scoreboard extends uvm_scoreboard;\n  // Standard imp — parent implements write()\n  uvm_analysis_imp #(my_txn, my_scoreboard) ap_imp;\n\n  `uvm_component_utils(my_scoreboard)\n\n  function new(string name, uvm_component parent);\n    super.new(name, parent);\n  endfunction\n\n  function void build_phase(uvm_phase phase);\n    super.build_phase(phase);\n    ap_imp = new(\"ap_imp\", this);\n  endfunction\n\n  // Must match the transaction type\n  function void write(my_txn txn);\n    `uvm_info(\"SB\", $sformatf(\"Received: addr=%0h\", txn.addr), UVM_MEDIUM)\n  endfunction\nendclass\n\n// For multiple analysis ports, use `uvm_analysis_imp_decl:\n`uvm_analysis_imp_decl(_expected)\n`uvm_analysis_imp_decl(_actual)\n\nclass dual_sb extends uvm_scoreboard;\n  uvm_analysis_imp_expected #(my_txn, dual_sb) exp_imp;\n  uvm_analysis_imp_actual   #(my_txn, dual_sb) act_imp;\n\n  function void write_expected(my_txn t); ... endfunction\n  function void write_actual(my_txn t);   ... endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "A TLM FIFO with an unbounded analysis_export that never blocks on write. Ideal for connecting monitors to scoreboards asynchronously.",
                        "code": "class my_env extends uvm_env;\n  uvm_tlm_fifo #(my_txn) fifo;\n  my_producer prod;\n  my_consumer cons;\n\n  function void build_phase(uvm_phase phase);\n    super.build_phase(phase);\n    fifo = new(\"fifo\", this, 16);  // depth = 16\n    prod = my_producer::type_id::create(\"prod\", this);\n    cons = my_consumer::type_id::create(\"cons\", this);\n  endfunction\n\n  function void connect_phase(uvm_phase phase);\n    prod.put_port.connect(fifo.put_export);\n    cons.get_port.connect(fifo.get_peek_export);\n  endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Controls how uvm_object::compare() works. Configures comparison depth, verbosity, and which mismatches to report.",
                        "code": "class my_scoreboard extends uvm_scoreboard;\n  uvm_tlm_analysis_fifo #(my_txn) exp_fifo;\n  uvm_tlm_analysis_fifo #(my_txn) act_fifo;\n\n  function void build_phase(uvm_phase phase);\n    super.build_phase(phase);\n    exp_fifo = new(\"exp_fifo\", this);\n    act_fifo = new(\"act_fifo\", this);\n  endfunction\n\n  // In env connect_phase:\n  // ref_model.ap.connect(sb.exp_fifo.analysis_export);\n  // monitor.ap.connect(sb.act_fifo.analysis_export);\n\n  task run_phase(uvm_phase phase);\n    my_txn exp_txn, act_txn;\n    forever begin\n      exp_fifo.get(exp_txn);\n      act_fifo.get(act_txn);\n      if (!exp_txn.compare(act_txn))\n        `uvm_error(\"SB\", \"Mismatch!\")\n    end\n  endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Serializes and deserializes uvm_objects to/from a bitstream. Used by pack/unpack methods for data transfer and comparison.",
                        "code": "// Custom comparison policy:\nuvm_comparer comp = new();\ncomp.show_max  = 10;           // show up to 10 mismatches\ncomp.verbosity = UVM_MEDIUM;   // report at medium verbosity\n\nif (!txn_a.compare(txn_b, comp))\n  `uvm_error(\"CMP\", $sformatf(\"%0d mismatches\", comp.result))\n\n// Override do_compare for custom logic:\nclass my_txn extends uvm_sequence_item;\n  function bit do_compare(uvm_object rhs, uvm_comparer comparer);\n    my_txn rhs_txn;\n    if (!$cast(rhs_txn, rhs)) return 0;\n    return (addr == rhs_txn.addr) &&\n           (data == rhs_txn.data);\n  endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Controls how uvm_object::print() and sprint() format output. UVM provides table, tree, and line printer variants.",
                        "code": "class my_txn extends uvm_sequence_item;\n  rand bit [7:0]  addr;\n  rand bit [31:0] data;\n\n  // Field automation handles pack/unpack:\n  `uvm_object_utils_begin(my_txn)\n    `uvm_field_int(addr, UVM_ALL_ON)\n    `uvm_field_int(data, UVM_ALL_ON)\n  `uvm_object_utils_end\nendclass\n\n// Manual pack/unpack:\nmy_txn txn = my_txn::type_id::create(\"txn\");\ntxn.addr = 8'hAB;\ntxn.data = 32'hDEADBEEF;\n\nbit bitstream[];\ntxn.pack(bitstream);   // serialize to bits\n\nmy_txn txn2 = my_txn::type_id::create(\"txn2\");\ntxn2.unpack(bitstream); // deserialize from bits\n// txn2.addr == 8'hAB, txn2.data == 32'hDEADBEEF",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Base class for callback objects. Callbacks let users inject custom behavior into existing components without modifying their source code.",
                        "code": "// UVM provides 3 built-in printers:\n// uvm_default_table_printer  — tabular format (default)\n// uvm_default_tree_printer   — indented tree format\n// uvm_default_line_printer   — single-line format\n\nmy_txn txn = my_txn::type_id::create(\"txn\");\nassert(txn.randomize());\n\n// Print with default table printer:\ntxn.print();\n\n// Print with tree format:\ntxn.print(uvm_default_tree_printer);\n\n// Print topology in end_of_elaboration:\nfunction void end_of_elaboration_phase(uvm_phase phase);\n  uvm_top.print_topology();\nendfunction\n\n// Customize printer:\nuvm_table_printer printer = new();\nprinter.knobs.depth = 2;\ntxn.print(printer);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Singleton that parses simulation command-line arguments. Retrieve +args to control test behavior without recompilation.",
                        "code": "// Step 1: Define callback class with virtual methods:\nclass my_driver_cb extends uvm_callback;\n  `uvm_object_utils(my_driver_cb)\n  function new(string name = \"my_driver_cb\");\n    super.new(name);\n  endfunction\n\n  virtual task pre_drive(my_driver drv, my_txn txn);\n  endtask\n\n  virtual task post_drive(my_driver drv, my_txn txn);\n  endtask\nendclass\n\n// Step 2: Add callback hooks in driver:\nclass my_driver extends uvm_driver #(my_txn);\n  `uvm_register_cb(my_driver, my_driver_cb)\n\n  task run_phase(uvm_phase phase);\n    forever begin\n      seq_item_port.get_next_item(req);\n      `uvm_do_callbacks(my_driver, my_driver_cb, pre_drive(this, req))\n      drive_item(req);\n      `uvm_do_callbacks(my_driver, my_driver_cb, post_drive(this, req))\n      seq_item_port.item_done();\n    end\n  endtask\nendclass\n\n// Step 3: Create and register callback in test:\nclass my_error_cb extends my_driver_cb;\n  virtual task pre_drive(my_driver drv, my_txn txn);\n    txn.addr = 8'hFF;  // inject error\n  endtask\nendclass\n\n// In test:\nmy_error_cb cb = new(\"cb\");\nuvm_callbacks#(my_driver, my_driver_cb)::add(env.agent.drv, cb);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "The implicit top-level component in every UVM testbench. Accessible via uvm_root::get() or the global uvm_top handle. Manages phasing and topology.",
                        "code": "// Parse custom +args:\nclass my_test extends uvm_test;\n  int num_txns = 100;\n  string mode  = \"normal\";\n\n  function void build_phase(uvm_phase phase);\n    super.build_phase(phase);\n    uvm_cmdline_processor clp = uvm_cmdline_processor::get_inst();\n\n    string val;\n    if (clp.get_arg_value(\"+NUM_TXNS=\", val))\n      num_txns = val.atoi();\n\n    if (clp.get_arg_value(\"+MODE=\", val))\n      mode = val;\n\n    `uvm_info(\"TEST\", $sformatf(\"num_txns=%0d mode=%s\",\n      num_txns, mode), UVM_LOW)\n  endfunction\nendclass\n\n// Run with:\n//   vsim +UVM_TESTNAME=my_test +NUM_TXNS=500 +MODE=stress\n\n// Built-in UVM +args:\n// +UVM_TESTNAME=<test>        Select test\n// +UVM_VERBOSITY=<level>      UVM_NONE/LOW/MEDIUM/HIGH/FULL\n// +UVM_MAX_QUIT_COUNT=<n>     Max errors before quit\n// +UVM_TIMEOUT=<time>,<YES>   Global timeout",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "No classes match your search.",
                        "code": "// Standard UVM entry point:\nmodule top;\n  my_if dut_if();\n  dut dut_inst(.*);\n\n  initial begin\n    uvm_config_db#(virtual my_if)::set(\n      null, \"*\", \"vif\", dut_if);\n    run_test();  // reads +UVM_TESTNAME from command line\n  end\nendmodule\n\n// Print topology in end_of_elaboration:\nfunction void end_of_elaboration_phase(uvm_phase phase);\n  uvm_top.print_topology();\nendfunction\n\n// Set simulation timeout:\ninitial begin\n  uvm_top.set_timeout(10ms);\nend\n\n// Find components at runtime:\nuvm_component comp;\ncomp = uvm_top.find(\"uvm_test_top.env.agent.drv\");",
                        "lang": "verilog"
                    }
                ]
            },
            {
                "id": "cv-uvm-6",
                "num": 6,
                "title": "Build Your First UVM Testbench",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "Every UVM testbench in this tutorial is built around one running example: a small DUT with a handful of registers you can write to and read back from. Instead of jumping straight into uvm_driver or uvm_monitor code with no context, this article defines that DUT once, so every later article in this chapter can simply reference it instead of re-explaining what it does — the same way a real project defines its DUT and interface once, then builds the driver, monitor, sequencer, and environment around that fixed contract.\n\n8 min read | Beginner Level",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "The DUT: a Register Block",
                        "content": "The DUT for this chapter is reg_block — a register file with 16 addressable locations, each 8 bits wide. It supports two operations: write a byte to an address, and read a byte back from an address. No protocol quirks, no burst transfers, no clock domain crossings — just enough behavior to keep every later article focused on the UVM component being taught, not on the hardware.\n\nFunctionally, the DUT behaves like this:\n\n\n\nThere's no completion or handshake signal here, and that's a deliberate choice, not an oversight. Because every operation has the same fixed, known latency — a write lands immediately, a read's data is valid exactly one cycle later — the testbench doesn't need the DUT to tell it when something finished. It already knows. A handshake signal like ack or a stall signal like APB's PREADY only earns its place when an operation's latency can vary; for a single-cycle register file, it would just be unused wiring.\n\nMemory-mapped register blocks like this one show up everywhere in chip design — configuration registers in a peripheral, control/status registers in an IP block, or the register space behind a bus protocol like APB or AHB-Lite. This article's reg_block is a simplified, protocol-agnostic version of that idea, not a model of any specific bus — which keeps it a good DUT to learn UVM with, without dragging in a real protocol's full signal list and timing rules.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Why an Interface, Not Loose Signals",
                        "content": "You could connect a testbench to a DUT by declaring every signal individually, but that becomes unmanageable fast — especially once a driver, a monitor, and a top-level module all need access to the same signals. SystemVerilog's interface construct bundles a group of related signals into a single named object that gets passed around as one handle.\n\n\n\nAn interface is just a container for signals. It doesn't drive or sample anything by itself — the driver and monitor classes you'll build in upcoming articles do that work. The interface just gives them a shared place to connect.\n\nHere is the interface used for this DUT:\n\nWalking through each signal:\n\n\n\nwr_en/rd_en/addr/wdata are driven by the testbench side, while rdata is driven by the DUT side. Keep that direction in mind for the driver and monitor articles coming up: the driver only ever drives the first group, relying on the DUT's known one-cycle read latency rather than waiting on any response signal. The monitor, which doesn't drive anything, still needs to sample every signal — including wr_en/rd_en/addr/wdata — to reconstruct what transaction actually happened.",
                        "code": "interface reg_if (input bit clk);\n  logic        rst_n;\n  logic        wr_en;\n  logic        rd_en;\n  logic [3:0]  addr;\n  logic [7:0]  wdata;\n  logic [7:0]  rdata;\nendinterface",
                        "lang": "verilog"
                    },
                    {
                        "title": "The DUT Module",
                        "content": "With the interface defined, the DUT itself connects to it through a single port — the interface handle — instead of a long list of individual signal ports:\n\nThe behavior is straightforward synchronous logic: on every rising edge of vif.clk, the DUT checks reset first, then checks wr_en, then rd_en. A write stores wdata into the memory array at addr on that same edge. A read copies the stored byte out to rdata, which becomes valid for the testbench to sample starting the following cycle.\n\nQ: If wr_en and rd_en were both high on the same clock edge, what would reg_block do, based on the code above?\n\nIt would perform the write and ignore the read, because the if (vif.wr_en) ... else if (vif.rd_en) structure checks wr_en first. In a real testbench you'd typically constrain your transaction so the two signals are never asserted together, since the DUT doesn't define meaningful behavior for that case.",
                        "code": "module reg_block (reg_if vif);\n\n  logic [7:0] mem [0:15];\n\n  always @(posedge vif.clk or negedge vif.rst_n) begin\n    if (!vif.rst_n) begin\n      vif.rdata <= 8'h00;\n    end\n    else begin\n      if (vif.wr_en) begin\n        mem[vif.addr] <= vif.wdata;\n      end\n      else if (vif.rd_en) begin\n        vif.rdata <= mem[vif.addr];\n      end\n    end\n  end\n\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "How the Pieces Connect",
                        "content": "The diagram below shows the relationship that every component in this chapter will plug into: the testbench drives one side of reg_if, the DUT drives the other side, and both sides reference the exact same interface instance through a shared handle.\n\nThis single shared handle is what makes the interface useful. The top-level module instantiates reg_if once, connects that one instance to the DUT, and later hands the same instance to the testbench through uvm_config_db — a mechanism you'll see used for the first time in the driver article, and covered in full later in this tutorial.\n\nThis same driver-side/DUT-side split through one interface is how production testbenches connect to real protocols like AXI or APB. The signal list gets longer and the protocol more involved, but the structure — one interface, two consumers, one shared handle — doesn't change.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Common Beginner Mistakes",
                        "content": "Mistake #1: Declaring the DUT's ports as individual signals instead of an interface\n\nThis works for a tiny DUT but stops scaling the moment you add a monitor or a second testbench. Every new consumer needs its own port list, and keeping them in sync becomes error-prone. Using an interface from the start avoids this.\n\nMistake #2: Sampling rdata on the same cycle as rd_en\n\nBecause rdata is driven inside a clocked block, its new value only appears on the clock edge after rd_en was asserted — not on the same edge. Sample it one cycle too early and you'll capture whatever was left over from the previous operation. This one-cycle latency is exactly what a UVM monitor needs to model correctly, which is covered in the monitor article later in this chapter.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Practice Exercise",
                        "content": "The current design supports 16 registers, addressed with a 4-bit addr. Modify reg_if and reg_block so the DUT supports 64 registers instead.\n\nSixty-four locations need 6 bits of address width. Check how the width of addr in the interface relates to the size of the mem array declared inside the module.\n\nThe data width (wdata/rdata at 8 bits) doesn't need to change — only the address width and the memory array size need to grow to cover 64 locations instead of 16.",
                        "code": "// In reg_if: widen the address\nlogic [5:0]  addr;\n\n// In reg_block: widen the memory array to match\nlogic [7:0] mem [0:63];",
                        "lang": "verilog"
                    },
                    {
                        "title": "Summary",
                        "content": "In this article, you learned:",
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
                "id": "cv-uvm-7",
                "num": 7,
                "title": "UVM Object [uvm_object]",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "The previous article defined reg_block and reg_if — the DUT and the wires connecting to it. Everything from here on is UVM code, and almost every UVM class you'll write traces back to one of two base classes. This article covers the first one, uvm_object, which is the foundation for any class whose job is to represent data.\n\n6 min read | Beginner Level",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "What Is uvm_object?",
                        "content": "All data and hierarchical classes in a UVM environment are derived from uvm_object. Its job is to define a set of common utility functions — printing, copying, comparing, and recording — that any class built on top of it gets for free, instead of every class author writing that logic from scratch.\n\nClasses built on uvm_object fall into two groups. Plain data — transactions, configuration objects, results — extends uvm_object directly or through uvm_sequence_item, which the next article uses. Anything that needs a fixed place in the testbench, like a driver or monitor, extends uvm_component instead, covered in an upcoming article. Either way, both paths inherit what uvm_object provides.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "The Class Definition",
                        "content": "Here's the shape of uvm_object itself, simplified to the parts that matter right now:\n\nTwo things stand out. First, the constructor takes just one argument — a name, with an empty default. Compare that to a component's constructor, which always needs a name and a parent; a uvm_object doesn't have a parent, because it isn't part of any fixed hierarchy.\n\nSecond, create and get_type_name are marked virtual and return empty/null by default — they exist to be overridden by every class that extends uvm_object. In practice, you won't write these overrides by hand; the factory macro covered next generates them for you. They matter because of what they enable.",
                        "code": "virtual class uvm_object extends uvm_void;\n\n\t// Creates a new uvm_object with the given name, empty by default\n\tfunction new(string name=\"\");\n\n\t// Utility functions\n\tfunction void print (uvm_printer printer=null);\n \tfunction void copy (uvm_object rhs, uvm_copier copier=null);\n  \tfunction bit  compare (uvm_object rhs, uvm_comparer comparer=null);\n \tfunction void record (uvm_recorder recorder=null);\n\t...\n\n\t// These two functions have to be redefined by child classes\n  \tvirtual function uvm_object create (string name=\"\"); return null; endfunction\n  \tvirtual function string get_type_name (); return \"\"; endfunction\n\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "new() vs. create()",
                        "content": "It's tempting to think of create() as just another name for the constructor, but they do different jobs. new() is the plain SystemVerilog constructor — call it, and you get an object of exactly the type you asked for, no exceptions. create() is a UVM factory method: it asks the factory for an object of a given type, and the factory is free to hand back an object of a different, compatible type instead, if a test has configured an override.\n\nNotice that create()'s own implementation still calls new() underneath — the factory doesn't replace SystemVerilog's normal object construction, it just decides which type's new() actually gets called. get_type_name() supports this by giving every object a way to report its own class name as a string, which the factory and debugging tools both rely on:",
                        "code": "class my_object extends uvm_object;\n\t...\n\n\t// Implementation : Create an object of the new class type and return it\n\tvirtual function uvm_object create(string name=\"my_object\");\n\t\tmy_object obj = new(name);\n\t\treturn obj;\n\tendfunction\n\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "You won't typically write either of these functions by hand. The macro in the next section generates both automatically, in their correct form, for any class that uses it.",
                        "code": "class my_object extends uvm_object;\n\n\t// This static method is used to access via scope operator ::\n\t// without having to create an object of the class\n\tstatic function string type_name();\n\t\treturn \"my_object\";\n\tendfunction\n\n\tvirtual function string get_type_name();\n\t\treturn type_name;\n\tendfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Registering with the Factory",
                        "content": "None of this works automatically just because a class extends uvm_object. UVM's factory has to know about a class before it can create instances of it on request, and that registration has to be explicit:\n\nuvm_object_utils(my_object) is what generates the create() and get_type_name() overrides shown above, and is also what makes my_object::type_id::create(...) available as a call. Without this macro, a class is still a valid SystemVerilog class, but it's invisible to the factory — it can never be substituted, and the convenience methods you'll use constantly never get wired up.\n\n\n\nThis is the minimal form of the macro — just factory registration, nothing else. There's also an extended form, uvm_object_utils_begin/uvm_object_utils_end, that additionally registers individual fields so they participate in print, copy, and compare automatically. The next article, which defines an actual transaction with real fields, uses that extended form and explains why.\n\nQ: If a class extends uvm_object but never includes uvm_object_utils, can you still create instances of it?\n\nYes — you can still call new() directly, since that's plain SystemVerilog and doesn't depend on the factory at all. What you lose is type_id::create() and everything that depends on factory registration, including the ability for a test to override that class with a derived type later.",
                        "code": "// An object derived from uvm_object by itself does not get\n// registered with the UVM factory unless the macro is called\n// within the class definition\n\nclass my_object extends uvm_object;\n\n    // Register current object type with the factory\n\t`uvm_object_utils (my_object)  \n  \n   ...\n  \nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Where the Utility Functions Are Covered",
                        "content": "uvm_object's signature also includes print, copy, and compare — deep, recursive operations that walk every registered field of an object. Each one is substantial enough to deserve its own explanation rather than a quick summary here:\n\n\n\nNone of these three methods are virtual, so a child class can't override them directly. Each one instead calls a matching hook — do_print, do_copy, do_compare — that you can customize. The dedicated articles linked above cover exactly how.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Common Beginner Mistakes",
                        "content": "Mistake #1: Calling new() when you meant to use the factory\n\nWrong: my_object obj = new(\"obj\"); Right: my_object obj = my_object::type_id::create(\"obj\");\n\nWhy? new() always constructs exactly the type you named, bypassing the factory entirely. If a test ever needs to substitute a derived type in place of my_object, that substitution can only happen through create().\n\nMistake #2: Forgetting uvm_object_utils and assuming the class still works normally\n\nA class that extends uvm_object without the macro compiles fine and behaves correctly for plain SystemVerilog usage. The problem only shows up later, when something calls type_id::create() on it and gets an error, because the factory never learned the class exists.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Practice Exercise",
                        "content": "Write a class called status_info that extends uvm_object, has one field, a string named label, and is properly registered with the factory.\n\nYou'll need the constructor every uvm_object requires, plus the single macro that handles factory registration — no field list necessary for this exercise.\n\nlabel is declared like any ordinary class property here, since this exercise doesn't ask for it to participate in automatic print/copy/compare — that's the extended macro form covered in the next article.",
                        "code": "class status_info extends uvm_object;\n\n  string label;\n\n  `uvm_object_utils(status_info)\n\n  function new(string name = \"status_info\");\n    super.new(name);\n  endfunction\n\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Summary",
                        "content": "In this article, you learned:\n\nuvm_object is the parent class behind most of what this tutorial builds — including uvm_sequence_item, which the next article extends for the transaction, and uvm_component, which testbench structure builds on. Just as often, though, you'll see it extended directly for plain data with no place in the hierarchy, like configuration or response objects.",
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
                "id": "cv-uvm-8",
                "num": 8,
                "title": "UVM - Defining the transaction class",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "The previous article defined reg_block and the reg_if interface that connects to it. Before any UVM component can drive or observe that interface, you need a way to represent one operation — one write or one read — as a single piece of data that can be created, randomized, and passed around inside the testbench. That's what a transaction class is for, and it's the first piece of actual UVM code in this tutorial.\n\n7 min read | Beginner Level",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "From uvm_object to uvm_sequence_item",
                        "content": "The previous article introduced uvm_object as the base class for data that flows through a testbench, as opposed to uvm_component, which is for the structural pieces like drivers and monitors. A transaction is exactly that kind of data, so it makes sense that it sits in the uvm_object family. But it doesn't extend uvm_object directly.\n\nUVM provides a more specific class in that same family: uvm_sequence_item. Here's the idea behind it: a transaction's whole job is to eventually reach a driver, usually traveling through a sequencer to get there. uvm_sequence_item simply adds a few extra fields that help with that trip — for example, a way to mark which sequence sent it. uvm_object doesn't have those fields, because plenty of uvm_objects never go anywhere near a sequencer. Since every transaction in this tutorial will eventually be sent to a driver, every transaction extends uvm_sequence_item instead of uvm_object directly.\n\nNone of the boxes on the left exist yet — the sequence, sequencer, and driver are all built in upcoming articles. This article only covers the small diamond: the reg_transaction object itself, the data that will eventually ride through that whole path. reg_if and reg_block on the right are already in place from the previous article.\n\n\n\nFor now, the simple rule is: anything that will be sent to a driver extends uvm_sequence_item. You'll use the sequencer-related fields directly once you reach the sequencer and sequence articles later in this chapter.\n\nEvery protocol UVC you'll encounter — AXI, APB, AHB, a custom internal bus — defines exactly one transaction class this way: a single object representing one transfer, with fields for whatever that protocol needs to describe a transfer. The register block in this tutorial just has a smaller field list than most.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Defining reg_transaction",
                        "content": "The transaction's fields should look familiar — they mirror the signals in reg_if almost exactly, because the whole point of this object is to carry the same information the interface carries, just as data instead of as wires:\n\nA few things are worth calling out line by line:",
                        "code": "class reg_transaction extends uvm_sequence_item;\n\n  rand bit       wr_en;\n  rand bit       rd_en;\n  rand bit [3:0] addr;\n  rand bit [7:0] wdata;\n       bit [7:0] rdata;\n\n  constraint wr_xor_rd_c {\n    wr_en != rd_en;\n  }\n\n  `uvm_object_utils_begin(reg_transaction)\n    `uvm_field_int(wr_en,  UVM_ALL_ON)\n    `uvm_field_int(rd_en,  UVM_ALL_ON)\n    `uvm_field_int(addr,   UVM_ALL_ON)\n    `uvm_field_int(wdata,  UVM_ALL_ON)\n    `uvm_field_int(rdata,  UVM_ALL_ON)\n  `uvm_object_utils_end\n\n  function new(string name = \"reg_transaction\");\n    super.new(name);\n  endfunction\n\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Solving the wr_en/rd_en Ambiguity",
                        "content": "The previous article's Quick Check asked what reg_block does if wr_en and rd_en are both high on the same edge — the answer was that the DUT just picks write and ignores read, since that case isn't meaningfully defined. The constraint in reg_transaction solves that problem at the source instead of leaving it to chance:\n\nBecause != on two single bits is only true when exactly one of them is 1, this constraint forces every randomized transaction to request either a write or a read, never both and never neither. By the time a transaction reaches the driver, the ambiguous case the DUT never defined simply can't occur.\n\nQ: If you removed the wr_xor_rd_c constraint, would randomize() still succeed?\n\nYes — without the constraint, wr_en and rd_en are two independent random bits, so all four combinations (including both 0 and both 1) are legal outcomes. randomize() wouldn't fail; it would just occasionally produce a transaction that doesn't clearly request a write or a read, which is exactly the ambiguous case the constraint exists to rule out.",
                        "code": "constraint wr_xor_rd_c {\n  wr_en != rd_en;\n}",
                        "lang": "verilog"
                    },
                    {
                        "title": "What the Macros Are Doing",
                        "content": "The block between uvm_object_utils_begin and uvm_object_utils_end does two things. First, it registers reg_transaction with the UVM factory, which is what lets you create instances of it using ::type_id::create() later on. Second, each uvm_field_int line tells UVM about one field, so that built-in operations know about it automatically — print() will show that field's value, copy() will copy it from one transaction to another, and compare() will check whether two transactions have the same value in it. You don't write any of that code yourself; listing the field once is enough. UVM_ALL_ON just means \"turn all of those on for this field.\"\n\n\n\nYou'll see these same fields again from a different angle once the Field Macros chapter covers what each operation actually does and how to write the equivalent code by hand. For now, the macros are doing real, useful work even though their internals are out of scope here.\n\nThe constructor is short but mandatory: every uvm_object-derived class needs a new() function that takes a string name and passes it to super.new(). This is what lets the factory create named instances of reg_transaction later on.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Common Beginner Mistakes",
                        "content": "Mistake #1: Forgetting the new(string name = ...) constructor\n\nEvery class derived from uvm_object needs this constructor defined explicitly, even though it does almost nothing beyond calling super.new(name). Without it, the factory has no way to create a properly named instance, and you'll typically see a compile error rather than a runtime one.\n\nMistake #2: Marking rdata as rand\n\nIt's tempting to mark every field rand out of habit, but rdata is a response, not a request — the testbench doesn't choose what comes back from a read, the DUT does. Randomizing it would let randomize() silently overwrite a value the driver or monitor is supposed to fill in after the fact.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Practice Exercise",
                        "content": "Suppose you wanted a transaction that explicitly represents \"drive neither a write nor a read this cycle\" — an idle request, useful for inserting gaps between operations during testing. Add a field to reg_transaction that captures this, and adjust the constraint so an idle request can't be combined with a write or a read.\n\nAdd a new rand bit field, then extend the constraint block so that at most one of the three control bits is set at a time. Look at how wr_xor_rd_c already expresses mutual exclusion between two bits.\n\nAdding the three bits together and constraining the sum to exactly 1 generalizes the same idea as wr_xor_rd_c: exactly one control bit is set per transaction, whichever fields you add later.",
                        "code": "rand bit idle;\n\nconstraint one_op_c {\n  (wr_en + rd_en + idle) == 1;\n}",
                        "lang": "verilog"
                    },
                    {
                        "title": "Summary",
                        "content": "In this article, you learned:",
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
                "id": "cv-uvm-9",
                "num": 9,
                "title": "UVM Component [uvm_component]",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "The previous article built reg_transaction on top of uvm_object's family of classes — the right base for data that gets created, used, and thrown away. But a testbench needs more than data. It needs the actual pieces that do the work: something that drives signals onto reg_if, something that watches them, something that organizes all of that into a structure. Every one of those pieces is built on uvm_component, and this article covers what that base class gives you before the driver article puts it to use.\n\n6 min read | Beginner Level",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Two Kinds of Class, Two Different Jobs",
                        "content": "reg_transaction is created fresh for every operation, gets randomized, eventually gets used, and is then forgotten. A driver is nothing like that. It's built once, at the start of the simulation, and it stays alive doing its job for the entire run. uvm_component exists for exactly that second kind of class: things with a fixed job and a fixed place in the testbench, for as long as the simulation runs.\n\nAll major testbench components — drivers, monitors, scoreboards, and the rest — are derivatives of uvm_component and inherit its standard phasing and reporting mechanisms. The diagram below puts that same distinction side by side with what you already know about uvm_object:\n\nThat fixed place is the other half of the story. A uvm_object doesn't belong anywhere in particular — a transaction floats from a sequence to a driver with no permanent home. A uvm_component always has exactly one parent, and that parent relationship is set once, when the component is built, and never changes for the rest of the run.\n\nThis is exactly why you'll see hierarchical names like uvm_test_top.env.agent.driver in simulation logs and error messages. That dotted path isn't a naming convention someone chose — it's the literal parent chain of uvm_component objects, built automatically from how they were constructed.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "The Component Constructor",
                        "content": "Every class extending uvm_component needs a constructor with a specific shape: a name, and a handle to its parent.\n\nCompare this to reg_transaction's constructor from the previous article, which only took a name. That difference is the same fixed-place-versus-floating-data distinction showing up directly in code: a transaction doesn't need a parent because it doesn't have one, but a component always does.\n\n\n\nNotice uvm_component_utils here is a single macro, with no field list and no _begin/_end pair like uvm_object_utils_begin was in the transaction article. That's intentional — you'd never print, copy, or compare a component the way you would a transaction, so there are no fields to register. The macro's only job here is factory registration, which is also what makes factory overrides possible later — substituting a different component type at a given point in the hierarchy without touching the surrounding code. That technique is covered on its own later in this tutorial.",
                        "code": "class my_component extends uvm_component;\n\n  `uvm_component_utils(my_component)\n\n  function new(string name, uvm_component parent);\n    super.new(name, parent);\n  endfunction\n\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Building a Hierarchy",
                        "content": "A parent doesn't appear automatically — it's set when a component creates its children. UVM components use the phasing mechanism to perform this kind of setup in a specific order, constructing the internal hierarchy, connecting components together, and finalizing configuration before the test itself ever starts:\n\nHere's a small, two-level example showing the same idea in code: a top-level component that builds one child underneath it.\n\nThe line that actually builds the hierarchy is c1 = child_block::type_id::create(\"c1\", this). The second argument, this, is what makes parent_block become c1's parent. From that point on, c1 knows exactly where it sits in the testbench, which is what get_full_name() reports back in the uvm_info call.\n\n\n\nYou'll see this exact pattern — a parent creating a child with ::type_id::create(name, this) — repeated throughout the rest of this chapter: an environment creating an agent, an agent creating a driver and a monitor, and so on. Once you've seen it once, you've seen the shape of it everywhere.",
                        "code": "class child_block extends uvm_component;\n\n  `uvm_component_utils(child_block)\n\n  function new(string name, uvm_component parent);\n    super.new(name, parent);\n  endfunction\n\n  function void build_phase(uvm_phase phase);\n    super.build_phase(phase);\n    `uvm_info(get_full_name(), \"child_block is alive\", UVM_LOW)\n  endfunction\n\nendclass\n\nclass parent_block extends uvm_component;\n\n  `uvm_component_utils(parent_block)\n\n  child_block c1;\n\n  function new(string name, uvm_component parent);\n    super.new(name, parent);\n  endfunction\n\n  function void build_phase(uvm_phase phase);\n    super.build_phase(phase);\n    c1 = child_block::type_id::create(\"c1\", this);\n  endfunction\n\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Why build_phase, Not new()",
                        "content": "Children are created inside build_phase, not inside the constructor. build_phase is one of several phases UVM runs every component through automatically, in a fixed order, for the whole testbench. Creating children during this phase guarantees the entire hierarchy is fully built before anything starts running — if components instead created their children inside their own constructors, the order would depend on exactly when each constructor happened to run, which isn't something you want to rely on.\n\n\n\nbuild_phase is just one phase among several — there's also a phase for connecting components together, one for running the actual test, and more. The full picture, including execution order and how to write custom phases, is covered later in this tutorial.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Looking Up Components in the Hierarchy",
                        "content": "Once a hierarchy exists, uvm_component gives you a set of built-in methods for navigating it — finding a component's parent, listing its children, or checking whether a particular child exists at all. You won't need most of these for the simple testbench in this chapter, but they're worth knowing about since you'll run into them in larger environments and in UVM source code itself:\n\nHere's a worked example showing most of these in use, on a small generic hierarchy with one top-level component, an agent containing a monitor, and several sibling child components:",
                        "code": "// Get handle to parent uvm component that instantiated current component\nextern virtual function uvm_component get_parent ();\n\n// Get full hierarchical name of the current component\nextern virtual function string get_full_name ();\n\n// Get queue of all children instantiated under current component, not nested\nextern function void get_children(ref uvm_component children[$]);\n\n// Get handle to a child by the given name\nextern function uvm_component get_child (string name);\n\n// Used in an iterable to get the next child component handle\nextern function int get_next_child (ref string name);\n\n// Get the first child handle under current component\nextern function int get_first_child (ref string name);\n\n// Get total number of child components, not nested\nextern function int get_num_children ();\n\n// Returns 1 if there is atleast one component instantiated\nextern function int has_child (string name);\n\n// Get nested child component handle by hierarchical path\nextern function uvm_component lookup (string name);\n\n// Depth of the current component from uvm_top=0, uvm_test=1, etc\nextern function int unsigned get_depth();",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Running this produces:",
                        "code": "class apb_monitor extends uvm_component;\n\nclass apb_agent extends uvm_component;\n\tapb_monitor\t \tm_apb_monitor;\nendclass\n\nclass child_comp extends uvm_component;\n\nclass top_comp extends uvm_component;\n\n\t// Child component instantiations\n\tchild_comp \t\tm_child_comp_sa [5];\n\tapb_agent \t\tm_apb_agent;\n\n\n  \tvirtual function void end_of_elaboration_phase(uvm_phase phase);\n\n\t\t// Local variables to hold temporary results\n    \tuvm_component \tl_comp_h;\n    \tuvm_component \tl_comp_q [$];\n\n\t\t// Get parent and print it\n    \tl_comp_h = get_parent();\n    \t`uvm_info (\"tag\", $sformatf(\"get_parent=%s\", l_comp_h.get_name()), UVM_LOW)\n  \n\t\t// Get all children and print them\n    \tget_children(l_comp_q);\n    \tforeach (l_comp_q[i])\n      \t\t`uvm_info (\"tag\", $sformatf(\"child_%0d = %s\", i, l_comp_q[i].get_name()), UVM_LOW)\n\n    \t// Get a specific child component and print name\n    \tl_comp_h = get_child(\"m_child_comp_2\");\n    \t`uvm_info (\"tag\", $sformatf(\"Found %s\", l_comp_h.get_name()), UVM_LOW)\n  \n\t\t// Other function calls\n    \t`uvm_info (\"tag\", $sformatf(\"number of children = %0d\", get_num_children()), UVM_LOW)\n\t    `uvm_info (\"tag\", $sformatf(\"has_child('abc') = %0d\", has_child(\"abc\")), UVM_LOW)\n    \t`uvm_info (\"tag\", $sformatf(\"has_child('m_apb_agent') = %0d\", has_child(\"m_apb_agent\")), UVM_LOW)\n    \t`uvm_info (\"tag\", $sformatf(\"get_depth = %0d\", get_depth()), UVM_LOW)\n  \n\t\t// Lookup failure will result in a warning\n    \tl_comp_h = lookup(\"m_apb_monitor\");\n    \tif (l_comp_h)\n      \t\t`uvm_info (\"tag\", $sformatf(\"Found %s\", l_comp_h.get_full_name()), UVM_LOW)\n  \n\t\t// Lookup requires full hierarchical path to the component\n      \tl_comp_h = lookup(\"m_apb_agent.m_apb_monitor\");\n    \tif (l_comp_h)\n      \t\t`uvm_info (\"tag\", $sformatf(\"Found %s\", l_comp_h.get_full_name()), UVM_LOW)  \n  \n  \tendfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "The warning in that log is worth noticing rather than skipping past: lookup(\"m_apb_monitor\") fails because m_apb_monitor isn't a direct child of top_comp — it's nested one level deeper, inside m_apb_agent. The very next call, lookup(\"m_apb_agent.m_apb_monitor\"), succeeds because it spells out the full path. lookup() needs the complete hierarchical path from the component you call it on, not just a name.\n\n\n\nThis example only demonstrates end_of_elaboration_phase, a phase that runs after the whole hierarchy is built, which is why it's a safe place to call lookup methods like these. Components are also connected to each other in a phase of their own, connect_phase, usually using TLM ports — both covered in detail later in this tutorial. For now, just know that build_phase creates the hierarchy, and a later phase wires the pieces together.\n\nQ: What would happen if parent_block tried to create c1 inside its constructor instead of build_phase?\n\nIt would likely still work for a small, simple example like this one, but it goes against how UVM expects components to be built, and it stops being safe once components depend on configuration or other setup that hasn't happened yet at construction time. build_phase exists specifically so every component is created in a predictable, synchronized order — relying on constructor timing instead gives that up for no real benefit.",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test my_test...\nUVM_INFO testbench.sv(67) @ 0: uvm_test_top.m_top_comp [tag] get_parent=uvm_test_top\nUVM_INFO testbench.sv(71) @ 0: uvm_test_top.m_top_comp [tag] child_0 = m_apb_agent\nUVM_INFO testbench.sv(71) @ 0: uvm_test_top.m_top_comp [tag] child_1 = m_child_comp_0\nUVM_INFO testbench.sv(71) @ 0: uvm_test_top.m_top_comp [tag] child_2 = m_child_comp_1\nUVM_INFO testbench.sv(71) @ 0: uvm_test_top.m_top_comp [tag] child_3 = m_child_comp_2\nUVM_INFO testbench.sv(71) @ 0: uvm_test_top.m_top_comp [tag] child_4 = m_child_comp_3\nUVM_INFO testbench.sv(71) @ 0: uvm_test_top.m_top_comp [tag] child_5 = m_child_comp_4\nUVM_INFO testbench.sv(75) @ 0: uvm_test_top.m_top_comp [tag] Found m_child_comp_2\nUVM_INFO testbench.sv(77) @ 0: uvm_test_top.m_top_comp [tag] number of children = 6\nUVM_INFO testbench.sv(79) @ 0: uvm_test_top.m_top_comp [tag] has_child('abc') = 0\nUVM_INFO testbench.sv(80) @ 0: uvm_test_top.m_top_comp [tag] has_child('m_apb_agent') = 1\nUVM_INFO testbench.sv(81) @ 0: uvm_test_top.m_top_comp [tag] get_depth = 2\nUVM_WARNING /xcelium20.09/tools//methodology/UVM/CDNS-1.2/sv/src/base/uvm_component.svh(2017) @ 0: uvm_test_top.m_top_comp [Lookup Error] Cannot find child m_apb_monitor\nUVM_INFO testbench.sv(89) @ 0: uvm_test_top.m_top_comp [tag] Found uvm_test_top.m_top_comp.m_apb_agent.m_apb_monitor",
                        "lang": "verilog"
                    },
                    {
                        "title": "Common Beginner Mistakes",
                        "content": "Mistake #1: Giving the constructor only one argument\n\nWrong:\n\nRight:",
                        "code": "function new(string name);\n  super.new(name);\nendfunction",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Why? A single-argument constructor is correct for a uvm_object, but uvm_component requires both a name and a parent. Leaving out parent breaks the hierarchy this base class exists to provide.\n\nMistake #2: Creating child components inside new() instead of build_phase\n\nIt's tempting to construct everything in the constructor, especially coming from general SystemVerilog or object-oriented habits elsewhere. In UVM, component creation belongs in build_phase, where it happens in a controlled, predictable order across the whole testbench.",
                        "code": "function new(string name, uvm_component parent);\n  super.new(name, parent);\nendfunction",
                        "lang": "verilog"
                    },
                    {
                        "title": "Practice Exercise",
                        "content": "Extend parent_block so it builds two instances of child_block instead of one, named c1 and c2.\n\nYou'll need a second handle declared alongside c1, and a second create() call inside build_phase, following the same pattern as the first.\n\nBoth c1 and c2 get parent_block as their parent, so their full names become parent_block.c1 and parent_block.c2 — same parent, different names, no conflict.",
                        "code": "child_block c1;\nchild_block c2;\n\nfunction void build_phase(uvm_phase phase);\n  super.build_phase(phase);\n  c1 = child_block::type_id::create(\"c1\", this);\n  c2 = child_block::type_id::create(\"c2\", this);\nendfunction",
                        "lang": "verilog"
                    },
                    {
                        "title": "Summary",
                        "content": "In this article, you learned:",
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
                "id": "cv-uvm-10",
                "num": 10,
                "title": "UVM Driver [uvm_driver]",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "The previous three articles built everything a driver needs: reg_block and reg_if to drive signals onto, and reg_transaction to describe what to drive. This article writes the first active piece of this testbench — the part that actually wiggles pins on the DUT.\n\n9 min read | Beginner Level",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "What Is a Driver?",
                        "content": "A UVM driver is an active component that knows how to drive signals onto a specific interface. All driver classes extend uvm_driver, either directly or indirectly. It doesn't decide what to drive on its own — transaction objects come from a sequencer, and the driver's only job is to take each one and translate it into the right pin-level activity, cycle by cycle.\n\nreg_transaction is exactly the kind of object a driver consumes here: it carries wr_en/rd_en/addr/wdata as a single piece of data, and the driver's job is to turn those fields into the actual signal toggles reg_if expects.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Building reg_driver",
                        "content": "A driver is built in three parts: the class declaration and constructor, getting hold of the interface, and the task that actually drives it.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "1. Declare the Class",
                        "content": "uvm_driver is a parameterized class: uvm_driver #(type REQ = uvm_sequence_item, type RSP = REQ). reg_driver only specifies one type parameter, reg_transaction, which becomes both REQ and RSP since RSP defaults to whatever REQ is. That's a natural fit here — reg_transaction already carries both the request fields (wr_en/wdata) and the response field (rdata) in one class, so there's no need for two separate types.",
                        "code": "class reg_driver extends uvm_driver #(reg_transaction);\n\n  `uvm_component_utils(reg_driver)\n\n  function new(string name, uvm_component parent);\n    super.new(name, parent);\n  endfunction\n\n  // Code for rest of the steps come here\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "2. Get the Interface Handle",
                        "content": "vif is declared as a virtual reg_if handle rather than the interface itself, since a class can't directly instantiate an interface — it can only hold a reference to one that already exists at the top level. uvm_config_db::get() retrieves that reference, and the if (!...) wrapped around it with uvm_fatal exists because a missing handle here means the driver has nothing to drive — better to stop the test immediately than let it run silently broken.\n\n\n\nThe full mechanics of uvm_config_db — how the value got set in the first place, scope strings, and overrides — are covered in their own chapter later in this tutorial. For now, the call shown above is the standard, fixed pattern for retrieving any virtual interface handle.",
                        "code": "virtual reg_if vif;\n\nvirtual function void build_phase(uvm_phase phase);\n  super.build_phase(phase);\n  if (!uvm_config_db #(virtual reg_if)::get(this, \"\", \"vif\", vif)) begin\n    `uvm_fatal(get_type_name(), \"Didn't get handle to virtual interface reg_if\")\n  end\nendfunction",
                        "lang": "verilog"
                    },
                    {
                        "title": "3. Drive the Interface in run_phase",
                        "content": "This is the part that actually does the work, and it's worth tracing through carefully — the timing here is exactly the kind of detail reg_block's Mistake #2 warned about back in the first article.\n\nNotice there are two clock waits between driving the signals and the DUT acting on them, not one. The first @(posedge vif.clk) drives wr_en/rd_en/addr/wdata onto the interface; those values only become stable shortly after that edge. The second @(posedge vif.clk) is the edge reg_block actually samples them on and performs the write, or schedules rdata to update. For a read, rdata still isn't valid yet at that point — it only settles after that same edge, so a third wait is needed before it's safe to capture. Sampling rdata one edge too early here would silently grab a stale value, exactly the race the Mistake box in the DUT article was warning about.\n\nQ: What would go wrong if the driver sampled vif.rdata right after the second @(posedge vif.clk), without the third wait?\n\nIt would race with reg_block's own update to rdata. reg_block schedules rdata to update on that same edge using a non-blocking assignment, which only settles after the edge finishes. Sampling it at that exact moment risks reading the value from before the update, not after — the same one-cycle-too-early mistake described back in the DUT article, just from the driver's side this time.",
                        "code": "virtual task run_phase(uvm_phase phase);\n  reg_transaction tr;\n\n  forever begin\n    // 1. Get next item from the sequencer\n    seq_item_port.get_next_item(tr);\n\n    // 2. Drive request signals, then wait for the DUT to act on them\n    @(posedge vif.clk);\n    vif.wr_en <= tr.wr_en;\n    vif.rd_en <= tr.rd_en;\n    vif.addr  <= tr.addr;\n    vif.wdata <= tr.wdata;\n    @(posedge vif.clk);\n\n    // 3. For a read, rdata isn't valid until one cycle later\n    if (tr.rd_en) begin\n      @(posedge vif.clk);\n      tr.rdata = vif.rdata;\n    end\n\n    // 4. Tell the sequencer this item is done\n    seq_item_port.item_done();\n  end\nendtask",
                        "lang": "verilog"
                    },
                    {
                        "title": "The Driver-Sequencer Handshake",
                        "content": "None of the code above explains where tr actually comes from. seq_item_port is a TLM port built into every uvm_driver, and it connects to a matching seq_item_export built into every uvm_sequencer. The diagram below shows where each one lives and what crosses between them:\n\nThe two boxes themselves are connected once, during the agent's connect_phase — covered when this tutorial builds the agent. Once that connection exists, the driver uses three methods to drive the actual handshake every time it needs a new item:\n\nThe idea behind this handshake is to let the driver pull a series of transactions from the sequencer, one at a time, only ever asking for the next one once it's finished with the current one. The sequencer's finish_item call stays blocked the entire time, from the moment the driver calls get_next_item until the driver calls item_done() — so the two sides only ever have one transaction in flight at once. There are two ways to write the driver side of this exchange.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "get_next_item Followed by item_done",
                        "content": "This is the pattern reg_driver uses, and the one to reach for by default. The driver gets an item, drives it, then finishes the handshake by calling item_done(). On the sequencer's side, the matching finish_item call doesn't return until that item_done() arrives — so the two sides stay in lockstep, and the driver only ever operates when the sequencer actually has something for it.\n\n\n\nThis is a simplified version of the full reg_driver task built earlier in this article — it leaves out the extra clock waits and the read-data capture, to keep the handshake itself the focus here rather than repeating the timing details already covered.",
                        "code": "virtual task run_phase(uvm_phase phase);\n  reg_transaction tr;\n\n  forever begin\n    // 1. Get next item from the sequencer\n    seq_item_port.get_next_item(tr);\n\n    // 2. Drive signals to the interface\n    @(posedge vif.clk);\n    vif.wr_en <= tr.wr_en;\n    vif.rd_en <= tr.rd_en;\n    vif.addr  <= tr.addr;\n    vif.wdata <= tr.wdata;\n\n    // 3. Tell the sequencer that the driver has finished the current item\n    seq_item_port.item_done();\n  end\nendtask",
                        "lang": "verilog"
                    },
                    {
                        "title": "get Followed by put",
                        "content": "The difference with this model is timing: the driver gets the next item and completes the sequencer-side handshake in one go, before it has actually finished driving the item. The sequencer's finish_item call returns as soon as get() happens, not after the driver is done. The driver indicates real completion later, using put().\n\n\n\nThis pattern is used less often than get_next_item/item_done, and isn't needed for reg_driver. It's worth recognizing if you encounter it in other codebases, since the timing difference — handshake completing on get() rather than waiting for the driver — can otherwise be a confusing surprise.",
                        "code": "virtual task run_phase(uvm_phase phase);\n  reg_transaction tr;\n\n  forever begin\n    // 1. finish_item in the sequence is unblocked here, immediately\n    seq_item_port.get(tr);\n\n    // 2. Drive signals to the interface\n    @(posedge vif.clk);\n    vif.wr_en <= tr.wr_en;\n    vif.rd_en <= tr.rd_en;\n    vif.addr  <= tr.addr;\n    vif.wdata <= tr.wdata;\n\n    // 3. Indicate the item has actually finished, separately from step 1\n    seq_item_port.put(tr);\n  end\nendtask",
                        "lang": "verilog"
                    },
                    {
                        "title": "Common Beginner Mistakes",
                        "content": "Mistake #1: Calling item_done() without a matching get_next_item()\n\nThe handshake only works as a pair. Calling item_done() on its own, or calling it twice for one item, desynchronizes the driver from the sequencer — the sequencer's finish_item call is waiting for exactly one item_done per item it sent.\n\nMistake #2: Driving signals with only one clock wait\n\nWrong:\n\nRight:",
                        "code": "@(posedge vif.clk);\nvif.wr_en <= tr.wr_en;\nvif.addr  <= tr.addr;\nvif.wdata <= tr.wdata;\nseq_item_port.item_done();",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Why? Driving signals and immediately calling item_done() tells the sequencer the item is finished before reg_block has even seen the values on its next clock edge. The second wait gives the DUT the cycle it needs to actually act on what was driven.",
                        "code": "@(posedge vif.clk);\nvif.wr_en <= tr.wr_en;\nvif.addr  <= tr.addr;\nvif.wdata <= tr.wdata;\n@(posedge vif.clk);\nseq_item_port.item_done();",
                        "lang": "verilog"
                    },
                    {
                        "title": "Practice Exercise",
                        "content": "Modify reg_driver's run_phase so the driver waits for rst_n to go high before entering its main forever loop, instead of potentially driving signals during reset.\n\nYou'll need a wait statement that blocks until a signal reaches a particular value, placed before the forever loop begins.\n\n@(posedge vif.rst_n) blocks until reset is released, so the driver never tries to drive a transaction while reg_block is still being held in reset.",
                        "code": "virtual task run_phase(uvm_phase phase);\n  reg_transaction tr;\n\n  @(posedge vif.rst_n);\n\n  forever begin\n    seq_item_port.get_next_item(tr);\n    ...\n  end\nendtask",
                        "lang": "verilog"
                    },
                    {
                        "title": "Summary",
                        "content": "In this article, you learned:",
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
                "id": "cv-uvm-11",
                "num": 11,
                "title": "UVM Monitor [uvm_monitor]",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "The driver article wrote the half of this testbench that pushes transactions onto reg_if. This article writes the other half: the part that watches the interface without touching it, and turns what it sees back into reg_transaction objects.\n\n8 min read | Beginner Level",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "What Is a Monitor?",
                        "content": "A UVM monitor captures signal activity from a design interface and turns it into transaction-level data, the same kind of object a driver consumes, except the monitor never writes to the interface — it only watches. To do that job, a monitor needs two things: a virtual interface handle to watch, and an analysis port to broadcast whatever it captures to other components, like a scoreboard.\n\nA monitor extending uvm_monitor should generally stick to three responsibilities:\n\n\n\nKeep a monitor's job limited to what's always required: capturing data, plus simple, low-level checks. Anything resembling high-level functional checking — \"did this read return the value the most recent write to that address set\" — belongs in a scoreboard, not the monitor. The monitor's job is to report what happened on the bus accurately, not to judge whether it was correct.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "1. Declare the Class",
                        "content": "This follows the same shape as reg_driver's declaration — both extend a base class built on uvm_component, both register with the factory the same way. The difference between a monitor and a driver isn't in how they're declared; it's entirely in what they do inside run_phase.",
                        "code": "class reg_monitor extends uvm_monitor;\n\n  `uvm_component_utils(reg_monitor)\n\n  function new(string name, uvm_component parent);\n    super.new(name, parent);\n  endfunction\n\n  // Code for rest of the steps come here\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "2. Declare the Analysis Port and Interface Handle",
                        "content": "mon_analysis_port is how reg_monitor tells the rest of the testbench what it saw, without needing to know who's listening. Anything connected to this port — a scoreboard, a coverage collector, more than one of either — receives a copy of every reg_transaction the monitor writes to it.\n\n\n\nHow uvm_analysis_port actually works, and how to connect one to a subscriber on the other end, is covered in full in the TLM chapter later in this tutorial. For now, treat it as a broadcast mechanism: write to it, and anything connected receives a copy.",
                        "code": "virtual reg_if vif;\n\nuvm_analysis_port #(reg_transaction) mon_analysis_port;",
                        "lang": "verilog"
                    },
                    {
                        "title": "3. Build the Monitor",
                        "content": "Two things happen here. mon_analysis_port is constructed with plain new(), not the factory's create() — analysis ports aren't registered with the factory, since there's never a reason to override one. The virtual interface handle is retrieved the same way reg_driver retrieved it, with one difference worth noticing: a missing handle here uses uvm_error, not uvm_fatal. A driver with no interface can't do anything at all, so it stops the test immediately. A monitor missing its interface can technically keep running — it just won't capture anything useful, which is still a problem worth flagging loudly, but not necessarily one that has to halt the simulation outright.",
                        "code": "virtual function void build_phase(uvm_phase phase);\n  super.build_phase(phase);\n\n  mon_analysis_port = new(\"mon_analysis_port\", this);\n\n  if (!uvm_config_db #(virtual reg_if)::get(this, \"\", \"vif\", vif)) begin\n    `uvm_error(get_type_name(), \"Didn't get handle to virtual interface reg_if\")\n  end\nendfunction",
                        "lang": "verilog"
                    },
                    {
                        "title": "4. Drive run_phase — Watching, Not Driving",
                        "content": "This is where a monitor and a driver genuinely differ. reg_driver's run_phase decides what to put onto reg_if. reg_monitor's run_phase only ever reads from it — but it still needs to know the exact same timing the driver does, since it's reconstructing the same protocol from the watching side.\n\nNotice the second @(posedge vif.clk) inside the read branch. It's there for exactly the same reason reg_driver needed a third clock wait before sampling rdata: reg_block schedules rdata to update via a non-blocking assignment at the same edge rd_en is sampled, and that update doesn't settle until after the edge finishes. The monitor has no special insight into the DUT's internals — it has to wait out the same cycle of latency the driver does, because it's watching the same signals at the same times.\n\nQ: Why does the write branch not need a second clock wait, while the read branch does?\n\nA write commits inside reg_block on the very edge wr_en is sampled high — mem[addr] <= wdata happens immediately at that edge. There's nothing further to wait for, since the monitor isn't trying to observe anything beyond the request itself. A read is different: the requested data, rdata, isn't produced until that same edge's non-blocking assignment settles, which is after the edge — so capturing it correctly requires waiting for the next edge.",
                        "code": "virtual task run_phase(uvm_phase phase);\n  reg_transaction tr;\n\n  forever begin\n    @(posedge vif.clk);\n\n    if (vif.wr_en) begin\n      tr = reg_transaction::type_id::create(\"tr\", this);\n      tr.wr_en = 1;\n      tr.addr  = vif.addr;\n      tr.wdata = vif.wdata;\n      mon_analysis_port.write(tr);\n    end\n    else if (vif.rd_en) begin\n      tr = reg_transaction::type_id::create(\"tr\", this);\n      tr.rd_en = 1;\n      tr.addr  = vif.addr;\n\n      // rdata isn't valid until one cycle after rd_en, same as the driver waits\n      @(posedge vif.clk);\n      tr.rdata = vif.rdata;\n\n      mon_analysis_port.write(tr);\n    end\n  end\nendtask",
                        "lang": "verilog"
                    },
                    {
                        "title": "Optional Knobs: Checking and Coverage",
                        "content": "A monitor can include simple, bit-controlled knobs to turn basic checks or coverage sampling on and off, without those features always being active:\n\n\n\nFunctional coverage groups like cg_trans have their own dedicated chapter later in this tutorial. The pattern to remember here is just the knob itself — a plain bit that gates whether a piece of optional monitor behavior runs.\n\nThese knobs can be flipped from a test, without touching the monitor's code, using the same uvm_config_db mechanism that supplies the virtual interface:",
                        "code": "bit enable_check    = 1;\nbit enable_coverage = 1;\n\nvirtual task run_phase(uvm_phase phase);\n  ...\n  if (enable_check)\n    check_protocol(tr);\n\n  if (enable_coverage)\n    cg_trans.sample();\n  ...\nendtask",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "uvm_config_db #(bit)::set(this, \"*.agt0.monitor\", \"enable_check\", 0);\nuvm_config_db #(bit)::set(this, \"*.agt0.monitor\", \"enable_coverage\", 0);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Why Extend uvm_monitor at All?",
                        "content": "Nothing about a monitor's behavior strictly requires extending uvm_monitor instead of plain uvm_component — uvm_monitor doesn't add new methods on top of it. The reasons to use it anyway are about communicating intent: it lets tools, base-class checks, and other engineers reading the code immediately tell monitors apart from drivers, scoreboards, and other component types by their class, and it means any future additions UVM makes to the base monitor class apply to your monitor automatically.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Common Beginner Mistakes",
                        "content": "Mistake #1: Driving a signal from inside a monitor\n\nA monitor that writes to the interface it's supposed to be passively observing breaks the entire point of having a separate driver and monitor — now two components can contend for the same signals. If a monitor needs something written to the interface, that's a sign the logic belongs in the driver instead.\n\nMistake #2: Sampling rdata on the same edge as rd_en\n\nThis is the same race reg_driver had to avoid. Capturing vif.rdata on the same edge rd_en is detected risks reading a stale value from before reg_block's own update settles. A monitor has to wait the same extra cycle a driver does — watching the bus doesn't grant any shortcut around the DUT's actual timing.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Practice Exercise",
                        "content": "Add a counter to reg_monitor that tracks how many transactions it has captured in total, and print the count using uvm_info each time a new one is written to the analysis port.\n\nDeclare an integer field on the class, increment it right before or after each mon_analysis_port.write(tr) call, and use $sformatf to build the message string for uvm_info.\n\nSince both the write and read branches call mon_analysis_port.write(tr), placing the increment and the uvm_info call right before each one covers both cases without duplicating logic into a separate function.",
                        "code": "int unsigned tr_count = 0;\n\n// Inside run_phase, right before each mon_analysis_port.write(tr) call:\ntr_count++;\n`uvm_info(get_type_name(), $sformatf(\"Captured transaction #%0d\", tr_count), UVM_LOW)\nmon_analysis_port.write(tr);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Summary",
                        "content": "In this article, you learned:",
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
                "id": "cv-uvm-12",
                "num": 12,
                "title": "Subscriber [uvm_subscriber]",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "The monitor article built mon_analysis_port and used it to broadcast every reg_transaction it captured — but nothing was listening yet. This article builds the piece that does: a component whose entire job is to receive whatever a monitor sends and do something with it, usually sampling functional coverage.\n\n6 min read | Beginner Level",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "What Is a Subscriber?",
                        "content": "A subscriber is a listener on an analysis port. Whenever a broadcaster — almost always a monitor — writes an object to its analysis port, every subscriber connected to that port receives a copy automatically. A plain uvm_component has no built-in way to receive that copy; uvm_subscriber is exactly uvm_component plus one thing: a ready-made analysis export named analysis_export.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "The uvm_subscriber Class",
                        "content": "Here's the shape of the base class itself:\n\nThe type parameter T is whatever transaction this subscriber expects to receive — in this tutorial's case, reg_transaction. analysis_export is already constructed for you inside the base class's own constructor, which is why a subscriber's new() only ever needs to call super.new() and nothing more. The one thing every subscriber must supply is write(), declared pure virtual here, meaning a derived class is required to define it — this is the method that actually runs every time something arrives.\n\n\n\nThe full mechanics of how an analysis port finds and calls every connected subscriber's write() — including what happens when more than one subscriber is connected to the same port — belong to the TLM chapter later in this tutorial. For now, the only thing to know is: connect a port to analysis_export, and write() runs automatically whenever that port broadcasts.",
                        "code": "virtual class uvm_subscriber #(type T=int) extends uvm_component;\n  typedef uvm_subscriber #(T) this_type;\n\n  uvm_analysis_imp #(T, this_type) analysis_export;\n\n  function new(string name, uvm_component parent);\n    super.new(name, parent);\n    analysis_export = new(\"analysis_imp\", this);\n  endfunction\n\n  pure virtual function void write(T t);\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Building reg_coverage",
                        "content": "A subscriber built for functional coverage typically does very little beyond sampling a covergroup inside write():\n\nwrite() is the only method reg_coverage is required to implement, and it does exactly two things: store the incoming transaction where the covergroup's coverpoints can see it, then sample. Everything else — constructing the analysis export, receiving the call in the first place — is handled by uvm_subscriber itself.\n\n\n\nThis covergroup is deliberately minimal — just enough to show where sampling happens. Designing real coverage models, with bins, cross coverage, and coverage-driven test closure, has its own dedicated chapter later in this tutorial.",
                        "code": "class reg_coverage extends uvm_subscriber #(reg_transaction);\n\n  `uvm_component_utils(reg_coverage)\n\n  covergroup cg_reg_transaction;\n    coverpoint trans.addr;\n    coverpoint trans.wr_en;\n  endgroup\n\n  reg_transaction trans;\n\n  function new(string name, uvm_component parent);\n    super.new(name, parent);\n    cg_reg_transaction = new();\n  endfunction\n\n  virtual function void write(reg_transaction t);\n    trans = t;\n    cg_reg_transaction.sample();\n  endfunction\n\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Connecting the Monitor to the Subscriber",
                        "content": "None of this runs until reg_coverage's analysis_export is actually connected to reg_monitor's mon_analysis_port from the previous article. That connection is made once, in whichever component owns both of them — typically an agent or environment — inside its connect_phase:\n\nAfter this single line runs, every reg_transaction reg_monitor writes to mon_analysis_port arrives at reg_coverage's write() automatically, for the rest of the simulation. Nothing about reg_monitor needs to change to support this — it was already broadcasting; it just had no one listening until now.\n\nQ: If you also wanted a scoreboard to see every transaction reg_monitor captures, in addition to reg_coverage, what would need to change in reg_monitor itself?\n\nNothing. An analysis port can broadcast to more than one connected subscriber at once — you'd add a second connect() call in connect_phase, wiring the same mon_analysis_port to the scoreboard's own analysis export. The monitor doesn't need to know how many listeners exist, or that a second one was just added.",
                        "code": "virtual function void connect_phase(uvm_phase phase);\n  super.connect_phase(phase);\n  m_monitor.mon_analysis_port.connect(m_coverage.analysis_export);\nendfunction",
                        "lang": "verilog"
                    },
                    {
                        "title": "Why Use uvm_subscriber Instead of Plain uvm_component?",
                        "content": "Nothing stops you from adding your own analysis export to a plain uvm_component by hand. The reason to extend uvm_subscriber instead is the same reason to extend uvm_monitor instead of uvm_component for a monitor: it's a uniform, recognizable way for any component to declare \"I receive transactions from an analysis port,\" and the required write() method means there's never any doubt about how data gets in.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Common Beginner Mistakes",
                        "content": "Mistake #1: Forgetting to implement write()\n\nSince write() is declared pure virtual in uvm_subscriber, a derived class that doesn't define it won't compile. This is intentional — there's no sensible default behavior for \"something arrived,\" so the base class forces every subscriber to decide what to do with it.\n\nMistake #2: Forgetting the connect_phase wiring\n\nA correctly written reg_coverage with a correctly written write() still does nothing if its analysis_export was never connected to a monitor's analysis port. There's no error or warning for this — the simulation just runs with coverage silently staying at zero, which makes it worth double-checking the connect_phase wiring early if coverage numbers ever look suspiciously empty.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Practice Exercise",
                        "content": "Extend reg_coverage's covergroup with a coverpoint on rd_en as well as wr_en, so coverage tracks reads and writes as separate events.\n\nA covergroup can have more than one coverpoint line. Look at how wr_en is already declared as a coverpoint and add a matching line for rd_en.\n\nEach coverpoint line tracks the values a single field takes on across every sampled transaction, independently of the others — adding one for rd_en doesn't change how wr_en or addr are tracked.",
                        "code": "covergroup cg_reg_transaction;\n  coverpoint trans.addr;\n  coverpoint trans.wr_en;\n  coverpoint trans.rd_en;\nendgroup",
                        "lang": "verilog"
                    },
                    {
                        "title": "Summary",
                        "content": "In this article, you learned:",
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
                "id": "cv-uvm-13",
                "num": 13,
                "title": "UVM Sequencer [uvm_sequencer]",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "The driver article built reg_driver and left one piece dangling: seq_item_port needs something to connect to before get_next_item() can ever return anything. This article builds that something — the sequencer — and closes the connection the driver article only pointed at.\n\n8 min read | Beginner Level",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "What Is a Sequencer?",
                        "content": "A sequencer manages the flow of transactions on their way to a driver. It doesn't generate stimulus itself — that's a sequence's job, covered in the next article — and it doesn't drive any pins either — that's reg_driver's job. A sequencer sits in between, deciding when and in what order transactions reach the driver.\n\nA sequencer is normally one of three components inside an agent, alongside a driver and a monitor. This tutorial builds the agent itself in an upcoming article; for now, reg_sequencer and reg_driver are built as siblings that will eventually live inside one.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "How the Pull Model Works",
                        "content": "The relationship between a sequencer and a driver is a pull, not a push: the driver asks for a transaction when it's ready, rather than the sequencer forcing one onto the driver on its own schedule. The driver article already named the two sides of this connection without building either of them:\n\nBoth of these already exist automatically — uvm_driver declares seq_item_port, and uvm_sequencer declares seq_item_export, the same way uvm_subscriber declared analysis_export automatically in the previous article. The only thing left to do is connect them.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Declaring reg_sequencer",
                        "content": "For most testbenches, including this one, there's no need to write a sequencer class at all — uvm_sequencer already contains everything required to communicate with a driver. It only needs to be told what transaction type it's carrying:\n\nuvm_sequencer is declared as uvm_sequencer #(type REQ = uvm_sequence_item, RSP = REQ). Supplying just one type parameter sets both REQ and RSP to reg_transaction — the same outcome reg_driver already relies on, since reg_transaction carries both the request fields and the response field in a single class.\n\n\n\nA sequencer can be parameterized with two different types — uvm_sequencer #(my_data, data_rsp) m_seqr0; — when requests and responses genuinely need to be different classes. reg_transaction doesn't need that, so a single type parameter is enough here.",
                        "code": "uvm_sequencer #(reg_transaction) m_sequencer;",
                        "lang": "verilog"
                    },
                    {
                        "title": "Connecting the Sequencer to reg_driver",
                        "content": "Both sides are built and parameterized to match. What's left is the single line that wires them together, written inside whichever component owns both — here, shown directly so the connection itself is clear before the agent that will eventually own it exists:\n\nAfter this connect() call runs, reg_driver's seq_item_port.get_next_item() calls from the driver article are no longer waiting on nothing — they're waiting on m_sequencer. Nothing about reg_driver needs to change to make this work; it was already written correctly, just waiting for the other end of its port to exist.\n\nQ: Why is this connection made in connect_phase rather than build_phase, where m_sequencer and m_driver are created?\n\nBoth components have to exist before they can be connected to each other — you can't call .connect() on a handle that hasn't been assigned yet. build_phase guarantees the entire hierarchy is constructed first; connect_phase runs afterward, specifically so every component it might need to wire together is already guaranteed to exist.",
                        "code": "virtual function void build_phase(uvm_phase phase);\n  super.build_phase(phase);\n\n  m_sequencer = uvm_sequencer#(reg_transaction)::type_id::create(\"m_sequencer\", this);\n  m_driver    = reg_driver::type_id::create(\"m_driver\", this);\nendfunction\n\nvirtual function void connect_phase(uvm_phase phase);\n  super.connect_phase(phase);\n\n  // Connect the driver's seq_item_port to the sequencer's seq_item_export\n  m_driver.seq_item_port.connect(m_sequencer.seq_item_export);\nendfunction",
                        "lang": "verilog"
                    },
                    {
                        "title": "When to Write a Custom Sequencer",
                        "content": "Writing a sequencer class of your own is rarely necessary — uvm_sequencer already does everything a sequence needs to talk to a driver. The reason to extend it anyway is the same reason to extend uvm_monitor or uvm_subscriber instead of plain uvm_component: it's recommended practice, and it gives you a place to add functionality beyond what the base class provides.\n\nThis is functionally identical to declaring a plain uvm_sequencer #(reg_transaction) — the only difference is that reg_sequencer now has its own class name, which becomes useful the moment you want to add a custom method or property a sequence might need to access. The next article introduces exactly that scenario.\n\n\n\nA sequence needing to reach back into the sequencer it's running on — through handles UVM calls m_sequencer and p_sequencer — is entirely a sequence-side concern, and depends on writing a sequence's body() task first. That's covered in the next article, once a sequence actually exists to need it. (The name collision is unfortunate: this article's m_sequencer is just a local variable name for the agent's sequencer instance, completely unrelated to UVM's own built-in m_sequencer handle that every sequence carries.)",
                        "code": "class reg_sequencer extends uvm_sequencer #(reg_transaction);\n\n  `uvm_component_utils(reg_sequencer)\n\n  function new(string name, uvm_component parent);\n    super.new(name, parent);\n  endfunction\n\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Common Beginner Mistakes",
                        "content": "Mistake #1: Forgetting the connect_phase wiring\n\nA driver and sequencer that are each individually correct still do nothing together if m_driver's seq_item_port is never connected to m_sequencer's seq_item_export. Unlike a missing virtual interface, this usually doesn't produce an immediate error — the driver's get_next_item() just blocks forever, since there's nothing on the other end to ever respond.\n\nMistake #2: Connecting the export to the port instead of the port to the export\n\nWrong: m_sequencer.seq_item_export.connect(m_driver.seq_item_port); Right: m_driver.seq_item_port.connect(m_sequencer.seq_item_export);\n\nWhy? connect() is meant to be called on the port, with the export passed as its argument, because of how a port resolves its connections during elaboration — it's the port side that keeps track of what it's bound to. Calling it the other way around goes against that direction and won't resolve into a working connection, even though both classes technically inherit a connect() method.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Practice Exercise",
                        "content": "Extend reg_sequencer with a property, max_transactions, that a future sequence could read to know how many transactions it's allowed to send.\n\nThis only requires adding a plain class property to reg_sequencer — nothing about the constructor or factory registration needs to change.\n\nThis is exactly the kind of addition that makes a custom sequencer worth writing in the first place — max_transactions doesn't exist on plain uvm_sequencer, so without a class of its own to belong to, a sequence would have no type-safe way to read it later.",
                        "code": "class reg_sequencer extends uvm_sequencer #(reg_transaction);\n\n  `uvm_component_utils(reg_sequencer)\n\n  int max_transactions = 100;\n\n  function new(string name, uvm_component parent);\n    super.new(name, parent);\n  endfunction\n\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Summary",
                        "content": "In this article, you learned:",
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
                "id": "cv-uvm-14",
                "num": 14,
                "title": "UVM Sequence [uvm_sequence]",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "The previous article connected reg_sequencer to reg_driver — but a sequencer with nothing feeding it transactions just sits idle. This article writes the piece that actually generates stimulus: a sequence whose body() task creates reg_transaction objects and sends them through the chain this entire chapter has been building.\n\n9 min read | Beginner Level",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "What Is a Sequence?",
                        "content": "A sequence generates the transaction objects a sequencer routes to a driver. Sequences are made of one or more transactions, assembled in whatever pattern a particular test scenario needs — a single write, a long stream of random reads and writes, or something more deliberate. Sequences are the actual stimulus behind a verification plan; everything built in this chapter so far exists to give a sequence somewhere to send its transactions.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Declaring reg_sequence",
                        "content": "A sequence extends uvm_sequence, parameterized with the same transaction type reg_sequencer already uses:\n\nNotice the constructor takes only a name, with no parent — the same shape reg_transaction's constructor had back in its own article, and for the same reason: a sequence is a uvm_object, not a uvm_component. It doesn't live at a fixed point in the testbench hierarchy the way reg_sequencer does; it's created, runs once, and is done.",
                        "code": "class reg_sequence extends uvm_sequence #(reg_transaction);\n\n  // [Recommended] Registers with the factory using uvm_object_utils,\n  // not uvm_component_utils, since a sequence is a uvm_object, not a uvm_component\n  `uvm_object_utils(reg_sequence)\n\n  function new(string name = \"reg_sequence\");\n    super.new(name);\n  endfunction\n\n  // body() comes next\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Writing body()",
                        "content": "The actual stimulus lives entirely inside body(). Every sequence built on uvm_sequence #(reg_transaction) already has a built-in property named req of that exact type — there's no need to declare it yourself:\n\nstart_item(req) and finish_item(req) are the manual equivalent of what reg_driver's seq_item_port was waiting for all along. start_item(req) blocks until reg_sequencer is ready to accept it — which, on the driver's side, is the exact moment get_next_item() is waiting to unblock. Randomization happens in between the two calls, deliberately as late as possible, so it can take the current state of the test into account rather than committing to values too early. finish_item(req) then hands the item off and waits for reg_driver's item_done() call before returning, completing exactly the handshake the driver and sequencer articles described from their own two sides.\n\nThe pattern of creating an item, calling start_item(), randomizing, then calling finish_item() is the same in every UVM testbench, regardless of protocol — an AXI sequence, an APB sequence, and this register-block sequence all follow this identical shape. Only the transaction class and its fields change from one protocol to the next.",
                        "code": "virtual task body();\n  repeat (5) begin\n    req = reg_transaction::type_id::create(\"req\");\n    start_item(req);\n    assert(req.randomize());\n    finish_item(req);\n  end\nendtask",
                        "lang": "verilog"
                    },
                    {
                        "title": "Why Not the `uvm_do` Macro?",
                        "content": "UVM also provides a shortcut, `uvm_do(req), that performs the create/start_item/randomize/finish_item sequence shown above in a single macro call. It isn't used here, and that's a deliberate choice worth explaining rather than skipping past: writing the four steps out individually keeps every part of the handshake visible, which matters when something goes wrong and needs debugging. The macro form is covered in its own dedicated article later in this chapter, once the manual version is second nature.\n\nQ: Looking back at reg_transaction's constraint from its own article, what stops assert(req.randomize()) from ever producing a transaction that's neither a write nor a read?\n\nThe wr_xor_rd_c constraint, defined directly on reg_transaction, forces wr_en and rd_en to never both be 0 or both be 1. Every call to randomize() on a reg_transaction is bound by that constraint automatically — the sequence doesn't need to repeat or enforce it itself.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Running reg_sequence",
                        "content": "A sequence has to be started against a specific sequencer before any of this runs. With reg_sequencer already built in the previous article, starting reg_sequence on it looks like this:\n\nstart() runs body() to completion before returning. Once this call is made, the entire chain this chapter has been assembling finally runs end to end: reg_sequence creates and randomizes five reg_transaction objects, reg_sequencer passes each one to reg_driver in turn, and reg_driver drives the corresponding pin wiggles onto reg_if, which reg_block actually responds to.\n\n\n\nThis snippet calls start() directly for clarity, but in a real testbench it's normally called from inside a test's run_phase, with a simulation objection raised beforehand and dropped afterward so the simulation doesn't end while the sequence is still running. Both of those — tests, and the objection-raising pattern — are covered in upcoming articles.",
                        "code": "reg_sequence seq;\nseq = reg_sequence::type_id::create(\"seq\");\nseq.start(m_sequencer);",
                        "lang": "verilog"
                    },
                    {
                        "title": "What About p_sequencer?",
                        "content": "The previous article mentioned p_sequencer only by name, deferring it until a sequence actually existed. Now that one does, here's the short version: p_sequencer is a type-specific handle to the sequencer a sequence is running on, declared inside a sequence with `uvm_declare_p_sequencer(SEQUENCER_TYPE). It only earns its place when a custom sequencer class has members or methods beyond what plain uvm_sequencer provides — for example, the max_transactions property from the previous article's practice exercise.\n\nreg_sequence doesn't need it. Nothing in body() reaches back into anything reg_sequencer-specific; it only ever touches req and the inherited start_item()/finish_item() methods, which are available on every sequence regardless of which sequencer it runs on. p_sequencer becomes worth declaring the moment that stops being true.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Common Beginner Mistakes",
                        "content": "Mistake #1: Inserting a delay between start_item() and finish_item()\n\nThere should be no simulation time consumed between these two calls. Randomization and any other in-between logic should happen instantly, in zero simulated time — introducing a delay here breaks the timing assumptions the sequencer and driver are relying on for the handshake.\n\nMistake #2: Declaring a local variable instead of using req\n\nWrong:\n\nRight:",
                        "code": "reg_transaction tr;\ntr = reg_transaction::type_id::create(\"tr\");\nstart_item(tr);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Why? req isn't something you need to declare — uvm_sequence #(reg_transaction) already provides it as a built-in property typed to whatever transaction class the sequence is parameterized with. Declaring a separate variable still works, but it's redundant and diverges from what every other UVM sequence you'll read looks like.",
                        "code": "req = reg_transaction::type_id::create(\"req\");\nstart_item(req);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Practice Exercise",
                        "content": "Modify reg_sequence's body() so every generated transaction is a write, never a read, without changing reg_transaction's constraint itself.\n\nrandomize() accepts an inline with clause that adds a constraint just for that call, on top of any constraints already defined on the class.\n\nThe inline with clause adds wr_en == 1 on top of reg_transaction's own wr_xor_rd_c constraint, rather than replacing it — since that constraint already forces rd_en to 0 whenever wr_en is 1, every generated transaction becomes a write.",
                        "code": "virtual task body();\n  repeat (5) begin\n    req = reg_transaction::type_id::create(\"req\");\n    start_item(req);\n    assert(req.randomize() with { wr_en == 1; });\n    finish_item(req);\n  end\nendtask",
                        "lang": "verilog"
                    },
                    {
                        "title": "Summary",
                        "content": "In this article, you learned:",
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
                "id": "cv-uvm-15",
                "num": 15,
                "title": "How to create and use a sequence",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "The previous article got reg_sequence running end to end against reg_sequencer and reg_driver — but two things were deliberately left for later: how a sequence keeps the simulation alive while it runs, and how to start a sequence without writing a call to start() by hand every time. This article closes both gaps.\n\n9 min read | Beginner Level",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "A Sequence Is a Container",
                        "content": "A single reg_transaction is one packet of data — one operation, either a write or a read. A sequence is a container for an organized collection of those, or even other sequences. The same way reg_sequence generates five transactions in a loop, a real verification plan typically ends up with several different sequences, each built for a different scenario: one for resets, one for directed register reads and writes, one for a stress test that hammers random addresses.\n\nThose sequences don't have to be used in isolation. They can be run individually, composed together into a larger sequence — a reset sequence followed by a block of reads and writes, for instance — or selected at random from a library to widen test coverage without writing a new sequence for every combination by hand.\n\n\n\nComposing sequences out of other sequences, and randomly selecting from a sequence library, both depend on machinery — virtual sequences and sequence libraries — covered in their own dedicated articles later in this tutorial. The rest of this article stays focused on a single sequence's own lifecycle.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Two Ways to Start a Sequence",
                        "content": "Every example so far has used reg_sequence's body() task, but never actually started reg_sequence itself in more than one way. There are two: calling start() directly, or using the `uvm_do macro. Both end up running body() to completion, but they fit different situations.\n\nCalling start() directly is what a test typically does to kick off a top-level sequence against a specific sequencer, naming that sequencer explicitly:\n\nThe `uvm_do macro is most often reached for inside another sequence's own body(), to kick off reg_sequence as a sub-sequence on whatever sequencer that parent sequence is already running on:",
                        "code": "reg_sequence seq;\nseq = reg_sequence::type_id::create(\"seq\");\nseq.start(m_sequencer);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Where start() takes the target sequencer as an explicit argument, `uvm_do uses the parent sequence's own sequencer implicitly — there's no second argument naming one. That's the real difference, not just brevity: `uvm_do only makes sense when there's already a parent sequence to inherit a sequencer from, which is exactly the composition scenario — sequences running other sequences — that this article keeps deferring to its own dedicated chapter. Calling reg_sequence directly from a test, as shown above, always uses start(), since there's no parent sequence to borrow a sequencer from.\n\n\n\nBoth start() and `uvm_do have their own dedicated articles later in this chapter covering the full mechanics — priorities, locking, and what exactly the macro expands to. This section only covers enough to tell the two apart.\n\nQ: Could a test's run_phase use `uvm_do(seq) instead of seq.start(m_sequencer) to start reg_sequence?\n\nNot directly. `uvm_do relies on a parent sequence's own sequencer to run on, and a test's run_phase isn't a sequence — it has no sequencer of its own to borrow. start(), which takes the sequencer as an explicit argument, is the only option when starting a sequence from outside another sequence.",
                        "code": "virtual task body();\n  `uvm_do(reg_seq)\nendtask",
                        "lang": "verilog"
                    },
                    {
                        "title": "Keeping the Simulation Alive While reg_sequence Runs",
                        "content": "The previous article's body() task generated transactions but never addressed one real problem: nothing was keeping the simulation alive while reg_sequence ran. UVM's run phase ends as soon as nothing is objecting to it ending, and a sequence running on its own doesn't object to anything by default. There are two places this objection usually gets raised, depending on how the sequence is started.\n\nThe more common case is a component — usually a test — raising the objection itself, wrapped around the same start() call just shown:\n\nHere, the objection belongs to the component calling start(), not to reg_sequence itself. start() doesn't return until body() has finished, so the objection is held for exactly as long as reg_sequence is running, then dropped right after. reg_sequence doesn't need to know anything about objections at all in this case — the responsibility sits entirely with whatever called start().\n\nThe second case is narrower: a sequence started as a default sequence, covered next, has no run_phase code wrapping it — nothing calls start() by hand, so there's no surrounding raise_objection/drop_objection pair either. For that specific case, pre_body() and post_body() give the sequence a way to raise and drop its own objection instead:",
                        "code": "task run_phase(uvm_phase phase);\n  reg_sequence seq;\n  seq = reg_sequence::type_id::create(\"seq\");\n\n  phase.raise_objection(this);\n  seq.start(m_sequencer);\n  phase.drop_objection(this);\nendtask",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "get_starting_phase() only returns a non-null phase when reg_sequence is started as a default sequence. That's exactly why both callbacks check for null before doing anything: if reg_sequence is started directly with start() instead, as in the run_phase example above, there's no starting phase to raise an objection against, and the check quietly does nothing rather than failing.\n\nQ: If reg_sequence is started with the run_phase pattern shown above, does its pre_body() still do anything?\n\nIt runs, but get_starting_phase() returns null in that case, so the if check skips the raise_objection call entirely. The objection is already being held by whatever called start(), so there's nothing for pre_body() to do — which is exactly the behavior the null check is there to produce.",
                        "code": "class reg_sequence extends uvm_sequence #(reg_transaction);\n\n  `uvm_object_utils(reg_sequence)\n\n  function new(string name = \"reg_sequence\");\n    super.new(name);\n  endfunction\n\n  virtual task pre_body();\n    uvm_phase starting_phase = get_starting_phase();\n    if (starting_phase != null)\n      starting_phase.raise_objection(this);\n  endtask\n\n  virtual task body();\n    repeat (5) begin\n      req = reg_transaction::type_id::create(\"req\");\n      start_item(req);\n      assert(req.randomize());\n      finish_item(req);\n    end\n  endtask\n\n  virtual task post_body();\n    uvm_phase starting_phase = get_starting_phase();\n    if (starting_phase != null)\n      starting_phase.drop_objection(this);\n  endtask\n\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Setting a Default Sequence",
                        "content": "Every example so far has started reg_sequence explicitly, with a direct call to start(). UVM also supports starting a sequence implicitly — as a sequencer's default sequence — using uvm_config_db, the same mechanism reg_driver used to retrieve its virtual interface:\n\n\n\nThe path string here is left as a placeholder because reg_sequencer doesn't have a fixed hierarchical position yet — that only happens once it's built into an agent and environment, covered in upcoming articles. Once it does, the placeholder becomes a real path, the same way \"vif\" in reg_driver's uvm_config_db::get() call became a real interface handle once it was actually set somewhere in the hierarchy.\n\nSetting a default sequence this way means reg_sequencer starts it automatically when its run phase begins, with no run_phase code anywhere calling start() by hand. This is the one case where reg_sequence is on its own for objections — which is exactly why pre_body()/post_body() exist: get_starting_phase() returns a valid phase precisely when a sequence is started this way, giving it something to raise an objection against that no other component is already holding.",
                        "code": "uvm_config_db #(uvm_object_wrapper)::set(this, \".run_phase\",\n                                          \"default_sequence\", reg_sequence::type_id::get());",
                        "lang": "verilog"
                    },
                    {
                        "title": "What Actually Happens When reg_sequence Runs",
                        "content": "Putting everything from this chapter together, here's what one run of reg_sequence actually does, in order:\n\nFive transactions run through in total — only two are shown here for brevity — each one created and randomized inside body(), routed through reg_sequencer, driven onto reg_if by reg_driver, and acted on by reg_block. The objection raised in pre_body() is what keeps the simulation alive long enough for all five to complete, and dropping it in post_body() is what finally lets the test end.\n\n\n\nThis tutorial deliberately skips the older uvm_sequence_utils/uvm_sequencer_utils macro pair some existing UVM code still uses for registering sequences and sequencers. That alternative is being phased out of the standard and offers no benefit over uvm_object_utils/uvm_component_utils, which this tutorial uses throughout — there's no reason to learn the older form unless you encounter it in legacy code.",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test reg_test...\nUVM_INFO ./tb/reg_pkg.sv(40) @ 0: uvm_test_top.m_seqr0@@reg_sequence [REG_SEQ] pre_body: objection raised\nUVM_INFO ./tb/reg_pkg.sv(45) @ 0: uvm_test_top.m_drv0 [reg_driver] Waiting for data from sequencer\nUVM_INFO ./tb/reg_pkg.sv(52) @ 10000: uvm_test_top.m_drv0 [reg_driver] Driving wr_en=1 addr=5 wdata='hed\nUVM_INFO ./tb/reg_pkg.sv(45) @ 30000: uvm_test_top.m_drv0 [reg_driver] Waiting for data from sequencer\nUVM_INFO ./tb/reg_pkg.sv(58) @ 30000: uvm_test_top.m_drv0 [reg_driver] Driving rd_en=1 addr=5\nUVM_INFO ./tb/reg_pkg.sv(61) @ 40000: uvm_test_top.m_drv0 [reg_driver] Captured rdata='hed\nUVM_INFO ./tb/reg_pkg.sv(63) @ 90000: uvm_test_top.m_seqr0@@reg_sequence [REG_SEQ] post_body: objection dropped",
                        "lang": "verilog"
                    },
                    {
                        "title": "Common Beginner Mistakes",
                        "content": "Mistake #1: Raising the objection inside body() instead of pre_body()\n\nThis applies specifically to a sequence relying on its own pre_body()/post_body() — that is, one started as a default sequence. Raising the objection inside body() itself, after some setup work has already run, leaves a brief window where the simulation could end before the objection is even in place. pre_body() runs before body() starts, closing that gap entirely.\n\nMistake #2: Forgetting the null check on starting_phase\n\nWrong:\n\nRight:",
                        "code": "virtual task pre_body();\n  get_starting_phase().raise_objection(this);\nendtask",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Why? get_starting_phase() returns null whenever a sequence is started directly with start() rather than as a default sequence. Calling raise_objection() on a null handle crashes the simulation instead of just skipping the objection.",
                        "code": "virtual task pre_body();\n  uvm_phase starting_phase = get_starting_phase();\n  if (starting_phase != null)\n    starting_phase.raise_objection(this);\nendtask",
                        "lang": "verilog"
                    },
                    {
                        "title": "Practice Exercise",
                        "content": "Add a line to reg_sequence's post_body() that logs how many transactions were sent, using uvm_info.\n\nThe number of transactions is already known — it's the same value used in body()'s repeat loop. You don't need to count anything at runtime if you store that number in a class property instead of a literal.\n\nMoving the transaction count into n_times instead of a hardcoded repeat (5) also makes the count something a test could configure later, rather than something fixed inside the sequence itself.",
                        "code": "int unsigned n_times = 5;\n\nvirtual task body();\n  repeat (n_times) begin\n    req = reg_transaction::type_id::create(\"req\");\n    start_item(req);\n    assert(req.randomize());\n    finish_item(req);\n  end\nendtask\n\nvirtual task post_body();\n  uvm_phase starting_phase = get_starting_phase();\n  `uvm_info(get_type_name(), $sformatf(\"Sent %0d transactions\", n_times), UVM_LOW)\n  if (starting_phase != null)\n    starting_phase.drop_objection(this);\nendtask",
                        "lang": "verilog"
                    },
                    {
                        "title": "Summary",
                        "content": "In this article, you learned:",
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
                "id": "cv-uvm-16",
                "num": 16,
                "title": "UVM Scoreboard",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "The subscriber article built reg_coverage, which only ever watches and counts — it never judges whether a transaction was correct. This article builds the component that actually checks correctness: a scoreboard that predicts what reg_block should do, and flags it when reality disagrees.\n\n9 min read | Beginner Level",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "What Is a Scoreboard?",
                        "content": "A scoreboard is a verification component that checks whether a design behaved correctly, usually by comparing what actually happened against what should have happened. For a register block like reg_block, the question a scoreboard answers is simple to state: if a write put a certain byte at a certain address, does a later read from that same address return that same byte back?\n\nAnswering that question means the scoreboard needs to remember every write it's seen, so it has something to compare a later read against. That remembered, predicted state is sometimes called a reference model, or a predictor — a simplified model of what the DUT's internal state should be, built and maintained entirely in the testbench, with no dependence on reg_block's own implementation.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "1. Declare the Class",
                        "content": "reg_scoreboard extends uvm_scoreboard rather than plain uvm_component, for the same reason reg_monitor extends uvm_monitor instead: it's recommended practice, and it makes a scoreboard immediately recognizable as one by its class, even though uvm_scoreboard doesn't add any methods on top of uvm_component itself.",
                        "code": "class reg_scoreboard extends uvm_scoreboard;\n\n  `uvm_component_utils(reg_scoreboard)\n\n  function new(string name, uvm_component parent);\n    super.new(name, parent);\n  endfunction\n\n  // Code for rest of the steps come here\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "2. Declare an Analysis Implementation Port",
                        "content": "The subscriber article gave reg_coverage its own analysis_export automatically, just by extending uvm_subscriber. uvm_scoreboard doesn't include that convenience, so reg_scoreboard has to declare the same underlying mechanism, uvm_analysis_imp, by hand:\n\nap_imp is a plain class property, so it needs constructing with new() just like reg_coverage's analysis_export did underneath uvm_subscriber's own constructor — the difference here is that reg_scoreboard does that construction itself, inside its own build_phase, rather than getting it for free.",
                        "code": "uvm_analysis_imp #(reg_transaction, reg_scoreboard) ap_imp;\n\nfunction void build_phase(uvm_phase phase);\n  super.build_phase(phase);\n  ap_imp = new(\"ap_imp\", this);\nendfunction",
                        "lang": "verilog"
                    },
                    {
                        "title": "3. Build the Reference Model",
                        "content": "reg_scoreboard needs somewhere to keep track of what it expects reg_block's memory to contain, built up purely from the writes it's observed:\n\nwrite() is the method ap_imp calls automatically every time reg_monitor broadcasts a captured transaction — the same role reg_coverage's own write() played in the subscriber article, just with checking instead of sampling inside it. On a write, reg_scoreboard simply records what it expects that address to hold from now on. On a read, it compares reg_monitor's captured rdata against that prediction.\n\n\n\nwritten exists to handle a real edge case honestly: a read from an address that's never been written has no known expected value to compare against — reg_block's own memory contents are undefined at that point, not necessarily zero. Comparing against an assumed default there would risk flagging a meaningless mismatch, so reg_scoreboard skips the check entirely until it has actually seen a write to that address.\n\nQ: Why does write() check tr.wr_en and tr.rd_en instead of just checking whether tr.rdata is populated?\n\nreg_transaction's wr_xor_rd_c constraint already guarantees every transaction is clearly one or the other, so checking the flag directly is the more reliable signal — rdata is simply never populated by reg_monitor on a write, but relying on that as an implicit signal would be more fragile than checking the field that actually says what kind of transaction this is.",
                        "code": "bit [7:0] expected_mem [16];\nbit       written [16];\n\nvirtual function void write(reg_transaction tr);\n  if (tr.wr_en) begin\n    expected_mem[tr.addr] = tr.wdata;\n    written[tr.addr]      = 1;\n  end\n  else if (tr.rd_en) begin\n    if (!written[tr.addr]) begin\n      `uvm_info(get_type_name(), $sformatf(\"addr=%0d read before any write, skipping check\", tr.addr), UVM_LOW)\n    end\n    else if (tr.rdata != expected_mem[tr.addr]) begin\n      `uvm_error(get_type_name(), $sformatf(\"Mismatch at addr=%0d: expected=0x%0h actual=0x%0h\", tr.addr, expected_mem[tr.addr], tr.rdata))\n    end\n    else begin\n      `uvm_info(get_type_name(), $sformatf(\"addr=%0d matched: 0x%0h\", tr.addr, tr.rdata), UVM_HIGH)\n    end\n  end\nendfunction",
                        "lang": "verilog"
                    },
                    {
                        "title": "Connecting reg_monitor to reg_scoreboard",
                        "content": "Same as reg_coverage, reg_scoreboard does nothing until something is actually connected to ap_imp. That connection is made wherever both reg_monitor (inside reg_agent) and reg_scoreboard are owned by the same parent — typically the environment, covered in the next article:\n\n\n\nThis snippet names m_agent and m_scoreboard as if they already exist side by side in some parent component, since that's exactly the situation the next article builds. The connection itself is no different from the monitor-to-coverage wiring already shown inside reg_agent — one analysis port, connected to one analysis implementation, with reg_monitor never needing to know who's on the other end.",
                        "code": "virtual function void connect_phase(uvm_phase phase);\n  super.connect_phase(phase);\n  m_agent.m_monitor.mon_analysis_port.connect(m_scoreboard.ap_imp);\nendfunction",
                        "lang": "verilog"
                    },
                    {
                        "title": "Common Beginner Mistakes",
                        "content": "Mistake #1: Performing the comparison inside the monitor instead of the scoreboard\n\nIt can be tempting to have reg_monitor do the comparison itself, since it already sees every transaction. Keeping that logic in a separate scoreboard instead means the same monitor can feed multiple different checkers, and means changing the checking logic never requires touching the monitor at all.\n\nMistake #2: Comparing against an assumed default instead of tracking what's actually been written\n\nSkipping the written array and assuming every address starts at a known value — usually zero — produces a scoreboard that occasionally flags failures that aren't real bugs, simply because nothing was ever written to that address yet. A reference model should only ever check what it actually has a basis to predict.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Practice Exercise",
                        "content": "Add a property to reg_scoreboard that counts how many mismatches have occurred across the whole test, and print the total in report_phase.\n\nIncrement a counter inside the same branch that calls `uvm_error, then add a report_phase function that prints it — this phase runs once, near the very end of the simulation, after every transaction has already been processed.\n\nreport_phase is a good fit here specifically because it runs after everything else is done — printing the count any earlier could miss mismatches that hadn't happened yet.",
                        "code": "int unsigned mismatch_count = 0;\n\nvirtual function void write(reg_transaction tr);\n  if (tr.wr_en) begin\n    expected_mem[tr.addr] = tr.wdata;\n    written[tr.addr]      = 1;\n  end\n  else if (tr.rd_en) begin\n    if (!written[tr.addr]) begin\n      `uvm_info(get_type_name(), $sformatf(\"addr=%0d read before any write, skipping check\", tr.addr), UVM_LOW)\n    end\n    else if (tr.rdata != expected_mem[tr.addr]) begin\n      mismatch_count++;\n      `uvm_error(get_type_name(), $sformatf(\"Mismatch at addr=%0d: expected=0x%0h actual=0x%0h\", tr.addr, expected_mem[tr.addr], tr.rdata))\n    end\n  end\nendfunction\n\nvirtual function void report_phase(uvm_phase phase);\n  `uvm_info(get_type_name(), $sformatf(\"Total mismatches: %0d\", mismatch_count), UVM_LOW)\nendfunction",
                        "lang": "verilog"
                    },
                    {
                        "title": "Summary",
                        "content": "In this article, you learned:",
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
                "id": "cv-uvm-17",
                "num": 17,
                "title": "UVM Agent | uvm_agent",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "This chapter has built reg_driver, reg_monitor, reg_sequencer, and reg_coverage as four separate, unconnected pieces. This article builds the component that owns all four, wires them together, and gives the whole group a single on/off switch for whether it drives the DUT at all.\n\n10 min read | Beginner Level",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "What Is an Agent?",
                        "content": "An agent encapsulates a sequencer, driver, and monitor into a single entity, instantiating and connecting them together. Since UVM is built around configurability, an agent also typically exposes a couple of configuration knobs of its own — whether it's active or passive, being the main one.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Active vs. Passive Agents",
                        "content": "A passive agent shows up whenever a testbench needs to observe a protocol without driving it — watching an interface that another part of the testbench, or a separate instance of the same DUT, already drives. reg_monitor and reg_coverage are exactly the pieces a passive reg_agent would still build; reg_driver and reg_sequencer are the pieces it would skip.\n\nEvery agent derived from uvm_agent has a built-in method, get_is_active(), that reports which of the two it currently is:",
                        "code": "// Inside reg_agent's build_phase\nif (get_is_active()) begin\n  // Build driver and sequencer\nend\n// Build monitor regardless",
                        "lang": "verilog"
                    },
                    {
                        "title": "1. Declare the Class",
                        "content": "",
                        "code": "class reg_agent extends uvm_agent;\n\n  `uvm_component_utils(reg_agent)\n\n  function new(string name, uvm_component parent);\n    super.new(name, parent);\n  endfunction\n\n  // Code for rest of the steps come here\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "2. Declare Handles for Every Component",
                        "content": "All four classes already exist from earlier articles in this chapter. reg_agent's job from here is purely structural — instantiate each one, and connect the ones that need connecting.",
                        "code": "reg_driver    m_driver;\nreg_monitor   m_monitor;\nreg_sequencer m_sequencer;\nreg_coverage  m_coverage;",
                        "lang": "verilog"
                    },
                    {
                        "title": "3. Instantiate Components in build_phase",
                        "content": "m_sequencer and m_driver only get built when reg_agent is active, since a passive agent has nothing to drive. m_monitor and m_coverage are built unconditionally — observing the bus and sampling coverage are useful whether or not this particular agent is the one driving it.",
                        "code": "virtual function void build_phase(uvm_phase phase);\n  super.build_phase(phase);\n\n  if (get_is_active()) begin\n    m_sequencer = reg_sequencer::type_id::create(\"m_sequencer\", this);\n    m_driver    = reg_driver::type_id::create(\"m_driver\", this);\n  end\n\n  // A monitor and coverage are useful whether the agent is active or passive\n  m_monitor  = reg_monitor::type_id::create(\"m_monitor\", this);\n  m_coverage = reg_coverage::type_id::create(\"m_coverage\", this);\nendfunction",
                        "lang": "verilog"
                    },
                    {
                        "title": "4. Connect Components in connect_phase",
                        "content": "This is the step that closes every connection this chapter has been building toward, one at a time, across several earlier articles:\n\nTwo separate connections happen here, and neither one is new — both were described from each side in earlier articles, and this is simply where they're finally made real:\n\nQ: Why does the m_monitor-to-m_coverage connection have no get_is_active() check around it, while the driver-to-sequencer connection does?\n\nm_monitor and m_coverage are both built unconditionally in build_phase, regardless of whether reg_agent is active or passive — so the connection between them is always valid. m_sequencer only exists when the agent is active; connecting to a handle that was never built would fail, so that connection has to be guarded the same way its construction was.\n\nPutting all four components together this way means reg_agent is the single point where every piece this chapter built — reg_sequencer, reg_driver, reg_monitor, and reg_coverage — finally exists as one connected unit, ready to be dropped into an environment.",
                        "code": "virtual function void connect_phase(uvm_phase phase);\n  super.connect_phase(phase);\n\n  if (get_is_active())\n    m_driver.seq_item_port.connect(m_sequencer.seq_item_export);\n\n  m_monitor.mon_analysis_port.connect(m_coverage.analysis_export);\nendfunction",
                        "lang": "verilog"
                    },
                    {
                        "title": "Configuring Active or Passive From Outside",
                        "content": "An agent derived from uvm_agent has a built-in field, is_active, of type uvm_active_passive_enum — defaulting to UVM_ACTIVE. A test or environment can override it using the same uvm_config_db mechanism used throughout this chapter, without reg_agent needing any code of its own to support it:\n\n\n\nThis works without reg_agent declaring an is_active field itself, or calling uvm_config_db::get() for it — both already exist inside uvm_agent, and the base class's own build_phase retrieves this setting automatically before reg_agent's own build_phase code runs. get_is_active(), used throughout this article, is simply how that already-retrieved value gets read back.",
                        "code": "// Mark a specific agent instance as passive\nuvm_config_db #(int)::set(this, \"path_to_agent\", \"is_active\", UVM_PASSIVE);\n\n// Mark a specific agent instance as active (the default, shown here for symmetry)\nuvm_config_db #(int)::set(this, \"path_to_agent\", \"is_active\", UVM_ACTIVE);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Why Not Just Give reg_driver and reg_monitor a Common Parent Directly?",
                        "content": "Nothing stops a hierarchy from skipping the agent and connecting reg_driver and reg_sequencer directly inside an environment instead. The reason an agent is worth the extra layer is reuse: a reg_agent that bundles its own active/passive switch, its own driver-sequencer wiring, and its own coverage collector can be instantiated more than once — one active agent driving the DUT, one passive agent watching a second copy of the same interface elsewhere in a larger testbench — without duplicating any of that wiring logic each time.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Common Beginner Mistakes",
                        "content": "Mistake #1: Building the sequencer and driver unconditionally\n\nWrong:\n\nRight:",
                        "code": "m_sequencer = reg_sequencer::type_id::create(\"m_sequencer\", this);\nm_driver    = reg_driver::type_id::create(\"m_driver\", this);\nm_monitor   = reg_monitor::type_id::create(\"m_monitor\", this);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Why? Building a sequencer and driver unconditionally defeats the entire purpose of a passive agent — there'd be no way to instantiate reg_agent without it trying to drive the DUT, even in a context where nothing should be driving it.\n\nMistake #2: Connecting a handle that was never built\n\nForgetting the get_is_active() guard around the connect_phase wiring causes a null-handle error whenever reg_agent is configured as passive — m_sequencer and m_driver were never created, so there's nothing for m_driver's seq_item_port to connect to. The guard in connect_phase always has to match the one used in build_phase.",
                        "code": "if (get_is_active()) begin\n  m_sequencer = reg_sequencer::type_id::create(\"m_sequencer\", this);\n  m_driver    = reg_driver::type_id::create(\"m_driver\", this);\nend\nm_monitor = reg_monitor::type_id::create(\"m_monitor\", this);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Practice Exercise",
                        "content": "Add a bit enable_coverage property to reg_agent that, when 0, skips building m_coverage entirely — regardless of whether the agent is active or passive.\n\nThis needs a plain class property on reg_agent, plus an if around the existing line that creates m_coverage. Remember that connect_phase's wiring for m_coverage will also need the same guard, for the same reason the sequencer/driver connection does.\n\nBoth guards have to agree with each other for the same reason the active/passive guards do — connect_phase can only wire up what build_phase actually built.",
                        "code": "bit enable_coverage = 1;\n\nvirtual function void build_phase(uvm_phase phase);\n  super.build_phase(phase);\n\n  if (get_is_active()) begin\n    m_sequencer = reg_sequencer::type_id::create(\"m_sequencer\", this);\n    m_driver    = reg_driver::type_id::create(\"m_driver\", this);\n  end\n\n  m_monitor = reg_monitor::type_id::create(\"m_monitor\", this);\n\n  if (enable_coverage)\n    m_coverage = reg_coverage::type_id::create(\"m_coverage\", this);\nendfunction\n\nvirtual function void connect_phase(uvm_phase phase);\n  super.connect_phase(phase);\n\n  if (get_is_active())\n    m_driver.seq_item_port.connect(m_sequencer.seq_item_export);\n\n  if (enable_coverage)\n    m_monitor.mon_analysis_port.connect(m_coverage.analysis_export);\nendfunction",
                        "lang": "verilog"
                    },
                    {
                        "title": "Summary",
                        "content": "In this article, you learned:",
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
                "id": "cv-uvm-18",
                "num": 18,
                "title": "UVM Environment [uvm_env]",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "Every piece this chapter has built — reg_agent with its sequencer, driver, and monitor, plus reg_scoreboard sitting separately — still exists as two unconnected components. This article builds the environment that finally owns both, completing the connection the scoreboard article only described in advance.\n\n9 min read | Beginner Level",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "What Is an Environment?",
                        "content": "An environment contains a set of reusable verification components and wires them together, with whatever default configuration a given application needs. A larger environment might hold several agents for different interfaces, a shared scoreboard, and a coverage collector — this tutorial's version is intentionally smaller, holding exactly the pieces already built: one agent, one scoreboard.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Why Not Just Build Everything in the Test?",
                        "content": "It's technically possible to skip the environment entirely and instantiate reg_agent and reg_scoreboard directly inside a test class:\n\nThis works, but it doesn't scale well once more than one test exists. Every test built this way needs to know the same hierarchy details, and any change to how the components connect has to be repeated in every test that built them directly. Putting reg_agent and reg_scoreboard inside an environment instead means that structure is written exactly once, and every test that needs it simply instantiates the environment.",
                        "code": "// What NOT to do\nclass reg_test extends uvm_test;\n  `uvm_component_utils(reg_test)\n\n  reg_agent      m_agent;\n  reg_scoreboard m_scoreboard;\n\n  virtual function void build_phase(uvm_phase phase);\n    // Instantiate and connect everything here instead of in an environment\n  endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "1. Declare the Class",
                        "content": "reg_env follows the same shape every component in this chapter has used — a constructor taking a name and a parent, registered with the factory the same way. uvm_env itself adds nothing beyond uvm_component; the same recommended-practice reasoning behind extending uvm_monitor or uvm_scoreboard instead of plain uvm_component applies here too.",
                        "code": "class reg_env extends uvm_env;\n\n  `uvm_component_utils(reg_env)\n\n  function new(string name, uvm_component parent);\n    super.new(name, parent);\n  endfunction\n\n  // Code for rest of the steps come here\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "2. Instantiate Components in build_phase",
                        "content": "Both handles use exactly the names the scoreboard article already assumed they'd have — m_agent and m_scoreboard — since this is the component that article was written in advance of.",
                        "code": "reg_agent      m_agent;\nreg_scoreboard m_scoreboard;\n\nvirtual function void build_phase(uvm_phase phase);\n  super.build_phase(phase);\n\n  m_agent      = reg_agent::type_id::create(\"m_agent\", this);\n  m_scoreboard = reg_scoreboard::type_id::create(\"m_scoreboard\", this);\nendfunction",
                        "lang": "verilog"
                    },
                    {
                        "title": "3. Connect Components in connect_phase",
                        "content": "This is the exact line the scoreboard article showed and explicitly deferred, with no changes — reg_env is simply the component it was waiting to be written inside of. reg_agent's monitor was already built to broadcast on mon_analysis_port regardless of who connects to it, and reg_scoreboard's ap_imp was already built to accept a connection from anywhere — neither one needed to change at all once a real parent existed to wire them together.\n\nQ: reg_agent also builds reg_coverage internally and connects it to the same monitor. Does reg_env need to do anything to make that connection happen too?\n\nNo. That connection is entirely internal to reg_agent, made in reg_agent's own connect_phase back when it was built. reg_env only needs to make connections between components it directly owns — m_agent and m_scoreboard — not connections that already happened one level deeper inside m_agent itself.",
                        "code": "virtual function void connect_phase(uvm_phase phase);\n  super.connect_phase(phase);\n  m_agent.m_monitor.mon_analysis_port.connect(m_scoreboard.ap_imp);\nendfunction",
                        "lang": "verilog"
                    },
                    {
                        "title": "Environments Can Hold More Than This",
                        "content": "reg_env is intentionally small — one agent, one scoreboard — because that matches everything this tutorial has actually built. A larger environment isn't limited to that shape: it can hold several agents side by side, for different interfaces on the same DUT, and an environment can itself be nested inside a larger one, the same way reg_agent is nested inside reg_env.\n\n\n\nThis is also where an environment's own configuration object would typically come from, retrieved with the same uvm_config_db::get() pattern used throughout this chapter — useful once an environment has enough knobs of its own to be worth bundling into one object. reg_env doesn't need one yet, since everything it builds is fixed.\n\nA block like a DMA controller is often verified on its own first, with its own dedicated environment. When that same DMA controller gets integrated into a larger chip, that same environment can be instantiated again, nested inside the chip-level environment, alongside environments for every other block — without rewriting any of the DMA-specific verification logic. This is the entire point of building reg_env as a self-contained, reusable unit rather than a one-off pile of connections specific to a single test.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Common Beginner Mistakes",
                        "content": "Mistake #1: Connecting components that belong to a child, not to this environment\n\nIt's tempting to reach directly into m_agent's internals from reg_env's connect_phase — for instance, trying to connect reg_coverage to something from here. Any connection entirely contained within reg_agent belongs in reg_agent's own connect_phase, not the parent's. reg_env should only ever connect handles it directly owns.\n\nMistake #2: Building components in connect_phase instead of build_phase\n\nm_agent and m_scoreboard both have to exist before connect_phase can wire anything between them — the same reasoning the agent article gave for why its own driver-sequencer connection happens after both are built. Moving the create() calls into connect_phase would mean the components don't exist yet when other components try to connect to them.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Practice Exercise",
                        "content": "Suppose reg_agent also exposed a second analysis port for reg_coverage's data at the agent level, separate from the monitor's own port. Write the connect_phase line that would connect it to a second implementation port, cov_imp, on reg_scoreboard.\n\nThis follows exactly the same shape as the existing connection — a port belonging to m_agent connecting to an implementation port belonging to m_scoreboard.\n\nEach connection in connect_phase is independent — adding a second one doesn't change or interfere with the first, since they're two separate port-to-implementation pairs.",
                        "code": "virtual function void connect_phase(uvm_phase phase);\n  super.connect_phase(phase);\n  m_agent.m_monitor.mon_analysis_port.connect(m_scoreboard.ap_imp);\n  m_agent.cov_analysis_port.connect(m_scoreboard.cov_imp);\nendfunction",
                        "lang": "verilog"
                    },
                    {
                        "title": "Summary",
                        "content": "In this article, you learned:",
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
                "id": "cv-uvm-19",
                "num": 19,
                "title": "UVM Test [uvm_test]",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "reg_env is fully built, but nothing has ever actually instantiated it. This article writes the component that finally does: a test that builds reg_env, starts reg_sequence against it, and gives this entire tutorial's testbench its first real run.\n\n9 min read | Beginner Level",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "What Is a Test?",
                        "content": "A test verifies a specific feature or behavior of a design. Real verification plans typically need many tests — one for basic writes and reads, one for boundary addresses, one for back-to-back operations with no idle cycles, and so on. Rewriting the entire environment for each one would be wasteful, so instead, the same reg_env gets reused across all of them, with each test only changing what it actually needs to: which sequence runs, and which knobs are tweaked beforehand.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "1. Declare the Class",
                        "content": "",
                        "code": "class reg_test extends uvm_test;\n\n  `uvm_component_utils(reg_test)\n\n  function new(string name, uvm_component parent);\n    super.new(name, parent);\n  endfunction\n\n  // Code for rest of the steps come here\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "2. Declare and Build the Environment",
                        "content": "The source this article is built on also shows a configuration object built and passed down here, useful once an environment has knobs worth bundling into one object — the pattern covered in this chapter's deep dive on multi-agent environments. reg_env doesn't need one: it always builds the same agent and the same scoreboard, so there's nothing for reg_test to configure before building it.",
                        "code": "reg_env m_top_env;\n\nvirtual function void build_phase(uvm_phase phase);\n  super.build_phase(phase);\n  m_top_env = reg_env::type_id::create(\"m_top_env\", this);\nendfunction",
                        "lang": "verilog"
                    },
                    {
                        "title": "3. Print the Topology",
                        "content": "By end_of_elaboration_phase, every component this tutorial has built is guaranteed to already exist — reg_test, reg_env, reg_agent and everything inside it, reg_scoreboard. print_topology() prints the entire hierarchy as built, which is a quick way to confirm nothing was left out or built in the wrong place before the simulation actually starts running anything.",
                        "code": "virtual function void end_of_elaboration_phase(uvm_phase phase);\n  uvm_top.print_topology();\nendfunction",
                        "lang": "verilog"
                    },
                    {
                        "title": "4. Start a Sequence in run_phase",
                        "content": "Every piece of this line was established and explained from its own side, in its own earlier article: the objection-raising pattern from the sequence article, reg_sequence itself, and the path m_top_env.m_agent.m_sequencer, which only resolves to something real because reg_env owns m_agent and reg_agent owns m_sequencer. Nothing about any of those three classes needed to change to make this call work.\n\nQ: Would m_seq.start(m_top_env.m_agent.m_sequencer) still work if reg_agent were configured as passive?\n\nNo — a passive reg_agent never builds m_sequencer in the first place, so m_top_env.m_agent.m_sequencer would be a null handle by the time run_phase tries to call start() on it. Starting a sequence against an agent only makes sense when that agent is active.",
                        "code": "virtual task run_phase(uvm_phase phase);\n  reg_sequence m_seq = reg_sequence::type_id::create(\"m_seq\");\n\n  phase.raise_objection(this);\n  m_seq.start(m_top_env.m_agent.m_sequencer);\n  phase.drop_objection(this);\nendtask",
                        "lang": "verilog"
                    },
                    {
                        "title": "Setting a Real Default Sequence",
                        "content": "Two earlier articles introduced default sequences with a placeholder path, since reg_sequencer didn't have a fixed position in any hierarchy yet. It does now:\n\n\"m_top_env.m_agent.m_sequencer.run_phase\" is no longer a stand-in for a path that doesn't exist — it's the actual, resolvable location of reg_sequencer inside reg_test's own hierarchy. Setting this means reg_sequencer starts reg_sequence automatically once its run phase begins, with no explicit start() call needed anywhere — an alternative to the run_phase code shown in the previous step, not something used alongside it.",
                        "code": "function void start_of_simulation_phase(uvm_phase phase);\n  super.start_of_simulation_phase(phase);\n\n  uvm_config_db #(uvm_object_wrapper)::set(this, \"m_top_env.m_agent.m_sequencer.run_phase\",\n                                            \"default_sequence\", reg_sequence::type_id::get());\nendfunction",
                        "lang": "verilog"
                    },
                    {
                        "title": "A Derivative Test",
                        "content": "reg_test only ever starts reg_sequence — the same five-transaction, random read/write sequence every time. A second test that needs different stimulus doesn't have to rebuild reg_env from scratch. The cleanest way to give it different stimulus is a derivative sequence, extending reg_sequence with one extra constraint inside body(), the same inline with pattern already used in that article's own practice exercise:\n\nWith that sequence written, the derivative test itself only needs to override which sequence it starts:",
                        "code": "class reg_write_only_sequence extends reg_sequence;\n\n  `uvm_object_utils(reg_write_only_sequence)\n\n  function new(string name = \"reg_write_only_sequence\");\n    super.new(name);\n  endfunction\n\n  virtual task body();\n    repeat (5) begin\n      req = reg_transaction::type_id::create(\"req\");\n      start_item(req);\n      assert(req.randomize() with { wr_en == 1; });\n      finish_item(req);\n    end\n  endtask\n\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Because reg_write_only_test doesn't define its own build_phase at all, it inherits reg_test's exactly as written — m_top_env still gets built the same way, with no duplicated code. Only the sequence being started changes, and that change lives entirely in run_phase.",
                        "code": "class reg_write_only_test extends reg_test;\n\n  `uvm_component_utils(reg_write_only_test)\n\n  function new(string name, uvm_component parent);\n    super.new(name, parent);\n  endfunction\n\n  virtual task run_phase(uvm_phase phase);\n    reg_write_only_sequence m_seq = reg_write_only_sequence::type_id::create(\"m_seq\");\n\n    phase.raise_objection(this);\n    m_seq.start(m_top_env.m_agent.m_sequencer);\n    phase.drop_objection(this);\n  endtask\n\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Running a Test",
                        "content": "Actually launching reg_test or reg_write_only_test happens through a global task, run_test(), typically called from the top-level module — covered in detail in the next article, along with how a test gets its virtual interface handle in the first place.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Common Beginner Mistakes",
                        "content": "Mistake #1: Forgetting to raise an objection in run_phase\n\nWithout phase.raise_objection(this), the run phase has nothing telling it to stay alive, and the simulation can end before m_seq.start(...) ever finishes — or in some simulators, before it even begins.\n\nMistake #2: Defining build_phase in a derivative test when nothing about it actually changes\n\nCopying reg_test's build_phase into reg_write_only_test unchanged works, but it means any later change to how reg_env gets built has to be repeated in every derivative test that copied it. Leaving build_phase out entirely, as reg_write_only_test does, means it's inherited automatically and only ever needs updating in one place.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Practice Exercise",
                        "content": "Following the same shape as reg_write_only_sequence and reg_write_only_test, write a reg_read_only_sequence and a reg_read_only_test that bias every generated transaction toward reads instead of writes.\n\nThis is structurally identical to the write-only pair — same two classes, same inherited build_phase on the test side, only the constraint condition itself changes on the sequence side.\n\nOnly the constrained field changed, from wr_en == 1 to rd_en == 1, on the sequence side — the test side is structurally identical to reg_write_only_test, down to the inherited build_phase.",
                        "code": "class reg_read_only_sequence extends reg_sequence;\n\n  `uvm_object_utils(reg_read_only_sequence)\n\n  function new(string name = \"reg_read_only_sequence\");\n    super.new(name);\n  endfunction\n\n  virtual task body();\n    repeat (5) begin\n      req = reg_transaction::type_id::create(\"req\");\n      start_item(req);\n      assert(req.randomize() with { rd_en == 1; });\n      finish_item(req);\n    end\n  endtask\n\nendclass\n\nclass reg_read_only_test extends reg_test;\n\n  `uvm_component_utils(reg_read_only_test)\n\n  function new(string name, uvm_component parent);\n    super.new(name, parent);\n  endfunction\n\n  virtual task run_phase(uvm_phase phase);\n    reg_read_only_sequence m_seq = reg_read_only_sequence::type_id::create(\"m_seq\");\n\n    phase.raise_objection(this);\n    m_seq.start(m_top_env.m_agent.m_sequencer);\n    phase.drop_objection(this);\n  endtask\n\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Summary",
                        "content": "In this article, you learned:",
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
                "id": "cv-uvm-20",
                "num": 20,
                "title": "UVM Testbench Top",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "Every article in this chapter so far has worked with reg_if and reg_block only as names a virtual interface handle points to. This article finally instantiates them as real hardware, in the one place that ever does: the top-level module that starts everything else running.\n\n9 min read | Beginner Level",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "What Is Testbench Top?",
                        "content": "All verification components, interfaces, and the DUT itself are instantiated inside one top-level module, usually named tb_top. It's a static container holding everything the simulation needs, and it becomes the root of the entire design hierarchy — the one piece of this tutorial that isn't a UVM class at all, just plain SystemVerilog.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Instantiating reg_if and reg_block",
                        "content": "This is the moment reg_if and reg_block stop being names a virtual interface handle points to, and become actual hardware:\n\nreg_if0 is instantiated once, with clk connected to its clocking port. dut0 is instantiated with reg_if0 passed directly as its single port — the same reg_if vif port reg_block declared back in the first article of this chapter. No wrapper module is needed in between, since reg_block was written from the start to take the whole interface as one port rather than a long list of individual signals.\n\nThe uvm_config_db::set() call is the other half of something the driver article already described from the receiving side: reg_driver's uvm_config_db::get(this, \"\", \"vif\", vif) call has been waiting, since its own article, for something to actually set that value somewhere above it in the hierarchy. This is that something.\n\n\n\nThe path string \"uvm_test_top\" and the scope-matching rules behind how get() and set() find each other are covered in full in the next article, dedicated entirely to that connection. For now, the important thing is simply that it happens here, in tb_top, before run_test() is called.\n\nQ: Why is the uvm_config_db::set() call placed before run_test(\"reg_test\"), rather than after?\n\nreg_test's build_phase builds reg_env, which eventually reaches reg_driver's own build_phase, where it calls uvm_config_db::get() for the virtual interface. That get() can only succeed if a matching set() already happened earlier in simulation time — and run_test() is what kicks off every one of those phases. Calling set() after run_test() would be too late; build_phase would already have run and found nothing.",
                        "code": "module tb_top;\n  import uvm_pkg::*;\n  `include \"uvm_macros.svh\"\n\n  bit clk;\n  always #10 clk = ~clk;\n\n  reg_if   reg_if0 (clk);\n  reg_block dut0   (reg_if0);\n\n  initial begin\n    uvm_config_db #(virtual reg_if)::set(null, \"uvm_test_top\", \"vif\", reg_if0);\n    run_test(\"reg_test\");\n  end\n\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "How run_test() Actually Works",
                        "content": "run_test() is the global task that's been doing real work every time it's been called in this chapter's examples, without yet being explained. At its core, it's a short, fixed sequence:\n\nThe global run_test() just forwards to uvm_root's own version of the same method, which does the actual work: check whether +UVM_TESTNAME was passed on the simulator's command line, and use that instead if it was; create an instance of whichever test class won out; run every phase in order, starting with build_phase; wait until every phase reports done; print a summary; and end the simulation.\n\n\n\n\"Run every phase in order\" is doing a lot of work in that sentence — build_phase, connect_phase, run_phase, and several others this tutorial hasn't named yet all happen here, in a specific, fixed sequence. That full sequence, and what each phase is actually for, is covered in its own chapter later in this tutorial.\n\n+UVM_TESTNAME is worth calling out specifically, since it's the more flexible way to choose a test in practice: passing run_test(\"reg_test\") with a fixed string means changing tests requires editing and recompiling tb_top itself, while leaving the argument blank and instead passing +UVM_TESTNAME=reg_write_only_test on the simulator's command line means choosing a different test every run, with no recompilation needed at all.",
                        "code": "task run_test(string test_name = \"\");\n  uvm_root top;\n  uvm_coreservice_t cs;\n  cs  = uvm_coreservice_t::get();\n  top = cs.get_root();\n  top.run_test(test_name);\nendtask",
                        "lang": "verilog"
                    },
                    {
                        "title": "Clock and Reset, Simple to Start",
                        "content": "reg_if0's clock in the example above is about as simple as clock generation gets — one always block, one fixed period, toggling forever. That's genuinely enough for reg_block, which only ever needs one clock domain. A design with multiple clock domains, or a need to change frequency or duty cycle mid-test, usually outgrows a bare always block and moves the same responsibility into its own agent — configurable from a test the same way reg_agent is, just for timing instead of data.\n\nReset follows the same pattern. reg_block's reset is a single active-low signal with no real sequencing behind it, so there's nothing more sophisticated to build here. A design with hardware and software reset paths, or a specific sequence of events before reset is considered complete, would typically get its own reset agent for the same reason a more complex clock would — once a piece of testbench infrastructure has its own configuration knobs worth exposing to a test, it's usually worth giving it the same structure every other agent already has.\n\n\n\nA testbench top module can also create generic interfaces purely to tap or force internal signals buried deep inside a design's hierarchy, useful when a verification component needs access to a net that isn't exposed on any port. reg_block is simple enough — one module, one flat memory array — that it never needs this; the technique earns its place on designs with real internal hierarchy to reach into.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Common Beginner Mistakes",
                        "content": "Mistake #1: Calling uvm_config_db::set() after run_test()\n\nSince run_test() doesn't return until the entire simulation finishes, any code written after it in the same initial block never runs in time to matter — and even in a separate initial block, there's no guarantee it executes before build_phase needs the value. The set() call always belongs before run_test() is called.\n\nMistake #2: Forgetting to import uvm_pkg or include the macro file\n\ntb_top is the one module in this entire tutorial that isn't itself a UVM class, but it still uses UVM constructs directly — uvm_config_db, run_test(). Without import uvm_pkg::*; and `include \"uvm_macros.svh\", none of that is visible, and the module won't compile.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Practice Exercise",
                        "content": "Add the standard VCD waveform dump calls to tb_top, so a waveform viewer can inspect the simulation after it runs.\n\nThis needs a second initial block, separate from the one that calls run_test(), using $dumpfile and $dumpvars.\n\nThis block runs independently of the one starting the test — it doesn't need to come before or after run_test() specifically, since dumping setup and test execution are unrelated to each other.",
                        "code": "initial begin\n  $dumpfile(\"dump.vcd\");\n  $dumpvars;\nend",
                        "lang": "verilog"
                    },
                    {
                        "title": "Summary",
                        "content": "In this article, you learned:",
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
                "id": "cv-uvm-21",
                "num": 21,
                "title": "UVM Base Classes",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "Every driver, monitor, scoreboard, and transaction you have written so far extends either uvm_component or uvm_object. Neither of those classes is actually the top of the chain — both inherit functionality from a small set of UVM base classes that rarely get instantiated directly but quietly provide everything from factory registration to message reporting. Understanding this base class chain matters because it explains a question that confuses most people early on: why can a sequence inside a task call uvm_info just like a component can, even though sequences are not components at all?\n\nThis article maps out that hierarchy — uvm_void, uvm_object, uvm_report_object, uvm_component, and uvm_transaction — so the deep-dive articles that follow (Root, Copy/Clone, Compare, Print) make sense in context instead of as isolated facts.\n\n6 min read | Intermediate Level",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "What You'll Learn",
                        "content": "The diagram above shows the two branches that matter day to day. On the left, uvm_object leads down to uvm_sequence_item — the data side, used for transactions and sequences that come and go during simulation. On the right, the same uvm_object leads through uvm_report_object down to uvm_component — the structural side, used for drivers, monitors, and environments that exist for the entire run.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "uvm_void",
                        "content": "uvm_void sits at the very top of the chain, and it is deliberately empty:\n\nIt has no data members and no functions. Its only job is to act as a generic type, the same way a void pointer works in C — it lets you build a container that can hold a handle to \"some UVM thing\" without committing to which UVM thing it is. Classes that extend uvm_void directly (instead of uvm_object or uvm_component) get none of the UVM utility functions; they can still be stored alongside other UVM objects in a generically typed container, but that is the extent of what uvm_void buys you.\n\nIn practice, you will almost never extend uvm_void directly. It exists so that uvm_object has something to inherit from, keeping the type system consistent.",
                        "code": "virtual class uvm_void;\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "uvm_object",
                        "content": "uvm_object is where the UVM base class library actually starts doing useful work. It is the base class for every data-carrying and hierarchical class in a UVM environment — transactions, sequences, configuration objects, and (further down the chain) components all trace back to it.\n\nuvm_object defines a consistent interface for print, copy, compare, and record so that any object — regardless of what it represents — can be printed, cloned, or compared the same way. None of this is automatic; a class still needs the `uvm_object_utils macro (or hand-written do_print/do_copy/do_compare hooks) to make these methods aware of its specific fields. uvm_object just guarantees the method exists and has a predictable signature.\n\nRead more in UVM Object.",
                        "code": "virtual class uvm_object extends uvm_void;\n\n\textern function void print (uvm_printer printer=null);\n \textern function void copy (uvm_object rhs, uvm_copier copier=null);\n  \textern function bit  compare (uvm_object rhs, uvm_comparer comparer=null);\n \textern function void record (uvm_recorder recorder=null);\n\t...\n\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "uvm_report_object",
                        "content": "uvm_report_object extends uvm_object, and it is the class that gives every component its reporting ability:\n\nCalling `uvm_info, `uvm_warning, `uvm_error, or `uvm_fatal does not print anything directly. Each macro hands the message to an internal uvm_report_handler, which checks the configured verbosity and decides whether the message should be displayed at all. If it should, the message is forwarded to a single, global uvm_report_server, which formats and prints it.\n\nThat two-stage handoff is what makes verbosity filtering possible. If the maximum verbosity is set to UVM_MEDIUM, every `uvm_info call tagged UVM_HIGH is silently dropped by the handler before it ever reaches the server. This means you can litter your driver and monitor code with detailed UVM_HIGH debug messages and leave them there permanently — they simply stay quiet until someone raises the verbosity for a debug session, with no recompile needed.\n\nBecause uvm_report_object extends uvm_object rather than the other way around, reporting is a property of the object branch first. uvm_component inherits it for free further down the chain, which is why every component can call `uvm_info without any extra setup.\n\nRead more in UVM Reporting Functions.",
                        "code": "// A report has 'severity', 'id_string', 'text_message', and 'verbosity_level'\n`uvm_info (\"STAT\", \"Status register updated\", UVM_HIGH\")\n\n// severity  \t\t: uvm_info\n// id_string \t\t: \"STAT\"\n// text_message \t: \"Status register updated\"\n// verbosity_level \t: UVM_HIGH",
                        "lang": "verilog"
                    },
                    {
                        "title": "uvm_component",
                        "content": "uvm_component extends uvm_report_object, which is the detail the diagram makes clear and a flat list of classes does not: every driver, monitor, agent, and environment you build is, by inheritance, also a uvm_report_object and a uvm_object. That is the entire reason a component never needs to do anything special to call `uvm_info or use copy/compare — both abilities arrive already built in from its parent classes.\n\nuvm_component itself adds the structural machinery that turns a collection of classes into an actual testbench hierarchy:\n\nRead more in UVM Component.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "uvm_transaction",
                        "content": "uvm_transaction extends uvm_object and adds a timing and notification interface — timestamps and events that mark when a transaction is accepted, begun, and ended.\n\nuvm_transaction is deprecated as a base class for user-defined transactions. Use uvm_sequence_item instead, which extends uvm_transaction and adds the fields a sequence actually needs — things like a sequence ID and a handle back to the sequencer that generated it.\n\nIn other words, you will see uvm_transaction in class hierarchy diagrams and in the UVM source, but in your own code, a transaction class should always look like this:\n\nnot directly from uvm_transaction.\n\nEvery signal-level transaction sent from a sequence to a driver, and every register read or write issued by a RAL model, is ultimately a uvm_sequence_item riding on top of uvm_object. Meanwhile every piece of structural testbench code — agents, scoreboards, environments — rides on uvm_component. Recognizing which branch a class belongs to tells you immediately whether it has a fixed place in the testbench tree or whether it is a transient piece of data passing through.",
                        "code": "class my_transaction extends uvm_sequence_item;\n  `uvm_object_utils(my_transaction)\n\n  rand bit [7:0] addr;\n  rand bit [31:0] data;\n\n  function new(string name = \"my_transaction\");\n    super.new(name);\n  endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "uvm_root",
                        "content": "uvm_root is a special case: it is the implicit top-level component that UVM creates automatically the moment a test starts running. You never instantiate it yourself, but you can reach it through the global handle uvm_top:\n\nuvm_root checks for unresolved errors at the end of the end_of_elaboration phase and raises a UVM_FATAL if it finds any, which stops the simulation before the run_phase ever starts. If your test fails before a single clock edge happens, this check is one of the first places to look.\n\nRead more in UVM Root.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Common Mistakes",
                        "content": "Mistake #1: Extending uvm_transaction directly for a new transaction class\n\nWrong: class my_txn extends uvm_transaction; Right: class my_txn extends uvm_sequence_item;\n\nWhy? uvm_transaction is deprecated for this purpose. uvm_sequence_item already extends it and adds the sequencer-handshake fields a real transaction needs, so extending uvm_sequence_item gives you everything uvm_transaction offers plus the parts that actually make sequences work.\n\nMistake #2: Assuming a sequence cannot call `uvm_info because it is not a component\n\nA sequence is not a uvm_component, but reporting is not exclusive to components — it comes from uvm_report_object, and sequences have their own access to the global reporting mechanism through uvm_top. The macro works fine inside a sequence's body() task without any extra setup.\n\nMistake #3: Treating uvm_void as something you should extend for \"lightweight\" classes\n\nExtending uvm_void directly throws away every UVM utility — no print, no copy, no factory registration. If a class needs to interoperate with UVM in any way, extend uvm_object instead; uvm_void only exists to anchor the type hierarchy.\n\nQ: A driver class can call `uvm_info without registering for reporting separately. Which base class makes this possible?\n\nuvm_report_object. Since uvm_component extends uvm_report_object, every component inherits the reporting interface automatically.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Practice Exercise",
                        "content": "For each class below, write down the full inheritance chain back to uvm_void: uvm_driver, uvm_sequence_item, and uvm_env.\n\nuvm_driver and uvm_env are both UVM-provided subclasses of uvm_component. uvm_sequence_item sits on the other branch, below uvm_transaction.\n\nuvm_driver: uvm_driver → uvm_component → uvm_report_object → uvm_object → uvm_void\n\nuvm_sequence_item: uvm_sequence_item → uvm_transaction → uvm_object → uvm_void\n\nuvm_env: uvm_env → uvm_component → uvm_report_object → uvm_object → uvm_void",
                        "code": null,
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
                "id": "cv-uvm-22",
                "num": 22,
                "title": "UVM Root [uvm_root]",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "Every component you build — drivers, monitors, environments, tests — needs a parent somewhere up the chain, all the way to a single root. uvm_root is that root. You never write uvm_root my_root = new(); yourself, but every testbench you have ever run has one, automatically created the moment run_test() is called, and every orphaned component in your hierarchy quietly becomes its child.\n\nThis article covers what uvm_root actually is, where it sits in the base class hierarchy, and the three things its global handle uvm_top is most commonly used for: implicit parenting, hierarchical component search, and global report configuration.\n\n7 min read | Intermediate Level",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "What is uvm_root ?",
                        "content": "uvm_root is a singleton class that serves as the top-level container for all UVM components in a verification environment. Its single instance is called uvm_top. UVM creates this instance automatically the moment run_test() is called — you never construct it, and you should never try to create a second instance.\n\nIf you only remember one thing about uvm_root, make it this: it is always there, it is always exactly one object, and every component without an explicit parent ends up attached to it.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "How the Source Actually Creates It",
                        "content": "It's worth seeing the mechanism in the UVM library itself rather than taking \"it's a singleton\" on faith. Inside uvm_root.svh, the class keeps a private static handle and only ever lets one instance exist:\n\nm_inst is declared static local, so no code outside uvm_root itself can touch the handle directly. The only door in is the static get() function, which goes through a layer called uvm_coreservice_t — UVM's central lookup point for the factory, the report server, and the root, all in one place:",
                        "code": "class uvm_root extends uvm_component;\n\n  // singleton handle\n  static local uvm_root m_inst;\n\n  // Function: get()\n  // Get the singleton uvm_root instance\n  extern static function uvm_root get();\n\n  ...\n\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "This is also exactly what the global uvm_top variable resolves to — uvm_top and uvm_root::get() always hand back the same object, because there is only ever one to hand back.\n\nThe other detail worth seeing in source is how a brand-new component decides whether it belongs to a real parent or to uvm_top. That logic lives in uvm_component::new() inside uvm_component.svh:",
                        "code": "// uvm_coreservice_t::get_root() ultimately calls back into uvm_root\n// to allocate the one instance on first use, and returns the same\n// handle on every call after that.\n\nuvm_coreservice_t cs;\nuvm_root r;\n\ncs = uvm_coreservice_t::get();\nr = cs.get_root();\n\n// uvm_root::get() is a convenience wrapper around the two lines above\nr = uvm_root::get();",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "That name == \"__top__\" check is the special case reserved for uvm_root's own construction. Every other component you create with parent=null falls through past that check and is parented to uvm_top instead — which is the source-level reason behind the \"orphaned components attach to uvm_top\" behavior described above.\n\nFinally, this is what actually happens when your testbench calls run_test(\"my_test\"). The global run_test task (defined in uvm_globals.svh) does almost nothing itself — it just forwards to the one root instance:",
                        "code": "function uvm_component::new (string name, uvm_component parent);\n  uvm_root top;\n  uvm_coreservice_t cs;\n\n  super.new(name);\n\n  // If this construction IS uvm_top itself, blank its name so it\n  // never shows up in any child's full hierarchical path, then return\n  if (parent==null && name == \"__top__\") begin\n    set_name(\"\");\n    return;\n  end\n\n  ...\n  // Any other component with parent==null is attached to uvm_top here\nendfunction",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Inside uvm_root::run_test(), the test class you named is pulled from the factory and constructed with uvm_top as its parent and the fixed instance name \"uvm_test_top\":",
                        "code": "task run_test (string test_name=\"\");\n  uvm_root top;\n  uvm_coreservice_t cs;\n\n  cs = uvm_coreservice_t::get();\n  top = cs.get_root();\n\n  top.run_test(test_name);\nendtask",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "That single line is the entire source-level explanation for why every full path in your log starts with uvm_test_top: the factory builds your test, names the instance literally \"uvm_test_top\", and the constructor logic shown above attaches it under uvm_top because no other parent was given.",
                        "code": "task uvm_root::run_test(string test_name=\"\");\n  uvm_factory factory = uvm_factory::get();\n  uvm_component uvm_test_top;\n  ...\n\n  $cast(uvm_test_top, factory.create_component_by_name(test_name,\n        \"\", \"uvm_test_top\", null));\n\n  ...\nendtask",
                        "lang": "verilog"
                    },
                    {
                        "title": "Class Hierarchy",
                        "content": "uvm_root extends uvm_component, which means it inherits the full chain described in UVM Base Classes: hierarchy management, phasing, reporting, and factory access all come along for free. The one thing that makes uvm_root different from every other component you write is that UVM itself creates and manages its single instance — you interact with that instance through the global variable uvm_top, never through a class handle you declare yourself.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Implicit Top-Level",
                        "content": "uvm_top is the implicit top-level component, and any component whose parent argument is left unspecified (or explicitly passed as null) becomes a child of uvm_top instead of floating around with no place in the hierarchy.\n\nIn the example above, m_env_1 is built normally, with this (the test) passed as its parent — that is the pattern you should use for almost everything in a real testbench. m_env_2 is created with no second argument at all, so it silently attaches itself under uvm_top instead of under the test. The test class itself works the same way: when you call run_test(\"my_test\"), UVM creates an instance of my_test with uvm_top as its parent and names it uvm_test_top, which is why that name shows up in every full hierarchical path you have ever seen in a log file.\n\nMistake: Forgetting to pass this as the parent when creating a child component\n\nWrong: m_agent = my_agent::type_id::create(\"m_agent\"); Right: m_agent = my_agent::type_id::create(\"m_agent\", this);\n\nWhy? Omitting the parent does not cause an error — the component still builds and runs. But it silently attaches under uvm_top instead of under its intended parent, so its full hierarchical name (and anything that depends on that name, like uvm_config_db scoping) ends up wrong in a way that is easy to miss until a config lookup fails.\n\nQ: If you create a component and pass null as its parent, where does it end up in the hierarchy?\n\nIt becomes a direct child of uvm_top, the same place any component with an unspecified parent ends up.",
                        "code": "class my_env extends uvm_env;\n\t`uvm_component_utils (my_env)\n\n\t// Note that if parent is not explicitly passed during creation, it will be null\n\tfunction new(string name = \"my_env\", uvm_component parent = null);\n\t\tsuper.new(name, parent);\n\tendfunction\n\nendclass\n\nclass my_test extends uvm_test;\n\t`uvm_component_utils (my_test)\n\n\tmy_env \t\tm_env_1;\n\tmy_env \t\tm_env_2;\n\t...\n\n\tvirtual function void build_phase(uvm_phase phase);\n\t\tsuper.build_phase(phase);\n\n\t\t// Parent is set to my_test\n\t\tm_env_1 = my_env::type_id::create(\"m_env_1\", this);\n\n\t\t// Parent is null, and hence set to uvm_top\n\t\tm_env_2 = my_env::type_id::create(\"m_env_2\");\n\tendfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Search Functionality",
                        "content": "uvm_top can search for components by their full hierarchical name, using find() for a single match or find_all() for every match. Both accept wildcard patterns: * matches any sequence of characters and ? matches exactly one character. The search walks the hierarchy top to bottom in alphanumeric order, and a pattern starting with a dot is treated as an absolute path rather than a wildcard search from the top.\n\nBoth find() and find_all() take an optional second argument, a starting component, which limits the search to that component's subtree instead of the whole testbench. This is useful when two different agents happen to have identically-named children and you only want matches under one of them.\n\nWildcard search through uvm_top is commonly used in debug code and in generic testbench utilities that need to act on every instance of a particular component type — for example, raising verbosity on every monitor in a multi-agent SoC environment, or collecting handles to every scoreboard to print a combined pass/fail summary at the end of a test, without hardcoding each instance name.",
                        "code": "class my_test extends uvm_test;\n\t`uvm_component_utils (my_test)\n\n\tmy_env \t\tm_env;\n\n\tvirtual function void build_phase(uvm_phase phase);\n\t\tsuper.build_phase(phase);\n\n\t\tm_env = my_env::type_id::create(\"m_env\", this);\n\tendfunction\n\n\tvirtual function void end_of_elaboration_phase(uvm_phase phase);\n\t\tuvm_component \tcomp;\n\t\tuvm_component \tcomp_q [$];\n\n\t\tsuper.end_of_elaboration_phase(phase);\n\n\t\t// Gets handle to the driver indicated by the path\n\t\tcomp = uvm_top.find(\"m_env.m_agent.m_driver\");\n\n\t\t// Gets the first handle to the driver that matches the pattern\n\t\tcomp = uvm_top.find(\"*apb_driver*\");\n\n\t\t// Gets queue of all handles that match the pattern\n\t\tcomp_q = uvm_top.find_all(\"*apb_driver*\");\n\n\t\tforeach (comp_q[i]) begin\n\t\t\t`uvm_info (get_type_name(), $sformatf(\"Found component %s\", comp_q[i].get_full_name()), UVM_LOW)\n\t\tend\n\n\tendfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Report Configuration",
                        "content": "uvm_top can set a global report verbosity that affects every component in the simulation in one call, and its reporting interface is reachable from outside uvm_component entirely — from modules, sequences, or anywhere else that has visibility into uvm_pkg.\n\nThe name of uvm_top itself is set to an empty string \"\", specifically so it does not appear in the full hierarchical name of its children — this is why a path looks like uvm_test_top.m_env.m_agent rather than uvm_top.uvm_test_top.m_env.m_agent. Another very common use of the same instance is passing it as the context argument in uvm_config_db, which makes a value visible to every component in the testbench:",
                        "code": "class my_test extends uvm_test;\n\n\t...\n\n\tvirtual function void build_phase(uvm_phase phase);\n\t\tsuper.build_phase(phase);\n\n\t\tuvm_top.set_report_verbosity_level_hier(UVM_HIGH);\n\tendfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "uvm_root::get() is the static accessor for the singleton instance, and it returns the exact same object as the global uvm_top variable. The two are interchangeable; uvm_root::get() is just the form you reach for in contexts (like static functions) where referencing a global variable directly feels less natural.\n\nOne more behavior worth knowing about uvm_top: at the end of the end_of_elaboration phase, it checks whether any errors have been generated so far in the simulation. If it finds any, it raises a UVM_FATAL and the simulation stops before start_of_simulation_phase or run_phase ever begins. If your test fails before a single clock edge happens, this check — not your run_phase code — is usually the first place to look.",
                        "code": "// Set m_cfg to the top level and let everything else beneath it have access\nuvm_config_db #(my_cfg)::set(uvm_root::get(), \"*\", \"my_cfg\", m_cfg);\n\nif (! uvm_config_db #(my_cfg)::get(uvm_root::get(), \"*\", \"my_cfg\", m_cfg))\n\t`uvm_fatal (get_type_name(), $sformatf(\"[ERROR] my_cfg not found in config_db !\"))",
                        "lang": "verilog"
                    },
                    {
                        "title": "Practice Exercise",
                        "content": "Suppose your environment has three agents, each named differently but each containing a driver named m_driver. Write a snippet inside end_of_elaboration_phase that collects handles to all three drivers using a single wildcard search, and prints each one's full hierarchical name.\n\nYou want every match, not just the first one, so reach for find_all() with a pattern that matches any path ending in m_driver.\n\nThe leading * matches any prefix path, so this picks up m_driver regardless of which agent or environment it sits under.",
                        "code": "virtual function void end_of_elaboration_phase(uvm_phase phase);\n  uvm_component drv_q[$];\n  super.end_of_elaboration_phase(phase);\n\n  drv_q = uvm_top.find_all(\"*m_driver\");\n\n  foreach (drv_q[i]) begin\n    `uvm_info(get_type_name(), $sformatf(\"Driver found: %s\", drv_q[i].get_full_name()), UVM_LOW)\n  end\nendfunction",
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
                "id": "cv-uvm-23",
                "num": 23,
                "title": "UVM Object Pack/Unpack",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "Most data inside a UVM testbench stays as SystemVerilog class objects from the moment a transaction is created to the moment it is consumed. But the instant that data needs to cross a boundary that doesn't understand SystemVerilog — a DPI call, a file, a socket modeling SPI or I2C traffic, or a co-simulation bridge to another language — it has to become a flat stream of bits first. pack and unpack are the UVM methods that make that conversion.\n\nThis article covers the three pack/unpack variants available through the automation macros, then shows the same behavior implemented by hand with do_pack/do_unpack — and clears up a detail the return value of unpack() that trips up almost everyone the first time they use it.\n\n7 min read | Intermediate Level",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "What You'll Learn",
                        "content": "UVM automation macros also include mechanisms to pack class variables into a bit or byte stream, and unpack a bit stream to populate the class contents back. There are three method pairs available, all operating on the same underlying bits but writing them into different array types:\n\nAs the diagram shows, all three pack variants encode the exact same bits — the only difference is the element type of the destination array, and whether that forces extra padding bits onto the end. The padding exists purely so the result lines up on a clean byte or word boundary; it carries no information of its own.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Pack",
                        "content": "A class called Packet is defined with some variables to store address and data, and is registered with `uvm_field_int macros to enable automation. UVM_DEFAULT specifies that all the default automation methods should be applied to the given variable.\n\nNote that the order of variables as listed within `uvm_object_utils_* will be used for both packing and unpacking data.\n\nLet us create a test class called pack_test where an object of Packet is created, randomized and packed.",
                        "code": "class Packet extends uvm_object;\n  rand bit [3:0] m_addr;\n  rand bit [3:0] m_wdata;\n  rand bit [3:0] m_rdata;\n  rand bit \t\t m_wr;\n\n  `uvm_object_utils_begin(Packet)\n  \t`uvm_field_int(m_addr, \tUVM_DEFAULT)\n  \t`uvm_field_int(m_wdata, UVM_DEFAULT)\n  \t`uvm_field_int(m_rdata, UVM_DEFAULT)\n  \t`uvm_field_int(m_wr,\t\tUVM_DEFAULT)\n  `uvm_object_utils_end\n\n  function new(string name = \"Packet\");\n    super.new(name);\n  endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "The function pack returned an array of bits, pack_bytes returned an array of bytes, and pack_ints returned an array of ints. Packet has 4+4+4+1 = 13 bits total, which fits exactly into 13 elements of m_bits with nothing left over. pack_bytes needs 2 bytes (16 bits) to hold those same 13 bits, so the remaining 3 bits are zero-padded; pack_ints needs a full 32-bit int to hold them, so 19 bits are zero-padded.",
                        "code": "class pack_test extends uvm_test;\n  `uvm_component_utils(pack_test)\n  function new(string name = \"pack_test\", uvm_component parent=null);\n    super.new(name, parent);\n  endfunction\n\n  // Declare some arrays to store packed data output from different pack functions\n  bit \t\t\t\t\t\tm_bits[];\n  byte unsigned\t\tm_bytes[];\n  int  unsigned\t\tm_ints[];\n\n  virtual function void build_phase(uvm_phase phase);\n\n  \t// First create an object of class \"Packet\", randomize and print its contents\n    Packet m_pkt = Packet::type_id::create(\"Packet\");\n    m_pkt.randomize();\n    m_pkt.print();\n\n    // Now, call \"pack\", \"pack_bytes\", and \"pack_ints\" and pass appropriate array type\n    m_pkt.pack(m_bits);\n    m_pkt.pack_bytes(m_bytes);\n    m_pkt.pack_ints(m_ints);\n\n    // Print the array contents\n    `uvm_info(get_type_name(), $sformatf(\"m_bits=%p\", m_bits), UVM_LOW)\n    `uvm_info(get_type_name(), $sformatf(\"m_bytes=%p\", m_bytes), UVM_LOW)\n    `uvm_info(get_type_name(), $sformatf(\"m_ints=%p\", m_ints), UVM_LOW)\n  endfunction\nendclass\n\nmodule tb;\n\tinitial begin\n\t\trun_test(\"pack_test\");\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "The pack, pack_bytes, and pack_ints functions also return an int giving the total number of bits packed, the same way unpack does (covered next). Most code ignores that return value during packing since the array itself already has the data — it matters far more during unpacking.",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test pack_test...\n--------------------------------\nName       Type      Size  Value\n--------------------------------\nPacket     Packet    -     @1907\n  m_addr   integral  4     'hd  \n  m_wdata  integral  4     'h9  \n  m_rdata  integral  4     'h6  \n  m_wr     integral  1     'h1  \n--------------------------------\nUVM_INFO testbench.sv(74) @ 0: uvm_test_top [pack_test] m_bits='{'h1, 'h1, 'h0, 'h1, 'h1, 'h0, 'h0, 'h1, 'h0, 'h1, 'h1, 'h0, 'h1}\nUVM_INFO testbench.sv(75) @ 0: uvm_test_top [pack_test] m_bytes='{'hd9, 'h68}\nUVM_INFO testbench.sv(76) @ 0: uvm_test_top [pack_test] m_ints='{3647471616}\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_report_server.svh(847) @ 0: reporter [UVM/REPORT/SERVER]",
                        "lang": "verilog"
                    },
                    {
                        "title": "Unpack",
                        "content": "Let us create a different test class called unpack_test which will create two Packet objects, but randomize only one of them leaving the other empty. Then pack contents of the first object into an array, and then unpack it into the second object and display its contents. Repeat the same thing with other types of pack functions.\n\nRemember that the order in which it is packed should be the same as the order in which it is unpacked. Any change in packer policy regarding order may cause the results to be different.",
                        "code": "class unpack_test extends uvm_test;\n  `uvm_component_utils(unpack_test)\n  function new(string name = \"unpack_test\", uvm_component parent=null);\n    super.new(name, parent);\n  endfunction\n\n  // Declare a few arrays to hold packed data for each type of \"pack\" function\n  bit \t\t\t\t\tm_bits[];\n  byte unsigned\tm_bytes[];\n  int  unsigned\tm_ints[];\n\n  // Variables to hold return value from pack function\n  int m_val1, m_val2, m_val3;\n\n  virtual function void build_phase(uvm_phase phase);\n    Packet m_pkt = Packet::type_id::create(\"Packet\");\n    Packet m_pkt2 = Packet::type_id::create(\"Packet\");\n\n    `uvm_info(get_type_name(), $sformatf(\"Start pack\"), UVM_LOW)\n    // Randomize the first object, print and pack into bit array, then display\n    m_pkt.randomize();\n    m_pkt.print();\n    m_pkt.pack(m_bits);\n    `uvm_info(get_type_name(), $sformatf(\"packed m_bits=%p\", m_bits), UVM_LOW)\n\n    // Randomize the first object, print and pack into byte array, then display\n    m_pkt.randomize();\n    m_pkt.print();\n    m_pkt.pack_bytes(m_bytes);\n    `uvm_info(get_type_name(), $sformatf(\"packed m_bytes=%p\", m_bytes), UVM_LOW)\n\n    // Randomize the first object, print and pack into int array, then display\n    m_pkt.randomize();\n    m_pkt.print();\n    m_pkt.pack_ints(m_ints);\n    `uvm_info(get_type_name(), $sformatf(\"packed m_ints=%p\", m_ints), UVM_LOW)\n\n    `uvm_info(get_type_name(), $sformatf(\"Start unpack\"), UVM_LOW)\n    // Now unpack the packed bit array into the second object, and display\n    m_val1 = m_pkt2.unpack(m_bits);\n    `uvm_info(get_type_name(), $sformatf(\"unpacked m_val1=0x%0h\", m_val1), UVM_LOW)\n    m_pkt2.print();\n\n    // Now unpack the packed byte array into the second object, and display\n    m_val2 = m_pkt2.unpack_bytes(m_bytes);\n    `uvm_info(get_type_name(), $sformatf(\"unpacked m_val2=0x%0h\", m_val2), UVM_LOW)\n    m_pkt2.print();\n\n    // Now unpack the packed int array into the second object, and display\n    m_val3 = m_pkt2.unpack_ints(m_ints);\n    `uvm_info(get_type_name(), $sformatf(\"unpacked m_val3=0x%0h\", m_val3), UVM_LOW)\n    m_pkt2.print();\n  endfunction\nendclass\n\nmodule tb;\n\tinitial begin\n\t\trun_test(\"unpack_test\");\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Look closely at m_val1, m_val2, and m_val3 in the log above — all three print 0xd. That is not a coincidence about m_addr, and it is not a sign that the unpack worked because the value \"looks right\". unpack() and its variants return the number of bits that were read from the source array, not a data field from the object. Packet is exactly 4+4+4+1 = 13 bits, and 13 in hex is 0xd. The bit count happens to print as 0xd here purely because this particular class is 13 bits wide — change any field's width and m_val1 would change too, with no relationship to m_addr at all.\n\nQ: If you added a 4-bit m_extra field to Packet (making it 17 bits total) and called unpack() again, what would the return value be?\n\n17 (0x11 in hex) — the return value tracks the total number of bits consumed from the array, which grows with the object, not any particular field's value.\n\nAutomation macros introduce a lot of new code, and using them everywhere is not generally recommended — particularly for objects with many fields, where the macro-generated code adds noticeable simulation overhead compared to hand-written do_pack/do_unpack.\n\nPacking and unpacking shows up most often at protocol boundaries where the data has to leave the SystemVerilog domain entirely — serializing a transaction to drive bit-by-bit over a DPI link to a reference model written in C, writing transactions to a file for offline replay, or reconstructing a transaction object from raw bytes captured off a bus monitor that only sees wire-level activity.",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test unpack_test...\nUVM_INFO testbench.sv(93) @ 0: uvm_test_top [unpack_test] Start pack\n--------------------------------\nName       Type      Size  Value\n--------------------------------\nPacket     Packet    -     @1907\n  m_addr   integral  4     'hd  \n  m_wdata  integral  4     'h9  \n  m_rdata  integral  4     'h6  \n  m_wr     integral  1     'h1  \n--------------------------------\nUVM_INFO testbench.sv(95) @ 0: uvm_test_top [unpack_test] packed m_bits='{'h1, 'h1, 'h0, 'h1, 'h1, 'h0, 'h0, 'h1, 'h0, 'h1, 'h1, 'h0, 'h1}\n--------------------------------\nName       Type      Size  Value\n--------------------------------\nPacket     Packet    -     @1907\n  m_addr   integral  4     'h8  \n  m_wdata  integral  4     'he  \n  m_rdata  integral  4     'h4  \n  m_wr     integral  1     'h0  \n--------------------------------\nUVM_INFO testbench.sv(100) @ 0: uvm_test_top [unpack_test] packed m_bytes='{'h8e, 'h40}\n--------------------------------\nName       Type      Size  Value\n--------------------------------\nPacket     Packet    -     @1907\n  m_addr   integral  4     'h9  \n  m_wdata  integral  4     'he  \n  m_rdata  integral  4     'he  \n  m_wr     integral  1     'h1  \n--------------------------------\nUVM_INFO testbench.sv(105) @ 0: uvm_test_top [unpack_test] packed m_ints='{2666004480}\nUVM_INFO testbench.sv(109) @ 0: uvm_test_top [unpack_test] Start unpack\nUVM_INFO testbench.sv(109) @ 0: uvm_test_top [unpack_test] unpacked m_val1=0xd\n--------------------------------\nName       Type      Size  Value\n--------------------------------\nPacket     Packet    -     @1909\n  m_addr   integral  4     'hd  \n  m_wdata  integral  4     'h9  \n  m_rdata  integral  4     'h6  \n  m_wr     integral  1     'h1  \n--------------------------------\nUVM_INFO testbench.sv(113) @ 0: uvm_test_top [unpack_test] unpacked m_val2=0xd\n--------------------------------\nName       Type      Size  Value\n--------------------------------\nPacket     Packet    -     @1909\n  m_addr   integral  4     'h8  \n  m_wdata  integral  4     'he  \n  m_rdata  integral  4     'h4  \n  m_wr     integral  1     'h0  \n--------------------------------\nUVM_INFO testbench.sv(117) @ 0: uvm_test_top [unpack_test] unpacked m_val3=0xd\n--------------------------------\nName       Type      Size  Value\n--------------------------------\nPacket     Packet    -     @1909\n  m_addr   integral  4     'h9  \n  m_wdata  integral  4     'he  \n  m_rdata  integral  4     'he  \n  m_wr     integral  1     'h1  \n--------------------------------\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_report_server.svh(847) @ 0: reporter [UVM/REPORT/SERVER]",
                        "lang": "verilog"
                    },
                    {
                        "title": "Using do_pack/do_unpack",
                        "content": "Just like print, copy, and compare, pack and unpack also have user-definable hooks called do_pack and do_unpack.\n\nNotice do_unpack calls super.do_unpack(packer), mirroring how do_pack calls super.do_pack(packer). Calling the wrong super method here is an easy copy-paste mistake, and one that won't necessarily throw an error — it will just silently skip whatever the base class's unpack step was supposed to do.\n\nThe same set of tests shown above can be run with this class and will yield the same results.\n\nTry this example in a simulator:\n\nClick to try this example in a simulator!",
                        "code": "class Packet extends uvm_object;\n  rand bit [3:0] m_addr;\n  rand bit [3:0] m_wdata;\n  rand bit [3:0] m_rdata;\n  rand bit \t\t m_wr;\n\n  `uvm_object_utils(Packet)\n\n  // Define do_print, so that print method displays contents of this class\n  virtual function void do_print(uvm_printer printer);\n    super.do_print(printer);\n    printer.print_field_int(\"m_addr\", m_addr, $bits(m_addr), UVM_HEX);\n    printer.print_field_int(\"m_wdata\", m_wdata, $bits(m_wdata), UVM_HEX);\n    printer.print_field_int(\"m_rdata\", m_rdata, $bits(m_rdata), UVM_HEX);\n    printer.print_field_int(\"m_wr\", m_wr, $bits(m_wr), UVM_HEX);\n  endfunction\n\n  virtual function void do_pack(uvm_packer packer);\n    super.do_pack(packer);\n    packer.pack_field_int(m_addr, $bits(m_addr));\n    packer.pack_field_int(m_wdata, $bits(m_wdata));\n    packer.pack_field_int(m_rdata, $bits(m_rdata));\n                          packer.pack_field_int(m_wr, $bits(m_wr));  \n  endfunction\n\n  virtual function void do_unpack(uvm_packer packer);\n    super.do_unpack(packer);\n    m_addr = packer.unpack_field_int($bits(m_addr));\n    m_wdata = packer.unpack_field_int($bits(m_wdata));\n    m_rdata = packer.unpack_field_int($bits(m_rdata));\n                                      m_wr = packer.unpack_field_int($bits(m_wr));  \n  endfunction\n\n  function new(string name = \"Packet\");\n    super.new(name);\n  endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Common Mistakes",
                        "content": "Mistake #1: Treating the return value of unpack() as a field value\n\nAs shown above, unpack() returns the number of bits it consumed from the array — never a data field from the object. To read a field's value after unpacking, access the field itself (m_pkt.m_addr), not the function's return value.\n\nMistake #2: Packing and unpacking fields in different orders\n\nWrong: packing fields in the order m_addr, m_wdata, m_rdata, m_wr but unpacking as m_wdata, m_addr, m_rdata, m_wr Right: keep the exact same field order on both sides\n\nWhy? The packer has no concept of field names once the data is in the array — it is just a stream of bits. If the unpack order doesn't match the pack order, every field after the first mismatch reads the wrong bits.\n\nMistake #3: Calling super.do_pack() inside do_unpack() (or vice versa)\n\nEach hook must call its own counterpart in the base class — do_pack calls super.do_pack(packer), and do_unpack calls super.do_unpack(packer). Mixing them up compiles cleanly and runs without error, but silently breaks whatever base-class packing logic was supposed to run.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Practice Exercise",
                        "content": "A class has three fields: rand bit [7:0] header;, rand bit [15:0] payload;, and rand bit valid;. If you call pack() on an instance of this class, what value would unpack() later return when unpacking that same array?\n\nAdd up the bit widths of every field registered for packing — the return value has nothing to do with the field contents themselves.\n\n8 + 16 + 1 = 25. unpack() would return 25, since that's the total number of bits packed (and therefore the number read back out), regardless of what header, payload, or valid actually contain.",
                        "code": null,
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
                "id": "cv-uvm-24",
                "num": 24,
                "title": "UVM Object Compare",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "uvm_object has many common functions like print, copy and compare that are available to all its child classes and can be used out of the box if UVM automation macros are used inside the class definition. In a previous article, copy, do_copy and use of automation macros to print were discussed.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Using automation macros",
                        "content": "UVM automation macros can be used for automatic implementation of copy, print, compare and more. In this example, a class called Packet is defined with a variable called m_addr that is registered with automation macros `uvm_field_int to be included for all the default functions like print, copy, compare, etc. An object of this class is used inside another class Object which has a bunch of other variables of different data types that are also registered using appropriate macros. For example, m_bool is of enum type and is registered with `uvm_field_enum macro.\n\nLet us create a base class and create two objects obj1 and obj2, randomize both and print them. Then compare both objects to see what the result is. Then copy each variable from obj2 from obj1 including the nested class object of type Packet until the comparison errors are resolved.",
                        "code": "typedef enum {FALSE, TRUE} e_bool;\n\nclass Packet extends uvm_object;\n  rand bit[15:0] \tm_addr;\n  \n  virtual function string convert2string();\n    string contents;\n    contents = $sformatf(\"m_addr=0x%0h\", m_addr);\n  endfunction\n\n  `uvm_object_utils_begin(Packet)\n  \t`uvm_field_int(m_addr, UVM_DEFAULT)\n  `uvm_object_utils_end\n  \n  function new(string name = \"Packet\");\n    super.new(name);\n  endfunction\nendclass\n\nclass Object extends uvm_object;\n  rand e_bool \t\t\t\tm_bool;\n  rand bit[3:0] \t\t\tm_mode;\n  string \t\t\t\t\tm_name;\n  rand Packet \t\t\t\tm_pkt;\n  \n  function new(string name = \"Object\");\n    super.new(name);\n    m_name = name;\n    m_pkt = Packet::type_id::create(\"m_pkt\");\n    m_pkt.randomize();\n  endfunction\n  \n  `uvm_object_utils_begin(Object)\n  \t`uvm_field_enum(e_bool, m_bool, UVM_DEFAULT)\n  \t`uvm_field_int (m_mode, \t\tUVM_DEFAULT)\n  \t`uvm_field_string(m_name, \t\tUVM_DEFAULT)\n  \t`uvm_field_object(m_pkt, \t\tUVM_DEFAULT)\n  `uvm_object_utils_end\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "class base_test extends uvm_test;\n  `uvm_component_utils(base_test)\n  function new(string name = \"base_test\", uvm_component parent=null);\n    super.new(name, parent);\n  endfunction\n  \n  function void build_phase(uvm_phase phase);\n  \t// Create two objects, randomize them and print the contents\n    Object obj1 = Object::type_id::create(\"obj1\");\n    Object obj2 = Object::type_id::create(\"obj2\");\n    obj1.randomize();\n    obj1.print();\n    obj2.randomize();\n    obj2.print();\n    \n    _compare(obj1, obj2);\n   \n      `uvm_info(\"TEST\", \"Copy m_bool\", UVM_LOW)\n    obj2.m_bool = obj1.m_bool;\n        `uvm_info(\"TEST\", $sformatf(\"Obj2.print: %s\", obj2.convert2string()), UVM_LOW)\n    _compare(obj1, obj2);\n      \n      `uvm_info(\"TEST\", \"Copy m_mode\", UVM_LOW)\n    obj2.m_mode = obj1.m_mode;\n        `uvm_info(\"TEST\", $sformatf(\"Obj2.print: %s\", obj2.convert2string()), UVM_LOW)\n    _compare(obj1, obj2);\n    \n      `uvm_info(\"TEST\", \"Copy m_name\", UVM_LOW)\n    obj2.m_name = obj1.m_name;\n        `uvm_info(\"TEST\", $sformatf(\"Obj2.print: %s\", obj2.convert2string()), UVM_LOW)\n    _compare(obj1, obj2);\n      \n      `uvm_info(\"TEST\", \"Copy m_pkt.m_addr\", UVM_LOW)\n    obj2.m_pkt.m_addr = obj1.m_pkt.m_addr;\n    \t`uvm_info(\"TEST\", $sformatf(\"Obj2.print: %s\", obj2.convert2string()), UVM_LOW)\n    _compare(obj1, obj2);\n  endfunction\n  \n  function void _compare(Object obj1, obj2);\n    if (obj2.compare(obj1))\n      `uvm_info(\"TEST\", \"obj1 and obj2 are same\", UVM_LOW)\n    else\n      `uvm_info(\"TEST\", \"obj1 and obj2 are different\", UVM_LOW)\n  endfunction\nendclass\n\nmodule tb;\n\tinitial begin\n\t\trun_test(\"base_test\");\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Automation macros introduce a lot of additional code and is not generally recommended",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test base_test...\n----------------------------------\nName        Type      Size  Value \n----------------------------------\nobj1        Object    -     @1903 \n  m_bool    e_bool    32    TRUE  \n  m_mode    integral  4     'h9   \n  m_name    string    4     obj1  \n  m_pkt     Packet    -     @1905 \n    m_addr  integral  16    'h3cb6\n----------------------------------\n----------------------------------\nName        Type      Size  Value \n----------------------------------\nobj2        Object    -     @1907 \n  m_bool    e_bool    32    FALSE \n  m_mode    integral  4     'hf   \n  m_name    string    4     obj2  \n  m_pkt     Packet    -     @1908 \n    m_addr  integral  16    'h64c1\n----------------------------------\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_comparer.svh(351) @ 0: reporter [MISCMP] Miscompare for obj2.m_bool: lhs = FALSE : rhs = TRUE\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_comparer.svh(382) @ 0: reporter [MISCMP] 1 Miscompare(s) for object obj1@1903 vs. obj2@1907\nUVM_INFO testbench.sv(71) @ 0: uvm_test_top [TEST] obj1 and obj2 are different\nUVM_INFO testbench.sv(73) @ 0: uvm_test_top [TEST] Copy m_bool\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_comparer.svh(351) @ 0: reporter [MISCMP] Miscompare for obj2.m_mode: lhs = 'hf : rhs = 'h9\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_comparer.svh(382) @ 0: reporter [MISCMP] 1 Miscompare(s) for object obj1@1903 vs. obj2@1907\nUVM_INFO testbench.sv(78) @ 0: uvm_test_top [TEST] obj1 and obj2 are different\nUVM_INFO testbench.sv(80) @ 0: uvm_test_top [TEST] Copy m_mode\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_comparer.svh(351) @ 0: reporter [MISCMP] Miscompare for obj2.m_name: lhs = \"obj2\" : rhs = \"obj1\"\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_comparer.svh(382) @ 0: reporter [MISCMP] 1 Miscompare(s) for object obj1@1903 vs. obj2@1907\nUVM_INFO testbench.sv(85) @ 0: uvm_test_top [TEST] obj1 and obj2 are different\nUVM_INFO testbench.sv(87) @ 0: uvm_test_top [TEST] Copy m_name\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_comparer.svh(351) @ 0: reporter [MISCMP] Miscompare for obj2.m_pkt.m_addr: lhs = 'h64c1 : rhs = 'h3cb6\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_comparer.svh(382) @ 0: reporter [MISCMP] 1 Miscompare(s) for object obj1@1903 vs. obj2@1907\nUVM_INFO testbench.sv(92) @ 0: uvm_test_top [TEST] obj1 and obj2 are different\nUVM_INFO testbench.sv(94) @ 0: uvm_test_top [TEST] Copy m_pkt.m_addr\nUVM_INFO testbench.sv(97) @ 0: uvm_test_top [TEST] obj1 and obj2 are same\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_report_server.svh(847) @ 0: reporter [UVM/REPORT/SERVER]",
                        "lang": "verilog"
                    },
                    {
                        "title": "Using do_compare",
                        "content": "Another way is for the user to implement do_compare method inside the child class and compare the values of each variable and return the result. Note in the following example that uvm_object_utils_* macros are not used and hence the print() method we used above will not work as is. Instead another method called convert2string is implemented for both classes so that it returns the contents in a string format when called.\n\nJust like the way print calls do_print method, a compare calls the do_compare method and implementation of the function is all that is required to be done.\n\nUVM automation macros were used in the previous example and hence the print method implementation was already done and available to be used. However, when automation is not used, user has to implement either do_print or atleast fill the convert2string function so that contents can be printed. We have chosen to do the latter as evident in the code above. So convert2string function is called in a UVM info statement instead of calling print.\n\nThen compare the variables, copy each variable from obj1 into obj2 and keep comparing until both objects are the same.",
                        "code": "typedef enum {FALSE, TRUE} e_bool;\n\nclass Packet extends uvm_object;\n  rand bit[15:0] \tm_addr;\n  \n  virtual function string convert2string();\n    string contents;\n    contents = $sformatf(\"m_addr=0x%0h\", m_addr);\n    return contents;\n  endfunction\n\n  `uvm_object_utils(Packet)\n  virtual function bit do_compare(uvm_object rhs, uvm_comparer comparer);\n    bit res;\n    Packet _pkt;\n    \n    $cast(_pkt, rhs);\n    super.do_compare(_pkt, comparer);\n    \n    res = \tsuper.do_compare(_pkt, comparer) &\n\t\t\tm_addr == _pkt.m_addr;   \t\t\t\n    `uvm_info(get_name(), $sformatf(\"In Packet::do_compare(), res=%0b\", res), UVM_LOW)\n    return res;\n  endfunction\n  \n  function new(string name = \"Packet\");\n    super.new(name);\n  endfunction\nendclass\n\nclass Object extends uvm_object;\n  rand e_bool \t\t\t\tm_bool;\n  rand bit[3:0] \t\t\tm_mode;\n  string \t\t\t\t\tm_name;\n  rand Packet \t\t\t\tm_pkt;\n  \n  function new(string name = \"Object\");\n    super.new(name);\n    m_name = name;\n    m_pkt = Packet::type_id::create(\"m_pkt\");\n    m_pkt.randomize();\n  endfunction\n  \n  // This task is used to print contents\n  virtual function string convert2string();\n    string contents = \"\";\n    $sformat(contents, \"%s m_name=%s\", contents, m_name);\n    $sformat(contents, \"%s m_bool=%s\", contents, m_bool.name());\n    $sformat(contents, \"%s m_mode=0x%0h\", contents, m_mode);\n    $sformat(contents, \"%s %s\", contents, m_pkt.convert2string()); \n    return contents;\n  endfunction\n  \n  `uvm_object_utils(Object)\n  \n  // \"rhs\" does not contain m_bool, m_mode, etc since its a parent\n  // handle. So cast into child data type and access using child handle\n  // Copy each field from the casted handle into local variables\n  virtual function bit do_compare(uvm_object rhs, uvm_comparer comparer);\n    bit res;\n    Object _obj;\n    $cast(_obj, rhs);\n    res = \tsuper.do_compare(_obj, comparer) &\n    \t\tm_name == _obj.m_name &\n    \t\tm_mode == _obj.m_mode &\n    \t\tm_bool == _obj.m_bool &\n    \t\tm_pkt.do_compare(_obj.m_pkt, comparer);\n    \n    `uvm_info(get_name(), $sformatf(\"In Object::do_compare(), res=%0b\", res), UVM_LOW)\n    return res;\n  endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "class base_test extends uvm_test;\n  `uvm_component_utils(base_test)\n  function new(string name = \"base_test\", uvm_component parent=null);\n    super.new(name, parent);\n  endfunction\n  \n  function void build_phase(uvm_phase phase);\n    Object obj1 = Object::type_id::create(\"obj1\");\n    Object obj2 = Object::type_id::create(\"obj2\");\n    obj1.randomize();\n    `uvm_info(\"TEST\", $sformatf(\"Obj1.print: %s\", obj1.convert2string()), UVM_LOW)\n    obj2.randomize();\n    `uvm_info(\"TEST\", $sformatf(\"Obj2.print: %s\", obj2.convert2string()), UVM_LOW)\n    \n    _compare(obj1, obj2);\n   \n      `uvm_info(\"TEST\", \"Copy m_bool\", UVM_LOW)\n    obj2.m_bool = obj1.m_bool;\n        `uvm_info(\"TEST\", $sformatf(\"Obj2.print: %s\", obj2.convert2string()), UVM_LOW)\n    _compare(obj1, obj2);\n      \n      `uvm_info(\"TEST\", \"Copy m_mode\", UVM_LOW)\n    obj2.m_mode = obj1.m_mode;\n        `uvm_info(\"TEST\", $sformatf(\"Obj2.print: %s\", obj2.convert2string()), UVM_LOW)\n    _compare(obj1, obj2);\n    \n      `uvm_info(\"TEST\", \"Copy m_name\", UVM_LOW)\n    obj2.m_name = obj1.m_name;\n        `uvm_info(\"TEST\", $sformatf(\"Obj2.print: %s\", obj2.convert2string()), UVM_LOW)\n    _compare(obj1, obj2);\n      \n      `uvm_info(\"TEST\", \"Copy m_pkt.m_addr\", UVM_LOW)\n    obj2.m_pkt.m_addr = obj1.m_pkt.m_addr;\n    \t`uvm_info(\"TEST\", $sformatf(\"Obj2.print: %s\", obj2.convert2string()), UVM_LOW)\n    _compare(obj1, obj2);\n\n  endfunction\n  \n  function void _compare(Object obj1, obj2);\n    if (obj2.compare(obj1))\n      `uvm_info(\"TEST\", \"obj1 and obj2 are same\", UVM_LOW)\n    else\n      `uvm_info(\"TEST\", \"obj1 and obj2 are different\", UVM_LOW)\n  endfunction\nendclass\n\nmodule tb;\n\tinitial begin\n\t\trun_test(\"base_test\");\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test base_test...\nUVM_INFO testbench.sv(96) @ 0: uvm_test_top [TEST] Obj1.print:  m_name=obj1 m_bool=TRUE m_mode=0x9 m_addr=0x3cb6\nUVM_INFO testbench.sv(98) @ 0: uvm_test_top [TEST] Obj2.print:  m_name=obj2 m_bool=FALSE m_mode=0xf m_addr=0x64c1\nUVM_INFO testbench.sv(30) @ 0: reporter [m_pkt] In Packet::do_compare(), res=0\nUVM_INFO testbench.sv(77) @ 0: reporter [obj2] In Object::do_compare(), res=0\nUVM_INFO testbench.sv(128) @ 0: uvm_test_top [TEST] obj1 and obj2 are different\nUVM_INFO testbench.sv(102) @ 0: uvm_test_top [TEST] Copy m_bool\nUVM_INFO testbench.sv(104) @ 0: uvm_test_top [TEST] Obj2.print:  m_name=obj2 m_bool=TRUE m_mode=0xf m_addr=0x64c1\nUVM_INFO testbench.sv(30) @ 0: reporter [m_pkt] In Packet::do_compare(), res=0\nUVM_INFO testbench.sv(77) @ 0: reporter [obj2] In Object::do_compare(), res=0\nUVM_INFO testbench.sv(128) @ 0: uvm_test_top [TEST] obj1 and obj2 are different\nUVM_INFO testbench.sv(107) @ 0: uvm_test_top [TEST] Copy m_mode\nUVM_INFO testbench.sv(109) @ 0: uvm_test_top [TEST] Obj2.print:  m_name=obj2 m_bool=TRUE m_mode=0x9 m_addr=0x64c1\nUVM_INFO testbench.sv(30) @ 0: reporter [m_pkt] In Packet::do_compare(), res=0\nUVM_INFO testbench.sv(77) @ 0: reporter [obj2] In Object::do_compare(), res=0\nUVM_INFO testbench.sv(128) @ 0: uvm_test_top [TEST] obj1 and obj2 are different\nUVM_INFO testbench.sv(112) @ 0: uvm_test_top [TEST] Copy m_name\nUVM_INFO testbench.sv(114) @ 0: uvm_test_top [TEST] Obj2.print:  m_name=obj1 m_bool=TRUE m_mode=0x9 m_addr=0x64c1\nUVM_INFO testbench.sv(30) @ 0: reporter [m_pkt] In Packet::do_compare(), res=0\nUVM_INFO testbench.sv(77) @ 0: reporter [obj2] In Object::do_compare(), res=0\nUVM_INFO testbench.sv(128) @ 0: uvm_test_top [TEST] obj1 and obj2 are different\nUVM_INFO testbench.sv(117) @ 0: uvm_test_top [TEST] Copy m_pkt.m_addr\nUVM_INFO testbench.sv(119) @ 0: uvm_test_top [TEST] Obj2.print:  m_name=obj1 m_bool=TRUE m_mode=0x9 m_addr=0x3cb6\nUVM_INFO testbench.sv(30) @ 0: reporter [m_pkt] In Packet::do_compare(), res=1\nUVM_INFO testbench.sv(77) @ 0: reporter [obj2] In Object::do_compare(), res=1\nUVM_INFO testbench.sv(126) @ 0: uvm_test_top [TEST] obj1 and obj2 are same\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_report_server.svh(847) @ 0: reporter [UVM/REPORT/SERVER]",
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
                "id": "cv-uvm-25",
                "num": 25,
                "title": "UVM Object Print",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "A uvm_object is the base class from which all other UVM classes for data and components are derived. So it is logical for this class to have a common set of functions and features that can be availed by all its derived classes.\n\nSome of the common functions usually required is the ability to print its contents, copy contents from one object to another, and possibly compare two objects. UVM has many automation macros that get expanded into full code during compilation and implements these functions for all classes with ease.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Example",
                        "content": "The purpose of this example is to show how UVM automation macros can be used to print variable contents easily.\n\nA class called Object is derived from uvm_object thereby inheriting all functions within the parent class. A few variables of different data types are declared and an attempt is made to print the content of these variables after randomization.\n\nThere are different variations of `uvm_field_* macros for each data type and the variables have to be registered with the macro corresponding to its data type. UVM_DEFAULT indicates that the given variable should be used for all the default UVM automation macros implemented by the object which are copy, print, compare and record.\n\nTo test the above code, we'll simply use a base test class that will print contents of the object.",
                        "code": "typedef enum {FALSE, TRUE} e_bool;\nclass Object extends uvm_object;\n  \n\trand e_bool \t\t\t\tm_bool;\n  rand bit[3:0] \t\t\tm_mode;\n  rand byte \t\t\t\t\tm_data[4];\n  rand shortint \t\t\tm_queue[$];\n  string\t\t\t\t\t\t\tm_name;\n  \n  constraint c_queue { m_queue.size() == 3; }\n  \n  function new(string name = \"Object\");\n    super.new(name);\n    m_name = name;\n  endfunction\n  \n  // Each variable has to be registered with a macro corresponding to its data\n  // type. For example, \"int\" types use `uvm_field int, \"enum\" types use \n  // `uvm_field_enum, and \"string\" use `uvm_field_string\n  `uvm_object_utils_begin(Object)\n  \t`uvm_field_enum(e_bool, m_bool,\tUVM_DEFAULT)\n  \t`uvm_field_int (m_mode,\t\t\t\t\tUVM_DEFAULT)\n  \t`uvm_field_sarray_int(m_data,\t\tUVM_DEFAULT)\n  \t`uvm_field_queue_int(m_queue,\t\tUVM_DEFAULT)\n  \t`uvm_field_string(m_name,\t\t\t\tUVM_DEFAULT)\n  `uvm_object_utils_end\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "By default the UVM printer prints content of any object in a table format in which it specifies the name of the variable, data type of the variable, its size and the value. In the simulation output shown below, it can be seen that the object obj was randomized to the given values. It's quite interesting to note that even arrays (both static and queues) are printed with content of all their indices.",
                        "code": "class base_test extends uvm_test;\n  `uvm_component_utils(base_test)\n  function new(string name = \"base_test\", uvm_component parent=null);\n    super.new(name, parent);\n  endfunction\n  \n  // In the build phase, create an object, randomize it and print\n  // its contents\n  function void build_phase(uvm_phase phase);\n    Object obj = Object::type_id::create(\"obj\");\n    obj.randomize();\n    obj.print();\n  endfunction\nendclass\n\nmodule tb;\n\tinitial begin\n\t\trun_test(\"base_test\");\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "ncsim> run\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_root.svh(392) @ 0: reporter [UVM/RELNOTES] \n----------------------------------------------------------------\nUVM-1.2\n(C) 2007-2014 Mentor Graphics Corporation\n(C) 2007-2014 Cadence Design Systems, Inc.\n(C) 2006-2014 Synopsys, Inc.\n(C) 2011-2013 Cypress Semiconductor Corp.\n(C) 2013-2014 NVIDIA Corporation\n----------------------------------------------------------------\n\nUVM_INFO @ 0: reporter [RNTST] Running test base_test...\n-------------------------------------\nName       Type          Size  Value \n-------------------------------------\nobj        Object        -     @1899 \n  m_bool   e_bool        32    TRUE  \n  m_mode   integral      4     'hd   \n  m_data   sa(integral)  4     -     \n    [0]    integral      8     'h6c  \n    [1]    integral      8     'hf4  \n    [2]    integral      8     'he   \n    [3]    integral      8     'h58  \n  m_queue  da(integral)  3     -     \n    [0]    integral      16    'h3cb6\n    [1]    integral      16    'h9ae9\n    [2]    integral      16    'hd31d\n  m_name   string        3     obj   \n-------------------------------------\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_report_server.svh(847) @ 0: reporter [UVM/REPORT/SERVER] \n--- UVM Report Summary ---",
                        "lang": "verilog"
                    },
                    {
                        "title": "Using do_print()",
                        "content": "Using automation macros are not recommended these days because it introduces quite a lot of additional code and reduces simulator performance. Instead it is recommended to use the do_* callback hooks to implement the requirement. For example, to print the contents, the user can implement the function called do_print inside the derived object and not use the automation macro at all.\n\nThe do_print function is called by the print function by default and hence whatever is defined in do_print will be printed out. In this case we'll simply print three selected variables although you can print all variables as required.\n\nThis results in a very similar output like the one by `uvm_object_utils_*. Note that it prints only three variables because only three variables were implemented inside the do_print function.",
                        "code": "class Object extends uvm_object;\n  \n  rand e_bool \t\t\t\tm_bool;\n  rand bit[3:0] \t\t\tm_mode;\n  rand byte \t\t\t\tm_data[4];\n  rand shortint \t\t\tm_queue[$];\n  string \t\t\t\t\tm_name;\n  \n  constraint c_queue { m_queue.size() == 3; }\n  \n  function new(string name = \"Object\");\n    super.new(name);\n    m_name = name;\n  endfunction\n  \n  // Use \"do_print\" instead of the automation macro\n  `uvm_object_utils(Object)\n  \n  // This function simply uses the printer functions to print variables based on their\n  // data types. For example, \"int\" variables are printed using function \"print_field_int\"\n  virtual function void do_print(uvm_printer printer);\n    super.do_print(printer);\n    printer.print_string(\"m_bool\", m_bool.name());\n    printer.print_field_int(\"m_mode\", m_mode, $bits(m_mode), UVM_HEX);\n    printer.print_string(\"m_name\", m_name);\n  endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "ncsim> run\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_root.svh(392) @ 0: reporter [UVM/RELNOTES] \n----------------------------------------------------------------\nUVM-1.2\n(C) 2007-2014 Mentor Graphics Corporation\n(C) 2007-2014 Cadence Design Systems, Inc.\n(C) 2006-2014 Synopsys, Inc.\n(C) 2011-2013 Cypress Semiconductor Corp.\n(C) 2013-2014 NVIDIA Corporation\n----------------------------------------------------------------\nUVM_INFO @ 0: reporter [RNTST] Running test base_test...\n-------------------------------\nName      Type      Size  Value\n-------------------------------\nobj       Object    -     @1898\n  m_bool  string    4     TRUE \n  m_mode  integral  4     'hd  \n  m_name  string    3     obj  \n-------------------------------\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_report_server.svh(847) @ 0: reporter [UVM/REPORT/SERVER] \n--- UVM Report Summary ---",
                        "lang": "verilog"
                    },
                    {
                        "title": "Using sprint",
                        "content": "UVM objects have another function called sprint that returns the formatted contents in a string format. It is a substitute of the print function and can be used as shown in the example below. Assume the class declaration is the same as the first example shown above without the use of UVM automation macros.\n\nAs you can see, it produced the same table format as a string but prefixed by the custom text called \"Contents:\".",
                        "code": "class base_test extends uvm_test;\n  `uvm_component_utils(base_test)\n  function new(string name = \"base_test\", uvm_component parent=null);\n    super.new(name, parent);\n  endfunction\n  \n  function void build_phase(uvm_phase phase);\n    Object obj = Object::type_id::create(\"obj\");\n    obj.randomize();\n    \n    // Instead of calling print() function, let us call \"sprint\"\n    `uvm_info(get_type_name(), $sformatf(\"Contents: %s\", obj.sprint()), UVM_LOW)\n  endfunction\nendclass\n\nmodule tb;\n\tinitial begin\n\t\trun_test(\"base_test\");\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "ncsim> run\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_root.svh(392) @ 0: reporter [UVM/RELNOTES] \n----------------------------------------------------------------\nUVM-1.2\n(C) 2007-2014 Mentor Graphics Corporation\n(C) 2007-2014 Cadence Design Systems, Inc.\n(C) 2006-2014 Synopsys, Inc.\n(C) 2011-2013 Cypress Semiconductor Corp.\n(C) 2013-2014 NVIDIA Corporation\n----------------------------------------------------------------\n\nUVM_INFO @ 0: reporter [RNTST] Running test base_test...\nUVM_INFO testbench.sv(98) @ 0: uvm_test_top [base_test] Contents: \n-------------------------------\nName      Type      Size  Value\n-------------------------------\nobj       Object    -     @1902\n  m_bool  string    4     TRUE \n  m_mode  integral  4     'he  \n  m_name  string    3     obj  \n-------------------------------\n\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_report_server.svh(847) @ 0: reporter [UVM/REPORT/SERVER] \n--- UVM Report Summary ---",
                        "lang": "verilog"
                    },
                    {
                        "title": "Using convert2string",
                        "content": "There is another function available in uvm_object called convert2string that will return a string instead of printing the contents in a predefined format. This allows you to define the output into a format you like. For example, we can simply print contents into a single line as shown.\n\nIn the test class we will have to call convert2string instead of print or sprint. But remember that this function returns a string and hence it has to be within a `uvm_info or similar report macro.",
                        "code": "class Object extends uvm_object;\n  \n  rand e_bool \t\t\t\tm_bool;\n  rand bit[3:0] \t\t\tm_mode;\n  rand byte \t\t\t\tm_data[4];\n  rand shortint \t\t\tm_queue[$];\n  string \t\t\t\t\tm_name;\n  \n  constraint c_queue { m_queue.size() == 3; }\n  \n  function new(string name = \"Object\");\n    super.new(name);\n    m_name = name;\n  endfunction\n  \n  // Use \"do_print\" instead of the automation macro\n  `uvm_object_utils(Object)\n\n  virtual function string convert2string();\n    string contents = \"\";\n    $sformat(contents, \"%s m_name=%s\", contents, m_name);\n    $sformat(contents, \"%s m_bool=%s\", contents, m_bool.name());\n    $sformat(contents, \"%s m_mode=0x%0h\", contents, m_mode);\n    foreach(m_data[i]) begin\n      $sformat(contents, \"%s m_data[%0d]=0x%0h\", contents, i, m_data[i]);\n    end\n    return contents;\n  endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "class base_test extends uvm_test;\n  `uvm_component_utils(base_test)\n  function new(string name = \"base_test\", uvm_component parent=null);\n    super.new(name, parent);\n  endfunction\n  \n  function void build_phase(uvm_phase phase);\n    Object obj = Object::type_id::create(\"obj\");\n    obj.randomize();\n    `uvm_info(get_type_name(), $sformatf(\"convert2string: %s\", obj.convert2string()), UVM_LOW)\n  endfunction\nendclass\n\nmodule tb;\n\tinitial begin\n\t\trun_test(\"base_test\");\n\tend\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_root.svh(392) @ 0: reporter [UVM/RELNOTES] \n----------------------------------------------------------------\nUVM-1.2\n(C) 2007-2014 Mentor Graphics Corporation\n(C) 2007-2014 Cadence Design Systems, Inc.\n(C) 2006-2014 Synopsys, Inc.\n(C) 2011-2013 Cypress Semiconductor Corp.\n(C) 2013-2014 NVIDIA Corporation\n----------------------------------------------------------------\n\nUVM_INFO @ 0: reporter [RNTST] Running test base_test...\nUVM_INFO testbench.sv(99) @ 0: uvm_test_top [base_test] convert2string: \n m_name=obj m_bool=TRUE m_mode=0xe m_data[0]=0xf4 m_data[1]=0xe m_data[2]=0x58 m_data[3]=0xbd\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_report_server.svh(847) @ 0: reporter [UVM/REPORT/SERVER] \n--- UVM Report Summary ---",
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
                "id": "cv-uvm-26",
                "num": 26,
                "title": "UVM utility & field macros",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "UVM uses the concept of a factory where all objects are registered with it so that it can return an object of the requested type when required. The utility macros help to register each object with the factory.\n\nUVM also introduces a bunch of automation mechanisms for implementing print, copy, and compare objects and are defined using the field macros.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Utility Macros",
                        "content": "The utils macro is used primarily to register an object or component with the factory and is required for it to function correctly. It is required to be used inside every user-defined class that is derived from uvm_object which includes all types of sequence items and components.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Object Utility",
                        "content": "All classes derived directly from uvm_object or uvm_transaction require them to be registered using `uvm_object_utils macro. Note that it is mandatory for the new function to be explicitly defined for every class, and takes the name of the class instance as an argument.",
                        "code": "class ABC extends uvm_object;\n\n\t// Register this user defined class with the factory\n\t`uvm_object_utils(ABC)\n\t\n\tfunction new(string name = \"ABC\");\n\t\tsuper.new(name);\n\tendfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Component Utility",
                        "content": "All classes derived directly or indirectly from uvm_component require them to be registered with the factory using `uvm_component_utils macro. Note that it is mandatory for the new function to be explicitly defined for every class derived directly or indirectly from uvm_component and takes the name of the class instance and a handle to the parent class where this object is instantiated.",
                        "code": "class DEF extends uvm_component;\n\t\n\t// Class derived from uvm_component, register with factory\n\t`uvm_component_utils(DEF)\n\t\n\tfunction new(string name = \"DEF\", uvm_component parent=null);\n\t\tsuper.new(name, parent);\n\tendfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Macro Expansion: Behind the Scenes",
                        "content": "`uvm_object_utils eventually gets expanded into its *_begin and *_end form with nothing between the begin and end. *_begin implements other macros required for the correct functionality of UVM factory.\n\nIt can be seen from the code shown below that each macro expanded by *_begin implements some functions required for factory operation and performs the following steps.",
                        "code": "// Empty uvm_object_utils macro\n`define uvm_object_utils(T) \n  `uvm_object_utils_begin(T) \n  `uvm_object_utils_end\n\n`define uvm_object_utils_begin(T) \n   `m_uvm_object_registry_internal(T,T)     // Sub-macro #1\n   `m_uvm_object_create_func(T)  \t\t\t // Sub-macro #2\n   `m_uvm_get_type_name_func(T)  \t\t\t // Sub-macro #3\n   `uvm_field_utils_begin(T)\t\t\t\t // Sub-macro #4\n   \n// uvm_object_utils_end simply terminates a function started \n// somewhere in the middle\n`define uvm_object_utils_end \n     end \n   endfunction",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "In a similar way, `uvm_component_utils_* also has equivalent macros and function calls. Note that the create function for components take two arguments, name and parent, unlike that of an object.\n\nParatemerized classes should use `uvm_object_param_utils_* since they do not have to give a type during factory registration.",
                        "code": "// Sub-macro #1. Implement the functions \"get_type()\" and \"get_object_type()\"\n`define m_uvm_object_registry_internal(T,S) \n   typedef uvm_object_registry#(T,`\"S`\") type_id; \n   static function type_id get_type(); \n     return type_id::get(); \n   endfunction \n   virtual function uvm_object_wrapper get_object_type(); \n     return type_id::get(); \n   endfunction\n   \n// Sub-macro #2. Implement the function \"create()\"\n`define m_uvm_object_create_func(T) \n   function uvm_object create (string name=\"\"); \n     T tmp; \n`ifdef UVM_OBJECT_DO_NOT_NEED_CONSTRUCTOR \n     tmp = new(); \n     if (name!=\"\") \n       tmp.set_name(name); \n`else \n     if (name==\"\") tmp = new(); \n     else tmp = new(name); \n`endif \n     return tmp; \n   endfunction\n\n// Sub-macro #3. Implement the function \"get_type_name()\"\n`define m_uvm_get_type_name_func(T) \n   const static string type_name = `\"T`\"; \n   virtual function string get_type_name (); \n     return type_name; \n   endfunction \n\n// Sub-macro #4. Implement field automation macros\n`define uvm_field_utils_begin(T) \n   function void __m_uvm_field_automation (uvm_object tmp_data__, \n                                     int what__, \n                                     string str__); \n...",
                        "lang": "verilog"
                    },
                    {
                        "title": "Creation of class object",
                        "content": "It is recommended that all class objects are created by calling the type_id::create() method which is already defined using the macro `m_uvm_object_create_func. This makes any child class object to be created and returned using factory mechanism and promotes testbench flexibility and reusability.",
                        "code": "class ABC extends uvm_object;\n\t`uvm_object_utils(ABC)\n\t\n\tfunction new(string name = \"ABC\");\n\t\tsuper.new(name);\n\tendfunction\nendclass\n\nclass base_test extends uvm_test;\n\t`uvm_component_utils(base_test)\n\t\n\tfunction new(string name = \"base_test\", uvm_component parent=null);\n\t\tsuper.new(name, parent);\n\tendfunction\n\t\n\tvirtual function void build_phase(uvm_phase phase);\n\t\n\t\t// An object of class \"ABC\" is instantiated in UVM by calling\n\t\t// its \"create()\" function which has been defined using a macro\n\t\t// as shown above\n\t\tABC abc = ABC::type_id::create(\"abc_inst\");\n\tendfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Field Macros",
                        "content": "`uvm_field_* macros that were used between *_begin and *_end utility macros are basically called field macros since they operate on class properties and provide automatic implementations of core methods like copy, compare and print. This helps the user save some time from implementing custom do_copy, do_compare and do_print functions for each and every class. However, since these macros are expanded into general code, it may impact simulation performance and are generally not recommended.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Usage Example",
                        "content": "The `uvm_field_* corresponding to the data type of each variable should be used. For example, variables of type int, bit, byte should use `uvm_field_int, while variables of type string should use `uvm_field_string and so on. The macro accepts atleast two arguments: ARG and FLAG.\n\nThe field FLAG can take the following values and multiple values can be OR'ed together. A combination of these flags determine the kind of operations that are allowed to be done on the given variable.\n\nAlong with control on operations, `uvm_field_* macros also provide some control on the radix of the given variable which can take the following values. This value can be OR'ed with the operational flags listed in the table above. UVM_HEX is the default radix if none is specified.\n\nSee more examples of field macros in print, copy, and compare and pack",
                        "code": "class ABC extends uvm_object;\n\trand bit [15:0] \tm_addr;\n\trand bit [15:0] \tm_data;\n\t\n\t`uvm_object_utils_begin(ABC)\n\t\t`uvm_field_int(m_addr, UVM_DEFAULT)\n\t\t`uvm_field_int(m_data, UVM_DEFAULT)\n\t`uvm_object_utils_end\n\t\n\tfunction new(string name = \"ABC\");\n\t\tsuper.new(name);\n\tendfunction\nendclass",
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
                "id": "cv-uvm-27",
                "num": 27,
                "title": "UVM Field Macros",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "uvm_object is the one of the base classes from where almost all UVM classes are derived. Typically configuration classes and data objects are derived from this class and are passed to different testbench components during the course of a simulation. There is often a need to copy, compare and print values in these classes.\n\nUVM has included user-definable functions like do_copy() to copy, do_compare() to compare and do_print to print values in the class. But it can at times be an overhead to define all these methods for every class object created in the testbench. UVM comes with automation of core methods like copy, compare, pack, and print using `uvm_field_* macros. This avoids the need for a user implementation of the do_* methods for each function.\n\nThese macros expand into complicated code that may not be run-time efficient and are not generally recommended !\n\nThe `uvm_field_* macros are called inside `uvm_*_utils_begin and `uvm_*_utils_end macro blocks during factory registration.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "FLAG types",
                        "content": "All possible values for FLAG are shown in the table below. Multiple flags can be OR'ed together with the | operator to apply the required operations.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Print Options",
                        "content": "The following flags can be OR'ed together to print in the required format.",
                        "code": "typedef enum {FALSE, TRUE} e_bool;\n\nclass Child extends uvm_object;\n  string \t m_name;\n  logic[3:0] m_age;\n  \n  `uvm_object_utils_begin(Child)\n  \t`uvm_field_string \t(m_name, UVM_ALL_ON)\n  \t`uvm_field_int \t\t(m_age, UVM_ALL_ON)\n  `uvm_object_utils_end\n  \n  function new(string name=\"Child\");\n    super.new(name);\n  endfunction\nendclass\n\nclass Parent extends uvm_object;\n  \n  string \tm_name;\n  bit[15:0]\tm_age;\n  int \t\tm_numbers[$];\n  e_bool \tm_employed;\n  Child \tm_child;\n  \n  `uvm_object_utils_begin(Parent)\n  \t`uvm_field_enum\t\t\t(e_bool, m_employed, UVM_ALL_ON)\n  \t`uvm_field_int\t\t\t(m_age, UVM_ALL_ON)\n  \t`uvm_field_queue_int \t(m_numbers, UVM_ALL_ON)\n  \t`uvm_field_string \t\t(m_name, UVM_ALL_ON)\n  \t`uvm_field_object \t\t(m_child, UVM_ALL_ON)\n  `uvm_object_utils_end\n  \n  function new(string name=\"Parent\");\n    super.new(name);\n  endfunction\n  \nendclass\n\nmodule tb;\n  initial begin\n    Parent p = Parent::type_id::create(\"Parent\");\n    p.m_name = \"Joey\";\n    p.m_employed = TRUE;\n    p.m_age = 29;\n    p.m_numbers = '{1234, 5678, 9011};\n    p.m_child = new();\n    p.m_child.m_name = \"Joey Jr\";\n    p.m_child.m_age  = 1;\n    \n    p.print();\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "ncsim> run\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_root.svh(392) @ 0: reporter [UVM/RELNOTES] \n\n-----------------------------------------\nName          Type          Size  Value  \n-----------------------------------------\nParent        Parent        -     @1829  \n  m_employed  e_bool        32    TRUE   \n  m_age       integral      16    'h1d   \n  m_numbers   da(integral)  3     -      \n    [0]       integral      32    'h4d2  \n    [1]       integral      32    'h162e \n    [2]       integral      32    'h2333 \n  m_name      string        4     Joey   \n  m_child     Child         -     @1830  \n    m_name    string        7     Joey Jr\n    m_age     integral      4     'h1    \n-----------------------------------------\nncsim: *W,RNQUIE: Simulation is complete.",
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
                "id": "cv-uvm-28",
                "num": 28,
                "title": "UVM Phases",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "8 min read | Intermediate Level\n\nUVM phases are the backbone of every UVM testbench. They define a strict, ordered lifecycle that every testbench component goes through — from construction all the way to cleanup. Without phases, components could try to communicate before they've been built, or a driver could start sending stimulus before the scoreboard is ready to receive data. Understanding phases is essential before writing any real UVM testbench code.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "What Are UVM Phases?",
                        "content": "All testbench components derived from uvm_component participate in a pre-defined set of phases. A component cannot move to the next phase until every component in the testbench has finished the current one. This makes phases a global synchronization mechanism — ensuring that, for example, no component tries to connect a TLM port to another component that hasn't been constructed yet.\n\nPhases are implemented as callbacks. Each phase corresponds to either a function (zero simulation time) or a task (may consume simulation time). You override the relevant phase method in your component class to perform work during that phase.\n\nThe run_phase is the only top-level phase implemented as a task. All build, connect, and cleanup phases are functions and execute in zero simulation time.\n\nAll phases are grouped into three categories:",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Build Phase Order: Top-Down",
                        "content": "The build_phase executes top-down through the component hierarchy — the test runs first, then the environment, then agents, then drivers and monitors. build_phase and final_phase are the only two phases that run top-down; all other phases (including connect_phase and all cleanup phases) run bottom-up.\n\nThe reason is straightforward: a parent component must create its child components before those children can do anything. The test creates the environment, the environment creates the agent, and so on. If the agent tried to run its build_phase before the environment created it, the object simply wouldn't exist.\n\nHere's an example of a typical build_phase in an environment:\n\nNever create child components outside of build_phase. Creating them in connect_phase or later means they won't exist when other components try to connect to them.\n\nThe UVM topology printed by uvm_root reflects this hierarchy after build_phase completes:",
                        "code": "class my_env extends uvm_env;\n  `uvm_component_utils(my_env)\n\n  my_agent    agent;\n  my_scoreboard sb;\n\n  function void build_phase(uvm_phase phase);\n    super.build_phase(phase);\n\n    // Create child components — must happen in build_phase\n    agent = my_agent::type_id::create(\"agent\", this);\n    sb    = my_scoreboard::type_id::create(\"sb\", this);\n  endfunction\n\n  // Rest of the code (connect_phase, etc.)\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Q: A driver tries to connect its TLM port inside build_phase. What problem could occur?\n\nThe sequencer the driver wants to connect to may not have been created yet. TLM connections belong in connect_phase, which runs only after all components have finished build_phase.",
                        "code": "// Typical build output from $cast or uvm_top.print_topology()\n// uvm_test_top               [my_test]\n//   e0                       [my_env]\n//     a0                     [my_agent]\n//       d0                   [my_driver]\n//       m0                   [my_monitor]\n//       s0                   [uvm_sequencer]\n//     sb0                    [my_scoreboard]",
                        "lang": "verilog"
                    },
                    {
                        "title": "Connect Phase: Wiring the Testbench",
                        "content": "Once every component exists, connect_phase wires them together. This is where TLM ports are connected to exports, and where a driver's seq_item_port is connected to a sequencer's seq_item_export.",
                        "code": "class my_agent extends uvm_agent;\n  `uvm_component_utils(my_agent)\n\n  my_driver     drv;\n  my_monitor    mon;\n  uvm_sequencer #(my_transaction) seqr;\n\n  function void connect_phase(uvm_phase phase);\n    // Connect driver to sequencer — both must exist before this runs\n    drv.seq_item_port.connect(seqr.seq_item_export);\n  endfunction\n\n  // Rest of the code (build_phase, etc.)\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Why Verilog Testbenches Don't Need Phases",
                        "content": "A Verilog testbench is built entirely from modules, which are static constructs. All modules are elaborated before simulation time zero — every driver, monitor, and checker exists before a single clock edge occurs. There is no dynamic object creation, so there's no risk of one component referencing another before it exists.",
                        "code": "// Verilog: all components exist at time 0, no phases needed\nmodule tb_top;\n  dut      d0   (...);\n  driver   drvr (...);\n  monitor  mon0 (...);\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Why UVM Testbenches Require Phases",
                        "content": "UVM testbenches are built from class objects, not modules. A class object only exists after it has been constructed with new() or type_id::create(). This means it's entirely possible to reference a component handle that is still null if the construction hasn't happened yet.\n\nWithout a phase synchronization mechanism, a monitor could attempt to connect an analysis port to a scoreboard that hasn't been constructed yet, causing a null pointer access. Phases eliminate this entire class of bugs by enforcing a strict ordering: build everything first, then connect, then run.\n\nReusable verification IP (VIP) from different vendors can be plugged together reliably because they all follow the same phase contract. This is one of the key reasons UVM phases exist.",
                        "code": "class my_env extends uvm_env;\n  my_driver  drv;   // Just a handle — drv is null until build_phase constructs it\n  my_monitor mon;\n\n  function void build_phase(uvm_phase phase);\n    super.build_phase(phase);\n    drv = my_driver::type_id::create(\"drv\", this);   // Now drv is valid\n    mon = my_monitor::type_id::create(\"mon\", this);\n  endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Run-Time Sub-Phases",
                        "content": "The run_phase runs in parallel with a set of finer-grained run-time sub-phases. These sub-phases let you structure the stimulus sequence inside a component without using manual event synchronization. They run in the following order:\n\nMost testbenches only use run_phase for simplicity. Use the sub-phases when you need fine-grained control over reset sequencing, DUT configuration ordering, or when integrating VIP components from different vendors that expect specific sub-phases.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "What to Do in Each Phase",
                        "content": "The table below summarizes the entry conditions, typical tasks, and exit criteria for each phase.\n\nQ: You want to print the full UVM component hierarchy after all components are built and connected. Which phase is the best place to do this?\n\nend_of_elaboration_phase — at this point the entire environment has been assembled and all connections made, but simulation hasn't started yet. It's the standard place to call uvm_top.print_topology().",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Overriding a Phase: Example",
                        "content": "To perform work in a phase, simply override the corresponding method in your component. Here's a driver using both build_phase and run_phase:\n\nUVM phases are mandatory in any industrial verification environment. SoC verification teams often integrate VIP components from multiple vendors — each following the same phase protocol — making it possible to assemble complete testbenches without custom synchronization logic. Phases are especially critical in complex SoCs where the reset sequence, register initialization, and main stimulus windows each need to happen in a well-defined, coordinated order across dozens of components.",
                        "code": "class my_driver extends uvm_driver #(my_transaction);\n  `uvm_component_utils(my_driver)\n\n  virtual my_interface vif;\n\n  function void build_phase(uvm_phase phase);\n    super.build_phase(phase);\n\n    // Retrieve virtual interface from config database\n    if (!uvm_config_db #(virtual my_interface)::get(this, \"\", \"vif\", vif))\n      `uvm_fatal(\"NO_VIF\", \"Virtual interface not found in config_db\")\n  endfunction\n\n  virtual task run_phase(uvm_phase phase);\n    forever begin\n      seq_item_port.get_next_item(req);\n\n      // Drive transaction onto the interface\n      @(posedge vif.clk);\n      vif.addr <= req.addr;\n      vif.data <= req.data;\n\n      seq_item_port.item_done();\n    end\n  endtask\n\n  // Rest of the code (connect_phase, constructor, etc.)\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Common Mistakes",
                        "content": "Mistake #1: Connecting TLM ports in build_phase\n\nWrong: drv.seq_item_port.connect(seqr.seq_item_export); inside build_phase Right: Move all TLM connections to connect_phase Why? At the time a parent's build_phase runs, child components may not have been constructed yet. connect_phase is guaranteed to run only after the entire hierarchy is built.\n\nMistake #2: Forgetting super.build_phase(phase)\n\nWrong: Overriding build_phase without calling super.build_phase(phase) Right: Always call super.build_phase(phase) as the first line Why? The parent class's build_phase applies uvm_config_db settings to the component. Skipping it means configuration values won't be applied before you try to read them.\n\nMistake #3: Raising objections in a non-run-phase\n\nWrong: Calling phase.raise_objection(this) from build_phase or connect_phase Right: Objections are only meaningful in run_phase (or run-time sub-phases) Why? The objection mechanism controls when the run-time phases end. It has no effect in zero-time function phases and will generate warnings or unexpected behavior.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Practice Exercise",
                        "content": "Given a testbench with the structure test → env → agent → driver + monitor, write out the exact order in which build_phase and connect_phase are called across all five components. Remember: build_phase is top-down, all other phases are bottom-up.\n\nStart at uvm_test_top for build_phase. For connect_phase, start at the leaves (driver, monitor) and work upward.\n\nbuild_phase order (top-down):\n\nconnect_phase order (bottom-up):\n\nBottom-up ordering for connect_phase ensures that by the time a parent component tries to wire things together, all child components have already completed their own connection setup.",
                        "code": null,
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
                "id": "cv-uvm-29",
                "num": 29,
                "title": "UVM Objection",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "Imagine you have a team of engineers working on different parts of a complex system. Each engineer needs to ensure their part finishes its job before the entire system can be considered \"done.\" If one part is still active, the system shouldn't just shut down, potentially losing important data or missing critical checks. This analogy perfectly describes the challenge in hardware verification.\n\nA UVM testbench is made up of many independent components (like drivers, monitors, and sequences), all working concurrently to stimulate and verify a device under test (DUT). The big question is: How does the UVM testbench know when all its verification activity is truly complete and it's safe to end the simulation?\n\nThe answer lies in UVM objections. Instead of a central, all-knowing entity deciding when to stop, UVM uses a distributed, hierarchical \"objection\" system. Essentially, any active component or sequence can \"object\" to a specific simulation phase ending, signaling that it still has work to do. When all such objections are withdrawn, and no component or sequence is \"objecting\" anymore, the UVM framework knows it's safe to proceed to the next phase or terminate the simulation.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "How does objection work ?",
                        "content": "At its heart, the objection mechanism works like a shared counter. Each of UVM's \"task-based\" simulation phases (phases that consume simulation time, such as run_phase, reset_phase, main_phase, etc.) has its own built-in objection object. When a component or sequence begins an activity that needs to be completed within a specific phase, it \"raises an objection,\" effectively incrementing the counter for that phase. When the activity is finished, the component or sequence \"drops the objection,\" decrementing the counter.\n\nNote that the phase can only end when its objection counter reaches zero !\n\nThe primary class that orchestrates this is uvm_objection. It provides methods to raise_objection, drop_objection, and query the objection status. You don't usually create instances of uvm_objection yourself; rather, you interact with the built-in objection object provided by the uvm_phase object that is passed into your component's phase methods.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Objection Usecase",
                        "content": "Standard practice is to call raise_objection at the start of the run_phase, and drop_objection at the end.",
                        "code": "class my_test extends uvm_test;\n   `uvm_component_utils(my_test)\n\n   function new(string name=\"my_test\", uvm_component parent=null);\n     super.new(name, parent);\n   endfunction\n\n   // rest of the code\n\n   virtual task main_phase(uvm_phase phase);      \n      my_virtual_seq   m_vseq = my_virtual_seq::type_id::create(\"m_vseq\");\n\n      // Raise an objection\n      phase.raise_objection(this);\n      super.main_phase(phase);\n\n      // Start the virtual sequence/test stimulus\n      m_vseq.start(m_env.m_vseqr);\n\n      // Drop the objection once test stimulus is over\n      phase.drop_objection(this);\n   endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "raise_objection",
                        "content": "This method is called by a component or sequence (represented by this) to indicate that it has begun an activity that must complete before the current phase can end. The description argument is highly recommended, as it provides valuable debug information about why the objection was raised.",
                        "code": "// Note that this method belongs to uvm_phase class\nfunction void uvm_phase::raise_objection (uvm_object obj, string description=\"\", int count=1);",
                        "lang": "verilog"
                    },
                    {
                        "title": "drop_objection",
                        "content": "This method is called to signal that the activity for which the objection was raised has now completed. Every raise_objection must eventually be matched by a drop_objection to prevent simulation from hanging.",
                        "code": "// Note that this method belongs to uvm_phase class\nfunction void uvm_phase::drop_objection (uvm_object obj, string description=\"\", int count=1);",
                        "lang": "verilog"
                    },
                    {
                        "title": "set_drain_time",
                        "content": "Sometimes, even after all active components have dropped their objections and the counter hits zero, there might still be \"in-flight\" transactions or signals that need a few more clock cycles to propagate through the DUT and be observed by monitors or scoreboards. To accommodate this, UVM introduces drain time.\n\nWhen the objection count for a phase drops to zero, UVM waits for a specified drain_time to elapse before declaring the phase truly finished and propagating the \"all dropped\" condition up the hierarchy. If any objection is re-raised during this drain time, the drop is canceled, and the raise is not propagated.",
                        "code": "// Note that this is a method that belongs to the uvm_objection class\n function void set_drain_time (uvm_object obj=null, time drain);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Common Pitfalls",
                        "content": "The most common issue for beginners is a simulation that never ends. This almost always means a raise_objection was called without a corresponding drop_objection. If you enable automatic phase objections in a sequence that contains an infinite forever loop in its body task, the objection will never be dropped, leading to a hung simulation.\n\nObjections in UVM are used by active components (like tests and drivers) to control simulation phase completion, while passive components (like monitors) usually don’t need them. Since objections can be complex and hierarchical objections add overhead, they are best placed at the test case, top-level sequence, or scoreboard. A top-level sequence or test should raise an objection at the start of required activity and drop it when finished; the phase ends only after all objections are dropped.\n\nAdditional mechanisms include:\n\nBuilt-in objections exist for each phase, so users don’t need to instantiate them manually.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Component Objection Example",
                        "content": "UVM provides powerful command-line \"plusargs\" to trace objection activity without modifying your code:\n\nThe log shown below was run with +UVM_OBJECTION_TRACE as command line input. Notice that although the test sequence ended at 200ns, the simulation continued until the driver dropped the objection at 400ns.",
                        "code": "`include \"uvm_macros.svh\"\nimport uvm_pkg::*;\n\n// Let's create a driver that attempts to raise/drop objection\nclass my_driver extends uvm_driver;\n  `uvm_component_utils(my_driver)\n   \n  function new(string name=\"my_driver\", uvm_component parent=null);\n    super.new(name, parent);\n  endfunction\n  \n  virtual task run_phase(uvm_phase phase);    \n    uvm_objection  l_obj = phase.get_objection();\n    `uvm_info(get_type_name(), $sformatf(\"Driver started\"), UVM_MEDIUM)\n    \n    // Raise an objection in the driver just for illustration\n    // Usually the driver waits until it gets an item from the \n    // sequencer and does not have to raise any objections.\n    phase.raise_objection(this);\n    #400;\n    phase.drop_objection(this);\n    l_obj.display_objections();\n    \n    `uvm_info(get_type_name(), $sformatf(\"Driver ended\"), UVM_MEDIUM)\n  endtask  \nendclass\n\n// Let the driver be instantiated inside an agent\nclass my_agent extends uvm_agent;\n  `uvm_component_utils(my_agent)\n  \n  my_driver \tm_driver;\n  \n  function new(string name=\"my_agent\", uvm_component parent=null);\n    super.new(name, parent);\n  endfunction\n  \n  virtual function void build_phase(uvm_phase phase);\n    super.build_phase(phase);\n    \n    m_driver = my_driver::type_id::create(\"m_driver\", this);    \n  endfunction    \nendclass\n\n// Define a virtual sequencer to run the test stimulus/hold other handles\nclass my_vseqr extends uvm_sequencer;\n  `uvm_component_utils(my_vseqr)\n  function new(string name=\"my_vseqr\", uvm_component parent=null);\n    super.new(name, parent);\n  endfunction\n  \nendclass\n\n// Define an environment to hold the agent/virtual sequencer\nclass my_env extends uvm_env;\n  `uvm_component_utils(my_env)\n  \n  my_vseqr  \t \tm_vseqr;\n  my_agent \t \t\tm_agent;\n  \n  \n  function new(string name=\"my_env\", uvm_component parent=null);\n    super.new(name, parent);\n  endfunction\n  \n  virtual function void build_phase(uvm_phase phase);\n    super.build_phase(phase);\n    \n    m_agent = my_agent::type_id::create(\"m_agent\", this);    \n    m_vseqr = my_vseqr::type_id::create(\"m_seqr\", this);\n  endfunction\nendclass\n\n// Define the test stimulus that consumes time\nclass my_seq extends uvm_sequence;\n  `uvm_object_utils(my_seq)\n  function new(string name=\"my_seq\");\n    super.new(name);\n  endfunction\n  \n  virtual task body();\n    `uvm_info(get_type_name(), $sformatf(\"Sequence started\"), UVM_MEDIUM)\n    #200;\n    `uvm_info(get_type_name(), $sformatf(\"Sequence ended\"), UVM_MEDIUM)\n  endtask\nendclass\n\n// Define the test which starts the virtual sequence/test stimulus\nclass my_test extends uvm_test;\n  `uvm_component_utils(my_test)\n  \n  my_env \t\tm_env;\n  \n  function new(string name=\"my_test\", uvm_component parent=null);\n    super.new(name, parent);\n  endfunction\n  \n  virtual function void build_phase(uvm_phase phase);\n    super.build_phase(phase);\n    \n    m_env = my_env::type_id::create(\"m_env\", this);\n  endfunction\n\n  virtual task run_phase(uvm_phase phase);\n    my_seq l_seq = my_seq::type_id::create(\"my_seq\");\n\n    // Lets get a handle to the objection inorder to print stats\n    uvm_objection l_obj = phase.get_objection();\n    \n    super.run_phase(phase);    \n\n    // Let the test raise an objection and then display all objections\n    phase.raise_objection(this);\n    l_obj.display_objections();\n\n    l_seq.start(m_env.m_vseqr);\n    l_obj.display_objections();\n\n    phase.drop_objection(this);\n  endtask \n  \nendclass\n\n// Let a clock run forever in the testbench\nmodule tb;\n  reg clk;\n  \n  always #10 clk = ~clk;\n  \n  initial begin\n    clk = 0;\n    run_test(\"my_test\");\n  end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test my_test...\nUVM_INFO @ 0: run [OBJTN_TRC] Object uvm_test_top raised 1 objection(s): count=1  total=1\nUVM_INFO @ 0: run [OBJTN_TRC] Object uvm_top added 1 objection(s) to its total (raised from source object uvm_test_top): count=0  total=1\nUVM_INFO /xcelium23.09/tools/methodology/UVM/CDNS-1.2/sv/src/base/uvm_objection.svh(1072) @ 0: run [UVM/OBJ/DISPLAY] The total objection count is 1\n---------------------------------------------------------\nSource  Total   \nCount   Count   Object\n---------------------------------------------------------\n0       1       uvm_top\n1       1         uvm_test_top\n---------------------------------------------------------\n\nUVM_INFO testbench.sv(14) @ 0: uvm_test_top.m_env.m_agent.m_driver [my_driver] Driver started\nUVM_INFO @ 0: run [OBJTN_TRC] Object uvm_test_top.m_env.m_agent.m_driver raised 1 objection(s): count=1  total=1\nUVM_INFO @ 0: run [OBJTN_TRC] Object uvm_test_top.m_env.m_agent added 1 objection(s) to its total (raised from source object ): count=0  total=1\nUVM_INFO @ 0: run [OBJTN_TRC] Object uvm_test_top.m_env added 1 objection(s) to its total (raised from source object ): count=0  total=1\nUVM_INFO @ 0: run [OBJTN_TRC] Object uvm_test_top added 1 objection(s) to its total (raised from source object uvm_test_top.m_env.m_agent.m_driver): count=1  total=2\nUVM_INFO @ 0: run [OBJTN_TRC] Object uvm_top added 1 objection(s) to its total (raised from source object uvm_test_top.m_env.m_agent.m_driver): count=0  total=2\nUVM_INFO testbench.sv(82) @ 0: uvm_test_top.m_env.m_seqr@@my_seq [my_seq] Sequence started\nUVM_INFO testbench.sv(84) @ 200: uvm_test_top.m_env.m_seqr@@my_seq [my_seq] Sequence ended\nUVM_INFO /xcelium23.09/tools/methodology/UVM/CDNS-1.2/sv/src/base/uvm_objection.svh(1072) @ 200: run [UVM/OBJ/DISPLAY] The total objection count is 2\n---------------------------------------------------------\nSource  Total   \nCount   Count   Object\n---------------------------------------------------------\n0       2       uvm_top\n1       2         uvm_test_top\n0       1           m_env\n0       1             m_agent\n1       1               m_driver\n---------------------------------------------------------\n\nUVM_INFO @ 200: run [OBJTN_TRC] Object uvm_test_top dropped 1 objection(s): count=0  total=1\nUVM_INFO @ 200: run [OBJTN_TRC] Object uvm_top subtracted 1 objection(s) from its total (dropped from source object uvm_test_top): count=0  total=1\nUVM_INFO @ 400: run [OBJTN_TRC] Object uvm_test_top.m_env.m_agent.m_driver dropped 1 objection(s): count=0  total=0\nUVM_INFO /xcelium23.09/tools/methodology/UVM/CDNS-1.2/sv/src/base/uvm_objection.svh(1072) @ 400: run [UVM/OBJ/DISPLAY] The total objection count is 1\n---------------------------------------------------------\nSource  Total   \nCount   Count   Object\n---------------------------------------------------------\n0       1       uvm_top\n0       1         uvm_test_top\n0       1           m_env\n0       1             m_agent\n---------------------------------------------------------\n\nUVM_INFO testbench.sv(24) @ 400: uvm_test_top.m_env.m_agent.m_driver [my_driver] Driver ended\nUVM_INFO @ 400: run [OBJTN_TRC] Object uvm_test_top.m_env.m_agent.m_driver all_dropped 1 objection(s): count=0  total=0\nUVM_INFO @ 400: run [OBJTN_TRC] Object uvm_test_top.m_env.m_agent subtracted 1 objection(s) from its total (dropped from source object ): count=0  total=0\nUVM_INFO @ 400: run [OBJTN_TRC] Object uvm_test_top.m_env.m_agent subtracted 1 objection(s) from its total (all_dropped from source object ): count=0  total=0\nUVM_INFO @ 400: run [OBJTN_TRC] Object uvm_test_top.m_env subtracted 1 objection(s) from its total (dropped from source object ): count=0  total=0\nUVM_INFO @ 400: run [OBJTN_TRC] Object uvm_test_top.m_env subtracted 1 objection(s) from its total (all_dropped from source object ): count=0  total=0\nUVM_INFO @ 400: run [OBJTN_TRC] Object uvm_test_top subtracted 1 objection(s) from its total (dropped from source object uvm_test_top.m_env.m_agent.m_driver): count=0  total=0\nUVM_INFO @ 400: run [OBJTN_TRC] Object uvm_test_top subtracted 1 objection(s) from its total (all_dropped from source object uvm_test_top.m_env.m_agent.m_driver): count=0  total=0\nUVM_INFO @ 400: run [OBJTN_TRC] Object uvm_top subtracted 1 objection(s) from its total (dropped from source object uvm_test_top.m_env.m_agent.m_driver): count=0  total=0\nUVM_INFO @ 400: run [OBJTN_TRC] Object uvm_top subtracted 1 objection(s) from its total (all_dropped from source object uvm_test_top.m_env.m_agent.m_driver): count=0  total=0\nUVM_INFO /xcelium23.09/tools/methodology/UVM/CDNS-1.2/sv/src/base/uvm_objection.svh(1271) @ 400: reporter [TEST_DONE] 'run' phase is ready to proceed to the 'extract' phase\nUVM_INFO /xcelium23.09/tools/methodology/UVM/CDNS-1.2/sv/src/base/uvm_report_server.svh(847) @ 400: reporter [UVM/REPORT/SERVER] \n--- UVM Report Summary ---",
                        "lang": "verilog"
                    },
                    {
                        "title": "Sequence Objection Example",
                        "content": "There are two primary ways a sequence can raise an objection:",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Explicitly Raising an Objection within the Sequence's  Task",
                        "content": "This is the most common and explicit way for a sequence to manage objections. Within the body task of your UVM sequence, you can access the current phase object (either directly if it's a root sequence or through the get_starting_phase() method) and call its raise_objection() and drop_objection() methods.\n\nNote the following:",
                        "code": "// Define a sequence item (transaction) that your sequence will generate\nclass my_seq_item extends uvm_sequence_item;\n  rand bit [3:0] data;\n\n  `uvm_object_utils_begin (my_seq_item)\n    `uvm_field_int(data, UVM_ALL_ON)\n  `uvm_object_utils_end\n\n  function new (string name = \"my_seq_item\");\n    super.new(name);\n  endfunction\nendclass\n\n// Define a UVM sequence\nclass my_sequence extends uvm_sequence #(my_seq_item);\n  `uvm_object_utils (my_sequence) \n\n  rand int num_items = 5; // Number of items this sequence will generate\n  constraint c_num_items { num_items > 0; num_items <= 20; } \n\n  function new (string name = \"my_sequence\");\n    super.new(name);\n  endfunction\n\n  virtual task body();\n    // Get a handle to the phase in which this sequence was started.\n    // The 'starting_phase' member variable is automatically set when the sequence is started as a default sequence.\n    // If started manually, the test can set it explicitly.\n    uvm_phase phase = get_starting_phase();\n\n    // Check if the phase handle is valid before raising/dropping objections\n    if (phase != null) begin\n      // Raise an objection to prevent the current phase from ending\n      // 'this' refers to the current sequence instance\n      // The description \"Sequence generating stimulus\" helps with debugging \n      phase.raise_objection(this, \"Sequence generating stimulus\");\n    end\n\n    // Core activity of the sequence\n    repeat (num_items) begin\n      my_seq_item tx;\n      `uvm_do (tx) // Macro to create, randomize, and send a sequence item\n      #10; // Simulate some time passing between transactions\n    end\n\n    if (phase != null) begin\n      // Drop the objection, indicating that the sequence's activity in this phase is complete\n      phase.drop_objection(this, \"Sequence finished stimulus generation\");\n    end\n  endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test my_test...\nUVM_INFO testbench.sv(64) @ 0: uvm_test_top [my_test] my_test started\nUVM_INFO @ 0: run [OBJTN_TRC] Object l_seq raised 1 objection(s) (Sequence generating stimulus): count=1  total=1\nUVM_INFO @ 0: run [OBJTN_TRC] Object uvm_top added 1 objection(s) to its total (raised from source object l_seq, Sequence generating stimulus): count=0  total=1\nUVM_INFO @ 50: run [OBJTN_TRC] Object l_seq dropped 1 objection(s) (Sequence finished stimulus generation): count=0  total=0\nUVM_INFO @ 50: run [OBJTN_TRC] Object l_seq all_dropped 1 objection(s) (Sequence finished stimulus generation): count=0  total=0\nUVM_INFO @ 50: run [OBJTN_TRC] Object uvm_top subtracted 1 objection(s) from its total (dropped from source object l_seq, Sequence finished stimulus generation): count=0  total=0\nUVM_INFO @ 50: run [OBJTN_TRC] Object uvm_top subtracted 1 objection(s) from its total (all_dropped from source object l_seq, Sequence finished stimulus generation): count=0  total=0\nUVM_INFO /xcelium23.09/tools/methodology/UVM/CDNS-1.2/sv/src/base/uvm_objection.svh(1271) @ 50: reporter [TEST_DONE] 'run' phase is ready to proceed to the 'extract' phase\nUVM_INFO testbench.sv(69) @ 50: uvm_test_top [my_test] my_test ended\nUVM_INFO /xcelium23.09/tools/methodology/UVM/CDNS-1.2/sv/src/base/uvm_report_server.svh(847) @ 50: reporter [UVM/REPORT/SERVER] \n--- UVM Report Summary ---",
                        "lang": "verilog"
                    },
                    {
                        "title": "Automatic Objection Handling in Sequences",
                        "content": "UVM also provides an automatic mechanism to handle phase objections for sequences. This is particularly useful for simplifying common scenarios where a sequence's entire body task represents a single continuous activity.\n\nYou enable this by calling set_automatic_phase_objection(1) in the sequence's constructor. If the sequence is started with a valid starting_phase, UVM will automatically raise an objection at the beginning of the sequence's execution (before pre_start()) and drop it at the end (after post_start()).",
                        "code": "`include \"uvm_macros.svh\"\nimport uvm_pkg::*;\n\nclass my_seq_item extends uvm_sequence_item;\n  rand bit [3:0] data;\n\n  `uvm_object_utils_begin (my_seq_item)\n    `uvm_field_int(data, UVM_ALL_ON)\n  `uvm_object_utils_end\n\n  function new (string name = \"my_seq_item\");\n    super.new(name);\n  endfunction\nendclass\n\nclass my_auto_sequence extends uvm_sequence #(my_seq_item);\n  `uvm_object_utils (my_auto_sequence)\n\n  \n  rand int  \tnum_items = 5;\n  \n  constraint c_num_items { num_items > 0; num_items <= 20; }\n\n  function new (string name = \"my_auto_sequence\");\n    super.new(name);\n    // Enable automatic phase objection handling\n    // UVM will automatically raise an objection when the sequence starts\n    // and drop it when it finishes\n    \n    set_automatic_phase_objection(1);\n  endfunction\n\n  virtual task body();\n    `uvm_info (get_type_name(), $sformatf(\"sequence started\"), UVM_MEDIUM)\n\n    // No explicit raise_objection or drop_objection calls are needed here,\n    // as they are handled automatically by the base class\n    repeat (num_items) begin            \n      #10; // Simulate some time passing between transactions\n    end\n\n    `uvm_info (get_type_name(), $sformatf(\"sequence ended\"), UVM_MEDIUM)\n  endtask\nendclass  \n\nclass my_test extends uvm_test;\n  `uvm_component_utils(my_test)\n  \n  function new(string name=\"my_test\", uvm_component parent=null);\n    super.new(name, parent);\n  endfunction\n  \n  virtual task run_phase(uvm_phase phase);        \n    my_auto_sequence \tl_seq = my_auto_sequence::type_id::create(\"l_seq\");\n    \n    super.run_phase(phase);    \n    `uvm_info(get_type_name(), $sformatf(\"my_test started\"), UVM_MEDIUM)\n      \n    l_seq.set_starting_phase(phase);\n    l_seq.start(null);\n\n    `uvm_info(get_type_name(), $sformatf(\"my_test ended\"), UVM_MEDIUM)\n  endtask \n  \nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test my_test...\nUVM_INFO testbench.sv(57) @ 0: uvm_test_top [my_test] my_test started\nUVM_INFO @ 0: run [OBJTN_TRC] Object l_seq raised 1 objection(s) (automatic phase objection): count=1  total=1\nUVM_INFO @ 0: run [OBJTN_TRC] Object uvm_top added 1 objection(s) to its total (raised from source object l_seq, automatic phase objection): count=0  total=1\nUVM_INFO testbench.sv(34) @ 0: reporter@@l_seq [my_auto_sequence] sequence started\nUVM_INFO testbench.sv(42) @ 50: reporter@@l_seq [my_auto_sequence] sequence ended\nUVM_INFO @ 50: run [OBJTN_TRC] Object l_seq dropped 1 objection(s) (automatic phase objection): count=0  total=0\nUVM_INFO @ 50: run [OBJTN_TRC] Object l_seq all_dropped 1 objection(s) (automatic phase objection): count=0  total=0\nUVM_INFO @ 50: run [OBJTN_TRC] Object uvm_top subtracted 1 objection(s) from its total (dropped from source object l_seq, automatic phase objection): count=0  total=0\nUVM_INFO @ 50: run [OBJTN_TRC] Object uvm_top subtracted 1 objection(s) from its total (all_dropped from source object l_seq, automatic phase objection): count=0  total=0\nUVM_INFO /xcelium23.09/tools/methodology/UVM/CDNS-1.2/sv/src/base/uvm_objection.svh(1271) @ 50: reporter [TEST_DONE] 'run' phase is ready to proceed to the 'extract' phase\nUVM_INFO testbench.sv(62) @ 50: uvm_test_top [my_test] my_test ended\nUVM_INFO /xcelium23.09/tools/methodology/UVM/CDNS-1.2/sv/src/base/uvm_report_server.svh(847) @ 50: reporter [UVM/REPORT/SERVER] \n--- UVM Report Summary ---",
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
                "id": "cv-uvm-30",
                "num": 30,
                "title": "Creating user-defined phases",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "Creation of user-defined phases in UVM is a possibility although it may hinder in complete re-usability of the testbench. There are chances for components to go out of sync and cause errors related to null pointer handles. But, in case you decide that you have to use one for your project, keep reading.\n\nSome of the main steps to using a custom phase are:",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Create custom phase class",
                        "content": "",
                        "code": "class my_PHASE_phase extends uvm_task_phase;\nclass my_PHASE_phase extends uvm_topdown_phase;\nclass my_PHASE_phase extends uvm_bottomup_phase;",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Here's the complete example of a new phase class definition.",
                        "code": "task          exec_task (uvm_component comp, uvm_phase schedule);\nfunction void exec_func (uvm_component comp, uvm_phase schedule);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "class uvm_user_phase extends uvm_task_phase; \n\n   // Define the new method; set the name without \"uvm\" and \"phase\"\n   protected function new(string name=\"post_run\"); \n      super.new(name); \n   endfunction\n   \n   // Create a function to return the type name\n   static const string type_name = \"uvm_user_phase\"; \n   virtual function string get_type_name(); \n      return type_name; \n   endfunction\n   \n   // If this phase is a task that requires simulation time, you need to\n   // define \"exec_task\" method\n   virtual task exec_task(uvm_component comp, uvm_phase phase); \n      my_test TEST;\n      if ($cast(TEST, comp))\n         TEST.post_run_phase (phase);\n   endtask\n   \n   // Create a singleton object that can be accessed elsewhere\n   local static uvm_user_phase m_inst; \n   \n   // Create a method to return the singleton object\n   static function uvm_user_phase get(); \n      if(m_inst == null)\n         m_inst = new; \n      return m_inst; \n   endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Insert new phase into schedule",
                        "content": "UVM has a certain sequence of executing phases which you can review in Phases . We can insert the new phase in between any of the existing phases for which we have to obtain the handle to the UVM phase scheduler or domain. A domain is a phasing schedule node that represents and independent branch of the schedule. Individual phases are added to a domain which will be inserted into the required schedule.",
                        "code": "// Use this if you want to insert in between the common phases \n// build, connect, end_of_elaboration, start_of_simulation, run, extract, check, report, final\nuvm_domain dm = uvm_domain::get_common_domain ();\n\n// Use this if you want to insert in between run-time phases\n// reset, configure, main, shutdown\nuvm_domain dm = uvm_domain::get_uvm_domain ();",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "uvm_phase ph = dm.find (uvm_connect_phase::get());\n\n// Or whichever phase; substitute phase_name with actual phase name like build, reset, etc\nuvm_phase ph = dm.find (uvm_[phase_name]_phase::get());",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Here's the complete example and for our purpose it has been included as part of the testcase.",
                        "code": "dm.add (uvm_user_phase::get(), null, ph, null);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "class my_test extends uvm_test;\n\t...\n\tvirtual function void add_my_phase ();\n\t\tuvm_domain dm = uvm_domain::get_common_domain ();\n\t\tuvm_phase ph = dm.find (uvm_connect_phase::get());\n\t\tdm.add (uvm_user_phase::get(), null, ph, null);\n\tendfunction\n\t\n\tfunction new (string name = \"my_test\", uvm_component parent);\n\t\tsuper.new (name, parent);\n\t\tadd_my_phase();\n\tendfunction\n\t...\n\t\n\t// Define what needs to be done when the new phase is executed\n\tvirtual task user_phase (uvm_phase phase);\n\t\t`uvm_info (\"TEST\", $sformatf (\"In %s phase\", phase.get_name()), UVM_MEDIUM)\n\tendtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Note that user_phase was inserted after the connect_phase as expected.",
                        "code": "----------------------------------------------------------------\n(C) 2007-2013 Mentor Graphics Corporation\n(C) 2007-2013 Cadence Design Systems, Inc.\n(C) 2006-2013 Synopsys, Inc.\n(C) 2011-2013 Cypress Semiconductor Corp.\n----------------------------------------------------------------\nUVM_INFO @ 0: reporter [RNTST] Running test my_test...\nUVM_INFO ./tb_top.sv(42) @ 0: uvm_test_top [TEST] In build_phase\nUVM_INFO ./tb_top.sv(47) @ 0: uvm_test_top [TEST] In connect_phase\nUVM_INFO ./tb_top.sv(66) @ 0: uvm_test_top [TEST] In user_phase\nUVM_INFO ./tb_top.sv(57) @ 0: uvm_test_top [TEST] In run_phase\nUVM_INFO ./tb_top.sv(62) @ 0: uvm_test_top [TEST] In extract_phase\nUVM_INFO ./tb_top.sv(71) @ 0: uvm_test_top [TEST] In final_phase\n\n--- UVM Report catcher Summary ---\n\n\nNumber of demoted UVM_FATAL reports  :    0\nNumber of demoted UVM_ERROR reports  :    0\nNumber of demoted UVM_WARNING reports:    0\nNumber of caught UVM_FATAL reports   :    0\nNumber of caught UVM_ERROR reports   :    0\nNumber of caught UVM_WARNING reports :    0\n\n--- UVM Report Summary ---",
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
                "id": "cv-uvm-31",
                "num": 31,
                "title": "UVM Factory Override",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "5 min read | Intermediate Level\n\nThe UVM factory is a mechanism that improves testbench flexibility by allowing you to substitute any class object with an object of its derived type — without modifying existing instantiation code. This is especially valuable in large testbenches where the same component or transaction type is used across dozens of files.\n\nFor the factory to support substitution, every class that participates must be registered with the factory using the appropriate UVM utility macro. Once registered, the factory can intercept create() calls and return a different (but compatible) type in place of the originally requested one.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Why Not Just Use new()?",
                        "content": "SystemVerilog's new() is perfectly valid for object creation. The problem arises when a testbench grows large and a particular class — say, a protocol packet — is instantiated in dozens of places across drivers, monitors, scoreboards, and sequences. If you need to swap that packet class for an updated version, you'd need to find and replace every single new() call by hand.\n\nThe UVM factory solves this. All object creation goes through a central create() method, and override rules can be applied once at the test level to affect every instantiation site automatically.\n\nAlways use type_id::create() instead of new() for UVM components and objects. Using new() bypasses the factory entirely and makes your testbench impossible to override.\n\nHere is the contrast between the two approaches:\n\nIn the create() call, the first argument is the instance name and the second is the parent component handle (this). For objects (non-components), omit the second argument.",
                        "code": "// Using new() — factory cannot intercept this\nwb_pkt m_pkt = new(\"m_pkt\");\n\n// Using create() — factory can substitute type transparently\nwb_pkt m_pkt = wb_pkt::type_id::create(\"m_pkt\", this);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Factory Registration",
                        "content": "Before a class can participate in factory overrides, it must be registered using one of two UVM macros:\n\nPlace the registration macro immediately after the class declaration line, before the constructor. Forgetting to register a class is the most common reason factory overrides silently have no effect.",
                        "code": "// For classes that extend uvm_component (agent, driver, monitor, env, test)\n`uvm_component_utils(my_driver)\n\n// For classes that extend uvm_object (sequence_item, sequence, transaction)\n`uvm_object_utils(my_transaction)",
                        "lang": "verilog"
                    },
                    {
                        "title": "Factory Override Methods",
                        "content": "The UVM factory provides four override methods, split across two dimensions: type vs. instance, and by type handle vs. by string name.\n\nThese methods are called inside build_phase(), before any create() calls for the components you want to override. The factory processes overrides top-down during the build phase.\n\nThe _by_type variants are preferred over _by_name because they are checked at compile time. A typo in a string name will not be caught until simulation.",
                        "code": "// Replace ALL objects of original_type with override_type\nset_type_override_by_type(uvm_object_wrapper original_type,\n                          uvm_object_wrapper override_type,\n                          bit replace = 1);\n\nset_type_override_by_name(string original_type_name,\n                          string override_type_name,\n                          bit replace = 1);\n\n// Replace objects of original_type only at a specific instance path\nset_inst_override_by_type(uvm_object_wrapper original_type,\n                          uvm_object_wrapper override_type,\n                          string full_inst_path);\n\nset_inst_override_by_name(string original_type_name,\n                          string override_type_name,\n                          string full_inst_path);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Type Override",
                        "content": "A type override globally replaces every instance of a given type with the override type. Use this when you want to swap a class everywhere in the testbench in one shot.\n\nConsider a simple testbench with a base_agent and a derived child_agent. The environment creates a base_agent, but we want to transparently substitute it with child_agent from the test.",
                        "code": "// In base_env's build_phase — this code does NOT change\nm_agent = base_agent::type_id::create(\"m_agent\", this);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "After running, factory.print() confirms the override is active:",
                        "code": "// In the test's build_phase — override declared BEFORE env is created\nclass my_test extends uvm_test;\n  `uvm_component_utils(my_test)\n\n  base_env m_env;\n\n  virtual function void build_phase(uvm_phase phase);\n    uvm_factory factory = uvm_factory::get();\n    super.build_phase(phase);\n\n    // Override: everywhere base_agent is requested, return child_agent instead\n    set_type_override_by_type(base_agent::get_type(), child_agent::get_type());\n\n    factory.print(); // Confirm override is registered\n\n    m_env = base_env::type_id::create(\"m_env\", this);\n  endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "And the info message from the environment confirms the right object was created:",
                        "code": "Type Overrides:\n\n  Requested Type  Override Type\n  --------------  -------------\n  base_agent      child_agent",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Q: If you call set_type_override_by_type for base_agent after calling base_env::type_id::create(), will the override take effect?\n\nNo. Type overrides must be declared before the create() call for the component hierarchy that contains the overridden type. The factory applies overrides at construction time, not retroactively.",
                        "code": "UVM_INFO testbench.sv @ 0: uvm_test_top.m_env [AGENT] Factory returned agent of type=child_agent, path=uvm_test_top.m_env.m_agent",
                        "lang": "verilog"
                    },
                    {
                        "title": "Instance Override",
                        "content": "An instance override replaces a type only at a specific path in the testbench hierarchy, leaving all other instances of that type untouched. This is ideal when you want different behavior in one part of the testbench while keeping the rest unchanged.\n\nThe path string \"m_env.*\" is relative to the calling component. Wildcards (*) are supported to match any child hierarchy under the given path.",
                        "code": "// In the test's build_phase\nvirtual function void build_phase(uvm_phase phase);\n  uvm_factory factory = uvm_factory::get();\n  super.build_phase(phase);\n\n  // Override base_agent ONLY under m_env — other agents are unaffected\n  set_inst_override_by_type(\"m_env.*\",\n                             base_agent::get_type(),\n                             child_agent::get_type());\n\n  factory.print();\n\n  m_env = base_env::type_id::create(\"m_env\", this);\nendfunction",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Instance override paths are resolved relative to the calling component's full path. If you call set_inst_override_by_type from the test, the path \"m_env.*\" resolves to uvm_test_top.m_env.*. Getting this path wrong means the override silently has no effect.\n\nQ: You have three agents in your environment: m_agnt0, m_agnt1, m_agnt2. You want to replace the driver only inside m_agnt1. Should you use a type override or an instance override?\n\nInstance override. A type override would replace the driver in all three agents. Use set_inst_override_by_type(\"m_env.m_agnt1.*\", base_driver::get_type(), new_driver::get_type()) to target only that one agent.",
                        "code": "Instance Overrides:\n\n  Requested Type  Override Path         Override Type\n  --------------  --------------------  -------------\n  base_agent      uvm_test_top.m_env.*  child_agent",
                        "lang": "verilog"
                    },
                    {
                        "title": "Practical Example: Overriding Drivers and Sequences",
                        "content": "The following example shows a realistic test that applies multiple factory overrides simultaneously — a packet type override, a driver instance override for one agent, and a sequence instance override for another. The test uses preprocessor defines to select which override combination to apply.\n\nThe testbench structure looks like this:\n\nRunning this test produces the following factory configuration in the log:",
                        "code": "class feature_test extends base_test;\n  `uvm_component_utils(feature_test)\n\n  function new(string name, uvm_component parent = null);\n    super.new(name, parent);\n  endfunction\n\n  virtual function void build_phase(uvm_phase phase);\n    super.build_phase(phase);\n\n    // TYPE OVERRIDE: replace all eth_packet instances with eth_v2_packet\n    set_type_override_by_type(eth_packet::get_type(), eth_v2_packet::get_type());\n\n    // INSTANCE OVERRIDE: replace base_driver only inside m_agnt0\n    factory.set_inst_override_by_type(base_driver::get_type(),\n                                      eth_driver::get_type(),\n                                      {get_full_name(), \".m_top_env.m_agnt0.*\"});\n\n    // INSTANCE OVERRIDE: replace seq1 with seq2 only for m_agnt1's sequencer\n    set_inst_override_by_type(\"m_top_env.m_agnt1.m_seqr0.*\",\n                               seq1::get_type(),\n                               seq2::get_type());\n\n    factory.print(); // Always print to verify override configuration\n  endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "And the runtime log confirms that the correct types were created at each location:",
                        "code": "#### Factory Configuration (*)\n\nInstance Overrides:\n\n  Requested Type    Override Path                             Override Type\n  ----------------  ----------------------------------------  ---------------\n  base_driver #(T)  uvm_test_top.m_top_env.m_agnt0.*          eth_driver #(T)\n  seq1              uvm_test_top.m_top_env.m_agnt1.m_seqr0.*  seq2\n\nType Overrides:\n\n  Requested Type    Override Type\n  ----------------  ----------------------------------------\n  eth_packet        eth_v2_packet",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Notice that m_agnt0's driver was overridden to eth_driver, while m_agnt1 retained base_driver (only its sequence was overridden). All three agents use eth_v2_packet due to the global type override.\n\nAlways call factory.print() in your test's build_phase() during development. It displays a complete table of active overrides and all registered types, making it easy to verify that your override declarations are correct before chasing down unexpected runtime behavior.\n\nTry this example live:\n\nClick to try this example in a simulator!",
                        "code": "UVM_INFO @ 0: uvm_test_top.m_top_env.m_agnt0.m_drv0 [eth_driver #(T)] Driver running ...with packet of type : eth_v2_packet\nUVM_INFO @ 0: uvm_test_top.m_top_env.m_agnt1.m_drv0 [base_driver #(T)] Driver running ...with packet of type : eth_v2_packet\nUVM_INFO @ 0: uvm_test_top.m_top_env.m_agnt2.m_drv0 [eth_driver #(T)] Driver running ...with packet of type : eth_v2_packet",
                        "lang": "verilog"
                    },
                    {
                        "title": "Common Mistakes",
                        "content": "Mistake #1: Forgetting `uvm_component_utils or `uvm_object_utils\n\nWrong: Declaring a class without a registration macro, then attempting an override. Right: Always add the appropriate macro immediately after the class declaration. Why? Without registration, the factory has no knowledge of the type and cannot process any override that references it.\n\nMistake #2: Calling override after create()\n\nWrong: Setting set_type_override_by_type after the environment has already been created in build_phase. Right: Always declare all overrides at the top of build_phase(), before any create() calls for the affected hierarchy. Why? The factory evaluates overrides at the moment create() is called. A late override has no effect on already-created objects.\n\nMistake #3: Using a relative path that doesn't resolve correctly\n\nWrong: set_inst_override_by_type(\"m_agnt0.*\", ...) when calling from inside my_env, expecting it to match uvm_test_top.m_env.m_agnt0.*. Right: Use {get_full_name(), \".m_agnt0.*\"} to build the absolute path dynamically, or use factory.print() to verify what path was resolved. Why? Paths in instance overrides are resolved as absolute UVM hierarchy paths. A mismatch causes silent failure.\n\nMistake #4: Overriding with a non-derived type\n\nThe override type must be a subclass of the original type. The factory performs a compatibility check, but attempting to override with an unrelated type will cause a runtime error. Why? UVM uses polymorphism — the handle is still typed as the base class, so the object assigned to it must be assignment-compatible.",
                        "code": null,
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
                "id": "cv-uvm-32",
                "num": 32,
                "title": "Configure Components",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "We have seen in previous sessions that by instantiating the environment inside each testcase, we have the ability to tweak environment parameters to enable multiple scenarios. A test writer may not have the knowledge of how verification components are hooked-up with each other or how they interact with each other. Hence, it becomes important to hide those details and only present the test writer with ways to tweak the environment for each testcase and here are a few ways to do that.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Use Configurable Parameters",
                        "content": "In order to give maximum flexibility to the testbench, it is recommended to add certain knobs to verification components such that they can be controlled from a testcase. Parameters that affect how the testbench is constructed or behaves, can be made a standard across different testbench structures:\n\nOther design specific configurations such as the ones below can also be parameterized.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "UVM Configuration Mechanism",
                        "content": "Imagine that there's an internal 2-column table within UVM where the first column stores a variable name, and the second column stores the value for that particular variable. If all the components in the environment can access the table, then it becomes very easy to pass information between them. For example, the test component can store a virtual interface variable which can then be accessed by the driver and monitor for their own use. This is the mechanism implemented via uvm_config_db and uvm_resource_db.\n\nSometimes, we do not want all the components to access the table. For example, an analog interface need not be passed to an AHB driver. Such restrictions are put in place by the hierarchical path in uvm_config_db. It essentially makes the object available to whatever is specified in the path. If the path contains a single element, then only that particular element will be able to retrieve the object by using uvm_config_db::get() method.\n\nNote that uvm_config_db is a type specific configuration mechanism that offers a way to specify a hierachical path to control which components can access the database object.\n\nIn the first example above, only those components below wbSlaves[0] can get the slave_id from the database. All others will result in an error, since the object is not visible to them. The second example shows how a virtual interface can be stored inside the database which is made available to all components beneath the top-level test component. uvm_resource_object is used in the final example to show how data can be made avaialable for access by any object anywhere in the hierarchy.",
                        "code": "uvm_config_db #(int) :: set (this, \"*.wbSlaves[0]\", \"slave_id\", 0);\nuvm_config_db #(virtual dut_if)::set (null, \"uvm_test_top\", \"dut_if\", dut_if1);\n\nuvm_resource_db #(myObj) :: set (\"test\", \"shared_config\", data, this);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Use a Configuration Class",
                        "content": "You can also put in all the configuration related tweaks and variables inside a separate class, and pass the class object via uvm_config_db to the database, and allow a hierarchical path that allows the object to trickle down to each level. For example, the configuration object can be set into the database at the test top level, which can be retrieved by the environment and passed to other agents and components in the same way.\n\nThe advantage to creating a class is that you can derive future versions of the class by inheritance and also randomize the variables and constrain them appropriately for valid scenarios.",
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
                "id": "cv-uvm-33",
                "num": 33,
                "title": "Understanding the resource database",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "What is a resource database ?",
                        "content": "At its core, the UVM resource database is a global, centralized repository for sharing information across different parts of your verification environment. Think of it as a bulletin board or a shared library where any component in your testbench can \"post\" (set) information and any other component can \"read\" (get) that information.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "How is the database accessed ?",
                        "content": "The database is primarily accessed through two parameterized classes:",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "What is a resource ?",
                        "content": "A resource is a parameterized container that holds any arbitrary data. This data can be SystemVerilog built-in types (like int or bit), handles to class objects, queues, lists, or even virtual interfaces.\n\nResources let you set up components, give data to sequences, or share information between different parts of the testbench. They are stored with scope, so you can control which parts of the testbench can see them. You can put any type of data into the resource database, and other components can pick it up later during simulation, which makes things much easier.\n\nA resource primarily has the following fields :",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Structure of the resource database",
                        "content": "The resource database (uvm_resource_pool) is like a storage area where resources are kept. It organizes them in two ways—by name and by type. Each name or type can have several resources stored in a list. Every resource also has a scope, which is like a rule that decides where in the testbench it can be seen or used. This gives you good control over who can access it. The database is global and has only one copy, so you can reach it from anywhere in your UVM environment.\n\nMultiple resources with the same name/type are stored in a queue and hence those which were pushed in earlier have more precedence over those placed later. In the image above, if a request to retrieve an item of type string is made, the queue is traversed from front to back, and first ocurrence of an object of string type will be returned. Now, consider the case where items 2(red) and 3(blue) in the queue have the same scope, and a get_by_type() method is called for that particular scope. Then item 2(red) will be returned since that sits earlier in the queue.\n\nResources are added to the pool by calling set, and they are retrieved from the pool by get_by_name() or get_by_type().  Another interesting feature is that the resource pool/database contains a history of gets. Whenever a component uses the above methods to retrieve an object, it will be recorded (both successful and failed gets), which can be dumped at the end of simulation. This can be a very good tool during debug.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Need for resource database",
                        "content": "The UVM resource database, particularly through uvm_config_db, addresses several critical challenges in modern hardware verification:",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Example #1 : Passing virtual interface",
                        "content": "This is perhaps the most common and vital use case. In your top-level SystemVerilog module (which instantiates the DUT and the UVM testbench), you declare your physical interfaces. You then pass a virtual interface handle for these physical interfaces into the UVM configuration database.\n\nIn this example, ubus_if is a SystemVerilog interface, and vif() is an instance of it. The set() call makes the vif handle available globally. Later, in a driver or monitor component within your UVM testbench, you can retrieve this virtual interface handle.",
                        "code": "// In your top-level SystemVerilog module (e.g., tb_top.sv)\nmodule tb_top;\n  import uvm_pkg::*;\n  import ubus_pkg::*;\n\n  ubus_if vif(); // SystemVerilog interface to the DUT\n\n  dut_dummy dut(vif.sig_request, ..., vif.sig_error); // DUT instance\n\n  initial begin\n    automatic uvm_coreservice_t cs_ = uvm_coreservice_t::get();\n    // Set the virtual interface in the global configuration database\n    uvm_config_db#(virtual ubus_if)::set(cs_.get_root(), \"*\", \"vif\", vif);\n    run_test();\n  end\n  // ... clock and reset generation ...\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Read more on UVM config database !",
                        "code": "// In a UVM driver or monitor class (e.g., simple_driver)\nclass simple_driver extends uvm_driver #(simple_item);\n  simple_item s_item;\n  virtual dut_if vif; // Declare a local virtual interface handle\n\n  `uvm_component_utils(simple_driver)\n  function new (string name = \"simple_driver\", uvm_component parent);\n    super.new(name, parent);\n  endfunction : new\n\n  function void build_phase(uvm_phase phase);\n    super.build_phase(phase);\n\n    // Retrieve the virtual interface from the configuration database\n    if (!uvm_config_db#(virtual dut_if)::get(this, \"\", \"vif\", vif)) begin\n      `uvm_fatal(\"NOVIF\", {\"virtual interface must be set for: \", get_full_name(), \".vif\"});\n    end\n  endfunction : build_phase\n\nendclass : simple_drive",
                        "lang": "verilog"
                    },
                    {
                        "title": "Example #2: Setting a configuration value",
                        "content": "You can also store simple configuration values like shown in the example below.\n\nThis shows how a test can set a global transaction_count (visible to all components due to \"*\" scope), and a component can retrieve it, providing a default if not set.",
                        "code": "// Setting an integer configuration value in a test\nclass my_test extends uvm_test;\n  `uvm_component_utils(my_test)\n\n  function void build_phase(uvm_phase phase);\n    super.build_phase(phase);\n    uvm_config_db#(int)::set(this, \"*\", \"transaction_count\", 1000);\n  endfunction\n\nendclass\n\n// Retrieving the configuration value in a component\nclass my_component extends uvm_component;\n  `uvm_component_utils(my_component)\n\n  int num_transactions;\n\n  function void build_phase(uvm_phase phase);\n    super.build_phase(phase);\n\n    if (!uvm_config_db#(int)::get(this, \"\", \"transaction_count\", num_transactions)) begin\n      num_transactions = 500; // Default value if not found\n    end\n\n    `uvm_info(get_type_name(), $sformatf(\"Configured with %0d transactions\", num_transactions), UVM_LOW);\n  endfunction\n\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Example #3: Disabling register tests",
                        "content": "The uvm_resource_db is often used for settings that aren't strictly hierarchical. For instance, in the UVM Register Layer, you might want to disable built-in tests for specific registers.\n\nThis example uses uvm_config_db::set to mark a register block (and all sub-registers, indicated by \".*\") as NO_REG_TESTS. This allows predefined register sequences to skip testing that particular block, preventing unintended side effects (e.g., writing to a clock control register).",
                        "code": "// In a test or environment, to disable tests for a specific register block\nuvm_config_db#(bit)::set(this, {regmodel.blk.get_full_name(),\".*\"}, \"NO_REG_TESTS\", 1);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Limitations of SystemVerilog",
                        "content": "Without the UVM resource database, plain SystemVerilog faces major challenges:",
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
                "id": "cv-uvm-34",
                "num": 34,
                "title": "UVM config database",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "Imagine your verification environment as a complex building, with many different rooms (components) and people (objects) needing to share specific instructions or tools. Hardcoding every instruction or passing every tool directly can quickly become a tangled mess, especially if the building's layout changes. This is where the uvm_config_db comes in.\n\nThe uvm_config_db is a global, centralized database designed to share information across your UVM testbench. It's built as a convenience interface on top of the more general uvm_resource_db, specifically tailored to simplify the configuration of uvm_component instances.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "What is uvm_config_db ?",
                        "content": "It's a parameterized class, meaning you specify the type of information you want to store or retrieve using #() syntax, for example, uvm_config_db#(int) for an integer, or uvm_config_db#(virtual my_if) for a virtual interface. This parameterization makes the database type-safe, preventing common errors from mixing up different data types.\n\nNote that all the functions are static and must be called using the :: scope operator.\n\nSuch a configuration database allows us to store different configuration settings under different names that could potentially configure testbench components when required without modifying the actual testbench code. For example, to turn on functional coverage for an agent, we would simply have to give the path to that agent and set a variable within the configuration database to value 1. The agent could check for the value under this variable and start collecting coverage if it is turned on.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "set()",
                        "content": "Note the following:\n\nUse this static function of the class uvm_config_db to set a variable in the configuration database. In the example below, set() function will set a variable of name cov_enable at the path uvm_test_top.m_env.m_apb_agent with value 1.",
                        "code": "static function void set (  uvm_component cntxt,\n\t                            string        inst_name,\n\t                            string        field_name,\n\t                            T             value);\n\n    // Calling set method\n    uvm_config_db#(type T)::set(uvm_component cntxt, string inst_name, string field_name, T value);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Use of set() will create a new or update an existing configuration setting for field_name in inst_name from cntxt. The setting is made at cntxt with the full scope of the set being {cntxt, \".\", inst_name}. If cntxt is null, then the complete scope of getting the information will be provided by inst_name.",
                        "code": "virtual function void build_phase (uvm_phase phase);\n\t\t...\n\t\tuvm_config_db #(int) :: set (null, \"uvm_test_top.m_env.m_apb_agent\", \"cov_enable\", 1);\n\t\t...\n\tendfunction",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Note that in the last example the cntxt is this, and will be substituted by the path to the current component which in this case is \"uvm_test_top.m_env.m_apb_agent\". As explained above the full scope becomes \"uvm_test_top.m_env.m_apb_agent.*\"",
                        "code": "// Set virtual interface handle under name \"apb_vif\" available to all components below uvm_test_top, indicated by the *\n\tuvm_config_db #(virtual apb_if) :: set (null, \"uvm_test_top.*\", \"apb_vif\", apb_if);   \n\t\n\t// Set an int variable to turn on coverage collection for all components under m_apb_agent\n\tuvm_config_db #(int) :: set (null, \"uvm_test_top.m_env.m_apb_agent.*\", \"cov_enable\", 1);\n\t\n\t// Consider you are in agent's build_phase then you may achieve the same effect by\n\tuvm_config_db #(int) :: set (this, \"*\", \"cov_enable\", 1);",
                        "lang": "verilog"
                    },
                    {
                        "title": "get()",
                        "content": "Note the following:\n\nUse this static function to get the value of variable given in field_name from the configuration database. Remember that the value will be returned only if the scope is true. For example, if you had set a variable by field_name m_cfg at scope \"uvm_test_top.m_env.m_func_cov\", then you have to give the same scope or a scope that is true for the expression, to retrieve the value under field_name. cntxt is the starting search concatenated with inst_name gives the entire scope.",
                        "code": "static function bit get (  uvm_component cntxt,\n                               string        inst_name,\n                               string        field_name,\n                       inout   T             value);\n\n    // Calling get method\n    uvm_config_db#(type T)::get(uvm_component cntxt, string inst_name, string field_name, inout T value);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "// Get virtual interface handle under name \"apb_vif\" into local virtual interface handle at m_env level\n    // Check return type and throw an error if not found\n\tif (!uvm_config_db #(virtual apb_if) :: get (this, \"*\", \"apb_vif\", apb_if))\n       `uvm_error(get_type_name(), \"NOVIF: Did not find apb_if !\"))\n\t\n\t// Get int variable fails because no int variable found in given scope\n    // Discard return value - not recommended - its best to throw an error or warning if not found\n\tuvm_config_db #(int) :: get (null, \"uvm_test_top\", \"cov_enable\", cov_var);",
                        "lang": "verilog"
                    },
                    {
                        "title": "exists()",
                        "content": "Checks if a value for field_name is available in inst_name, using component cntxt as the starting point. If the field_name does not exist at a given scope, the function will return a zero. The spell_chk arg can be set to 1 to turn spell checking on if it is expected that the field should exist in the database.",
                        "code": "static function bit exists (  uvm_component cntxt,\n\t                              string        inst_name,\n\t                              string        field_name,\n\t                              bit           spell_chk);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "// Check if interface handle exists at the given scope\n\tif (! uvm_config_db #(virtual apb_if) :: exists (this, \"*\", \"apb_vif\"))\n\t\t`uvm_error (\"VIF\", \"Could not find an interface handle\", UVM_MEDIUM)",
                        "lang": "verilog"
                    },
                    {
                        "title": "wait_modified()",
                        "content": "Use of this task will block execution of statements following this until the configuration setting named in field_name specified at scope {cntxt.inst_name} is changed.",
                        "code": "static task wait_modified ( uvm_component cntxt,\n\t                            string        inst_name,\n\t                            string        field_name);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "class my_agent extends uvm_agent;\n\t\n\t\tvirtual task run_phase (uvm_phase phase);\n\t\t\t...\n\t\t\t// Waits until loopCount variable gets a new value\n\t\t\tuvm_config_db #(int) :: wait_modified (this, \"\", \"loopCount\");\n\t\tendtask\n\tendclass\n\t\n\tclass my_env extends uvm_env;\n\t\n\t\tmy_agent m_apb_agent;\n\t\t\n\t\tvirtual task main_phase (uvm_phase phase);\n\t\t\t...\n\t\t\t// Update loopCount variable in database\n\t\t\tfor (int i = 0; i < N; i++) begin\n\t\t\t\t...\n\t\t\t\tuvm_config_db #(int) :: set (this, \"m_apb_agent\", \"loopCount\", i);\n\t\t\tend\n\t\tendtask\n\tendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Convenience tasks",
                        "content": "There are a few typedef aliases for the following parameterized versions of uvm_config_db.",
                        "code": "typedef  uvm_config_db #(uvm_bitstream_t)     uvm_config_int;\n\ttypedef  uvm_config_db #(string)              uvm_config_string;\n\ttypedef  uvm_config_db #(uvm_object)          uvm_config_object;\n\ttypedef  uvm_config_db #(uvm_object_wrappet)  uvm_config_wrapper;",
                        "lang": "verilog"
                    },
                    {
                        "title": "Use Configuration Objects, Not Bare Types",
                        "content": "Instead of storing individual ints or strings directly in the uvm_config_db, it's best practice to group related configuration parameters into a dedicated \"configuration object\" (a class derived from uvm_object). This avoids name collisions and improves organization and reusability.\n\nThen, set this configuration object in a higher-level component (e.g., your uvm_env or uvm_test):",
                        "code": "// my_agent_config.svh\nclass my_agent_config extends uvm_object;\n  // `uvm_object_utils is used for factory registration [3-5]\n  `uvm_object_utils(my_agent_config) \n\n  int num_transactions = 10;  // Number of transactions to generate\n  bit enable_coverage = 1;    // Enable/disable coverage for this agent\n  virtual my_bus_if vif;      // Virtual interface handle (see point 2)\n\n  function new(string name = \"my_agent_config\");\n    super.new(name);\n  endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Finally, retrieve this object in the target component (e.g., my_agent):",
                        "code": "// In my_env.sv (or my_test.sv)\nclass my_env extends uvm_env;\n  `uvm_component_utils(my_env)\n              \n  my_agent m_agent;\n  my_agent_config m_cfg;\n\n  ...               \n\n  function void build_phase(uvm_phase phase);\n    super.build_phase(phase);\n    m_cfg = my_agent_config::type_id::create(\"m_cfg\");\n    m_cfg.num_transactions = 500;\n    m_cfg.enable_coverage = 0; // Disable coverage for this specific run\n\n    // Set the config object for 'my_agent' and its sub-components (\"my_agent*\")\n    uvm_config_db#(my_agent_config)::set(this, \"m_agent*\", \"my_agent_cfg\", m_cfg);\n\n    m_agent = my_agent::type_id::create(\"m_agent\", this);\n  endfunction\n\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "// In my_agent.sv\nclass my_agent extends uvm_agent;\n  `uvm_component_utils(my_agent)\n              \n  my_agent_config m_cfg; // Local handle for the config object\n  my_driver m_driver;    // Assuming this agent creates a driver\n\n  ...\n              \n  function void build_phase(uvm_phase phase);\n    super.build_phase(phase);\n    // Retrieve the configuration object\n    if (!uvm_config_db#(my_agent_config)::get(this, \"\", \"my_agent_cfg\", m_cfg)) begin\n      `uvm_fatal(\"NOCFG\", {\"Configuration object 'my_agent_cfg' must be set for: \", get_full_name()});\n    end\n    // Now you can use m_cfg.num_transactions, m_cfg.enable_coverage, etc.\n    `uvm_info(get_full_name(), $sformatf(\"Configured for %0d transactions (coverage: %0b)\", m_cfg.num_transactions, m_cfg.enable_coverage), UVM_LOW);\n\n    // Pass this config down to child components, e.g., driver\n    uvm_config_db#(my_agent_config)::set(this, \"m_driver\", \"my_agent_cfg\", m_cfg);\n    m_driver = my_driver::type_id::create(\"m_driver\", this);\n  endfunction\n\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Virtual Interfaces are Key",
                        "content": "Always use uvm_config_db to pass virtual interface handles from your top-level SystemVerilog module to your UVM environment. Drivers and monitors should ideally retrieve these virtual interface handles from their own configuration objects, which were passed to them, rather than directly from the global uvm_config_db",
                        "code": "module tb_top;\n              \n  my_bus_if bus_if_inst(); // Instance of the physical interface\n\n  initial begin\n    // Set the virtual interface in the configuration database\n    // 'null' context because we are in a module [7]\n    // \"uvm_test_top.*\" means it's visible to uvm_test_top and all its children\n    uvm_config_db#(virtual my_bus_if)::set(null, \"uvm_test_top.*\", \"bus_vif\", bus_if_inst);\n    run_test();\n  end\n\nendmodule              \n\n// In my_driver.sv\nclass my_driver extends uvm_driver #(my_transaction);\n  `uvm_component_utils(my_driver)\n              \n  my_agent_config m_cfg; // Local handle for the config object\n\n  ...\n              \n  function void build_phase(uvm_phase phase);\n    super.build_phase(phase);\n    // Retrieve the configuration object (which contains the VIF)\n    if (!uvm_config_db#(my_agent_config)::get(this, \"\", \"my_agent_cfg\", m_cfg)) begin\n      `uvm_fatal(\"NOCFG\", {\"Configuration object 'my_agent_cfg' must be set for: \", get_full_name()});\n    end\n              \n    // Now, m_cfg.vif can be used to drive/monitor the DUT\n    `uvm_info(get_full_name(), $sformatf(\"Virtual interface connected via config object: %s\", m_cfg.vif.get_name()), UVM_LOW);\n  endfunction\n\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Set configuration in build_phase",
                        "content": "The build_phase is the primary phase for constructing the testbench hierarchy and configuring components. All uvm_config_db::set() calls for component configuration should ideally occur within this phase and can be done in test or environment.",
                        "code": "class my_env extends uvm_env;\n\n  function void build_phase(uvm_phase phase);\n    super.build_phase(phase);\n              \n    // All configuration for child components typically happens here\n    // Create and configure configuration objects\n    my_agent_config agent_cfg = my_agent_config::type_id::create(\"agent_cfg\");\n    agent_cfg.num_transactions = 500;\n              \n    // Set the config object for an agent\n    uvm_config_db#(my_agent_config)::set(this, \"m_agent*\", \"my_agent_cfg\", agent_cfg);\n              \n    // Create the agent\n    m_agent = my_agent::type_id::create(\"m_agent\", this);\n  endfunction",
                        "lang": "verilog"
                    },
                    {
                        "title": "Always Check get() Return Value",
                        "content": "The uvm_config_db::get() method returns a bit indicating whether the requested item was found and successfully retrieved. It is crucial to check this return value, especially for critical items like virtual interfaces or configuration objects, and issue a fatal error if the retrieval fails.",
                        "code": "class my_driver extends uvm_driver #(my_transaction);\n  // ...\n  my_agent_config m_cfg;\n\n  function void build_phase(uvm_phase phase);\n    super.build_phase(phase);\n              \n    // Crucially, check the return value of get()\n    if (!uvm_config_db#(my_agent_config)::get(this, \"\", \"my_agent_cfg\", m_cfg)) begin\n      // If not found, issue a fatal error\n      `uvm_fatal(\"NOCFG\", {\"Configuration object 'my_agent_cfg' must be set for: \", get_full_name(), \".m_cfg\"});\n    end\n  endfunction\n\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Avoid Deprecated Methods",
                        "content": "Older versions of UVM (or OVM) used methods like set_config_int(), set_config_string(), and set_config_object(). These are now deprecated and should not be used. The uvm_config_db API is the recommended replacement. Also, avoid directly using uvm_resource_db for configuration settings that have a hierarchical context.",
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
                "id": "cv-uvm-35",
                "num": 35,
                "title": "uvm_config_db Examples",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "The UVM configuration database accessed by the class uvm_config_db is a great way to pass different objects between multiple testbench components.\n\nClick here to refresh on config database !",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Methods",
                        "content": "There are two primary functions used to put and retrieve items from the database which are set() and get() respectively.",
                        "code": "static function void set (  uvm_component   cntxt,\n                            string          inst_name,\n                            string          field_name,\n                            T               value);\n\nstatic function bit get (   uvm_component  cntxt,\n                            string         inst_name,\n                            string         field_name,\n                      inout T              value);",
                        "lang": "verilog"
                    },
                    {
                        "title": "How to debug uvm_config_db ?",
                        "content": "The best way to understand how the combination of cntxt, inst_name and field_name works is by enabling the commandline debug +UVM_CONFIG_DB_TRACE switch for UVM that dumps information on all the set() and get() calls within a simulation.",
                        "code": "$> irun <all_other_options> +UVM_CONFIG_DB_TRACE",
                        "lang": "verilog"
                    },
                    {
                        "title": "Example",
                        "content": "We'll look at how two testbench environments behave when set and get methods are called from different hierarchies.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "1. Test and Env",
                        "content": "To understand how config_db evaluates expressions, we'll set up a small testbench structure with an empty environment as shown below. An expression is set from the test class and retrieved in the environment's build_phase\n\nWe set cntxt to null and inst_name to uvm_test_top to indicate that all components in the test can access the item. To keep things simple, we'll put a string item tagged as Friend.\n\nIt is quite clear that the first argument cntxt cannot be anything other than a uvm_component object. From the following simulation log, we can see that when +UVM_CONFIG_DB_TRACE is passed as a command-line switch, simulation will dump all function calls to set and get into the log. However, the lines of our interest are higlighted in color, the yellow one representing a set call and the green representing a successful get call. The concatenation of cntxt, inst_name and field_name match for both set and get calls and hence the database successfully finds and returns the string tagged as \"Friend\".",
                        "code": "class base_env extends uvm_env;\n\t...\n\tstring name;\n\t\n\tvirtual function void build_phase (uvm_phase phase);\n\t\tsuper.build_name ();\n\t\t\n\t\t// Retrieve the string that was set in config_db from the test class\n\t\tif (uvm_config_db #(string) :: get (null, \"uvm_test_top\", \"Friend\", name))\n\t\t\t`uvm_info (\"ENV\", $sformatf (\"Found %s\", name), UVM_MEDIUM)\n\t\t\t\n\tendfunction\nendclass\n\nclass base_test extends uvm_test;\n\t...\n\tbase_env \tm_env;\n\t\n\tvirtual function void build_phase (uvm_phase phase);\n\t\t...\n\t\t\n\t\t// Set this string into config_db\n\t\tuvm_config_db #(string) :: set (null, \"uvm_test_top\", \"Friend\", \"Joey\");\n\tendfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Here, we'll make a slight modification to the set method, rest of the code being the same. The first argument cntxt gets this pointer, while inst_name is empty and still we get the same path \"uvm_test_top.Friend\" after concatenation.",
                        "code": "ncsim> run\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_root.svh(392) @ 0: reporter [UVM/RELNOTES] \n----------------------------------------------------------------\nUVM-1.2\n(C) 2007-2014 Mentor Graphics Corporation\n(C) 2007-2014 Cadence Design Systems, Inc.\n(C) 2006-2014 Synopsys, Inc.\n(C) 2011-2013 Cypress Semiconductor Corp.\n(C) 2013-2014 NVIDIA Corporation\n----------------------------------------------------------------\nUVM_INFO @ 0: reporter [RNTST] Running test base_test...\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_resource_db.svh(121) @ 0: reporter [CFGDB/GET] Configuration 'uvm_test_top.base_env.recording_detail' (type logic signed[4095:0]) read by uvm_test_top.base_env = null (failed lookup)\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_resource_db.svh(121) @ 0: reporter [CFGDB/GET] Configuration 'uvm_test_top.base_env.recording_detail' (type int) read by uvm_test_top.base_env = null (failed lookup)\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_resource_db.svh(121) @ 0: reporter [CFGDB/SET] Configuration 'uvm_test_top.Friend' (type string) set by  = (string) \"Joey\"\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_resource_db.svh(121) @ 0: reporter [CFGDB/GET] Configuration 'uvm_test_top.base_env.m_agent0.recording_detail' (type logic signed[4095:0]) read by uvm_test_top.base_env.m_agent0 = null (failed lookup)\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_resource_db.svh(121) @ 0: reporter [CFGDB/GET] Configuration 'uvm_test_top.base_env.m_agent0.recording_detail' (type int) read by uvm_test_top.base_env.m_agent0 = null (failed lookup)\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_resource_db.svh(121) @ 0: reporter [CFGDB/GET] Configuration 'uvm_test_top.base_env.m_agent1.recording_detail' (type logic signed[4095:0]) read by uvm_test_top.base_env.m_agent1 = null (failed lookup)\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_resource_db.svh(121) @ 0: reporter [CFGDB/GET] Configuration 'uvm_test_top.base_env.m_agent1.recording_detail' (type int) read by uvm_test_top.base_env.m_agent1 = null (failed lookup)\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_resource_db.svh(121) @ 0: reporter [CFGDB/GET] Configuration 'uvm_test_top.Friend' (type string) read by  = (string) \"Joey\"\nUVM_INFO testbench.sv(36) @ 0: uvm_test_top.base_env [ENV] Found Joey\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_report_server.svh(847) @ 0: reporter [UVM/REPORT/SERVER] \n--- UVM Report Summary ---\n\n** Report counts by severity",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "uvm_config_db #(string) :: set (this, \"\", \"Friend\", \"Joey\");\n\t\n\t// Same get method\n\tif (uvm_config_db #(string) :: get (null, \"uvm_test_top\", \"Friend\", name))\n\t\t\t`uvm_info (\"ENV\", $sformatf (\"Found %s\", name), UVM_MEDIUM)",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "...\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_resource_db.svh(121) @ 0: reporter [CFGDB/SET] Configuration 'uvm_test_top.Friend' (type string) set by uvm_test_top = (string) \"Joey\"\n...\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_resource_db.svh(121) @ 0: reporter [CFGDB/GET] Configuration 'uvm_test_top.Friend' (type string) read by  = (string) \"Joey\"",
                        "lang": "verilog"
                    },
                    {
                        "title": "2. Test, Env, and two Agents",
                        "content": "Now we'll expand the environment to have a couple of agents to make things more interesting.\n\nIf we run the code again with the new agents in place, you'll find that both agents also found the string tagged as \"Friend1\".",
                        "code": "class base_agent extends uvm_agent;\n\t...\n\t\n\tvirtual function void build_phase (uvm_phase phase);\n\t\tif (uvm_config_db #(string) :: get (null, \"uvm_test_top\", \"Friend1\", name))\n\t\t\t`uvm_info (\"AGENT\", $sformatf (\"[%s] found %s\", this.get_name(), name), UVM_MEDIUM)\n\tendfunction\nendclass\n\nclass base_env extends uvm_env;\n\t...\n\tbase_agent \tm_agent0;\n\tbase_agent \tm_agent1;\n\t...\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "UVM_INFO /playground_lib/uvm-1.2/src/base/uvm_resource_db.svh(121) @ 0: reporter [CFGDB/SET] Configuration 'uvm_test_top.Friend1' (type string) set by uvm_test_top = (string) \"Joey\"\n...\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_resource_db.svh(121) @ 0: reporter [CFGDB/GET] Configuration 'uvm_test_top.Friend1' (type string) read by  = (string) \"Joey\"\nUVM_INFO testbench.sv(44) @ 0: uvm_test_top.base_env [ENV] Found Joey\n...\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_resource_db.svh(121) @ 0: reporter [CFGDB/GET] Configuration 'uvm_test_top.Friend1' (type string) read by  = (string) \"Joey\"\nUVM_INFO testbench.sv(22) @ 0: uvm_test_top.base_env.m_agent0 [AGENT] [m_agent0] Found Joey\n...\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_resource_db.svh(121) @ 0: reporter [CFGDB/GET] Configuration 'uvm_test_top.Friend1' (type string) read by  = (string) \"Joey\"\nUVM_INFO testbench.sv(22) @ 0: uvm_test_top.base_env.m_agent1 [AGENT] [m_agent1] Found Joey",
                        "lang": "verilog"
                    },
                    {
                        "title": "Recommended Practice",
                        "content": "The setting in config_db is visible by only those elements that can evaluate to the same expression as the set call. If we keep a global scope such as uvm_test_name, then all components will be able to retrieve that setting. However, this poses a potential problem of collision of field_name within the same scope, as well as retrieval of settings via unintended get calls. Hence, the recommended practice is to make the setting available to only those components that really require the setting to function. In a similar way, during get calls, components should look for settings that are available to them.\n\nThe expression that is set in config_db is \"uvm_test_top.Friend\" based on the set function call. config_db results show the expression evaluated by the get method call. If both of these expressions match or satisfies the glob properties, it is considered to be a match. In the case below, all the three get method calls failed simply because the expression each of the component tried to get is different from the expression that is set.\n\nIn the above case, the setting was made available only to the agents and hence environment was not able to retrieve it at its level. To make the setting available to the environment, we'll make another set call just for the environment. If you put a * like m_env*, then the setting will be made available to all the components in the environment.",
                        "code": "uvm_config_db #(string) :: set (this, \"m_env.m_agent*\", \"Friend\", \"Joey\");    // Set in test, available to agents\nuvm_config_db #(string) :: get (this, \"\", \"Friend\", name);                   // Get in env\nuvm_config_db #(string) :: get (this, \"\", \"Friend\", name);                   // Get in agent\n\ncntxt = uvm_test_top, inst_name = m_env.m_agent*, tag = Friend\nExpression set : \"uvm_test_top.m_env.m_agent1*.Friend\"\n\nCONFIG_DB_TRACE results:\n[CFGDB/SET] Configuration 'uvm_test_top.m_env.m_agent*.Friend' (type string) set by uvm_test_top = (string) \"Joey\"\n[CFGDB/GET] Configuration 'uvm_test_top.m_env.Friend' (type string) read by uvm_test_top.m_env = null (failed lookup)\n[CFGDB/GET] Configuration 'uvm_test_top.m_env.m_agent0.Friend' (type string) read by uvm_test_top.m_env.m_agent0 = (string) \"Joey\"\n[CFGDB/GET] Configuration 'uvm_test_top.m_env.m_agent1.Friend' (type string) read by uvm_test_top.m_env.m_agent1 = (string) \"Joey\"",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "A few examples on set and get methods were illustrated in the previous article. Now we'll see more combinations of expressions used to set and get settings from config_db and see the result of such operations on the same testbench structure with two agents in an environment.",
                        "code": "uvm_config_db #(string) :: set (this, \"m_env.m_agent*\", \"Friend\", \"Joey\");    // Set in test, available to agents\nuvm_config_db #(string) :: set (this, \"m_env\",          \"Friend\", \"Joey\");    // Set in test, available to env\nuvm_config_db #(string) :: get (this, \"\", \"Friend\", name);                    // Get in env\nuvm_config_db #(string) :: get (this, \"\", \"Friend\", name);                    // Get in agent\n\ncntxt = uvm_test_top, inst_name = m_env.m_agent*, tag = Friend\nExpression set : \"uvm_test_top.m_env.m_agent1*.Friend\"\ncntxt = uvm_test_top, inst_name = m_env, tag = \"Friend\"\nExpression set : \"uvm_test_top.m_env.Friend\"\n\nCONFIG_DB_TRACE results:\n[CFGDB/SET] Configuration 'uvm_test_top.m_env.Friend' (type string) set by uvm_test_top = (string) \"Joey\"\n[CFGDB/SET] Configuration 'uvm_test_top.m_env.m_agent*.Friend' (type string) set by uvm_test_top = (string) \"Joey\"\n[CFGDB/GET] Configuration 'uvm_test_top.m_env.Friend' (type string) read by uvm_test_top.m_env = (string) \"Joey\"\n[CFGDB/GET] Configuration 'uvm_test_top.m_env.m_agent0.Friend' (type string) read by uvm_test_top.m_env.m_agent0 = (string) \"Joey\"\n[CFGDB/GET] Configuration 'uvm_test_top.m_env.m_agent1.Friend' (type string) read by uvm_test_top.m_env.m_agent1 = (string) \"Joey\"",
                        "lang": "verilog"
                    },
                    {
                        "title": "set vs get results",
                        "content": "To recap, a setting with field_name \"Friend\" is set with different cntxt and inst_name in the config_db. This is obtained by both agents and the environment using the get method with different cntxt and inst_name combinations. If the get call is successful, the cell is highlighted in pale green, else it is highlighted in pale red.\n\nThe first column in the table shown below is for the test class that sets the field Friend with the given cntxt and inst_name. All subsequent columns represent different components that try to get the setting from config_db which in our example is the environment and two agents.",
                        "code": "// Set the given field_name \"Friend\" in test\nuvm_config_db #(string) :: set (cntxt, inst_name, \"Friend\", \"Ross\");\n\n// Get \"Friend\" in env and agents\nuvm_config_db #(string) :: get (cntxt, inst_name, \"Friend\", \"Ross\");\n\nHierarchy of each component:\n  Environment : uvm_test_top.m_env\n  Agent1      : uvm_test_top.m_env.m_agent1\n  Agent2      : uvm_test_top.m_env.m_agent2",
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
                "id": "cv-uvm-36",
                "num": 36,
                "title": "UVM TLM",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "Transaction Level Modeling, is a modeling style for building highly abstract models of components and systems. In this scheme, data is represented as transactions (class objects that contain random, protocol specific information) which flow in and out of different components via special ports called TLM interfaces. This brings about a higher level of abstraction which is very much required in today's verification environments because of the large amount of signals associated with different protocols. It would be a lot simpler to understand, debug and verify if we can represent data and changes in signals as transactions (like write operation/read operation).\n\nUVM provides a set of transaction-level communication interfaces that can be used to connect between components such that data packets can be transferred between them. The good part about this setup is that it isolates a component from the changes in other components, and promotes reusability and flexibility because now you can just swap a component with another which also have a TLM interface.\n\nsimple_packet class object will be a transaction that can be sent from componentA to componentB via TLM interface ports port and export.",
                        "code": "class simple_packet extends uvm_object;\n\t`uvm_object_utils (simple_packet)\n\t\n\trand bit [7:0] addr;\n\trand bit [7:0] data;\n\t\t bit \t\trwb;\n\t\n\tconstraint c_addr { addr > 8'h2a; };\n\tconstraint c_data { data inside {[8'h14:8'he9]};\n\t\nendclass",
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
                "id": "cv-uvm-37",
                "num": 37,
                "title": "UVM TLM Blocking Put Port",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "Any component can send a transaction to another component through a TLM put port. The receiving component should define an implementation of the put port. The implementation gives receiver the chance to define what has to be done with the incoming packet.\n\nThe port can be either blocking or nonblocking in nature, which will decide whether the put method will block execution in the sender until the receiver accepts the object. The example shown below is a TLM blocking put port in one component connected to its implementation port in another component.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "UVM TLM Port Example",
                        "content": "A class called Packet is defined below to act as the data item that will be transferred from one component to another. This class object will have two random variables that can be randomized before sending.\n\nA class called componentA is created which has a uvm_blocking_put_port parameterized to accept a data object of type Packet. The port has to be instantiated with the new() method preferably in the build_phase of the same component.\n\nIn this example, a class object of type Packet is created, randomized and sent via the put_port handle by calling the put() method. Many such packets can be sent using a simple loop controlled by a configurable variable.",
                        "code": "// Create a class data object that can be sent from one \n// component to another\nclass Packet extends uvm_object;\n  rand bit[7:0] addr;\n  rand bit[7:0] data;\n  \n  `uvm_object_utils_begin(Packet)\n  \t`uvm_field_int(addr, UVM_ALL_ON)\n  \t`uvm_field_int(data, UVM_ALL_ON)\n  `uvm_object_utils_end\n  \n  function new(string name = \"Packet\");\n    super.new(name);\n  endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "The receiver class needs to define an implementation port using uvm_blocking_put_imp. Since the port is blocking in nature, the put() implementation is a task which has to be defined by this component.",
                        "code": "class componentA extends uvm_component;\n   `uvm_component_utils (componentA)\n \n  // Create a blocking TLM put port which can send an object\n  // of type 'Packet'\n  uvm_blocking_put_port #(Packet) m_put_port;\n  int m_num_tx;\n \n   function new (string name = \"componentA\", uvm_component parent= null);\n      super.new (name, parent);\n   endfunction\n\n   // Remember that TLM put_port is a class object and it will have to be \n   // created with new ()\n   virtual function void build_phase (uvm_phase phase);\n      super.build_phase (phase);\n     m_put_port = new (\"m_put_port\", this);\n   endfunction\n \n  // Create a packet, randomize it and send it through the port\n  // Note that put() is a method defined by the receiving component\n  // Repeat these steps N times to send N packets\n   virtual task run_phase (uvm_phase phase);\n     phase.raise_objection(this);\n     repeat (m_num_tx) begin\n         Packet pkt = Packet::type_id::create (\"pkt\");\n         assert(pkt.randomize ()); \n       \n       \t // Print the packet to be displayed in log\n         `uvm_info (\"COMPA\", \"Packet sent to CompB\", UVM_LOW)\n         pkt.print (uvm_default_line_printer);\n       \n         // Call the TLM put() method of put_port class and pass packet as argument\n         m_put_port.put (pkt);\n      end\n      phase.drop_objection(this);\n   endtask   \nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "The connection between a port and its implementation has to be done at a higher hierarchical level. Since both components are instantiated directly within the test class in this example, the connection between them can be done during the connect_phase of the test. If these two components were instantiated in another component or environment, they have to be connected during the connect_phase of that component or environment.",
                        "code": "class componentB extends uvm_component;\n   `uvm_component_utils (componentB)\n \n   // Declare a put implementation port to accept transactions\n   uvm_blocking_put_imp #(Packet, componentB) m_put_imp;\n\n   function new (string name = \"componentB\", uvm_component parent = null);\n      super.new (name, parent);\n   endfunction\n \n   virtual function void build_phase (uvm_phase phase);\n      super.build_phase (phase);\n     m_put_imp = new (\"m_put_imp\", this);\n   endfunction\n \n    // Implementation of the 'put()' method in this case simply prints it.\n  \tvirtual task put (Packet pkt);\n      `uvm_info (\"COMPB\", \"Packet received from CompA\", UVM_LOW)\n      pkt.print(uvm_default_line_printer);\n   endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "class my_test extends uvm_test;\n  `uvm_component_utils (my_test)\n \n   componentA compA;\n   componentB compB;\n \n  function new (string name = \"my_test\", uvm_component parent = null);\n      super.new (name, parent);\n   endfunction\n \n   // Create objects of both components, set number of transfers\n   virtual function void build_phase (uvm_phase phase);\n      super.build_phase (phase);\n      compA = componentA::type_id::create (\"compA\", this);\n      compB = componentB::type_id::create (\"compB\", this);\n      compA.m_num_tx = 2;\n   endfunction\n \n   // Connection between componentA and componentB is done here\n   // Note that the \"put_port\" is connected to its implementation \"put_imp\"\n   virtual function void connect_phase (uvm_phase phase);\n     compA.m_put_port.connect (compB.m_put_imp);  \n   endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test my_test...\nUVM_INFO testbench.sv(81) @ 0: uvm_test_top.compB [COMPB] Packet received from CompA\npkt: (Packet@1903) { addr: 'h2d  data: 'hd1  } \nUVM_INFO testbench.sv(57) @ 0: uvm_test_top.compA [COMPA] Packet sent to CompB\npkt: (Packet@1903) { addr: 'h2d  data: 'hd1  } \nUVM_INFO testbench.sv(81) @ 0: uvm_test_top.compB [COMPB] Packet received from CompA\npkt: (Packet@2061) { addr: 'h42  data: 'h62  } \nUVM_INFO testbench.sv(57) @ 0: uvm_test_top.compA [COMPA] Packet sent to CompB\npkt: (Packet@2061) { addr: 'h42  data: 'h62  } \nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_report_server.svh(847) @ 0: reporter [UVM/REPORT/SERVER] \n--- UVM Report Summary ---",
                        "lang": "verilog"
                    },
                    {
                        "title": "Put Port Blocking Behavior",
                        "content": "The example shown above used a blocking put port declared of the type uvm_blocking_put_port which would stall the sender from resuming until the put() task returns. This blocking behavior can be observed if there is a delay inside the implementation of the put method within componentB. The code shown below inserts a 20ns delay inside the put task.\n\nNote that time is consumed by componentB inside put task which blocks the sender from sending the next packet. At 20ns, componentB finishes the task and componentA proceeds to send the next packet.",
                        "code": "// Implementation of the 'put()' method in this case simply prints it.\n  virtual task put (Packet pkt);      \n\n  // Lets assume the receiver takes some time to process the packet after \n  // which this task will return. The \"put\" method in the sender should be\n  // stalled there until this task returns.\n  `uvm_info(\"COMPB\", $sformatf(\"Processing packet\"), UVM_LOW)\n  #20;\n  `uvm_info(\"COMPB\", $sformatf(\"Processing packet finished ...\"), UVM_LOW)\n  \n  `uvm_info (\"COMPB\", \"Packet received from CompA\", UVM_LOW)\n  pkt.print(uvm_default_line_printer);\nendtask",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test my_test...\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_root.svh(579) @ 0: reporter [UVMTOP] UVM testbench topology:\n--------------------------------------------------\nName            Type                   Size  Value\n--------------------------------------------------\nuvm_test_top    my_test                -     @1837\n  compA         componentA             -     @1906\n    m_put_port  uvm_blocking_put_port  -     @1972\n  compB         componentB             -     @1937\n    m_put_imp   uvm_blocking_put_imp   -     @2011\n--------------------------------------------------\n\nUVM_INFO testbench.sv(63) @ 0: uvm_test_top.compA [COMPA] Packet sent to CompB\npkt: (Packet@2049) { addr: 'ha1  data: 'h64  } \nUVM_INFO testbench.sv(97) @ 0: uvm_test_top.compB [COMPB] Processing packet\nUVM_INFO testbench.sv(99) @ 20: uvm_test_top.compB [COMPB] Processing packet finished ...\nUVM_INFO testbench.sv(102) @ 20: uvm_test_top.compB [COMPB] Packet received from CompA\npkt: (Packet@2049) { addr: 'ha1  data: 'h64  } \nUVM_INFO testbench.sv(63) @ 20: uvm_test_top.compA [COMPA] Packet sent to CompB\npkt: (Packet@2059) { addr: 'hc1  data: 'hb9  } \nUVM_INFO testbench.sv(97) @ 20: uvm_test_top.compB [COMPB] Processing packet\nUVM_INFO testbench.sv(99) @ 40: uvm_test_top.compB [COMPB] Processing packet finished ...\nUVM_INFO testbench.sv(102) @ 40: uvm_test_top.compB [COMPB] Packet received from CompA\npkt: (Packet@2059) { addr: 'hc1  data: 'hb9  } \nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_objection.svh(1271) @ 40: reporter [TEST_DONE] 'run' phase is ready to proceed to the 'extract' phase\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_report_server.svh(847) @ 40: reporter [UVM/REPORT/SERVER] \n--- UVM Report Summary ---",
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
                "id": "cv-uvm-38",
                "num": 38,
                "title": "UVM TLM Blocking Get Port",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "Any component can request to receive a transaction from another component through a TLM get port. The sending component should define an implementation of the get port. The implementation gives sender the chance to define what needs to be sent to the requestor. This is just the opposite of a put port seen in a previous article.\n\nThe port can be either blocking or nonblocking in nature, which will decide whether the get method will block execution in the receiver until the sender sends the object. The example shown below is a TLM blocking get port in one component connected to its implementation port in another component.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "UVM TLM Get Port Example",
                        "content": "A class called Packet is defined below to act as the data item that will be transferred from one component to another. This class object will have two random variables that can be randomized before sending.\n\nA class called componentA is created which has a uvm_blocking_get_imp parameterized to accept a data object of type Packet. The port has to be instantiated with the new() method preferably in the build_phase of the same component.\n\nIn this example, a class object of type Packet is created, randomized and sent via the implementation of get() method. Note that it has an ouput of type Packet. Many such packets can be sent using a simple loop controlled by a configurable variable.",
                        "code": "// Create a class data object that can be sent from one \n// component to another\nclass Packet extends uvm_object;\n  rand bit[7:0] addr;\n  rand bit[7:0] data;\n  \n  `uvm_object_utils_begin(Packet)\n  \t`uvm_field_int(addr, UVM_ALL_ON)\n  \t`uvm_field_int(data, UVM_ALL_ON)\n  `uvm_object_utils_end\n  \n  function new(string name = \"Packet\");\n    super.new(name);\n  endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "The receiver class needs to define a getport using uvm_blocking_get_port to receive the packet. Since the port is blocking in nature, the get method implementation is a task that was defined by the sender shown above.",
                        "code": "class componentA extends uvm_component;\n   `uvm_component_utils (componentA)\n \n   // Create an export to send data to componentB\n   uvm_blocking_get_imp #(Packet, componentA) m_get_imp;\n   Packet  pkt;\n \n  function new (string name, uvm_component parent);\n      super.new (name, parent);\n   endfunction\n \n   virtual function void build_phase (uvm_phase phase);\n      super.build_phase (phase);\n      // Remember that m_get_imp is a class object and it will have to be \n      // created with new ()\n      m_get_imp = new (\"m_get_imp\", this);\n   endfunction\n \n   // This task will output a new packet \n   virtual task get (output Packet pkt);\n      // Create a new packet\n      pkt = new();\n      assert (pkt.randomize());\n      `uvm_info (\"COMPA\", \"ComponentB has requested for a packet\", UVM_LOW)\n      pkt.print (uvm_default_line_printer);\n   endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "The connection between a port and its implementation has to be done at a higher hierarchical level. Since both components are instantiated directly within the test class in this example, the connection between them can be done during the connect_phase of the test. If these two components were instantiated in another component or environment, they have to be connected during the connect_phase of that component or environment.",
                        "code": "class componentB extends uvm_component;\n   `uvm_component_utils (componentB)\n \n   // Create a get_port to request for data from componentA\n   uvm_blocking_get_port #(Packet) m_get_port;\n   int m_num_tx = 2;\n \n  function new (string name, uvm_component parent);\n      super.new (name, parent);\n   endfunction\n \n   virtual function void build_phase (uvm_phase phase);\n      super.build_phase (phase);\n      m_get_port = new (\"m_get_port\", this);\n   endfunction\n \n   virtual task run_phase (uvm_phase phase);\n      Packet pkt;\n     phase.raise_objection(this);\n     repeat (m_num_tx) begin\n         m_get_port.get (pkt);\n         `uvm_info (\"COMPB\", \"ComponentA just gave me the packet\", UVM_LOW)\n        pkt.print (uvm_default_line_printer);\n      end\n     phase.drop_objection(this);\n   endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "class my_test extends uvm_test;\n  `uvm_component_utils (my_test)\n \n   componentA compA;\n   componentB compB;\n \n  function new (string name = \"my_test\", uvm_component parent = null);\n      super.new (name, parent);\n   endfunction\n \n   // Create objects of both components, set number of transfers\n   virtual function void build_phase (uvm_phase phase);\n      super.build_phase (phase);\n      compA = componentA::type_id::create (\"compA\", this);\n      compB = componentB::type_id::create (\"compB\", this);\n   endfunction\n \n   // Connection between componentA and componentB is done here\n   virtual function void connect_phase (uvm_phase phase);\n     compB.m_get_port.connect (compA.m_get_imp);  \n   endfunction\n  \n   virtual function void end_of_elaboration_phase(uvm_phase phase);\n    super.end_of_elaboration_phase(phase);\n    uvm_top.print_topology();\n  endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test my_test...\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_root.svh(579) @ 0: reporter [UVMTOP] UVM testbench topology:\n--------------------------------------------------\nName            Type                   Size  Value\n--------------------------------------------------\nuvm_test_top    my_test                -     @1836\n  compA         componentA             -     @1905\n    m_get_imp   uvm_blocking_get_imp   -     @1971\n  compB         componentB             -     @1936\n    put_export  uvm_blocking_get_port  -     @2010\n--------------------------------------------------\n\nUVM_INFO testbench.sv(86) @ 0: uvm_test_top.compA [COMPA] ComponentB has requested for a packet, give the following packet to componentB\nPacket: (Packet@1877) { addr: 'hdd  data: 'hce  } \nUVM_INFO testbench.sv(54) @ 0: uvm_test_top.compB [COMPB] ComponentA just gave me the packet\nPacket: (Packet@1877) { addr: 'hdd  data: 'hce  } \nUVM_INFO testbench.sv(86) @ 0: uvm_test_top.compA [COMPA] ComponentB has requested for a packet, give the following packet to componentB\nPacket: (Packet@2058) { addr: 'h4b  data: 'hf5  } \nUVM_INFO testbench.sv(54) @ 0: uvm_test_top.compB [COMPB] ComponentA just gave me the packet\nPacket: (Packet@2058) { addr: 'h4b  data: 'hf5  } \nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_report_server.svh(847) @ 0: reporter [UVM/REPORT/SERVER] \n--- UVM Report Summary ---",
                        "lang": "verilog"
                    },
                    {
                        "title": "Get Port Blocking Behavior",
                        "content": "The example shown above used a blocking get port declared of the type uvm_blocking_get_port which would stall the receiver from resuming until the get task returns. This blocking behavior can be observed if there is a delay inside the implementation of the get method within componentA or the sender. The code shown below inserts a 20ns delay inside the get task.\n\nNote that time is consumed by componentA inside get task which blocks the sender from sending the next packet. At 20ns, componentA finishes the task and proceeds to send the next packet.",
                        "code": "virtual task get (output Packet pkt);\n      // Create a new packet\n      pkt = new();\n      assert (pkt.randomize());\n      \n      // Lets assume componentA takes some time to prepare packet\n     `uvm_info(\"COMPA\", \"Preparing packet ...\", UVM_LOW)\n     #20;\n     `uvm_info(\"COMPA\", \"Preparing packet over ...\", UVM_LOW)\n      pkt.print (uvm_default_line_printer);\n   endtask",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test my_test...\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_root.svh(579) @ 0: reporter [UVMTOP] UVM testbench topology:\n--------------------------------------------------\nName            Type                   Size  Value\n--------------------------------------------------\nuvm_test_top    my_test                -     @1837\n  compA         componentA             -     @1906\n    m_get_imp   uvm_blocking_get_imp   -     @1972\n  compB         componentB             -     @1937\n    m_get_port  uvm_blocking_get_port  -     @2011\n--------------------------------------------------\n\nUVM_INFO testbench.sv(89) @ 0: uvm_test_top.compA [COMPA] Preparing packet ...\nUVM_INFO testbench.sv(91) @ 20: uvm_test_top.compA [COMPA] Preparing packet over ...\nPacket: (Packet@1904) { addr: 'he8  data: 'hc5  } \nUVM_INFO testbench.sv(55) @ 20: uvm_test_top.compB [COMPB] ComponentA just gave me the packet\nPacket: (Packet@1904) { addr: 'he8  data: 'hc5  } \nUVM_INFO testbench.sv(89) @ 20: uvm_test_top.compA [COMPA] Preparing packet ...\nUVM_INFO testbench.sv(91) @ 40: uvm_test_top.compA [COMPA] Preparing packet over ...\nPacket: (Packet@2071) { addr: 'hd6  data: 'hd  } \nUVM_INFO testbench.sv(55) @ 40: uvm_test_top.compB [COMPB] ComponentA just gave me the packet\nPacket: (Packet@2071) { addr: 'hd6  data: 'hd  } \nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_objection.svh(1271) @ 40: reporter [TEST_DONE] 'run' phase is ready to proceed to the 'extract' phase\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_report_server.svh(847) @ 40: reporter [UVM/REPORT/SERVER] \n--- UVM Report Summary ---",
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
                "id": "cv-uvm-39",
                "num": 39,
                "title": "UVM TLM Fifo [uvm_tlm_fifo]",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "Assume data rate of the sender is much faster than the rate at which the receiver can get packets. A FIFO element is required in between to store packets so that it allows both the sender and the receiver to independently operate. Depth of the FIFO is typically calculated based on the rate of data transfer. A TLM FIFO is placed in between testbench components that transfer data objects at different rates.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "UVM TLM FIFO Example",
                        "content": "A class called Packet is defined below to act as the data item that will be transferred from one component to another. This class object will have two random variables that can be randomized before sending.\n\nA class called componentA is created which has a uvm_blocking_put_port parameterized to accept a data object of type Packet. The port has to be instantiated with the new() method preferably in the build_phase of the same component.\n\nIn this example, a class object of type Packet is created, randomized and sent via the put_port handle by calling the put() method. Many such packets can be sent using a simple loop controlled by a configurable variable.",
                        "code": "class Packet extends uvm_object;\n  rand bit[7:0] addr;\n  rand bit[7:0] data;\n \n  `uvm_object_utils_begin(Packet)\n    `uvm_field_int(addr, UVM_ALL_ON)\n    `uvm_field_int(data, UVM_ALL_ON)\n  `uvm_object_utils_end\n \n  function new(string name = \"Packet\");\n    super.new(name);\n  endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "The receiver class tries to get an item using uvm_blocking_get_port.",
                        "code": "class componentA extends uvm_component;\n   `uvm_component_utils (componentA)\n \n  // Create a blocking TLM put port which can send an object\n  // of type 'Packet'\n  uvm_blocking_put_port #(Packet) m_put_port;\n  int m_num_tx = 2;\n \n   function new (string name = \"componentA\", uvm_component parent= null);\n      super.new (name, parent);\n   endfunction\n \n   // Remember that TLM put_port is a class object and it will have to be \n   // created with new ()\n   virtual function void build_phase (uvm_phase phase);\n      super.build_phase (phase);\n     m_put_port = new (\"m_put_port\", this);\n   endfunction\n \n  // Create a packet, randomize it and send it through the port\n  // Note that put() is a method defined by the receiving component\n  // Repeat these steps N times to send N packets\n   virtual task run_phase (uvm_phase phase);\n     phase.raise_objection(this);\n     repeat (m_num_tx) begin\n         Packet pkt = Packet::type_id::create (\"pkt\");\n         assert(pkt.randomize ()); \n \t\t#50;\n          // Print the packet to be displayed in log\n         `uvm_info (\"COMPA\", \"Packet sent to CompB\", UVM_LOW)\n         pkt.print (uvm_default_line_printer);\n \n         // Call the TLM put() method of put_port class and pass packet as argument\n         m_put_port.put (pkt);\n      end\n      phase.drop_objection(this);\n   endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "The connection between the two components via a TLM FIFO has to be done at a higher hierarchical level. Since both components are instantiated directly within the test class in this example, the connection between them can be done during the connect_phase of the test. If these two components were instantiated in another component or environment, they have to be connected during the connect_phase of that component or environment.\n\nUVM TLM FIFO in this example is defined to have a depth of 2. The put_export is connected to the first component's put port and the get_export is connected to the receiver's get port.",
                        "code": "class componentB extends uvm_component;\n   `uvm_component_utils (componentB)\n \n   // Create a get_port to request for data from componentA\n   uvm_blocking_get_port #(Packet) m_get_port;\n   int m_num_tx = 2;\n \n  function new (string name, uvm_component parent);\n      super.new (name, parent);\n   endfunction\n \n   virtual function void build_phase (uvm_phase phase);\n      super.build_phase (phase);\n      m_get_port = new (\"m_get_port\", this);\n   endfunction\n \n   virtual task run_phase (uvm_phase phase);\n      Packet pkt;\n     phase.raise_objection(this);\n     repeat (m_num_tx) begin\n       #100;\n         m_get_port.get (pkt);\n         `uvm_info (\"COMPB\", \"ComponentA just gave me the packet\", UVM_LOW)\n        pkt.print (uvm_default_line_printer);\n      end\n     phase.drop_objection(this);\n   endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "You can see that we connected both the ports in componentA/B to the exports in TLM Fifo.",
                        "code": "class my_test extends uvm_env;\n  `uvm_component_utils (my_test)\n \n   componentA compA;\n   componentB compB;\n  \n   int m_num_tx;\n \n   // Create the UVM TLM Fifo that can accept simple_packet\n   uvm_tlm_fifo #(Packet)    m_tlm_fifo;\n \n  function new (string name = \"my_test\", uvm_component parent = null);\n      super.new (name, parent);\n   endfunction\n \n   virtual function void build_phase (uvm_phase phase);\n      super.build_phase (phase);\n      // Create an object of both components\n      compA = componentA::type_id::create (\"compA\", this);\n      compB = componentB::type_id::create (\"compB\", this);\n     std::randomize(m_num_tx) with { m_num_tx inside {[4:10]}; };\n     compA.m_num_tx = m_num_tx;\n     compB.m_num_tx = m_num_tx;\n \n      // Create a FIFO with depth 2\n      m_tlm_fifo = new (\"uvm_tlm_fifo\", this, 2);\n   endfunction\n \n   // Connect the ports to the export of FIFO.\n   virtual function void connect_phase (uvm_phase phase);\n     compA.m_put_port.connect(m_tlm_fifo.put_export);\n     compB.m_get_port.connect(m_tlm_fifo.get_export);\n   endfunction\n \n   // Display a message when the FIFO is full\n   virtual task run_phase (uvm_phase phase);\n      forever begin\n        #10;\n        if (m_tlm_fifo.is_full ())\n          `uvm_info (\"UVM_TLM_FIFO\", \"Fifo is now FULL !\", UVM_MEDIUM)          \n      end\n   endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test my_test...\nUVM_INFO testbench.sv(49) @ 50: uvm_test_top.compA [COMPA] Packet sent to CompB\npkt: (Packet@2234) { addr: 'ha1  data: 'h64  } \nUVM_INFO testbench.sv(91) @ 100: uvm_test_top.compB [COMPB] ComponentA just gave me the packet\npkt: (Packet@2234) { addr: 'ha1  data: 'h64  } \nUVM_INFO testbench.sv(49) @ 100: uvm_test_top.compA [COMPA] Packet sent to CompB\npkt: (Packet@2256) { addr: 'hc1  data: 'hb9  } \nUVM_INFO testbench.sv(49) @ 150: uvm_test_top.compA [COMPA] Packet sent to CompB\npkt: (Packet@2270) { addr: 'hf0  data: 'hae  } \nUVM_INFO testbench.sv(137) @ 150: uvm_test_top [UVM_TLM_FIFO] Fifo is now FULL !\nUVM_INFO testbench.sv(137) @ 160: uvm_test_top [UVM_TLM_FIFO] Fifo is now FULL !\nUVM_INFO testbench.sv(137) @ 170: uvm_test_top [UVM_TLM_FIFO] Fifo is now FULL !\nUVM_INFO testbench.sv(137) @ 180: uvm_test_top [UVM_TLM_FIFO] Fifo is now FULL !\nUVM_INFO testbench.sv(137) @ 190: uvm_test_top [UVM_TLM_FIFO] Fifo is now FULL !\nUVM_INFO testbench.sv(91) @ 200: uvm_test_top.compB [COMPB] ComponentA just gave me the packet\npkt: (Packet@2256) { addr: 'hc1  data: 'hb9  } \nUVM_INFO testbench.sv(49) @ 200: uvm_test_top.compA [COMPA] Packet sent to CompB\npkt: (Packet@1879) { addr: 'h68  data: 'h7d  } \nUVM_INFO testbench.sv(137) @ 200: uvm_test_top [UVM_TLM_FIFO] Fifo is now FULL !\nUVM_INFO testbench.sv(137) @ 210: uvm_test_top [UVM_TLM_FIFO] Fifo is now FULL !\nUVM_INFO testbench.sv(137) @ 220: uvm_test_top [UVM_TLM_FIFO] Fifo is now FULL !\nUVM_INFO testbench.sv(137) @ 230: uvm_test_top [UVM_TLM_FIFO] Fifo is now FULL !\nUVM_INFO testbench.sv(137) @ 240: uvm_test_top [UVM_TLM_FIFO] Fifo is now FULL !\nUVM_INFO testbench.sv(137) @ 250: uvm_test_top [UVM_TLM_FIFO] Fifo is now FULL !\nUVM_INFO testbench.sv(137) @ 260: uvm_test_top [UVM_TLM_FIFO] Fifo is now FULL !\nUVM_INFO testbench.sv(137) @ 270: uvm_test_top [UVM_TLM_FIFO] Fifo is now FULL !\nUVM_INFO testbench.sv(137) @ 280: uvm_test_top [UVM_TLM_FIFO] Fifo is now FULL !\nUVM_INFO testbench.sv(137) @ 290: uvm_test_top [UVM_TLM_FIFO] Fifo is now FULL !\nUVM_INFO testbench.sv(91) @ 300: uvm_test_top.compB [COMPB] ComponentA just gave me the packet\npkt: (Packet@2270) { addr: 'hf0  data: 'hae  } \nUVM_INFO testbench.sv(91) @ 400: uvm_test_top.compB [COMPB] ComponentA just gave me the packet\npkt: (Packet@1879) { addr: 'h68  data: 'h7d  } \nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_objection.svh(1271) @ 400: reporter [TEST_DONE] 'run' phase is ready to proceed to the 'extract' phase\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_report_server.svh(847) @ 400: reporter [UVM/REPORT/SERVER] \n--- UVM Report Summary ---",
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
                "id": "cv-uvm-40",
                "num": 40,
                "title": "UVM TLM Example",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "This UVM TLM example uses put ports, TLM FIFOs and get ports discussed in previous articles to build a testbench that has TLM ports at different levels.\n\nTLM FIFO can be extended to have another component called componentB to accept packets using another internal FIFO and sub-component.\n\nA class called Packet is defined below to act as the data item that will be transferred from one component to another. This class object will have two random variables that can be randomized before sending.",
                        "code": "class Packet extends uvm_object;\n  rand bit[7:0] addr;\n  rand bit[7:0] data;\n \n  `uvm_object_utils_begin(Packet)\n    `uvm_field_int(addr, UVM_ALL_ON)\n    `uvm_field_int(data, UVM_ALL_ON)\n  `uvm_object_utils_end\n \n  function new(string name = \"Packet\");\n    super.new(name);\n  endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "subComp1",
                        "content": "This component is exactly the same as in UVM TLM FIFO example and starts sending packets using its uvm_blocking_put_port.",
                        "code": "class subComp1 extends uvm_component;\n   `uvm_component_utils (subComp1)\n \n  // Create a blocking TLM put port which can send an object\n  // of type 'Packet'\n  uvm_blocking_put_port #(Packet) m_put_port;\n  int m_num_tx;\n \n   function new (string name = \"subComp1\", uvm_component parent= null);\n      super.new (name, parent);\n   endfunction\n \n   // Remember that TLM put_port is a class object and it will have to be \n   // created with new ()\n   virtual function void build_phase (uvm_phase phase);\n      super.build_phase (phase);\n     m_put_port = new (\"m_put_port\", this);\n   endfunction\n \n  // Create a packet, randomize it and send it through the port\n  // Note that put() is a method defined by the receiving component\n  // Repeat these steps N times to send N packets\n   virtual task run_phase (uvm_phase phase);\n     repeat (m_num_tx) begin\n         Packet pkt = Packet::type_id::create (\"pkt\");\n         assert(pkt.randomize ()); \n \t\t#50;\n          // Print the packet to be displayed in log\n       `uvm_info (\"SUBCOMP1\", \"Packet sent to compA:tlm_fifo\", UVM_LOW)\n         pkt.print (uvm_default_line_printer);\n \n         // Call the TLM put() method of put_port class and pass packet as argument\n         m_put_port.put (pkt);\n      end\n   endtask   \nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "subComp2",
                        "content": "This sub-component is slightly slower in receiving packets compared to the one seen above, and accepts data through uvm_blocking_get_port.\n\nNote that this also has another put port of type uvm_blocking_put_port to forward data out of componentA.",
                        "code": "class subComp2 extends uvm_component;\n   `uvm_component_utils (subComp2)\n \n   // Create a get_port to request for data from subComp1\n   uvm_blocking_get_port #(Packet) m_get_port;\n  uvm_blocking_put_port #(Packet) m_put_port;\n \n  function new (string name, uvm_component parent);\n      super.new (name, parent);\n   endfunction\n \n   virtual function void build_phase (uvm_phase phase);\n      super.build_phase (phase);\n      m_get_port = new (\"m_get_port\", this);\n     m_put_port = new (\"m_put_port\", this);\n   endfunction\n \n   virtual task run_phase (uvm_phase phase);\n      Packet pkt;\n      forever begin\n       #100;\n         m_get_port.get (pkt);\n        `uvm_info (\"SUBCOMP2\", \"Packet received from compA:tlm_fifo, forward it\", UVM_LOW)\n        pkt.print (uvm_default_line_printer);\n        m_put_port.put(pkt);\n      end\n   endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "ComponentA",
                        "content": "This layer contains both sub-components connected together by a TLM FIFO since their transfer rates are different.\n\nNote that it also has another put port of type uvm_blocking_put_port to forward the packet it receives from subComp2 which is at a lower layer.",
                        "code": "class componentA extends uvm_component;\n   `uvm_component_utils (componentA)\n  function new(string name=\"componentA\", uvm_component parent=null);\n    super.new(name, parent);\n  endfunction\n  \n   subComp1 m_subcomp_1;\n   subComp2 m_subcomp_2;\n \n   uvm_tlm_fifo #(Packet)    \t\tm_tlm_fifo;\n   uvm_blocking_put_port #(Packet)  m_put_port;\n   int \t\t\t\t\t\t\t\tm_num_tx;\n \n   virtual function void build_phase (uvm_phase phase);\n      super.build_phase (phase);\n      // Create an object of both components\n      m_subcomp_1 = subComp1::type_id::create (\"m_subcomp_1\", this);\n      m_subcomp_2 = subComp2::type_id::create (\"m_subcomp_2\", this);\n \n      // Create a FIFO with depth 2\n      m_tlm_fifo = new (\"uvm_tlm_fifo\", this, 2);\n      m_put_port = new (\"m_put_port\", this);\n      m_subcomp_1.m_num_tx = m_num_tx;\n   endfunction\n \n   // Make componentA connections\n   virtual function void connect_phase (uvm_phase phase);\n     // Connect put port from subComp1 to TLM FIFO and then \n     // connect get_export of TLM FIFO with subComp2\n     m_subcomp_1.m_put_port.connect(m_tlm_fifo.put_export);\n     m_subcomp_2.m_get_port.connect(m_tlm_fifo.get_export);\n     \n     // Now connect subComp2 to componentA for forwarding pkt\n     m_subcomp_2.m_put_port.connect(this.m_put_port);\n   endfunction\n \n   // Display a message when the FIFO is full\n   virtual task run_phase (uvm_phase phase);\n      forever begin\n        #10 if (m_tlm_fifo.is_full ()) \n          `uvm_info (\"COMPA\", \"componentA:TLM_Fifo is now FULL !\", UVM_MEDIUM)\n      end\n   endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "subComp3",
                        "content": "Assume the destination component is even slower than the other components seen above and accepts packet using a uvm_blocking_get_port.",
                        "code": "// subComp3 accepts packet even slower than what componentA is sending out          \n// which is the reason we need a TLM FIFO in componentB\nclass subComp3 extends uvm_component;\n  `uvm_component_utils (subComp3)\n  \n   // Create a get_port to request for data from subComp1\n   uvm_blocking_get_port #(Packet) m_get_port;\n   int m_num_tx;\n \n  function new (string name, uvm_component parent);\n      super.new (name, parent);\n   endfunction\n \n   virtual function void build_phase (uvm_phase phase);\n      super.build_phase (phase);\n      m_get_port = new (\"m_get_port\", this);\n   endfunction\n \n   virtual task run_phase (uvm_phase phase);\n      Packet pkt;\n     repeat(m_num_tx) begin\n        #200;\n        m_get_port.get (pkt);\n        `uvm_info (\"SUBCOMP3\", \"Packet received from componentA\", UVM_LOW)\n        pkt.print (uvm_default_line_printer);\n      end\n   endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "ComponentB",
                        "content": "Another UVM TLM FIFO is required to be connected to subComp3 to buffer packets it receives because of the slower rate of destination. Note that this has a top level put_export port of type uvm_blocking_put_export.",
                        "code": "class componentB extends uvm_component;\n   `uvm_component_utils (componentB)\n \n   subComp3                    \t\t\tm_subcomp_3;\n  uvm_tlm_fifo #(Packet)    \t\t\tm_tlm_fifo;\n   uvm_blocking_put_export #(Packet) \tm_put_export;\n   int \t\t\t\t\t\t\t\t\tm_num_tx;\n \n   function new (string name = \"componentB\", uvm_component parent = null);\n      super.new (name, parent);\n   endfunction\n \n   virtual function void build_phase (uvm_phase phase);\n      super.build_phase (phase);\n      // Create an object of both components\n     m_subcomp_3 = subComp3::type_id::create (\"m_subcomp_3\", this);\n \n      // Create a FIFO with depth 2\n      m_tlm_fifo = new (\"tlm_fifo\", this, 2);\n \n      // Create the export to connect with componentA\n     m_put_export = new (\"m_put_export\", this);\n     \n     m_subcomp_3.m_num_tx = m_num_tx;\n   endfunction\n \n   virtual function void connect_phase (uvm_phase phase);\n      // Connect from componentB export to FIFO export\n     m_put_export.connect (m_tlm_fifo.put_export);\n \n      // Connect from FIFO export to subComponent3 port \n     m_subcomp_3.m_get_port.connect (m_tlm_fifo.get_export);\n   endfunction\n  \n     // Display a message when the FIFO is full\n   virtual task run_phase (uvm_phase phase);\n      forever begin\n        #10 if (m_tlm_fifo.is_full ()) \n          `uvm_info (\"COMPB\", \"componentB:TLM_Fifo is now FULL !\", UVM_MEDIUM)\n      end\n   endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Top Env/Test",
                        "content": "The connection between a port and its implementation has to be done at a higher hierarchical level. Since both components are instantiated directly within the test class in this example, the connection between them can be done during the connect_phase of the test. If these two components were instantiated in another component or environment, they have to be connected during the connect_phase of that component or environment.",
                        "code": "class my_test extends uvm_env;\n  `uvm_component_utils (my_test)\n \n  componentA compA;\n  componentB compB;\n  int \t\t m_num_tx;\n  \n  function new (string name = \"my_test\", uvm_component parent = null);\n      super.new (name, parent);\n   endfunction\n \n   virtual function void build_phase (uvm_phase phase);\n      super.build_phase (phase);\n     compA = componentA::type_id::create(\"componentA\", this);\n     compB = componentB::type_id::create(\"componentB\", this);\n     \n     std::randomize(m_num_tx) with { m_num_tx inside {[4:10]}; };\n     `uvm_info(\"TEST\", $sformatf(\"Create %0d packets in total\", m_num_tx), UVM_LOW)\n     compA.m_num_tx = m_num_tx;\n     compB.m_num_tx = m_num_tx;\n   endfunction\n \n   // Connect the ports to the export of FIFO.\n   virtual function void connect_phase (uvm_phase phase);\n     compA.m_put_port.connect(compB.m_put_export);\n   endfunction\n  \n  virtual task run_phase(uvm_phase phase);\n    super.run_phase(phase);\n    // Let all components finish for purpose of illustration\n    phase.raise_objection(this);\n    #1000;\n    phase.drop_objection(this);\n  endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test my_test...\nUVM_INFO testbench.sv(220) @ 0: uvm_test_top [TEST] Create 4 packets in total\nUVM_INFO testbench.sv(48) @ 50: uvm_test_top.componentA.m_subcomp_1 [SUBCOMP1] Packet sent to compA:tlm_fifo\npkt: (Packet@2663) { addr: 'h1f  data: 'h31  } \nUVM_INFO testbench.sv(79) @ 100: uvm_test_top.componentA.m_subcomp_2 [SUBCOMP2] Packet received from compA:tlm_fifo, forward it\npkt: (Packet@2663) { addr: 'h1f  data: 'h31  } \nUVM_INFO testbench.sv(48) @ 100: uvm_test_top.componentA.m_subcomp_1 [SUBCOMP1] Packet sent to compA:tlm_fifo\npkt: (Packet@2685) { addr: 'hf4  data: 'h91  } \nUVM_INFO testbench.sv(48) @ 150: uvm_test_top.componentA.m_subcomp_1 [SUBCOMP1] Packet sent to compA:tlm_fifo\npkt: (Packet@2699) { addr: 'hab  data: 'ha8  } \nUVM_INFO testbench.sv(126) @ 150: uvm_test_top.componentA [COMPA] componentA:TLM_Fifo is now FULL !\nUVM_INFO testbench.sv(126) @ 160: uvm_test_top.componentA [COMPA] componentA:TLM_Fifo is now FULL !\nUVM_INFO testbench.sv(126) @ 170: uvm_test_top.componentA [COMPA] componentA:TLM_Fifo is now FULL !\nUVM_INFO testbench.sv(126) @ 180: uvm_test_top.componentA [COMPA] componentA:TLM_Fifo is now FULL !\nUVM_INFO testbench.sv(126) @ 190: uvm_test_top.componentA [COMPA] componentA:TLM_Fifo is now FULL !\nUVM_INFO testbench.sv(154) @ 200: uvm_test_top.componentB.m_subcomp_3 [SUBCOMP3] Packet received from componentA\npkt: (Packet@2663) { addr: 'h1f  data: 'h31  } \nUVM_INFO testbench.sv(79) @ 200: uvm_test_top.componentA.m_subcomp_2 [SUBCOMP2] Packet received from compA:tlm_fifo, forward it\npkt: (Packet@2685) { addr: 'hf4  data: 'h91  } \nUVM_INFO testbench.sv(48) @ 200: uvm_test_top.componentA.m_subcomp_1 [SUBCOMP1] Packet sent to compA:tlm_fifo\npkt: (Packet@2681) { addr: 'h77  data: 'he7  } \nUVM_INFO testbench.sv(126) @ 200: uvm_test_top.componentA [COMPA] componentA:TLM_Fifo is now FULL !\nUVM_INFO testbench.sv(126) @ 210: uvm_test_top.componentA [COMPA] componentA:TLM_Fifo is now FULL !\nUVM_INFO testbench.sv(126) @ 220: uvm_test_top.componentA [COMPA] componentA:TLM_Fifo is now FULL !\nUVM_INFO testbench.sv(126) @ 230: uvm_test_top.componentA [COMPA] componentA:TLM_Fifo is now FULL !\nUVM_INFO testbench.sv(126) @ 240: uvm_test_top.componentA [COMPA] componentA:TLM_Fifo is now FULL !\nUVM_INFO testbench.sv(126) @ 250: uvm_test_top.componentA [COMPA] componentA:TLM_Fifo is now FULL !\nUVM_INFO testbench.sv(126) @ 260: uvm_test_top.componentA [COMPA] componentA:TLM_Fifo is now FULL !\nUVM_INFO testbench.sv(126) @ 270: uvm_test_top.componentA [COMPA] componentA:TLM_Fifo is now FULL !\nUVM_INFO testbench.sv(126) @ 280: uvm_test_top.componentA [COMPA] componentA:TLM_Fifo is now FULL !\nUVM_INFO testbench.sv(126) @ 290: uvm_test_top.componentA [COMPA] componentA:TLM_Fifo is now FULL !\nUVM_INFO testbench.sv(79) @ 300: uvm_test_top.componentA.m_subcomp_2 [SUBCOMP2] Packet received from compA:tlm_fifo, forward it\npkt: (Packet@2699) { addr: 'hab  data: 'ha8  } \nUVM_INFO testbench.sv(198) @ 300: uvm_test_top.componentB [COMPB] componentB:TLM_Fifo is now FULL !\nUVM_INFO testbench.sv(198) @ 310: uvm_test_top.componentB [COMPB] componentB:TLM_Fifo is now FULL !\nUVM_INFO testbench.sv(198) @ 320: uvm_test_top.componentB [COMPB] componentB:TLM_Fifo is now FULL !\nUVM_INFO testbench.sv(198) @ 330: uvm_test_top.componentB [COMPB] componentB:TLM_Fifo is now FULL !\nUVM_INFO testbench.sv(198) @ 340: uvm_test_top.componentB [COMPB] componentB:TLM_Fifo is now FULL !\nUVM_INFO testbench.sv(198) @ 350: uvm_test_top.componentB [COMPB] componentB:TLM_Fifo is now FULL !\nUVM_INFO testbench.sv(198) @ 360: uvm_test_top.componentB [COMPB] componentB:TLM_Fifo is now FULL !\nUVM_INFO testbench.sv(198) @ 370: uvm_test_top.componentB [COMPB] componentB:TLM_Fifo is now FULL !\nUVM_INFO testbench.sv(198) @ 380: uvm_test_top.componentB [COMPB] componentB:TLM_Fifo is now FULL !\nUVM_INFO testbench.sv(198) @ 390: uvm_test_top.componentB [COMPB] componentB:TLM_Fifo is now FULL !\nUVM_INFO testbench.sv(154) @ 400: uvm_test_top.componentB.m_subcomp_3 [SUBCOMP3] Packet received from componentA\npkt: (Packet@2685) { addr: 'hf4  data: 'h91  } \nUVM_INFO testbench.sv(79) @ 400: uvm_test_top.componentA.m_subcomp_2 [SUBCOMP2] Packet received from compA:tlm_fifo, forward it\npkt: (Packet@2681) { addr: 'h77  data: 'he7  } \nUVM_INFO testbench.sv(198) @ 400: uvm_test_top.componentB [COMPB] componentB:TLM_Fifo is now FULL !\nUVM_INFO testbench.sv(198) @ 410: uvm_test_top.componentB [COMPB] componentB:TLM_Fifo is now FULL !\nUVM_INFO testbench.sv(198) @ 420: uvm_test_top.componentB [COMPB] componentB:TLM_Fifo is now FULL !\nUVM_INFO testbench.sv(198) @ 430: uvm_test_top.componentB [COMPB] componentB:TLM_Fifo is now FULL !\nUVM_INFO testbench.sv(198) @ 440: uvm_test_top.componentB [COMPB] componentB:TLM_Fifo is now FULL !\nUVM_INFO testbench.sv(198) @ 450: uvm_test_top.componentB [COMPB] componentB:TLM_Fifo is now FULL !\nUVM_INFO testbench.sv(198) @ 460: uvm_test_top.componentB [COMPB] componentB:TLM_Fifo is now FULL !\nUVM_INFO testbench.sv(198) @ 470: uvm_test_top.componentB [COMPB] componentB:TLM_Fifo is now FULL !\nUVM_INFO testbench.sv(198) @ 480: uvm_test_top.componentB [COMPB] componentB:TLM_Fifo is now FULL !\nUVM_INFO testbench.sv(198) @ 490: uvm_test_top.componentB [COMPB] componentB:TLM_Fifo is now FULL !\nUVM_INFO testbench.sv(198) @ 500: uvm_test_top.componentB [COMPB] componentB:TLM_Fifo is now FULL !\nUVM_INFO testbench.sv(198) @ 510: uvm_test_top.componentB [COMPB] componentB:TLM_Fifo is now FULL !\nUVM_INFO testbench.sv(198) @ 520: uvm_test_top.componentB [COMPB] componentB:TLM_Fifo is now FULL !\nUVM_INFO testbench.sv(198) @ 530: uvm_test_top.componentB [COMPB] componentB:TLM_Fifo is now FULL !\nUVM_INFO testbench.sv(198) @ 540: uvm_test_top.componentB [COMPB] componentB:TLM_Fifo is now FULL !\nUVM_INFO testbench.sv(198) @ 550: uvm_test_top.componentB [COMPB] componentB:TLM_Fifo is now FULL !\nUVM_INFO testbench.sv(198) @ 560: uvm_test_top.componentB [COMPB] componentB:TLM_Fifo is now FULL !\nUVM_INFO testbench.sv(198) @ 570: uvm_test_top.componentB [COMPB] componentB:TLM_Fifo is now FULL !\nUVM_INFO testbench.sv(198) @ 580: uvm_test_top.componentB [COMPB] componentB:TLM_Fifo is now FULL !\nUVM_INFO testbench.sv(198) @ 590: uvm_test_top.componentB [COMPB] componentB:TLM_Fifo is now FULL !\nUVM_INFO testbench.sv(154) @ 600: uvm_test_top.componentB.m_subcomp_3 [SUBCOMP3] Packet received from componentA\npkt: (Packet@2699) { addr: 'hab  data: 'ha8  } \nUVM_INFO testbench.sv(154) @ 800: uvm_test_top.componentB.m_subcomp_3 [SUBCOMP3] Packet received from componentA\npkt: (Packet@2681) { addr: 'h77  data: 'he7  } \nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_objection.svh(1271) @ 1000: reporter [TEST_DONE] 'run' phase is ready to proceed to the 'extract' phase\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_report_server.svh(847) @ 1000: reporter [UVM/REPORT/SERVER] \n--- UVM Report Summary ---",
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
                "id": "cv-uvm-41",
                "num": 41,
                "title": "UVM TLM Analysis Port",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "The put/get communication we have seen earlier typically require a corresponding export to supply the implementation. The idea behind having an analysis port is that a component like monitor should be able to generate a stream of transactions regardless of whether there is a target actually connected to it.\n\nThe uvm_analysis_port is a specialized TLM based class whose interface consists of a single function write () and can be embedded within any component as shown in the snippet below. This port contains a list of analysis exports that are connected to it. When the component (my_monitor) calls analysis_port.write(), it basically cycles through the list and calls the write() method of each connected export. If nothing is connected to it, then it simply does not do anything.\n\nThe advantage lies in the fact that an analysis port may be connected to zero, one or many analysis exports and allows a component to call write() method without depending on the number of connected exports. Also it's worth to note that write() is a void function and hence will always complete within the same simulation delta cycle.",
                        "code": "class my_monitor extends uvm_component;\n\t...\n\tuvm_analysis_port #(my_data) analysis_port;\n\t...\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Example",
                        "content": "Let's take component B from the TLM Put example and connect three Subscribers to it. In order for component B to broadcast transactions to it's subscribers, there needs to be a special channel for communication. This is implemented by analysis ports. Analysis ports are declared using uvm_analysis_port so that component B can send transactions into the channel. We'll see how we can connect subscribers to this channel in a short while.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Declare analysis port",
                        "content": "",
                        "code": "class componentB extends uvm_component;\n\t`uvm_component_utils (componentB)\n   \n\t// Create an analysis port by the name \"ap\" that can broadcast packets of type \"simple_packet\"\n\tuvm_analysis_port #(simple_packet) ap;\n\n\tfunction new (string name = \"componentB\", uvm_component parent = null);\n\t\tsuper.new (name, parent);\n\tendfunction\n   \n\tvirtual function void build_phase (uvm_phase phase);\n\t\tsuper.build_phase (phase);\n\t\tap = new (\"analysis_port\", this);\n\tendfunction\n\n\tvirtual task run_phase (uvm_phase phase);\n\t\tsuper.run_phase (phase);\n\t  \n\t\tfor (int i = 0; i < 5; i++) begin\n\t  \t\tsimple_packet pkt = simple_packet::type_id::create (\"pkt\");\n\t  \t\tpkt.randomize();\n       \t\t// Now pass it to other components via the analysis port write() method\n      \t\tap.write (pkt);\n\t\tend\n\tendtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Define analysis port implementation",
                        "content": "Now let us create the subscriber component parameterized to simple_packet data type. Note that the subscriber implements the write() method, and for our purpose, we can just display a message. Because we have derived our subscriber from uvm_subscriber, it already has an analysis port implementation object predefined by the name analysis_export. Hence we won't have to declare another implementation port for our purpose. See the snippet of uvm_subscriber class below.\n\nNote that analysis ports given by uvm_analysis_port are always connected to its implementation port declared using uvm_analysis_imp. Function write() is the place where you need to implement the operation required to be done on the incoming transaction. In this example, we are simply printing an acknowledgment statment.",
                        "code": "virtual class uvm_subscriber #(type T=int) extends uvm_component;\n\ttypedef uvm_subscriber #(T) this_type;\n\t\n\tuvm_analysis_imp #(T, this_type) analysis_export;\n\t\n\tpure virtual function void write (T t);\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "class sub #(type T = simple_packet) extends uvm_subscriber #(T);\n   `uvm_component_utils (sub)\n\n   function new (string name = \"sub\", uvm_component parent = null);\n      super.new (name, parent);\n   endfunction\n\n   virtual function void build_phase (uvm_phase phase);\n      super.build_phase (phase);\n   endfunction\n\n   // Note that the class object name has to be \"t\" - anything else will result\n   // in compilation error\n   virtual function void write (T t);\n      `uvm_info (get_full_name(), \"Sub got transaction\", UVM_MEDIUM)\n   endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Connect analysis port with its implementation",
                        "content": "Since all our components are instantiated within the environment my_env, it is easier to connect between components at this level. This is done in the connect_phase() method where the analysis port of component B is connected with multiple implementation ports defined within each subscriber.",
                        "code": "class my_env extends uvm_env;\n   `uvm_component_utils (my_env)\n\n   componentA  compA;\n   componentB  compB;\n   sub         sub1; \n   sub         sub2; \n   sub         sub3; \n\n   function new (string name = \"my_env\", uvm_component parent = null);\n      super.new (name, parent);\n   endfunction\n\n   virtual function void build_phase (uvm_phase phase);\n      super.build_phase (phase);\n      // Create an object of both components\n      compA = componentA::type_id::create (\"compA\", this);\n      compB = componentB::type_id::create (\"compB\", this);\n      sub1 = sub::type_id::create (\"sub1\", this);\n      sub2 = sub::type_id::create (\"sub2\", this);\n      sub3 = sub::type_id::create (\"sub3\", this);\n   endfunction\n\n   virtual function void connect_phase (uvm_phase phase);\n      compA.put_port.connect (compB.put_export);  \n\n      // Connect Analysis Ports\n      compB.ap.connect (sub1.analysis_export);\n      compB.ap.connect (sub2.analysis_export);\n      compB.ap.connect (sub3.analysis_export);\n   endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "----------------------------------------------------------------\nCDNS-UVM-1.1d (15.10-s004)\n(C) 2007-2013 Mentor Graphics Corporation\n(C) 2007-2013 Cadence Design Systems, Inc.\n(C) 2006-2013 Synopsys, Inc.\n(C) 2011-2013 Cypress Semiconductor Corp.\n----------------------------------------------------------------\nUVM_INFO @ 0: reporter [RNTST] Running test base_test...\nUVM_INFO @ 0: reporter [UVMTOP] UVM testbench topology:\n-------------------------------------------------------\nName                 Type                   Size  Value\n-------------------------------------------------------\nuvm_test_top         base_test              -     @2602\n  m_top_env          my_env                 -     @2668\n    compA            componentA             -     @2699\n      put_port       uvm_blocking_put_port  -     @3015\n    compB            componentB             -     @2729\n      analysis_port  uvm_analysis_port      -     @3115\n      put_export     uvm_blocking_put_imp   -     @3066\n    sub1             sub                    -     @2759\n      analysis_imp   uvm_analysis_imp       -     @2808\n    sub2             sub                    -     @2839\n      analysis_imp   uvm_analysis_imp       -     @2888\n    sub3             sub                    -     @2869\n      analysis_imp   uvm_analysis_imp       -     @2966\n-------------------------------------------------------\n\nUVM_INFO ./tb/tlm.sv(61) @ 0: uvm_test_top.m_top_env.compA [COMPA] Packet sent to CompB\npkt: (simple_packet@3205) { addr: 'h2f  data: 'h64  rwb: 'h0  }\nUVM_INFO ./tb/tlm.sv(91) @ 0: uvm_test_top.m_top_env.compB [COMPB] Packet received from CompA\n----------------------------------\nName    Type           Size  Value\n----------------------------------\npkt     simple_packet  -     @3205\n  addr  integral       8     'h2f\n  data  integral       8     'h64\n  rwb   integral       1     'h0\n----------------------------------\nUVM_INFO ./tb/tlm.sv(122) @ 0: uvm_test_top.m_top_env.sub1 [uvm_test_top.m_top_env.sub1] Sub got transaction\nUVM_INFO ./tb/tlm.sv(122) @ 0: uvm_test_top.m_top_env.sub2 [uvm_test_top.m_top_env.sub2] Sub got transaction\nUVM_INFO ./tb/tlm.sv(122) @ 0: uvm_test_top.m_top_env.sub3 [uvm_test_top.m_top_env.sub3] Sub got transaction\nUVM_INFO ./tb/tlm.sv(61) @ 0: uvm_test_top.m_top_env.compA [COMPA] Packet sent to CompB\npkt: (simple_packet@3198) { addr: 'hb8  data: 'h27  rwb: 'h0  }\nUVM_INFO ./tb/tlm.sv(91) @ 0: uvm_test_top.m_top_env.compB [COMPB] Packet received from CompA\n----------------------------------\nName    Type           Size  Value\n----------------------------------\npkt     simple_packet  -     @3198\n  addr  integral       8     'hb8\n  data  integral       8     'h27\n  rwb   integral       1     'h0\n----------------------------------\nUVM_INFO ./tb/tlm.sv(122) @ 0: uvm_test_top.m_top_env.sub1 [uvm_test_top.m_top_env.sub1] Sub got transaction\nUVM_INFO ./tb/tlm.sv(122) @ 0: uvm_test_top.m_top_env.sub2 [uvm_test_top.m_top_env.sub2] Sub got transaction\nUVM_INFO ./tb/tlm.sv(122) @ 0: uvm_test_top.m_top_env.sub3 [uvm_test_top.m_top_env.sub3] Sub got transaction\nUVM_INFO ./tb/tlm.sv(61) @ 0: uvm_test_top.m_top_env.compA [COMPA] Packet sent to CompB\npkt: (simple_packet@3170) { addr: 'he3  data: 'h29  rwb: 'h0  }\nUVM_INFO ./tb/tlm.sv(91) @ 0: uvm_test_top.m_top_env.compB [COMPB] Packet received from CompA\n----------------------------------\nName    Type           Size  Value\n----------------------------------\npkt     simple_packet  -     @3170\n  addr  integral       8     'he3\n  data  integral       8     'h29\n  rwb   integral       1     'h0\n----------------------------------\nUVM_INFO ./tb/tlm.sv(122) @ 0: uvm_test_top.m_top_env.sub1 [uvm_test_top.m_top_env.sub1] Sub got transaction\nUVM_INFO ./tb/tlm.sv(122) @ 0: uvm_test_top.m_top_env.sub2 [uvm_test_top.m_top_env.sub2] Sub got transaction\nUVM_INFO ./tb/tlm.sv(122) @ 0: uvm_test_top.m_top_env.sub3 [uvm_test_top.m_top_env.sub3] Sub got transaction\nUVM_INFO ./tb/tlm.sv(61) @ 0: uvm_test_top.m_top_env.compA [COMPA] Packet sent to CompB\npkt: (simple_packet@3175) { addr: 'h85  data: 'hbd  rwb: 'h0  }\nUVM_INFO ./tb/tlm.sv(91) @ 0: uvm_test_top.m_top_env.compB [COMPB] Packet received from CompA\n----------------------------------\nName    Type           Size  Value\n----------------------------------\npkt     simple_packet  -     @3175\n  addr  integral       8     'h85\n  data  integral       8     'hbd\n  rwb   integral       1     'h0\n----------------------------------\nUVM_INFO ./tb/tlm.sv(122) @ 0: uvm_test_top.m_top_env.sub1 [uvm_test_top.m_top_env.sub1] Sub got transaction\nUVM_INFO ./tb/tlm.sv(122) @ 0: uvm_test_top.m_top_env.sub2 [uvm_test_top.m_top_env.sub2] Sub got transaction\nUVM_INFO ./tb/tlm.sv(122) @ 0: uvm_test_top.m_top_env.sub3 [uvm_test_top.m_top_env.sub3] Sub got transaction\nUVM_INFO ./tb/tlm.sv(61) @ 0: uvm_test_top.m_top_env.compA [COMPA] Packet sent to CompB\npkt: (simple_packet@3192) { addr: 'hdf  data: 'hab  rwb: 'h0  }\nUVM_INFO ./tb/tlm.sv(91) @ 0: uvm_test_top.m_top_env.compB [COMPB] Packet received from CompA\n----------------------------------\nName    Type           Size  Value\n----------------------------------\npkt     simple_packet  -     @3192\n  addr  integral       8     'hdf\n  data  integral       8     'hab\n  rwb   integral       1     'h0\n----------------------------------\nUVM_INFO ./tb/tlm.sv(122) @ 0: uvm_test_top.m_top_env.sub1 [uvm_test_top.m_top_env.sub1] Sub got transaction\nUVM_INFO ./tb/tlm.sv(122) @ 0: uvm_test_top.m_top_env.sub2 [uvm_test_top.m_top_env.sub2] Sub got transaction\nUVM_INFO ./tb/tlm.sv(122) @ 0: uvm_test_top.m_top_env.sub3 [uvm_test_top.m_top_env.sub3] Sub got transaction\n\n--- UVM Report catcher Summary ---\n\n\nNumber of demoted UVM_FATAL reports  :    0\nNumber of demoted UVM_ERROR reports  :    0\nNumber of demoted UVM_WARNING reports:    0\nNumber of caught UVM_FATAL reports   :    0\nNumber of caught UVM_ERROR reports   :    0\nNumber of caught UVM_WARNING reports :    0\n\n--- UVM Report Summary ---\n\n** Report counts by severity\nUVM_INFO :   27\nUVM_WARNING :    0\nUVM_ERROR :    0\nUVM_FATAL :    0\n** Report counts by id\n[COMPA]     5\n[COMPB]     5\n[RNTST]     1\n[UVMTOP]     1\n[uvm_test_top.m_top_env.sub1]     5\n[uvm_test_top.m_top_env.sub2]     5\n[uvm_test_top.m_top_env.sub3]     5\nSimulation complete via $finish(1) at time 0 FS + 179",
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
                "id": "cv-uvm-42",
                "num": 42,
                "title": "UVM TLM Sockets",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "TLM 2.0 introduced socket which enables asynchronous bi-directional data transfer between the initiator and target component. A socket is derived from the same base class as ports and export - uvm_port_base. Components that initiate transactions have initiator sockets and are called initiators, while components that receive transactions have target sockets and are called targets. Note that initiator sockets can be connected only to target sockets and target sockets only to initiator sockets.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "TestBench",
                        "content": "Let's take a look at the initiator component to see how a socket is declared and used. The timing annotation argument used in b_transport() method allows the timing points to be offset from simulation times at which the task is called and returned.\n\nConsider the target socket and you'll see that it is very similar to the ports and exports scheme we saw in previous sessions.",
                        "code": "class initiator extends uvm_component;\n   `uvm_component_utils (initiator)\n\n   // Declare a blocking transport socket (using initiator socket class)\n   uvm_tlm_b_initiator_socket #(simple_packet) initSocket;\n   uvm_tlm_time   delay;\n   simple_packet  pkt;\n\n   function new (string name = \"initiator\", uvm_component parent= null);\n      super.new (name, parent);\n   endfunction\n\n   virtual function void build_phase (uvm_phase phase);\n      super.build_phase (phase);\n      \n      // Create an instance of the socket\n      initSocket = new (\"initSocket\", this);\n      delay = new ();\n   endfunction\n\n   virtual task run_phase (uvm_phase phase);\n      // Let us generate 5 packets and send it via socket\n      repeat (5) begin\n         pkt = simple_packet::type_id::create (\"pkt\");\n         assert(pkt.randomize ()); \n         `uvm_info (\"INIT\", \"Packet sent to target\", UVM_LOW)\n         pkt.print (uvm_default_line_printer);\n         \n         // Use the socket to send data\n         initSocket.b_transport (pkt, delay);\n      end\n   endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "The missing link is the connection between the two sockets, and the best place to do that is in the environment where both initiator and target components are instantiated.",
                        "code": "class target extends uvm_component;\n   `uvm_component_utils (target)\n\n   // Declare a blocking target socket\n   uvm_tlm_b_target_socket #(target, simple_packet) targetSocket;\n\n   function new (string name = \"target\", uvm_component parent = null);\n      super.new (name, parent);\n   endfunction\n   \n   virtual function void build_phase (uvm_phase phase);\n      super.build_phase (phase);\n      \n      // Create an instance of the target socket\n      targetSocket = new (\"targetSocket\", this);\n   endfunction\n\n\t// Provide the implementation method of b_transport in the target class\n   task b_transport (simple_packet pkt, uvm_tlm_time delay);\n      `uvm_info (\"TGT\", \"Packet received from Initiator\", UVM_MEDIUM)\n      pkt.print (uvm_default_line_printer);\n   endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "class my_env extends uvm_env;\n   `uvm_component_utils (my_env)\n\n   initiator   init;\n   target      tgt;\n\n   function new (string name = \"my_env\", uvm_component parent = null);\n      super.new (name, parent);\n   endfunction\n\n   virtual function void build_phase (uvm_phase phase);\n      super.build_phase (phase);\n      // Create an object of both components\n      init = initiator::type_id::create (\"init\", this);\n      tgt = target::type_id::create (\"tgt\", this);\n   endfunction\n\n   // Connect both sockets in the connect_phase\n   virtual function void connect_phase (uvm_phase phase);\n      init.initSocket.connect (tgt.targetSocket);  \n   endfunction\nendclass",
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
                "id": "cv-uvm-43",
                "num": 43,
                "title": "Using _decl macro in TLM",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "We have seen the scenario in TLM - Put, where data sent to componentB is executed using the put() method defined in B. Let us consider the case where there are two components A and C connected to B's export. Then, any data object sent by either componentA or componentC will be received by componentB and operated upon by the same put() method. If there's a need to be able to process them separately, you would need to have two separate put() methods.\n\nUVM provides us with the `uvm_*_put_imp_decl () macro to deal with cases when the component needs to provide two put implementation ports.\n\nNote the following from the sample code above:\n\nUVM will create two new classes by the name uvm_put_imp_1 and uvm_put_imp_2 when the macros are called. That is the reason why you have to append the argument to uvm_put_imp when trying to create an object. Even the put() method defined in those classes have the argument appended to it. You may give any name as the argument instead of _1 and _2, but make sure to use the same afterwards.\n\nLet's first create componentA and componentC.",
                        "code": "`uvm_put_imp_decl (_1)\n`uvm_put_imp_decl (_2)\n\nclass my_put_imp #(type T=int) extends uvm_component;\n\tuvm_put_imp_1 #(T, my_put_imp #(T)) put_imp1;\n\tuvm_put_imp_2 #(T, my_put_imp #(T)) put_imp2;\n\t\n\tfunction void put_1 (input T t);\n\t\t// puts coming from put_imp1\n\tendfunction\n\t\n\tfunction void put_2 (input T t);\n\t\t// puts coming from put_imp2\n\tendfunction\n\t...\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Coming to componentB, notice that we have used the sample code shown before to implement the macros.",
                        "code": "//------------------------ componentA -------------------------------------\n\n\tclass componentA extends uvm_component;\n   `uvm_component_utils (componentA)\n\n   // We are creating a put_port parameterized to use a \"simple_packet\" type of data\n   uvm_blocking_put_port #(simple_packet) put_port;\n   simple_packet  pkt;\n\n   function new (string name = \"componentA\", uvm_component parent= null);\n      super.new (name, parent);\n   endfunction\n\n   virtual function void build_phase (uvm_phase phase);\n      super.build_phase (phase);\n      // Remember that put_port is a class object and it will have to be \n      // created with new ()\n      put_port = new (\"put_port\", this);\n   endfunction\n\n   virtual task run_phase (uvm_phase phase);\n      // Let us generate 5 packets and send it via the put_port\n      repeat (2) begin\n         pkt = simple_packet::type_id::create (\"pkt\");\n         assert(pkt.randomize ()); \n         `uvm_info (\"COMPA\", \"Packet sent to CompB\", UVM_LOW)\n         pkt.print (uvm_default_line_printer);\n         put_port.put (pkt);\n      end\n   endtask\nendclass\n\n//------------------------ componentC -------------------------------------\nclass componentC extends uvm_component;\n   `uvm_component_utils (componentC)\n\n   // We are creating a put_port which will accept a \"simple_packet\" type of data\n   uvm_blocking_put_port #(simple_packet) put_port;\n   simple_packet  pkt;\n\n   function new (string name = \"componentC\", uvm_component parent= null);\n      super.new (name, parent);\n   endfunction\n\n   virtual function void build_phase (uvm_phase phase);\n      super.build_phase (phase);\n      // Remember that put_port is a class object and it will have to be \n      // created with new ()\n      put_port = new (\"put_port\", this);\n   endfunction\n\n   virtual task run_phase (uvm_phase phase);\n      // Let us generate 5 packets and send it via the put_port\n      repeat (2) begin\n         pkt = simple_packet::type_id::create (\"pkt\");\n         assert(pkt.randomize ()); \n         `uvm_info (\"COMPC\", \"Packet sent to CompB\", UVM_LOW)\n         pkt.print (uvm_default_line_printer);\n         put_port.put (pkt);\n      end\n   endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Environment will have all the three component instantiations, and connect componentA with componentB's put_imp1 port, while componentC will be connected to componentB's put_imp2.",
                        "code": "`uvm_blocking_put_imp_decl (_1)\n`uvm_blocking_put_imp_decl (_2)\n\nclass componentB extends uvm_component;\n   `uvm_component_utils (componentB)\n   \n   // Mention type of transaction, and type of class that implements the put ()\n   uvm_blocking_put_imp_1 #(simple_packet, componentB) put_imp1;\n   uvm_blocking_put_imp_2 #(simple_packet, componentB) put_imp2;\n\n   function new (string name = \"componentB\", uvm_component parent = null);\n      super.new (name, parent);\n   endfunction\n   \n   virtual function void build_phase (uvm_phase phase);\n      super.build_phase (phase);\n      put_imp1 = new (\"put_imp1\", this);\n      put_imp2 = new (\"put_imp2\", this);\n   endfunction\n\n   task put_1 (simple_packet pkt);\n      `uvm_info (\"COMPB\", \"Packet received from put_1\", UVM_LOW)\n      pkt.print (uvm_default_line_printer);\n   endtask\n\n   task put_2 (simple_packet pkt);\n      `uvm_info (\"COMPB\", \"Packet received from put_2\", UVM_LOW)\n      pkt.print (uvm_default_line_printer);\n   endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "class my_env extends uvm_env;\n   `uvm_component_utils (my_env)\n\n   componentA compA;\n   componentC compC;\n   componentB compB;\n\n   function new (string name = \"my_env\", uvm_component parent = null);\n      super.new (name, parent);\n   endfunction\n\n   virtual function void build_phase (uvm_phase phase);\n      super.build_phase (phase);\n      compA = componentA::type_id::create (\"compA\", this);\n      compC = componentC::type_id::create (\"compC\", this);\n      compB = componentB::type_id::create (\"compB\", this);\n   endfunction\n\n   virtual function void connect_phase (uvm_phase phase);\n      compA.put_port.connect (compB.put_imp1);  \n      compC.put_port.connect (compB.put_imp2);\n   endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test base_test...\nUVM_INFO @ 0: reporter [UVMTOP] UVM testbench topology:\n---------------------------------------------------\nName            Type                    Size  Value\n---------------------------------------------------\nuvm_test_top    base_test               -     @2602\n  m_top_env     my_env                  -     @2668\n    compA       componentA              -     @2699\n      put_port  uvm_blocking_put_port   -     @2808\n    compB       componentB              -     @2759\n      put_imp1  uvm_blocking_put_imp_1  -     @2861\n      put_imp2  uvm_blocking_put_imp_2  -     @2910\n    compC       componentC              -     @2729\n      put_port  uvm_blocking_put_port   -     @2962\n---------------------------------------------------\n\nUVM_INFO ./tb/tlm.sv(95) @ 0: uvm_test_top.m_top_env.compC [COMPC] Packet sent to CompB\npkt: (simple_packet@3032) { addr: 'h53  data: 'hc4  rwb: 'h0  }\nUVM_INFO ./tb/tlm.sv(144) @ 0: uvm_test_top.m_top_env.compB [COMPB] Packet received from put_2\npkt: (simple_packet@3032) { addr: 'h53  data: 'hc4  rwb: 'h0  }\nUVM_INFO ./tb/tlm.sv(95) @ 0: uvm_test_top.m_top_env.compC [COMPC] Packet sent to CompB\npkt: (simple_packet@3051) { addr: 'h40  data: 'h3f  rwb: 'h0  }\nUVM_INFO ./tb/tlm.sv(144) @ 0: uvm_test_top.m_top_env.compB [COMPB] Packet received from put_2\npkt: (simple_packet@3051) { addr: 'h40  data: 'h3f  rwb: 'h0  }\nUVM_INFO ./tb/tlm.sv(61) @ 0: uvm_test_top.m_top_env.compA [COMPA] Packet sent to CompB\npkt: (simple_packet@3014) { addr: 'h2f  data: 'h64  rwb: 'h0  }\nUVM_INFO ./tb/tlm.sv(139) @ 0: uvm_test_top.m_top_env.compB [COMPB] Packet received from put_1\npkt: (simple_packet@3014) { addr: 'h2f  data: 'h64  rwb: 'h0  }\nUVM_INFO ./tb/tlm.sv(61) @ 0: uvm_test_top.m_top_env.compA [COMPA] Packet sent to CompB\npkt: (simple_packet@3061) { addr: 'hb8  data: 'h27  rwb: 'h0  }\nUVM_INFO ./tb/tlm.sv(139) @ 0: uvm_test_top.m_top_env.compB [COMPB] Packet received from put_1\npkt: (simple_packet@3061) { addr: 'hb8  data: 'h27  rwb: 'h0  }\n\n--- UVM Report catcher Summary ---",
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
                "id": "cv-uvm-44",
                "num": 44,
                "title": "UVM TLM Nonblocking Put Port",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "A previous article showed examples of using a uvm_blocking_put_port TLM port that was blocking in nature where the sender gets stalled until the receiver finishes with the put task.\n\nSimilarly, UVM TLM also has a non-blocking method of type uvm_nonblocking_put_port where the sender has to use try_put to see if the put was successful or can_put method to see if the receiver is ready to accept a transfer. Like before, the UVM TLM non-blocking put port should ultimately be connected to a non-blocking put implementation port.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "UVM TLM Nonblocking Put Example",
                        "content": "A class called Packet is defined below to act as the data item that will be transferred from one component to another. This class object will have two random variables that can be randomized before sending.\n\nA class called componentA is created which has a uvm_nonblocking_put_port parameterized to accept a data object of type Packet. The port has to be instantiated with the new() method preferably in the build_phase of the same component.\n\nIn this example, a class object of type Packet is created, randomized and sent via the put_port handle by calling the try_put method. Many such packets can be sent using a simple loop controlled by a configurable variable. The try_put function should ideally return 1 if the transfer is successful and 0 if it failed and should be provided by the receiver which implements the function.",
                        "code": "// Create a class data object that can be sent from one \n// component to another\nclass Packet extends uvm_object;\n  rand bit[7:0] addr;\n  rand bit[7:0] data;\n  \n  `uvm_object_utils_begin(Packet)\n  \t`uvm_field_int(addr, UVM_ALL_ON)\n  \t`uvm_field_int(data, UVM_ALL_ON)\n  `uvm_object_utils_end\n  \n  function new(string name = \"Packet\");\n    super.new(name);\n  endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "The receiver class needs to define an implementation port using uvm_nonblocking_put_imp. Since the port is nonblocking in nature, the try_put implementation is a function which has to be defined by this component.",
                        "code": "class componentA extends uvm_component;\n   `uvm_component_utils (componentA)\n \n  // Create a nonblocking TLM put port which can send an object\n  // of type 'Packet'\n  uvm_nonblocking_put_port #(Packet) m_put_port;\n  int m_num_tx;\n \n   function new (string name = \"componentA\", uvm_component parent= null);\n      super.new (name, parent);\n   endfunction\n\n   // Remember that TLM put_port is a class object and it will have to be \n   // created with new ()\n   virtual function void build_phase (uvm_phase phase);\n      super.build_phase (phase);\n     m_put_port = new (\"m_put_port\", this);\n   endfunction\n \n  // Create a packet, randomize it and send it through the port\n  // Note that put() is a method defined by the receiving component\n  // Repeat these steps N times to send N packets\n   virtual task run_phase (uvm_phase phase);\n     phase.raise_objection(this);\n     repeat (m_num_tx) begin\n        bit success;\n         Packet pkt = Packet::type_id::create (\"pkt\");\n         assert(pkt.randomize ()); \n       \n        // Print the packet to be displayed in log\n         `uvm_info (\"COMPA\", \"Packet sent to CompB\", UVM_LOW)\n         pkt.print (uvm_default_line_printer);\n \n\t\t// Try to put the packet through the put port\n\t    success = m_put_port.try_put(pkt);\n\t    if (success) \n           `uvm_info(\"COMPA\", $sformatf(\"COMPB was ready to accept and transfer is successful\"), UVM_MEDIUM)\n         else\n           `uvm_info(\"COMPA\", $sformatf(\"COMPB was NOT ready to accept and transfer failed\"), UVM_MEDIUM)\n      end\n     phase.drop_objection(this);\n   endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "The connection between a port and its implementation has to be done at a higher hierarchical level. Since both components are instantiated directly within the test class in this example, the connection between them can be done during the connect_phase of the test. If these two components were instantiated in another component or environment, they have to be connected during the connect_phase of that component or environment.",
                        "code": "class componentB extends uvm_component;\n   `uvm_component_utils (componentB)\n \n   // Mention type of transaction, and type of class that implements the put ()\n  uvm_nonblocking_put_imp #(Packet, componentB) m_put_imp;\n\n   function new (string name = \"componentB\", uvm_component parent = null);\n      super.new (name, parent);\n   endfunction\n \n   virtual function void build_phase (uvm_phase phase);\n      super.build_phase (phase);\n      m_put_imp = new (\"m_put_imp\", this);\n   endfunction\n \n  // 'try_put' method definition accepts the packet and prints it.\n  // Note that it should return 1 if successful so that componentA\n  // knows how to handle the transfer return code\n  virtual function bit try_put (Packet pkt);\n    `uvm_info (\"COMPB\", \"Packet received\", UVM_LOW)\n      pkt.print(uvm_default_line_printer);\n      return 1;\n  endfunction\n  \n  virtual function bit can_put();\n  endfunction\n\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "class my_test extends uvm_test;\n  `uvm_component_utils (my_test)\n \n   componentA compA;\n   componentB compB;\n \n  function new (string name = \"my_test\", uvm_component parent = null);\n      super.new (name, parent);\n   endfunction\n \n     // Create objects of both components, set number of transfers\n   virtual function void build_phase (uvm_phase phase);\n      super.build_phase (phase);\n      compA = componentA::type_id::create (\"compA\", this);\n      compB = componentB::type_id::create (\"compB\", this);\n      compA.m_num_tx = 2;\n   endfunction\n \n   // Connection between componentA and componentB is done here\n   // Note that the \"put_port\" is connected to its implementation \"put_imp\"\n   virtual function void connect_phase (uvm_phase phase);\n     compA.m_put_port.connect (compB.m_put_imp);  \n   endfunction\n  \n  virtual function void end_of_elaboration_phase(uvm_phase phase);\n    super.end_of_elaboration_phase(phase);\n    uvm_top.print_topology();\n  endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test my_test...\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_root.svh(579) @ 0: reporter [UVMTOP] UVM testbench topology:\n-----------------------------------------------------\nName            Type                      Size  Value\n-----------------------------------------------------\nuvm_test_top    my_test                   -     @1836\n  compA         componentA                -     @1905\n    m_put_port  uvm_nonblocking_put_port  -     @1971\n  compB         componentB                -     @1936\n    m_put_imp   uvm_nonblocking_put_imp   -     @2010\n-----------------------------------------------------\n\nUVM_INFO testbench.sv(60) @ 0: uvm_test_top.compA [COMPA] Packet sent to CompB\npkt: (Packet@2048) { addr: 'ha1  data: 'h64  } \nUVM_INFO testbench.sv(96) @ 0: uvm_test_top.compB [COMPB] Packet received\npkt: (Packet@2048) { addr: 'ha1  data: 'h64  } \nUVM_INFO testbench.sv(66) @ 0: uvm_test_top.compA [COMPA] COMPB was ready to accept and transfer is successful\nUVM_INFO testbench.sv(60) @ 0: uvm_test_top.compA [COMPA] Packet sent to CompB\npkt: (Packet@2091) { addr: 'hc1  data: 'hb9  } \nUVM_INFO testbench.sv(96) @ 0: uvm_test_top.compB [COMPB] Packet received\npkt: (Packet@2091) { addr: 'hc1  data: 'hb9  } \nUVM_INFO testbench.sv(66) @ 0: uvm_test_top.compA [COMPA] COMPB was ready to accept and transfer is successful\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_objection.svh(1271) @ 0: reporter [TEST_DONE] 'run' phase is ready to proceed to the 'extract' phase\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_report_server.svh(847) @ 0: reporter [UVM/REPORT/SERVER] \n--- UVM Report Summary ---",
                        "lang": "verilog"
                    },
                    {
                        "title": "Nonblocking Behavior",
                        "content": "The code snippet in the example shown above can be modified to model try_put in a blocking manner. componentA now uses a do while loop for multiple attempts until try_put is successful.\n\nImplementation of the try_put function by componentB is changed to return a random value to model the readiness of the receiver. try_put will return 0 if the receiver is not ready to accept.",
                        "code": "class componentA extends uvm_component;\n   `uvm_component_utils (componentA)\n\n   // Rest of the code remains same \n\n   virtual task run_phase (uvm_phase phase);\n     phase.raise_objection(this);\n     repeat (m_num_tx) begin\n        bit success;\n         Packet pkt = Packet::type_id::create (\"pkt\");\n         assert(pkt.randomize ()); \n       \n        // Print the packet to be displayed in log\n         `uvm_info (\"COMPA\", \"Packet sent to CompB\", UVM_LOW)\n         pkt.print (uvm_default_line_printer);\n \n       // do-while loop uses a \"try_put\" to keep the sender blocked until the receiver is ready. Return\n       // type of the try_put indicates if the transfer was successful. So, lets just try putting \n       // the same packet until the receiver returns a 1 indicating successful transfer. \n       // Note that this is the same as using \"put\" but we are doing it with \"try_put\" and a loop\n       do begin\n         success = m_put_port.try_put(pkt);\n         if (success) \n           `uvm_info(\"COMPA\", $sformatf(\"COMPB was ready to accept and transfer is successful\"), UVM_MEDIUM)\n         else\n           `uvm_info(\"COMPA\", $sformatf(\"COMPB was NOT ready to accept and transfer failed, try after 1ns\"), UVM_MEDIUM)\n         #1;\n       end while (!success);\n      end\n     phase.drop_objection(this);\n   endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "class componentB extends uvm_component;\n   `uvm_component_utils (componentB)\n \n  // Rest of the code remains same\n \n  // 'try_put' method definition accepts the packet and prints it.\n  // Note that it should return 1 if successful so that componentA\n  // knows how to handle the transfer return code\n  // For purpose of example, lets randomize a variable \n  // just to say that this component is ready or not\n  virtual function bit try_put (Packet pkt);\n    bit ready;\n    std::randomize(ready);\n    \n    if (ready) begin\n      `uvm_info (\"COMPB\", \"Packet received\", UVM_LOW)\n      pkt.print(uvm_default_line_printer);\n      return 1;\n      \n    end else begin\n    \treturn 0;\n    end\n  endfunction\n  \n  virtual function bit can_put();\n  endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test my_test...\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_root.svh(579) @ 0: reporter [UVMTOP] UVM testbench topology:\n-----------------------------------------------------\nName            Type                      Size  Value\n-----------------------------------------------------\nuvm_test_top    my_test                   -     @1836\n  compA         componentA                -     @1905\n    m_put_port  uvm_nonblocking_put_port  -     @1971\n  compB         componentB                -     @1936\n    m_put_imp   uvm_nonblocking_put_imp   -     @2010\n-----------------------------------------------------\n\nUVM_INFO testbench.sv(60) @ 0: uvm_test_top.compA [COMPA] Packet sent to CompB\npkt: (Packet@2048) { addr: 'ha1  data: 'h64  } \nUVM_INFO testbench.sv(74) @ 0: uvm_test_top.compA [COMPA] COMPB was NOT ready to accept and transfer failed, try after 1ns\nUVM_INFO testbench.sv(125) @ 1: uvm_test_top.compB [COMPB] Packet received\npkt: (Packet@2048) { addr: 'ha1  data: 'h64  } \nUVM_INFO testbench.sv(72) @ 1: uvm_test_top.compA [COMPA] COMPB was ready to accept and transfer is successful\nUVM_INFO testbench.sv(60) @ 2: uvm_test_top.compA [COMPA] Packet sent to CompB\npkt: (Packet@2104) { addr: 'h68  data: 'h7d  } \nUVM_INFO testbench.sv(125) @ 2: uvm_test_top.compB [COMPB] Packet received\npkt: (Packet@2104) { addr: 'h68  data: 'h7d  } \nUVM_INFO testbench.sv(72) @ 2: uvm_test_top.compA [COMPA] COMPB was ready to accept and transfer is successful\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_objection.svh(1271) @ 3: reporter [TEST_DONE] 'run' phase is ready to proceed to the 'extract' phase\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_report_server.svh(847) @ 3: reporter [UVM/REPORT/SERVER] \n--- UVM Report Summary ---",
                        "lang": "verilog"
                    },
                    {
                        "title": "UVM TLM can_put Example",
                        "content": "Instead of directly trying to put a packet, the sender can first query to see if the receiver is ready or not with can_put function and then send the packet.\n\nThe can_put function in componentB is set to return a random value in this example to model readiness of the receiver.",
                        "code": "class componentA extends uvm_component;\n   `uvm_component_utils (componentA)\n \n   // Rest of the code remains same\n\t\n   virtual task run_phase (uvm_phase phase);\n     phase.raise_objection(this);\n     repeat (m_num_tx) begin\n        bit success;\n         Packet pkt = Packet::type_id::create (\"pkt\");\n         assert(pkt.randomize ()); \n       \n        // Print the packet to be displayed in log\n         `uvm_info (\"COMPA\", \"Packet sent to CompB\", UVM_LOW)\n         pkt.print (uvm_default_line_printer);\n \n       \t// Another way to do the same is to loop until can_put returns a 1. In this case, its is \n       \t// not even attempted to send a transaction using put, until the sender knows for sure\n       \t// that the receiver is ready to accept it\n       \t`uvm_info(\"COMPA\", $sformatf(\"Waiting for receiver to be ready ...\"), UVM_MEDIUM)\n       \tdo begin\n         \tsuccess = m_put_port.can_put();\n       \tend while (!success);\n       \t`uvm_info(\"COMPA\", $sformatf(\"Receiver is now ready to accept transfers\"), UVM_MEDIUM)\n       \tm_put_port.try_put(pkt);\n      end\n     phase.drop_objection(this);\n   endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "class componentB extends uvm_component;\n   `uvm_component_utils (componentB)\n \n  // Rest of the code remains same\n \n  virtual function bit try_put (Packet pkt);\n    `uvm_info (\"COMPB\", \"Packet received\", UVM_LOW)\n    pkt.print(uvm_default_line_printer);\n    return 1;\n  endfunction\n  \n  // Return a random value to model readiness\n  virtual function bit can_put();\n    return $urandom_range(0,1);    \n  endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test my_test...\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_root.svh(579) @ 0: reporter [UVMTOP] UVM testbench topology:\n-----------------------------------------------------\nName            Type                      Size  Value\n-----------------------------------------------------\nuvm_test_top    my_test                   -     @1837\n  compA         componentA                -     @1906\n    m_put_port  uvm_nonblocking_put_port  -     @1972\n  compB         componentB                -     @1937\n    m_put_imp   uvm_nonblocking_put_imp   -     @2011\n-----------------------------------------------------\n\nUVM_INFO testbench.sv(60) @ 0: uvm_test_top.compA [COMPA] Packet sent to CompB\npkt: (Packet@2049) { addr: 'ha1  data: 'h64  } \nUVM_INFO testbench.sv(81) @ 0: uvm_test_top.compA [COMPA] Waiting for receiver to be ready ...\nUVM_INFO testbench.sv(85) @ 0: uvm_test_top.compA [COMPA] Receiver is now ready to accept transfers\nUVM_INFO testbench.sv(125) @ 0: uvm_test_top.compB [COMPB] Packet received\npkt: (Packet@2049) { addr: 'ha1  data: 'h64  } \nUVM_INFO testbench.sv(60) @ 0: uvm_test_top.compA [COMPA] Packet sent to CompB\npkt: (Packet@2059) { addr: 'h24  data: 'hba  } \nUVM_INFO testbench.sv(81) @ 0: uvm_test_top.compA [COMPA] Waiting for receiver to be ready ...\nUVM_INFO testbench.sv(85) @ 0: uvm_test_top.compA [COMPA] Receiver is now ready to accept transfers\nUVM_INFO testbench.sv(125) @ 0: uvm_test_top.compB [COMPB] Packet received\npkt: (Packet@2059) { addr: 'h24  data: 'hba  } \nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_objection.svh(1271) @ 0: reporter [TEST_DONE] 'run' phase is ready to proceed to the 'extract' phase\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_report_server.svh(847) @ 0: reporter [UVM/REPORT/SERVER] \n--- UVM Report Summary ---",
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
                "id": "cv-uvm-45",
                "num": 45,
                "title": "UVM TLM Port to Export to Imp",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "UVM TLM ports and exports are also used to send transaction objects cross different levels of testbench hierarchy.\n\nPorts shall be used to initiate and forward packets to the top layer of the hierarchy. Exports shall be used to accept and forward packets from the top layer to destination. Implementation ports shall be used to define the put method at the target. Shown below are a few examples that use ports, exports and implementation for components at different hierarchy levels.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Port to Port to Export to Imp",
                        "content": "subCompA is a subcomponent within componentA that is trying to send transactions to another subcomponent called subCompB in componentB. To maintain flexibility and portability of code, it is recommended to allow subCompA to send data to componentA which should then forward them to the top layer of the hierarchy. componentB shall accept the transaction and forward it to subCompB.\n\nA class called Packet is defined below to act as the data item that will be transferred from one component to another. This class object will have two random variables that can be randomized before sending.",
                        "code": "// Create a class data object that can be sent from one \n// component to another\nclass Packet extends uvm_object;\n  rand bit[7:0] addr;\n  rand bit[7:0] data;\n  \n  `uvm_object_utils_begin(Packet)\n  \t`uvm_field_int(addr, UVM_ALL_ON)\n  \t`uvm_field_int(data, UVM_ALL_ON)\n  `uvm_object_utils_end\n  \n  function new(string name = \"Packet\");\n    super.new(name);\n  endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Subcomponent A",
                        "content": "",
                        "code": "class subCompA extends uvm_component;\n  `uvm_component_utils (subCompA)\n  function new(string name, uvm_component parent);\n    super.new(name, parent);\n  endfunction\n  \n  uvm_blocking_put_port #(Packet) m_put_port;\n  int m_num_tx=2;\n  \n  virtual function void build_phase(uvm_phase phase);\n    super.build_phase(phase);\n    m_put_port = new (\"m_put_port\", this);\n  endfunction\n  \n  // Create a packet, randomize it and send it through the port\n  // Note that put() is a method defined by the receiving component\n  // Repeat these steps N times to send N packets\n   virtual task run_phase (uvm_phase phase);\n     phase.raise_objection(this);\n     repeat (m_num_tx) begin\n         Packet pkt = Packet::type_id::create (\"pkt\");\n         assert(pkt.randomize ()); \n       \n       \t // Print the packet to be displayed in log\n       `uvm_info (\"SUBCOMPA\", \"Packet sent to subCompB\", UVM_LOW)\n         pkt.print (uvm_default_line_printer);\n       \n         // Call the TLM put() method of put_port class and pass packet as argument\n         m_put_port.put (pkt);\n      end\n      phase.drop_objection(this);\n   endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Component A",
                        "content": "",
                        "code": "class componentA extends uvm_component;\n   `uvm_component_utils (componentA)\n   function new (string name = \"componentA\", uvm_component parent= null);\n      super.new (name, parent);\n   endfunction\n\n    subCompA m_subcomp_A;\n    uvm_blocking_put_port #(Packet) m_put_port;\n  \n  virtual function void build_phase(uvm_phase phase);\n    super.build_phase(phase);\n    m_subcomp_A = subCompA::type_id::create(\"m_subcomp_A\", this);\n    m_put_port = new (\"m_put_port\", this);\n  endfunction\n  \n  // Connection with subCompA\n  virtual function void connect_phase(uvm_phase phase);\n    super.connect_phase(phase);\n    m_subcomp_A.m_put_port.connect(this.m_put_port);\n  endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Component B",
                        "content": "",
                        "code": "class componentB extends uvm_component;\n   `uvm_component_utils (componentB)\n  function new(string name, uvm_component parent);\n    super.new(name, parent);\n  endfunction\n \n\tsubCompB m_subcomp_B;\n   uvm_blocking_put_export#(Packet) m_put_export;\n  \n  virtual function void build_phase(uvm_phase phase);\n    super.build_phase(phase);\n    m_subcomp_B = subCompB::type_id::create(\"m_subcomp_B\", this);\n    m_put_export = new(\"m_put_export\", this);\n  endfunction\n  \n  // Connection with subCompB\n  virtual function void connect_phase(uvm_phase phase);\n    m_put_export.connect(m_subcomp_B.m_put_imp);\n  endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Subcomponent B",
                        "content": "",
                        "code": "class subCompB extends uvm_component;\n  `uvm_component_utils (subCompB)\n  function new (string name = \"subCompB\", uvm_component parent = null);\n      super.new (name, parent);\n   endfunction\n\n   // Mention type of transaction, and type of class that implements the put ()\n  uvm_blocking_put_imp #(Packet, subCompB) m_put_imp;\n \n   virtual function void build_phase (uvm_phase phase);\n      super.build_phase (phase);\n     m_put_imp = new (\"m_put_imp\", this);\n   endfunction\n \n    // Implementation of the 'put()' method in this case simply prints it.\n  \tvirtual task put (Packet pkt);            \n      `uvm_info (\"SUBCOMPB\", \"Packet received from subCompA\", UVM_LOW)\n      pkt.print(uvm_default_line_printer);\n   endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "class my_test extends uvm_test;\n  `uvm_component_utils (my_test)\n \n   componentA compA;\n   componentB compB;\n \n  function new (string name = \"my_test\", uvm_component parent = null);\n      super.new (name, parent);\n   endfunction\n \n   // Create objects of both components, set number of transfers\n   virtual function void build_phase (uvm_phase phase);\n      super.build_phase (phase);\n      compA = componentA::type_id::create (\"compA\", this);\n      compB = componentB::type_id::create (\"compB\", this);\n   endfunction\n \n   // Connection between componentA and componentB is done here\n   virtual function void connect_phase (uvm_phase phase);\n     compA.m_put_port.connect (compB.m_put_export);  \n   endfunction\n  \n   virtual function void end_of_elaboration_phase(uvm_phase phase);\n    super.end_of_elaboration_phase(phase);\n    uvm_top.print_topology();\n  endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test my_test...\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_root.svh(579) @ 0: reporter [UVMTOP] UVM testbench topology:\n------------------------------------------------------\nName              Type                     Size  Value\n------------------------------------------------------\nuvm_test_top      my_test                  -     @1842\n  compA           componentA               -     @1911\n    m_put_port    uvm_blocking_put_port    -     @2008\n    m_subcomp_A   subCompA                 -     @1974\n      m_put_port  uvm_blocking_put_port    -     @2047\n  compB           componentB               -     @1942\n    m_put_export  uvm_blocking_put_export  -     @2115\n    m_subcomp_B   subCompB                 -     @2081\n      m_put_imp   uvm_blocking_put_imp     -     @2152\n------------------------------------------------------\n\nUVM_INFO testbench.sv(71) @ 0: uvm_test_top.compA.m_subcomp_A [SUBCOMPA] Packet sent to subCompB\npkt: (Packet@2191) { addr: 'h24  data: 'h31  } \nUVM_INFO testbench.sv(151) @ 0: uvm_test_top.compB.m_subcomp_B [SUBCOMPB] Packet received from subCompA\npkt: (Packet@2191) { addr: 'h24  data: 'h31  } \nUVM_INFO testbench.sv(71) @ 0: uvm_test_top.compA.m_subcomp_A [SUBCOMPA] Packet sent to subCompB\npkt: (Packet@2209) { addr: 'h9a  data: 'hfb  } \nUVM_INFO testbench.sv(151) @ 0: uvm_test_top.compB.m_subcomp_B [SUBCOMPB] Packet received from subCompA\npkt: (Packet@2209) { addr: 'h9a  data: 'hfb  } \nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_objection.svh(1271) @ 0: reporter [TEST_DONE] 'run' phase is ready to proceed to the 'extract' phase\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_report_server.svh(847) @ 0: reporter [UVM/REPORT/SERVER] \n--- UVM Report Summary ---",
                        "lang": "verilog"
                    },
                    {
                        "title": "Port to Port to Imp",
                        "content": "In this example componentA forwards the packet from subCompA to the destination componentB. The only difference is that componentB is the target and hence should define the implementation port instead of an export.",
                        "code": "// componentB shall implement \"put\" and there's no subCompB\nclass componentB extends uvm_component;\n   `uvm_component_utils (componentB)\n  function new(string name, uvm_component parent);\n    super.new(name, parent);\n  endfunction\n \n  uvm_blocking_put_imp#(Packet, componentB) m_put_imp;\n  \n  virtual function void build_phase(uvm_phase phase);\n    super.build_phase(phase);\n    m_put_imp = new(\"m_put_imp\", this);\n  endfunction\n  \n      // Implementation of the 'put()' method in this case simply prints it.\n    virtual task put (Packet pkt);            \n      `uvm_info (\"COMPB\", \"Packet received from subCompA\", UVM_LOW)\n      pkt.print(uvm_default_line_printer);\n   endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test my_test...\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_root.svh(579) @ 0: reporter [UVMTOP] UVM testbench topology:\n----------------------------------------------------\nName              Type                   Size  Value\n----------------------------------------------------\nuvm_test_top      my_test                -     @1839\n  compA           componentA             -     @1908\n    m_put_port    uvm_blocking_put_port  -     @2005\n    m_subcomp_A   subCompA               -     @1971\n      m_put_port  uvm_blocking_put_port  -     @2044\n  compB           componentB             -     @1939\n    m_put_imp     uvm_blocking_put_imp   -     @2081\n----------------------------------------------------\n\nUVM_INFO testbench.sv(70) @ 0: uvm_test_top.compA.m_subcomp_A [SUBCOMPA] Packet sent to CompB\npkt: (Packet@2119) { addr: 'h24  data: 'h31  } \nUVM_INFO testbench.sv(124) @ 0: uvm_test_top.compB [COMPB] Packet received from subCompA\npkt: (Packet@2119) { addr: 'h24  data: 'h31  } \nUVM_INFO testbench.sv(70) @ 0: uvm_test_top.compA.m_subcomp_A [SUBCOMPA] Packet sent to CompB\npkt: (Packet@2133) { addr: 'h9a  data: 'hfb  } \nUVM_INFO testbench.sv(124) @ 0: uvm_test_top.compB [COMPB] Packet received from subCompA\npkt: (Packet@2133) { addr: 'h9a  data: 'hfb  } \nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_objection.svh(1271) @ 0: reporter [TEST_DONE] 'run' phase is ready to proceed to the 'extract' phase\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_report_server.svh(847) @ 0: reporter [UVM/REPORT/SERVER] \n--- UVM Report Summary ---",
                        "lang": "verilog"
                    },
                    {
                        "title": "Port to Export to Imp",
                        "content": "In this example componentA is the initiator and sends a packet from its port to the destination subCompB which implements the put method. Since componentB is the container for the target, it should have an export to forward the packets received from the connected port at the top level.",
                        "code": "// componentA will start transactions and send to its port\nclass componentA extends uvm_component;\n   `uvm_component_utils (componentA)\n   function new (string name = \"componentA\", uvm_component parent= null);\n      super.new (name, parent);\n   endfunction\n\n    uvm_blocking_put_port #(Packet) m_put_port;\n    int m_num_tx=2;\n  \n  virtual function void build_phase(uvm_phase phase);\n    super.build_phase(phase);\n    m_put_port = new (\"m_put_port\", this);\n  endfunction\n  \n  \n  // Create a packet, randomize it and send it through the port\n  // Note that put() is a method defined by the receiving component\n  // Repeat these steps N times to send N packets\n   virtual task run_phase (uvm_phase phase);\n     phase.raise_objection(this);\n     repeat (m_num_tx) begin\n         Packet pkt = Packet::type_id::create (\"pkt\");\n         assert(pkt.randomize ()); \n       \n       \t // Print the packet to be displayed in log\n       `uvm_info (\"SUBCOMPA\", \"Packet sent to subCompB\", UVM_LOW)\n         pkt.print (uvm_default_line_printer);\n       \n         // Call the TLM put() method of put_port class and pass packet as argument\n         m_put_port.put (pkt);\n      end\n      phase.drop_objection(this);\n   endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test my_test...\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_root.svh(579) @ 0: reporter [UVMTOP] UVM testbench topology:\n------------------------------------------------------\nName              Type                     Size  Value\n------------------------------------------------------\nuvm_test_top      my_test                  -     @1839\n  compA           componentA               -     @1908\n    m_put_port    uvm_blocking_put_port    -     @1974\n  compB           componentB               -     @1939\n    m_put_export  uvm_blocking_put_export  -     @2044\n    m_subcomp_B   subCompB                 -     @2010\n      m_put_imp   uvm_blocking_put_imp     -     @2081\n------------------------------------------------------\n\nUVM_INFO testbench.sv(73) @ 0: uvm_test_top.compA [SUBCOMPA] Packet sent to subCompB\npkt: (Packet@2120) { addr: 'ha1  data: 'h64  } \nUVM_INFO testbench.sv(127) @ 0: uvm_test_top.compB.m_subcomp_B [SUBCOMPB] Packet received from subCompA\npkt: (Packet@2120) { addr: 'ha1  data: 'h64  } \nUVM_INFO testbench.sv(73) @ 0: uvm_test_top.compA [SUBCOMPA] Packet sent to subCompB\npkt: (Packet@2134) { addr: 'hc1  data: 'hb9  } \nUVM_INFO testbench.sv(127) @ 0: uvm_test_top.compB.m_subcomp_B [SUBCOMPB] Packet received from subCompA\npkt: (Packet@2134) { addr: 'hc1  data: 'hb9  } \nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_objection.svh(1271) @ 0: reporter [TEST_DONE] 'run' phase is ready to proceed to the 'extract' phase\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_report_server.svh(847) @ 0: reporter [UVM/REPORT/SERVER] \n--- UVM Report Summary ---",
                        "lang": "verilog"
                    },
                    {
                        "title": "Port to Port to Export to Export to Imp",
                        "content": "In this example there is an additional layer between componentB and the target subCompB2 called subCompB1. This layer has to simply forward the packet to the destination and hence shall have an export.\n\nClick to try this example in a simulator!",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test my_test...\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_root.svh(579) @ 0: reporter [UVMTOP] UVM testbench topology:\n--------------------------------------------------------\nName                Type                     Size  Value\n--------------------------------------------------------\nuvm_test_top        my_test                  -     @1845\n  compA             componentA               -     @1914\n    m_put_port      uvm_blocking_put_port    -     @2011\n    m_subcomp_A     subCompA                 -     @1977\n      m_put_port    uvm_blocking_put_port    -     @2050\n  compB             componentB               -     @1945\n    m_put_export    uvm_blocking_put_export  -     @2118\n    m_subcomp_B1    subCompB1                -     @2084\n      m_put_export  uvm_blocking_put_export  -     @2186\n      m_subcomp_B2  subCompB2                -     @2152\n        m_put_imp   uvm_blocking_put_imp     -     @2223\n--------------------------------------------------------\n\nUVM_INFO testbench.sv(75) @ 0: uvm_test_top.compA.m_subcomp_A [SUBCOMPA] Packet sent to subCompB\npkt: (Packet@2262) { addr: 'h24  data: 'h31  } \nUVM_INFO testbench.sv(179) @ 0: uvm_test_top.compB.m_subcomp_B1.m_subcomp_B2 [SUBCOMPB2] Packet received from subCompA\npkt: (Packet@2262) { addr: 'h24  data: 'h31  } \nUVM_INFO testbench.sv(75) @ 0: uvm_test_top.compA.m_subcomp_A [SUBCOMPA] Packet sent to subCompB\npkt: (Packet@2284) { addr: 'h9a  data: 'hfb  } \nUVM_INFO testbench.sv(179) @ 0: uvm_test_top.compB.m_subcomp_B1.m_subcomp_B2 [SUBCOMPB2] Packet received from subCompA\npkt: (Packet@2284) { addr: 'h9a  data: 'hfb  } \nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_objection.svh(1271) @ 0: reporter [TEST_DONE] 'run' phase is ready to proceed to the 'extract' phase\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_report_server.svh(847) @ 0: reporter [UVM/REPORT/SERVER] \n--- UVM Report Summary ---",
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
                "id": "cv-uvm-46",
                "num": 46,
                "title": "UVM TLM Non-blocking Get Port",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "A previous article showed examples of using a uvm_blocking_get_port TLM port that was blocking in nature where the receiver gets stalled until the sender finishes with the get task.\n\nSimilarly, UVM TLM also has a non-blocking method of type uvm_nonblocking_get_port where the sender has to use try_get to see if the get was successful or can_get method to see if the sender is ready to start a transfer. Like before, the UVM TLM non-blocking get port should ultimately be connected to a non-blocking get implementation port.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "UVM TLM Nonblocking Get Example",
                        "content": "A class called Packet is defined below to act as the data item that will be transferred from one component to another. This class object will have two random variables that can be randomized before sending.\n\nA class called componentB is created which has a uvm_nonblocking_get_port parameterized to accept a data object of type Packet. The port has to be instantiated with the new() method preferably in the build_phase of the same component.\n\nIn this example, a class object of type Packet is received via the get_port handle by calling the try_get method. Many such packets can be received using a simple loop controlled by a configurable variable. The try_get function should ideally return 1 if the transfer was successful and 0 if it failed and should be provided by the sender which implements the function.",
                        "code": "// Create a class data object that can be sent from one \n// component to another\nclass Packet extends uvm_object;\n  rand bit[7:0] addr;\n  rand bit[7:0] data;\n  \n  `uvm_object_utils_begin(Packet)\n  \t`uvm_field_int(addr, UVM_ALL_ON)\n  \t`uvm_field_int(data, UVM_ALL_ON)\n  `uvm_object_utils_end\n  \n  function new(string name = \"Packet\");\n    super.new(name);\n  endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "The sender class needs to define an implementation port using uvm_nonblocking_get_imp. Since the port is nonblocking in nature, the try_get implementation is a function which has to be defined by this component.",
                        "code": "class componentB extends uvm_component;\n   `uvm_component_utils (componentB)\n \n   // Create a get_port to request for data from componentA\n   uvm_nonblocking_get_port #(Packet) m_get_port;\n   int m_num_tx = 2;\n \n  function new (string name, uvm_component parent);\n      super.new (name, parent);\n   endfunction\n \n   virtual function void build_phase (uvm_phase phase);\n      super.build_phase (phase);\n     m_get_port = new (\"m_get_port\", this);\n   endfunction\n \n   virtual task run_phase (uvm_phase phase);\n      Packet pkt;\n     phase.raise_objection(this);\n     \n     // Try to get a transaction which does not consume simulation time\n     // as try_get() is a function\n     repeat (m_num_tx) begin\n       if (m_get_port.try_get(pkt))\n       \t`uvm_info (\"COMPB\", \"ComponentA just gave me the packet\", UVM_LOW)\n       else\n         `uvm_info (\"COMPB\", \"ComponentA did not give packet\", UVM_LOW)\n        pkt.print (uvm_default_line_printer);\n      end\n     phase.drop_objection(this);\n   endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "The connection between a port and its implementation has to be done at a higher hierarchical level. Since both components are instantiated directly within the test class in this example, the connection between them can be done during the connect_phase of the test. If these two components were instantiated in another component or environment, they have to be connected during the connect_phase of that component or environment.",
                        "code": "class componentA extends uvm_component;\n   `uvm_component_utils (componentA)\n \n   uvm_nonblocking_get_imp #(Packet, componentA) m_get_imp;\n \n  function new (string name, uvm_component parent);\n      super.new (name, parent);\n   endfunction\n \n   virtual function void build_phase (uvm_phase phase);\n      super.build_phase (phase);\n      m_get_imp = new (\"m_get_imp\", this);\n   endfunction\n \n   virtual function bit try_get (output Packet pkt);\n      pkt = new();\n      assert (pkt.randomize());\n      `uvm_info (\"COMPA\", \"ComponentB has requested for a packet\", UVM_LOW)\n      pkt.print (uvm_default_line_printer);\n      return 1;\n   endfunction\n     \n     virtual function bit can_get();\n     endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "class my_test extends uvm_test;\n  `uvm_component_utils (my_test)\n \n   componentA compA;\n   componentB compB;\n \n  function new (string name = \"my_test\", uvm_component parent = null);\n      super.new (name, parent);\n   endfunction\n \n   // Create objects of both components, set number of transfers\n   virtual function void build_phase (uvm_phase phase);\n      super.build_phase (phase);\n      compA = componentA::type_id::create (\"compA\", this);\n      compB = componentB::type_id::create (\"compB\", this);\n   endfunction\n \n   // Connection between componentA and componentB is done here\n   virtual function void connect_phase (uvm_phase phase);\n     compB.m_get_port.connect (compA.m_get_imp);  \n   endfunction\n  \n   virtual function void end_of_elaboration_phase(uvm_phase phase);\n    super.end_of_elaboration_phase(phase);\n    uvm_top.print_topology();\n  endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test my_test...\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_root.svh(579) @ 0: reporter [UVMTOP] UVM testbench topology:\n-----------------------------------------------------\nName            Type                      Size  Value\n-----------------------------------------------------\nuvm_test_top    my_test                   -     @1836\n  compA         componentA                -     @1905\n    m_get_imp   uvm_nonblocking_get_imp   -     @1971\n  compB         componentB                -     @1936\n    m_get_port  uvm_nonblocking_get_port  -     @2010\n-----------------------------------------------------\n\nUVM_INFO testbench.sv(97) @ 0: uvm_test_top.compA [COMPA] ComponentB has requested for a packet\nPacket: (Packet@1903) { addr: 'he8  data: 'hc5  } \nUVM_INFO testbench.sv(67) @ 0: uvm_test_top.compB [COMPB] ComponentA just gave me the packet\nPacket: (Packet@1903) { addr: 'he8  data: 'hc5  } \nUVM_INFO testbench.sv(97) @ 0: uvm_test_top.compA [COMPA] ComponentB has requested for a packet\nPacket: (Packet@2058) { addr: 'hd6  data: 'hd  } \nUVM_INFO testbench.sv(67) @ 0: uvm_test_top.compB [COMPB] ComponentA just gave me the packet\nPacket: (Packet@2058) { addr: 'hd6  data: 'hd  } \nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_objection.svh(1271) @ 0: reporter [TEST_DONE] 'run' phase is ready to proceed to the 'extract' phase\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_report_server.svh(847) @ 0: reporter [UVM/REPORT/SERVER] \n--- UVM Report Summary ---",
                        "lang": "verilog"
                    },
                    {
                        "title": "UVM TLM can_get Example",
                        "content": "Instead of directly trying to get a packet, the receiver can first query to see if the sender is ready or not with can_get function and then get the packet.\n\nThe can_get function in componentA is set to return a random value in this example to model readiness of the receiver.",
                        "code": "class componentB extends uvm_component;\n   `uvm_component_utils (componentB)\n \n   // Create a get_port to request for data from componentA\n   uvm_nonblocking_get_port #(Packet) m_get_port;\n   int m_num_tx = 2;\n \n  function new (string name, uvm_component parent);\n      super.new (name, parent);\n   endfunction\n \n   virtual function void build_phase (uvm_phase phase);\n      super.build_phase (phase);\n     m_get_port = new (\"m_get_port\", this);\n   endfunction\n \n   virtual task run_phase (uvm_phase phase);\n      Packet pkt;\n     phase.raise_objection(this);\n     \n     // Try to get a transaction which does not consume simulation time\n     // as try_get() is a function\n     repeat (m_num_tx) begin\n       while (!m_get_port.can_get()) begin\n         #10 `uvm_info(\"COMPB\", $sformatf(\"See if can_get() is ready\"), UVM_LOW)\n       end\n       \n       `uvm_info(\"COMPB\", $sformatf(\"COMPA ready, get packet now\"), UVM_LOW)\n       m_get_port.try_get(pkt);\n       pkt.print (uvm_default_line_printer);\n      end\n     phase.drop_objection(this);\n   endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "class componentA extends uvm_component;\n   `uvm_component_utils (componentA)\n \n   uvm_nonblocking_get_imp #(Packet, componentA) m_get_imp;\n \n  // Rest of the code remains same\n \n   virtual function bit try_get (output Packet pkt);\n      pkt = new();\n      assert (pkt.randomize());\n      `uvm_info (\"COMPA\", \"ComponentB has requested for a packet\", UVM_LOW)\n      pkt.print (uvm_default_line_printer);\n      return 1;\n   endfunction\n     \n     virtual function bit can_get();\n       bit ready;\n       std::randomize(ready) with { ready dist {0:/70, 1:/30}; };\n       return ready;\n     endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test my_test...\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_root.svh(579) @ 0: reporter [UVMTOP] UVM testbench topology:\n-----------------------------------------------------\nName            Type                      Size  Value\n-----------------------------------------------------\nuvm_test_top    my_test                   -     @1837\n  compA         componentA                -     @1906\n    m_get_imp   uvm_nonblocking_get_imp   -     @1972\n  compB         componentB                -     @1937\n    m_get_port  uvm_nonblocking_get_port  -     @2011\n-----------------------------------------------------\n\nUVM_INFO testbench.sv(60) @ 10: uvm_test_top.compB [COMPB] See if can_get() is ready\nUVM_INFO testbench.sv(60) @ 20: uvm_test_top.compB [COMPB] See if can_get() is ready\nUVM_INFO testbench.sv(60) @ 30: uvm_test_top.compB [COMPB] See if can_get() is ready\nUVM_INFO testbench.sv(62) @ 30: uvm_test_top.compB [COMPB] COMPA ready, get packet now\nUVM_INFO testbench.sv(97) @ 30: uvm_test_top.compA [COMPA] ComponentB has requested for a packet\nPacket: (Packet@2065) { addr: 'h8c  data: 'h99  } \nPacket: (Packet@2065) { addr: 'h8c  data: 'h99  } \nUVM_INFO testbench.sv(62) @ 30: uvm_test_top.compB [COMPB] COMPA ready, get packet now\nUVM_INFO testbench.sv(97) @ 30: uvm_test_top.compA [COMPA] ComponentB has requested for a packet\nPacket: (Packet@2095) { addr: 'h97  data: 'hb8  } \nPacket: (Packet@2095) { addr: 'h97  data: 'hb8  } \nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_objection.svh(1271) @ 30: reporter [TEST_DONE] 'run' phase is ready to proceed to the 'extract' phase\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_report_server.svh(847) @ 30: reporter [UVM/REPORT/SERVER] \n--- UVM Report Summary ---",
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
                "id": "cv-uvm-47",
                "num": 47,
                "title": "How to execute sequences via start( )",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "Note that you have to always pass the handle to a sequencer which should execute this sequence, whereas the other arguments are optional. parent_sequence is often referred to the sequence from which the current one was called. this_priority specifies a priority for the sequence (by default it assumes priority of the parent sequence), and can be ignored for now. call_pre_post will call the pre_body() and post_body() of the current sequence. Here's an example of how the start() function has to be used, and what happens in the background.",
                        "code": "virtual task start ( uvm_sequencer_base   sequencer,\n                     uvm_sequence_base    parent_sequence = null,\n                     int                  this_priority = -1,\n                     bit                  call_pre_post = 1 );",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "seq.randomize (...); // optional\nseq.start (m_sequencer, null, , 1);\n\n// The following methods will be called in start()\nseq.pre_start();            (task)     \t\nseq.pre_body();             (task)\tif call_pre_post == 1\n   parent_seq.pre_do()      (task) \tif parent_seq != null\n   parent_seq.mid_do(this)  (func) \tif parent_seq != null\nseq.body()                  (task) \tyour code\n   parent_seq.post_do(this) (func) \tif parent_seq != null\nseq.post_body()             (task) \tif call_pre_post == 1\nsub_seq.post_start()        (task)",
                        "lang": "verilog"
                    },
                    {
                        "title": "Simple sequence flow",
                        "content": "To understand the sequence flow better, let us construct a simple sequence with a print statement in each of the above mentioned methods. First we'll try to understand how call_pre_post argument affects the output.\n\nWithin our test case, we'll call the start method of our sequence base_seq. Note that the default value of call_pre_post argument of the start method is 1 and hence the pre_body and post_body tasks of that sequence will be called.",
                        "code": "// Let's just declare a base sequence from which we can have a child sequence\n// This will help to prove execution order of pre_do, mid_do and post_do tasks\nclass base_seq extends uvm_sequence;\n\n  // Factory registration and new function is assumed to be written next\n\t...\n\t\n  // For every method during the body() execution flow, we'll simply add a display statement to track \n  // how each method in this sequence is getting executed\n  virtual task pre_body();\n    `uvm_info (get_type_name(), \"pre_body()\", UVM_LOW)\n  endtask\n\n  virtual task pre_do(bit is_item);\n    `uvm_info (get_type_name(), \"pre_do()\", UVM_LOW)\n  endtask\n\n  virtual function void mid_do(uvm_sequence_item this_item);\n    `uvm_info (get_type_name(), \"mid_do()\", UVM_LOW)\n  endfunction\n\n  virtual task body();\n    `uvm_info (get_type_name(), \"body()\", UVM_LOW)\n  endtask\n\n  virtual function void post_do(uvm_sequence_item this_item);\n    `uvm_info (get_type_name(), \"post_do()\", UVM_LOW)\n  endfunction\n\n  virtual task post_body();\n    `uvm_info (get_type_name(), \"post_body()\", UVM_LOW)\n  endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "As expected, the sequence executes the pre_body and post_body tasks in addition to the body method.",
                        "code": "// Define a base test that will launch our base sequence\nclass base_test extends uvm_test;\n\t...\n\t\n\t// Instantiate the base_seq and start it on default sequencer\n\tvirtual task run_phase (uvm_phase phase);\n\t\tbase_seq bs = base_seq::type_id::create (\"bs\", this);\n\t\tbs.start (null);     // Default value of call_pre_post is 1\n\tendtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Now, let's supply 0 to call_pre_post argument and see that pre_body and post_body methods are not executed.",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test base_test...\nUVM_INFO ./tb/tb_top.sv(19) @ 0: reporter@@bs [base_seq] pre_body()\nUVM_INFO ./tb/tb_top.sv(31) @ 0: reporter@@bs [base_seq] body()\nUVM_INFO ./tb/tb_top.sv(39) @ 0: reporter@@bs [base_seq] post_body()\n\n--- UVM Report catcher Summary ---",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "class base_test extends uvm_test;\n\t...\n\t\n\t// Call the same sequence with call_pre_post argument set to 0\n\t// This will show the difference in result compared to previous example\n\tvirtual task run_phase (uvm_phase phase);\n\t\tbase_seq bs = base_seq::type_id::create (\"bs\", this);\n\t\tbs.start (null, null, 0, 0);  // call_pre_post is given 0\n\tendtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Takeaway: if call_pre_post is 1, then pre_body and post_body methods of the started sequence will be executed.",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test base_test...\nUVM_INFO ./tb/tb_top.sv(31) @ 0: reporter@@bs [base_seq] body()\n\n--- UVM Report catcher Summary ---",
                        "lang": "verilog"
                    },
                    {
                        "title": "Inherited sequence flow",
                        "content": "The second argument to start method is parent which might cause a confusion regarding the term parent used in inheritance versus the parent sequence that starts the main sequence. To try out an example, we'll create a child sequence of base_seq with a print statement in each of its methods and spawn that from the test case.\n\nIn this case also, we get a similar result as before where pre_body and post_body methods are invoked because of the default value of call_pre_post argument in the start method. So it is clear that parent argument simply specifies the parent sequence from where the main sequence is started.",
                        "code": "// The child sequence will have its own pre_body task to see pre_body() method of which parent is called\nclass child1_seq extends base_seq;\n\t\n  // Again, to track the message lets just print this into the log\n  virtual task pre_body();\n    `uvm_info (get_type_name(), \"pre_body()\", UVM_LOW)\n  endtask\n\t\n  // Definition of all other methods like base class should come here\n\t\nendclass\n\nclass base_test extends uvm_test;\n\t...\n\t\n\t// Start the child sequence with the default value of call_pre_post\n\tvirtual task run_phase (uvm_phase phase);\n\t\tchild1_seq cs = child1_seq::type_id::create (\"cs\", this);\n\t\tcs.start (null);     // Default value of call_pre_post is 1\n\tendtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test base_test...\nUVM_INFO ./tb/tb_top.sv(19) @ 0: reporter@@bs [base_seq] pre_body()\nUVM_INFO ./tb/tb_top.sv(31) @ 0: reporter@@bs [base_seq] body()\nUVM_INFO ./tb/tb_top.sv(39) @ 0: reporter@@bs [base_seq] post_body()\n\n--- UVM Report catcher Summary ---",
                        "lang": "verilog"
                    },
                    {
                        "title": "Spawned sequence flow",
                        "content": "Here, we'll start another sequence called child2_seq from the body method in child1_seq with rest of the code being the same. This example will demonstrate how the parent argument in start method can be used.\n\nIt can be seen that child2_seq also executed its own methods after which child1_seq execution is resumed.",
                        "code": "class child2_seq extends base_seq;\n\t...\n  virtual task pre_body();\n    `uvm_info (get_type_name(), \"pre_body()\", UVM_LOW)\n  endtask\n\t\n  // Definition of all other methods like base class should come here\nendclass\n\nclass child1_seq extends base_seq;\n\t...\n\t\n\tvirtual task body();\n\t\tchild2_seq cs = child2_seq::type_id::create (\"cs\");\n\t\tcs.start (null);   // parent arg is by default null\n\tendtask\n\t...\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Now we'll supply the pointer to child1_seq as an argument to the parent of the start method in child2_seq.",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test child1_test...                                                                                                                  \nUVM_INFO ./tb/tb_top.sv(52) @ 0: reporter@@cs [child1_seq] pre_body()                                                                                                       \nUVM_INFO ./tb/tb_top.sv(65) @ 0: reporter@@cs [child1_seq] body()                                                                                                           \nUVM_INFO ./tb/tb_top.sv(87) @ 0: reporter@@cs2 [child2_seq] pre_body()\nUVM_INFO ./tb/tb_top.sv(99) @ 0: reporter@@cs2 [child2_seq] body()                                                                   \nUVM_INFO ./tb/tb_top.sv(107) @ 0: reporter@@cs2 [child2_seq] post_body()\nUVM_INFO ./tb/tb_top.sv(76) @ 0: reporter@@cs [child1_seq] post_body()                                                                                                      \n\n--- UVM Report catcher Summary ---",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Now it can be seen that pre_do, mid_do and post_do methods of the parent sequence child1_seq has been called.",
                        "code": "class child1_seq extends base_seq;\n\t...\n\t\n\tvirtual task body();\n\t\tchild2_seq cs = child2_seq::type_id::create (\"cs\");\n\t\tcs.start (null, this);     // Give handle of current seq as parent to child2\n\tendtask\n\t...\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test child1_test...                                                                                                                  \nUVM_INFO ./tb/tb_top.sv(52) @ 0: reporter@@cs [child1_seq] pre_body()                                                                                                       \nUVM_INFO ./tb/tb_top.sv(65) @ 0: reporter@@cs [child1_seq] body()                                                                                                           \nUVM_INFO ./tb/tb_top.sv(87) @ 0: reporter@@cs.cs2 [child2_seq] pre_body()                                                                                                   \nUVM_INFO ./tb/tb_top.sv(56) @ 0: reporter@@cs [child1_seq] pre_do()                                                                                                         \nUVM_INFO ./tb/tb_top.sv(60) @ 0: reporter@@cs [child1_seq] mid_do()                                                                                                        \nUVM_INFO ./tb/tb_top.sv(99) @ 0: reporter@@cs.cs2 [child2_seq] body()                                                                                                       \nUVM_INFO ./tb/tb_top.sv(72) @ 0: reporter@@cs [child1_seq] post_do()                                                                                                        \nUVM_INFO ./tb/tb_top.sv(107) @ 0: reporter@@cs.cs2 [child2_seq] post_body()                                                                                                 \nUVM_INFO ./tb/tb_top.sv(76) @ 0: reporter@@cs [child1_seq] post_body()                                                                                                      \n\n--- UVM Report catcher Summary ---",
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
                "id": "cv-uvm-48",
                "num": 48,
                "title": "Executing sequence macros",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "Use of sequence macros give the added advantage of inline constraints, however you lose the ability to control the invocation of pre_body and post_body methods in the executed sequence. It reduces the number of lines in our code by creating the item, randomizing it and automatically calling the required tasks to start the given sequence or sequence item.\n\nIn a previous article, we learned that all `uvm_do macros ultimately call the code defined in `uvm_do_on_pri_with. So, let's see how that is structured within UVM to get better clarity behind the process.\n\nIf the object passed to this macro is a sequence item, then it creates the item and starts executing the item with start_item method call. The item will be randomized and end with finish_item method call. If the object __seq is not a sequence item, then start method of the sequence is called.\n\nNote that call_pre_post field of the start method is set to 0 which means pre_body and post_body methods of a sequence will never be called when using these sequence macros. Execution flow is otherwise similar to when sequence is executed by the start method.\n\nLet's take the same code we saw while using start(), and now call `uvm_do_pri_with instead. Below is the base_sequence from which three child sequences (seq1, seq2, seq3) are derived.",
                        "code": "`define uvm_do_on_pri_with(SEQ_OR_ITEM, SEQR, PRIORITY, CONSTRAINTS)     \n  begin                                                                  \n  uvm_sequence_base __seq;                                               \n  `uvm_create_on(SEQ_OR_ITEM, SEQR)                                      \n  if (!$cast(__seq,SEQ_OR_ITEM)) start_item(SEQ_OR_ITEM, PRIORITY);      \n  if ((__seq == null || !__seq.do_not_randomize) && !SEQ_OR_ITEM.randomize() with CONSTRAINTS ) begin \n    `uvm_warning(\"RNDFLD\", \"Randomization failed in uvm_do_with action\") \n  end                                                                    \n  if (!$cast(__seq,SEQ_OR_ITEM)) finish_item(SEQ_OR_ITEM, PRIORITY);     \n  else __seq.start(SEQR, this, PRIORITY, 0);                             \n  end",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "In seq1 below, notice that we have used `uvm_do_pri_with macro with empty constraints and no priority. We expect this to call the stat() method of seq2, and skip the pre_body( ) and post_body( ) tasks.",
                        "code": "class base_sequence extends uvm_sequence #(my_data);\n   `uvm_object_utils (base_sequence)\n   `uvm_declare_p_sequencer (my_sequencer)\n\n   function new (string name = \"base_sequence\");\n      super.new (name);\n   endfunction\n\n   virtual function void mid_do (uvm_sequence_item this_item);\n      `uvm_info (get_type_name (), \"Executing mid_do\", UVM_MEDIUM)\n   endfunction\n\n   virtual task pre_do (bit is_item);\n      `uvm_info (get_type_name (), \"Executing pre_do\", UVM_MEDIUM)\n   endtask\n\n   virtual function void post_do (uvm_sequence_item this_item);\n      `uvm_info (get_type_name (), \"Executing post_do\", UVM_MEDIUM)\n   endfunction\n\n   virtual task body ();\n      starting_phase.raise_objection (this);\n      `uvm_info (\"BASE_SEQ\", $sformatf (\"Starting body of %s\", this.get_name()), UVM_MEDIUM)\n      `uvm_info (\"BASE_SEQ\", $sformatf (\"Sequence %s is over\", this.get_name()), UVM_MEDIUM)\n      starting_phase.drop_objection (this);\n   endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "In seq2, we kick off another sequence (seq3) using the same macro.",
                        "code": "class seq1 extends base_sequence;\n   `uvm_object_utils (seq1)\n\n   seq2 m_seq2;\n   \n   virtual task pre_start ();\n      `uvm_info (get_type_name (), \"Executing pre_start()\", UVM_MEDIUM)\n   endtask\n\n   function new (string name = \"seq1\");\n      super.new (name);\n   endfunction\n\n   virtual task body ();\n      starting_phase.raise_objection (this);\n      m_seq2 = seq2::type_id::create (\"m_seq2\");\n      `uvm_info (\"SEQ1\", \"Starting seq1\", UVM_MEDIUM)\n      #10;\n      `uvm_do_pri_with (m_seq2, ,{})\n      `uvm_info (\"SEQ1\", \"Ending seq1\", UVM_MEDIUM)\n      starting_phase.drop_objection (this);\n   endtask\n\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "In our final sequence, we don't do anything.",
                        "code": "class seq2 extends base_sequence;\n   `uvm_object_utils (seq2)\n\n   seq3 m_seq3;\n\n   function new (string name = \"seq2\");\n      super.new (name);\n   endfunction\n\n   virtual task pre_body ();\n      `uvm_info (get_type_name(), \"Executing pre_body\", UVM_MEDIUM)\n   endtask      \n\n   virtual task body ();\n      m_seq3 = seq3::type_id::create (\"m_seq3\");\n      `uvm_info (\"SEQ2\", \"Starting seq2\", UVM_MEDIUM)\n      #10;\n      `uvm_do_pri_with (m_seq3, ,{})\n      `uvm_info (\"SEQ2\", \"Ending seq2\", UVM_MEDIUM)\n   endtask\n\n   virtual task post_body ();\n      `uvm_info (get_type_name(), \"Executing post_body\", UVM_MEDIUM)\n   endtask    \n\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "The simulation results might look a bit fuzzy. The important thing to note is that the pre_do/mid_do methods are called before the body( ) task is called. Let's do a simple dry run.",
                        "code": "class seq3 extends base_sequence;\n   `uvm_object_utils (seq3)\n\n   function new (string name = \"seq3\");\n      super.new (name);\n   endfunction\n\n   virtual task pre_body ();\n      `uvm_info (get_type_name(), \"Executing pre_body\", UVM_MEDIUM)\n   endtask      \n\n   virtual task body ();\n      `uvm_info (\"SEQ3\", \"Starting seq3\", UVM_MEDIUM)\n      #10;\n      `uvm_info (\"SEQ3\", \"Ending seq3\", UVM_MEDIUM)\n   endtask\n\n   virtual task post_body ();\n      `uvm_info (get_type_name(), \"Executing post_body\", UVM_MEDIUM)\n   endtask     \n\n   virtual task post_start ();\n      `uvm_info (get_type_name (), \"Executing post_start\", UVM_MEDIUM)\n   endtask \nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "- SEQ1 : pre_start()  \n- go to the body() of SEQ1\n- Display \"[SEQ1] Starting seq1\"\n- Start SEQ2                                // there's nothing in pre_start() and pre_body() is not called\n- Call parent's (SEQ1) pre_do\n- Display \"[seq1] Executing pre_do\"\n- Call parent's (SEQ1) mid_do\n- Display \"[seq1] Executing mid_do\"\n- Call body() of SEQ2 \n- Display \"[SEQ2] Starting seq2\"\n- Start SEQ3 \n...",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "CDNS-UVM-1.1d (14.10-s013)\n(C) 2007-2013 Mentor Graphics Corporation\n(C) 2007-2013 Cadence Design Systems, Inc.\n(C) 2006-2013 Synopsys, Inc.\n(C) 2011-2013 Cypress Semiconductor Corp.\n----------------------------------------------------------------\nUVM_INFO @ 0: reporter [RNTST] Running test base_test...\nUVM_INFO @ 0: reporter [UVMTOP] UVM testbench topology:\n------------------------------------------------------------\nName                     Type                    Size  Value\n------------------------------------------------------------\nuvm_test_top             base_test               -     @2644\n  m_top_env              my_env                  -     @214\n    m_drv0               my_driver               -     @208\n      rsp_port           uvm_analysis_port       -     @2843\n      seq_item_port      uvm_seq_item_pull_port  -     @2792\n    m_seqr0              my_sequencer            -     @2743\n      rsp_export         uvm_analysis_export     -     @2933\n      seq_item_export    uvm_seq_item_pull_imp   -     @3481\n      arbitration_queue  array                   0     -\n      lock_queue         array                   0     -\n      num_last_reqs      integral                32    'd1\n      num_last_rsps      integral                32    'd1\n------------------------------------------------------------\n\nUVM_INFO ./tb/my_pkg.sv(92) @ 0: uvm_test_top.m_top_env.m_drv0 [my_driver] Applying initial reset\nUVM_INFO ./tb/my_pkg.sv(96) @ 390000: uvm_test_top.m_top_env.m_drv0 [my_driver] DUT is now out of reset\nUVM_INFO ./tb/my_pkg.sv(103) @ 390000: uvm_test_top.m_top_env.m_drv0 [my_driver] Waiting for data from sequencer\nUVM_INFO ./tb/my_pkg.sv(170) @ 390000: uvm_test_top.m_top_env.m_seqr0@@seq1 [seq1] Executing pre_start()\nUVM_INFO ./tb/my_pkg.sv(180) @ 390000: uvm_test_top.m_top_env.m_seqr0@@seq1 [SEQ1] Starting seq1\nUVM_INFO ./tb/my_pkg.sv(143) @ 400000: uvm_test_top.m_top_env.m_seqr0@@seq1 [seq1] Executing pre_do\nUVM_INFO ./tb/my_pkg.sv(139) @ 400000: uvm_test_top.m_top_env.m_seqr0@@seq1 [seq1] Executing mid_do\nUVM_INFO ./tb/my_pkg.sv(207) @ 400000: uvm_test_top.m_top_env.m_seqr0@@seq1.m_seq2 [SEQ2] Starting seq2\nUVM_INFO ./tb/my_pkg.sv(143) @ 410000: uvm_test_top.m_top_env.m_seqr0@@seq1.m_seq2 [seq2] Executing pre_do\nUVM_INFO ./tb/my_pkg.sv(139) @ 410000: uvm_test_top.m_top_env.m_seqr0@@seq1.m_seq2 [seq2] Executing mid_do\nUVM_INFO ./tb/my_pkg.sv(234) @ 410000: uvm_test_top.m_top_env.m_seqr0@@seq1.m_seq2.m_seq3 [SEQ3] Starting seq3\nUVM_INFO ./tb/my_pkg.sv(236) @ 420000: uvm_test_top.m_top_env.m_seqr0@@seq1.m_seq2.m_seq3 [SEQ3] Ending seq3\nUVM_INFO ./tb/my_pkg.sv(147) @ 420000: uvm_test_top.m_top_env.m_seqr0@@seq1.m_seq2 [seq2] Executing post_do\nUVM_INFO ./tb/my_pkg.sv(244) @ 420000: uvm_test_top.m_top_env.m_seqr0@@seq1.m_seq2.m_seq3 [seq3] Executing post_start\nUVM_INFO ./tb/my_pkg.sv(210) @ 420000: uvm_test_top.m_top_env.m_seqr0@@seq1.m_seq2 [SEQ2] Ending seq2\nUVM_INFO ./tb/my_pkg.sv(147) @ 420000: uvm_test_top.m_top_env.m_seqr0@@seq1 [seq1] Executing post_do\nUVM_INFO ./tb/my_pkg.sv(183) @ 420000: uvm_test_top.m_top_env.m_seqr0@@seq1 [SEQ1] Ending seq1\nUVM_INFO ./tb/my_pkg.sv(122) @ 420000: uvm_test_top.m_top_env.m_drv0 [my_driver] Finished DUT simulation\n\n--- UVM Report catcher Summary ---",
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
                "id": "cv-uvm-49",
                "num": 49,
                "title": "How to use `uvm_do sequence macros ?",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "In How to create and use a sequence, we saw that a sequence calls on the tasks start_item() and finish_item(). You can avoid putting all these statements in your code by simply calling UVM sequence macros `uvm_do or `uvm_do_with. At compile time, these macros will be substituted with calls to start_item() and finish_item(). There are primarily four types of UVM macros that can be executed on the default sequencer.\n\nYou have to provide a uvm_sequence_item object or a sequence and internally, it will do the following:\n\n`uvm_do_* macros will identify if the argument provided is a sequence or a sequence item and will call start() or start_item() accordingly.\n\nThe sequence below will generate four items, randomize them and send to driver - See simulation results !\n\nThe variable req is already declared and defined in the parameter for the sequence class. So, req is of the type my_data. The `uvm_do_* macros will utilize a default in-built sequencer called m_sequencer. If you want the sequence to be executed on some other user-defined sequencer, you have to call `uvm_do_on_* macros as shown below :",
                        "code": "class base_sequence extends uvm_sequence #(my_data);\n\t`uvm_object_utils (base_sequence)\n\t\n\t...\n\tvirtual task body ();\n      `uvm_info (\"BASE_SEQ\", $sformatf (\"Starting body of %s\", this.get_name()), UVM_MEDIUM)\n      `uvm_do (req)\n      `uvm_do_with (req, { data == 8'h4e;\n                           addr == 8'ha1; })\n      `uvm_do_pri (req, 9)\n      `uvm_do_pri_with (req, 3, { data == 8'hc5; })\n      `uvm_info (\"BASE_SEQ\", $sformatf (\"Sequence %s is over\", this.get_name()), UVM_MEDIUM)\n   endtask\n\t...\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Note : All the macros are coded using `define within UVM, and each of them calls `uvm_do_on_pri_with with appropriate arguments. For example,",
                        "code": "`uvm_do_on          (SEQ_OR_ITEM, SEQR)\n`uvm_do_on_pri      (SEQ_OR_ITEM, SEQR, PRIORITY)\n`uvm_do_on_with     (SEQ_OR_ITEM, SEQR, CONSTRAINTS)\n`uvm_do_on_pri_with (SEQ_OR_ITEM, SEQR, PRIORITY, CONSTRAINTS)",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "`define uvm_do (SEQ_OR_ITEM) \n\t`uvm_do_on_pri_with (SEQ_OR_ITEM, m_sequencer, -1 {})\n\t\n`define uvm_do_on_with (SEQ_OR_ITEM, SEQR, CONSTRAINTS) \n\t`uvm_do_on_pri_with (SEQ_OR_ITEM, SEQR, -1, CONSTRAINTS)",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "CDNS-UVM-1.1d (14.10-s013)\n(C) 2007-2013 Mentor Graphics Corporation\n(C) 2007-2013 Cadence Design Systems, Inc.\n(C) 2006-2013 Synopsys, Inc.\n(C) 2011-2013 Cypress Semiconductor Corp.\n----------------------------------------------------------------\nUVM_INFO @ 0: reporter [RNTST] Running test base_test...\nUVM_INFO @ 0: reporter [UVMTOP] UVM testbench topology:\n------------------------------------------------------------\nName                     Type                    Size  Value\n------------------------------------------------------------\nuvm_test_top             base_test               -     @2636\n  m_top_env              my_env                  -     @210\n    m_drv0               my_driver               -     @204\n      rsp_port           uvm_analysis_port       -     @2840\n      seq_item_port      uvm_seq_item_pull_port  -     @2789\n    m_seqr0              my_sequencer            -     @2739\n      rsp_export         uvm_analysis_export     -     @2930\n      seq_item_export    uvm_seq_item_pull_imp   -     @3478\n      arbitration_queue  array                   0     -\n      lock_queue         array                   0     -\n      num_last_reqs      integral                32    'd1\n      num_last_rsps      integral                32    'd1\n    m_seqr1              uvm_sequencer           -     @2871\n      rsp_export         uvm_analysis_export     -     @3565\n      seq_item_export    uvm_seq_item_pull_imp   -     @4105\n      arbitration_queue  array                   0     -\n      lock_queue         array                   0     -\n      num_last_reqs      integral                32    'd1\n      num_last_rsps      integral                32    'd1\n------------------------------------------------------------\n\nUVM_INFO ./tb/my_pkg.sv(96) @ 0: uvm_test_top.m_top_env.m_drv0 [my_driver] Applying initial reset\nUVM_INFO ./tb/my_pkg.sv(100) @ 390000: uvm_test_top.m_top_env.m_drv0 [my_driver] DUT is now out of reset\nUVM_INFO ./tb/my_pkg.sv(107) @ 390000: uvm_test_top.m_top_env.m_drv0 [my_driver] Waiting for data from sequencer\nUVM_INFO ./tb/my_pkg.sv(173) @ 390000: uvm_test_top.m_top_env.m_seqr1@@seq1 [seq1] Starting body of seq1\nUVM_INFO ./tb/my_pkg.sv(120) @ 410000: uvm_test_top.m_top_env.m_drv0 [DRV] Driving data item across DUT interface\nreq: (my_data@4206) {\n  data: 'hfb\n  addr: 'h38\n  begin_time: 390000\n  depth: 'd2\n  parent sequence (name): seq1\n  parent sequence (full name): uvm_test_top.m_top_env.m_seqr1.seq1\n  sequencer: uvm_test_top.m_top_env.m_seqr1\n}\nUVM_INFO ./tb/my_pkg.sv(107) @ 410000: uvm_test_top.m_top_env.m_drv0 [my_driver] Waiting for data from sequencer\nUVM_INFO ./tb/my_pkg.sv(120) @ 430000: uvm_test_top.m_top_env.m_drv0 [DRV] Driving data item across DUT interface\nreq: (my_data@4256) {\n  data: 'h4e\n  addr: 'ha1\n  begin_time: 410000\n  depth: 'd2\n  parent sequence (name): seq1\n  parent sequence (full name): uvm_test_top.m_top_env.m_seqr1.seq1\n  sequencer: uvm_test_top.m_top_env.m_seqr1\n}\nUVM_INFO ./tb/my_pkg.sv(107) @ 430000: uvm_test_top.m_top_env.m_drv0 [my_driver] Waiting for data from sequencer\nUVM_INFO ./tb/my_pkg.sv(120) @ 450000: uvm_test_top.m_top_env.m_drv0 [DRV] Driving data item across DUT interface\nreq: (my_data@4187) {\n  data: 'hd8\n  addr: 'h2d\n  begin_time: 430000\n  depth: 'd2\n  parent sequence (name): seq1\n  parent sequence (full name): uvm_test_top.m_top_env.m_seqr1.seq1\n  sequencer: uvm_test_top.m_top_env.m_seqr1\n}\nUVM_INFO ./tb/my_pkg.sv(107) @ 450000: uvm_test_top.m_top_env.m_drv0 [my_driver] Waiting for data from sequencer\nUVM_INFO ./tb/my_pkg.sv(120) @ 470000: uvm_test_top.m_top_env.m_drv0 [DRV] Driving data item across DUT interface\nreq: (my_data@4339) {\n  data: 'hc5\n  addr: 'h8\n  begin_time: 450000\n  depth: 'd2\n  parent sequence (name): seq1\n  parent sequence (full name): uvm_test_top.m_top_env.m_seqr1.seq1\n  sequencer: uvm_test_top.m_top_env.m_seqr1\n}\nUVM_INFO ./tb/my_pkg.sv(107) @ 470000: uvm_test_top.m_top_env.m_drv0 [my_driver] Waiting for data from sequencer\nUVM_INFO ./tb/my_pkg.sv(179) @ 470000: uvm_test_top.m_top_env.m_seqr1@@seq1 [seq1] Sequence seq1 is over\nUVM_INFO ./tb/my_pkg.sv(126) @ 470000: uvm_test_top.m_top_env.m_drv0 [my_driver] Finished DUT simulation\n\n--- UVM Report catcher Summary ---\n[/pre]",
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
                "id": "cv-uvm-50",
                "num": 50,
                "title": "Sequence action macros for pre-existing items",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "We have already seen how to use `uvm_do set of macros. They automatically create a new object via calls to `uvm_create, randomize the item and send it to a sequencer. If we already have a data object that we simply want to send to a sequencer, we can use `uvm_send. There are different variations to this macro, just like `uvm_do_*.\n\nFirst, let's look into an example to see how `uvm_send is different from `uvm_do. Testbench environment is already in place, and we'll simply use a sequence to contain the calls to `uvm_send and `uvm_do. The main difference is that `uvm_send will NOT create or randomize while `uvm_do will do both.",
                        "code": "class seq1 extends base_sequence;\n   `uvm_object_utils (seq1)\n\n   seq2     m_seq2;           \n   my_data  m_data0;          // This data object will be created by us\n   my_data  m_data1;          // This data object will be left to uvm_create to create\n   my_data  m_data2;          // Will be used with `uvm_send\n\n   virtual task pre_start ();\n      `uvm_info (get_type_name (), \"Executing pre_start()\", UVM_MEDIUM)\n   endtask\n\n   function new (string name = \"seq1\");\n      super.new (name);\n      m_data0 = my_data::type_id::create (\"m_data0\");\n   endfunction\n\n   virtual task body ();\n      starting_phase.raise_objection (this);\n      `uvm_info (\"SEQ1\", \"Starting seq1\", UVM_MEDIUM)\n\n      // req already exists, but is not instantiated/new()'d. Calling uvm_do will internally \n      // call `uvm_create and generate the object, randomize it and send to sequencer\n      `uvm_info (\"SEQ1\", \"uvm_do (req) - Create, randomize and send req\", UVM_MEDIUM)\n      `uvm_do (req)\n      \n      // If uvm_do is called again, then the same object will be randomized again and sent\n      `uvm_info (\"SEQ1\", \"uvm_do (req) - Randomize again, and send\", UVM_MEDIUM)\n      `uvm_do (req)\n\n      // m_data0 is already created above; so its randomized and sent\n      `uvm_info (\"SEQ1\", \"uvm_do (m_data0) - Data already exists, simply randomize and send\", UVM_MEDIUM)\n      `uvm_do (m_data0)\n      // m_data1 was not created above, so it will be created, randomized and sent\n      `uvm_info (\"SEQ1\", \"uvm_do (m_data1) - Data was not created, so create it, randomize and send\", UVM_MEDIUM)\n      `uvm_do (m_data1)\n\n      // req already exists, but will not be randomized \n      `uvm_info (\"SEQ1\", \"uvm_send (req) - req already exists from previous create, Send it without randomization\", UVM_MEDIUM)\n      `uvm_send (req)\n\n`ifdef RUNTIME_ERR\n      // m_data2 was not created, and will not be created - Runtime Error !\n      `uvm_send (m_data2) \n`enddif\n\n      `uvm_info (\"SEQ1\", \"uvm_send (req) - Manually create, randomize and send\", UVM_MEDIUM)\n      // Create the object, randomize it and  send to sequencer\n      `uvm_create (m_data2)\n      void'(m_data2.randomize ());\n      `uvm_send (m_data2)\n\n      `uvm_info (\"SEQ1\", \"uvm_send_pri (req) - Send with priority\", UVM_MEDIUM)\n      `uvm_send_pri (m_data2, 72)\n      `uvm_info (\"SEQ1\", \"Ending seq1\", UVM_MEDIUM)\n\n      // Start the next sequence - will be discussed later\n      `uvm_do (m_seq2)\n      starting_phase.drop_objection (this);\n   endtask\n\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "In the example above, we have seen how sequence items are sent via `uvm_send. Note that you had spawned seq2 towards the end of seq1. Below is the definition for seq2, which inturn calls seq3 multiple times using the different variations of `uvm_send_*. Note that we also have the option to randomize and send an item or sequence using `uvm_rand_send_*.",
                        "code": "----------------------------------------------------------------\nCDNS-UVM-1.1d (14.22-s009)\n(C) 2007-2013 Mentor Graphics Corporation\n(C) 2007-2013 Cadence Design Systems, Inc.\n(C) 2006-2013 Synopsys, Inc.\n(C) 2011-2013 Cypress Semiconductor Corp.\n----------------------------------------------------------------\nUVM_INFO @ 0: reporter [RNTST] Running test base_test...\nUVM_INFO @ 0: reporter [UVMTOP] UVM testbench topology:\n------------------------------------------------------------\nName                     Type                    Size  Value\n------------------------------------------------------------\nuvm_test_top             base_test               -     @2644\n  m_top_env              my_env                  -     @2709\n    m_drv0               my_driver               -     @2754\n      rsp_port           uvm_analysis_port       -     @2854\n      seq_item_port      uvm_seq_item_pull_port  -     @2803\n    m_seqr0              my_sequencer            -     @2885\n      rsp_export         uvm_analysis_export     -     @2944\n      seq_item_export    uvm_seq_item_pull_imp   -     @3492\n      arbitration_queue  array                   0     -    \n      lock_queue         array                   0     -    \n      num_last_reqs      integral                32    'd1  \n      num_last_rsps      integral                32    'd1  \n------------------------------------------------------------\n\nUVM_INFO ./tb/my_pkg.sv(90) @ 0: uvm_test_top.m_top_env.m_drv0 [my_driver] Applying initial reset\nUVM_INFO ./tb/my_pkg.sv(94) @ 390000: uvm_test_top.m_top_env.m_drv0 [my_driver] DUT is now out of reset\nUVM_INFO ./tb/my_pkg.sv(155) @ 390000: uvm_test_top.m_top_env.m_seqr0@@seq1 [seq1] Executing pre_start()\nUVM_INFO ./tb/my_pkg.sv(165) @ 390000: uvm_test_top.m_top_env.m_seqr0@@seq1 [SEQ1] Starting seq1\nUVM_INFO ./tb/my_pkg.sv(169) @ 390000: uvm_test_top.m_top_env.m_seqr0@@seq1 [SEQ1] uvm_do (req) - Create, randomize and send req\n----------------------------------------------------------------------------------\nName                           Type      Size  Value                              \n----------------------------------------------------------------------------------\nreq                            my_data   -     @3648                              \n  data                         integral  8     'he2                               \n  addr                         integral  8     'hde                               \n  begin_time                   time      64    390000                             \n  depth                        int       32    'd2                                \n  parent sequence (name)       string    4     seq1                               \n  parent sequence (full name)  string    35    uvm_test_top.m_top_env.m_seqr0.seq1\n  sequencer                    string    30    uvm_test_top.m_top_env.m_seqr0     \n----------------------------------------------------------------------------------\nUVM_INFO ./tb/my_pkg.sv(173) @ 410000: uvm_test_top.m_top_env.m_seqr0@@seq1 [SEQ1] uvm_do (req) - Randomize again, and send\n----------------------------------------------------------------------------------\nName                           Type      Size  Value                              \n----------------------------------------------------------------------------------\nreq                            my_data   -     @3700                              \n  data                         integral  8     'hc                                \n  addr                         integral  8     'hc0                               \n  begin_time                   time      64    410000                             \n  depth                        int       32    'd2                                \n  parent sequence (name)       string    4     seq1                               \n  parent sequence (full name)  string    35    uvm_test_top.m_top_env.m_seqr0.seq1\n  sequencer                    string    30    uvm_test_top.m_top_env.m_seqr0     \n----------------------------------------------------------------------------------\nUVM_INFO ./tb/my_pkg.sv(177) @ 430000: uvm_test_top.m_top_env.m_seqr0@@seq1 [SEQ1] uvm_do (m_data0) - Data already exists, simply randomize and send\n----------------------------------------------------------------------------------\nName                           Type      Size  Value                              \n----------------------------------------------------------------------------------\nm_data0                        my_data   -     @3711                              \n  data                         integral  8     'h74                               \n  addr                         integral  8     'h50                               \n  begin_time                   time      64    430000                             \n  depth                        int       32    'd2                                \n  parent sequence (name)       string    4     seq1                               \n  parent sequence (full name)  string    35    uvm_test_top.m_top_env.m_seqr0.seq1\n  sequencer                    string    30    uvm_test_top.m_top_env.m_seqr0     \n----------------------------------------------------------------------------------\nUVM_INFO ./tb/my_pkg.sv(180) @ 450000: uvm_test_top.m_top_env.m_seqr0@@seq1 [SEQ1] uvm_do (m_data1) - Data was not created, so create it, randomize and send\n----------------------------------------------------------------------------------\nName                           Type      Size  Value                              \n----------------------------------------------------------------------------------\nm_data1                        my_data   -     @3721                              \n  data                         integral  8     'h43                               \n  addr                         integral  8     'h88                               \n  begin_time                   time      64    450000                             \n  depth                        int       32    'd2                                \n  parent sequence (name)       string    4     seq1                               \n  parent sequence (full name)  string    35    uvm_test_top.m_top_env.m_seqr0.seq1\n  sequencer                    string    30    uvm_test_top.m_top_env.m_seqr0     \n----------------------------------------------------------------------------------\nUVM_INFO ./tb/my_pkg.sv(184) @ 470000: uvm_test_top.m_top_env.m_seqr0@@seq1 [SEQ1] uvm_send (req) - req already exists from previous create, Simply send it without randomization\n----------------------------------------------------------------------------------\nName                           Type      Size  Value                              \n----------------------------------------------------------------------------------\nreq                            my_data   -     @3700                              \n  data                         integral  8     'hc                                \n  addr                         integral  8     'hc0                               \n  begin_time                   time      64    470000                             \n  end_time                     time      64    430000                             \n  depth                        int       32    'd2                                \n  parent sequence (name)       string    4     seq1                               \n  parent sequence (full name)  string    35    uvm_test_top.m_top_env.m_seqr0.seq1\n  sequencer                    string    30    uvm_test_top.m_top_env.m_seqr0     \n----------------------------------------------------------------------------------\nUVM_INFO ./tb/my_pkg.sv(192) @ 490000: uvm_test_top.m_top_env.m_seqr0@@seq1 [SEQ1] uvm_send (req) - Manually create, randomize and send\n----------------------------------------------------------------------------------\nName                           Type      Size  Value                              \n----------------------------------------------------------------------------------\nm_data2                        my_data   -     @3749                              \n  data                         integral  8     'hd5                               \n  addr                         integral  8     'h46                               \n  begin_time                   time      64    490000                             \n  depth                        int       32    'd2                                \n  parent sequence (name)       string    4     seq1                               \n  parent sequence (full name)  string    35    uvm_test_top.m_top_env.m_seqr0.seq1\n  sequencer                    string    30    uvm_test_top.m_top_env.m_seqr0     \n----------------------------------------------------------------------------------\nUVM_INFO ./tb/my_pkg.sv(198) @ 510000: uvm_test_top.m_top_env.m_seqr0@@seq1 [SEQ1] uvm_send_pri (req) - Send with priority\n----------------------------------------------------------------------------------\nName                           Type      Size  Value                              \n----------------------------------------------------------------------------------\nm_data2                        my_data   -     @3749                              \n  data                         integral  8     'hd5                               \n  addr                         integral  8     'h46                               \n  begin_time                   time      64    510000                             \n  end_time                     time      64    510000                             \n  depth                        int       32    'd2                                \n  parent sequence (name)       string    4     seq1                               \n  parent sequence (full name)  string    35    uvm_test_top.m_top_env.m_seqr0.seq1\n  sequencer                    string    30    uvm_test_top.m_top_env.m_seqr0     \n----------------------------------------------------------------------------------\nUVM_INFO ./tb/my_pkg.sv(200) @ 530000: uvm_test_top.m_top_env.m_seqr0@@seq1 [SEQ1] Ending seq1",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "To show that a sequence can also be randomized via macros, we have seq3 containing a data item declared as rand. So, calling `uvm_rand_send_* should randomize m_data3 within seq3, while `uvm_send will not randomize it.",
                        "code": "class seq2 extends base_sequence;\n   `uvm_object_utils (seq2)\n\n   seq3     m_seq3;\n\n   function new (string name = \"seq2\");\n      super.new (name);\n      m_seq3 = seq3::type_id::create (\"m_seq3\");\n   endfunction\n\n   virtual task pre_body ();\n      `uvm_info (get_type_name(), \"Executing pre_body\", UVM_MEDIUM)\n   endtask      \n\n   virtual task body ();\n      `uvm_info (\"SEQ2\", \"Starting seq2\", UVM_MEDIUM)\n\n      // Send a sequence via uvm_send\n      `uvm_info (\"SEQ2\", \"uvm_send (m_seq3) - Send sequence\", UVM_MEDIUM)\n      `uvm_send (m_seq3)\n\n      // Add priority to uvm_send\n      `uvm_info (\"SEQ2\", \"uvm_send_pri (m_seq3, 9) - Send with Priority\", UVM_MEDIUM)\n      `uvm_send_pri (m_seq3, 9)\n               \n      `uvm_info (\"SEQ2\", \"uvm_rand_send (m_seq3) - Send after randomization\", UVM_MEDIUM)\n      `uvm_rand_send (m_seq3)\n\n      `uvm_info (\"SEQ2\", \"uvm_rand_send_pri (m_seq3, 8) - Send with priority after randomization\", UVM_MEDIUM)\n      `uvm_rand_send_pri (m_seq3, 8)\n\n      `uvm_info (\"SEQ2\", \"uvm_rand_send_with (m_seq3, {data == 4; addr == 23;) - Send with randomization constraints\", UVM_MEDIUM)\n      `uvm_rand_send_with (m_seq3, { m_data3.data == 8'h4; \n                                     m_data3.addr == 8'h23;})\n\n      `uvm_info (\"SEQ2\", \"Ending seq2\", UVM_MEDIUM)\n   endtask\n\n   virtual task post_body ();\n      `uvm_info (get_type_name(), \"Executing post_body\", UVM_MEDIUM)\n   endtask    \n\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "class seq3 extends base_sequence;\n   `uvm_object_utils (seq3)\n\n   rand my_data   m_data3;\n\n   function new (string name = \"seq3\");\n      super.new (name);\n      m_data3 = my_data::type_id::create (\"m_data3\");\n   endfunction\n\n   virtual task body ();\n      `uvm_info (\"SEQ3\", \"Starting seq3\", UVM_MEDIUM)\n      m_data3.print (uvm_default_table_printer);\n      `uvm_info (\"SEQ3\", \"Ending seq3\", UVM_MEDIUM)\n   endtask\n\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "UVM_INFO ./tb/my_pkg.sv(227) @ 530000: uvm_test_top.m_top_env.m_seqr0@@seq1.m_seq2 [SEQ2] Starting seq2\nUVM_INFO ./tb/my_pkg.sv(230) @ 530000: uvm_test_top.m_top_env.m_seqr0@@seq1.m_seq2 [SEQ2] uvm_send (m_seq3) - Send sequence\nUVM_INFO ./tb/my_pkg.sv(270) @ 530000: uvm_test_top.m_top_env.m_seqr0@@seq1.m_seq2.m_seq3 [SEQ3] Starting seq3\n------------------------------\nName     Type      Size  Value\n------------------------------\nm_data3  my_data   -     @3777\n  data   integral  8     'h0\n  addr   integral  8     'h0\n------------------------------\nUVM_INFO ./tb/my_pkg.sv(272) @ 530000: uvm_test_top.m_top_env.m_seqr0@@seq1.m_seq2.m_seq3 [SEQ3] Ending seq3\nUVM_INFO ./tb/my_pkg.sv(234) @ 530000: uvm_test_top.m_top_env.m_seqr0@@seq1.m_seq2 [SEQ2] uvm_send_pri (m_seq3, 9) - Send with Priority\nUVM_INFO ./tb/my_pkg.sv(270) @ 530000: uvm_test_top.m_top_env.m_seqr0@@seq1.m_seq2.m_seq3 [SEQ3] Starting seq3\n------------------------------\nName     Type      Size  Value\n------------------------------\nm_data3  my_data   -     @3777\n  data   integral  8     'h0\n  addr   integral  8     'h0\n------------------------------\nUVM_INFO ./tb/my_pkg.sv(272) @ 530000: uvm_test_top.m_top_env.m_seqr0@@seq1.m_seq2.m_seq3 [SEQ3] Ending seq3\nUVM_INFO ./tb/my_pkg.sv(237) @ 530000: uvm_test_top.m_top_env.m_seqr0@@seq1.m_seq2 [SEQ2] uvm_rand_send (m_seq3) - Send after randomization\nUVM_INFO ./tb/my_pkg.sv(270) @ 530000: uvm_test_top.m_top_env.m_seqr0@@seq1.m_seq2.m_seq3 [SEQ3] Starting seq3\n------------------------------\nName     Type      Size  Value\n------------------------------\nm_data3  my_data   -     @3777\n  data   integral  8     'h61\n  addr   integral  8     'h31\n------------------------------\nUVM_INFO ./tb/my_pkg.sv(272) @ 530000: uvm_test_top.m_top_env.m_seqr0@@seq1.m_seq2.m_seq3 [SEQ3] Ending seq3\nUVM_INFO ./tb/my_pkg.sv(240) @ 530000: uvm_test_top.m_top_env.m_seqr0@@seq1.m_seq2 [SEQ2] uvm_rand_send_pri (m_seq3, 8) - Send with priority after randomization\nUVM_INFO ./tb/my_pkg.sv(270) @ 530000: uvm_test_top.m_top_env.m_seqr0@@seq1.m_seq2.m_seq3 [SEQ3] Starting seq3\n------------------------------\nName     Type      Size  Value\n------------------------------\nm_data3  my_data   -     @3777\n  data   integral  8     'ha2\n  addr   integral  8     'h9f\n------------------------------\nUVM_INFO ./tb/my_pkg.sv(272) @ 530000: uvm_test_top.m_top_env.m_seqr0@@seq1.m_seq2.m_seq3 [SEQ3] Ending seq3\nUVM_INFO ./tb/my_pkg.sv(243) @ 530000: uvm_test_top.m_top_env.m_seqr0@@seq1.m_seq2 [SEQ2] uvm_rand_send_with (m_seq3, {data == 4; addr == 23;) - Send with randomization constraints\nUVM_INFO ./tb/my_pkg.sv(270) @ 530000: uvm_test_top.m_top_env.m_seqr0@@seq1.m_seq2.m_seq3 [SEQ3] Starting seq3\n------------------------------\nName     Type      Size  Value\n------------------------------\nm_data3  my_data   -     @3777\n  data   integral  8     'h4\n  addr   integral  8     'h23\n------------------------------\nUVM_INFO ./tb/my_pkg.sv(272) @ 530000: uvm_test_top.m_top_env.m_seqr0@@seq1.m_seq2.m_seq3 [SEQ3] Ending seq3\nUVM_INFO ./tb/my_pkg.sv(247) @ 530000: uvm_test_top.m_top_env.m_seqr0@@seq1.m_seq2 [SEQ2] Ending seq2\nUVM_INFO ./tb/my_pkg.sv(118) @ 530000: uvm_test_top.m_top_env.m_drv0 [my_driver] Finished DUT simulation\n\n--- UVM Report catcher Summary ---",
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
                "id": "cv-uvm-51",
                "num": 51,
                "title": "UVM Virtual Sequence",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "A virtual sequence is a container to start multiple sequences on different sequencers in the environment. This virtual sequence is usually executed by a virtual sequencer which has handles to real sequencers. The need for a virtual sequence arises when you require different sequences to be run on different environments. For example, an SoC design might have multiple different interfaces that might need to be driven by a different set of sequences on individual sequencers. Hence the best way to start and control these different sequences would be from a virtual sequence. It becomes virtual because it is not associated with any particular data type.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Use of a virtual sequencer",
                        "content": "Note the following from the example above.\n\nOnce a virtual sequence is defined, you can start this in your test as shown below.",
                        "code": "class my_virtual_seq extends uvm_sequence;\n\t\t`uvm_object_utils (my_virtual_seq)\n\t\t`uvm_declare_p_sequencer (my_virtual_sequencer)\n\t\t\n\t\tfunction new (string name = \"my_virtual_seq\");\n\t\t\tsuper.new (name);\n\t\tendfunction\n\t\t\n\t\tapb_rd_wr_seq \tm_apb_rd_wr_seq;\n\t\twb_reset_seq \tm_wb_reset_seq;\n\t\tpcie_gen_seq \tm_pcie_gen_seq;\n\t\t\n\t\ttask pre_body();\n\t\t\tm_apb_rd_wr_seq = apb_rd_wr_seq::type_id::create (\"m_apb_rd_wr_seq\");\n\t\t\tm_wb_reset_seq  = wb_reset_seq::type_id::create (\"m_wb_reset_seq\");\n\t\t\tm_pcie_gen_seq  = pcie_gen_seq::type_id::create (\"m_pcie_gen_seq\");\n\t\tendtask\n\t\t\n\t\ttask body();\n\t\t\t...\n\t\t\tm_apb_rd_wr_seq.start (p_sequencer.m_apb_seqr);\n\t\t\tfork\n\t\t\t\tm_wb_reset_seq.start (p_sequencer.m_wb_seqr);\n\t\t\t\tm_pcie_gen_seq.start (p_sequencer.m_pcie_seqr);\n\t\t\tjoin \n\t\t\t...\n\t\tendtask\n\tendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "class my_test extends uvm_test;\n\t\t`uvm_component_utils (my_test)\n\t\t\n\t\tmy_env \tm_env;\n\t\t\n\t\t...\n\t\t\n\t\ttask run_phase (uvm_phase phase);\n\t\t\tmy_virtual_seq m_vseq = my_virtual_seq::type_id::create (\"m_vseq\");\n\t\t\tphase.raise_objection (this);\n\t\t\tm_vseq.start (m_env.m_virtual_seqr);\n\t\t\tphase.drop_objection (this);\n\t\tendtask\n\tendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Without a virtual sequencer",
                        "content": "You can also put handles to individual sequencers within the virtual sequence, and then would not need a virtual sequencer.\n\nThe handles to sequencers within the sequence needs to be assigned prior to starting this virtual sequence.",
                        "code": "class my_virtual_seq extends uvm_sequence;\n\t\t`uvm_object_utils (my_virtual_seq)\n\t\t...\n\t\tapb_sequencer \tm_apb_seqr;\n\t\treg_sequencer \tm_reg_seqr;\n\t\twb_sequencer \tm_wb_seqr;\n\t\t\n\t\tapb_rd_wr_seq \tm_apb_rd_wr_seq;\n\t\twb_reset_seq \tm_wb_reset_seq;\n\t\tpcie_gen_seq \tm_pcie_gen_seq;\n\t\t\n\t\tvirtual task pre_body();\n\t\t\tm_apb_rd_wr_seq = apb_rd_wr_seq::type_id::create (\"m_apb_rd_wr_seq\");\n\t\t\t...\n\t\t\t// Instantiate other sequences here\n\t\tendtask\n\t\t\n\t\tvirtual task body ();\n\t\t\tm_apb_rd_wr_seq.start (m_apb_seqr);\n\t\t\t...\n\t\tendtask\n\tendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "If you would like, you can also split the creation and assignment of sequence into build_phase and connect_phase within my_test.",
                        "code": "class my_test extends uvm_test;\n\t\t...\n\t\t\n\t\tvirtual task run_phase (uvm_phase phase);\n\t\t\tmy_virtual_seq m_vseq = my_virtual_seq::type_id::create (\"m_vseq\");\n\t\t\tphase.raise_objection (this);\n\t\t\t\n\t\t\t// Assign all sequencer handles\n\t\t\tm_vseq.m_apb_seqr = m_env.m_apb_agent.m_apb_seqr;\n\t\t\t...\n\t\t\t\n\t\t\tm_vseq.start (null);\n\t\t\tphase.drop_objection (this);\n\t\tendtask\n\tendclass",
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
                "id": "cv-uvm-52",
                "num": 52,
                "title": "UVM Virtual Sequencer",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "What is a virtual sequencer ?",
                        "content": "A virtual sequencer is a uvm_sequencer that is not connected directly to a driver and does not process uvm_sequence_item transactions itself. Its primary role is to manage and coordinate the execution of sequences on one or more other \"subsequencers\". These subsequencers can be regular, driver-connected sequencers or even other virtual sequencers, enabling a hierarchical control structure.\n\nClick to refresh the concept of a virtual sequence.\n\nVirtual sequencers are essential for scenarios where a single, high-level test scenario needs to control stimulus generation across multiple device interfaces or sub-agents in a testbench. This allows for the creation of reusable system-level scenarios that define interactions and coordination between different parts of the DUT.\n\nThe environment shown above has an APB env, AXI env, and a UART env. Each of these components have their own sequences and the respective sequencers on which they are launched. A virtual sequencer called m_vseqr is instantiated to hold references to each individual sequencer. Hence a virtual sequence executing on this virtual sequencer will have access to all the sequencers in the testbench.\n\nIt's important to note that there is no distinct uvm_virtual_sequencer class in UVM; instead, the standard uvm_sequencer class is used for both regular (driver-connected) and virtual sequencers. The distinction comes from how it is instantiated and used within the testbench architecture.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Steps to create a virtual sequencer",
                        "content": "Creating a virtual sequencer involves a few key steps, similar to creating a regular sequencer, but with crucial differences in its internal structure and connections.\n\nJust like any other sequencer, your custom virtual sequencer class must extend the uvm_sequencer base class.",
                        "code": "class virtual_sequencer extends uvm_sequencer;",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "This is the most critical difference from a regular sequencer. A virtual sequencer can contain variables (handles) that refer to the actual sequencers it intends to control. These handles are declared as members within your virtual sequencer class. For example, if your virtual sequencer needs to control an APB agent's sequencer and an SPI agent's sequencer, you would declare handles for those specific sequencer types.",
                        "code": "`uvm_component_utils (virtual_sequencer)\n\n\tfunction new (string name = \"my_virtual_sequencer\", uvm_component parent);\n\t\tsuper.new (name, parent);\n\tendfunction",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "A useful coding guideline is to give these sub-sequencer handles descriptive names that represent the interface they are associated with (e.g., bus_master_sequencer bus; instead of a generic name).\n\nThe virtual sequencer is a UVM component, so it should be instantiated within the build_phase of a higher-level component, typically a uvm_env (environment).",
                        "code": "// Declare handles to other sequencers here\n\tapb_sequencer       m_apb_seqr;\n\treg_sequencer       m_reg_seqr;\n\twb_sequencer        m_wb_seqr;\n\tpcie_sequencer      m_pcie_seqr;\n\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "The uvm_config_db can also be used to pass sequencer handles, though care must be taken in large environments to ensure unique lookup keys.",
                        "code": "class my_env extends uvm_env;\n  `uvm_component_utils (my_env)\n\n  apb_env              m_apb_env;\n  reg_env              m_reg_env;\n  wb_env               m_wb_env;\n  virtual_sequencer    m_vseqr;\n\n  virtual function void build_phase(uvm_phase phase);\n    super.build_phase(phase);\n\n    // Create the virtual sequencer \n    m_vseqr = virtual_sequencer::type_id::create(\"m_vseqr\", this);\n  endfunction\n\n  virtual function void connect_phase(uvm_phase phase);\n    super.connect_phase(phase);\n\n    // Connect handles of real sequencers to the virtual sequencer\n    m_vseqr.m_apb_seqr = m_apb_env.m_apb_seqr;\n    m_vseqr.m_reg_seqr = m_reg_env.m_reg_seqr;\n    // ...\n  endfunction\n\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Guidelines for Usage",
                        "content": "",
                        "code": "class my_system_vseq extends uvm_sequence;\n    `uvm_object_utils(my_system_vseq)\n\n     virtual task body();\n        ...\n\n        // Now, check the handles to the subsequencers contained within the virtual sequencer.\n        // Access these through the 'p_sequencer' handle.\n        if (p_sequencer.m_apb_sqr == null) begin\n           // If the APB sequencer handle is null, it indicates a configuration issue\n           // (e.g., APB agent was passive, or connection in env::connect_phase failed).\n           `uvm_fatal(get_full_name(), \"APB Sequencer handle (p_sequencer.m_apb_sqr) is null! Check agent configuration or env::connect_phase.\")\n  \n        end else begin\n           `uvm_info(get_full_name(), \"APB Sequencer handle is valid.\", UVM_LOW)\n           apb_sub_seq = apb_write_read_seq::type_id::create(\"apb_sub_seq\", this);\n           apb_sub_seq.start(p_sequencer.m_apb_sqr); \n        end\n  \n       ...\n     endtask\n  endclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Virtual Sequencer Example",
                        "content": "In our top environment, we'll create an instance of the virtual sequencer and connect real sequencers with their respective handles in the virtual sequencer.",
                        "code": "class my_virtual_sequencer extends uvm_sequencer;\n\t\t`uvm_component_utils (my_virtual_sequencer)\n\t\t\n\t\tfunction new (string name = \"my_virtual_sequencer\", uvm_component parent);\n\t\t\tsuper.new (name, parent);\n\t\tendfunction\n\t\t\n\t\t// Declare handles to other sequencers here\n\t\tapb_sequencer       m_apb_seqr;\n\t\treg_sequencer       m_reg_seqr;\n\t\twb_sequencer        m_wb_seqr;\n\t\tpcie_sequencer      m_pcie_seqr;\n\tendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "A virtual sequencer operates best when used with a virtual sequence. Read more on Virtual Sequence.",
                        "code": "class top_env extends uvm_env;\n\t\t...\n\t\t\n\t\tmy_virtual_sequencer \tm_virt_seqr;\n\t\t\n\t\tvirtual function void build_phase (uvm_phase phase);\n\t\t\t...\n\t\t\tm_virt_seqr = my_virtual_sequencer::type_id::create (\"m_virt_seqr\", this);\n\t\t\t...\n\t\tendfunction\n\t\t\n\t\t// Connect virtual sequencer handles to actual sequencers\n\t\tvirtual function void connect_phase (uvm_phase phase);\n\t\t\t...\n\t\t\tm_virt_seqr.m_apb_seqr   = m_apb_agent.m_apb_seqr;\n\t\t\tm_virt_seqr.m_reg_seqr   = m_reg_env.m_reg_seqr;\n\t\t\tm_virt_seqr.m_pcie_seqr  = m_pcie_env.m_pcie_agent.m_pcie_seqr;\n\t\t\t...\n\t\tendfunction\n\tendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "----------------------------------------------------------------\nCDNS-UVM-1.1d \n(C) 2007-2013 Mentor Graphics Corporation\n(C) 2007-2013 Cadence Design Systems, Inc.\n(C) 2006-2013 Synopsys, Inc.\n(C) 2011-2013 Cypress Semiconductor Corp.\n----------------------------------------------------------------\nUVM_INFO @ 0: reporter [RNTST] Running test base_test...\nUVM_INFO @ 0: reporter [UVMTOP] UVM testbench topology:\n--------------------------------------------------------------\nName                       Type                    Size  Value\n--------------------------------------------------------------\nuvm_test_top               base_test               -     @2667\n  m_top_env                top_env                 -     @2733\n    m_apb_agent            apb_agent               -     @2780\n      m_apb_drv            apb_driver              -     @4089\n        rsp_port           uvm_analysis_port       -     @4237\n        seq_item_port      uvm_seq_item_pull_port  -     @4188\n      m_apb_mon            apb_monitor             -     @4217\n      m_apb_seqr           uvm_sequencer           -     @3512\n        rsp_export         uvm_analysis_export     -     @3569\n        seq_item_export    uvm_seq_item_pull_imp   -     @4109\n        arbitration_queue  array                   0     -    \n        lock_queue         array                   0     -    \n        num_last_reqs      integral                32    'd1  \n        num_last_rsps      integral                32    'd1  \n    m_spi_agent            spi_agent               -     @2840\n      m_spi_drv            spi_driver              -     @4897\n        rsp_port           uvm_analysis_port       -     @5043\n        seq_item_port      uvm_seq_item_pull_port  -     @4995\n      m_spi_mon            spi_monitor             -     @5024\n      m_spi_seqr           uvm_sequencer           -     @4321\n        rsp_export         uvm_analysis_export     -     @4377\n        seq_item_export    uvm_seq_item_pull_imp   -     @4917\n        arbitration_queue  array                   0     -    \n        lock_queue         array                   0     -    \n        num_last_reqs      integral                32    'd1  \n        num_last_rsps      integral                32    'd1  \n    m_virt_seq             virtual_sequencer       -     @2870\n      rsp_export           uvm_analysis_export     -     @2928\n      seq_item_export      uvm_seq_item_pull_imp   -     @3478\n      arbitration_queue    array                   0     -    \n      lock_queue           array                   0     -    \n      num_last_reqs        integral                32    'd1  \n      num_last_rsps        integral                32    'd1  \n    m_wb_agent             wb_agent                -     @2810\n      m_wb_drv             wb_driver               -     @5712\n        rsp_port           uvm_analysis_port       -     @5858\n        seq_item_port      uvm_seq_item_pull_port  -     @5810\n      m_wb_mon             wb_monitor              -     @5839\n      m_wb_seqr            uvm_sequencer           -     @5136\n        rsp_export         uvm_analysis_export     -     @5192\n        seq_item_export    uvm_seq_item_pull_imp   -     @5732\n        arbitration_queue  array                   0     -    \n        lock_queue         array                   0     -    \n        num_last_reqs      integral                32    'd1  \n        num_last_rsps      integral                32    'd1  \n--------------------------------------------------------------\n\nUVM_INFO ./tb/my_pkg.sv(68) @ 0: uvm_test_top.m_top_env.m_virt_seq@@m_virt_seq [VSEQ] Start of virtual sequence\nUVM_INFO ./tb/wb_agent.sv(63) @ 0: uvm_test_top.m_top_env.m_wb_agent.m_wb_seqr@@m_wb_reset_seq [RESET_SEQ] Starting wb_reset_seq\nUVM_INFO ./tb/apb_agent.sv(52) @ 20000: uvm_test_top.m_top_env.m_apb_agent.m_apb_seqr@@m_apb_rw_seq [RW_SEQ] Starting apb_rw_seq\nUVM_INFO ./tb/spi_agent.sv(74) @ 30000: uvm_test_top.m_top_env.m_spi_agent.m_spi_seqr@@m_spi_tx_seq [tx_SEQ] Starting spi_tx_seq\nUVM_INFO ./tb/my_pkg.sv(75) @ 30000: uvm_test_top.m_top_env.m_virt_seq@@m_virt_seq [VSEQ] End of virtual sequence\nUVM_INFO ./tb/my_pkg.sv(108) @ 30000: uvm_test_top [SHUT] Shutting down test ...\n\n--- UVM Report catcher Summary ---",
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
                "id": "cv-uvm-53",
                "num": 53,
                "title": "UVM Sequence Library",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "What is a UVM sequence library ?",
                        "content": "A sequence defines how a series of uvm_sequence_items are created, randomized, and sent to the DUT. The primary logic of a sequence resides in its body() task. Unlike UVM components (which are static, quasi-static objects forming the testbench hierarchy), sequences are transient objects; they are created, used, and then can be discarded.\n\nThe uvm_sequence_library is a specialized sequence that holds a collection of registered sequence types. It can be configured to generate and run these sequences multiple times, using different modes of operation, including custom user-defined ones. When started (like any other sequence), the sequence library selects a sequence from its queue—randomly or as determined by the chosen selection_mode—and executes it. This makes it a powerful tool for scenarios requiring diverse or exhaustive stimulus.\n\nThe uvm_sequence_library is an extension of the uvm_sequence base class.",
                        "code": "class uvm_sequence_library #(type REQ=int, RSP=REQ) extends uvm_sequence#(REQ,RSP);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Why use a sequence library ?",
                        "content": "The uvm_sequence_library offers several advantages:",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "How to Use",
                        "content": "Extend the uvm_sequence_library class, parameterizing it with the uvm_sequence_item type it will eventually produce.\n\nRegister your sequence library with the UVM factory using uvm_object_utils() and uvm_sequence_library_utils() macros. This enables type and instance overrides.",
                        "code": "class my_seq_lib extends uvm_sequence_library #(my_item);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Call init_sequence_library() within your library's constructor. This function adds any statically registered sequences to the library.",
                        "code": "`uvm_object_utils(my_seq_lib)\n  `uvm_sequence_library_utils(my_seq_lib)",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "This can be done in two ways:",
                        "code": "function new(string name=\"my_seq_lib\");\n     super.new(name);\n     init_sequence_library();\n  endfunction",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "class my_seq1 extends my_seq;\n     `uvm_object_utils(my_seq1);\n     `uvm_add_to_seq_lib(my_seq1, my_seq_lib)\n     `uvm_add_to_seq_lib(my_seq1, my_another_seq_lib)\n     ...\n  \n  endclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "The easiest place to call add_typewide_sequence() or add_typewide_sequences() is within the constructor of the sequence_library class itself. You can also register a sequence with a specific instance of a sequence library using the add_sequence() or add_sequences() method. This is typically done within the test where the sequence library instance is created.",
                        "code": "class my_seq_lib extends uvm_sequence_library #(my_item);\n     `uvm_object_utils(my_seq_lib)\n     `uvm_sequence_library_utils(my_seq_lib)\n  \n     function new(string name=\"my_seq_lib\");\n        super.new(name);\n\n        add_typewide_sequences({mem_seq1::get_type(), mem_seq2::get_type()});\n        init_sequence_library();\n     endfunction    \n  \n  endclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "In a typical verification environment, there are often hundreds of tests with different random seeds and configurations. Managing this complexity becomes easier by using a variety of sequences to handle individual tasks. You can either write top-level sequences that spawn smaller ones inside their body() task, or implement a randomized mechanism to call multiple sequences. A cleaner and more structured approach is to use the UVM-provided uvm_sequence_library. As its name implies, it maintains a collection of registered sequences and invokes them multiple times in a randomized manner.\n\nLet's take an example of three sequences, all derived from the same base_sequence class, as we have seen before. Here, these three are individual sequences without being nested inside each other.",
                        "code": "class my_seq_lib_test extends base_test;\n\n  ...\n\n  task main_phase(uvm_phase phase);\n    phase.raise_objection(this, \"Raising Main Objection\");\n\n    // Register another sequence with this sequence library instance\n    seq_lib.add_sequence( data_err_seq::get_type() );\n\n    // Start the data sequence\n    seq_lib.start(data_sequencer); // This task call is blocking\n\n    phase.drop_objection(this, \"Dropping Main Objection\");\n  endtask : main_phase\n\nendclass : my_seq_lib_test",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Now we need to create a custom sequence library which should be derived from uvm_sequence_library.",
                        "code": "class seq1 extends base_sequence;\n\t...\n\tvirtual task body ();\n\t\t`uvm_info (\"SEQ1\", \"Starting seq1\", UVM_MEDIUM)\n\t\t#10;\n\t\t`uvm_info (\"SEQ1\", \"Ending seq1\", UVM_MEDIUM)\n\tendtask\n\t...\nendclass\n\nclass seq2 extends base_sequence;\n\t...\n\tvirtual task body ();\n         `uvm_info (\"SEQ2\", \"Starting seq2\", UVM_MEDIUM)\n         #10;\n         `uvm_info (\"SEQ2\", \"Ending seq2\", UVM_MEDIUM)\n\tendtask\n    ...\nendclass\n\nclass seq3 extends base_sequence;\n\t...\n\tvirtual task body ();\n    \t`uvm_info (\"SEQ3\", \"Starting seq3\", UVM_MEDIUM)\n\t\t#10;\n\t\t`uvm_info (\"SEQ3\", \"Ending seq3\", UVM_MEDIUM)\n\tendtask\n    ...\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Note that you have to call the macro `uvm_sequence_library_utils macro to define the infrastructure needed to define extensions to the uvm_sequence_library class. Each library, itself a sequence, can then be started independently on different sequencers or in different phases of the same sequencer. You can create an instance of this sequence library in a test or another sequence, configure it, and add the required set of sequences to the library. A good way to start the sequencer to execute sequences from this library is to make it a default sequence.",
                        "code": "class my_seq_lib_v2 extends uvm_sequence_library #(my_data);\n   `uvm_object_utils (my_seq_lib_v2)\n   `uvm_sequence_library_utils (my_seq_lib_v2)\n\n   function new (string name=\"my_seq_lib_v2\");\n      super.new (name);\n      init_sequence_library();\n   endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "In this case, the minimum number of iterations done by the sequencer is set to 5, and maximum 10.",
                        "code": "class feature_test extends base_test;\n   `uvm_component_utils (feature_test)\n\n   my_seq_lib m_seq_lib0;\n   seq1 m_seq1;\n   seq2 m_seq2;\n   seq3 m_seq3;\n\n   function new (string name, uvm_component parent = null);\n      super.new (name, parent);\n   endfunction \n\n   function void build_phase (uvm_phase phase);\n      super.build_phase (phase);\n\n      m_seq_lib0 = my_seq_lib::type_id::create (\"m_seq_lib0\");\n   endfunction\n\n   virtual task configure_phase (uvm_phase phase);\n      super.configure_phase (phase); \n      `uvm_info (\"CFG_PHASE\", \"Add sequences to library\", UVM_MEDIUM)\n      m_seq_lib0.selection_mode = UVM_SEQ_LIB_RANDC;\n      m_seq_lib0.min_random_count = 5;\n      m_seq_lib0.max_random_count = 10;\n\n      m_seq_lib0.add_typewide_sequence (m_seq1.get_type());\n      m_seq_lib0.add_typewide_sequence (m_seq2.get_type());\n      m_seq_lib0.add_typewide_sequence (m_seq3.get_type());\n      m_seq_lib0.init_sequence_library();\n   endtask\n\n   function void start_of_simulation_phase (uvm_phase phase);\n      super.start_of_simulation_phase (phase);\n      uvm_config_db#(uvm_sequence_base)::set(this,\"m_top_env.m_seqr0.main_phase\",\n                                                   \"default_sequence\", m_seq_lib0);\n   endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "----------------------------------------------------------------\nCDNS-UVM-1.1d (14.10-s013)\n(C) 2007-2013 Mentor Graphics Corporation\n(C) 2007-2013 Cadence Design Systems, Inc.\n(C) 2006-2013 Synopsys, Inc.\n(C) 2011-2013 Cypress Semiconductor Corp.\n----------------------------------------------------------------\nUVM_INFO @ 0: reporter [RNTST] Running test feature_test...\nUVM_INFO @ 0: reporter [UVMTOP] UVM testbench topology:\n------------------------------------------------------------\nName                     Type                    Size  Value\n------------------------------------------------------------\nuvm_test_top             feature_test            -     @2677\n  m_top_env              my_env                  -     @229\n    m_drv0               my_driver               -     @2793\n      rsp_port           uvm_analysis_port       -     @2893\n      seq_item_port      uvm_seq_item_pull_port  -     @2842\n    m_seqr0              my_sequencer            -     @223\n      rsp_export         uvm_analysis_export     -     @2983\n      seq_item_export    uvm_seq_item_pull_imp   -     @3531\n      arbitration_queue  array                   0     -\n      lock_queue         array                   0     -\n      num_last_reqs      integral                32    'd1\n      num_last_rsps      integral                32    'd1\n------------------------------------------------------------\n\nUVM_INFO ./tb/my_pkg.sv(92) @ 0: uvm_test_top.m_top_env.m_drv0 [my_driver] Applying initial reset\nUVM_INFO ./tb/my_pkg.sv(96) @ 390000: uvm_test_top.m_top_env.m_drv0 [my_driver] DUT is now out of reset\nUVM_INFO ./tb/test_pkg.sv(89) @ 390000: uvm_test_top [CFG_PHASE] Add sequence to lib\nUVM_INFO ./tb/my_pkg.sv(103) @ 390000: uvm_test_top.m_top_env.m_drv0 [my_driver] Waiting for data from sequencer\nUVM_INFO /pkg/cadence-incisiv-/14.10.013/i686-linux/tools/methodology/UVM/CDNS-1.1d/sv/src/seq/uvm_sequence_library.svh(664) @ 390000: uvm_test_top.m_top_env.m_seqr0@@m_seq_lib0 [SEQLIB/START] Starting sequence library my_seq_lib in main phase: 5 iterations in mode UVM_SEQ_LIB_RANDC\nUVM_INFO ./tb/my_pkg.sv(166) @ 390000: uvm_test_top.m_top_env.m_seqr0@@m_seq_lib0.seq1:1 [seq1] Executing pre_start()\nUVM_INFO ./tb/my_pkg.sv(174) @ 390000: uvm_test_top.m_top_env.m_seqr0@@m_seq_lib0.seq1:1 [SEQ1] Starting seq1\nUVM_INFO ./tb/my_pkg.sv(176) @ 400000: uvm_test_top.m_top_env.m_seqr0@@m_seq_lib0.seq1:1 [SEQ1] Ending seq1\nUVM_INFO ./tb/my_pkg.sv(223) @ 400000: uvm_test_top.m_top_env.m_seqr0@@m_seq_lib0.seq3:2 [SEQ3] Starting seq3\nUVM_INFO ./tb/my_pkg.sv(225) @ 410000: uvm_test_top.m_top_env.m_seqr0@@m_seq_lib0.seq3:2 [SEQ3] Ending seq3\nUVM_INFO ./tb/my_pkg.sv(233) @ 410000: uvm_test_top.m_top_env.m_seqr0@@m_seq_lib0.seq3:2 [seq3] Executing post_start\nUVM_INFO ./tb/my_pkg.sv(197) @ 410000: uvm_test_top.m_top_env.m_seqr0@@m_seq_lib0.seq2:3 [SEQ2] Starting seq2\nUVM_INFO ./tb/my_pkg.sv(199) @ 420000: uvm_test_top.m_top_env.m_seqr0@@m_seq_lib0.seq2:3 [SEQ2] Ending seq2\nUVM_INFO ./tb/my_pkg.sv(223) @ 420000: uvm_test_top.m_top_env.m_seqr0@@m_seq_lib0.seq3:4 [SEQ3] Starting seq3\nUVM_INFO ./tb/my_pkg.sv(225) @ 430000: uvm_test_top.m_top_env.m_seqr0@@m_seq_lib0.seq3:4 [SEQ3] Ending seq3\nUVM_INFO ./tb/my_pkg.sv(233) @ 430000: uvm_test_top.m_top_env.m_seqr0@@m_seq_lib0.seq3:4 [seq3] Executing post_start\nUVM_INFO ./tb/my_pkg.sv(197) @ 430000: uvm_test_top.m_top_env.m_seqr0@@m_seq_lib0.seq2:5 [SEQ2] Starting seq2\nUVM_INFO ./tb/my_pkg.sv(199) @ 440000: uvm_test_top.m_top_env.m_seqr0@@m_seq_lib0.seq2:5 [SEQ2] Ending seq2\nUVM_INFO /pkg/cadence-incisiv-/14.10.013/i686-linux/tools/methodology/UVM/CDNS-1.1d/sv/src/seq/uvm_sequence_library.svh(738) @ 440000: uvm_test_top.m_top_env.m_seqr0@@m_seq_lib0 [SEQLIB/END] Ending sequence library in phase main\nUVM_INFO /pkg/cadence-incisiv-/14.10.013/i686-linux/tools/methodology/UVM/CDNS-1.1d/sv/src/seq/uvm_sequence_library.svh(740) @ 440000: uvm_test_top.m_top_env.m_seqr0@@m_seq_lib0 [SEQLIB/DSTRB] '{\"seq1\":1, \"seq2\":2, \"seq3\":2}\nUVM_INFO ./tb/my_pkg.sv(122) @ 440000: uvm_test_top.m_top_env.m_drv0 [my_driver] Finished DUT simulation\n\n--- UVM Report catcher Summary ---",
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
                "id": "cv-uvm-54",
                "num": 54,
                "title": "UVM Sequence Arbitration",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "When multiple sequences try to access a single driver, the sequencer that is executing sequences schedules them in a certain order through a process called arbitration. The sequencer can be configured to grant driver access to certain sequences over others based on certain criteria called as arbitration modes.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Example",
                        "content": "To understand the different modes of arbitration, lets first build a testbench containing an environment with a sequencer and driver. Note that sequences that do not require driver access or execute sequence items using start_item and finish_item do not have to undergo arbitration. So if multiple plain sequences are started on a sequencer, they will be executed in parallel.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "1. Data class",
                        "content": "The class called base_class represents a data object that will be sent to the driver so that it can convert this into protocol level pin toggles at the DUT interface. This class definition is kept simple for our purpose to illustrate the arbitration scheme",
                        "code": "class base_pkt extends uvm_sequence_item;\n  `uvm_object_utils(base_pkt)\n  function new(string name = \"base_pkt\");\n    super.new(name);\n  endfunction\n  \n  rand bit[7:0] addr;\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "2. Driver",
                        "content": "Assume a driver accepts a data object of type base_pkt and toggles pins of the DUT.",
                        "code": "class base_driver extends uvm_driver #(base_pkt);\n  `uvm_component_utils(base_driver)\n  function new(string name = \"base_driver\", uvm_component parent=null);\n    super.new(name, parent);\n  endfunction\n  \n  // Assume that the packet is driven across to the DUT within 10ns\n  // after which the driver calls item_done()\n  virtual task run_phase(uvm_phase phase);\n    base_pkt m_pkt;\n    forever begin\n      seq_item_port.get_next_item(m_pkt);\n      #10 `uvm_info (\"DRV\", $sformatf(\"Drive packet with addr=0x%0h\", m_pkt.addr), UVM_LOW)\n      seq_item_port.item_done();\n    end\n  endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "3. Environment",
                        "content": "The environment class instantiates a sequencer and driver and makes the connection between them.",
                        "code": "class base_env extends uvm_env;\n  `uvm_component_utils(base_env)\n  function new(string name=\"base_env\", uvm_component parent=null);\n    super.new(name, parent);\n  endfunction\n  \n  base_driver  \t\t \t\tm_drv;\n  uvm_sequencer#(base_pkt)  m_seqr;\n  \n  virtual function void build_phase(uvm_phase phase);\n    super.build_phase(phase);\n    m_drv = base_driver::type_id::create(\"m_drv\", this);\n    m_seqr = uvm_sequencer#(base_pkt)::type_id::create(\"m_seqr\", this);\n  endfunction\n  \n  virtual function void connect_phase(uvm_phase phase);\n    super.connect_phase(phase);\n    m_drv.seq_item_port.connect(m_seqr.seq_item_export);\n  endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "4. Sequence",
                        "content": "The sequence class called base_seq creates a data packet and is executed by the sequencer defined above. The data packet will be sent to the driver and will be blocked until the driver calls item_done method.\n\nSince multiple instances of this sequence will be started on a single sequencer, a variable called seq_num is declared to distinguish between sequences. The address of the packet is also made unique to identify which sequence is responsible for sending data through the driver.",
                        "code": "class base_seq extends uvm_sequence;\n  `uvm_object_utils(base_seq)\n  function new(string name=\"base_seq\");\n    super.new(name);\n  endfunction\n  \n  int seq_num;\n  \n  virtual task body();\n    base_pkt m_pkt = base_pkt::type_id::create(\"m_pkt\");\n    `uvm_info(get_name(), $sformatf(\"Started body\"), UVM_LOW)\n    start_item(m_pkt);\n    m_pkt.randomize() with { addr == seq_num; };\n    finish_item(m_pkt);\n    #10 `uvm_info(get_name(), $sformatf(\"Ended body\"), UVM_LOW)\n  endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "5. Test",
                        "content": "A base test class is defined below that builds the environment and all sequences. It also has an additional function to display the current arbitration scheme of the sequencer within environment. Based on the arbitration scheme, the sequencer follows a certain of order of granting access to all sequences to the driver.",
                        "code": "class base_test extends uvm_test;\n  `uvm_component_utils(base_test)\n  function new(string name=\"base_test\", uvm_component parent=null);\n    super.new(name, parent);\n  endfunction\n  \n  base_seq \t\tm_seq[6];\n  base_env \t\tm_env;\n  \n  virtual function void build_phase(uvm_phase phase);\n    super.build_phase(phase);\n   foreach(m_seq[i]) begin\n      m_seq[i] = base_seq::type_id::create($sformatf(\"m_seq_%0d\", i));\n      m_seq[i].seq_num = i;\n    end\n    m_env = base_env::type_id::create(\"m_env\", this);    \n  endfunction\n  \n  virtual function void show_arb_cfg();\n\tUVM_SEQ_ARB_TYPE  cur_arb;\n        \n    cur_arb = m_env.m_seqr.get_arbitration();\n    `uvm_info(\"TEST\", $sformatf(\"Seqr set to %s\", cur_arb.name()), UVM_LOW)\n  endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "UVM_SEQ_ARB_FIFO",
                        "content": "This is the default arbitration mode where the UVM sequencer starts them regardless of their priorities.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Without priority",
                        "content": "",
                        "code": "class arb_fifo_test extends base_test;\n  `uvm_component_utils(arb_fifo_test)\n  function new(string name, uvm_component parent);\n    super.new(name, parent);\n  endfunction\n  \n  virtual task run_phase(uvm_phase phase);\n    super.run_phase(phase);\n    phase.raise_objection(this);\n\n    m_env.m_seqr.set_arbitration(UVM_SEQ_ARB_FIFO);\n    show_arb_cfg();\n    \n    fork\n      m_seq[0].start(m_env.m_seqr);\n      m_seq[1].start(m_env.m_seqr);\n      m_seq[2].start(m_env.m_seqr);\n      m_seq[3].start(m_env.m_seqr);\n    join\n    phase.drop_objection(this);\n  endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test arb_fifo_test...\nUVM_INFO testbench.sv(90) @ 0: uvm_test_top [TEST] Seqr set to UVM_SEQ_ARB_FIFO\nUVM_INFO testbench.sv(23) @ 0: uvm_test_top.m_env.m_seqr@@m_seq_0 [m_seq_0] Started body\nUVM_INFO testbench.sv(23) @ 0: uvm_test_top.m_env.m_seqr@@m_seq_1 [m_seq_1] Started body\nUVM_INFO testbench.sv(23) @ 0: uvm_test_top.m_env.m_seqr@@m_seq_2 [m_seq_2] Started body\nUVM_INFO testbench.sv(23) @ 0: uvm_test_top.m_env.m_seqr@@m_seq_3 [m_seq_3] Started body\nUVM_INFO testbench.sv(41) @ 10: uvm_test_top.m_env.m_drv [DRV] Drive packet with addr=0x0\nUVM_INFO testbench.sv(27) @ 20: uvm_test_top.m_env.m_seqr@@m_seq_0 [m_seq_0] Ended body\nUVM_INFO testbench.sv(41) @ 20: uvm_test_top.m_env.m_drv [DRV] Drive packet with addr=0x1\nUVM_INFO testbench.sv(27) @ 30: uvm_test_top.m_env.m_seqr@@m_seq_1 [m_seq_1] Ended body\nUVM_INFO testbench.sv(41) @ 30: uvm_test_top.m_env.m_drv [DRV] Drive packet with addr=0x2\nUVM_INFO testbench.sv(27) @ 40: uvm_test_top.m_env.m_seqr@@m_seq_2 [m_seq_2] Ended body\nUVM_INFO testbench.sv(41) @ 40: uvm_test_top.m_env.m_drv [DRV] Drive packet with addr=0x3\nUVM_INFO testbench.sv(27) @ 50: uvm_test_top.m_env.m_seqr@@m_seq_3 [m_seq_3] Ended body\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_objection.svh(1271) @ 50: reporter [TEST_DONE] 'run' phase is ready to proceed to the 'extract' phase\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_report_server.svh(847) @ 50: reporter [UVM/REPORT/SERVER] \n--- UVM Report Summary ---",
                        "lang": "verilog"
                    },
                    {
                        "title": "With priority",
                        "content": "Lets add some priorities to the sequence when they are started on the sequencer and see how they behave.\n\nNote that priorities do not take effect in UVM_SEQ_ARB_FIFO arbitration mode",
                        "code": "class arb_fifo_test extends base_test;\n  `uvm_component_utils(arb_fifo_test)\n  function new(string name, uvm_component parent);\n    super.new(name, parent);\n  endfunction\n  \n  virtual task run_phase(uvm_phase phase);\n    super.run_phase(phase);\n    phase.raise_objection(this);\n\n    m_env.m_seqr.set_arbitration(UVM_SEQ_ARB_FIFO);\n    show_arb_cfg();\n\n    fork\n      m_seq[0].start(m_env.m_seqr, .this_priority(100));\n      m_seq[1].start(m_env.m_seqr, .this_priority(200));\n      m_seq[2].start(m_env.m_seqr, .this_priority(300));\n      m_seq[3].start(m_env.m_seqr, .this_priority(400));\n    join\n    phase.drop_objection(this);\n  endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test arb_fifo_test...\nUVM_INFO testbench.sv(90) @ 0: uvm_test_top [TEST] Seqr set to UVM_SEQ_ARB_FIFO\nUVM_INFO testbench.sv(23) @ 0: uvm_test_top.m_env.m_seqr@@m_seq_0 [m_seq_0] Started body\nUVM_INFO testbench.sv(23) @ 0: uvm_test_top.m_env.m_seqr@@m_seq_1 [m_seq_1] Started body\nUVM_INFO testbench.sv(23) @ 0: uvm_test_top.m_env.m_seqr@@m_seq_2 [m_seq_2] Started body\nUVM_INFO testbench.sv(23) @ 0: uvm_test_top.m_env.m_seqr@@m_seq_3 [m_seq_3] Started body\nUVM_INFO testbench.sv(41) @ 10: uvm_test_top.m_env.m_drv [DRV] Drive packet with addr=0x0\nUVM_INFO testbench.sv(27) @ 20: uvm_test_top.m_env.m_seqr@@m_seq_0 [m_seq_0] Ended body\nUVM_INFO testbench.sv(41) @ 20: uvm_test_top.m_env.m_drv [DRV] Drive packet with addr=0x1\nUVM_INFO testbench.sv(27) @ 30: uvm_test_top.m_env.m_seqr@@m_seq_1 [m_seq_1] Ended body\nUVM_INFO testbench.sv(41) @ 30: uvm_test_top.m_env.m_drv [DRV] Drive packet with addr=0x2\nUVM_INFO testbench.sv(27) @ 40: uvm_test_top.m_env.m_seqr@@m_seq_2 [m_seq_2] Ended body\nUVM_INFO testbench.sv(41) @ 40: uvm_test_top.m_env.m_drv [DRV] Drive packet with addr=0x3\nUVM_INFO testbench.sv(27) @ 50: uvm_test_top.m_env.m_seqr@@m_seq_3 [m_seq_3] Ended body\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_objection.svh(1271) @ 50: reporter [TEST_DONE] 'run' phase is ready to proceed to the 'extract' phase\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_report_server.svh(847) @ 50: reporter [UVM/REPORT/SERVER] \n--- UVM Report Summary ---",
                        "lang": "verilog"
                    },
                    {
                        "title": "UVM_SEQ_ARB_RANDOM",
                        "content": "In here the sequencer will randomly start sequences regardless of their priorities.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Without priority",
                        "content": "",
                        "code": "class arb_random_test extends base_test;\n  `uvm_component_utils(arb_random_test)\n  function new(string name, uvm_component parent);\n    super.new(name, parent);\n  endfunction\n  \n  virtual task run_phase(uvm_phase phase);\n    super.run_phase(phase);\n    phase.raise_objection(this);\n\n    m_env.m_seqr.set_arbitration(UVM_SEQ_ARB_RANDOM);\n    show_arb_cfg();\n    \n    fork\n      m_seq[0].start(m_env.m_seqr);\n      m_seq[1].start(m_env.m_seqr);\n      m_seq[2].start(m_env.m_seqr);\n      m_seq[3].start(m_env.m_seqr);\n    join\n    phase.drop_objection(this);\n  endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test arb_random_test...\nUVM_INFO testbench.sv(90) @ 0: uvm_test_top [TEST] Seqr set to UVM_SEQ_ARB_RANDOM\nUVM_INFO testbench.sv(23) @ 0: uvm_test_top.m_env.m_seqr@@m_seq_0 [m_seq_0] Started body\nUVM_INFO testbench.sv(23) @ 0: uvm_test_top.m_env.m_seqr@@m_seq_1 [m_seq_1] Started body\nUVM_INFO testbench.sv(23) @ 0: uvm_test_top.m_env.m_seqr@@m_seq_2 [m_seq_2] Started body\nUVM_INFO testbench.sv(23) @ 0: uvm_test_top.m_env.m_seqr@@m_seq_3 [m_seq_3] Started body\nUVM_INFO testbench.sv(41) @ 10: uvm_test_top.m_env.m_drv [DRV] Drive packet with addr=0x0\nUVM_INFO testbench.sv(27) @ 20: uvm_test_top.m_env.m_seqr@@m_seq_0 [m_seq_0] Ended body\nUVM_INFO testbench.sv(41) @ 20: uvm_test_top.m_env.m_drv [DRV] Drive packet with addr=0x3\nUVM_INFO testbench.sv(27) @ 30: uvm_test_top.m_env.m_seqr@@m_seq_3 [m_seq_3] Ended body\nUVM_INFO testbench.sv(41) @ 30: uvm_test_top.m_env.m_drv [DRV] Drive packet with addr=0x1\nUVM_INFO testbench.sv(27) @ 40: uvm_test_top.m_env.m_seqr@@m_seq_1 [m_seq_1] Ended body\nUVM_INFO testbench.sv(41) @ 40: uvm_test_top.m_env.m_drv [DRV] Drive packet with addr=0x2\nUVM_INFO testbench.sv(27) @ 50: uvm_test_top.m_env.m_seqr@@m_seq_2 [m_seq_2] Ended body\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_objection.svh(1271) @ 50: reporter [TEST_DONE] 'run' phase is ready to proceed to the 'extract' phase\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_report_server.svh(847) @ 50: reporter [UVM/REPORT/SERVER] \n--- UVM Report Summary ---",
                        "lang": "verilog"
                    },
                    {
                        "title": "With priority",
                        "content": "Lets add some priorities to the sequence when they are started on the sequencer and see how they behave.\n\nNote that priorities do not take effect in UVM_SEQ_ARB_RANDOM arbitration mode",
                        "code": "class arb_random_test extends base_test;\n  `uvm_component_utils(arb_random_test)\n  function new(string name, uvm_component parent);\n    super.new(name, parent);\n  endfunction\n  \n  virtual task run_phase(uvm_phase phase);\n    super.run_phase(phase);\n    phase.raise_objection(this);\n\n    m_env.m_seqr.set_arbitration(UVM_SEQ_ARB_RANDOM);\n    show_arb_cfg();\n    \n    fork\n      m_seq[0].start(m_env.m_seqr, .this_priority(100));\n      m_seq[1].start(m_env.m_seqr, .this_priority(200));\n      m_seq[2].start(m_env.m_seqr, .this_priority(300));\n      m_seq[3].start(m_env.m_seqr, .this_priority(400));\n    join\n    phase.drop_objection(this);\n  endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test arb_random_test...\nUVM_INFO testbench.sv(90) @ 0: uvm_test_top [TEST] Seqr set to UVM_SEQ_ARB_RANDOM\nUVM_INFO testbench.sv(23) @ 0: uvm_test_top.m_env.m_seqr@@m_seq_0 [m_seq_0] Started body\nUVM_INFO testbench.sv(23) @ 0: uvm_test_top.m_env.m_seqr@@m_seq_1 [m_seq_1] Started body\nUVM_INFO testbench.sv(23) @ 0: uvm_test_top.m_env.m_seqr@@m_seq_2 [m_seq_2] Started body\nUVM_INFO testbench.sv(23) @ 0: uvm_test_top.m_env.m_seqr@@m_seq_3 [m_seq_3] Started body\nUVM_INFO testbench.sv(41) @ 10: uvm_test_top.m_env.m_drv [DRV] Drive packet with addr=0x0\nUVM_INFO testbench.sv(27) @ 20: uvm_test_top.m_env.m_seqr@@m_seq_0 [m_seq_0] Ended body\nUVM_INFO testbench.sv(41) @ 20: uvm_test_top.m_env.m_drv [DRV] Drive packet with addr=0x3\nUVM_INFO testbench.sv(27) @ 30: uvm_test_top.m_env.m_seqr@@m_seq_3 [m_seq_3] Ended body\nUVM_INFO testbench.sv(41) @ 30: uvm_test_top.m_env.m_drv [DRV] Drive packet with addr=0x1\nUVM_INFO testbench.sv(27) @ 40: uvm_test_top.m_env.m_seqr@@m_seq_1 [m_seq_1] Ended body\nUVM_INFO testbench.sv(41) @ 40: uvm_test_top.m_env.m_drv [DRV] Drive packet with addr=0x2\nUVM_INFO testbench.sv(27) @ 50: uvm_test_top.m_env.m_seqr@@m_seq_2 [m_seq_2] Ended body\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_objection.svh(1271) @ 50: reporter [TEST_DONE] 'run' phase is ready to proceed to the 'extract' phase\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_report_server.svh(847) @ 50: reporter [UVM/REPORT/SERVER] \n--- UVM Report Summary ---",
                        "lang": "verilog"
                    },
                    {
                        "title": "UVM_SEQ_ARB_STRICT_FIFO",
                        "content": "This mode will always grant the sequence with highest priority first. Multiple sequences with the same priority will be arbitrated similar to a FIFO. For this test, let us increase the number of sequences just to have multiple sequences on the same priority.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Without priority",
                        "content": "See that output is the same as UVM_SEQ_ARB_FIFO arbitration mode when no priorities are specified.",
                        "code": "class arb_strict_fifo_test extends base_test;\n  `uvm_component_utils(arb_strict_fifo_test)\n  function new(string name, uvm_component parent);\n    super.new(name, parent);\n  endfunction\n  \n  virtual task run_phase(uvm_phase phase);\n    super.run_phase(phase);\n    phase.raise_objection(this);\n\n    m_env.m_seqr.set_arbitration(UVM_SEQ_ARB_STRICT_FIFO);\n    show_arb_cfg();\n\n    fork\n      m_seq[0].start(m_env.m_seqr);\n      m_seq[3].start(m_env.m_seqr);\n\t  m_seq[1].start(m_env.m_seqr);\n      m_seq[2].start(m_env.m_seqr);\n      m_seq[4].start(m_env.m_seqr);\n      m_seq[5].start(m_env.m_seqr);\n    join\n    phase.drop_objection(this);\n  endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test arb_strict_fifo_test...\nUVM_INFO testbench.sv(90) @ 0: uvm_test_top [TEST] Seqr set to UVM_SEQ_ARB_STRICT_FIFO\nUVM_INFO testbench.sv(23) @ 0: uvm_test_top.m_env.m_seqr@@m_seq_0 [m_seq_0] Started body\nUVM_INFO testbench.sv(23) @ 0: uvm_test_top.m_env.m_seqr@@m_seq_3 [m_seq_3] Started body\nUVM_INFO testbench.sv(23) @ 0: uvm_test_top.m_env.m_seqr@@m_seq_1 [m_seq_1] Started body\nUVM_INFO testbench.sv(23) @ 0: uvm_test_top.m_env.m_seqr@@m_seq_2 [m_seq_2] Started body\nUVM_INFO testbench.sv(23) @ 0: uvm_test_top.m_env.m_seqr@@m_seq_4 [m_seq_4] Started body\nUVM_INFO testbench.sv(23) @ 0: uvm_test_top.m_env.m_seqr@@m_seq_5 [m_seq_5] Started body\nUVM_INFO testbench.sv(41) @ 10: uvm_test_top.m_env.m_drv [DRV] Drive packet with addr=0x0\nUVM_INFO testbench.sv(27) @ 20: uvm_test_top.m_env.m_seqr@@m_seq_0 [m_seq_0] Ended body\nUVM_INFO testbench.sv(41) @ 20: uvm_test_top.m_env.m_drv [DRV] Drive packet with addr=0x3\nUVM_INFO testbench.sv(27) @ 30: uvm_test_top.m_env.m_seqr@@m_seq_3 [m_seq_3] Ended body\nUVM_INFO testbench.sv(41) @ 30: uvm_test_top.m_env.m_drv [DRV] Drive packet with addr=0x1\nUVM_INFO testbench.sv(27) @ 40: uvm_test_top.m_env.m_seqr@@m_seq_1 [m_seq_1] Ended body\nUVM_INFO testbench.sv(41) @ 40: uvm_test_top.m_env.m_drv [DRV] Drive packet with addr=0x2\nUVM_INFO testbench.sv(27) @ 50: uvm_test_top.m_env.m_seqr@@m_seq_2 [m_seq_2] Ended body\nUVM_INFO testbench.sv(41) @ 50: uvm_test_top.m_env.m_drv [DRV] Drive packet with addr=0x4\nUVM_INFO testbench.sv(27) @ 60: uvm_test_top.m_env.m_seqr@@m_seq_4 [m_seq_4] Ended body\nUVM_INFO testbench.sv(41) @ 60: uvm_test_top.m_env.m_drv [DRV] Drive packet with addr=0x5\nUVM_INFO testbench.sv(27) @ 70: uvm_test_top.m_env.m_seqr@@m_seq_5 [m_seq_5] Ended body\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_objection.svh(1271) @ 70: reporter [TEST_DONE] 'run' phase is ready to proceed to the 'extract' phase\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_report_server.svh(847) @ 70: reporter [UVM/REPORT/SERVER] \n--- UVM Report Summary ---",
                        "lang": "verilog"
                    },
                    {
                        "title": "With priority",
                        "content": "Note that priorities affect output in UVM_SEQ_ARB_STRICT_FIFO mode.",
                        "code": "class arb_strict_fifo_test extends base_test;\n  `uvm_component_utils(arb_strict_fifo_test)\n  function new(string name, uvm_component parent);\n    super.new(name, parent);\n  endfunction\n  \n  virtual task run_phase(uvm_phase phase);\n    super.run_phase(phase);\n    phase.raise_objection(this);\n\n    m_env.m_seqr.set_arbitration(UVM_SEQ_ARB_STRICT_FIFO);\n    show_arb_cfg();\n\n    fork\n      m_seq[0].start(m_env.m_seqr, .this_priority(100));\n      m_seq[1].start(m_env.m_seqr, .this_priority(200));\n      m_seq[2].start(m_env.m_seqr, .this_priority(200));\n      m_seq[3].start(m_env.m_seqr, .this_priority(200));\n\t  m_seq[4].start(m_env.m_seqr, .this_priority(200));\n      m_seq[5].start(m_env.m_seqr, .this_priority(400));      \n    join\n\n    phase.drop_objection(this);\n  endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test arb_strict_fifo_test...\nUVM_INFO testbench.sv(90) @ 0: uvm_test_top [TEST] Seqr set to UVM_SEQ_ARB_STRICT_FIFO\nUVM_INFO testbench.sv(23) @ 0: uvm_test_top.m_env.m_seqr@@m_seq_0 [m_seq_0] Started body\nUVM_INFO testbench.sv(23) @ 0: uvm_test_top.m_env.m_seqr@@m_seq_1 [m_seq_1] Started body\nUVM_INFO testbench.sv(23) @ 0: uvm_test_top.m_env.m_seqr@@m_seq_2 [m_seq_2] Started body\nUVM_INFO testbench.sv(23) @ 0: uvm_test_top.m_env.m_seqr@@m_seq_3 [m_seq_3] Started body\nUVM_INFO testbench.sv(23) @ 0: uvm_test_top.m_env.m_seqr@@m_seq_4 [m_seq_4] Started body\nUVM_INFO testbench.sv(23) @ 0: uvm_test_top.m_env.m_seqr@@m_seq_5 [m_seq_5] Started body\nUVM_INFO testbench.sv(41) @ 10: uvm_test_top.m_env.m_drv [DRV] Drive packet with addr=0x5\nUVM_INFO testbench.sv(27) @ 20: uvm_test_top.m_env.m_seqr@@m_seq_5 [m_seq_5] Ended body\nUVM_INFO testbench.sv(41) @ 20: uvm_test_top.m_env.m_drv [DRV] Drive packet with addr=0x1\nUVM_INFO testbench.sv(27) @ 30: uvm_test_top.m_env.m_seqr@@m_seq_1 [m_seq_1] Ended body\nUVM_INFO testbench.sv(41) @ 30: uvm_test_top.m_env.m_drv [DRV] Drive packet with addr=0x2\nUVM_INFO testbench.sv(27) @ 40: uvm_test_top.m_env.m_seqr@@m_seq_2 [m_seq_2] Ended body\nUVM_INFO testbench.sv(41) @ 40: uvm_test_top.m_env.m_drv [DRV] Drive packet with addr=0x3\nUVM_INFO testbench.sv(27) @ 50: uvm_test_top.m_env.m_seqr@@m_seq_3 [m_seq_3] Ended body\nUVM_INFO testbench.sv(41) @ 50: uvm_test_top.m_env.m_drv [DRV] Drive packet with addr=0x4\nUVM_INFO testbench.sv(27) @ 60: uvm_test_top.m_env.m_seqr@@m_seq_4 [m_seq_4] Ended body\nUVM_INFO testbench.sv(41) @ 60: uvm_test_top.m_env.m_drv [DRV] Drive packet with addr=0x0\nUVM_INFO testbench.sv(27) @ 70: uvm_test_top.m_env.m_seqr@@m_seq_0 [m_seq_0] Ended body\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_objection.svh(1271) @ 70: reporter [TEST_DONE] 'run' phase is ready to proceed to the 'extract' phase\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_report_server.svh(847) @ 70: reporter [UVM/REPORT/SERVER] \n--- UVM Report Summary ---",
                        "lang": "verilog"
                    },
                    {
                        "title": "UVM_SEQ_ARB_STRICT_RANDOM",
                        "content": "This mode will always grant the sequence with highest priority first. Multiple sequences with the same priority will be randomly picked. For this test, let us increase the number of sequences just to have more sequences on the same priority.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Without priority",
                        "content": "Note that this is similar to UVM_SEQ_ARB_RANDOM mode when there are no priorities.",
                        "code": "class arb_strict_random_test extends base_test;\n  `uvm_component_utils(arb_strict_random_test)\n  function new(string name, uvm_component parent);\n    super.new(name, parent);\n  endfunction\n  \n  virtual task run_phase(uvm_phase phase);\n    super.run_phase(phase);\n    phase.raise_objection(this);\n\n    m_env.m_seqr.set_arbitration(UVM_SEQ_ARB_STRICT_RANDOM);\n    show_arb_cfg();\n\n    fork\n      m_seq[0].start(m_env.m_seqr);\n      m_seq[3].start(m_env.m_seqr);\n\t  m_seq[1].start(m_env.m_seqr);\n      m_seq[2].start(m_env.m_seqr);\n      m_seq[4].start(m_env.m_seqr);\n      m_seq[5].start(m_env.m_seqr);\n    join\n\n    phase.drop_objection(this);\n  endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test arb_strict_random_test...\nUVM_INFO testbench.sv(90) @ 0: uvm_test_top [TEST] Seqr set to UVM_SEQ_ARB_STRICT_RANDOM\nUVM_INFO testbench.sv(23) @ 0: uvm_test_top.m_env.m_seqr@@m_seq_0 [m_seq_0] Started body\nUVM_INFO testbench.sv(23) @ 0: uvm_test_top.m_env.m_seqr@@m_seq_3 [m_seq_3] Started body\nUVM_INFO testbench.sv(23) @ 0: uvm_test_top.m_env.m_seqr@@m_seq_1 [m_seq_1] Started body\nUVM_INFO testbench.sv(23) @ 0: uvm_test_top.m_env.m_seqr@@m_seq_2 [m_seq_2] Started body\nUVM_INFO testbench.sv(23) @ 0: uvm_test_top.m_env.m_seqr@@m_seq_4 [m_seq_4] Started body\nUVM_INFO testbench.sv(23) @ 0: uvm_test_top.m_env.m_seqr@@m_seq_5 [m_seq_5] Started body\nUVM_INFO testbench.sv(41) @ 10: uvm_test_top.m_env.m_drv [DRV] Drive packet with addr=0x3\nUVM_INFO testbench.sv(27) @ 20: uvm_test_top.m_env.m_seqr@@m_seq_3 [m_seq_3] Ended body\nUVM_INFO testbench.sv(41) @ 20: uvm_test_top.m_env.m_drv [DRV] Drive packet with addr=0x4\nUVM_INFO testbench.sv(27) @ 30: uvm_test_top.m_env.m_seqr@@m_seq_4 [m_seq_4] Ended body\nUVM_INFO testbench.sv(41) @ 30: uvm_test_top.m_env.m_drv [DRV] Drive packet with addr=0x0\nUVM_INFO testbench.sv(27) @ 40: uvm_test_top.m_env.m_seqr@@m_seq_0 [m_seq_0] Ended body\nUVM_INFO testbench.sv(41) @ 40: uvm_test_top.m_env.m_drv [DRV] Drive packet with addr=0x5\nUVM_INFO testbench.sv(27) @ 50: uvm_test_top.m_env.m_seqr@@m_seq_5 [m_seq_5] Ended body\nUVM_INFO testbench.sv(41) @ 50: uvm_test_top.m_env.m_drv [DRV] Drive packet with addr=0x2\nUVM_INFO testbench.sv(27) @ 60: uvm_test_top.m_env.m_seqr@@m_seq_2 [m_seq_2] Ended body\nUVM_INFO testbench.sv(41) @ 60: uvm_test_top.m_env.m_drv [DRV] Drive packet with addr=0x1\nUVM_INFO testbench.sv(27) @ 70: uvm_test_top.m_env.m_seqr@@m_seq_1 [m_seq_1] Ended body\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_objection.svh(1271) @ 70: reporter [TEST_DONE] 'run' phase is ready to proceed to the 'extract' phase\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_report_server.svh(847) @ 70: reporter [UVM/REPORT/SERVER] \n--- UVM Report Summary ---",
                        "lang": "verilog"
                    },
                    {
                        "title": "With priority",
                        "content": "Note that m_seq_1 through m_seq_4 that had the same priority come out in a random order. Compare this with UVM_SEQ_ARB_STRICT_FIFO mode, where these sequences came out in a FIFO order.",
                        "code": "class arb_strict_random_test extends base_test;\n  `uvm_component_utils(arb_strict_random_test)\n  function new(string name, uvm_component parent);\n    super.new(name, parent);\n  endfunction\n  \n  virtual task run_phase(uvm_phase phase);\n    super.run_phase(phase);\n    phase.raise_objection(this);\n\n    m_env.m_seqr.set_arbitration(UVM_SEQ_ARB_STRICT_RANDOM);\n    show_arb_cfg();\n\n    fork\n      m_seq[0].start(m_env.m_seqr, .this_priority(100));\n      m_seq[1].start(m_env.m_seqr, .this_priority(200));\n      m_seq[2].start(m_env.m_seqr, .this_priority(200));\n      m_seq[3].start(m_env.m_seqr, .this_priority(200));\n      m_seq[4].start(m_env.m_seqr, .this_priority(200));\n      m_seq[5].start(m_env.m_seqr, .this_priority(400));\n    join\n\n    phase.drop_objection(this);\n  endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test arb_strict_random_test...\nUVM_INFO testbench.sv(90) @ 0: uvm_test_top [TEST] Seqr set to UVM_SEQ_ARB_STRICT_RANDOM\nUVM_INFO testbench.sv(23) @ 0: uvm_test_top.m_env.m_seqr@@m_seq_0 [m_seq_0] Started body\nUVM_INFO testbench.sv(23) @ 0: uvm_test_top.m_env.m_seqr@@m_seq_1 [m_seq_1] Started body\nUVM_INFO testbench.sv(23) @ 0: uvm_test_top.m_env.m_seqr@@m_seq_2 [m_seq_2] Started body\nUVM_INFO testbench.sv(23) @ 0: uvm_test_top.m_env.m_seqr@@m_seq_3 [m_seq_3] Started body\nUVM_INFO testbench.sv(23) @ 0: uvm_test_top.m_env.m_seqr@@m_seq_4 [m_seq_4] Started body\nUVM_INFO testbench.sv(23) @ 0: uvm_test_top.m_env.m_seqr@@m_seq_5 [m_seq_5] Started body\nUVM_INFO testbench.sv(41) @ 10: uvm_test_top.m_env.m_drv [DRV] Drive packet with addr=0x5\nUVM_INFO testbench.sv(27) @ 20: uvm_test_top.m_env.m_seqr@@m_seq_5 [m_seq_5] Ended body\nUVM_INFO testbench.sv(41) @ 20: uvm_test_top.m_env.m_drv [DRV] Drive packet with addr=0x1\nUVM_INFO testbench.sv(27) @ 30: uvm_test_top.m_env.m_seqr@@m_seq_1 [m_seq_1] Ended body\nUVM_INFO testbench.sv(41) @ 30: uvm_test_top.m_env.m_drv [DRV] Drive packet with addr=0x4\nUVM_INFO testbench.sv(27) @ 40: uvm_test_top.m_env.m_seqr@@m_seq_4 [m_seq_4] Ended body\nUVM_INFO testbench.sv(41) @ 40: uvm_test_top.m_env.m_drv [DRV] Drive packet with addr=0x2\nUVM_INFO testbench.sv(27) @ 50: uvm_test_top.m_env.m_seqr@@m_seq_2 [m_seq_2] Ended body\nUVM_INFO testbench.sv(41) @ 50: uvm_test_top.m_env.m_drv [DRV] Drive packet with addr=0x3\nUVM_INFO testbench.sv(27) @ 60: uvm_test_top.m_env.m_seqr@@m_seq_3 [m_seq_3] Ended body\nUVM_INFO testbench.sv(41) @ 60: uvm_test_top.m_env.m_drv [DRV] Drive packet with addr=0x0\nUVM_INFO testbench.sv(27) @ 70: uvm_test_top.m_env.m_seqr@@m_seq_0 [m_seq_0] Ended body\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_objection.svh(1271) @ 70: reporter [TEST_DONE] 'run' phase is ready to proceed to the 'extract' phase\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_report_server.svh(847) @ 70: reporter [UVM/REPORT/SERVER] \n--- UVM Report Summary ---",
                        "lang": "verilog"
                    },
                    {
                        "title": "UVM_SEQ_ARB_WEIGHTED",
                        "content": "There is a higher chance of picking higher priority sequences in this mode.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "UVM_SEQ_ARB_USER",
                        "content": "If none of the above modes satisfies your requirement, then you can create a user defined arbitration scheme. All you need to do is to create a new sequencer extended from uvm_sequencer and define its user_priority_arbitration function.",
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
                "id": "cv-uvm-55",
                "num": 55,
                "title": "UVM Callback",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "What is a callback ?",
                        "content": "The uvm_callback class serves as the base class for user-defined callback classes. Typically, a component developer creates an application-specific callback class by extending this base class. In the derived class, the developer defines one or more virtual methods, collectively known as the callback interface, which provide the hooks that users can override.\n\nA callback is useful because it allows a flexible and modular way to modify or extend the behavior of a system without altering the original code. Callbacks decouple the code that triggers an action from the code that defines the action itself. It is required in scenarios where customization, or dynamic behavior is necessary.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Callback Macros",
                        "content": "`uvm_register_cb macro is used to register the Callback(CB) with the Object(T) where CB is the user-defined callback class and T is the object in which CB is used.\n\nAnd a specific callback method is executed by invoking `uvm_do_callbacks macro.",
                        "code": "// Macro definition\n`define uvm_register_cb(T,CB) \n  static local bit m_register_cb_``CB = uvm_callbacks#(T,CB)::m_register_pair(`\"T`\",`\"CB`\");",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "// Macro definition\n`define uvm_do_callbacks(T,CB,METHOD) \n  `uvm_do_obj_callbacks(T,CB,this,METHOD)\n\n// Basically iterates through and executes the requested method\n`define uvm_do_obj_callbacks(T,CB,OBJ,METHOD) \n   begin \n     uvm_callback_iter#(T,CB) iter = new(OBJ); \n     CB cb = iter.first(); \n     while(cb != null) begin \n       `uvm_cb_trace_noobj(cb,$sformatf(`\"Executing callback method 'METHOD' for callback %s (CB) from %s (T)`\",cb.get_name(), OBJ.get_full_name())) \n       cb.METHOD; \n       cb = iter.next(); \n     end \n   end",
                        "lang": "verilog"
                    },
                    {
                        "title": "UVM Callback Example",
                        "content": "Let's create a callback mechanism that allows us to extend the behavior of a monitor by adding custom code to a call_pre_check() and call_post_check() methods.\n\n1. Define the Callback Class\n\nUsers can create custom callback classes by extending the uvm_callback class. In these classes, users define one or more virtual methods. These virtual methods, known as callback methods, are initially empty and can be overridden by the user to implement specific behavior.\n\n2. Define a Custom Callback\n\ncustom_monitor_cb gives a way to override the check_transaction() method with user-defined logic, such as additional checks.",
                        "code": "class my_monitor_cb extends uvm_callback;\n  `uvm_object_utils(my_monitor_cb)\n  \n  function new(string name=\"my_monitor_cb\");\n    super.new(name);\n  endfunction\n  \n  virtual function void call_pre_check();\n    // Placeholder\n  endfunction\n\n  virtual function void call_post_check();\n    // Placeholder\n  endfunction\n\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "3. Add Callback Hooks and Register the Callback",
                        "code": "class custom_monitor_cb extends my_monitor_cb;\n  `uvm_object_utils(custom_monitor_cb)\n  function new(string name=\"custom_monitor_cb\");\n    super.new(name);\n  endfunction\n  \n  // Override the callback method with custom behavior\n  virtual function void call_pre_check();\n    `uvm_info(get_type_name(), $sformatf(\"[call_pre_check] start pre_check\"), UVM_LOW)\n  endfunction\n\n  virtual function void call_post_check();\n    `uvm_info(get_type_name(), $sformatf(\"[call_post_check] start post_check\"), UVM_LOW)\n  endfunction\n\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "4. Register the Callback in the Test\n\nTest creates an instance of my_monitor and registers the custom_monitor_cb callback.",
                        "code": "class my_monitor extends uvm_monitor;\n\n  `uvm_component_utils(my_monitor)\n  function new(string name=\"my_monitor\", uvm_component parent=null);\n    super.new(name, parent);\n  endfunction \n\n  // Register the callback class for this component\n  `uvm_register_cb(my_monitor, my_monitor_cb)\n\n  // Method that processes a transaction and uses the callback\n  function void check_transaction();\n    // Call the registered callback(s)\n    `uvm_do_callbacks(my_monitor, my_monitor_cb, call_pre_check());\n\n    // Normal checking logic\n    `uvm_info(\"MONITOR\", \"Checking transaction\", UVM_MEDIUM)\n\n    // Or use a callback macro\n    `uvm_do_callbacks(my_monitor, my_monitor_cb, call_post_check());\n  endfunction\n\n  // Run phase where the transaction check happens\n  virtual task run_phase(uvm_phase phase);        \n    super.run_phase(phase);\n\n    // Call the checking function, which triggers callbacks\n    check_transaction();\n  endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Finally create a module to run the test.",
                        "code": "class my_test extends uvm_test;\n  `uvm_component_utils(my_test)\n  function new(string name=\"my_test\", uvm_component parent=null);\n    super.new(name, parent);\n  endfunction \n\n  my_monitor          mon;\n  custom_monitor_cb   my_cb;\n\n  virtual function void build_phase(uvm_phase phase);\n    super.build_phase(phase);\n\n    // Create the monitor\n    mon = my_monitor::type_id::create(\"mon\", null);\n\n    // Create and register the custom callback\n    my_cb = custom_monitor_cb::type_id::create(\"my_cb\");\n    uvm_callbacks#(my_monitor)::add(mon, my_cb);\n\n  endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "module tb;\n  initial\n    run_test(\"my_test\");\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Note in the log above that user-defined methods for call_pre_check and call_post_check are executed instead of the placeholder.",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test my_test...\nUVM_INFO testbench.sv(60) @ 0: reporter [custom_monitor_cb] [call_pre_check] start pre_check\nUVM_INFO testbench.sv(37) @ 0: mon [MONITOR] Checking transaction\nUVM_INFO testbench.sv(64) @ 0: reporter [custom_monitor_cb] [call_post_check] start post_check\nUVM_INFO /xcelium23.09/tools/methodology/UVM/CDNS-1.2/sv/src/base/uvm_report_server.svh(847) @ 0: reporter [UVM/REPORT/SERVER] \n--- UVM Report Summary ---",
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
                "id": "cv-uvm-56",
                "num": 56,
                "title": "UVM Event",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "The uvm_event class extends uvm_object by providing enhanced functionality beyond standard SystemVerilog events. These enhancements include storing named events in a uvm_event_pool, associating data with triggered events, and registering callbacks for specific events.\n\nThe uvm_event_base class is an abstract wrapper around the SystemVerilog event construct. It adds extra functionality, such as supporting callbacks and tracking the number of processes waiting on the event. The uvm_event class extends the abstract uvm_event_base class. It includes an optional parameter T that lets users specify a data type to be passed when the event is triggered.\n\nSeveral built-in UVM classes rely on uvm_event, but it should be used only when its extended features are necessary, since it introduces more simulation overhead compared to plain SystemVerilog events. Once triggered, an event remains active until it is explicitly reset, and uvm_event also tracks the number of processes waiting on it.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Syntax",
                        "content": "",
                        "code": "// Declare handle for uvm_event\nuvm_event    <inst_name>\n\n// Instantiate uvm_event in build_phase of component\n// or within an object\n<inst_name> = new();",
                        "lang": "verilog"
                    },
                    {
                        "title": "Case #1: wait_trigger -> trigger",
                        "content": "",
                        "code": "class my_test extends uvm_test;\n  `uvm_component_utils(my_test)\n  \n  function new(string name=\"my_test\", uvm_component parent=null);\n    super.new(name, parent);\n  endfunction\n  \n  uvm_event \tm_event;\n  \n  virtual function void build_phase(uvm_phase phase);    \n    super.build_phase(phase);\n    \n    m_event = new();\n  endfunction\n  \n  virtual task run_phase(uvm_phase phase);\n    super.run_phase(phase);\n\n    phase.raise_objection(this);\n    \n    fork\n      process_a();\n      process_b();\n    join\n    \n    phase.drop_objection(this);\n  endtask\n  \n  virtual task process_a();\n    #100;\n    `uvm_info(get_type_name(), $sformatf(\"[process_a] Before event.trigger\"), UVM_MEDIUM)\n    m_event.trigger();\n    `uvm_info(get_type_name(), $sformatf(\"[process_a] After event.trigger\"), UVM_MEDIUM)\n  endtask\n  \n  virtual task process_b();\n    `uvm_info(get_type_name(), $sformatf(\"[process_b] Waiting for event.trigger\"), UVM_MEDIUM)\n    m_event.wait_trigger();\n    `uvm_info(get_type_name(), $sformatf(\"[process_b] Received event.trigger\"), UVM_MEDIUM)    \n  endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test my_test...\nUVM_INFO testbench.sv(45) @ 0: uvm_test_top [my_test] [process_b] Waiting for event.trigger\nUVM_INFO testbench.sv(39) @ 100: uvm_test_top [my_test] [process_a] Before event.trigger\nUVM_INFO testbench.sv(41) @ 100: uvm_test_top [my_test] [process_a] After event.trigger\nUVM_INFO testbench.sv(47) @ 100: uvm_test_top [my_test] [process_b] Received event.trigger\nUVM_INFO /xcelium23.09/tools/methodology/UVM/CDNS-1.2/sv/src/base/uvm_objection.svh(1271) @ 100: reporter [TEST_DONE] 'run' phase is ready to proceed to the 'extract' phase\nUVM_INFO /xcelium23.09/tools/methodology/UVM/CDNS-1.2/sv/src/base/uvm_report_server.svh(847) @ 100: reporter [UVM/REPORT/SERVER] \n--- UVM Report Summary ---",
                        "lang": "verilog"
                    },
                    {
                        "title": "Case #2: trigger -> wait_trigger",
                        "content": "",
                        "code": "class my_test extends uvm_test;\n  `uvm_component_utils(my_test)\n\n  // same as before  \n  \n  virtual task process_a();\n    `uvm_info(get_type_name(), $sformatf(\"[process_a] Before event.trigger\"), UVM_MEDIUM)\n    m_event.trigger();\n    `uvm_info(get_type_name(), $sformatf(\"[process_a] After event.trigger\"), UVM_MEDIUM)\n  endtask\n  \n  virtual task process_b();\n    #100;\n    `uvm_info(get_type_name(), $sformatf(\"[process_b] Waiting for event.trigger\"), UVM_MEDIUM)\n    m_event.wait_trigger();\n    `uvm_info(get_type_name(), $sformatf(\"[process_b] Received event.trigger\"), UVM_MEDIUM)    \n  endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test my_test...\nUVM_INFO testbench.sv(38) @ 0: uvm_test_top [my_test] [process_a] Before event.trigger\nUVM_INFO testbench.sv(40) @ 0: uvm_test_top [my_test] [process_a] After event.trigger\nUVM_INFO testbench.sv(45) @ 100: uvm_test_top [my_test] [process_b] Waiting for event.trigger\nUVM_FATAL /xcelium23.09/tools/methodology/UVM/CDNS-1.2/sv/src/base/uvm_phase.svh(1504) @ 9200000000000: reporter [PH_TIMEOUT] Default timeout of 9200000000000 hit, indicating a probable testbench issue\nUVM_INFO /xcelium23.09/tools/methodology/UVM/CDNS-1.2/sv/src/base/uvm_report_server.svh(847) @ 9200000000000: reporter [UVM/REPORT/SERVER] \n--- UVM Report Summary ---",
                        "lang": "verilog"
                    },
                    {
                        "title": "Case #3: trigger & wait_trigger at same time",
                        "content": "",
                        "code": "class my_test extends uvm_test;\n  `uvm_component_utils(my_test)\n  \n  // same as before\n  \n  virtual task process_a();\n    `uvm_info(get_type_name(), $sformatf(\"[process_a] Before event.trigger\"), UVM_MEDIUM)\n    m_event.trigger();\n    `uvm_info(get_type_name(), $sformatf(\"[process_a] After event.trigger\"), UVM_MEDIUM)\n  endtask\n  \n  virtual task process_b();\n    `uvm_info(get_type_name(), $sformatf(\"[process_b] Waiting for event.trigger\"), UVM_MEDIUM)\n    m_event.wait_trigger();\n    `uvm_info(get_type_name(), $sformatf(\"[process_b] Received event.trigger\"), UVM_MEDIUM)    \n  endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test my_test...\nUVM_INFO testbench.sv(38) @ 0: uvm_test_top [my_test] [process_a] Before event.trigger\nUVM_INFO testbench.sv(40) @ 0: uvm_test_top [my_test] [process_a] After event.trigger\nUVM_INFO testbench.sv(44) @ 0: uvm_test_top [my_test] [process_b] Waiting for event.trigger\nUVM_FATAL /xcelium23.09/tools/methodology/UVM/CDNS-1.2/sv/src/base/uvm_phase.svh(1504) @ 9200000000000: reporter [PH_TIMEOUT] Default timeout of 9200000000000 hit, indicating a probable testbench issue\nUVM_INFO /xcelium23.09/tools/methodology/UVM/CDNS-1.2/sv/src/base/uvm_report_server.svh(847) @ 9200000000000: reporter [UVM/REPORT/SERVER] \n--- UVM Report Summary ---",
                        "lang": "verilog"
                    },
                    {
                        "title": "Case #3: wait_ptrigger -> trigger",
                        "content": "",
                        "code": "class my_test extends uvm_test;\n  `uvm_component_utils(my_test)\n  \n  function new(string name=\"my_test\", uvm_component parent=null);\n    super.new(name, parent);\n  endfunction\n  \n  // same as before\n  \n  virtual task process_a();\n    #100;\n    `uvm_info(get_type_name(), $sformatf(\"[process_a] Before event.trigger\"), UVM_MEDIUM)\n    m_event.trigger();\n    `uvm_info(get_type_name(), $sformatf(\"[process_a] After event.trigger\"), UVM_MEDIUM)\n  endtask\n  \n  virtual task process_b();\n    `uvm_info(get_type_name(), $sformatf(\"[process_b] Waiting for event.trigger\"), UVM_MEDIUM)\n\n    // Use persistent trigger instead\n    m_event.wait_ptrigger();\n    `uvm_info(get_type_name(), $sformatf(\"[process_b] Received event.trigger\"), UVM_MEDIUM)    \n  endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test my_test...\nUVM_INFO testbench.sv(45) @ 0: uvm_test_top [my_test] [process_b] Waiting for event.trigger\nUVM_INFO testbench.sv(39) @ 100: uvm_test_top [my_test] [process_a] Before event.trigger\nUVM_INFO testbench.sv(41) @ 100: uvm_test_top [my_test] [process_a] After event.trigger\nUVM_INFO testbench.sv(47) @ 100: uvm_test_top [my_test] [process_b] Received event.trigger\nUVM_INFO /xcelium23.09/tools/methodology/UVM/CDNS-1.2/sv/src/base/uvm_objection.svh(1271) @ 100: reporter [TEST_DONE] 'run' phase is ready to proceed to the 'extract' phase\nUVM_INFO /xcelium23.09/tools/methodology/UVM/CDNS-1.2/sv/src/base/uvm_report_server.svh(847) @ 100: reporter [UVM/REPORT/SERVER] \n--- UVM Report Summary ---",
                        "lang": "verilog"
                    },
                    {
                        "title": "Case #4: trigger -> wait_ptrigger",
                        "content": "",
                        "code": "class my_test extends uvm_test;\n  `uvm_component_utils(my_test)\n  \n  // same as before\n\n  virtual task process_a();\n    \n    `uvm_info(get_type_name(), $sformatf(\"[process_a] Before event.trigger\"), UVM_MEDIUM)\n    m_event.trigger();\n    `uvm_info(get_type_name(), $sformatf(\"[process_a] After event.trigger\"), UVM_MEDIUM)\n  endtask\n  \n  virtual task process_b();\n    #100;\n    `uvm_info(get_type_name(), $sformatf(\"[process_b] Waiting for event.trigger\"), UVM_MEDIUM)\n    m_event.wait_ptrigger();\n    `uvm_info(get_type_name(), $sformatf(\"[process_b] Received event.trigger\"), UVM_MEDIUM)    \n  endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test my_test...\nUVM_INFO testbench.sv(39) @ 0: uvm_test_top [my_test] [process_a] Before event.trigger\nUVM_INFO testbench.sv(41) @ 0: uvm_test_top [my_test] [process_a] After event.trigger\nUVM_INFO testbench.sv(46) @ 100: uvm_test_top [my_test] [process_b] Waiting for event.trigger\nUVM_FATAL /xcelium23.09/tools/methodology/UVM/CDNS-1.2/sv/src/base/uvm_phase.svh(1504) @ 9200000000000: reporter [PH_TIMEOUT] Default timeout of 9200000000000 hit, indicating a probable testbench issue\nUVM_INFO /xcelium23.09/tools/methodology/UVM/CDNS-1.2/sv/src/base/uvm_report_server.svh(847) @ 9200000000000: reporter [UVM/REPORT/SERVER] \n--- UVM Report Summary ---",
                        "lang": "verilog"
                    },
                    {
                        "title": "Case #6: trigger & wait_ptrigger at same time",
                        "content": "",
                        "code": "class my_test extends uvm_test;\n  `uvm_component_utils(my_test)\n  \n  // same as before\n  \n  virtual task process_a();\n    #100;\n    `uvm_info(get_type_name(), $sformatf(\"[process_a] Before event.trigger\"), UVM_MEDIUM)\n    m_event.trigger();\n    `uvm_info(get_type_name(), $sformatf(\"[process_a] After event.trigger\"), UVM_MEDIUM)\n  endtask\n  \n  virtual task process_b();\n    #100;\n    `uvm_info(get_type_name(), $sformatf(\"[process_b] Waiting for event.trigger\"), UVM_MEDIUM)\n    m_event.wait_ptrigger();\n    `uvm_info(get_type_name(), $sformatf(\"[process_b] Received event.trigger\"), UVM_MEDIUM)    \n  endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!\n\nNote that the race condition in case #3, which occurred between wait_trigger() and trigger(), was resolved in case #6 using wait_ptrigger().",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test my_test...\nUVM_INFO testbench.sv(39) @ 100: uvm_test_top [my_test] [process_a] Before event.trigger\nUVM_INFO testbench.sv(41) @ 100: uvm_test_top [my_test] [process_a] After event.trigger\nUVM_INFO testbench.sv(46) @ 100: uvm_test_top [my_test] [process_b] Waiting for event.trigger\nUVM_INFO testbench.sv(48) @ 100: uvm_test_top [my_test] [process_b] Received event.trigger\nUVM_INFO /xcelium23.09/tools/methodology/UVM/CDNS-1.2/sv/src/base/uvm_objection.svh(1271) @ 100: reporter [TEST_DONE] 'run' phase is ready to proceed to the 'extract' phase\nUVM_INFO /xcelium23.09/tools/methodology/UVM/CDNS-1.2/sv/src/base/uvm_report_server.svh(847) @ 100: reporter [UVM/REPORT/SERVER] \n--- UVM Report Summary ---",
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
                "id": "cv-uvm-57",
                "num": 57,
                "title": "UVM Event Pool",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "Recall that an event object (uvm_event) is a powerful mechanism designed to describe communication and synchronization between concurrently active processes. One process can trigger the event, and any number of other processes can block (wait) until that event occurs.\n\nThe event pool (uvm_event_pool) takes this concept and packages it by storing events indexed by descriptive string names. This allows you to look up any specific event within a transaction object simply by knowing its name, much like finding a file in a folder. The events stored inside the pool are instances of uvm_event#(uvm_object).\n\nIt is a specialization of the generic UVM associative array class, uvm_pool #(KEY,T). Implements a class-based dynamic associative array. Allows sparse arrays to be allocated on demand, and passed and stored by reference.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Definition",
                        "content": "",
                        "code": "class uvm_object_string_pool #(type T=uvm_object) extends uvm_pool #(string,T);\n\ntypedef uvm_object_string_pool #(uvm_event#(uvm_object)) uvm_event_pool;",
                        "lang": "verilog"
                    },
                    {
                        "title": "Example",
                        "content": "",
                        "code": "module tb;\n\tinitial begin\n        string \t\t\tl_key;\n      \tuvm_event \t\tl_evt;\n    \tuvm_event \t\tl_evt_q [$];\n    \tuvm_event_pool \tl_evt_pool = uvm_event_pool::get_global_pool();\n      \n        // Add each event into the global pool\n        for (byte i = 0; i < 5; i++) begin\n          automatic uvm_event l_evt = new($sformatf(\"l_evt_%0d\", i));\n          l_evt_q.push_back(l_evt);\n   \t\tend\n      \n      \t// Shuffle to reorder the items\n      \tl_evt_q.shuffle();\n      \n      \tforeach (l_evt_q[i]) begin        \n          l_evt_pool.add(l_evt_q[i].get_name(), l_evt_q[i]);\n          \n          if (l_evt_pool.exists(l_evt_q[i].get_name()))\n            `uvm_info(\"tb_top\", $sformatf(\"%s added to pool #num=%0d\", l_evt_q[i].get_name(), l_evt_pool.num()), UVM_MEDIUM)\n      \tend\n      \n        // Get a specific handle from the global pool\n      \tl_evt = l_evt_pool.get_global(\"l_evt_3\");\n        `uvm_info(\"tb_top\", $sformatf(\"Got item %s\", l_evt.get_name()), UVM_MEDIUM)\n      \t\n        l_evt_pool.first(l_key);\n          `uvm_info(\"tb_top\", $sformatf(\"First item=%s\", l_key), UVM_MEDIUM)\n          \n        while (l_evt_pool.next(l_key)) begin        \n            `uvm_info(\"tb_top\", $sformatf(\"Next item=%s\", l_key), UVM_MEDIUM)\n        end\n          \n          while (l_evt_pool.prev(l_key)) begin        \n          `uvm_info(\"tb_top\", $sformatf(\"Prev item=%s\", l_key), UVM_MEDIUM)\n        end\n          \n        l_evt_pool.last(l_key);\n        `uvm_info(\"tb_top\", $sformatf(\"Last item=%s\", l_key), UVM_MEDIUM)          \t\t\n          \n    end\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Note that get_global() function will create an event by that key if it does not exist already !",
                        "code": "xcelium> run          \nUVM_INFO testbench.sv(29) @ 0: reporter [tb_top] l_evt_2 added to pool #num=1\nUVM_INFO testbench.sv(29) @ 0: reporter [tb_top] l_evt_1 added to pool #num=2\nUVM_INFO testbench.sv(29) @ 0: reporter [tb_top] l_evt_4 added to pool #num=3\nUVM_INFO testbench.sv(29) @ 0: reporter [tb_top] l_evt_0 added to pool #num=4\nUVM_INFO testbench.sv(29) @ 0: reporter [tb_top] l_evt_3 added to pool #num=5\nUVM_INFO testbench.sv(34) @ 0: reporter [tb_top] Got item l_evt_3\nUVM_INFO testbench.sv(37) @ 0: reporter [tb_top] First item=l_evt_0\nUVM_INFO testbench.sv(40) @ 0: reporter [tb_top] Next item=l_evt_1\nUVM_INFO testbench.sv(40) @ 0: reporter [tb_top] Next item=l_evt_2\nUVM_INFO testbench.sv(40) @ 0: reporter [tb_top] Next item=l_evt_3\nUVM_INFO testbench.sv(40) @ 0: reporter [tb_top] Next item=l_evt_4\nUVM_INFO testbench.sv(44) @ 0: reporter [tb_top] Prev item=l_evt_3\nUVM_INFO testbench.sv(44) @ 0: reporter [tb_top] Prev item=l_evt_2\nUVM_INFO testbench.sv(44) @ 0: reporter [tb_top] Prev item=l_evt_1\nUVM_INFO testbench.sv(44) @ 0: reporter [tb_top] Prev item=l_evt_0\nUVM_INFO testbench.sv(48) @ 0: reporter [tb_top] Last item=l_evt_4\nxmsim: *W,RNQUIE: Simulation is complete.",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "So, it is recommended to check and throw an error if the key does not exist.",
                        "code": "// This function internally calls get() and if no item exists by \n  // that key, a new item is created with that key and returned.\n          \n  static function T get_global (KEY key);\n    this_type gpool;\n    gpool = get_global_pool(); \n    return gpool.get(key);\n  endfunction",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "if (! l_evt_pool.exists(\"event_name\"))\n      `uvm_error(\"ERR\", \"event_name does not exist in uvm_event_pool !\")\n    else\n       l_evt = l_evt_pool.get_global(\"event_name\");",
                        "lang": "verilog"
                    },
                    {
                        "title": "Usecase Example",
                        "content": "In the example below, the agent launches a task that monitors the negative edge of reset and triggers an event. This event is added to the uvm_event_pool and can be detected by any component listening for it by using the same event handle from the pool.",
                        "code": "interface my_if;\n  logic \trstn;\nendinterface\n\n// The agent class monitors the interface and triggers the event \"evt_rstn\" to\n// let any component that is listening to this event to respond. For example,\n// a scoreboard can listen to this event and reset its internal states.\nclass my_agent extends uvm_agent;\n  `uvm_component_utils(my_agent)\n  \n  virtual my_if  \tvif;\n  uvm_event_pool \tm_pool;\n  uvm_event \t\tm_evt_rstn;\n  \n  function new(string name=\"my_agent\", uvm_component parent=null);\n    super.new(name, parent);\n  endfunction\n  \n  virtual function void build_phase(uvm_phase phase);\n    uvm_event_pool \t\tl_pool;\n    \n    super.build_phase(phase);\n    \n    if (! uvm_config_db #(virtual my_if)::get(null, \"*\", \"vif\", vif))\n      `uvm_fatal(get_type_name(), $sformatf(\"[NOVIF] vif not found !\"))\n          \n    m_evt_rstn = new();\n        \n    l_pool = uvm_event_pool::get_global_pool();\n    l_pool.add(\"evt_rstn\", m_evt_rstn);\n  endfunction\n      \n  virtual task run_phase(uvm_phase phase);\n    super.run_phase(phase);    \n    fork\n      reset_tracker();\n    join_none\n  endtask\n    \n  virtual task reset_tracker();\n    `uvm_info (get_type_name(), \"[reset_tracker] Start reset monitor\", UVM_MEDIUM)\n    forever begin\n  \t  @(negedge vif.rstn);\n      m_evt_rstn.trigger();\n    end      \n  endtask\n    \nendclass\n\n// The environment class receives the reset monitor trigger\nclass my_env extends uvm_env;\n  `uvm_component_utils(my_env)\n  \n  my_agent \tm_agent;\n  \n  function new(string name=\"my_env\", uvm_component parent=null);\n    super.new(name, parent);\n  endfunction\n  \n  virtual function void build_phase(uvm_phase phase);\n    super.build_phase(phase);\n    \n    m_agent = my_agent::type_id::create(\"m_agent\", this);\n  endfunction\n  \n  virtual task run_phase(uvm_phase phase);\n    super.run_phase(phase);\n    \n    fork\n      track();\n    join_none\n  endtask\n\n  virtual task track();\n    uvm_event \tl_evt_rstn = uvm_event_pool::get_global(\"m_evt_rstn\");\n    \n    if (l_evt_rstn == null)\n      `uvm_fatal(get_type_name(), \"Did not find m_evt_rstn\")\n    else\n      `uvm_info(get_type_name(), $sformatf(\"Found item %s\", l_evt_rstn.get_name()), UVM_MEDIUM)\n    \n    `uvm_info(get_type_name(), \"[track] Start tracker\", UVM_MEDIUM)\n    forever begin\n      l_evt_rstn.wait_trigger();\n      `uvm_info(get_type_name(), $sformatf(\"[track] Reset found\"), UVM_MEDIUM)\n    end\n  endtask  \nendclass\n\n// Lets define a test class to stimulate the reset signal\nclass my_test extends uvm_test;\n  `uvm_component_utils (my_test)\n  \n  my_env \t\t \tm_env;\n  virtual my_if  \tvif;\n  \n  function new(string name=\"my_test\", uvm_component parent=null);\n    super.new(name, parent);\n  endfunction\n  \n  virtual function void build_phase(uvm_phase phase);\n    super.build_phase(phase);    \n    m_env = my_env::type_id::create(\"my_env\", this);\n    \n    if (! uvm_config_db #(virtual my_if)::get(null, \"*\", \"vif\", vif))\n      `uvm_fatal(get_type_name(), $sformatf(\"[NOVIF] vif not found !\"))\n  endfunction\n  \n  virtual task run_phase(uvm_phase phase);        \n    super.run_phase(phase);\n    phase.raise_objection(this);        \n    stimulus();    \n    phase.drop_objection(this);\n  endtask\n    \n  virtual task stimulus();\n    #10 vif.rstn = 1;\n    #20 vif.rstn = 0;\n    #100 vif.rstn = 1;\n    #200 vif.rstn = 0;\n    #400;\n  endtask    \nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test my_test...\nUVM_INFO testbench.sv(83) @ 0: uvm_test_top.my_env [my_env] [track] Start tracker\nUVM_INFO testbench.sv(47) @ 0: uvm_test_top.my_env.m_agent [my_agent] [reset_tracker] Start reset monitor\nUVM_INFO testbench.sv(86) @ 30: uvm_test_top.my_env [my_env] [track] Reset found\nUVM_INFO testbench.sv(86) @ 330: uvm_test_top.my_env [my_env] [track] Reset found\nUVM_INFO /xcelium23.09/tools/methodology/UVM/CDNS-1.2/sv/src/base/uvm_objection.svh(1271) @ 730: reporter [TEST_DONE] 'run' phase is ready to proceed to the 'extract' phase\nUVM_INFO /xcelium23.09/tools/methodology/UVM/CDNS-1.2/sv/src/base/uvm_report_server.svh(847) @ 730: reporter [UVM/REPORT/SERVER] \n--- UVM Report Summary ---",
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
                "id": "cv-uvm-58",
                "num": 58,
                "title": "UVM Register Abstraction Layer",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "What are registers ?",
                        "content": "Registers are essential components in hardware designs, used to store configuration settings, control information, and status data. In modern designs, these registers are often accessed by software or firmware using bus protocols like AXI/APB and can be programmed with certain values. For example, there could be a 32-bit register with several individual fields within it. Each field represents a particular feature that can be configured by software when required.\n\nThe figure above is an example of a single register within the design with five different functional fields.\n\nThe design files may have a module in RTL to implement these registers.\n\nTo model registers using the UVM RAL, you create a register model class hierarchy that reflects the registers and their fields in your design. Each register corresponds to a class, and each field within the register corresponds to a field within that class. A register class is derived from uvm_reg and a register field is derived from uvm_reg_field.",
                        "code": "// RTL representation\n\nmodule reg_block (...);\n\twire [31:0]     reg_ctl;\n\t\n\t// Declare reg variables to store register field values\n\treg             ctl_en;      // Enable for the module\n\treg [2:0]       ctl_mode;    // Mode \n\treg             ctl_halt;    // Halt \n\treg             ctl_auto;    // Auto shutdown \n\treg [4:0]       ctl_speed;   // Speed control\n\t\n\tassign reg_ctl = {16'b0, ctl_speed, 5'b0, ctl_auto, ctl_halt, ctl_mode, ctl_en};\n\t\n\t// Logic for getting individual fields from the bus\n\t...\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "What is a register block ?",
                        "content": "A register block is a higher-level abstraction that represents a collection of registers and memory-mapped elements within a digital design. It provides a way to organize and encapsulate related registers, making it easier to manage and verify complex designs that consist of multiple registers and associated logic.\n\nFor example, REG_CTL could be placed at an offset address of 0x0 to emphasize that it is the main control register for the module. Because it takes 32 bits (4 bytes), the next register REG_STAT would be at 0x4 and hold the design's status related flags.\n\nA register block class is derived from uvm_reg_block base class in UVM.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "What is a memory map ?",
                        "content": "A memory map refers to the arrangement of memory and memory-mapped peripheral registers within the address space of the SoC's memory hierarchy. It defines the logical addresses at which various components, such as memory regions, registers, and peripherals, are accessible by the processor and other devices in the system.\n\nFor example, a System-On-Chip or SoC normally has one or more processor cores, DMA engines, bus network interconnects and many peripheral modules. Each peripheral module would have an associated register block and they are all laid out in a memory map. The processor would have access to these register blocks through a peripheral bus protocol like APB, or Wishbone. So each peripheral block would require a base address on which respective register blocks can reside.\n\nAssume the register block described above to be a part of the Timer design module which has a base address of 0xE7B3_0000. In order to access REG_CTL of the Timer block, the core would have to send a transaction with an address of 0xE7B3_0000 since REG_CTL has a base address offset of 0x0. To access REG_DMACTL, the core would send a transaction with address of (0xE7B3_0000 + 0xC) because REG_DMACTL has an offset of 0xC.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "What is Register Abstraction Layer ?",
                        "content": "The purpose of Register Abstraction Layer or RAL is to provide a structured and standardized way to model and verify registers and memory-mapped structures within a digital design. Verification of register behavior can include testing different access scenarios, checking field values after resets, verifying register side-effects, and more.\n\nIt defines many base classes that abstract the read and write operations to registers and memories in a DUT, when properly extended. This allows many verification environments to be reused from block level to sub-system level environments to full chip or SoC testbenches without any modifications.\n\nThe register model object can be used in a UVM sequence to write or read from a target register.",
                        "code": "class my_sequence extends uvm_sequence;\n\t...\n\n\tregmodel \tm_regmodel;\n\n\tvirtual task body();\t\t\t\t\n\t\t// Get regmodel from config_db\n\t\t\n\t\t// Use register model handle to write into the DUT register\n\t\tm_regmodel.reg_ctl.write(uvm_status, 8'h3A);\n\n\t\t// Use register model handle to read from the DUT register\n\t\tm_regmodel.reg_ctl.read(uvm_status, rdata);\n\tendtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Why is RAL useful ?",
                        "content": "It would be very cumbersome to write and read from registers without RAL. User will have to create a uvm_sequence_item and execute the item on the targeted bus agent. Such code cannot be reused as easily as it is with RAL and there would be no good way to know the current state of the design at any point in time.",
                        "code": "class write_sequence extends uvm_sequence;\n\tint \tm_addr;\n\tint \tm_wdata;\n\n\t...\n\tvirtual task body();\n\t\tbus_item \tm_item;\n\n\t\tm_item = bus_item::type_id::create(\"my_item\");\n\t\tm_item.randomize() with { \tm.wdata == m_wdata;\n\t\t\t\t\t\t\t\t\tm.write == 1;\n\t\t\t\t\t\t\t\t\tm.addr \t== m_addr; \n\t\t\t\t\t\t\t\t};\n\t\tstart_item(m_item);\n\t\t\n\t\t...\n\tendtask\nendclass",
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
                "id": "cv-uvm-59",
                "num": 59,
                "title": "UVM Register Model Classes",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "What is a register model ?",
                        "content": "A register model, provide a structured and standardized way to model and verify the registers and memory-mapped structures within a digital design. It consists of a hierarchy of blocks represented by UVM class objects that are structured equivalent to the registers and memory in design.\n\nSince typical designs contain hundreds of registers, register model generation is usually done by custom scripts or standard software tools like RalGen from Synopsys or RGM from Cadence. These tools take the register specification as an input such as an IPXACT XML file and generates a SystemVerilog file which contains fields and registers specified using standard UVM register classes.",
                        "code": "// Sample IPXACT register specification\n\n<spirit:usage>register</spirit:usage>\n\t<spirit:register>\n    \t<spirit:name>REG_CTL</spirit:name>\n      \t<spirit:addressOffset>0x0</spirit:addressOffset>\n      \t<spirit:size>32</spirit:size>\n      \t<spirit:reset>\n         \t<spirit:value>0x2A</spirit:value>\n      \t</spirit:reset>\n      \t<spirit:access>read-write</spirit:access>\n      \t<spirit:field>\n          <spirit:name>EN</spirit:name>\n          <spirit:description>Enable the module</spirit:description>\n          <spirit:bitOffset>0</spirit:bitOffset>\n          <spirit:bitWidth>1</spirit:bitWidth>\n          <spirit:access>read-write</spirit:access>\n      </spirit:field>\n\n      ...",
                        "lang": "verilog"
                    },
                    {
                        "title": "uvm_reg_field",
                        "content": "uvm_reg_field is a class that is used to model individual fields within a register. Fields in a register represent specific bits or groups of bits that have distinct functionalities, access permissions, reset values, and other attributes.\n\nThese are some of the most commonly used methods in uvm_reg_field. Please refer to the UVM reference manual to see the full set of methods.\n\nHere is an example of how user register field of type uvm_reg_field is instantiated and configured inside a register.",
                        "code": "// Configure the register field class\n\textern function void configure(uvm_reg        parent, \t\t// Parent register handle\n                                   int unsigned   size, \t\t// Bit-width of the field\n                                   int unsigned   lsb_pos, \t\t// LSB index of the field in register\n                                   string         access, \t\t// Read/read-write/etc access policy\n                                   bit            volatile, \t\t\n                                   uvm_reg_data_t reset,\n                                   bit            has_reset, \t\n                                   bit            is_rand,\n                                   bit            individually_accessible); \n\n\n\t// Get width of the field, in number of bits\n\textern virtual function int unsigned get_n_bits();\n\n\t// Returns index of LSB of the field in the register that instantiates it\n\textern virtual function int unsigned get_lsb_pos();\n\n\t// Set desired value in the regmodel for this field\n\textern virtual function void set(uvm_reg_data_t  value,\n                                    string          fname = \"\",\n                                    int             lineno = 0);\n\n\t// Get desired value in regmodel for this field\n\textern virtual function uvm_reg_data_t get(string fname = \"\",\n                                              int    lineno = 0);\n\n\t// Get mirrored value in regmodel for this field\n\textern virtual function uvm_reg_data_t get_mirrored_value(string fname = \"\",\n                                               \t\t\t\t int    lineno = 0);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "// Declare register field handle\n\tuvm_reg_field \tm_enable;\n\n\t// Create an instance and configure the register field handle\n\tm_enable = uvm_reg_field::type_id::create(\"m_enable\");\n\tm_enable.configure(this, 1, 0, \"RW\", 0, 1'h0, 1, 1, 1);",
                        "lang": "verilog"
                    },
                    {
                        "title": "uvm_reg",
                        "content": "uvm_reg is a base class provided by the UVM library that is used to model registers, and user defined classes are extended from this base class.\n\nThese are some of the most commonly used methods in uvm_reg.\n\nHere is an example of a user register extended from uvm_reg base class.",
                        "code": "// Get fields of this register as a queue\n   extern virtual function void get_fields (ref uvm_reg_field fields[$]);\n\n   // Get a particular field by name\n   extern virtual function uvm_reg_field get_field_by_name(string name);\n\n   // Get address of this register\n   extern virtual function uvm_reg_addr_t get_address (uvm_reg_map map = null);\n\n   // Set desired value in regmodel\n   extern virtual function void set (uvm_reg_data_t  value,\n                                     string          fname = \"\",\n                                     int             lineno = 0);\n\n   // Get desired value in regmodel\n   extern virtual function uvm_reg_data_t  get(string  fname = \"\",\n                                               int     lineno = 0);\n\n   // Get last known design value \n   extern virtual function uvm_reg_data_t  get_mirrored_value(string  fname = \"\",\n                                               int     lineno = 0);\n\n   // Issue a register write with the given value\n   extern virtual task write(output uvm_status_e      status,\n                             input  uvm_reg_data_t    value,\n                             input  uvm_door_e        path = UVM_DEFAULT_DOOR,\n                             input  uvm_reg_map       map = null,\n                             input  uvm_sequence_base parent = null,\n                             input  int               prior = -1,\n                             input  uvm_object        extension = null,\n                             input  string            fname = \"\",\n                             input  int               lineno = 0);\n\n   // Issue a register read and get value into the given variable\n   extern virtual task read(output uvm_status_e      status,\n                            output uvm_reg_data_t    value,\n                            input  uvm_door_e        path = UVM_DEFAULT_DOOR,\n                            input  uvm_reg_map       map = null,\n                            input  uvm_sequence_base parent = null,\n                            input  int               prior = -1,\n                            input  uvm_object        extension = null,\n                            input  string            fname = \"\",\n                            input  int               lineno = 0);\n\n   // Update design if desired value is not same as mirrored value\n   extern virtual task update(output uvm_status_e      status,\n                              input  uvm_door_e        path = UVM_DEFAULT_DOOR,\n                              input  uvm_reg_map       map = null,\n                              input  uvm_sequence_base parent = null,\n                              input  int               prior = -1,\n                              input  uvm_object        extension = null,\n                              input  string            fname = \"\",\n                              input  int               lineno = 0);\n\n   // Update regmodel with mirrored value\n   extern virtual task mirror(output uvm_status_e      status,\n                              input uvm_check_e        check  = UVM_NO_CHECK,\n                              input uvm_door_e         path = UVM_DEFAULT_DOOR,\n                              input uvm_reg_map        map = null,\n                              input uvm_sequence_base  parent = null,\n                              input int                prior = -1,\n                              input  uvm_object        extension = null,\n                              input string             fname = \"\",\n                              input int                lineno = 0);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "class reg_ctl extends uvm_reg;\n\trand uvm_reg_field  En;\n\n\tfunction new (string name = \"reg_ctl\");\n\t\tsuper.new (name, 32, UVM_NO_COVERAGE);\n\tendfunction\n\n\tvirtual function void build ();\t\n\t\t// Create object instance for each field\n\t\tthis.En     = uvm_reg_field::type_id::create (\"En\");\n\t\t\n\t\t// Configure each field\n\t\tthis.En.configure (this, 1, 0, \"RW\", 0, 1'h0, 1, 1, 1);\n\tendfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "uvm_reg_block",
                        "content": "A uvm_reg_block can contain registers, register files, memories and sub-blocks.",
                        "code": "// Get queue of registers\n   extern virtual function void get_registers (ref uvm_reg regs[$],\n                                               input uvm_hier_e hier=UVM_HIER);\n\n\t// Get register block by name\n  extern virtual function uvm_reg_block get_block_by_name (string name);  \n\n\t// Get register by name\n   extern virtual function uvm_reg get_reg_by_name (string name);\n\n\t// Get field by name\n   extern virtual function uvm_reg_field get_field_by_name (string name);\n\n\t// Update registers in this reg block\n   extern virtual task update(output uvm_status_e       status,\n                              input  uvm_door_e         path = UVM_DEFAULT_DOOR,\n                              input  uvm_sequence_base  parent = null,\n                              input  int                prior = -1,\n                              input  uvm_object         extension = null,\n                              input  string             fname = \"\",\n                              input  int                lineno = 0);",
                        "lang": "verilog"
                    },
                    {
                        "title": "What are desired and mirrored values ?",
                        "content": "Every register in the model corresponds to an actual hardware register in the design. There are two kinds of variables inside the register within a model.\n\nDesired value is what we the design to have. In other words, the model has an internal variable to store a desired value that can be updated later in the design. For example, if we want the register REG_STAT in the design to have a value of 0x1234_5678, then the desired value of that register has to be set to 0x1234_5678 within the model and an update task should be called for this to be reflected in the design.\n\nEvery time a read or a write operation occurs on the design, the mirrored values for that particular register will be updated. Hence the mirrored value in the model is the latest known value in the design. This is very useful because we don't have to issue a read operation everytime we want to know the value of a register in the design.\n\nThe desired and mirrored values also exist for every register field.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Example",
                        "content": "Lets create a register class object for REG_CTL. Every register object should be inherited from uvm_reg class and every register field should be objects of uvm_reg_field. Note that you don't have to create a separate class for a register field, but simply create an object for every register field as shown in the example below.\n\nThe fields have been declared as rand so that they can be randomized when required and are of type uvm_reg_field. This is only a declaration for all fields, and actual definitions will come later on. Next we have to write the new() function as we normally do with any UVM class. The super call will require three arguments with the first one being the name of the register, the second indicates the size of the register which is 32 bits in our case. The last parameter specifies which functional coverage models are present in the extension of the register abstraction class.",
                        "code": "class reg_ctl extends uvm_reg;\n\trand uvm_reg_field  En;\n\trand uvm_reg_field  Mode;\n\trand uvm_reg_field  Halt;\n\trand uvm_reg_field  Auto;\n\trand uvm_reg_field  Speed;",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Until this point, we have not defined anything related to the register fields and hence, let's do that next in a custom user function called build(). We'll keep the function virtual just in case someone else tries to override this method and call their own version of build().",
                        "code": "function new (string name = \"reg_ctl\");\n\t\tsuper.new (name, 32, UVM_NO_COVERAGE);\n\tendfunction",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "The configure() method is used to define field attributes to the class object and has the following arguments.",
                        "code": "virtual function void build ();\n\t\n\t\t// Create object instance for each field\n\t\tthis.En     = uvm_reg_field::type_id::create (\"En\");\n\t\tthis.Mode   = uvm_reg_field::type_id::create (\"Mode\");\n\t\tthis.Halt   = uvm_reg_field::type_id::create (\"Halt\");\n\t\tthis.Auto   = uvm_reg_field::type_id::create (\"Auto\");\n\t\tthis.Speed  = uvm_reg_field::type_id::create (\"Speed\");\n\t\t\n\t\t// Configure each field\n\t\tthis.En.configure (this, 1, 0, \"RW\", 0, 1'h0, 1, 1, 1);\n\t\tthis.Mode.configure (this, 3, 1, \"RW\", 0, 3'h2, 1, 1, 1);\n\t\tthis.Halt.configure (this, 1, 4, \"RW\", 0, 1'h1, 1, 1, 1);\n\t\tthis.Auto.configure (this, 1, 5, \"RW\", 0, 1'h0, 1, 1, 1);\n\t\tthis.Speed.configure (this, 5, 11, \"RW\", 0, 5'h1c, 1, 1, 1);\n\tendfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "In a similar way you can define a separate class for each register in the design.",
                        "code": "function void configure(\n                            uvm_reg        parent,\n                            int unsigned   size,\n                            int unsigned   lsb_pos,\n                            string         access,\n                            bit            volatile,\n                            uvm_reg_data_t reset,\n                            bit            has_reset,\n                            bit            is_rand,\n                            bit            individually_accessible\n                        );",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "After all registers have been defined it needs to be made a part of the register block. For this, we'll define a register block that inherits from uvm_reg_block and create objects of all registers within it. For our purposes let's put only three registers into this block.",
                        "code": "class reg_stat extends uvm_reg;\n\t...\nendclass\n\nclass reg_dmactl extends uvm_reg;\n\t...\nendclass\n\n...",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "An object of reg_block class is the register model and can be used to access all registers and perform read and write operations on them. We have only covered the first part of how a register model is defined. But the question of how the actual DUV will be written to and read from has not been discussed yet. To perform register operations, you have to send valid bus transactions via a peripheral bus which will be covered in the next section.",
                        "code": "class reg_block extends uvm_reg_block;\n\trand \treg_ctl \tm_reg_ctl;\n\trand \treg_stat \tm_reg_stat;\n\trand \treg_inten \tm_reg_inten;\n\t\n\tfunction new (string name = \"reg_block\");\n\t\tsuper.new (name, UVM_NO_COVERAGE);\n\tendfunction\n\t\n\tvirtual function void build ();\n\t\n\t\t// Create an instance for every register\n\t\tthis.default_map = create_map (\"\", 0, 4, UVM_LITTLE_ENDIAN, 0);\n\t\tthis.m_reg_ctl = reg_ctl::type_id::create (\"m_reg_ctl\", , get_full_name);\n\t\tthis.m_reg_stat = reg_stat::type_id::create (\"m_reg_stat\", , get_full_name);\n\t\tthis.m_reg_inten = reg_inten::type_id::create (\"m_reg_inten\", , get_full_name);\n\t\t\n\t\t// Configure every register instance\n\t\tthis.m_reg_ctl.configure (this, null, \"\");\n\t\tthis.m_reg_stat.configure (this, null, \"\");\n\t\tthis.m_reg_inten.configure (this, null, \"\");\n\t\t\n\t\t// Call the build() function to build all register fields within each register\n\t\tthis.m_reg_ctl.build();\n\t\tthis.m_reg_stat.build();\n\t\tthis.m_reg_inten.build();\n\t\t\n\t\t// Add these registers to the default map\n\t\tthis.default_map.add_reg (this.m_reg_ctl, `UVM_REG_ADDR_WIDTH'h0, \"RW\", 0);\n\t\tthis.default_map.add_reg (this.m_reg_stat, `UVM_REG_ADDR_WIDTH'h4, \"RO\", 0);\n\t\tthis.default_map.add_reg (this.m_reg_inten, `UVM_REG_ADDR_WIDTH'h8, \"RW\", 0);\n\tendfunction\nendclass",
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
                "id": "cv-uvm-60",
                "num": 60,
                "title": "UVM Register Environment",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "In Register Model, we have seen how to create a model that represents actual registers in a design. Now we'll look at the different components in a register environment required to perform register accesses such as read and write operations.\n\nThere are essentially four components required for a register environment :",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Register Adapter",
                        "content": "uvm_reg has in-built methods called read() and write() to initiate a read and write operation to the design.\n\nThese register read/write access calls create an internal generic register item of type uvm_reg_bus_op which is a simple struct as shown below.",
                        "code": "class reg_ctl extends uvm_reg;\n\t...\nendclass\n\nm_reg_ctl.write (status, addr, wdata); \t\t// Write wdata to addr\nm_reg_ctl.read  (status, addr, rdata); \t\t// Read rdata from addr",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "To convert read/write method calls into actual bus protocol accesses, the generic register item is converted to a protocol specific bus transaction item by a component called as an adapter. The adapter needs to be bidirectional so that it is able to convert generic register items to bus transactions and convert bus transaction responses back to generic register items so that it can be updated in the register model.\n\nThis conversion process is facilitated by the adapter via reg2bus() and bus2reg() functions. As the names imply, reg2bus() convert register level objects of type uvm_reg_bus_op into a protocol transaction and bus2reg() convert bus level transactions to register level objects. Bus protocols vary between designs and hence a custom adapter has to be inherited from uvm_reg_adapter to override these functions.\n\nThere are also two variables in the adapter to handle byte enables and response items. The bit supports_byte_enable should be set to 1 if the bus protocol allows enabling certain byte lanes to select certain bytes of data bus as valid. The bit provides_responses should be set to 1 if the target agent driver sends separate response items that require response handling.",
                        "code": "typedef struct {\n\n\tuvm_access_e \t\tkind; \t\t// Access type: UVM_READ/UVM_WRITE\n\tuvm_reg_addr_t \t\taddr; \t\t// Bus address, default 64 bits\n\tuvm_reg_data_t \t\tdata; \t\t// Read/Write data, default 64 bits\n\tint  \t\t\t\tn_bits; \t// Number of bits being transferred\n\tuvm_reg_byte_en \tbyte_en; \t// Byte enable\n\tuvm_status_e \t\tstatus;\t\t// Result of transaction: UVM_IS_OK, UVM_HAS_X, UVM_NOT_OK\n\n} uvm_reg_bus_op;",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Since APB bus protocol does not support byte enables, the bit supports_byte_enable is set to 0. If the agent driver provides a separate response item through put() or item_done(), then the bit provides_responses should be set to 1 so that the register model knows that it has to wait for a response before converting it to a register item. If this bit is set and the agent driver does not provide any response there are chances for the simulation to hang. Since APB protocol does not support slave responses, this bit is set to 0.",
                        "code": "// apb_adapter is inherited from \"uvm_reg_adapter\"\nclass reg2apb_adapter extends uvm_reg_adapter;\n   `uvm_object_utils (apb_adapter)\n   \n   // Set default values for the two variables based on bus protocol\n   // APB does not support either, so both are turned off\n   function new(string name=\"apb_adapter\");\n   \t super.new(name);\n   \t supports_byte_enable = 0;\n   \t provides_responses = 0; \n   endfunction\n\t\n\t// This function accepts a register item of type \"uvm_reg_bus_op\" and assigns\n\t// address, data and other required fields to the bus protocol sequence_item\n   virtual function uvm_sequence_item reg2bus (const ref uvm_reg_bus_op rw);\n      bus_pkt pkt = bus_pkt::type_id::create (\"pkt\");\n      pkt.write = (rw.kind == UVM_WRITE) ? 1: 0;\n      pkt.addr  = rw.addr;\n      pkt.data  = rw.data;\n      `uvm_info (\"adapter\", $sformatf (\"reg2bus addr=0x%0h data=0x%0h kind=%s\", pkt.addr, pkt.data, rw.kind.name), UVM_DEBUG) \n      return pkt; \n   endfunction\n\n\t// This function accepts a bus sequence_item and assigns address/data fields to\n\t// the register item\n   virtual function void bus2reg (uvm_sequence_item bus_item, ref uvm_reg_bus_op rw);\n      bus_pkt pkt;\n      \n      // bus_item is a base class handle of type \"uvm_sequence_item\" and hence does not\n      // contain addr, data properties in it. Hence bus_item has to be cast into bus_pkt\n      if (! $cast (pkt, bus_item)) begin\n         `uvm_fatal (\"reg2apb_adapter\", \"Failed to cast bus_item to pkt\")\n      end\n   \n      rw.kind = pkt.write ? UVM_WRITE : UVM_READ;\n      rw.addr = pkt.addr;\n      rw.data = pkt.data;\n      rw.status = UVM_IS_OK;\t// APB does not support slave response\n      `uvm_info (\"adapter\", $sformatf(\"bus2reg : addr=0x%0h data=0x%0h kind=%s status=%s\", rw.addr, rw.data, rw.kind.name(), rw.status.name()), UVM_DEBUG)\n   endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Register Predictor",
                        "content": "The register model has a different ways to update the model and keep its copy of registers in sync with the values in DUT. By default, it updates the register model every time a read or write transaction is performed. For example if a value is written to the design using write() method, it can easily update the mirrored value for that register in the model with the data written out. Similarly when a read() method gets the read data from the design, it can update the mirrored value accordingly.\n\nHowever, it is not required to always use the register model to write into the design as individual sequences with address and data can be started on the same target agent to write into design registers. This would make the values in the register model stale, and would require an update every time some other sequence reads or writes into the design. A component called predictor can be placed on the target bus agent interface to monitor for any transactions and update the register model accordingly.\n\nThe uvm_reg_predictor component is a child class of uvm_subscriber and has an analysis implementation port capable of receiving bus sequence items from the target monitor. It uses the register adapter to convert the incoming bus packet into a generic register item and then looks up the address from the register map to find the correct register and update its contents. This is protocol independent and hence we do not need to define a custom class. However, we'll have to create a parameterized version of a register predictor as shown below that can be integrated within our register environment.",
                        "code": "// uvm_reg_predictor class definition\n\nclass uvm_reg_predictor #(type BUSTYPE=int) extends uvm_component;\n  \t`uvm_component_param_utils(uvm_reg_predictor#(BUSTYPE))\n  \n\tuvm_analysis_imp #(BUSTYPE, uvm_reg_predictor #(BUSTYPE)) bus_in;\n  \tuvm_reg_map map;\n  \tuvm_reg_adapter adapter;\n\n\t...\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Steps to integrate a predictor",
                        "content": "",
                        "code": "// Here \"bus_pkt\" is the sequence item sent by the target monitor to this predictor\nuvm_reg_predictor #(bus_pkt) \t\tm_apb_predictor;",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "virtual function void build_phase(uvm_phase phase);\n\tsuper.build_phase(phase);\n\tm_apb_predictor = uvm_reg_predictor#(bus_pkt)::type_id::create(\"m_apb_predictor\", this);\nendfunction",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "virtual function void connect_phase(uvm_phase phase);\n\tsuper.connect_phase(phase);\n\t// 1. Provide register map to the predictor\n    m_apb_predictor.map       = m_ral_model.default_map;\n    \n    // 2. Provide an adapter to help convert bus packet into register item\n    m_apb_predictor.adapter   = m_apb_adapter;\n    \n    // 3. Connect analysis port of target monitor to analysis implementation of predictor\n\tm_apb_agent.ap.connect(m_apb_predictor.bus_in);\nendfunction",
                        "lang": "verilog"
                    },
                    {
                        "title": "Register environment integration",
                        "content": "Let's use all the above components and integrate them in a separate register environment to make it more re-usable.\n\nThere are three components that we have to declare and create in the build_phase(). It is important to note that a register model has to be locked via invocation of its lock() function in order to prevent any other testbench component or part from modifying the structure or adding registers to it. The build() method of the register model is a custom function not a part of standard UVM library, simply to initiate building sub-blocks, maps and regsiters within the model. It's a good idea to place this model somewhere in the configuration database so that other components may access it.\n\nNow we have to provide the predictor with a mapping scheme so that it can match the address values with those of the registers in the model, and also have a handle to the adapter so that it can take the converted bus values directly. This is best done in the connect_phase() method as shown above.\n\nClick here to see the full example !",
                        "code": "class reg_env extends uvm_env;\n   `uvm_component_utils (reg_env)\n   function new (string name=\"reg_env\", uvm_component parent);\n      super.new (name, parent);\n   endfunction\n\n   uvm_agent \t\t\t\t\t  m_agent; \t\t\t\t// Agent handle\n   ral_my_design              \t  m_ral_model;         \t// Register Model\n   reg2apb_adapter                m_apb_adapter;      \t// Convert Reg Tx <-> Bus-type packets\n   uvm_reg_predictor #(bus_pkt)   m_apb_predictor; \t\t// Map APB tx to register in model\n\n   virtual function void build_phase (uvm_phase phase);\n      super.build_phase (phase);\n      m_ral_model       = ral_my_design::type_id::create (\"m_ral_model\", this);\n      m_apb_adapter     = m_apb_adapter :: type_id :: create (\"m_apb_adapter\");\n      m_apb_predictor  \t= uvm_reg_predictor #(bus_pkt) :: type_id :: create (\"m_apb_predictor\", this);\n\n      m_ral_model.build ();\n      m_ral_model.lock_model ();\n      uvm_config_db #(ral_my_design)::set (null, \"uvm_test_top\", \"m_ral_model\", m_ral_model);\n   endfunction\n\n   virtual function void connect_phase (uvm_phase phase);\n      super.connect_phase (phase);\n      m_apb_predictor.map       = m_ral_model.default_map;\n      m_apb_predictor.adapter   = m_apb_adapter;\n      m_agent.ap.connect(m_apb_predictor.bus_in);\n   endfunction   \nendclass",
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
                "id": "cv-uvm-61",
                "num": 61,
                "title": "Connecting register env",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "Till the previous stage we had defined and created everything required within the register environment. However which agent is responsible for driving these register transactions hadn't been defined.",
                        "code": "class my_env extends uvm_env;\n   `uvm_component_utils (my_env)\n   \n   my_agent       m_agent;   \n   reg_env        m_reg_env;\n   \n   function new (string name = \"my_env\", uvm_component parent);\n      super.new (name, parent);\n   endfunction\n   \n   virtual function void build_phase (uvm_phase phase);\n      super.build_phase (phase);\n      m_agent = my_agent::type_id::create (\"m_agent\", this);\n      m_reg_env = reg_env::type_id::create (\"m_reg_env\", this);\n   endfunction\n\n   virtual function void connect_phase (uvm_phase phase);\n      super.connect_phase (phase);\n      m_agent.m_mon.mon_ap.connect (m_reg_env.m_apb2reg_predictor.bus_in);\n      m_reg_env.m_ral_model.default_map.set_sequencer (m_agent.m_seqr, m_reg_env.m_reg2apb);\n   endfunction\n   \nendclass",
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
                "id": "cv-uvm-62",
                "num": 62,
                "title": "UVM Register Backdoor Access",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "UVM register model allows access to the DUT registers using the front door as we have seen before in the register environment.\n\nThis means that all register read and write operations in the environment are converted into bus transactions that get driven into the bus interface of the design, just like any other hardware component in a typical system would do. Because these accesses are sent as valid bus transactions, it consumes bus cycles. This is the recommended way to verify registers in any design as it closely resembles with what happens in the system.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "What are backdoor accesses ?",
                        "content": "UVM also allows backdoor accesses which uses a simulator database to directly access the signals within the DUT. Write operations deposit a value onto the signal and read operations sample the current value from the register signal. Since registers are the leaf nodes in a digital system, depositing a new value in the middle of any design transitions should not cause any problem. However, the control logic that becomes active during a typical bus write operation will not be active and hence any logic connected to this may not work as expected.\n\nA backdoor access takes zero simulation time since the HDL values are directly accessed and do not consume a bus transaction. This is not the recommended way to verify register acesses in any design, but under certain circumstances, backdoor accesses help to enhance verification efforts using frontdoor mechanism.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Define backdoor HDL path",
                        "content": "The simulator has to know the HDL path to the signal for which it is trying to do a backdoor operation. So, it is the responsibility of the user to specify the signal path in the register model for every register or for those registers which required backdoor access.\n\nTo enhance reuse and portability, the whole path is broken into multiple hierarchies. For example, the path to a given register can be split into the path from testbench top to subsystem top level, and from subsystem top to block level top and block level top to register block top and finally register block top to the given register. If the subsystem is reused in another design, only the section of HDL path from testbench top to the subsystem top level needs to be updated.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Example",
                        "content": "Click here to refresh the design example in frontdoor access !\n\nWe'll add HDL paths for the traffic controller design example seen in frontdoor access example, and then perform some backdoor access writes and reads. HDL paths are added during register model construction. Basically they are added by certain function calls and hence can be done later after register model construction.\n\nIt is not uncommon to see an automated flow developed by verification teams that parse the HDL path list provided by designers and then have the information added to an existent register model. The most logical way to understand how it is arranged is by a top down approach. First look at the testbench level, then at the DUT level, then at any subsystem level if present, then any register block levels and finally the registers.\n\nIn our simple traffic controller design, registers are directly placed in the DUT and hence the hierarchy to access these signals are simple.",
                        "code": "// Assume that ral_cfg_ctl and other \"uvm_reg\" classes are already\n// defined as in the frontdoor example\n\nclass ral_block_traffic_cfg extends uvm_reg_block;\n\trand ral_cfg_ctl    ctrl;       // RW\n\trand ral_cfg_timer  timer[2];   // RW\n       ral_cfg_stat   stat;       // RO\n\n\t`uvm_object_utils(ral_block_traffic_cfg)\n\n\tfunction new(string name = \"traffic_cfg\");\n\t\tsuper.new(name, build_coverage(UVM_NO_COVERAGE));\n\tendfunction\n\n  virtual function void build();\n    default_map = create_map(\"\", 0, 4, UVM_LITTLE_ENDIAN, 0);\n    ctrl = ral_cfg_ctl::type_id::create(\"ctrl\",,get_full_name());\n    ctrl.configure(this, null, \"\");\n    ctrl.build();\n    \n    // HDL path to this instance is \"tb.DUT.ctl_reg\"\n    ctrl.add_hdl_path_slice(\"ctl_reg\", 0, ctrl.get_n_bits());\n    default_map.add_reg(this.ctrl, `UVM_REG_ADDR_WIDTH'h0, \"RW\", 0);\n    \n    timer[0] = ral_cfg_timer::type_id::create(\"timer[0]\",,get_full_name());\n    timer[0].configure(this, null, \"\");\n    timer[0].build();\n    \n    // HDL path to this instance is \"tb.DUT.timer_0\"\n    timer[0].add_hdl_path_slice(\"timer_0\", 0, timer[0].get_n_bits());\n    default_map.add_reg(this.timer[0], `UVM_REG_ADDR_WIDTH'h4, \"RW\", 0);\n\n    timer[1] = ral_cfg_timer::type_id::create(\"timer[1]\",,get_full_name());\n    timer[1].configure(this, null, \"\");\n    timer[1].build();\n    \n    // HDL path to this instance is \"tb.DUT.timer_1\"\n    timer[1].add_hdl_path_slice(\"timer_1\", 0, timer[1].get_n_bits());\n    default_map.add_reg(this.timer[1], `UVM_REG_ADDR_WIDTH'h8, \"RW\", 0);\n\n    stat = ral_cfg_stat::type_id::create(\"stat\",,get_full_name());\n    stat.configure(this, null, \"\");\n    stat.build();\n    \n    // HDL path from DUT to the status register will now be \n    // \"tb.DUT.stat_reg\" after the previous hierarchies are used \n    // for path concatenation\n    stat.add_hdl_path_slice(\"stat_reg\", 0, stat.get_n_bits());\n    default_map.add_reg(this.stat, `UVM_REG_ADDR_WIDTH'hc, \"RO\", 0);\n    add_hdl_path(\"DUT\");\n  endfunction \nendclass \n\nclass ral_sys_traffic extends uvm_reg_block;\n  rand ral_block_traffic_cfg cfg;\n\n\t`uvm_object_utils(ral_sys_traffic)\n\tfunction new(string name = \"traffic\");\n\t\tsuper.new(name);\n\tendfunction\n\n\tfunction void build();\n    default_map = create_map(\"\", 0, 4, UVM_LITTLE_ENDIAN, 0);\n    cfg = ral_block_traffic_cfg::type_id::create(\"cfg\",,get_full_name());\n    \n    // Since registers exist at the DUT level in our design, configure\n    // \"cfg\" class to have an HDL path called \"DUT\". So complete path to \n    // DUT is now \"tb.DUT\"\n    cfg.configure(this, \"DUT\");\n    cfg.build();\n    \n    // Path to this top level regblock in our testbench environment is \"tb\"\n    add_hdl_path(\"tb\");\n    default_map.add_submap(this.cfg.default_map, `UVM_REG_ADDR_WIDTH'h0);\n\tendfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Example of backdoor access in sequence",
                        "content": "",
                        "code": "class reg_backdoor_test extends base_test;\n   `uvm_component_utils (reg_backdoor_test)\n   function new (string name=\"reg_backdoor_test\", uvm_component parent);\n      super.new (name, parent);\n   endfunction\n\n   virtual task main_phase(uvm_phase phase);\n      ral_sys_traffic   m_ral_model;\n      uvm_status_e      status;\n      int               rdata;\n\n      phase.raise_objection(this);\n\n      m_env.m_reg_env.set_report_verbosity_level (UVM_HIGH);\n      uvm_config_db#(ral_sys_traffic)::get(null, \"uvm_test_top\", \"m_ral_model\", m_ral_model);\n\n      // Perform a normal frontdoor access -> write some data first and then read it back\n      m_ral_model.cfg.timer[1].write(status, 32'h1234_5678);\n      m_ral_model.cfg.timer[1].read(status, rdata);\n      `uvm_info(get_type_name(), $sformatf(\"desired=0x%0h mirrored=0x%0h\", m_ral_model.cfg.timer[1].get(), m_ral_model.cfg.timer[1].get_mirrored_value()), UVM_MEDIUM)\n      \n      // Perform a backdoor access for write and then do a frontdoor read \n      m_ral_model.cfg.timer[1].write(status, 32'ha5a5_a5a5, UVM_BACKDOOR);\n      m_ral_model.cfg.timer[1].read(status, rdata);\n      `uvm_info(get_type_name(), $sformatf(\"desired=0x%0h mirrored=0x%0h\", m_ral_model.cfg.timer[1].get(), m_ral_model.cfg.timer[1].get_mirrored_value()), UVM_MEDIUM)\n\n      // Perform a frontdoor write and then do a backdoor read\n      m_ral_model.cfg.timer[1].write(status, 32'hface_face);\n     // Wait for a time unit so that backdoor access reads update value\n     #1;  \n      m_ral_model.cfg.timer[1].read(status, rdata, UVM_BACKDOOR);\n      `uvm_info(get_type_name(), $sformatf(\"desired=0x%0h mirrored=0x%0h\", m_ral_model.cfg.timer[1].get(), m_ral_model.cfg.timer[1].get_mirrored_value()), UVM_MEDIUM)\n\n      phase.drop_objection(this);\n   endtask\n\n  virtual task shutdown_phase(uvm_phase phase);\n    super.shutdown_phase(phase);\n    phase.raise_objection(this);\n    #100ns;\n    phase.drop_objection(this);\n  endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_root.svh(392) @ 0: reporter [UVM/RELNOTES]\nUVM_INFO @ 0: reporter [RNTST] Running test reg_backdoor_test...\nUVM_WARNING /playground_lib/uvm-1.2/src/base/uvm_resource.svh(1416) @ 0: reporter [UVM/RSRC/NOREGEX] a resource with meta characters in the field name has been created \"m_ral_model.cfg\"\nUVM_INFO env.sv(215) @ 0: uvm_test_top.m_env.m_agent.m_seqr@@m_reset_seq [RESET] Running reset ...\nUVM_INFO test.sv(58) @ 110: uvm_test_top [reg_backdoor_test] desired=0x12345678 mirrored=0x12345678\nUVM_INFO test.sv(63) @ 150: uvm_test_top [reg_backdoor_test] desired=0xa5a5a5a5 mirrored=0xa5a5a5a5\nUVM_INFO test.sv(70) @ 191: uvm_test_top [reg_backdoor_test] desired=0xfaceface mirrored=0xfaceface\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_report_server.svh(847) @ 291: reporter [UVM/REPORT/SERVER] \n--- UVM Report Summary ---",
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
                "id": "cv-uvm-63",
                "num": 63,
                "title": "UVM Register Model Example",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "In the previous few articles, we have seen what a register model is and how it can be used to access registers in a given design. Let us see a complete example of how such a model can be written for a given design, how it can be integrated into the environment and how it can be used to write and read into design fields.\n\nClick here to refresh the concept on register models !",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Design",
                        "content": "The following design has the following registers and fields that are accessible through an APB interface. The design essentially represents a traffic light controller which can be configured by writing into certain control registers.\n\nThe ctl register contains fields to start the module, and configure it to be in the blink yellow or blink red mode. The state register is read-only and returns current state of the design - yellow, red or green. The two timer registers stores the time between transition from each state. The profile bit allows the user to choose between the two programmed timer values. This can be useful for peak and off-peak times.\n\nThis is not a complete design since our purpose is simply to show how registers in this design can be read/written using a UVM register model. All the signals listed as the module ports belong to APB specification.",
                        "code": "module traffic (  input          pclk,\n                  input          presetn,\n                  input [31:0]   paddr,\n                  input [31:0]   pwdata,\n                  input          psel,\n                  input          pwrite,\n                  input          penable,\n\n                  // Outputs\n                  output [31:0]  prdata);\n\n   reg [3:0]      ctl_reg;    // profile, blink_red, blink_yellow, mod_en RW\n   reg [1:0]      stat_reg;   // state[1:0] \n   reg [31:0]     timer_0;    // timer_g2y[31:20], timer_r2g[19:8], timer_y2r[7:0] RW\n   reg [31:0]     timer_1;    // timer_g2y[31:20], timer_r2g[19:8], timer_y2r[7:0] RW\n\n   reg [31:0]     data_in;\n   reg [31:0]     rdata_tmp;\n\n   // Set all registers to default values\n   always @ (posedge pclk) begin\n      if (!presetn) begin\n         data_in <= 0;\n         ctl_reg  <= 0; \n         stat_reg <= 0; \n         timer_0  <= 32'hcafe_1234; \n         timer_1  <= 32'hface_5678;\n      end\n   end\n\n   // Capture write data\n   always @ (posedge pclk) begin\n      if (presetn & psel & penable) \n         if (pwrite) \n            case (paddr)\n               'h0   : ctl_reg <= pwdata;\n               'h4   : timer_0 <= pwdata;\n               'h8   : timer_1 <= pwdata;\n               'hc   : stat_reg <= pwdata;\n            endcase\n   end\n\n   // Provide read data\n   always @ (penable) begin\n      if (psel & !pwrite) \n         case (paddr)\n            'h0 : rdata_tmp <= ctl_reg;\n            'h4 : rdata_tmp <= timer_0;\n            'h8 : rdata_tmp <= timer_1;\n            'hc : rdata_tmp <= stat_reg;\n         endcase\n   end\n\n   assign prdata = (psel & penable & !pwrite) ? rdata_tmp : 'hz;\n\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "Interface",
                        "content": "Let us declare an interface with signals in the APB protocol and this interface can be passed to the testbench as a virtual interface for the driver to drive some values to the design. To keep things simple, let us not declare clocking blocks and modports, although they are recommended in a real project.",
                        "code": "interface bus_if (input pclk);\n   logic [31:0]   paddr;\n   logic [31:0]   pwdata;\n   logic [31:0]   prdata;\n   logic          pwrite;\n   logic          psel;\n   logic          penable;\n   logic          presetn;\nendinterface",
                        "lang": "verilog"
                    },
                    {
                        "title": "Register Model Example",
                        "content": "A register model for the design registers discussed above can be developed as shown. In typical projects, this would be an automated flow where scripts read register specification formats like IPXACT and convert them into a register model. The register model can then be directly plugged into the register environment or any other component as desired.",
                        "code": "// Register definition for the register called \"ctl\"\nclass ral_cfg_ctl extends uvm_reg;\n\trand uvm_reg_field mod_en;      // Enables the module\n\trand uvm_reg_field bl_yellow;   // Blinks yellow\n\trand uvm_reg_field bl_red;      // Blinks red\n    rand uvm_reg_field profile;     // 1 : Peak, 0 : Off-Peak\n\n\t`uvm_object_utils(ral_cfg_ctl)\n\n\tfunction new(string name = \"traffic_cfg_ctrl\");\n\t\tsuper.new(name, 32, build_coverage(UVM_NO_COVERAGE));\n\tendfunction: new\n\n  // Build all register field objects\n  virtual function void build();\n    this.mod_en     = uvm_reg_field::type_id::create(\"mod_en\",,   get_full_name());\n    this.bl_yellow  = uvm_reg_field::type_id::create(\"bl_yellow\",,get_full_name());\n    this.bl_red     = uvm_reg_field::type_id::create(\"bl_red\",,   get_full_name());\n    this.profile    = uvm_reg_field::type_id::create(\"profile\",,  get_full_name());\n\n    // configure(parent, size, lsb_pos, access, volatile, reset, has_reset, is_rand, individually_accessible); \n    this.mod_en.configure(this, 1, 0, \"RW\", 0, 1'h0, 1, 0, 0);\n    this.bl_yellow.configure(this, 1, 1, \"RW\", 0, 1'h0, 1, 0, 0);\n    this.bl_red.configure(this, 1, 2, \"RW\", 0, 1'h0, 1, 0, 0);\n    this.profile.configure(this, 1, 3, \"RW\", 0, 1'h0, 1, 0, 0);\n  endfunction\nendclass \n\n// Register definition for the register called \"stat\"\nclass ral_cfg_stat extends uvm_reg;\n  uvm_reg_field state;    // Current state of the design\n  \n  `uvm_object_utils(ral_cfg_stat)\n  function new(string name = \"ral_cfg_stat\");\n    super.new(name, 32, build_coverage(UVM_NO_COVERAGE));\n  endfunction\n\n  virtual function void build();\n    this.state = uvm_reg_field::type_id::create(\"state\",, get_full_name());\n\n    // configure(parent, size, lsb_pos, access, volatile, reset, has_reset, is_rand, individually_accessible); \n    this.state.configure(this, 2, 0, \"RO\", 0, 1'h0, 0, 0, 0);\n  endfunction\nendclass\n\n// Register definition for the register called \"timer\"\nclass ral_cfg_timer extends uvm_reg;\n\tuvm_reg_field timer;     // Time for which it blinks\n\n\t`uvm_object_utils(ral_cfg_timer)\n\tfunction new(string name = \"traffic_cfg_timer\");\n\t\tsuper.new(name, 32,build_coverage(UVM_NO_COVERAGE));\n\tendfunction\n\n  virtual function void build();\n     this.timer = uvm_reg_field::type_id::create(\"timer\",,get_full_name());\n\n    // configure(parent, size, lsb_pos, access, volatile, reset, has_reset, is_rand, individually_accessible); \n     this.timer.configure(this, 32, 0, \"RW\", 0, 32'hCAFE1234, 1, 0, 1);\n     this.timer.set_reset('h0, \"SOFT\");\n  endfunction\nendclass\n\n// These registers are grouped together to form a register block called \"cfg\"\nclass ral_block_traffic_cfg extends uvm_reg_block;\n\trand ral_cfg_ctl    ctrl;       // RW\n\trand ral_cfg_timer  timer[2];   // RW\n         ral_cfg_stat   stat;       // RO\n\n\t`uvm_object_utils(ral_block_traffic_cfg)\n\n\tfunction new(string name = \"traffic_cfg\");\n\t\tsuper.new(name, build_coverage(UVM_NO_COVERAGE));\n\tendfunction\n\n  virtual function void build();\n    this.default_map = create_map(\"\", 0, 4, UVM_LITTLE_ENDIAN, 0);\n    this.ctrl = ral_cfg_ctl::type_id::create(\"ctrl\",,get_full_name());\n    this.ctrl.configure(this, null, \"\");\n    this.ctrl.build();\n    this.default_map.add_reg(this.ctrl, `UVM_REG_ADDR_WIDTH'h0, \"RW\", 0);\n\n     \n    this.timer[0] = ral_cfg_timer::type_id::create(\"timer[0]\",,get_full_name());\n    this.timer[0].configure(this, null, \"\");\n    this.timer[0].build();\n    this.default_map.add_reg(this.timer[0], `UVM_REG_ADDR_WIDTH'h4, \"RW\", 0);\n\n    this.timer[1] = ral_cfg_timer::type_id::create(\"timer[1]\",,get_full_name());\n    this.timer[1].configure(this, null, \"\");\n    this.timer[1].build();\n    this.default_map.add_reg(this.timer[1], `UVM_REG_ADDR_WIDTH'h8, \"RW\", 0);\n\n    this.stat = ral_cfg_stat::type_id::create(\"stat\",,get_full_name());\n    this.stat.configure(this, null, \"\");\n    this.stat.build();\n    this.default_map.add_reg(this.stat, `UVM_REG_ADDR_WIDTH'hc, \"RO\", 0);\n  endfunction \nendclass \n\n// The register block is placed in the top level model class definition\nclass ral_sys_traffic extends uvm_reg_block;\n  rand ral_block_traffic_cfg cfg;\n\n\t`uvm_object_utils(ral_sys_traffic)\n\tfunction new(string name = \"traffic\");\n\t\tsuper.new(name);\n\tendfunction\n\n\tfunction void build();\n      this.default_map = create_map(\"\", 0, 4, UVM_LITTLE_ENDIAN, 0);\n      this.cfg = ral_block_traffic_cfg::type_id::create(\"cfg\",,get_full_name());\n      this.cfg.configure(this, \"tb_top.pB0\");\n      this.cfg.build();\n      this.default_map.add_submap(this.cfg.default_map, `UVM_REG_ADDR_WIDTH'h0);\n\tendfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Register Environment",
                        "content": "Now that the register model is available, next step is to connect all components required for the register model to work in a separate environment. This will enable the environment to be directly plugged into the testbench and hides the connection between predictor, adapter and register model from the top level environment.\n\nSince the adapter is dependent on the bus protocol in use, we need to derive a custom class from uvm_reg_adapter and let's name it reg2apb_adapter. The two functions reg2bus and bus2reg are defined here so that register items are converted to APB bus packets and vice versa.",
                        "code": "class reg2apb_adapter extends uvm_reg_adapter;\n   `uvm_object_utils (reg2apb_adapter)\n\n   function new (string name = \"reg2apb_adapter\");\n      super.new (name);\n   endfunction\n\n   virtual function uvm_sequence_item reg2bus (const ref uvm_reg_bus_op rw);\n      bus_pkt pkt = bus_pkt::type_id::create (\"pkt\");\n      pkt.write = (rw.kind == UVM_WRITE) ? 1: 0;\n      pkt.addr  = rw.addr;\n      pkt.data  = rw.data;\n      `uvm_info (\"adapter\", $sformatf (\"reg2bus addr=0x%0h data=0x%0h kind=%s\", pkt.addr, pkt.data, rw.kind.name), UVM_DEBUG) \n      return pkt; \n   endfunction\n\n   virtual function void bus2reg (uvm_sequence_item bus_item, ref uvm_reg_bus_op rw);\n      bus_pkt pkt;\n      if (! $cast (pkt, bus_item)) begin\n         `uvm_fatal (\"reg2apb_adapter\", \"Failed to cast bus_item to pkt\")\n      end\n   \n      rw.kind = pkt.write ? UVM_WRITE : UVM_READ;\n      rw.addr = pkt.addr;\n      rw.data = pkt.data;\n      `uvm_info (\"adapter\", $sformatf(\"bus2reg : addr=0x%0h data=0x%0h kind=%s status=%s\", rw.addr, rw.data, rw.kind.name(), rw.status.name()), UVM_DEBUG)\n   endfunction\nendclass\n\n// Register environment class puts together the model, adapter and the predictor\nclass reg_env extends uvm_env;\n   `uvm_component_utils (reg_env)\n   function new (string name=\"reg_env\", uvm_component parent);\n      super.new (name, parent);\n   endfunction\n\n   ral_sys_traffic                m_ral_model;         // Register Model\n   reg2apb_adapter                m_reg2apb;           // Convert Reg Tx <-> Bus-type packets\n   uvm_reg_predictor #(bus_pkt)   m_apb2reg_predictor; // Map APB tx to register in model\n   my_agent                       m_agent;             // Agent to drive/monitor transactions\n\n   virtual function void build_phase (uvm_phase phase);\n      super.build_phase (phase);\n      m_ral_model          = ral_sys_traffic::type_id::create (\"m_ral_model\", this);\n      m_reg2apb            = reg2apb_adapter :: type_id :: create (\"m_reg2apb\");\n      m_apb2reg_predictor  = uvm_reg_predictor #(bus_pkt) :: type_id :: create (\"m_apb2reg_predictor\", this);\n\n      m_ral_model.build ();\n      m_ral_model.lock_model ();\n      uvm_config_db #(ral_sys_traffic)::set (null, \"uvm_test_top\", \"m_ral_model\", m_ral_model);\n   endfunction\n\n   virtual function void connect_phase (uvm_phase phase);\n      super.connect_phase (phase);\n      m_apb2reg_predictor.map       = m_ral_model.default_map;\n      m_apb2reg_predictor.adapter   = m_reg2apb;\n   endfunction   \nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "APB Agent Example",
                        "content": "AMBA APB is a bus protocol used for low-bandwidth peripheral accesses and a typical application of the protocol is in the access of control registers in a device. The code shown below is a simple model of the APB agent required for our purpose. It does not handle many of the features in an actual APB protocol.",
                        "code": "// Declare a sequence_item for the APB transaction \nclass bus_pkt extends uvm_sequence_item;\n   rand bit [31:0]  addr;\n   rand bit [31:0]  data;\n   rand bit         write;\n\n   `uvm_object_utils_begin (bus_pkt)\n      `uvm_field_int (addr, UVM_ALL_ON)\n      `uvm_field_int (data, UVM_ALL_ON)\n      `uvm_field_int (write, UVM_ALL_ON)\n   `uvm_object_utils_end\n\n   function new (string name = \"bus_pkt\");\n      super.new (name);\n   endfunction\n   \n   constraint c_addr { addr inside {0, 4, 8};}\nendclass\n\n// Drives a given apb transaction packet to the APB interface\nclass my_driver extends uvm_driver #(bus_pkt);\n   `uvm_component_utils (my_driver)\n\n   bus_pkt  pkt;\n\n   virtual bus_if    vif;\n\n   function new (string name = \"my_driver\", uvm_component parent);\n      super.new (name, parent);\n   endfunction\n\n   virtual function void build_phase (uvm_phase phase);\n      super.build_phase (phase);\n      if (! uvm_config_db#(virtual bus_if)::get (this, \"*\", \"bus_if\", vif))\n         `uvm_error (\"DRVR\", \"Did not get bus if handle\")\n   endfunction\n\n   virtual task run_phase (uvm_phase phase);\n      bit [31:0] data;\n\n      vif.psel <= 0;\n      vif.penable <= 0;\n      vif.pwrite <= 0;\n      vif.paddr <= 0;\n      vif.pwdata <= 0;\n      forever begin\n         seq_item_port.get_next_item (pkt);\n         if (pkt.write)\n            write (pkt.addr, pkt.data);\n         else begin\n            read (pkt.addr, data);\n            pkt.data = data;\n         end\n         seq_item_port.item_done ();\n      end\n   endtask\n\n   virtual task read (  input bit    [31:0] addr, \n                        output logic [31:0] data);\n      vif.paddr <= addr;\n      vif.pwrite <= 0;\n      vif.psel <= 1;\n      @(posedge vif.pclk);\n      vif.penable <= 1;\n      @(posedge vif.pclk);\n      data = vif.prdata;\n      vif.psel <= 0;\n      vif.penable <= 0;\n   endtask\n\n   virtual task write ( input bit [31:0] addr,\n                        input bit [31:0] data);\n      vif.paddr <= addr;\n      vif.pwdata <= data;\n      vif.pwrite <= 1;\n      vif.psel <= 1;\n      @(posedge vif.pclk);\n      vif.penable <= 1;\n      @(posedge vif.pclk);\n      vif.psel <= 0;\n      vif.penable <= 0;\n   endtask\nendclass\n\n// Monitors the APB interface for any activity and reports out\n// through an analysis port\nclass my_monitor extends uvm_monitor;\n   `uvm_component_utils (my_monitor)\n   function new (string name=\"my_monitor\", uvm_component parent);\n      super.new (name, parent);\n   endfunction\n\n   uvm_analysis_port #(bus_pkt)  mon_ap;\n   virtual bus_if                vif;\n\n   virtual function void build_phase (uvm_phase phase);\n      super.build_phase (phase);\n      mon_ap = new (\"mon_ap\", this);\n      uvm_config_db #(virtual bus_if)::get (null, \"uvm_test_top.*\", \"bus_if\", vif);\n   endfunction\n   \n   virtual task run_phase (uvm_phase phase);\n      fork\n         forever begin\n            @(posedge vif.pclk);\n            if (vif.psel & vif.penable & vif.presetn) begin\n               bus_pkt pkt = bus_pkt::type_id::create (\"pkt\");\n               pkt.addr = vif.paddr;\n               if (vif.pwrite)\n                  pkt.data = vif.pwdata;\n               else\n                  pkt.data = vif.prdata;\n               pkt.write = vif.pwrite;\n               mon_ap.write (pkt);\n            end \n         end\n      join_none\n   endtask\nendclass\n\n// The agent puts together the driver, sequencer and monitor\nclass my_agent extends uvm_agent;\n   `uvm_component_utils (my_agent)\n   function new (string name=\"my_agent\", uvm_component parent);\n      super.new (name, parent);\n   endfunction\n\n   my_driver                  m_drvr;\n   my_monitor                 m_mon;\n   uvm_sequencer #(bus_pkt)   m_seqr; \n\n   virtual function void build_phase (uvm_phase phase);\n      super.build_phase (phase);\n      m_drvr = my_driver::type_id::create (\"m_drvr\", this);\n      m_seqr = uvm_sequencer#(bus_pkt)::type_id::create (\"m_seqr\", this);\n      m_mon = my_monitor::type_id::create (\"m_mon\", this);\n   endfunction\n\n   virtual function void connect_phase (uvm_phase phase);\n      super.connect_phase (phase);\n      m_drvr.seq_item_port.connect (m_seqr.seq_item_export);\n   endfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Testbench Environment",
                        "content": "Now that we have the register environment and an APB agent, we can create a top level environment where these two can be placed and connected.",
                        "code": "class my_env extends uvm_env;\n   `uvm_component_utils (my_env)\n   \n   my_agent       m_agent;   \n   reg_env        m_reg_env;\n   \n   function new (string name = \"my_env\", uvm_component parent);\n      super.new (name, parent);\n   endfunction\n   \n   virtual function void build_phase (uvm_phase phase);\n      super.build_phase (phase);\n      m_agent = my_agent::type_id::create (\"m_agent\", this);\n      m_reg_env = reg_env::type_id::create (\"m_reg_env\", this);\n      uvm_reg::include_coverage (\"*\", UVM_CVR_ALL);\n   endfunction\n\n   // Connect analysis port of monitor with predictor, assign agent to register env\n   // and set default map of the register env\n   virtual function void connect_phase (uvm_phase phase);\n      super.connect_phase (phase);\n      m_reg_env.m_agent = m_agent;\n      m_agent.m_mon.mon_ap.connect (m_reg_env.m_apb2reg_predictor.bus_in);\n      m_reg_env.m_ral_model.default_map.set_sequencer(m_agent.m_seqr, m_reg_env.m_reg2apb);\n   endfunction\n   \nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Sequences",
                        "content": "This sequence helps to bring the DUT out of reset. It gets the virtual interface handle from uvm_config_db and toggles the DUT reset input directly from the sequence. Register acceses can be written inside a similar sequence, but for our purpose let us simply call them from the test class.",
                        "code": "class reset_seq extends uvm_sequence;\n   `uvm_object_utils (reset_seq)\n   function new (string name = \"reset_seq\");\n      super.new (name);\n   endfunction\n\n   virtual bus_if    vif; \n\n   task body ();\n      if (!uvm_config_db #(virtual bus_if) :: get (null, \"uvm_test_top.*\", \"bus_if\", vif)) \n         `uvm_fatal (\"VIF\", \"No vif\")\n\n      `uvm_info (\"RESET\", \"Running reset ...\", UVM_MEDIUM);\n      vif.presetn <= 0;\n      @(posedge vif.pclk) vif.presetn <= 1;\n      @ (posedge vif.pclk);\n   endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Test",
                        "content": "The first part of creating a test library is to develop a base test that configures the test and the environment. All other specific tests can be derived from this base test so that it can focus on starting stimulus sequences.",
                        "code": "class base_test extends uvm_test;\n   `uvm_component_utils (base_test)\n\n   my_env         m_env;\n   reset_seq      m_reset_seq;\n   uvm_status_e   status;\n\n   function new (string name = \"base_test\", uvm_component parent);\n      super.new (name, parent);\n   endfunction\n\n   // Build the testbench environment, and reset sequence\n   virtual function void build_phase (uvm_phase phase);\n      super.build_phase (phase);\n      m_env = my_env::type_id::create (\"m_env\", this);\n      m_reset_seq = reset_seq::type_id::create (\"m_reset_seq\", this);\n   endfunction\n \n   // In the reset phase, apply reset\n   virtual task reset_phase (uvm_phase phase);\n      super.reset_phase (phase);\n      phase.raise_objection (this);\n      m_reset_seq.start (m_env.m_agent.m_seqr);\n      phase.drop_objection (this);\n   endtask\nendclass\n\nclass reg_rw_test extends base_test;\n   `uvm_component_utils (reg_rw_test)\n   function new (string name=\"reg_rw_test\", uvm_component parent);\n      super.new (name, parent);\n   endfunction\n\n   // Note that main_phase comes after reset_phase, and is performed when\n   // DUT is out of reset. \"reset_phase\" is already defined in base_test\n   // and is always called when this test is started\n   virtual task main_phase(uvm_phase phase);\n      ral_sys_traffic   m_ral_model;\n      uvm_status_e      status;\n      int               rdata;\n\n      phase.raise_objection(this);\n\n      m_env.m_reg_env.set_report_verbosity_level (UVM_HIGH);\n      \n      // Get register model from config_db\n      uvm_config_db#(ral_sys_traffic)::get(null, \"uvm_test_top\", \"m_ral_model\", m_ral_model);\n      \n      // Write 0xcafe_feed to the timer[1] register, and read it back\n      m_ral_model.cfg.timer[1].write (status, 32'hcafe_feed);\n      m_ral_model.cfg.timer[1].read (status, rdata);\n      \n      // Set 0xface as the desired value for timer[1] register\n      m_ral_model.cfg.timer[1].set(32'hface);\n      `uvm_info(get_type_name(), $sformatf(\"desired=0x%0h mirrored=0x%0h\", m_ral_model.cfg.timer[1].get(), m_ral_model.cfg.timer[1].get_mirrored_value()), UVM_MEDIUM)\n      \n      // Predict that current value of timer[1] is 0xcafe_feed and check it is true\n      m_ral_model.cfg.timer[1].predict(32'hcafe_feed);\n      m_ral_model.cfg.timer[1].mirror(status, UVM_CHECK);\n      \n      // Set desired value of the field \"bl_yellow\" in register ctrl to 1\n      // Then start bus transactions by calling \"update\" to update DUT with \n      // desired value\n      m_ral_model.cfg.ctrl.bl_yellow.set(1);\n      m_ral_model.cfg.update(status);\n\n\t  // Attempt to write into a RO register \"stat\" with some value\n      m_ral_model.cfg.stat.write(status, 32'h12345678);\n      phase.drop_objection(this);\n   endtask\n\n  // Before end of simulation, allow some time for unfinished transactions to\n  // be over\n  virtual task shutdown_phase(uvm_phase phase);\n    super.shutdown_phase(phase);\n    phase.raise_objection(this);\n    #100ns;\n    phase.drop_objection(this);\n  endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "ncsim> run                                                                                                                                                                  \n----------------------------------------------------------------                                                                                                            \nCDNS-UVM-1.1d (15.20-s044)                                                                                                                                                  \n(C) 2007-2013 Mentor Graphics Corporation                                                                                                                                   \n(C) 2007-2013 Cadence Design Systems, Inc.\n(C) 2006-2013 Synopsys, Inc.\n(C) 2011-2013 Cypress Semiconductor Corp.\n----------------------------------------------------------------\nUVM_INFO @ 0: reporter [RNTST] Running test reg_rw_test...\nUVM_INFO ./tb/my_env.sv(215) @ 0: uvm_test_top.m_env.m_agent.m_seqr@@m_reset_seq [RESET] Running reset ...\nUVM_INFO ./tb/test_lib.sv(80) @ 110: uvm_test_top [reg_rw_test] desired=0xface mirrored=0xcafefeed\n\n--- UVM Report catcher Summary ---",
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
                "id": "cv-uvm-64",
                "num": 64,
                "title": "Using get_next_item()",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "uvm_driver is a child of uvm_component that has a TLM port to communicate with the sequencer. The driver is a parameterized class with the type of request and response sequence items. This allows the driver to send back a different sequence_item type back to the sequencer as the response. However, most drivers use a response object of the same type as the request sequence item.\n\nThe uvm_driver gets request sequence items (REQ) from the sequencer FIFO using a handshake mechanism and optionally returns a response sequence item (RSP) back to the sequencer response FIFO. There are primarily two ways for the driver to get a sequence item from the sequencer. In this article, we'll look at an example that uses the first style.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Using get_next_item method in a driver",
                        "content": "In this case, the driver requests for a sequence item from the sequencer using the get_next_item method through the seq_item_port TLM handle. Since the implementation of this port is defined in the sequencer, the function call makes the sequencer to pop an item from its internal FIFO and provide it to the driver via the argument provided in get_next_item method.\n\nOnce driver gets the next item, it can drive the data in the received sequence item to the DUT via a virtual interface handle. After the driver has finished driving the item, it has to let the sequencer know that the process has finished using item_done method.",
                        "code": "class my_driver extends uvm_driver #(my_data);\n\t`uvm_component_utils (my_driver)\n\t\n   virtual task run_phase(uvm_phase phase);\n      super.run_phase(phase);\n      \n      // 1. This task will get an item from the sequencer using get_next_item()\n      `uvm_info (\"DRIVER\", $sformatf (\"Waiting for data from sequencer\"), UVM_MEDIUM)\n      seq_item_port.get_next_item(req);\n      \n      // 2. For simplicity, lets just assume the driver drives the received packet\n      // during this time and consumes 20ns to complete driving the transaction\n      `uvm_info (\"DRIVER\", $sformatf (\"Start driving tx addr=0x%0h data=0x%0h\", req.addr, req.data), UVM_MEDIUM)\n      #20;\n      \n      // 3. After driver has finished the transaction, it has to let the sequencer know\n      // by calling item_done()\n      `uvm_info (\"DRIVER\", $sformatf (\"Finish driving tx addr=0x%0h data=0x%0h\", req.addr, req.data), UVM_MEDIUM)\n      seq_item_port.item_done();\n   endtask",
                        "lang": "verilog"
                    },
                    {
                        "title": "How does the sequencer get these sequence items ?",
                        "content": "A uvm_sequence is started on a sequencer which pushes the sequence item onto the sequencer's FIFO.",
                        "code": "class my_sequence extends uvm_sequence;\n\t`uvm_object_utils (my_sequence)\n\t\n\t\n  virtual task body();\n  \t// 1. Create an item the connected sequencer can accept\n    my_data tx = my_data::type_id::create(\"tx\");\n    `uvm_info (\"SEQ\", $sformatf(\"About to call start_item\"), UVM_MEDIUM)\n    \n    // 2. Call the start_item() task which will send this object to the driver\n    start_item(tx);\n    `uvm_info (\"SEQ\", $sformatf(\"start_item() fn call done\"), UVM_MEDIUM)\n    \n    // 3. Because the class handle passed to the driver points to the same object, we \n    // can do late randomization\n    tx.randomize();\n    `uvm_info (\"SEQ\", $sformatf(\"tx randomized with addr=0x%0h data=0x%0h\", tx.addr, tx.data), UVM_MEDIUM)\n    \n    // 4. Call finish_item method so that the sequence waits until the driver lets the \n    // sequencer know that this item has finished\n    finish_item(tx);\n    `uvm_info (\"SEQ\", $sformatf(\"finish_item() fn call done\"), UVM_MEDIUM)\n  endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Example",
                        "content": "To illustrate how the get and put method calls between driver and sequencer work, let us build a simple testbench structure like the one shown below.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Define a sequence item",
                        "content": "To keep things simple, let us define a transaction object class that will become the sequence item used for sequencer-driver communication. Assume that this sequence item contains two variables called addr and data.",
                        "code": "// Note that this class is dervide from \"uvm_sequence_item\"\nclass my_data extends uvm_sequence_item;\n  rand bit [7:0]   data;\n  rand bit [7:0]   addr;\n\n\t// Rest of the class contents come here ...\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Define the driver",
                        "content": "The uvm_driver is parameterized to accept a class object of the type my_data and the driver is expected to unpack this class object and drive the signals appropriately to the DUT via the interface.",
                        "code": "class my_driver extends uvm_driver #(my_data);\n   `uvm_component_utils (my_driver)\n   // Other parts of the driver code if they exist\n\n   virtual task run_phase(uvm_phase phase);\n      super.run_phase(phase);\n      \n      // 1. Get the next available item from the sequencer. If none exists, then wait until\n      // next item is available -> this is blocking in nature\n      `uvm_info (\"DRIVER\", $sformatf (\"Waiting for data from sequencer\"), UVM_MEDIUM)\n      seq_item_port.get_next_item(req);\n      \n      // 2. Let us assume that the driver actively does the pin wiggling of the DUT during this time and \n      // consider it takes 20ns\n      `uvm_info (\"DRIVER\", $sformatf (\"Start driving tx addr=0x%0h data=0x%0h\", req.addr, req.data), UVM_MEDIUM)\n      #20;\n      \n      // 3. After the driver has driven all data to the DUT, it should let the sequencer know that it finished \n      // driving the transaction by calling \"item_done\". Optionally the response packet can be passed along with\n      // the item_done method call and it will be placed in the sequencer's response FIFO\n      `uvm_info (\"DRIVER\", $sformatf (\"Finish driving tx addr=0x%0h data=0x%0h\", req.addr, req.data), UVM_MEDIUM)\n      seq_item_port.item_done();\n   endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Define the sequence",
                        "content": "A sequence item is always started using the start_item and finish_item methods.",
                        "code": "class my_sequence extends uvm_sequence #(my_data);\n  \t// Rest of the sequence code\n\n  \tvirtual task body();\n  \t\t// 1. Create a sequence item of the given type\n    \tmy_data tx = my_data::type_id::create(\"tx\");\n    \t`uvm_info (\"SEQ\", $sformatf(\"About to call start_item\"), UVM_MEDIUM)\n    \t\n    \t// 2. Start the item on the sequencer which will send this to the driver\n    \tstart_item(tx);\n    \t`uvm_info (\"SEQ\", $sformatf(\"start_item() fn call done\"), UVM_MEDIUM)\n    \t\n    \t// 3. Do some late randomization to create a different content in this transaction object\n    \ttx.randomize();\n    \t`uvm_info (\"SEQ\", $sformatf(\"tx randomized with addr=0x%0h data=0x%0h\", tx.addr, tx.data), UVM_MEDIUM)\n    \t\n    \t// 4. Call finish_item to let driver continue driving the transaction object or sequence item\n    \tfinish_item(tx);\n    \t`uvm_info (\"SEQ\", $sformatf(\"finish_item() fn call done\"), UVM_MEDIUM)\n  \tendtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Define the test class",
                        "content": "To keep things simple, let us directly create instances of the driver and sequencer inside the test class.\n\nDriver and Sequencer should be instantiated inside an agent. An agent is instantiated in an environment and the the environment in turn should be created in the test.",
                        "code": "class base_test extends uvm_test;\n\t// Rest of the test code is here\n\n\t// The sequencer is parameterized to accept objects of type \"my_data\" only\n  \tmy_driver                \tm_drv0;\n  \tuvm_sequencer #(my_data) \tm_seqr0;\n  \tmy_sequence   \t\t\t\tm_seq;\n\n\t// Build the sequencer and driver components\n  \tvirtual function void build_phase(uvm_phase phase);\n     \tsuper.build_phase(phase);\n     \tm_drv0 = my_driver::type_id::create (\"m_drv0\", this);\n     \tm_seqr0 = uvm_sequencer#(my_data)::type_id::create (\"m_seqr0\", this);\n  \tendfunction\n  \n   \t// Connect the sequencer \"export\" to the driver's \"port\"\n   \tvirtual function void connect_phase (uvm_phase phase);\n     \tsuper.connect_phase (phase);\n     \tm_drv0.seq_item_port.connect (m_seqr0.seq_item_export);\n   \tendfunction\n\n\t// Start the sequence on the given sequencer\n  \tvirtual task run_phase(uvm_phase phase);\n    \tm_seq = my_sequence::type_id::create(\"m_seq\");\n    \tphase.raise_objection(this);\n    \tm_seq.start(m_seqr0);\n    \tphase.drop_objection(this);\n  \tendtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test base_test...\nUVM_INFO testbench.sv(33) @ 0: uvm_test_top.m_top_env.m_drv0 [DRIVER] Waiting for data from sequencer\nUVM_INFO testbench.sv(71) @ 0: uvm_test_top.m_top_env.m_seqr0@@m_seq [SEQ] About to call start_item\nUVM_INFO testbench.sv(73) @ 0: uvm_test_top.m_top_env.m_seqr0@@m_seq [SEQ] start_item() fn call done\nUVM_INFO testbench.sv(75) @ 0: uvm_test_top.m_top_env.m_seqr0@@m_seq [SEQ] tx randomized with addr=0x8f data=0x1d\nUVM_INFO testbench.sv(35) @ 0: uvm_test_top.m_top_env.m_drv0 [DRIVER] Start driving tx addr=0x8f data=0x1d\nUVM_INFO testbench.sv(37) @ 20: uvm_test_top.m_top_env.m_drv0 [DRIVER] Finish driving tx addr=0x8f data=0x1d\nUVM_INFO testbench.sv(77) @ 20: uvm_test_top.m_top_env.m_seqr0@@m_seq [SEQ] finish_item() fn call done\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_objection.svh(1271) @ 20: reporter [TEST_DONE] 'run' phase is ready to proceed to the 'extract' phase\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_report_server.svh(847) @ 20: reporter [UVM/REPORT/SERVER] \n--- UVM Report Summary ---",
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
                "id": "cv-uvm-65",
                "num": 65,
                "title": "Transaction Object",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "A UVM transaction class typically defines all the input and output control signals that can be randomized and driven to the DUT.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Steps to create a UVM transaction object",
                        "content": "",
                        "code": "// my_object is user-given name for this class that has been derived from \"uvm_sequence_item\"\nclass my_object extends uvm_sequence_item;\n\t\n\t// This is standard code for all components\n\tfunction new (string name = \"my_object\", uvm_component parent = null);\n\t\tsuper.new (name, parent);\n\tendfunction\n\t\n\t// Code for rest of the steps come here\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "// Declare variables and make the ones that has to be randomized as \"rand\"\n\trand bit [15:0] addr;\n\trand bit [31:0] data;\n\trand bit [2:0]  burst;",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "`uvm_object_utils_begin (my_object)\n\t\t// Apply the given object macros to the corresponding variables\n\t\t`uvm_field_int (addr,  UVM_ALL_ON | UVM_NO_COMPARE)\n\t\t`uvm_field_int (data,  UVM_ALL_ON)\n\t\t`uvm_field_int (burst, UVM_ALL_ON)\n\t`uvm_object_utils_end",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "constraint c_addr { addr <= 16'hBFFF; }\n\tconstraint c_burst { burst inside {[0:4]}; }",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "function string convert2string();\n\t\treturn $sformatf(\"addr=0x%0h data=0x%0h burst=0x%0h\", addr, data, burst);\n\tendfunction",
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
                "id": "cv-uvm-66",
                "num": 66,
                "title": "Using get() and put()",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "In the previous article, we saw how a UVM driver gets the next item by the calling get_next_item method, and how it informs the sequencer that the current item is done. Although this is the preferred way for driver-sequencer communications, UVM also gives us an alternative for a more complex implementation.\n\nThe other way is for the driver to use the get method to receive the next item and later use put to give a response item back to the sequencer.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "What is the driver code for get and put calls ?",
                        "content": "",
                        "code": "class my_driver extends uvm_driver #(my_data);\n   `uvm_component_utils (my_driver)\n\n   virtual task run_phase(uvm_phase phase);\n      super.run_phase(phase);\n\n\t  // 1. Get an item from the sequencer using \"get\" method\n      seq_item_port.get(req);\n\n\t  // 2. For simplicity, lets assume the driver drives the item and consumes 20ns of simulation time\n      #20;\n\n\t  // 3. After the driver is done, assume it gets back a read data called 8'hAA from the DUT\n\t  // Assign the read data into the \"request\" sequence_item object\n      req.data = 8'hAA;\n\n\t  // 4. Call the \"put\" method to send the request item back to the sequencer\n      seq_item_port.put(req);\n   endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "How does the sequence start and stop an item ?",
                        "content": "",
                        "code": "class my_sequence extends uvm_sequence #(my_data);\n  `uvm_object_utils (my_sequence)\n\n  // Create a sequence item object handle to store the sequence_item contents\n  my_data tx;\n\n  virtual task body();\n  \t// 1. Create the sequence item using standard factory calls\n    tx = my_data::type_id::create(\"tx\");\n    \n    // 2. Start this item on the current sequencer\n    start_item(tx);\n    \n    // 3. Do late randomization since the class handle pointers are the same\n    tx.randomize();\n    \n    // 4. Finish executing the item from the sequence perspective\n    // The driver could still be actively driving and waiting for response\n    finish_item(tx);\n    \n    // 5. Because \"finish_item\" does not indicate that the driver has finished driving the item,\n    // the sequence has to wait until the driver explicitly tells the sequencer that the item is over\n    // So, wait unitl the sequence gets a response back from the sequencer.\n    get_response(tx);\n    \n    `uvm_info (\"SEQ\", $sformatf(\"get_response() fn call done rsp addr=0x%0h data=0x%0h, exit seq\", tx.addr, tx.data), UVM_MEDIUM)\n  endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Example",
                        "content": "To illustrate how the get and put method calls between driver and sequencer work, let us build a simple testbench structure like the one shown below.",
                        "code": null,
                        "lang": "verilog"
                    },
                    {
                        "title": "Define a sequence item",
                        "content": "To keep things simple, let us define a transaction object class that will become the sequence item used for sequencer-driver communication. Assume that this sequence item contains two variables called addr and data.",
                        "code": "// Note that this class is dervide from \"uvm_sequence_item\"\nclass my_data extends uvm_sequence_item;\n  rand bit [7:0]   data;\n  rand bit [7:0]   addr;\n\n\t// Rest of the class contents come here ...\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Define the driver",
                        "content": "The uvm_driver is parameterized to accept a class object of the type my_data and the driver is expected to unpack this class object and drive the signals appropriately to the DUT via the interface.",
                        "code": "class my_driver extends uvm_driver #(my_data);\n   `uvm_component_utils (my_driver)\n\n   virtual task run_phase(uvm_phase phase);\n      super.run_phase(phase);\n      \n      // 1. Get sequence item from the sequencer using \"get\" method.\n      // \"req\" is a pre-defined variable that comes with the class \"uvm_driver\"\n      `uvm_info (\"DRIVER\", $sformatf (\"Waiting for data from sequencer\"), UVM_MEDIUM)\n      seq_item_port.get(req);\n      \n      // 2. Assume that the driver drives this data during this time. For our purpose let's consider that the driver\n      // consumes 20ns of simulation time\n      `uvm_info (\"DRIVER\", $sformatf (\"Start driving tx addr=0x%0h data=0x%0h\", req.addr, req.data), UVM_MEDIUM)\n      #20;\n      \n      // 3. Lets also assume that the DUT returned some read data back to the driver, which needs to be sent back\n      // to the sequence. Note that read data is put into the same \"request\" class object handle \n      `uvm_info (\"DRIVER\", $sformatf (\"#20 delay over, curr data=0x%0h\", req.data), UVM_MEDIUM)\n      req.data = 8'hAA;\n      \n      // 4. The driver calls the \"put\" method and sends back the response data to the sequencer\n      `uvm_info (\"DRIVER\", $sformatf (\"About to call put() with new data=0x%0h\", req.data), UVM_MEDIUM)\n      seq_item_port.put(req);\n      `uvm_info (\"DRIVER\", $sformatf (\"Finish driving tx addr=0x%0h data=0x%0h\", req.addr, req.data), UVM_MEDIUM)\n   endtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Define the sequence",
                        "content": "A sequence item is always started using the start_item and finish_item methods.",
                        "code": "class my_sequence extends uvm_sequence #(my_data);\n  \t// Rest of the sequence code\n\n  \tvirtual task body();\n  \t\t// 1. Create a sequence item of the given type. Note that this sequence has an internal\n  \t\t// variable called \"req\" which can be directly used as well instead of \"tx\"\n  \t\tmy_data tx = my_data::type_id::create(\"tx\");\n    \t`uvm_info (\"SEQ\", $sformatf(\"About to call start_item\"), UVM_MEDIUM)\n    \t\n    \t// 2. Start the item on the sequencer which will send this to the driver\n    \tstart_item(tx);\n    \t`uvm_info (\"SEQ\", $sformatf(\"start_item() fn call done\"), UVM_MEDIUM)\n    \t\n    \t// 3. Do some late randomization to create a different content in this transaction object\n    \ttx.randomize();\n    \t`uvm_info (\"SEQ\", $sformatf(\"tx randomized with addr=0x%0h data=0x%0h\", tx.addr, tx.data), UVM_MEDIUM)\n    \t\n    \t// 4. Call finish_item to let driver continue driving the transaction object or sequence item\n    \tfinish_item(tx);\n    \t`uvm_info (\"SEQ\", $sformatf(\"finish_item() fn call done, wait for rsp\"), UVM_MEDIUM)\n    \t\n    \t// 5. Wait for the driver to finish driving the object, and respond back with a response object\n    \t// The transaction is said to be complete at this point. This task is blocking in nature and hence\n    \t// the sequence will end only after the driver returns a response item.\n    \tget_response(tx);\n    \t`uvm_info (\"SEQ\", $sformatf(\"get_response() fn call done rsp addr=0x%0h data=0x%0h, exit seq\", tx.addr, tx.data), UVM_MEDIUM)\n  \tendtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Define the test class",
                        "content": "To keep things simple, let us directly create instances of the driver and sequencer inside the test class.\n\nDriver and Sequencer should be instantiated inside an agent. An agent is instantiated in an environment and the the environment in turn should be created in the test.\n\nNote that finish_item finished at time 0ns even before the driver started doing the pin wiggling (assumed to happen during the 20ns delay in this example). The get_response method is done at time 20ns when the driver sends back the response item.\n\nIt is also evident from the log that the data modified in the request packet within the driver can be obtained inside the sequence.",
                        "code": "class base_test extends uvm_test;\n\t// Rest of the test code is here\n\n\t// The sequencer is parameterized to accept objects of type \"my_data\" only\n  \tmy_driver                \tm_drv0;\n  \tuvm_sequencer #(my_data) \tm_seqr0;\n  \tmy_sequence   \t\t\t\tm_seq;\n\n\t// Build the sequencer and driver components\n  \tvirtual function void build_phase(uvm_phase phase);\n     \tsuper.build_phase(phase);\n     \tm_drv0 = my_driver::type_id::create (\"m_drv0\", this);\n     \tm_seqr0 = uvm_sequencer#(my_data)::type_id::create (\"m_seqr0\", this);\n  \tendfunction\n  \n   \t// Connect the sequencer \"export\" to the driver's \"port\"\n   \tvirtual function void connect_phase (uvm_phase phase);\n     \tsuper.connect_phase (phase);\n     \tm_drv0.seq_item_port.connect (m_seqr0.seq_item_export);\n   \tendfunction\n\n\t// Start the sequence on the given sequencer\n  \tvirtual task run_phase(uvm_phase phase);\n    \tm_seq = my_sequence::type_id::create(\"m_seq\");\n    \tphase.raise_objection(this);\n    \tm_seq.start(m_seqr0);\n    \tphase.drop_objection(this);\n  \tendtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "Click to try this example in a simulator!",
                        "code": "UVM_INFO @ 0: reporter [RNTST] Running test base_test...\nUVM_INFO testbench.sv(33) @ 0: uvm_test_top.m_top_env.m_drv0 [DRIVER] Waiting for data from sequencer\nUVM_INFO testbench.sv(76) @ 0: uvm_test_top.m_top_env.m_seqr0@@m_seq [SEQ] About to call start_item\nUVM_INFO testbench.sv(78) @ 0: uvm_test_top.m_top_env.m_seqr0@@m_seq [SEQ] start_item() fn call done\nUVM_INFO testbench.sv(80) @ 0: uvm_test_top.m_top_env.m_seqr0@@m_seq [SEQ] tx randomized with addr=0x8f data=0x1d\nUVM_INFO testbench.sv(35) @ 0: uvm_test_top.m_top_env.m_drv0 [DRIVER] Start driving tx addr=0x8f data=0x1d\nUVM_INFO testbench.sv(82) @ 0: uvm_test_top.m_top_env.m_seqr0@@m_seq [SEQ] finish_item() fn call done, wait for rsp\nUVM_INFO testbench.sv(37) @ 20: uvm_test_top.m_top_env.m_drv0 [DRIVER] #20 delay over, curr data=0x1d\nUVM_INFO testbench.sv(39) @ 20: uvm_test_top.m_top_env.m_drv0 [DRIVER] About to call put() with new data=0xaa\nUVM_INFO testbench.sv(41) @ 20: uvm_test_top.m_top_env.m_drv0 [DRIVER] Finish driving tx addr=0x8f data=0xaa\nUVM_INFO testbench.sv(84) @ 20: uvm_test_top.m_top_env.m_seqr0@@m_seq [SEQ] get_response() fn call done rsp addr=0x8f data=0xaa, exit seq\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_objection.svh(1271) @ 20: reporter [TEST_DONE] 'run' phase is ready to proceed to the 'extract' phase\nUVM_INFO /playground_lib/uvm-1.2/src/base/uvm_report_server.svh(847) @ 20: reporter [UVM/REPORT/SERVER] \n--- UVM Report Summary ---",
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
                "id": "cv-uvm-67",
                "num": 67,
                "title": "HDL access routines",
                "desc": "A comprehensive UVM tutorial chapter extracted directly from ChipVerify syllabus.",
                "sections": [
                    {
                        "title": "Introduction",
                        "content": "UVM has the facility of doing backdoor reads from HDL paths via DPI/PLI interface.\n\nConsider a simple design hierarchy shown below for illustration purposes. We also need a testbench to instantiate the design and start the test.",
                        "code": "module B;\n\treg [3:0] cfg;\nendmodule\n\nmodule A;\n\tB b;\nendmodule\n\n// Testbench module\nmodule tb;\n\tA a();\n\tinitial \n\t\trun_test(\"base_test\");\nendmodule",
                        "lang": "verilog"
                    },
                    {
                        "title": "uvm_hdl_check_path",
                        "content": "This method returns 1 if the given HDL path exists, else it returns a 0.",
                        "code": "import \"DPI-C\" context function int uvm_hdl_check_path (string path);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "class base_test extends uvm_test;\n\t...\n\tvirtual function void build_phase (uvm_phase phase);\n\t\tif (uvm_hdl_check_path (\"tb.a.b.cfg\"))\n\t\t\t`uvm_info (\"TEST\", \"Path tb.a.b.cfg exists\", UVM_MEDIUM)\n\t\t\t\n\t\tif (!uvm_hdl_check_path (\"tb.a.def\"))\n\t\t\t`uvm_info (\"TEST\", \"Path tb.a.def does not exist\", UVM_MEDIUM)\n\tendfunction\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "uvm_hdl_deposit",
                        "content": "This method deposits the given value onto the HDL path and returns 1 if successful, else 0.",
                        "code": "import \"DPI-C\" context function int uvm_hdl_deposit (string path, uvm_hdl_data_t value);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "class base_test extends uvm_test;\n\t...\n\t\n\tvirtual task run_phase (uvm_phase phase);\n\t\tif (! uvm_hdl_deposit(\"tb.a.b.cfg\", 4'h9))\n\t\t\t`uvm_error (\"TEST\", \"Deposit on tb.a.b.cfg failed\", UVM_MEDIUM)\n\tendtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "uvm_hdl_force",
                        "content": "This method forces the value on the given path and returns 1 if successful, else it returns 0. The difference between uvm_hdl_force and uvm_hdl_deposit is that the former has to be released at some point later in time for the original net to be able to drive the signal. For uvm_hdl_deposit, the value is simply placed onto the net and will persist until the original net drives some other value onto it.",
                        "code": "import \"DPI-C\" context function int uvm_hdl_force (string path, uvm_hdl_data_t value);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "class base_test extends uvm_test;\n\t...\n\t\n\tvirtual task run_phase (uvm_phase phase);\n\t\tif (! uvm_hdl_force(\"tb.a.b.cfg\", 4'h9))\n\t\t\t`uvm_error (\"TEST\", \"Force on tb.a.b.cfg failed\", UVM_MEDIUM)\n\tendtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "uvm_hdl_force_time",
                        "content": "Forces the given value onto the HDL path for the specified amount of time. If force_time is 0, uvm_hdl_deposit will be called. Again, this method returns 1 if successful, else 0. The difference between this method and uvm_hdl_force is that the latter has to be released some time later, while this method automatically releases the force after the given time.",
                        "code": "task uvm_hdl_force_time (string path, uvm_hdl_data_t value, time force_time = 0);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "class base_test extends uvm_test;\n\t...\n\t\n\tvirtual task run_phase (uvm_phase phase);\n\t\tif (! uvm_hdl_force_time(\"tb.a.b.cfg\", 4'h9, 30))\n\t\t\t`uvm_error (\"TEST\", \"Force on tb.a.b.cfg failed\", UVM_MEDIUM)\n\tendtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "uvm_hdl_release_and_read",
                        "content": "This releases the value previously set by uvm_hdl_force and returns 1 if it is successful, else 0. The value provided as an argument to this method is applied to the HDL after it is released.",
                        "code": "import \"DPI-C\" context function int uvm_hdl_release_and_read (string path, inout uvm_hdl_data_t value);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "class base_test extends uvm_test;\n\t... \n\t\n\tvirtual task run_phase (uvm_phase phase);\n\t\tif (! uvm_hdl_release_and_read(\"tb.a.b.cfg\", 4'hE))\n\t\t\t`uvm_error (\"TEST\", \"Release on tb.a.b.cfg failed\", UVM_MEDIUM)\n\tendtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "uvm_hdl_release",
                        "content": "This method will release the value previously forced on the given HDL path with uvm_hdl_force and returns 1 if successful, else 0.",
                        "code": "import \"DPI-C\" context function int uvm_hdl_release (string path);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "class base_test extends uvm_test;\n\t... \n\t\n\tvirtual task run_phase (uvm_phase phase);\n\t\tif (! uvm_hdl_release(\"tb.a.b.cfg\"))\n\t\t\t`uvm_error (\"TEST\", \"Release on tb.a.b.cfg failed\", UVM_MEDIUM)\n\tendtask\nendclass",
                        "lang": "verilog"
                    },
                    {
                        "title": "uvm_hdl_read",
                        "content": "Reads the current value on the given HDL path and returns 1 if successful, else 0.",
                        "code": "import \"DPI-C\" context function int uvm_hdl_read (string path, output uvm_hdl_data_t value);",
                        "lang": "verilog"
                    },
                    {
                        "title": "Code Example",
                        "content": "",
                        "code": "class base_test extends uvm_test;\n\t... \n\t\n\tvirtual task run_phase (uvm_phase phase);\n\t\tint rdata;\n\t\tif (! uvm_hdl_read(\"tb.a.b.cfg\", rdata))\n\t\t\t`uvm_error (\"TEST\", \"Read from tb.a.b.cfg failed\", UVM_MEDIUM)\n\tendtask\nendclass",
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
