<p><strong>Objective:</strong></p>
<p>Learn how to use to control when an effect runs with&nbsp; <code>useEffect</code> and its array of dependencies.</p>
<p><strong>Instructions:</strong>&nbsp;</p>
<p>This one is just for fun! We want this candle to reduce its height as time passes. From the CSS point of view, that can be achieved by modifying the height of the&nbsp;<code>candleContainer</code> or assigning a <code>style</code> prop that assigns the desired height, e.g. <code>style={{ height: 85%}}</code></p>
<p>We want to let an effect control this of course.</p>
<ul>
<li>Create an Effect that reduces the height of the candle every 2 seconds</li>
<li>Be sure you use a cleanup function!</li>
<li>Because fire is dangerous, make sure to reset the candle height from the effect as soon as it reaches 10%</li>
<li>Infinite candles :D&nbsp;</li>
</ul>