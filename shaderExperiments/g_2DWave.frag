void main()
{
    //vec2 w = texture(iChannel0, fragCoord.xy / iResolution.xy).xy;
	//fragColor = vec4(w.x,-w.x,w.y*w.y*2.,1.);
    //fragColor = mix(fragColor,texture(iChannel1, fragCoord.xy / iResolution.xy),1.-iMouse.x/iResolution.x);
    
    vec2 st = uv(); vec2 stN = uvN();
    //vec2 w = texture2D(groove.x, st).xy;
    vec2 w = texture2D(backbuffer, stN).xy;

    vec4 fragColor = vec4(1, 0, 1, 0);
    gl_FragColor = mix(fragColor,texture(iChannel1, fragCoord.xy / iResolution.xy),1.-0.5);
}