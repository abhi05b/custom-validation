# custom-validation

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.12.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

<div style="display: block; text-align: left;"><a imageanchor="1" href="https://sites.google.com/site/uifrontenddoc/customvalidation/CustomValidation.png"><img src="https://sites.google.com/site/uifrontenddoc/customvalidation/CustomValidation.png" border="0"></a></div>
Directives used for client side form validation framework :
<div><br>
<div><b style="line-height:1.5;background-color:transparent">1) form-validation</b><span style="line-height:1.5;background-color:transparent"> : The directive acts as a container for the form elements which are part of form validation.&nbsp;</span><br>
<div><br>
</div>
</div>
<div><span>&nbsp;&nbsp; &nbsp;<span>&nbsp;<b>Usage</b>:&nbsp;</span></span><span style="line-height:1.5;background-color:transparent">This can be used as an attribute or an element.</span></div>
<div>
<ul><li><span style="line-height:1.5;background-color:transparent"><b>As Attribute :</b>&nbsp;</span><span style="line-height:1.5;background-color:transparent"><span style="font-size:13.6000003814697px;line-height:19.7200012207031px;color:rgb(0,153,51);font-family:Consolas,Liberation Mono,Menlo,Courier,monospace;background-color:rgb(247,247,247)">form-validation</span><span style="line-height:1.5;background-color:transparent">&nbsp;can be applied as attribute on &lt;form&gt; element.&nbsp;</span></span></li></ul>
<div>
<pre style="overflow:auto;margin-top:0px;margin-bottom:16px;font-stretch:normal;padding:16px;border-radius:3px;word-wrap:normal;background-color:rgb(247,247,247)"><font face="Consolas, Liberation Mono, Menlo, Courier, monospace"><span style="font-size:13.6000003814697px;line-height:19.7200012207031px"><font color="#009933">&lt;form name="myForm" </font><b><font color="#990000">form-validation="true"</font></b><font color="#009933"> &gt;

...

&lt;/form&gt;</font></span></font></pre>
</div>
<ul><li><span style="line-height:1.5;background-color:transparent"><b>As Element :</b> If form &nbsp;spans multiple pages, form elements on each page can be validated separately by enclosing form elements inside&nbsp;</span><span style="font-size:13.6000003814697px;line-height:19.7200012207031px;color:rgb(0,153,51);font-family:Consolas,Liberation Mono,Menlo,Courier,monospace;background-color:rgb(247,247,247)">&lt;form-validation&gt;.</span></li></ul>
</div>
<div>
<div>
<pre style="overflow:auto;margin-top:0px;margin-bottom:16px;font-stretch:normal;padding:16px;border-radius:3px;word-wrap:normal;background-color:rgb(247,247,247)"><font face="Consolas, Liberation Mono, Menlo, Courier, monospace"><span style="font-size:13.6000003814697px;line-height:19.7200012207031px"><font color="#009933">&lt;form name="myForm"&gt;

</font><b><font color="#990000">&lt;form-validation&gt;</font></b><font color="#009933">
&lt;input type="text" name="firstName"/&gt;
&lt;input type="text" name="lastName"/&gt;
&lt;input type="button" ng-click="nextPage()"/&gt;
</font><b><font color="#990000">&lt;/form-validation&gt;</font></b><font color="#009933">

</font><b><font color="#990000">&lt;form-validation&gt;</font></b><font color="#009933">
&lt;input type="text" name="email"/&gt;
&lt;input type="text" name="age"/&gt;
&lt;input type="button" ng-click="submit()"/&gt;
</font><b><font color="#990000">&lt;/form-validation&gt;</font></b><font color="#009933">

&lt;/form&gt;</font></span></font></pre>
</div>
<div><b style="line-height:1.5;background-color:transparent">&nbsp;2) form-element-validation</b><span style="line-height:1.5;background-color:transparent">&nbsp;: This directive is applied to the form elements which are candidate for form validation.&nbsp;</span></div>
<div><span style="line-height:1.5;background-color:transparent"><br>
</span></div>
<div>
<div>
<pre style="overflow:auto;margin-top:0px;margin-bottom:16px;font-stretch:normal;padding:16px;border-radius:3px;word-wrap:normal;background-color:rgb(247,247,247)"><font face="Consolas, Liberation Mono, Menlo, Courier, monospace"><span style="font-size:13.6000003814697px;line-height:19.7200012207031px"><font color="#009933">&lt;form name="myForm" form-validation="true" &gt;

</font><b><font color="#990000">&lt;form-element-validation&gt;</font></b><font color="#009933">
    &lt;input type="text" name="firstName" ng-required="true" ng-maxlength="30" ng-model="firstName"/&gt;
    ...
</font><b><font color="#990000">&lt;/form-element-validation&gt;</font></b><font color="#009933">

&lt;/form&gt;</font></span></font></pre>
</div>
<b style="line-height:1.5;background-color:transparent">&nbsp;3) ng-messages</b><span style="line-height:1.5;background-color:transparent">&nbsp;: This directive is used for rendering error message for the form element. &nbsp;A&nbsp;</span><b style="font-size:13.6000003814697px;line-height:19.7200012207031px;color:rgb(0,153,51);font-family:Consolas,Liberation Mono,Menlo,Courier,monospace;background-color:rgb(247,247,247)">&lt;div&gt;&nbsp;</b><span style="line-height:1.5;background-color:transparent">element with&nbsp;</span><b style="font-size:13.6000003814697px;line-height:19.7200012207031px;color:rgb(0,153,51);font-family:Consolas,Liberation Mono,Menlo,Courier,monospace;background-color:rgb(247,247,247)">ng-messages</b><b style="font-size:13.6000003814697px;line-height:19.7200012207031px;color:rgb(0,153,51);font-family:Consolas,Liberation Mono,Menlo,Courier,monospace;background-color:rgb(255,255,255)">&nbsp;</b><span style="line-height:1.5;background-color:transparent">should be placed as a sibling of the form element inside&nbsp;</span><span style="font-size:13.6000003814697px;line-height:19.7200012207031px;color:rgb(0,153,51);font-family:Consolas,Liberation Mono,Menlo,Courier,monospace;background-color:rgb(247,247,247)">&lt;form-element-validation&gt;</span><span style="line-height:1.5;background-color:transparent">.</span></div>
<div><span style="line-height:1.5;background-color:transparent"><br>
</span></div>
<div>
<div>
<pre style="overflow:auto;margin-top:0px;margin-bottom:16px;font-stretch:normal;padding:16px;border-radius:3px;word-wrap:normal;background-color:rgb(247,247,247)"><font face="Consolas, Liberation Mono, Menlo, Courier, monospace"><span style="font-size:13.6000003814697px;line-height:19.7200012207031px"><font color="#009933">
&lt;form-element-validation&gt;
    &lt;input type="text" name="firstName" ng-required="true" ng-maxlength="30" ng-model="firstName"/&gt;
  </font><span style="color:rgb(0,153,51)">&nbsp;&nbsp;</span><b><font color="#990000">&lt;div hidden="true" class="_popoverContent" ng-messages="myForm['firstName'].$error"&gt;
&nbsp;&nbsp; &nbsp;<span>&nbsp;&nbsp; &nbsp;<span>&nbsp;&nbsp; &nbsp;</span></span>&lt;span ng-message="required" class="inlineError"&gt;&lt;s:message code="error.required" /&gt;&lt;/span&gt;
&nbsp;&nbsp; &nbsp;<span>&nbsp;&nbsp; &nbsp;<span>&nbsp;&nbsp; &nbsp;</span></span>&lt;span ng-message="maxlength" class="inlineError"&gt;&lt;s:message code="error.maxlength" /&gt;&lt;/span&gt;
&nbsp;&nbsp; &nbsp;&lt;/div&gt;</font></b><font color="#009933">
&lt;/form-element-validation&gt;</font></span></font></pre>
</div>
<div>Reference for ng-messages : &nbsp;<a href="https://docs.angularjs.org/api/ngMessages/directive/ngMessages">https://docs.angularjs.org/api/ngMessages/directive/ngMessages</a></div>
<div><br>
</div>
<div><b><font size="3">Triggering Validation on Submit :</font></b></div>
<div><br>
</div>
<div>The validation logic is triggered automatically during the onSubmit event.</div>
<div><br>
</div>
<div>Sometimes, we would wan't to explicitly &nbsp;validate before the form submit. The validation can be explicitly triggered by broadcasting <span style="background-color:rgb(238,238,238)"><font color="#6aa84f">onSubmit </font></span>event.</div>
<div><br>
</div>
<div><b>Use case:</b> Multiple page forms</div>
<div><br>
</div>
<div>
<div>
<pre style="overflow:auto;margin-top:0px;margin-bottom:16px;font-stretch:normal;padding:16px;border-radius:3px;word-wrap:normal;background-color:rgb(247,247,247)"><font color="#009933" face="Consolas, Liberation Mono, Menlo, Courier, monospace"><span style="font-size:13.6000003814697px;line-height:19.7200012207031px">&lt;button ng-click="nextPage(formName.$invalid)"&gt;Submit&lt;/button&gt;


function </span></font><span style="font-size:13.6000003814697px;line-height:19.7200012207031px;color:rgb(0,153,51);font-family:Consolas,Liberation Mono,Menlo,Courier,monospace">nextPage</span><span style="font-size:13.6000003814697px;line-height:19.7200012207031px;color:rgb(0,153,51);font-family:Consolas,Liberation Mono,Menlo,Courier,monospace">(isInvalid){</span><br><font color="#009933" face="Consolas, Liberation Mono, Menlo, Courier, monospace"><span style="font-size:13.6000003814697px;line-height:19.7200012207031px">    if(isInvalid){
        $rootScope.$broadCast('onSubmit');
    }else{
        //logic for moving to next page
    }
}</span></font></pre>
</div>
<b style="line-height:1.5;background-color:transparent">&nbsp;This directive also supports activation of tab/accordion (which has the error field), on click of submit button.</b></div>
</div>
<ul></ul>
</div>
</div>
