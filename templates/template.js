// * @ package monkey-go-config-file-generator
// * @ author zwiebus

let template = {};
 template.type = "standard";
 template.standard = `[GENERAL]
# Target for handling nzb files - EXECUTE, SABNZBD, NZBGET or SYNOLOGYDLS
%pgEXECUTE%
# Let the monkey choose a category. Values are: off, auto, manual
%pgcategorize%
# seconds to wait befor ending/closing the window after success
%pgsuccess_wait_time%
# seconds to wait befor ending/closing the window after an error
%pgerror_wait_time%
# Write debug log to logfile.txt on windows/osx (same dir as nzb-monkey-go) or /tmp/nzb-monkey-go.log on linux
%pgdebug%

[EXECUTE]
# Extend password to filename {{password}}
%pgpasstofile%
# Copy password to clipboard
%pgpasstoclipboard%
# Path to save nzb files
# Either an absolute path or a path relative to the user's home directory
%pgnzbsavepath%
# Don't execute default programm for .nzb
%pgdontexecute%
# Delete old NZB files from nzbsavepath
%pgclean_up_enable%
# NZB files older than x days will be deleted
%pgclean_up_max_age%

[SABNZBD]
# SABnzbd Hostname
%pghost%
# SABnzbd Port
%pgport%
# Use https
%pgssl%
# skip SSL security checks (e.g. for self signed certificates)
%pgskip_check%
# NZB Key
%pgnzbkey%
# Basic Auth Username
%pgbasicauth_username%
# Basic Auth Password
%pgbasicauth_password%
# Basepath
%pgbasepath%
# Category
%pgcategory%
# Add the nzb paused to the queue
%pgaddpaused%
# Add compression on upload, either "none" or "zip"
%pgcompression%

[NZBGET]
# NZBGet Host
%pghostnget%
# NZBGet Port
%pgportnget%
# Use https
%pgsslnget%
# skip SSL security checks (e.g. for self signed certificates)
%pgskip_check_nget%
# NZBGet Username
%pgusernget%
# NZBGet Password
%pgpassnget%
# Basepath
%pgbasepathnget%
# NZBGet Category
%pgcategorynget%
# Add the nzb paused to the queue
%pgaddpausednget%

[SYNOLOGYDLS]
# Downloadstation Host
%pghostsyn%
# Downloadstation Port
%pgportsyn%
# Use https
%pgsslsyn%
# skip SSL security checks (e.g. for self signed certificates)
%pgskip_check_syn%
# Downloadstation Username
%pgusersyn%
# Downloadstation Password
%pgpasssyn%
# Basepath
%pgbasepathsyn%

[NZBCheck]
# Don't skip failed nzb
%pgskip_failed%
# Max missing failed segments
%pgmax_missing_segments_percent%
# Max missing failed files
%pgmax_missing_files%
# Use always all Searchengines to find the best NZB
%pgbest_nzb%

[CATEGORIZER]
# Place your category and your regex here
# Please uncomment the following lines
%pgseries%
%pgmovies%
%pgetc%
%pgetc2%
%pgetc3%

[SEARCHENGINES]
# Set values between 0-9
# 0 = disabled; 1-9 = enabled; 1-9 are also the order in which the search engines are used
# More than 1 server with the same order number is allowed
# Enable NZBIndex
%pgnzbindex%
# Enable NZBKing
%pgnzbking%
# Enable Binsearch
%pgbinsearch%
# Enable nzb direct search (settings for the nzb direct search required)
%pgdirectsearch%

# Settings for the nzb direct search
[DIRECTSEARCH]
# Your usenet server host name
%pghostdir%
# Your usenet server port number
%pgportdir%
# Use SSL
%pgssldir%
# Your usenet account username
%pgusername%
# Your usenet account password
%pgpassworddir%
# Maximum allowed connections to your usenet server (default = 20)
%pgconnections%
# Number of hours to search back from the provided date (default = 12)
%pghours%
# Number of hours to search forward from the provided date (default = 12)
%pgforward_hours%
# Number of parallel scans (default = 50)
%pgscans%
# Number of articles to load per scan (default = 20000)
%pgstep%
# Skip direct search when using best_nzb and a good NZB file has already been found
%pgskipdir%
# Search only in the first group if several groups are provided
%pgfirst_group_only%

`;
