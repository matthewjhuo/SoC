export const rawUvmSrc = [
  {
    "file": "base/uvm_component.svh",
    "code": "virtual class uvm_component extends uvm_report_object;",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern function new (string name, uvm_component parent);",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern virtual function uvm_component get_parent ();",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern virtual function string get_full_name ();",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern function void get_children(ref uvm_component children[$]);",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern function uvm_component get_child (string name);",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern function int get_next_child (ref string name);",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern function int get_first_child (ref string name);",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern function int get_num_children ();",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern function int has_child (string name);",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern virtual function void set_name (string name);",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern function uvm_component lookup (string name);",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern function int unsigned get_depth();",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern virtual function void build_phase(uvm_phase phase);",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern virtual function void connect_phase(uvm_phase phase);",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern virtual function void end_of_elaboration_phase(uvm_phase phase);",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern virtual function void start_of_simulation_phase(uvm_phase phase);",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern virtual task run_phase(uvm_phase phase);",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern virtual task pre_reset_phase(uvm_phase phase);",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern virtual task reset_phase(uvm_phase phase);",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern virtual task post_reset_phase(uvm_phase phase);",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern virtual task pre_configure_phase(uvm_phase phase);",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern virtual task configure_phase(uvm_phase phase);",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern virtual task post_configure_phase(uvm_phase phase);",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern virtual task pre_main_phase(uvm_phase phase);",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern virtual task main_phase(uvm_phase phase);",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern virtual task post_main_phase(uvm_phase phase);",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern virtual task pre_shutdown_phase(uvm_phase phase);",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern virtual task shutdown_phase(uvm_phase phase);",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern virtual task post_shutdown_phase(uvm_phase phase);",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern virtual function void extract_phase(uvm_phase phase);",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern virtual function void check_phase(uvm_phase phase);",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern virtual function void report_phase(uvm_phase phase);",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern virtual function void final_phase(uvm_phase phase);",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern virtual function void phase_started (uvm_phase phase);",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern virtual function void phase_ready_to_end (uvm_phase phase);",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern virtual function void phase_ended (uvm_phase phase);",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern function void set_domain(uvm_domain domain, int hier=1);",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern function uvm_domain get_domain();",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern virtual protected function void define_domain(uvm_domain domain);",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern function void set_phase_imp(uvm_phase phase, uvm_phase imp, int hier=1);",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern virtual function void build();",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern virtual function void connect();",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern virtual function void end_of_elaboration();",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern virtual function void start_of_simulation();",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern virtual task run();",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern virtual function void extract();",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern virtual function void check();",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern virtual function void report();",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  },
  {
    "file": "base/uvm_component.svh",
    "code": "extern virtual task suspend ();",
    "desc": "Extracted standard signature from base/uvm_component.svh"
  }
];