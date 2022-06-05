<template>
  <Layout>
    <div id="three-column" class="container">
      
			<div><span class="arrow-down"></span></div>
			<div id="tbox1"> <font-awesome-icon icon="fa-solid fa-dashboard" class="icon"/>
				<div class="title">
					<h2>Web<br/>Development</h2>
				</div>
				<p>From the latest JavaScript libraries to the most robust server technology platforms to the cloud, nobody knows the Web like we do.</p>
				<a href="#" class="button">Learn More</a> </div>
			<div id="tbox2"> <font-awesome-icon icon="fa-solid fa-mobile-phone" class="icon"  size="2x"/>
				<div class="title">
					<h2>Mobile<br/>Development</h2>
				</div>
				<p>Android, IOS, hybrid app, or maybe just a responsive web site. We will work with you to bring your idea to market.</p>
				<a href="#" class="button">Learn More</a> </div>
			<div id="tbox3"><font-awesome-icon icon="fa-solid fa-wrench" class="icon"/>
				<div class="title">
					<h2>Software Maintenance</h2>
				</div>
				<p>
					Have an existing application that needs maintained or enhanced? Give us a call, we do this all the time!
				</p>
				<a href="#" class="button">Learn More</a> </div>
		</div>
    <div id="page">
			<div><span class="arrow-down"></span></div>
			<div id="box1">
				<div class="title">
					<h2>Have an idea for an app?</h2>
				</div>
				<p>Give us a call or drop us a <a href="#" accesskey="5" title="" onClick="changePage('Contact');">message</a>. We love discussing tech
				and offering ideas, even if you decide not to work with us.  We do this free of charge</p>
			</div>
			<div id="box2">
				<div class="title">
					<h2>Need to rent a developer?</h2>
				</div>
				<p>
					We get calls all the time from companies and consulting service shops that have a need for a developer, sometimes for a few days, sometimes much longer. 
					Our wide range knowledge on current (and no-so current) technologies allows us to get up to speed in no time at all on any project.
				</p>	
			</div>	
		</div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'The Rude Coders'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
.container
	{
		margin: 0px auto;
		width: 1200px;
	}
  /*********************************************************************************/
/* Three Columns                                                                 */
/*********************************************************************************/

	#three-column
	{
		overflow: hidden;
		text-align: center;
		color: #525252;
	}
	
	#three-column h2
	{
		margin: 1em 0em;
		text-transform: uppercase;
		font-size: 1.5em;
		font-weight: 700;
		color: #454445;
	}
	
	#three-column .icon
	{
		position: relative;
		display: block;
		margin: 0px auto 0.80em auto;
		line-height: 150px;
		font-size: 4em;
		background: #FFF;
		padding:30px;
    border-radius: 50%;
		border: 6px solid #00A4D9;
		text-align: center;
		color: #00A4D9;
	}
		
	#three-column #tbox1,
	#three-column #tbox2,
	#three-column #tbox3
	{
		float: left;
		width: 320px;
		padding: 80px 40px 80px 40px;
	}
	
	#three-column .title
	{
		letter-spacing: 0.10em;
		text-align: center;
		text-transform: uppercase;
	}
	
	#three-column .title h2
	{
		font-size: 1.60em;
		font-weight: 900;
		font-family: 'Open Sans', sans-serif;
		color: #00A4D9;
	}
	
	#three-column .title .byline
	{
		padding-top: 0.50em;
		font-size: 0.90em;
		color: #858585;
	}

	#three-column .arrow-down
	{
		border-top-color: #292929;
	}


.pageDiv{
	display: none;
}

/*********************************************************************************/
/* Page                                                                          */
/*********************************************************************************/

	#page
	{
		overflow: hidden;
		width: 1100px;
		padding: 0em 50px 5em 50px;
		background: #F4F4F4;
		color: #191919;
	}
	
	#page .arrow-down {
		border-top-color: #FFF !important;
	}
	
	#page .title
	{
		padding: 3em 0em;
		letter-spacing: 0.10em;
		text-transform: uppercase;
	}
	
	#page .title h2
	{
		font-size: 2em;
		color: #474747;
	}
	
	#page .title .byline
	{
		padding-top: 0.50em;
		font-size: 0.90em;
		color: #858585;
	}

	#page #box1
	{
		float: left;
		width: 500px;
	}

	#page #box2
	{
		float: right;
		width: 500px;
	}
	
	#page a
	{
		color: #01A9DC;
	}

</style>
