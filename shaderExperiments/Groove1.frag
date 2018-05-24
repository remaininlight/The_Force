void main () {
    vec2 st = uv(); vec2 stN = uvN();
    float theta = atan(st.x, st.y)/PI2 +.5; float phi = log(length(st)) * .8;
    vec3 c = black;

    float a = (groove.x < 0.0) ? (groove.x * -1.0) : groove.x;
    //float a = (groove.x < 0.0) ? 0.0 : groove.x;

    //a = a;
    //a = 1.0;
    //float f = noise(vec2(st.y + groove.x, time));
    float f = noise(vec2(a, time));

    f = pow(f, 9.) * 15.;
    //float f2 = noise(vec2(st.y + groove.y, time));
    float f2 = noise(vec2(a, time));

    f2 = pow(f2, 9.) * 15.;
    //float f3 = noise(vec2(st.y + groove.z, time));
    float f3 = noise(vec2(a, time));

    f3 = pow(f3, 9.) * 15.;

    //c += f * blue + f2 * yellow + f3 * red;
    c += a;
    
    float ff = noise(rotate(stN * 5., vec2(5., 5.), time * .1));
    //  c =  step(bands.x, ff);
    c *= ff;
    //  c *=  ff * 30.;

    vec3 bb =  texture2D(backbuffer, stN).rgb;
    c = mix(c, bb, .0) + c * .0;

	gl_FragColor = vec4(c, 1.0);
}