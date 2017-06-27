# Lisa's notes from training

### Key-Value observable API: Observers

* Use beginPropertyChanges() and endPropertyChanges() to queue up changes, allowing for async notifications. 

* addObject() is a push() that fires observers. 

* Use observers very RARELY!

### reopen() vs reopenClass()

https://guides.emberjs.com/v2.13.0/object-model/reopening-classes-and-instances/

* Use extend() to modify Prototypes.  extend() returns a new type of object.

``` var Developer = Ember.Object.extend() {...} ```

* Use reopen() to modify Prototype, after a Prototype has been created allowing for further changes. 

You should only use reopen() if no instances of this Prototype has been created!

* Use reopenClass() to add static functions/ properties to a Constructor. 

**Reference notes:**

https://coderwall.com/p/qjzbig/understanding-constructor-and-prototype

https://stackoverflow.com/questions/14026302/difference-between-reopen-and-reopenclass-in-ember-js

### ConcatenatedProperties

When setting a property on a Constructor, by setting ```concatenatedProperties``` it will ensure any instance property changes  ```set() , get()``` are added to the original property

e.g.

```
Developer = Ember.Object.extend({
    languages: {js};
    concatenatedProperties: 'languages'
});

let Mike = Developer.new
Mike.set(languages: {html})

Mike.get(languages) = {js, html} 
```

Reference links:
https://www.emberjs.com/api/classes/Ember.CoreObject.html#property_concatenatedProperties

### Ember.object lifecycle

Reference link: 
https://guides.emberjs.com/v2.2.0/components/the-component-lifecycle/

### Helper {{ }}

```
{{ placeholder-url
"thing1"        //params[0]
"thing2"        //params[1]
align = "left   // hash.align
height = 24     //hash.height

}}
```

When passing data as arguments to a helper, always start with POSITIONAL parameters ("thing1") before the OBJECT hash (align=) .

* POSISTIONAL params will merge into an **array** 
* HASH will merge into an **object**

### One Way Data binding

**Data binding is the automatic synchronization of data between the model and view components.**

By default, Ember use two-way data binding.

Use the {{unbound}} helper to opt. into one-way data binding.   Unbound makes data insensitive to changes after rendering.

e.g.

```
Hello,
<strong>
{{unbound firstName}}
{{unbound lastName}}
</strong>
```