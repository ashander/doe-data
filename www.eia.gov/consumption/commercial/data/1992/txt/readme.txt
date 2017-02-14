             92 CBECS MICRODATA FILE SPECIFICATIONS
                           _README.TXT


The 18 Public Use Data files of the 1992 Commercial Buildings Energy Consumption
Survey (CBECS) data were constructed in ASCII (i.e. CE92F01T.TXT) and dBASE
(CE92F01D.DBF) format.   These files contain the 1992 CBECS basic data including
building characteristics, energy consumption and expenditures, and temperature
data.  All files contain 6,734 records which represent commercial buildings from
the 50 States and the District of Columbia. Each record corresponds to a single,
responding, in-scope sampled building. The records are comma-delimited, with
fixed column positions, as described in Appendix A of the documentation. NOTE:
Tabulations produced from these public use diskettes will not necessarily
coincide with those from the reports.  Several cases of unusually high natural
gas consumption were discovered after publishing the Commercial Buildings Energy
Consumption and Expenditure 1992 report.  Data for these buildings have
subsequently been imputed. In addition, some masking of the data was undertaken
for confidentiality purposes. (see Technical Note 1 in the documentation)  

Documentation, that includes the file layout (Appendix A) and SAS formats
(Appendix B) is in technical documentation file, CE92TECH.PDF (Acrobat version),
also, CE92TECH.PS (Postscript version), CE92TECH.TXT (ASCII version) and
CE92TECH.W51 (WordPerfect 5.1 version) are available upon requesting, Please
contact David Chu at (202) 586-1121, or E-mail to dchu@eia.doe.gov.  

The files are GROUP-ZIP files.  The procedure to UNZIP a GROUP-ZIP file, i.e.
c920105t.zip, follows: (1) copy c920105t.zip onto your hard drive C, (2) on your
hard C prompt, use PKUNZIP.EXE program, by typing PKUZIP C920105T -d, process
will be performed.

NOTE: All 18 ASCII format data files contain a value signified by the SPACE " "
character. Software such as dBASE, LOTUS, QUATTRO PRO do not have the capability
to directly handle such a SPACE " " value.  All variables are delimited by COMMAs
",".

The 18 data files (both ASCII and DBASE format) are organized by subject matter,
and also contain the following core variables: (1) the building ID (the link
between diskettes); (2) the adjusted sampling weight; (3) the variance stratum
and pair member; (4) the Census region and division; (5) the square footage
category; (6) the principal building activity; (7) the year constructed category;
and (8) a set of variables indicating whether electricity, natural gas, fuel oil,
district steam or district hot water was used in the building.

It is hoped that the organization of the data among the files will allow many
analyses to be conducted using one file.

C920105T.ZIP and C920105D.ZIP contain the following files:
     File 1:   CE92F01T.TXT  General Building Information
               Record Length: 251 bytes

     File 2:   CE92F02T.TXT  Building Activity, Building Ownership and
               Occupancy
               Record Length: 245 bytes

     File 3:   CE92F03T.TXT  Operating Hours and Weather
               Record Length: 229 bytes

     File 4:   CE92F04T.TXT  Heating and Cooling Equipment and
               Distribution  
               Record Length: 222 bytes

     File 5:   CE92F05T.TXT  End Uses of Major Energy Sources
               Record Length: 175 bytes
C920610T.ZIP and C920610D.ZIP contain the following files:  
     File 6:   CE92F06T.TXT  Minor Energy Sources, Refrigeration and Water
               Heating Equipment, Electricity Generation, and Multibuilding
               Facilities
               Record Length: 143 bytes

     File 7:   CE92F07T.TXT  Lighting Equipment and Conservation Features 
               Record Length: 247 bytes

     File 8:   CE92F08T.TXT Imputation Flags for Energy Sources and End Uses
               Record Length: 240 bytes

     File 9:   CE92F09T.TXT Imputation Flags for Heatieating, Cooling,
               Refrigeration and Water Heating Equipment and Electricity
               Generation
               Record Length: 248 bytes

     File 10:  CE92F10T.TXT  Imputation Flags for General Information Building
               Activity, Operating Hours
               Record Length: 252 bytes

C921115T.ZIP and C921115D.ZIP contain the following files:  
     File 11:  CE92F11T.TXTImputation Flags for Special Technologies,
               Lighting Equipment, Conservation
               Record Length: 246 bytes

     File 12:  CE92F12T.TXT  Electricity and Demand-Side Management
               Record Length: 189 bytes

     File 13:  CE92F13T.TXT Natural Gas
               Record Length: 217 bytes

     File 14:  CE92F14T.TXT Fuel Oil
               Record Length: 123 bytes

     File 15:  CE92F15T.TXT  District Heat
               Record Length: 197 bytes

C921618T.ZIP and C921618D.ZIP contain the following files:
     File 16:  EU92F16T.TXT  Consumption of Electricity by End Use
               Record Length: 187 bytes

     File 17:  EU92F17T.TXT  Consumption of Natural Gas, Fuel Oil, and
               District Heat by End Use
               Record Length: 202 bytes

     File 18:  EU92F18T.TXT  Consumption of Major Fuels by End Use
               Record Length: 187 bytes
 