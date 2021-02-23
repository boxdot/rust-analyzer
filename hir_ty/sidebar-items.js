initSidebarItems({"enum":[["CallableDefId",""],["GenericPredicate","Like `generics::WherePredicate`, but with resolved types: A condition on the parameters of a generic item."],["ImplTraitLoweringMode",""],["InferTy","The kinds of placeholders we need during type inference. There's separate values for general types, and for integer and float variables. The latter two are used for inference of literal values (e.g. `100` could be one of several integer types)."],["Lifetime",""],["OpaqueTyId",""],["Ty","A type."],["TyDefId",""],["TyKind",""],["TypeCtor","A type constructor or type name: this might be something like the primitive type `bool`, a struct like `Vec`, or things like function pointers or tuples."],["ValueTyDefId",""]],"fn":[["associated_type_shorthand_candidates",""],["autoderef",""],["callable_item_sig","Build the signature of a callable item (function, struct or enum variant)."],["param_idx","Return an index of a parameter in the generic type parameter list by it's id."]],"mod":[["db","FIXME: write short doc here"],["diagnostics","FIXME: write short doc here"],["display","FIXME: write short doc here"],["method_resolution","This module is concerned with finding methods that a given type provides. For details about how this works in rustc, see the method lookup page in the rustc guide and the corresponding code mostly in librustc_typeck/check/method/probe.rs."],["primitive","Defines primitive types, which have a couple of peculiarities:"],["traits","Trait solving using Chalk."]],"struct":[["ApplicationTy","A nominal type with (maybe 0) type parameters. This might be a primitive type like `bool`, a struct, tuple, function pointer, reference or several other things."],["Binders",""],["BoundVar","Identifies a particular bound variable within a binder. Variables are identified by the combination of a [`DebruijnIndex`], which identifies the binder, and an index within that binder."],["Canonical","Basically a claim (currently not validated / checked) that the contained type / trait ref contains no inference variables; any inference variables it contained have been replaced by bound variables, and `kinds` tells us how many there are and whether they were normal or float/int variables. This is used to erase irrelevant differences between types before using them in queries."],["DebruijnIndex","References the binder at the given depth. The index is a de Bruijn index, so it counts back through the in-scope binders, with 0 being the innermost binder. This is used in impls and the like. For example, if we had a rule like `for<T> { (T: Clone) :- (T: Copy) }`, then `T` would be represented as a `BoundVar(0)` (as the `for` is the innermost binder)."],["FnSig","A function signature as seen by type inference: Several parameter types and one return type."],["InferenceResult","The result of type inference: A mapping from expressions and patterns to types."],["OpaqueTy",""],["ProjectionTy","A \"projection\" type corresponds to an (unnormalized) projection like `<P0 as Trait<P1..Pn>>::Foo`. Note that the trait and all its parameters are fully known."],["ReturnTypeImplTraits",""],["Substs","A list of substitutions for generic parameters."],["SubstsBuilder",""],["TraitRef","A trait with type parameters. This includes the `Self`, so this represents a concrete type implementing the trait. Name to be bikeshedded: TraitBound? TraitImplements?"],["TyLoweringContext",""]],"trait":[["TypeWalk","This allows walking structures that contain types to do something with those types, similar to Chalk's `Fold` trait."]],"type":[["PolyFnSig","A polymorphic function signature."]]});