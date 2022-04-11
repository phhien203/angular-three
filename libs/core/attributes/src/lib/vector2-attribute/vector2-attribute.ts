// GENERATED
import {
    AnyFunction,
    makeVector2,
    NGT_INSTANCE_FACTORY,
    NgtInstance,
    NgtStore,
    provideInstanceFactory,
    NgtVector2,
} from '@angular-three/core';
import {
    ChangeDetectionStrategy,
    Component,
    Inject,
    Input,
    NgModule,
    NgZone,
    Optional,
    SkipSelf,
} from '@angular/core';
import * as THREE from 'three';
import type { Subscription } from 'rxjs';

@Component({
    selector: 'ngt-vector2[vector2]',
    template: '<ng-content></ng-content>',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [provideInstanceFactory<THREE.Vector2>(NgtVector2Attribute)],
})
export class NgtVector2Attribute extends NgtInstance<THREE.Vector2> {
    @Input() set vector2(vector2: NgtVector2) {
        this.zone.runOutsideAngular(() => {
            if (this.initSubscription) {
                this.initSubscription.unsubscribe();
            }

            this.initSubscription = this.onCanvasReady(
                this.store.ready$,
                () => {
                    this.set({
                        instance: this.prepareInstance(makeVector2(vector2)),
                    });

                    return () => {
                        this.initSubscription?.unsubscribe();
                    };
                },
                true
            );
        });
    }

    private initSubscription?: Subscription;

    constructor(
        zone: NgZone,
        store: NgtStore,
        @Optional()
        @SkipSelf()
        @Inject(NGT_INSTANCE_FACTORY)
        parentInstanceFactory: AnyFunction
    ) {
        super({ zone, store, parentInstanceFactory });
    }
}

@NgModule({
    declarations: [NgtVector2Attribute],
    exports: [NgtVector2Attribute],
})
export class NgtVector2AttributeModule {}
