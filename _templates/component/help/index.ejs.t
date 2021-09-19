---
message: |

  #############################
  #                           #
  #  Generate react component #
  #                           #
  #############################

  command:
  - hygen {bold component} [function|class] [NAME] --into [group folder] --lang [true|false]

  Example:
  - hygen {bold component} class ChargerMap --into Search --lang true
  - hygen {bold component} function ChargerMap --into Search --lang false
  
  
---