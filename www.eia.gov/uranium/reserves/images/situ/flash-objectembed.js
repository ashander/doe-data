function writeFlashObjectEmbed(longdesc, htmlAttributes, heightWidth, flashCodeBase, srcString, extraParamTags, extraEmbedAttributes, pluginPage)
{
	document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + longdesc + htmlAttributes + heightWidth + ' codebase="' + flashCodeBase + '"><param name="MOVIE" value="' + srcString + '" />' + extraParamTags + '<embed' + extraEmbedAttributes + longdesc + htmlAttributes + heightWidth + ' type="application/x-shockwave-flash" pluginspage="' + pluginPage + '" src="' + srcString + '"></embed></object>');
}

var flashObjectEmbed = 1;
