var OS=require('os');


console.log(OS.platform());//Returns a string identifying the operating system platform
console.log(OS.freemem());//Returns the amount of free system memory in bytes as an integer
console.log(OS.hostname());//Returns the host name of the operating system as a string
console.log(OS.tmpdir());//Returns the operating system's default directory for temporary files as a string
console.log(OS.type());//Returns the operating system name
console.log(OS.arch());//Returns the operating system CPU
console.log(OS.release());//Returns the operating system as a string

