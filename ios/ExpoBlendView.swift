import ExpoModulesCore

// This view will be used as a native component. Make sure to inherit from `ExpoView`
// to apply the proper styling (e.g. border radius and shadows).
class ExpoBlendView: ExpoView {
    
    required init(appContext: AppContext? = nil){

        super.init(appContext:appContext)
        clipsToBounds = true
        
    }
    
}
