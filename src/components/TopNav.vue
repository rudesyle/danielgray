<template>
<div>
  <div class="container">
		<ul id="menu" >
			<li id="liHome" class="menuLi"><a href="#" accesskey="1" title="" onClick="changePage('Home');">Homepage</a></li>
			<li id="liServices" class="menuLi"><a href="#" accesskey="1" title="" onClick="changePage('Services');">Services</a></li>
      <li id="logo"><font-awesome-icon icon="fa-solid fa-face-angry" />Rude Coders!</li>
			<li id="liTech" class="menuLi"><a href="#" accesskey="2" title="" onClick="changePage('Tech');">Technologies</a></li>
			<li id="liContact" class="menuLi"><a href="#" accesskey="5" title="" onClick="changePage('Contact');">Contact Us</a></li>
		</ul> 

	</div>
</div>
</template>


<style>
.container
	{
		margin: 0px auto;
		width: 1200px;
	}
	#menu
	{
		background: #292929;
	}
	
	#menu ul
	{
		margin: 0;
		padding: 0px 0px 0px 0px;
		list-style: none;
		line-height: normal;
		text-align: center;
	}
	
	#menu li
	{
		display: inline-block;
	}
	
	#menu a
	{
		display: block;
		padding: 0em 2em;
		line-height: 80px;
		letter-spacing: 1px;
		text-decoration: none;
		text-transform: uppercase;
		font-size: 1em;
		font-weight: 700;
		color: #838383;
	}
	
	#menu .current_page_item a
	{
		background: #01A9DC;
		color: #FFF;
	}
	
	#menu a:hover
	{
		text-decoration: none;
		color: #FFF;
	}

  @media screen and (max-width: 600px) {
    #menu {
      visibility: hidden;
      display: none;
    }
    #hamburger {
      visibility: visible;
      display: block;
    }
  }

  @media screen and (min-width: 599px) {
    #menu {
      
      visibility: visible;
      display: block;
    }
    #hamburger {
      visibility: hidden;
      display: none;
    }
  }

  	#logo
	{
		margin: 4em auto 4em auto;
		text-transform: uppercase;
	}
	
	#logo h1
	{
		font-size: 2.2em;
		color: #292929;
	}
	
	#logo h1 a
	{
		margin-left: 0.50em;
		text-decoration: none;
		font-size: 1.5em;
		color: #292929;
	}
	
	#logo span
	{
		color: #01A9DC;
	}

	#logo .icon-size
	{
		padding-top: 0.20em;
		font-size: 2em !important;
		color: #01A9DC;
	}
	
	#logo p
	{
		margin: 0;
		padding: 0 0 0 5em;
		letter-spacing: 0.10em;
		font-size: 0.90em;
		color: #828282;
	}

	#logo p a
	{
		text-decoration: none;
		color: #828282;
	}

</style>
