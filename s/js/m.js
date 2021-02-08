var ColoredButton = (function() {
    util.extend(ColoredButton, ui.Widget);
    function ColoredButton() {
        ui.Widget.call(this);
        this.defineAttr("color", (view, name, defaultGetter) =&gt; {
            return this._color;
        }, (view, name, value, defaultSetter) =&gt; {
            this._color = value;
            view.attr("backgroundTint", value);
        });
        //×Ô¶¨ÒåÊôÐÔonclick
        this.defineAttr("onClick", (view, name, defaultGetter) =&gt; {
            return this._onClick;
        }, (view, name, value, defaultSetter) =&gt; {
            this._onClick = value;
        });
    }
    ColoredButton.prototype.render = function() {
        return (
            <button textsize="12sp" style="Widget.AppCompat.Button.Colored" w="auto">
        );
    }
    ColoredButton.prototype.onViewCreated = function(view) {
        view.on("click", () =&gt; {
            if (this._onClick) {
                eval(this._onClick);
            }
        });
    }
    ui.registerWidget("colorbtn", ColoredButton);
    return ColoredButton;
})();
</button></body></html>
