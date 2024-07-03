import {useToast} from '../../../ui/use-toast'
import {IWuToastOptions} from '../types/IWuToastOptions'

export const useWuShowToast = (options?: IWuToastOptions) => {
  const {toast} = useToast()
  const {variant = 'default', duration = 5000} = options || {}
  return {
    showToast: (message: string) => {
      toast({description: message, duration, variant})
    },
  }
}
